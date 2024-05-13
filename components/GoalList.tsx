"use client";
import { useGoal } from "../context/GoalContext";
import GoalCard from "./GoalCard";
import Image from "next/image";
import HeartImage from "@/public/heart.png";
import type { Color } from "@tremor/react";

// @ This component is used to create a list of goals
// @ It will return a list of goals
export default function GoalList() {
  const { state } = useGoal();
  const { goals } = state;
  const today = new Date().toISOString().split("T")[0]; //? Todays Date
  const todaysGoals = goals.filter((goal) => goal.createdAt === today);

  const colors = ["red", "violet", "lime", "lime"];

  return (
    <section className="flex flex-col gap-4 md:text-xl">
      <div className="flex justify-between max-w-md">
        <h1 className="text-xl">Today&apos;s Goals</h1>
        <Image src={HeartImage} alt="Heart" width={30} height={30} />
      </div>
      {todaysGoals &&
        todaysGoals.map((goal, index) => (
          <div key={goal.id}>
            <GoalCard goal={goal} color={colors[index] as Color} />
          </div>
        ))}
    </section>
  );
}
