import React from "react";
import { Goal } from "../interface/GoalTypes";
import { useGoal } from "../context/GoalContext";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Icon } from "@tremor/react";
import type { Color } from "@tremor/react";

export default function GoalCard({
  goal,
  color,
}: {
  goal: Goal;
  color: Color;
}) {
  const { dispatch } = useGoal();
  const handleTrackGoal = () => {
    if (goal.isComplete)
      dispatch({
        type: "TOGGLE_COMPLETE",
        id: goal.id,
      });
    dispatch({ type: "TOGGLE_TRACK_GOAL", id: goal.id });
  };
  const handleCompleteGoal = () => {
    if (!goal.isTracked) {
      alert("Please track the goal first");
      return;
    }

    dispatch({
      type: "TOGGLE_COMPLETE",
      id: goal.id,
    });
  };

  return (
    <div
      className={
        "bg-[#282828] max-w-md p-4 max-md:p-7 flex  gap-8 justify-between items-center rounded-xl " +
        (goal.isComplete ? " line-through" : "")
      }
    >
      <Icon
        icon={goal.icon}
        tooltip="Remove From Track"
        size="sm"
        color={color}
        variant="light"
      />
      <h2>{goal.name}</h2>
      <div className="gap-4 flex">
        <button onClick={handleTrackGoal}>
          {!goal.isTracked ? (
            <Icon
              icon={IoIosAddCircle}
              variant="light"
              color={color}
              tooltip="Add To Track"
              size="sm"
            />
          ) : (
            <Icon
              icon={IoIosRemoveCircle}
              color={color}
              variant="light"
              tooltip="Remove From Track"
              size="sm"
            />
          )}
        </button>
        <button onClick={handleCompleteGoal}>
          {goal.isComplete ? (
            <Icon
              icon={ImCross}
              color={color}
              variant="light"
              tooltip="Mark Goal Incomplete"
              size="sm"
            />
          ) : (
            <Icon
              icon={FaCheck}
              variant="light"
              color={color}
              tooltip="Mark Goal Complete"
              size="sm"
            />
          )}
        </button>
      </div>
    </div>
  );
}
