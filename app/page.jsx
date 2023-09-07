import GoalForm from '@/components/Goal/GoalForm';
import GoalList from '@/components/Goal/GoalList';
import db from '@/utils/db';

const getGoals = async () => {
  const goals = await db.goal.findMany({});
  return goals;
};

export default async function Home() {
  const goals = await getGoals();
  return (
    <>
      <h1>Goals by Warren</h1>
      <GoalForm />
      <GoalList goals={goals}></GoalList>
    </>
  );
}
