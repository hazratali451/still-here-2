import React, { useState } from "react";
import ArrowDashed from "../assets/icons/ArrowDashed";

const HowWorksSection = () => {
  const [activeTab, setActiveTab] = useState("others");
  return (
    <section className="lg:py-27.5 py-12.5 bg-[#0E7C8B] relative overflow-hidden px-[35px_32px]">
      <div className="max-w-332.5 mx-auto relative z-2">
        <div className="flex flex-col items-center">
          <h2 className="xl:text-[52px] lg:text-4xl md:text-3xl text-2xl leading-[120%] font-amstel-thin text-center text-white">
            How It Works
          </h2>
          <div className="flex lg:gap-4.5 gap-3 lg:mt-7.5 mt-6">
            <button
              className={`lg:h-15.75 h-9.75 flex items-center justify-center lg:rounded-[10px] rounded-[5px] lg:border border-[0.5px] border-white/25 px-4.5 lg:px-7.5 py-4 text-white  font-jost lg:text-2xl sm:text-sm text-[11.5px] font-medium leading-[120%]  transition-all duration-300 ease-linear ${
                activeTab === "others" ? "bg-[#F43E5A]" : ""
              }`}
              onClick={() => setActiveTab("others")}
            >
              Life Echo for others
            </button>
            <button
              className={`lg:h-15.75 h-9.75 flex items-center justify-center lg:rounded-[10px] rounded-[5px] lg:border border-[0.5px] border-white px-4.5 lg:px-7.5 py-4 text-white  font-jost lg:text-2xl sm:text-sm text-[11.5px] font-medium leading-[120%] transition-all duration-300 ease-linear ${
                activeTab === "yourself" ? "bg-[#F43E5A]" : ""
              }`}
              onClick={() => setActiveTab("yourself")}
            >
              Life Echo for yourself
            </button>
          </div>
        </div>

        <div className="text-center xl:mt-12.5 mt-7.5 flex flex-col xl:flex-row">
          {/* step 1 */}
          <div className="flex flex-col items-center min-w-0 2xl:min-w-71.75  xl:mt-8.5">
            <div className="font-inter font-bold text-white leading-[120%] size-16.5 lg:size-22.5 rounded-full lg:border-2 border-[1.5px] border-white bg-[#C2E4EA66] lg:text-[44px] text-[32px] flex items-center justify-center ">
              1
            </div>

            <img
              src="/mobile-record.svg"
              className="xl:mt-13.5 mt-6 xl:mb-9.25 mb-5.5 max-sm:w-45 max-sm:-ml-6"
            />

            <h3 className="font-inter font-bold leading-[120%] lg:text-3xl text-2xl text-white">
              Record Your Voice
            </h3>
            <p className="font-jost lg:leading-8 leading-5.5 text-white lg:mt-7 mt-4 lg:text-[22px] xl:max-w-71.75 max-w-150">
              Share a short message, a few memories, or simply the sound of your
              voice. A little is enough.
            </p>
          </div>

          <div className="flex justify-center my-2.5 xl:hidden">
            <ArrowDashed sm />
          </div>

          {/* step 2 */}
          <div className="bg-[#EEF1FB] rounded-[26px] 2xl:w-110 xl:w-90 p-6 xl:px-9 xl:pt-8 xl:pb-8.5 flex items-center flex-col shrink-0 2xl:ml-36.25 2xl:mr-32 xl:mx-25 relative">
            <div className="font-inter font-bold text-white leading-[120%] size-16.5 lg:size-22.5 rounded-full lg:border-2 border-[1.5px] border-white bg-[#083446] lg:text-[44px] text-[32px] flex items-center justify-center ">
              2
            </div>

            <img
              src="/tell-us.svg"
              className="lg:mt-19 mt-10 mb-[37.5px] max-sm:w-55.25"
            />

            <h3 className="font-inter font-bold leading-[120%] lg:text-3xl text-2xl text-midnight-blue">
              Tell Us About Yourself
            </h3>

            <p className="font-jost lg:leading-8 leading-5.5 lg:mt-7 mt-4 lg:text-[22px] text-black! max-w-150">
              Add the small details that make you you — your warmth, your style,
              your way of speaking. These help shape a familiar presence for
              your family.
            </p>

            <ArrowDashed
              className={
                "absolute top-1/2 -translate-y-1/2 right-full -z-1 max-xl:hidden"
              }
            />

            <ArrowDashed
              className={
                "absolute top-1/2 left-[calc(100%-35px)] rotate-x-180 -z-1 max-xl:hidden"
              }
            />
          </div>

          <div className="flex justify-center my-2.5 xl:hidden">
            <ArrowDashed sm />
          </div>

          {/* step 3 */}
          <div className="flex flex-col items-center min-w-0 xl:mt-8.5">
            <div className="font-inter font-bold text-white leading-[120%] size-16.5 lg:size-22.5 rounded-full lg:border-2 border-[1.5px] border-white bg-[#C2E4EA66] lg:text-[44px] text-[32px] flex items-center justify-center ">
              3
            </div>

            <img
              src="/mobile-life-echo.svg"
              className="lg:mt-13.5 mt-7.5 mb-6 lg:mb-9.25 max-sm:h-40.25"
            />

            <h3 className="font-inter font-bold leading-[120%] lg:text-3xl text-2xl text-white">
              Create Your Life Echo
            </h3>
            <p className="font-jost lg:leading-8 leading-5.5 text-white mt-4 lg:mt-7 lg:text-[22px] xl:max-w-71.75 max-w-150">
              Your voice becomes a gentle presence your loved ones can return to
              — today, tomorrow, <br className="max-xl:hidden" /> or someday.
              Safe, private, and entirely yours.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 lg:h-107.5  lg:w-112.5 h-57.5 w-56.25  absolute -top-30.5 -left-35 xl:-top-46.75 xl:-left-58.25 rounded-full " />

      <div className="bg-white/10 lg:h-107.5  lg:w-112.5 h-57.5 w-56.25  absolute lg:-bottom-9 lg:-right-47 bottom-22.5 -right-26.75 rounded-full " />

      <img
        src="/circle-bg.svg"
        className="absolute lg:top-0 -top-20 left-1/2 -translate-x-1/2 max-sm:w-106.5 max-sm:max-w-none"
      />
    </section>
  );
};

export default HowWorksSection;
