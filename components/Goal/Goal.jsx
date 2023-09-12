'use client';

import { dePrioritizeGoal, prioritizeGoal } from '@/utils/actions';

function Goal({ goal }) {
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
      <button onClick={() => updateGoal()}>
        {goal.prioritized ? 'Deprioritize' : 'Prioritize'}
      </button>
    </div>
  );
}

export default Goal;
