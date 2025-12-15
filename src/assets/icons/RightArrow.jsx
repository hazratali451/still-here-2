import React from "react";

const RightArrow = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="11"
      viewBox="0 0 8 11"
      className={`${className} cursor-pointer`}
      fill="none"
    >
      <g clipPath="url(#clip0_2124_238)">
        <path
          d="M0 1.65277L4.30292 5.5L0 9.34723L1.84854 11L8 5.5L1.84854 0L0 1.65277Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2124_238">
          <rect width="8" height="11" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RightArrow;
