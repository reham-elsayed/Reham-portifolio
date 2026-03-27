// app/api/auth/callback/linkedin/route.ts
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  if (!code) return NextResponse.json({ error: 'No code provided' }, { status: 400 });

  const tokenUrl = 'https://www.linkedin.com/oauth/v2/accessToken';
  
  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    client_id: process.env.LINKEDIN_CLIENT_ID!,
    client_secret: process.env.LINKEDIN_CLIENT_SECRET!,
    redirect_uri: process.env.LINKEDIN_REDIRECT_URI!,
  });

  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });

    const data = await response.json();

    // WARNING: In a real app, you'd save data.access_token to a database.
    // For now, we will just display it so you can copy it to Vercel.
    return NextResponse.json({ 
      message: "Success! Copy this token to your Vercel Env Variables",
      access_token: data.access_token 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to exchange code for token' }, { status: 500 });
  }
}