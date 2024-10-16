import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';

  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  
  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }

  const products = await res.json();

  return NextResponse.json({ products }, { status: 200 });
}
