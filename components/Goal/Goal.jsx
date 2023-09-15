"use client";

import {
  dePrioritizeGoal,
  prioritizeGoal,
  deleteGoal,
  countGoals,
} from "@/utils/actions";
import { useEffect, useState } from "react";
import DisabledButton from "../DisabledButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <Card
      className={` max-sm:w-4/5 w-2/5 py-3  ${
        goal.prioritized ? "" : "text-gray-400"
      }`}
    >
      <CardContent>
        <div className="max-sm:flex-row max-sm:gap-3 max-sm:justify-center max-sm:items-center flex flex-col items-start justify-between gap-6">
          <span
            className={`${
              goal.prioritized
                ? "max-sm:w-6 max-sm:h-6 max-sm:leading-6 bg-greenly ease-in hover:translate-y-1 transition-all shadow-md text-white w-9 h-9 leading-9 rounded-full inline-block text-center"
                : undefined
            }`}
          >
            {goal.prioritized ? index + 1 : undefined}
          </span>
          <div className="max-sm:flex-col flex justify-between w-full items-center gap-6">
            <p className=" flex-grow">{goal.content}</p>
            {goal.prioritized ? (
              <Button
                variant="secondary"
                onClick={updateGoal}
                className="text-gray-500"
              >
                Deprioritize
              </Button>
            ) : !disabled ? (
              <div className="max-sm:flex-row max-sm:gap-3 flex flex-col gap-6">
                <Button
                  variant="secondary"
                  onClick={updateGoal}
                  className="text-gray-500"
                >
                  Prioritize
                </Button>
                <Button
                  className="bg-white border-2 border-red-300 hover:text-white hover:border-none text-gray-500"
                  variant="destructive"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <DisabledButton>
                  <div>
                    <Button
                      variant="secondary"
                      disabled={disabled}
                      className="text-gray-500"
                    >
                      Prioritize
                    </Button>
                  </div>
                </DisabledButton>
                <Button
                  variant="destructive"
                  onClick={handleDelete}
                  className='text-gray-500 className="bg-white border-2 border-red-300 hover:text-white hover:border-none"'
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Goal;
