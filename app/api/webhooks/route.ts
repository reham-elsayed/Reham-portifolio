import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  // --- EDGE CASE 1: Security (Authenticity) ---
  // Verify the request actually came from GitHub using the Secret you set in the repo settings.
  const signature = req.headers.get('x-hub-signature-256');
  const bodyText = await req.text(); // Get raw text for signature verification
  
  const hmac = crypto.createHmac('sha256', process.env.GITHUB_WEBHOOK_SECRET!);
  const expectedSignature = `sha256=${hmac.update(bodyText).digest('hex')}`;

  if (!signature || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = JSON.parse(bodyText);

  // --- EDGE CASE 2: Noisy Commits ---
  // Don't post about "chore", "fix", or "test" commits. Only post about "feat" (Features).
  const latestCommit = payload.head_commit;
  if (!latestCommit?.message.startsWith('feat:')) {
    return NextResponse.json({ message: 'Skipped: Not a feature commit' }, { status: 200 });
  }

  // --- EDGE CASE 3: Avoid "Double Posting" ---
  // GitHub sometimes retries webhooks. Use the unique Delivery ID to prevent duplicates.
  const deliveryId = req.headers.get('x-github-delivery');
  // Optional: Check deliveryId against a simple Vercel KV or database.

  try {
    // 2. Translate Commit to "Designer Speak" via AI
    const postContent = await generateAIPost(latestCommit.message, payload.repository.name);

    // 3. Post to LinkedIn
    const result = await postToLinkedIn(postContent);

    return NextResponse.json({ success: true, linkedInId: result.id });
  } catch (error: any) {
    console.error('Webhook Error:', error.message);
    
    // --- EDGE CASE 4: LinkedIn Token Expiry ---
    if (error.status === 401) {
      // Logic to send yourself an email: "Hey, your LinkedIn Token expired!"
    }

    return NextResponse.json({ error: 'Processing failed' }, { status: 500 });
  }
}