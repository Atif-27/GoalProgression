import Image from "next/image";
import ProgressTarget from "@/public/ProgressTarget.png";
import useProgress from "../hooks/useProgress";
import { ProgressBar } from "@tremor/react";

export default function ProgressBox() {
  const { progress, todaysGoals, completedTodaysGoals } = useProgress();
  return (
    <section className="  flex  items-center space-x-8 bg-gradient-to-r via-blue-400 to-blue-500 from-blue-300 w-fit py-4 md:text-xl  px-7 rounded-xl ">
      <div>
        <Image src={ProgressTarget} alt="Progress Box" width={80} />
      </div>
      <div className="flex flex-col space-y-4">
        <p>Your daily goal almost done</p>
        <p>
          {completedTodaysGoals} of {todaysGoals} completed
        </p>

        <ProgressBar value={progress} color="stone" className="mt-3" />
        <div className="flex justify-end items-end">
          <span className="text-white text-sm"> {progress}%</span>
        </div>
      </div>
    </section>
  );
}
