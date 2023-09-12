'use client';

import { dePrioritizeGoal, prioritizeGoal, countGoals } from '@/utils/actions';
import { useEffect, useState } from 'react';

function Goal({ goal }) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    async function updateBtn() {
      const counter = await countGoals();
      if (counter >= 5) {
        setDisabled(true);
      } else if (counter <= 5) {
        setDisabled(false);
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
        <button required onClick={updateGoal}>
          Deprioritize
        </button>
      ) : (
        <button required disabled={disabled} onClick={updateGoal}>
          Prioritize
        </button>
      )}
    </div>
  );
}

export default Goal;
