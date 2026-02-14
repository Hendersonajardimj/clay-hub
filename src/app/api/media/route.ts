import { mediaCatalog } from '@/data/media-catalog';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(mediaCatalog);
}

