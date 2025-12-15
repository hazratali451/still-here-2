import ContirbutorIcon from "../assets/icons/Contributor";
import Mic from "../assets/icons/mic";
import Viewers from "../assets/icons/viewers";
import HeadingText from "./ui/HeadingText";

const FamilyAccess = () => {
  const data = [
    {
      title: "Legacy Owner",
      des: "Full control over the Life Echo",
      icon: <Mic />,
    },
    {
      title: "Contributors",
      des: "Add memories, stories, and photos.",
      icon: <ContirbutorIcon className="size-17 " />,
    },
    {
      title: "Viewers",
      des: "Listen and stay connected.",
      icon: <Viewers />,
    },
  ];
  return (
    <div className="py-12.5 md:py-30 px-5.5  sm:px-5 2xl:px-0">
      <div className="bg-primary rounded-[30px]  md:max-w-360 mx-auto py-10 md:py-22.25 px-3.75 md:px-14.5">
        <HeadingText value="Family Access" />
        <p className="pt-5 sm:pt-7.5 max-w-52.25 md:max-w-172.5 mx-auto text-center font-jost font-light text-sm md:text-lg lg:text-2xl leading-[171%] md:leading-[131%]">
          Collaborate with family members to preserve memories together with
          different access levels.
        </p>
        <div className=" lg:flex gap-9.5 lg:pt-15 pt-7.5">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F5F9FA] rounded-[19px] py-7 md:py-11.75 px-6 md:px-9 lg:w-103.75 mb-4.5 lg:mb-0"
            >
              <div className="flex md:flex-col xl:flex-row gap-6.5">
                <div className="size-11.75 md:size-17">{item.icon}</div>
                <div>
                  <h2 className="font-bold text-midnight-blue text-lg md:text-[26px] leading-[120%] pb-4">
                    {item.title}
                  </h2>
                  <span className="text-black font-jost text-base md:text-[22px] font-light">
                    {item.des}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FamilyAccess;
