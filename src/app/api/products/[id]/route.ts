import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params; // Extract the product ID from the params
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  const product = await res.json();
  return NextResponse.json(product, { status: 200 });
}
