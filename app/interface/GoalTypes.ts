import { IconType } from "react-icons";

export type Goal = {
  id: number;
  name: string;
  isTracked: boolean;
  isComplete: boolean;
  createdAt?: string;
  icon: IconType;
};

export type GoalState = {
  goals: Goal[];
};

export type GoalAction =
  | { type: "ADD_GOAL"; goal: Goal }
  | { type: "DELETE_GOAL"; id: number }
  | { type: "TOGGLE_TRACK_GOAL"; id: number }
  | { type: "TOGGLE_COMPLETE"; id: number }
  | { type: "TRACK_ALL_GOAL" };
