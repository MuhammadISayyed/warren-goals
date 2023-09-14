import Goal from './Goal';

function GoalList({ goals }) {
  const filterPrioritized = goals.filter((goal) => goal.prioritized === true);
  const filterDeprioritized = goals.filter((goal) => goal.prioritized === false);

  return (
    <section className="ml-9 mt-32">
      <div className="flex gap-9 flex-col justify-center items-center">
        {filterPrioritized.map((goal, index) => (
          <Goal index={index} goal={goal} key={goal.id}>
            {goal.content}
          </Goal>
        ))}
      </div>
      <br />
      <div className="flex gap-9 flex-col justify-center items-center">
        {filterDeprioritized.map((goal, index) => (
          <Goal index={index} goal={goal} key={goal.id}>
            {goal.content}
          </Goal>
        ))}
      </div>
    </section>
  );
}

export default GoalList;
