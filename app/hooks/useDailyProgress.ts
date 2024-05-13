import { useGoal } from "../context/GoalContext";

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
    totalGoals: number;
    completedGoals: number;
  }
  const last7daysGoals: last7daysType[] = last7days.map((day) => {
    const goalsOfDay = goals.filter((goal) => goal.createdAt === day);
    const trackedGoals = goalsOfDay.filter((goal) => goal.isTracked);
    const completedGoals = trackedGoals.filter((goal) => goal.isComplete);
    return {
      date: day,
      totalGoals: goalsOfDay.length,
      completedGoals: completedGoals.length,
    };
  });

  return { last7daysGoals };
}
