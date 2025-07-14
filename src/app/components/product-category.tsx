'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { MouseEvent } from "react";
import { motion } from "motion/react"
import { useTransitionRouter } from "next-view-transitions";

const ProductCategory = () => {
  const pathname = usePathname()
  const router = useTransitionRouter();
  const isActive = (href: string) => {
    return pathname === href;
  };

  const handleNavigation = (e: MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    router.push(url, {
      onTransitionReady: pageAnimation,
    });
  };

  return (
    <div className="hidden lg:flex items-center justify-center bg-black">
      <motion.div initial={{opacity: 0, y : 40}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1.3}} className="flex flex-col gap-6 lg:gap-0 lg:flex-row px-[120px] pb-20 pt-[120px] justify-evenly items-center w-full">
        <Link 
          onClick={(e) => handleNavigation(e, "/product-category/luxury")}
          href="/product-category/luxury"
          className="group text-[#707070] text-lg font-blafhyglibs tracking-[4px]"
        >
          <h1>Luxury Doors</h1>
          <div className="flex w-full justify-center items-center mt-6">
            <div  className={`w-3.5 h-1.5 bg-[#707070] group-hover:bg-amber-300 transform skew-x-[-200deg] ${
            isActive("/product-category/luxury") ? "bg-amber-300" : "bg-[#707070]"
          }`} />
          </div>
        </Link>
        <Link
          onClick={(e) => handleNavigation(e, "/product-category/gldoors")}
          href="/product-category/gldoors"
          className="group text-[#707070] text-lg font-blafhyglibs tracking-[4px] "
        >
          <h1>GL Doors</h1>
          <div className="flex w-full justify-center items-center mt-6">
            <div className={`w-3.5 h-1.5 bg-[#707070] group-hover:bg-amber-300 transform skew-x-[-200deg] ${
            isActive("/product-category/gldoors") ? "bg-amber-300" : "bg-[#707070]"
          }`} />
          </div>
        </Link>
        <Link
          onClick={(e) => handleNavigation(e, "/product-category/gidoors")}
          href="/product-category/gidoors"
          className="group text-[#707070] text-lg font-blafhyglibs tracking-[4px]"
        >
          <h1>Gi Doors</h1>
          <div className="flex w-full justify-center items-center mt-6">
            <div className={`w-3.5 h-1.5 bg-[#707070] group-hover:bg-amber-300 transform skew-x-[-200deg] ${
            isActive("/product-category/gidoors") ? "bg-amber-300" : "bg-[#707070]"
          }`}  />
          </div>
        </Link>
        <Link
          onClick={(e) => handleNavigation(e, "/product-category/windows")}
          href="/product-category/windows"
          className="group text-[#707070] text-lg font-blafhyglibs tracking-[4px]"
        >
          <h1>Windows</h1>
          <div className="flex w-full justify-center items-center mt-6">
            <div className={`w-3.5 h-1.5 bg-[#707070] group-hover:bg-amber-300 transform skew-x-[-200deg] ${
            isActive("/product-category/windows") ? "bg-amber-300" : "bg-[#707070]"
          }`}  />
          </div>
        </Link>
        <Link
          onClick={(e) => handleNavigation(e, "/product-category/fibredoors")}
          href="/product-category/fibredoors"
          className="group text-[#707070] text-lg font-blafhyglibs tracking-[4px]"
        >
          <h1>Fibre Doors</h1>
          <div className="flex w-full justify-center items-center mt-6">
            <div className={`w-3.5 h-1.5 bg-[#707070] group-hover:bg-amber-300 transform skew-x-[-200deg] ${
            isActive("/product-category/fibredoors") ? "bg-amber-300" : "bg-[#707070]"
          }`}  />
          </div>
        </Link>
        <Link
          onClick={(e) => handleNavigation(e, "/product-category/wpcdoors")}
          href="/product-category/wpcdoors"
          className="group text-[#707070] text-lg font-blafhyglibs tracking-[4px]"
        >
          <h1>WPC Doors</h1>
          <div className="flex w-full justify-center items-center mt-6">
            <div className={`w-3.5 h-1.5 bg-[#707070] group-hover:bg-amber-300 transform skew-x-[-200deg] ${
            isActive("/product-category/wpcdoors") ? "bg-amber-300" : "bg-[#707070]"
          }`}  />
          </div>
        </Link>
      </motion.div>
    </div>
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

export default ProductCategory;