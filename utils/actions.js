'use server';
import { revalidatePath } from 'next/cache';
import db from './db';

export const newGoal = async (formData) => {
  const goal = await db.goal.create({
    data: {
      content: formData.get('content'),
    },
  });

  revalidatePath('/');
};
