import Goal from './Goal';

function GoalList({ goals }) {
  return (
    <div>
      {goals.map((goal) => (
        <Goal goal={goal} key={goal.id}>
          {goal.content}
        </Goal>
      ))}
    </div>
  );
}

export default GoalList;
