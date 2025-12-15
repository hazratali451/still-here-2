import React from "react";

const FaceBookIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={`size-7 lg:size-8.75 p-1.75 lg:p-2.5  ${className}`}
      fill="none"
    >
      <path
        d="M17.1528 8.62892C17.1528 3.86318 13.3132 0 8.57745 0C3.8396 0.00107053 0 3.86319 0 8.63002C0 12.9359 3.13642 16.5054 7.23542 17.1528V11.1233H5.05944V8.63002H7.23756V6.72734C7.23756 4.56529 8.5185 3.37118 10.4769 3.37118C11.4158 3.37118 12.3966 3.53946 12.3966 3.53946V5.66187H11.3151C10.2507 5.66187 9.91842 6.32752 9.91842 7.01033V8.62892H12.2959L11.9165 11.1222H9.91732V17.1517C14.0163 16.5043 17.1528 12.9348 17.1528 8.62892Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FaceBookIcon;
