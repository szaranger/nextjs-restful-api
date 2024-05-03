import { NextResponse } from 'next/server';

export async function GET(request) {
  const response = { name: "John Doe" };
  return NextResponse.json(response);
} 