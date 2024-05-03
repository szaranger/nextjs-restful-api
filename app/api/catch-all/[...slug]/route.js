import { NextResponse } from 'next/server';

export async function GET(request,{ params }) {
  const slugs = params.slug;

  return NextResponse.json({ slugs });
}