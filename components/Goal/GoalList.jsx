import Goal from './Goal';

function GoalList({ goals }) {
  const filterPrioritized = goals.filter((goal) => goal.prioritized === true);
  const filterDeprioritized = goals.filter((goal) => goal.prioritized === false);

  return (
    <>
      <div>
        {filterPrioritized.map((goal) => (
          <Goal goal={goal} key={goal.id}>
            {goal.content}
          </Goal>
        ))}
      </div>
      <br />
      <div>
        {filterDeprioritized.map((goal) => (
          <Goal goal={goal} key={goal.id}>
            {goal.content}
          </Goal>
        ))}
      </div>
    </>
  );
}

export default GoalList;
