'use client';

import { newGoal } from '@/utils/actions';
import { useState } from 'react';

function GoalForm() {
  const [input, setInput] = useState('');
  const handleSubmit = () => {
    setInput('');
  };
  return (
    <section>
      <form action={newGoal} onSubmit={handleSubmit}>
        <label htmlFor="goal">
          Write your goal here:
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="content"
            type="text"
            id="goal"
            className="border border-black/25"
          />
        </label>
        <button type="submit">Add a goal</button>
      </form>
    </section>
  );
}

export default GoalForm;
