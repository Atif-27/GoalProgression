import { BarChart } from "@tremor/react";
import React from "react";
import useDailyProgress from "../hooks/useDailyProgress";

export default function ProgressChart() {
  const { last7daysGoals } = useDailyProgress();
  console.log(last7daysGoals);
  return (
    <div className="p-20 max-md:p-10 max-sm:p-5 bg-gray-900 text-white">
      <BarChart
        className=" h-72 max-md:max-w-md"
        data={last7daysGoals}
        index="date"
        categories={["progress"]}
        colors={["blue"]}
        showAnimation={true}
        showGridLines={false}
        maxValue={100}
        minValue={0}
        valueFormatter={(value) => `${value.toFixed(2)}%`}
        yAxisWidth={30}
      />
    </div>
  );
}
