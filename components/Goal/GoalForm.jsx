import { newGoal } from '@/utils/actions';

function GoalForm() {
  return (
    <section>
      <form action={newGoal}>
        <label htmlFor="goal">
          Write your goal here:
          <input name="content" type="text" id="goal" className="border border-black/25" />
        </label>
        <button type="submit">Add a goal</button>
      </form>
    </section>
  );
}

export default GoalForm;
