'use client'
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import React, { MouseEvent } from "react";

interface BtnProps {
  title: string;
  bgColor?: string;
  bgHoverColor?: string;
  textColor?: string;
  border?: number;
  borderColor?: string;
  routeLink: string;
  className?: string;
  onNavigation?: (e: MouseEvent<HTMLAnchorElement>, url: string) => void;
}

const Button = ({ 
  title, 
  bgHoverColor, 
  bgColor, 
  border, 
  textColor, 
  borderColor, 
  routeLink, 
  className, 
  onNavigation 
}: BtnProps) => {
  const router = useTransitionRouter();
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Call the custom onNavigation handler if provided
    if (onNavigation) {
      onNavigation(e, routeLink);
    }
    
    // Perform the navigation with transition
    handleNavigation(e, routeLink);
  };

  const handleNavigation = (e: MouseEvent<HTMLAnchorElement>, url: string) => {
    router.push(url, {
      onTransitionReady: pageAnimation,
    });
  };


  return (
    <Link 
      
      href={routeLink}
      onClick={handleClick}
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

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 1,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default Button;