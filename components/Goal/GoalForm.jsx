function GoalForm() {
  return (
    <section>
      <form action='submit' name='goal'>
        <label htmlFor='goal'>
          Write your goal here:
          <input type='text' id='goal' className='border border-black/25' />
        </label>
      </form>
    </section>
  );
}

export default GoalForm;
