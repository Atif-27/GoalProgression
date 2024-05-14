import { GiWeightLiftingUp } from "react-icons/gi";
import { FaFire } from "react-icons/fa";
import { GoalState } from "@/interface/GoalTypes";

// @ This is the initial state of the Goal Context

export const initialState: GoalState = {
  goals: [
    {
      id: 1,
      name: "Workout for 20 mins",
      isTracked: false,
      isComplete: false,
      icon: GiWeightLiftingUp,
      createdAt: new Date().toISOString().split("T")[0],
    },
    {
      id: 2,
      name: "Read Book For 15 mins",
      isTracked: false,
      isComplete: false,
      icon: FaFire,
      createdAt: new Date().toISOString().split("T")[0],
    },
    {
      id: 3,
      name: "Workout for 20 mins",
      isTracked: false,
      isComplete: false,
      icon: GiWeightLiftingUp,
      createdAt: new Date().toISOString().split("T")[0],
    },
    {
      id: 4,
      name: "Read Book For 15 mins",
      isTracked: true,
      isComplete: true,
      icon: GiWeightLiftingUp,
      createdAt: "2024-05-12",
    },
    {
      id: 5,
      name: "Read Book For 15 mins",
      isTracked: true,
      isComplete: false,
      icon: GiWeightLiftingUp,
      createdAt: "2024-05-12",
    },
    {
      id: 6,
      name: "Read Book For 15 mins",
      isTracked: true,
      isComplete: false,
      icon: GiWeightLiftingUp,
      createdAt: "2024-05-12",
    },
    {
      id: 7,
      name: "Read Book For 15 mins",
      isTracked: true,
      isComplete: true,
      icon: GiWeightLiftingUp,
      createdAt: "2024-05-10",
    },
    {
      id: 8,
      name: "Read Book For 15 mins",
      isTracked: true,
      isComplete: true,
      icon: GiWeightLiftingUp,
      createdAt: "2024-05-07",
    },
    {
      id: 9,
      name: "Read Book For 15 mins",
      isTracked: true,
      isComplete: false,
      icon: GiWeightLiftingUp,
      createdAt: "2024-05-07",
    },
  ],
};
