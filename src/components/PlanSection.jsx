import React, { useState } from "react";
import HeadingText from "./ui/HeadingText";
import RightArrow from "../assets/icons/RightArrow";
import TickIcon from "../assets/icons/TickIcon";

const plans = [
  {
    id: 1,
    title: "One-Time Setup Fee",
    subtitle: "Required once per Echo",
    price: "$50",
    period: "once",
    popular: false,
    features: [
      "Secure account initialization",
      "Vault provisioning",
      "AI voice echo creation",
      "Required once per echo",
    ],
  },
  {
    id: 2,
    title: "Full Access Plan",
    subtitle: "Everything except family sharing",
    price: "$14.99",
    period: "/month",
    popular: true,
    features: [
      "AI voice echo",
      "Warmth & tone controls",
      "Special Messages",
      "AI chat guidance",
      "Unlimited vault storage",
      "Priority processing",
    ],
  },
  {
    id: 3,
    title: "Family Add-On Seats",
    subtitle: "Individual seats (1–4 members)",
    price: "$4.99",
    period: "/month each",
    popular: false,
    features: [
      "Add 1–4 additional members",
      "Each gets their own login",
      "Access to shared legacy vault",
      "Can receive timed special message",
      "Owner controls permissions",
    ],
  },
  {
    id: 4,
    title: "Family Plan",
    subtitle: "Up to 5 family members included",
    price: "$14.99",
    period: "/month",
    popular: false,
    features: [
      "Up to 5 family members included",
      "Owner does NOT count toward limit",
      "All family permissions included",
      "Shared access to legacy vault",
      "Timed Special Message delivery",
    ],
  },
];

const PlanSection = () => {
  const [active, setActive] = useState("monthly");

  return (
    <section className="plan-section bg-[#EEF1FB] sm:px-5 2xl:px-0">
      <div className="max-w-360.5 mx-auto px-4 py-12.5 md:py-27.5">
        <HeadingText value="Choose Your Plan" className="text-center" />

        <h5 className="text-black pt-4.25 md:pt-5 pb-4.75 md:pb-7.5 font-jost text-sm md:text-[22px] text-center">
          Start with the $50 setup fee, then choose a plan that fits your needs
        </h5>

        {/* TOGGLE */}
        <div className="flex justify-center pb-10">
          <div className="relative flex items-center border border-[#00000026] bg-[#EFF2FC] rounded-full p-1 w-74.5 h-12.5 ">
            {/* Sliding Background */}
            <div
              className={`absolute top-0.75 left-1 h-10.5 rounded-full bg-secondary transition-all duration-300 ease-in-out
                ${
                  active === "monthly"
                    ? "w-26.5 translate-x-0"
                    : "w-42.5 translate-x-29.5"
                }
            `}
            />

            {/* Monthly */}
            <button
              onClick={() => setActive("monthly")}
              className={`relative z-10 flex text-sm md:text-[20px] font-jost pl-6 rounded-full transition-colors duration-300
              ${active === "monthly" ? "text-white" : "text-black"}`}
            >
              Monthly
            </button>

            {/* Yearly */}
            <button
              onClick={() => setActive("yearly")}
              className={`relative z-10 flex text-sm md:text-[20px] font-jost pl-15 md:pl-8.75 rounded-full transition-colors duration-300
              ${active === "yearly" ? "text-white" : "text-black"}`}
            >
              Yearly
              <span className="ml-1 text-[10px] md:text-sm bg-[#FEE2D4] md:bg-white  text-black px-2.5 py-1.25 rounded-full">
                2 months free
              </span>
            </button>
          </div>
        </div>

        {/* PLANS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7.5">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className=" bg-white rounded-[20px] shadow-sm flex flex-col"
            >
              <div
                className={`bg-primary p-6 rounded-t-[20px] relative ${
                  plan.popular ? "border-b-3 border-[#F43E5A]" : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 bg-[#F43E5A] text-[15px] md:text-lg font-medium font-jost px-3 py-0.5 text-white rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-[20px] md:text-[26px] leading-[120%] font-bold  text-[#FFFFFFD9]">
                  {plan.title}
                </h3>

                <p className="text-sm md:text-base text-[#FFFFFFB2] font-jost pt-3.5 pb-5 md:pb-7.5">
                  {plan.subtitle}
                </p>

                <div className="flex items-end gap-1 mb-4 md:mb-6">
                  <span className="text-[30px] md:text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-base font-jost  text-[#FFFFFFB2]">
                    {plan.period}
                  </span>
                </div>
              </div>
              <div className=" flex flex-col justify-between p-6 h-full">
                <ul className="space-y-4.5 flex-1 pb-11.75">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 items-center text-sm md:text-lg leading-[120%] text-black"
                    >
                      <span className="mt-1 size-5 md:size-6.5 flex items-center justify-center rounded-full bg-[#EFF2FC] border border-[#00000026]">
                        <TickIcon className="text-[#162569] size-2.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-[#FF4B5C] hover:bg-[#e84353]  flex items-center gap-3 justify-center transition text-white py-3 rounded-[10px] sm:font-semibold">
                  Get started <RightArrow />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
