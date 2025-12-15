import React from "react";

const XIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="12"
      viewBox="0 0 13 12"
      className={`size-7 lg:size-8.75 p-1.75 lg:p-2.5  ${className}`}
      fill="none"
    >
      <path
        d="M0.0312245 0L4.98458 6.6232L0 12.008H1.12191L5.486 7.29342L9.01189 12.008H12.8296L7.59742 5.01234L12.237 0H11.1152L7.0962 4.34191L3.84888 0H0.0312245ZM1.68104 0.826527H3.43485L11.1795 11.1817H9.42577L1.68104 0.826527Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default XIcon;
