"use client";

import { newGoal } from "@/utils/actions";
import { useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";

function GoalForm() {
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    setInput("");
  };
  return (
    <section className="mt-16">
      <form action={newGoal} onSubmit={handleSubmit}>
        <div className="max-sm:flex-col w-full flex gap-6 justify-center items-center">
          <input
            required
            max="191"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="content"
            placeholder="Enter a new goal"
            type="text"
            id="goal"
            className="max-sm:w-4/5 shadow-md border border-dashed h-16 w-2/5 rounded-md border-black/25 px-9"
          />
          <button type="submit">
            <PlusCircle
              size={52}
              weight="fill"
              color="hsl(155, 67%, 45%)"
              className="ease-out hover:translate-y-1 transition-all"
            />
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
