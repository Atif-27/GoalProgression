"use client";
import React, { createContext, useReducer } from "react";
import { GoalState, GoalAction } from "../interface/GoalTypes";
import { GiWeightLiftingUp } from "react-icons/gi";

const initialState: GoalState = {
  goals: [
    {
      id: 1,
      name: "Workout for 20 mins",
      isTracked: false,
      isComplete: false,
      icon: GiWeightLiftingUp,
      createdAt: "2024-05-13",
    },
    {
      id: 2,
      name: "Read Book For 15 mins",
      isTracked: false,
      isComplete: false,
      icon: GiWeightLiftingUp,
      createdAt: "2024-05-13",
    },
    {
      id: 3,
      name: "Workout for 20 mins",
      isTracked: false,
      isComplete: false,
      icon: GiWeightLiftingUp,
      createdAt: "2024-05-13",
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

// ! Goal Reducer
const goalReducer = (state: GoalState, action: GoalAction): GoalState => {
  switch (action.type) {
    case "ADD_GOAL":
      return {
        ...state,
        goals: [...state.goals, action.goal],
      };
    case "DELETE_GOAL":
      return {
        ...state,
        goals: state.goals.filter((goal) => goal.id !== action.id),
      };
    case "TOGGLE_TRACK_GOAL":
      return {
        ...state,
        goals: state.goals.map((goal) =>
          goal.id === action.id ? { ...goal, isTracked: !goal.isTracked } : goal
        ),
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        goals: state.goals.map((goal) =>
          goal.id === action.id
            ? { ...goal, isComplete: !goal.isComplete }
            : goal
        ),
      };
    case "TRACK_ALL_GOAL":
      return {
        ...state,
        goals: state.goals.map((goal) => ({ ...goal, isTracked: true })),
      };
    default:
      return state;
  }
};

export const GoalContext = createContext<{
  state: GoalState;
  dispatch: React.Dispatch<GoalAction>;
}>({ state: initialState, dispatch: () => null });

// ! Goal Provider Component
export default function GoalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(goalReducer, initialState);

  return (
    <GoalContext.Provider value={{ state, dispatch }}>
      {children}
    </GoalContext.Provider>
  );
}

// ! Custom Hook to use Goal Context
export function useGoal() {
  const context = React.useContext(GoalContext);
  if (!context) {
    throw new Error("useGoal must be used within a GoalProvider");
  }
  return context;
}
