import Goal from "./Goal";

function GoalList({ goals }) {
  const filterPrioritized = goals.filter((goal) => goal.prioritized === true);
  const filterDeprioritized = goals.filter(
    (goal) => goal.prioritized === false,
  );

  return (
    <section className="ml-9 my-32">
      <div className="flex flex-col items-center justify-center gap-9">
        {filterPrioritized.map((goal, index) => (
          <Goal index={index} goal={goal} key={goal.id}>
            {goal.content}
          </Goal>
        ))}
      </div>
      <br />
      <div className="flex flex-col items-center justify-center gap-9">
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
