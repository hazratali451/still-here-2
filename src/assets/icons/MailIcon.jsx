import React from "react";

const MailIcon = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="14"
      viewBox="0 0 18 14"
      className={`size-7 lg:size-8.75 p-1.75 lg:p-2.5  ${className}`}
      fill="none"
    >
      <path
        d="M15.4375 0H1.71527C0.771874 0 0.00857503 0.761718 0.00857503 1.69271L0 11.849C0 12.78 0.771874 13.5417 1.71527 13.5417H15.4375C16.3809 13.5417 17.1528 12.78 17.1528 11.849V1.69271C17.1528 0.761718 16.3809 0 15.4375 0ZM15.4375 3.38542L8.57642 7.61715L1.71527 3.38542V1.69271L8.57642 5.92449L15.4375 1.69271V3.38542Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MailIcon;
