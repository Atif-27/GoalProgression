import React, { useState } from "react";
import { Slider } from "@nextui-org/react";
import { useGoal } from "../context/GoalContext";

const DragSlider = () => {
  const [value, setValue] = useState(0);
  const { dispatch } = useGoal();

  const handleChange = (newValue: number | number[]) => {
    if (value === newValue) return;
    setValue(newValue as number);
    if (newValue === 1) {
      dispatch({ type: "TRACK_ALL_GOAL" });
    }
  };

  const handleDragEnd = () => {
    setValue(0);
  };

  return (
    <Slider
      size="lg"
      step={0.01}
      maxValue={1}
      minValue={0}
      aria-label="Volume"
      defaultValue={0.2}
      className="max-w-md"
      value={value}
      color="success"
      onChange={handleChange}
      onChangeEnd={handleDragEnd}
    />
  );
};

export default DragSlider;
