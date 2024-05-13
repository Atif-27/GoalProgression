import React from "react";
import { Goal } from "../interface/GoalTypes";
import { useGoal } from "../context/GoalContext";
export default function GoalCard({ goal }: { goal: Goal }) {
  const { dispatch } = useGoal();
  const handleTrackGoal = () => {
    dispatch({ type: "TOGGLE_TRACK_GOAL", id: goal.id });
  };
  const handleCompleteGoal = () => {
    dispatch({
      type: "MARK_COMPLETE",
      id: goal.id,
    });
  };

  return (
    <div className="bg-gray-500 max-w-md p-4 flex  gap-8 items-center">
      <goal.icon size={30} />
      <h2>{goal.name}</h2>
      <p>{goal.isComplete ? "Completed" : "Not Completed"}</p>
      <p>{goal.isTracked ? "Tracked" : "Not Tracked"}</p>
      <p>{goal.createdAt}</p>
      <button onClick={handleTrackGoal}>Track</button>
      <button onClick={handleCompleteGoal}>Complete</button>
    </div>
  );
}
