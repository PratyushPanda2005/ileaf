import React from "react";

interface BtnProps {
  title: string;
  bgColor?: string;
  textColor?: string;
  border?: number;
  borderColor?: string;
}

const Button = ({ title, bgColor, border ,textColor, borderColor }: BtnProps) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor, borderWidth:border, borderColor: borderColor }}
      className="uppercase p-3 px-6 lg:px-8 transform  -skew-x-[20deg] text-sm  font-raleway tracking-[2px] font-[500]"
    >
      <span className="inline-block transform skew-x-[20deg]">{title}</span>
    </button>
  );
};

export default Button;
