"use client";
import { useGoal } from "../context/GoalContext";
import GoalCard from "./GoalCard";
import Image from "next/image";
import HeartImage from "@/public/heart.png";
export default function GoalList() {
  const { state } = useGoal();
  const { goals } = state;
  const today = new Date().toISOString().split("T")[0]; //? Todays Date
  const todaysGoals = goals.filter((goal) => goal.createdAt === today);
  return (
    <section className="flex flex-col gap-4 md:text-xl">
      <div className="flex justify-between max-w-md">
        <h1 className="text-xl">Today&apos;s Goals</h1>
        <Image src={HeartImage} alt="Heart" width={30} height={30} />
      </div>
      {todaysGoals &&
        todaysGoals.map((goal) => (
          <div key={goal.id}>
            <GoalCard goal={goal} />
          </div>
        ))}
    </section>
  );
}
