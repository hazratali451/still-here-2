import React from "react";

const HeadingText = ({ value, className = "text-white" }) => {
  return (
    <h1
      className={`lg:text-[48px] text-[30px] text-center leading-[120%]  tracking-[-0.3px] lg:tracking-[0.48px] ${className}`}
    >
      {value}
    </h1>
  );
};

export default HeadingText;
