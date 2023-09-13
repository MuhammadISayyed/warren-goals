'use client';

import { dePrioritizeGoal, prioritizeGoal, countGoals } from '@/utils/actions';
import { useEffect, useState } from 'react';
import DisabledButton from '../DisabledButton';

function Goal({ goal, index }) {
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
      <p>
        {goal.prioritized ? index + 1 : undefined}
        {goal.content}
      </p>
      {goal.prioritized ? (
        <button onClick={updateGoal}>Deprioritize</button>
      ) : !disabled ? (
        <button onClick={updateGoal}>Prioritize</button>
      ) : (
        <DisabledButton>
          <button disabled={disabled} onClick={updateGoal}>
            Prioritize
          </button>
        </DisabledButton>
      )}
    </div>
  );
}

export default Goal;
