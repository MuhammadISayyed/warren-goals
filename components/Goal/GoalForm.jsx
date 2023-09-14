'use client';

import { newGoal } from '@/utils/actions';
import { useState } from 'react';

function GoalForm() {
  const [input, setInput] = useState('');
  const handleSubmit = () => {
    setInput('');
  };
  return (
    <section className="my-12">
      <form
        action={newGoal}
        onSubmit={handleSubmit}
        className="flex gap-9 justify-center items-center"
      >
        <input
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="content"
          placeholder="Enter a new goal"
          type="text"
          id="goal"
          className="border border-black/25 w-2/3 h-32 px-9 rounded-full"
        />
        <button type="submit" className="w-1/5 bg-green-400 h-32 rounded-full ">
          Add a goal
        </button>
      </form>
    </section>
  );
}

export default GoalForm;
