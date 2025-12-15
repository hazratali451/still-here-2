import React from "react";
import TraditionalMemorialsIcon from "../assets/icons/TraditionalMemorialsIcon";
import StillHereWhiteIcon from "../assets/icons/StillHereWhiteIcon";
import CrossIcon from "../assets/icons/CrossIcon";
import TickIcon from "../assets/icons/TickIcon";

const data = [
  {
    heading: "Traditional Memorials",
    icon: <TraditionalMemorialsIcon className={"max-lg:size-[27.5px]"} />,
    lists1: [
      "Static pages",
      "Photos to revisit",
      "A place to look back",
      "Fixed content that never changes",
      "No interaction or conversation",
      "Memories that sit in one place",
    ],
  },
  {
    heading: "StillHere",
    icon: <StillHereWhiteIcon className={"max-lg:h-[31.5px] max-lg:w-6"} />,
    lists2: [
      "A living voice echo",
      "Real conversation",
      "Comfort you can feel",
      "Guided by your memories",
      "Safe, private, and ethically designed",
      "Always here when you need them",
    ],
    bottomTxt: [
      "A presence that sounds like someone you love.",
      "Not a page to read — a connection you can speak with.",
      "Warm, familiar, gentle.",
      "Built from the moments and recordings you choose.",
      "Protected with the same care you’d give your family.",
      "Not a place to visit — a presence that stays close.",
    ],
  },
];

const ComparisonSection = () => {
  return (
    <section className="lg:py-27.5 sm:py-20 py-12.5 mx-5">
      <div className="max-w-360 mx-auto grid md:grid-cols-2 lg:gap-7.5 gap-5">
        {data.map((c, idx) => (
          <div
            key={idx}
            className="lg:p-10 sm:p-7 p-5 rounded-[20px] bg-[linear-gradient(0deg,#2D6277_0%,#2D6277_100%)]"
          >
            {/* heading */}
            <div className="flex lg:gap-10 gap-5 items-center">
              <div className="bg-[#F43E5A] flex items-center justify-center lg:size-32.75 size-12.5 rounded-full">
                {c.icon}
              </div>
              <h3 className="xl:text-[32px] sm:text-2xl text-lg font-semibold leading-[133%] text-white">
                {c.heading}
              </h3>
            </div>

            {/* list */}

            <ul
              className={`flex flex-col gap-7.5 ${
                idx === 0 ? "max-sm:gap-3.5" : "max-sm:gap-5"
              } lg:mt-10 sm:mt-7 mt-5`}
            >
              {c?.lists1?.map((cur, i) => (
                <li className="flex items-center gap-3" key={i}>
                  <CrossIcon
                    className={"max-sm:size-[12.5px] max-md:size-4 "}
                  />

                  <div className="lg:text-[27.5px] sm:text-xl text-sm leading-[120%] font-josefin-sans lg:font-jost text-white">
                    {cur}
                  </div>
                </li>
              ))}

              {c?.lists2?.map((cur, i) => (
                <li
                  className="grid grid-cols-[auto_1fr] items-center gap-1.5 md:gap-2.5 font-jost text-white"
                  key={i}
                >
                  <TickIcon className={'max-md:w-3.5 max-md:h-3 text-[#F9B13A]'}/>

                  <div className="lg:text-[27.5px] sm:text-xl leading-[120%] lg:font-jost font-medium font-josefin-sans ">
                    {cur}
                  </div>

                  <div className="col-span-2 lg:leading-8 lg:text-[22px] text-sm font-jost ">
                    {c?.bottomTxt[i]}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;
