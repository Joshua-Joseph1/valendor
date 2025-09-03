// app/api/zapier/route.ts
import { NextResponse } from 'next/server';

// Define the shape of the request body
interface ZapierRequestBody {
  [key: string]: any; // Flexible to accept any data structure
}

// Define the shape of the Zapier response
interface ZapierResponse {
  status: string;
  [key: string]: any;
}

export async function POST(req: Request) {
  try {
    const body: ZapierRequestBody = await req.json();

    const response = await fetch('https://hooks.zapier.com/hooks/catch/15249185/uh7jg9o/', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Zapier responded with status: ${response.status}`);
    }

    const data: ZapierResponse = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error forwarding to Zapier:', error);
    return NextResponse.json({ error: 'Failed to send data to Zapier' }, { status: 500 });
  }
}