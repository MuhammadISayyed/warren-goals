function GoalForm() {
  return (
    <section>
      <form>
        <label htmlFor='goal'>
          Write your goal here:
          <input type='text' id='goal' className='border border-black/25' />
        </label>
        <button type='submit'>Add a goal</button>
      </form>
    </section>
  );
}

export default GoalForm;
