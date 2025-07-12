import Link from "next/link";
import React from "react";

interface BtnProps {
  title: string;
  bgColor?: string;
  bgHoverColor?: string;
  textColor?: string;
  border?: number;
  borderColor?: string;
  routeLink: string;
  className?: string;
}

const Button = ({ title,bgHoverColor, bgColor, border, textColor, borderColor, routeLink, className }: BtnProps) => {
  return (
    <Link 
      href={routeLink}
      style={{ 
        backgroundColor: bgColor, 
        color: textColor, 
        borderWidth: border, 
        borderColor: borderColor,
        '--hover-bg-color': bgHoverColor || '#ffcf40'
      } as React.CSSProperties}
      className={`${className} btn-1 uppercase p-3 px-6 lg:px-8 transform -skew-x-[20deg] text-sm font-raleway tracking-[2px] font-[500]`}
    >
      <span className="inline-block transform skew-x-[20deg]">{title}</span>
    </Link>
  );
};

export default Button;