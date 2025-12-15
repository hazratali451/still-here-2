import { useState } from "react";
import Camera from "../assets/icons/camera";
import Forever from "../assets/icons/forever";
import Messages from "../assets/icons/messages";
import Record from "../assets/icons/Record";
import Share from "../assets/icons/share";
import Button from "./ui/Button";
import HeadingText from "./ui/HeadingText";

const LivingLegacy = () => {
  const [activeTab, setActiveTab] = useState("Your love");
  return (
    <section className="py-12.5 md:py-30 bg-[#EEF1FB] px-4 lg:px-0">
      <div className="max-w-330.5 mx-auto">
        <HeadingText
          value="Living Legacy "
          className="text-center text-midnight-blue"
        />
        <h5 className="text-black pt-2.25 md:pt-5 font-jost text-sm md:text-[22px] text-center">
          Give your family something only you can give.
        </h5>
        <div className="flex items-center justify-center gap-2 md:gap-4.5 pt-6 md:pt-12.5 pb-3.25 md:pb-7.5">
          {["Your stories", "Your love", "Your voice"].map((it, idx) => (
            <Button
              onClick={() => setActiveTab(it)}
              text={it}
              key={idx}
              className={` border border-[#000000] transition-all ease-linear duration-300   ${
                activeTab === it
                  ? "bg-secondary text-white"
                  : "text-midnight-blue bg-transparent "
              }`}
            />
          ))}
        </div>
        <p className="text-black font-jost text-sm md:text-[22px] text-center">
          in your own words, in your own sound, exactly as they remember it.
        </p>
        <div className="max-md:hidden">
          {/* first row */}
          <div className="flex gap-2.5 md:gap-10 justify-center pt-4.75 md:pt-10">
            <div className="flex gap-2 md:gap-5 items-center bg-white rounded-[9px] p-3.25 md:py-5.5 md:px-6 md:w-93">
              <div>
                <Record className="size-4.25 md:size-9" />
              </div>
              <p className="text-midnight-blue text-sm md:text-lg lg:text-2xl font-jost font-medium leading-[130%]">
                {" "}
                Record your voice
              </p>
            </div>
            <div className="flex gap-2 md:gap-5 items-center bg-white rounded-[9px] p-3.25 md:px-5 md:w-98.75 ">
              <div>
                <Forever className="size-4.25 md:size-9" />
              </div>
              <p className="text-midnight-blue text-sm md:text-lg lg:text-2xl font-jost font-medium leading-[130%]">
                {" "}
                Create something your family will have forever
              </p>
            </div>
          </div>
          {/* 2nd row */}
          <div className="md:flex gap-2.5 md:gap-10 justify-center pt-4.75 md:pt-7.5 max-w-82.5 mx-auto md:max-w-330.5">
            <div className="flex gap-2 md:gap-5 items-center bg-white rounded-[9px] p-3.25 md:py-5.5 md:px-6 md:w-93">
              <div>
                <Share className="size-4.25 md:size-9" />
              </div>
              <p className="text-midnight-blue text-sm md:text-lg lg:text-2xl font-jost font-medium leading-[130%]">
                {" "}
                Share your stories
              </p>
            </div>
            <div className="flex gap-2 md:gap-5 items-center bg-white rounded-[9px] p-3.25 md:px-5 md:w-98.75">
              <div>
                <Camera className="size-4.25 md:size-9" />
              </div>
              <p className="text-midnight-blue text-sm md:text-lg lg:text-2xl font-jost font-medium leading-[130%]">
                {" "}
                Capture your personality, humor, and warmth
              </p>
            </div>
          </div>
          {/* 3rd row */}
          <div className="md:flex gap-2.5 md:gap-10 pt-4.75 md:pt-7.5 max-w-82.5 mx-auto md:max-w-202">
            <div className="flex gap-2 md:gap-5 items-center bg-white rounded-[9px] p-3.25 md:py-5.5 md:px-6 md:w-84.5 lg:w-93">
              <div>
                <Messages className="size-4.25 md:size-9" />
              </div>
              <p className="text-midnight-blue text-sm md:text-lg lg:text-2xl font-jost font-medium leading-[130%]">
                {" "}
                Leave special messages
              </p>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          {/* first row */}
          <div className="flex gap-2.5 md:gap-10 justify-center pt-4.75 md:pt-10">
            <div className="flex gap-2 md:gap-5 items-center bg-white rounded-[9px] p-3.25 md:py-5.5 md:px-6 md:w-93">
              <div>
                <Record className="size-4.25 md:size-9" />
              </div>
              <p className="text-midnight-blue text-sm md:text-lg lg:text-2xl font-jost font-medium leading-[130%]">
                {" "}
                Record your voice
              </p>
            </div>
            <div className="flex gap-2 md:gap-5 items-center bg-white rounded-[9px] p-3.25 md:py-5.5 md:px-6 md:w-93">
              <div>
                <Share className="size-4.25 md:size-9" />
              </div>
              <p className="text-midnight-blue text-sm md:text-lg lg:text-2xl font-jost font-medium leading-[130%]">
                {" "}
                Share your stories
              </p>
            </div>
          </div>
          {/* 3rd row */}
          <div className="md:flex gap-2.5 md:gap-10 pt-2.25 md:pt-7.5 max-w-82.5 mx-auto md:max-w-202">
            <div className="flex gap-2 md:gap-5 items-center bg-white rounded-[9px] p-3.25 md:py-5.5 md:px-6 md:w-84.5 lg:w-93">
              <div>
                <Messages className="size-4.25 md:size-9" />
              </div>
              <p className="text-midnight-blue text-sm md:text-lg lg:text-2xl font-jost font-medium leading-[130%]">
                {" "}
                Leave special messages
              </p>
            </div>
          </div>
          {/* 2nd row */}
          <div className="md:flex gap-2.5 md:gap-10 justify-center pt-2.25 md:pt-7.5 max-w-82.5 mx-auto md:max-w-330.5">
            <div className="flex gap-2 md:gap-5 items-center bg-white rounded-[9px] p-3.25 md:px-5 md:w-98.75 ">
              <div>
                <Forever className="size-4.25 md:size-9" />
              </div>
              <p className="text-midnight-blue text-[13px] md:text-lg lg:text-2xl font-jost font-medium leading-[130%]">
                {" "}
                Create something your family will have forever
              </p>
            </div>

            <div className="flex gap-2 md:gap-5 items-center bg-white rounded-[9px] mt-2.25 p-3.25 md:px-5 md:w-98.75">
              <div>
                <Camera className="size-4.25 md:size-9" />
              </div>
              <p className="text-midnight-blue text-sm md:text-lg lg:text-2xl font-jost font-medium leading-[130%]">
                {" "}
                Capture your personality, humor, and warmth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LivingLegacy;
