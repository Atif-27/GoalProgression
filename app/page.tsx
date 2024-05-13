"use client";
import GoalList from "@/components/GoalList";
import ProgressBox from "@/components/ProgressBox";
import DragSlider from "@/components/DragSlider";
import ProgressChart from "@/components/ProgressChart";

// @ This is the Home Page of the Application
// @ It contains all the components required to display the progress of the user
// @ It contains the ProgressBox, GoalList, DragSlider, and ProgressChart
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
