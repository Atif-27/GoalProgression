import { useGoal } from "../context/GoalContext";

// @ This Hook is used to get the daily progress of the user in the last 7 days
// @ It will return the progress of the user in the last 7 days
export default function useDailyProgress() {
  const { state } = useGoal();
  const { goals } = state;
  const last7days = [...Array(7)].map((_, i) => {
    return new Date(Date.now() - i * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];
  });
  interface last7daysType {
    date: string;
    progress: number;
  }
  const last7daysGoals: last7daysType[] = last7days
    .map((day) => {
      const goalsOfDay = goals.filter((goal) => goal.createdAt === day);
      const trackedGoals = goalsOfDay.filter((goal) => goal.isTracked);
      const completedGoals = trackedGoals.filter((goal) => goal.isComplete);
      return {
        date: day.slice(day.indexOf("-") + 1).replace("-", "/"),
        progress: (completedGoals.length / trackedGoals.length || 0) * 100,
      };
    })
    .reverse();

  return { last7daysGoals };
}
