'use client';

import { dePrioritizeGoal, prioritizeGoal } from '@/utils/actions';
import { useState } from 'react';

export default Goal;

function Goal({ goal }) {
  const [isprioritized, setIsPrioritized] = useState(false);

  function updateGoal() {
    setIsPrioritized(!isprioritized);
    if (isprioritized) {
      dePrioritizeGoal(goal.id);
    } else if (!isprioritized) {
      prioritizeGoal(goal.id);
    }
  }

  return (
    <div className={`${goal.prioritized ? 'bg-green-300' : 'text-gray-400'}`}>
      <p>{goal.content}</p>
      <button onClick={() => updateGoal()}>
        {goal.prioritized ? 'Deprioritize' : 'Prioritize'}
      </button>
    </div>
  );
}
