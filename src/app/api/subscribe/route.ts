import { NextRequest, NextResponse } from 'next/server';

const BEEHIIV_PUB_ID = process.env.BEEHIIV_PUB_ID || '';
const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY || '';

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          utm_source: 'cf-resources',
          utm_medium: 'website',
          utm_campaign: source || 'unknown',
          referring_site: 'https://resources.councilfire.org',
        }),
      }
    );

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      console.error('Beehiiv error:', res.status, data);
      return NextResponse.json({ error: 'Subscription failed. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
