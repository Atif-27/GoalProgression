import { useGoal } from "../context/GoalContext";

export default function useProgress() {
  const { state } = useGoal();
  const { goals } = state;

  const today = new Date().toISOString().split("T")[0]; //? Todays Date
  console.log(today);

  // ! Todays Goal
  const todaysGoals = goals.filter(
    (goal) => goal.createdAt === today && goal.isTracked
  );
  // ! Todays Completed Goals
  const completedTodaysGoals = todaysGoals.filter((goal) => goal.isComplete);
  // ! Todays Progress

  const progress =
    (completedTodaysGoals.length / todaysGoals.length || 0) * 100;

  return {
    progress,
    todaysGoals: todaysGoals.length,
    completedTodaysGoals: completedTodaysGoals.length,
  };
}
