import { liveSchedule } from '@/data/live-schedule';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(liveSchedule);
}

