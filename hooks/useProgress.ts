import { useGoal } from "../context/GoalContext";

// @ This Hook is used to get the daily progress of the user
// @ It will return the progress of the user
export default function useProgress() {
  const { state } = useGoal();
  const { goals } = state;

  const today = new Date().toISOString().split("T")[0]; //? Todays Date

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
