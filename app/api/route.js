import { NextResponse } from 'next/server';
import db from '@/utils/db';

export const GET = async (request) => {
  const goals = await db.goal.findMany({});
  return NextResponse.json({ message: goals });
};

export const POST = async (request) => {
  const data = await request.json();
  const goal = await db.goal.create({
    data,
  });

  return NextResponse.json({ message: goal });
};
