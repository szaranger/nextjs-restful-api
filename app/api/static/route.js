import { NextResponse } from 'next/server';

export async function GET(request) {
  const response = { name: "Hello from the STATIC route!" };
  return NextResponse.json(response);
} 