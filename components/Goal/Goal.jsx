'use client';

import { dePrioritizeGoal, prioritizeGoal } from '@/utils/actions';
import { countGoals } from '@/utils/actions';
import { useEffect, useState } from 'react';

function Goal({ goal }) {
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    async function updateBtn() {
      const counter = await countGoals();
      if (counter >= 5) {
        setBtn(true);
      }
    }
    updateBtn();
  }, [goal]);

  function updateGoal() {
    if (goal.prioritized === false) {
      prioritizeGoal(goal.id);
    } else if (goal.prioritized === true) {
      dePrioritizeGoal(goal.id);
    }
  }

  return (
    <div className={`${goal.prioritized ? 'bg-green-300' : 'text-gray-400'}`}>
      <p>{goal.content}</p>
      {goal.prioritized ? (
        <button onClick={updateGoal}>Deprioritize</button>
      ) : (
        <button disabled={btn} onClick={updateGoal}>
          Prioritize
        </button>
      )}
    </div>
  );
}

export default Goal;
