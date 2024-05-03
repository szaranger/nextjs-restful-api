import { NextResponse } from 'next/server';

export async function GET(request) {
  const response = { name: "John Doe" };
  return NextResponse.json(response);
} 

export async function POST(request) {
  const { name } = await request.json();

  return NextResponse.json(name);
}

export async function PATCH(request) {
  const { name } = await request.json();

  return NextResponse.json(name);
}

export async function PUT(request) {
  const { name } = await request.json();

  return NextResponse.json(name);
}

export async function DELETE(request) {
  const { name } = await request.json();

  return NextResponse.json(name);
}