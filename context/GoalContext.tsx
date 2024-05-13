"use client";
import React, { createContext, useReducer } from "react";
import { GoalState, GoalAction } from "../interface/GoalTypes";
import { initialState } from "../constants/initialState";
// ! Goal Reducer
// @ This reducer handles all the actions related to the Goal Context
// @ It takes the current state and the action to be performed and returns the new state
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

// @ Goal Context
// @ This context is used to manage the state of the Goals
// @ It contains the state and dispatch function to update the state
export const GoalContext = createContext<{
  state: GoalState;
  dispatch: React.Dispatch<GoalAction>;
}>({ state: initialState, dispatch: () => null });

// ! Goal Provider Component
// @ This component is used to provide the Goal Context to the whole application
// @ It takes the children as props and returns the Goal Context Provider
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
// @ This hook is used to get the state and dispatch function of the Goal Context
// @ It will return the state and dispatch function
export function useGoal() {
  const context = React.useContext(GoalContext);
  if (!context) {
    throw new Error("useGoal must be used within a GoalProvider");
  }
  return context;
}
