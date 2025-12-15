import React from "react";

const WeBelieveSection = () => {
  return (
    <section className="pt-31.25 max-sm:py-12.5 pb-27.5 mx-4.5">
      <div
        className="max-w-361.75 rounded-[7px] max-sm:rounded-[20px] 
      shadow-[0_2px_34px_0_rgba(14,84,99,0.15)] 
      sm:pt-12.25 sm:pb-9.5 max-sm:py-10.5 px-7.5 max-sm:px-4 mx-auto bg-white"
      >
        <h2 className="xl:text-[50px] lg:text-4xl md:text-3xl text-2xl leading-[120%] font-amstel-thin text-center">
          We believe a voice is <br className="sm:hidden" /> more than sound.
        </h2>

        <div className="flex max-sm:gap-3.5 flex-wrap gap-7.5 max-w-325.5 mt-8 max-sm:mt-5 ">
          {[
            "It's presence",
            "It's personality",
            "It's comfort",
            <>
              It's the heartbeat <br className="hidden lg:block" /> of a memory
            </>,
          ].map((cur, i) => (
            <div
              className="flex-1 flex flex-col md:gap-6 gap-4 border border-midnight-blue/10 rounded-xl items-center py-6.5 min-w-50"
              key={i}
            >
              <img
                src={`/believe${i + 1}.webp`}
                alt=""
                className="max-md:size-12.5"
              />
              <p className="font-inter text-midnight-blue md:text-2xl md:font-semibold font-bold leading-[130%] text-center">
                {cur}
              </p>
            </div>
          ))}
        </div>

        <p className="lg:font-inter font-jost text-gray text-center lg:text-[22px] md:text-base text-sm leading-normal md:mt-10 mt-5 md:mb-6 mb-3.5">
          And when life moves fast — when it takes, when it changes, when it
          fades — a familiar voice can steady us, lift us,{" "}
          <br className="max-lg:hidden" /> remind us who we are and who we still
          carry with us.
        </p>
        <p className="lg:font-inter font-jost text-gray text-center lg:text-[22px] md:text-base text-sm leading-normal ">
          StillHere is a place to keep the voices we never want to lose. A place
          to save the stories, the laughter, the wisdom, the{" "}
          <br className="max-lg:hidden" /> "I love yous," the "I'm proud of
          yous," the moments families return to <br className="sm:hidden" /> for
          generations.
        </p>
      </div>
    </section>
  );
};

export default WeBelieveSection;
