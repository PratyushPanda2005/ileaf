import React from "react";

interface BtnProps {
  title: string;
  bgColor: string;
  textColor: string
}

const Button = ({ title,bgColor,textColor }: BtnProps) => {
  return (
    <button style={{backgroundColor: bgColor, color: textColor}} className="uppercase p-3 px-6 lg:p-4 lg:px-8 transform -skew-x-12 text-sm lg:text-base">
      {title}
    </button>
  );
};

export default Button;
