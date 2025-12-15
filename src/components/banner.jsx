import logo from "../../public/logo.svg";
import Arrow from "../assets/icons/arrow";
import HeadingText from "./ui/HeadingText";
import bannerImage from "../assets/images/banner-image.svg";
import mobileBannerImage from "../assets/images/mobile-banner-image.png";
import grass from "../assets/images/grass.png";

const Banner = () => {
  return (
    <div className=" bg-primary ">
      <div className="px-4.5 lg:px-0">
        <div className="flex flex-col items-center justify-center pt-9.75 mb-8.25 lg:mb-12.5">
          <img
            src={logo}
            alt="logo"
            className="w-54.25 h-17.5 lg:h-34 lg:w-105.5"
          />
        </div>
        <HeadingText value="Preserve a Voice. Protect the Memories." />
        <p className=" lg:pt-12 pt-4.5 max-w-307 mx-auto text-center text-sm md:text-base lg:text-[20px] leading-[127%] text-white sm:font-inter font-jost">
          StillHere helps you preserve a familiar voice, meaningful messages,
          wishes and life's most <br className="hidden md:block" /> important
          moments inside your private Vault — kept safe for the people who will
          need them most.
        </p>

        <div className="flex justify-center pt-6.25 pb-11.25 md:py-18 lg:py-26.75 gap-5.25 lg:gap-10.25">
          <button className="bg-[#67AEB3] cursor-pointer text-white border text-sm lg:text-lg border-white flex items-center gap-3.75 px-4.5 lg:px-9 py-3 rounded-[5px] font-jost">
            Start Your Life Echo <Arrow clasName="max-sm:w-1.5  " />
          </button>
          <button className="bg-[#F43E5A] cursor-pointer text-sm lg:text-lg text-white border border-white flex items-center justify-center gap-3.5 sm:gap-3.75 px-4.5 lg:px-9 py-3 rounded-[5px] font-jost">
            How it works <Arrow clasName="max-sm:w-1.5  " />
          </button>
        </div>
      </div>
      <img
        src={bannerImage}
        alt="banner"
        className="max-md:hidden w-full object-cover h-auto "
        style={{ boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)" }}
      />
      <div className="relative">
        {/* for mobile view */}
        <img
          src={mobileBannerImage}
          alt="banner"
          className="md:hidden w-full object-contain h-auto"
        />
        <img
          src={grass}
          alt="grass"
          className="md:hidden w-full object-contain absolute bottom-0 h-auto"
        />
      </div>
    </div>
  );
};
export default Banner;
