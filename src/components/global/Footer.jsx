import FaceBookIcon from "../../assets/icons/FaceBookIcon";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import MailIcon from "../../assets/icons/MailIcon";
import XIcon from "../../assets/icons/XIcon";
import YoutubeIcon from "../../assets/icons/YoutubeIcon";
import logo from "../../../public/logo.svg";
import RightArrow from "../../assets/icons/RightArrow";
import RightUpArrow from "../../assets/icons/rightUpArrow";

const footerLeftLinks = ["How It Works", "Family Access", "Pricing"];

const footerRightLinks = [
  "Mission Statement",
  "Privacy Policy",
  "Ethics",
  "Legal",
];

const socials = [
  {
    icon: (
      <MailIcon className="text-black hover:text-white transition-all ease-linear duration-300" />
    ),
    link: "",
  },
  {
    icon: (
      <FaceBookIcon className="text-black hover:text-white transition-all ease-linear duration-300" />
    ),
    link: "",
  },
  {
    icon: (
      <LinkedinIcon className="text-black hover:text-white transition-all ease-linear duration-300" />
    ),
    link: "",
  },
  {
    icon: (
      <YoutubeIcon className="text-black hover:text-white transition-all ease-linear duration-300" />
    ),
    link: "",
  },
  {
    icon: (
      <XIcon className="text-black hover:text-white transition-all ease-linear duration-300" />
    ),
    link: "",
  },
];
const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12.5 pb-5.75 md:py-13 ">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center mb-8.25 lg:mb-12.5">
        <img
          src={logo}
          alt="logo"
          className="w-54.25 h-17.5 lg:h-34 lg:w-105.5 mb-8.25 md:mb-0"
        />
        <div className="md:hidden xl:w-99 xl:mr-46.5">
          <h3 className="text-2xl xl:text-[30px] leading-[120%] font-bold mb-6 xl:mb-7.5">
            Connect with us
          </h3>
          <div className="flex items-center gap-3">
            {socials.map((item, idx) => (
              <a
                href={item.link}
                key={idx}
                className="size-7 lg:size-8.75 rounded-full bg-white hover:bg-[#F43E5A] cursor-pointer transition-all ease-linear duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-y border-[#FFFFFF33] sm:px-5 2xl:px-0">
        {/* TOP SECTION 4-COLUMNS */}
        <div className="max-xl:grid max-md:grid-cols-1 max-xl:grid-cols-4 max-xl:gap-2 max-w-388.75 mx-auto  max-xl:justify-items-center xl:flex py-7.5 md:pt-12.5  md:pb-14.5 px-3 ">
          {/* Connect with us */}
          <div className="max-md:hidden xl:w-99 xl:mr-46.5">
            <h3 className="text-2xl xl:text-[30px] leading-[120%] font-bold mb-6 xl:mb-7.5">
              Connect with us
            </h3>
            <div className="flex items-center gap-3">
              {socials.map((item, idx) => (
                <a
                  href={item.link}
                  key={idx}
                  className="size-7 lg:size-8.75 rounded-full bg-white hover:bg-[#F43E5A] cursor-pointer transition-all ease-linear duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:gap-y-7.5 gap-6  xl:mr-35 text-center md:text-start flex flex-col">
            {footerLeftLinks.map((item, index) => (
              <a
                href=""
                key={index}
                className="cursor-pointer lg:text-[22px] font-josefin-sans hover:text-[#F43E5A] transition-all ease-linear duration-300 whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="lg:gap-y-7.5 gap-6 xl:mr-63.75 text-center md:text-start pt-4 md:pt-0 flex flex-col">
            {footerRightLinks.map((item, index) => (
              <a
                href=""
                key={index}
                className="cursor-pointer lg:text-[22px] font-josefin-sans hover:text-[#F43E5A] transition-all ease-linear duration-300 whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="space-y-2">
            <a
              href=""
              className="cursor-pointer lg:text-[22px] xl:pl-17  font-josefin-sans pt-4 md:pt-0 hover:text-[#F43E5A] transition-all ease-linear duration-300"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION 3-COLUMNS */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 max-w-388.75 mx-auto gap-2 max-xl:justify-items-center lg:gap-4 md:py-12.5 pt-10.5 pb-7.5 px-4 sm:px-6 2xl:px-0">
        {/* Newsletter */}
        <div className="md:col-span-2 lg:col-span-4">
          <h3 className="text-[30px] md:text-2xl xl:text-[30px] leading-[120%] font-bold mb-7.5 text-center sm:text-left">
            Newsletter subscribe
          </h3>
          <div className="flex bg-white rounded-lg overflow-hidden sm:max-w-143.25 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className=" flex-1 w-full px-4 py-3 text-sm md:text-sm lg:text-[22px] text-black outline-none"
            />
            {/* large screen button */}
            <button className="bg-[#F43E5A] flex items-center gap-1.5  cursor-pointer text-white text-xs lg:text-2xl font-jost m-1.25 rounded-[10px] px-3 lg:px-5 py-[2] lg:py-4 hover:bg-[#d94e57] transition whitespace-nowrap">
              Subscribe Now <RightUpArrow className="sm:size-6 size-3" />
            </button>
          </div>
        </div>

        {/* Talk to an expert */}
        <div className="pt-7.5 md:pt-6.25 text-center sm:text-start">
          <h3 className="text-2xl md:text-lg xl:text-[30px] leading-[120%] font-bold sm:mb-7.5 mb-5 whitespace-nowrap">
            Talk to an expert :
          </h3>
          <p className="text-white/90">+1 (888)-855-5328</p>
        </div>

        {/* Support */}
        <div className="xl:text-end pt-5.5 sm:pt-7.5 md:pt-6.25 text-center sm:text-start">
          <h3 className="text-2xl md:text-lg xl:text-[30px] leading-[120%] font-bold sm:mb-7.5 mb-5">
            Support :
          </h3>
          <p className="cursor-pointer xl:pr-11">Contact us</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#FFFFFF33] "></div>
      <div className="text-center text-white/80 pt-7.5 max-w-68.5 sm:max-w-full mx-auto lg:text-[22px] font-josefin-sans">
        ©Copyright 2025. StillHere. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
