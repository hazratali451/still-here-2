import HeadingText from "./ui/HeadingText";
import time from "../assets/time.png";
import RightArrow from "../assets/icons/RightArrow";
import Arrow from "../assets/icons/arrow";

const Time = () => {
  return (
    <div className="py-12.5 md:py-30">
      <div className="max-w-343.25 mx-auto flex flex-col lg:flex-row items-center gap-7.5 md:gap-20 xl:gap-42 px-4 md:px-0 lg:px-4 xl:px-0">
        <img src={time} alt="time" className="lg:size-100 object-contain" />

        <div className="flex flex-col items-center lg:items-start  max-w-74.5 md:max-w-142.5">
          <HeadingText
            value="Some moments don't come twice. But your voice can stay."
            className="text-center lg:text-start "
          />
          <p className="text-center lg:text-start text-sm md:text-lg md:text-[22px] font-jost font-light text-black py-4 md:pt-7.75 md:pb-10">
            StillHere helps you save something irreplaceable — for the people
            you love now, and for the people who come after you.
          </p>
          <button className="font-jost text-sm md:text-2xl flex items-center gap-2 md:gap-3.75 bg-secondary cursor-pointer rounded-[5px] md:rounded-[10px] text-white p-4.5 md:py-5.25 md:px-9">
            Start your Legacy Today <Arrow clasName="max-sm:w-1.5  " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Time;
