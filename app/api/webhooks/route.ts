import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  const payload = await req.json();
  const signature = req.headers.get('x-hub-signature-256');

  // 1. Security Check (Optional but Recommended)
  // Verify that this actually came from your GitHub
  const hmac = crypto.createHmac('sha256', process.env.GITHUB_WEBHOOK_SECRET!);
  const digest = 'sha256=' + hmac.update(JSON.stringify(payload)).digest('hex');
  
  if (signature !== digest) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const commitMessage = payload.head_commit?.message;
  const repoName = payload.repository.name;

  if (!commitMessage || commitMessage.includes('chore:')) {
    return NextResponse.json({ message: 'Skipping minor update' });
  }

  // 2. AI Translation for Designers
  const aiPrompt = `
    Context: I am working on a project called ${repoName}. 
    Recent Update: "${commitMessage}"
    Task: Write a punchy LinkedIn post for Canva Designers and Social Media Managers. 
    Focus on benefits (speed, quality, trendiness). No 'dev' jargon like 'refactored' or 'fixed bug'.
  `;

  // Call your AI API (Gemini/OpenAI) here...
  // const postContent = await callAI(aiPrompt);

  // 3. Post to LinkedIn
  // await postToLinkedIn(postContent);

  return NextResponse.json({ success: true, repo: repoName });
}