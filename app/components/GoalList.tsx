"use client";
import { useGoal } from "../context/GoalContext";
import GoalCard from "./GoalCard";

export default function GoalList() {
  const { state } = useGoal();
  const { goals } = state;
  return (
    <section className="flex flex-col gap-4 md:text-xl">
      {goals &&
        goals.map((goal) => (
          <div key={goal.id}>
            <GoalCard goal={goal} />
          </div>
        ))}
    </section>
  );
}
