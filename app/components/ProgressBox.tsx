import Image from "next/image";
import ProgressTarget from "@/public/ProgressTarget.png";
import useProgress from "../hooks/useProgress";
import { progress } from "framer-motion";
export default function ProgressBox() {
  const { progress, todaysGoals, completedTodaysGoals } = useProgress();
  return (
    <section className=" max-md:mx-auto flex  items-center space-x-8  bg-blue-200  w-fit py-4 px-7 rounded-xl ">
      <div>
        <Image src={ProgressTarget} alt="Progress Box" width={80} />
      </div>
      <div className="flex flex-col space-y-4">
        <p>Your daily goal almost done</p>
        <p>
          {completedTodaysGoals} of {todaysGoals} completed
        </p>
        <progress value={progress} max="100"></progress>
      </div>
    </section>
  );
}
