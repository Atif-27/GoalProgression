import React, { useState } from "react";
import { Slider } from "@nextui-org/react";
import { useGoal } from "../context/GoalContext";

// @ This component is used to create a slider to track all the goals
// @ It will return a slider component

const DragSlider = () => {
  const [value, setValue] = useState(0);
  const { dispatch } = useGoal();

  const handleChange = (newValue: number | number[]) => {
    if (value === newValue) return;
    setValue(newValue as number);
    if (!Array.isArray(newValue) && newValue >= 0.8) {
      dispatch({ type: "TRACK_ALL_GOAL" });
    }
  };

  const handleDragEnd = () => {
    setValue(0);
  };

  return (
    <div className=" space-y-4 mt-4">
      <h1 className="text-xl">Swipe to track all</h1>
      <Slider
        size="lg"
        step={0.01}
        maxValue={1}
        minValue={0}
        aria-label="Volume"
        defaultValue={0.2}
        className="max-w-md"
        value={value}
        color="danger"
        onChange={handleChange}
        onChangeEnd={handleDragEnd}
      />
    </div>
  );
};

export default DragSlider;
