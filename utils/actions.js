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

export const prioritizeGoal = async (id) => {
  await db.goal.update({
    where: { id },
    data: {
      prioritized: true,
    },
  });

  revalidatePath('/');
};

export const dePrioritizeGoal = async (id) => {
  await db.goal.update({
    where: { id },
    data: {
      prioritized: false,
    },
  });

  revalidatePath('/');
};
