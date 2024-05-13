"use client";
import GoalList from "./components/GoalList";
import ProgressBox from "./components/ProgressBox";
import DragSlider from "./components/DragSlider";
import useDailyProgress from "./hooks/useDailyProgress";

export default function Home() {
  const { last7daysGoals } = useDailyProgress();
  console.log(last7daysGoals);

  return (
    <main>
      <ProgressBox />
      <GoalList />
      <DragSlider />
    </main>
  );
}
