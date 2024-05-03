import { NextResponse } from 'next/server';

export async function GET(request) {
  const response = { name: "OK" };
  return NextResponse.json(response);
} 
