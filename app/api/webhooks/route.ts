import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { callAI } from '@/lib/callAi';
import { generateAIPost } from '@/lib/generateAiPost';

export async function POST(req: Request) {
  const eventType = req.headers.get('x-github-event');
  const bodyText = await req.text();
  const payload = JSON.parse(bodyText);

  // 1. Security: Verify the GitHub Secret
  const signature = req.headers.get('x-hub-signature-256');
  const hmac = crypto.createHmac('sha256', process.env.GITHUB_WEBHOOK_SECRET!);
  const digest = `sha256=${hmac.update(bodyText).digest('hex')}`;
  
  if (signature !== digest) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
const assetPath = "assets/preview.png"; 
  const githubRawUrl = `https://raw.githubusercontent.com/${payload.repository.full_name}/main/${assetPath}`;
  let imageUrn = "";
  try {
    const imageBuffer = await getImageAsBuffer(githubRawUrl);

     imageUrn = await uploadAssetToLinkedIn(imageBuffer);}catch(e){
      console.log(e);
    }
  let aiPrompt = "";

  // 2. Route the Event to the right "Story"
  switch (eventType) {
    case 'pull_request':
      // ONLY post when a feature is actually finished (merged)
      if (payload.action === 'closed' && payload.pull_request.merged) {
        aiPrompt = `I just officially merged a new feature into ${payload.repository.name}: "${payload.pull_request.title}". Context: ${payload.pull_request.body}`;
      }
      break;

    case 'release':
      // ONLY post when a release is actually published
      if (payload.action === 'published') {
        aiPrompt = `Big Milestone! I just launched ${payload.release.tag_name} for ${payload.repository.name}. Check out the release notes: ${payload.release.body}`;
      }
      break;

    case 'push':
      // Detect README/Documentation updates specifically
      const isDocUpdate = payload.head_commit?.modified.some((f: string) => f.toLowerCase().includes('readme.md'));
      if (isDocUpdate) {
        aiPrompt = `I've updated the documentation for ${payload.repository.name} to make it easier for designers to get started. Update: ${payload.head_commit.message}`;
      }
      break;

    case 'issues':
      // ONLY post when you CLOSE a bug (shows you are active and fixing things)
      if (payload.action === 'closed') {
        aiPrompt = `Bug squashed in ${payload.repository.name}! Just resolved: ${payload.issue.title}. Improving the user experience one step at a time.`;
      }
      break;

    case 'watch': // GitHub uses 'watch' for Star events
      if (payload.action === 'started') {
        // You might want to wait for "10 stars" or "50 stars" before posting
        aiPrompt = `So grateful! ${payload.repository.name} just got another star on GitHub. Thanks for the support, design community!`;
      }
      break;

    default:
      return NextResponse.json({ message: 'Event ignored' });
  }

  // 3. If we have a prompt, send it to the AI and then LinkedIn
  if (aiPrompt) {
   const postContent = await generateAIPost(payload.repository.name, payload.pull_request);

if (postContent) {
  await postToLinkedIn(postContent, imageUrn); 
  return NextResponse.json({ success: true, message: "Post Published!" });
} else {
  return NextResponse.json({ error: "AI failed to generate content" }, { status: 500 });
}
}

  return NextResponse.json({ message: 'Action within event was not a milestone' });
}