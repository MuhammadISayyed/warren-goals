"use client";

import { newGoal } from "@/utils/actions";
import { useState } from "react";

function GoalForm() {
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    setInput("");
  };
  return (
    <section className="my-12">
      <form
        action={newGoal}
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-9"
      >
        <input
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="content"
          placeholder="Enter a new goal"
          type="text"
          id="goal"
          className="h-32 w-2/3 rounded-full border border-black/25 px-9"
        />
        <button type="submit" className="h-32 w-1/5 rounded-full bg-green-400 ">
          Add a goal
        </button>
      </form>
    </section>
  );
}

export default GoalForm;
