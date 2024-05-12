"use client";
import React, { createContext, useReducer } from "react";

type Goal = {
  id: number;
  name: string;
  isTracked: boolean;
  isComplete: boolean;
  dateCompleted?: string;
};

type GoalState = {
  goals: Goal[];
  progress: number;
};

type GoalAction =
  | { type: "ADD_GOAL"; goal: Goal }
  | { type: "DELETE_GOAL"; id: number }
  | { type: "TOGGLE_TRACK_GOAL"; id: number }
  | { type: "MARK_COMPLETE"; id: number; dateCompleted: string };

const initialState: GoalState = {
  goals: [],
  progress: 0,
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
    case "MARK_COMPLETE":
      return {
        ...state,
        goals: state.goals.map((goal) =>
          goal.id === action.id
            ? { ...goal, isComplete: true, dateCompleted: action.dateCompleted }
            : goal
        ),
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
