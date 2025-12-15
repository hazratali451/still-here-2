import React from "react";

const Button = ({ text, className = "", onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`transition-all duration-300 ease-in-out font-jost font-medium py-3 md:py-4.25 px-6 md:px-7.75 rounded-[5px] md:rounded-[10px] text-[12px] md:text-2xl ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
