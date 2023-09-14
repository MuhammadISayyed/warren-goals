'use client';

import { dePrioritizeGoal, prioritizeGoal, deleteGoal, countGoals } from '@/utils/actions';
import { useEffect, useState } from 'react';
import DisabledButton from '../DisabledButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

  function handleDelete() {
    deleteGoal(goal.id);
  }

  return (
    <Card className={` w-2/5 py-12  ${goal.prioritized ? 'bg-green-300' : 'text-gray-400'}`}>
      <CardContent>
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col items-start justify-between ml-3">
            <span>{goal.prioritized ? index + 1 : undefined}</span>
            <p className=" flex-grow">{goal.content}</p>
          </div>
          {goal.prioritized ? (
            <Button onClick={updateGoal}>Deprioritize</Button>
          ) : !disabled ? (
            <div className="flex flex-col gap-3">
              <Button variant="secondary" onClick={updateGoal}>
                Prioritize
              </Button>
              <Button variant="destructive" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <DisabledButton>
                <div>
                  <Button variant="secondary" disabled={disabled}>
                    Prioritize
                  </Button>
                </div>
              </DisabledButton>
              <Button variant="destructive" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default Goal;
