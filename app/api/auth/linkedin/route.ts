
import { NextResponse } from 'next/server';

export async function GET() {
  const rootUrl = 'https://www.linkedin.com/oauth/v2/authorization';
  
  const options = {
    response_type: 'code',
    client_id: process.env.LINKEDIN_CLIENT_ID!,
    redirect_uri: process.env.LINKEDIN_REDIRECT_URI!,
    state: 'random_string_123', // For security
    scope: 'openid profile w_member_social email', 
  };

  const qs = new URLSearchParams(options).toString();
  return NextResponse.redirect(`${rootUrl}?${qs}`);
}