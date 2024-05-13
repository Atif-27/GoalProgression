"use client";
import GoalList from "@/components/GoalList";
import ProgressBox from "@/components/ProgressBox";
import DragSlider from "@/components/DragSlider";
import ProgressChart from "@/components/ProgressChart";

export default function Home() {
  return (
    <main className="max-sm:p-4 flex flex-col gap-4">
      <ProgressBox />
      <GoalList />
      <DragSlider />
      <ProgressChart />
    </main>
  );
}
