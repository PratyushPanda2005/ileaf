'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "motion/react"

const ProductCategory = () => {
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="hidden lg:flex items-center justify-center bg-black">
      <motion.div initial={{opacity: 0, y : 40}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1.3}} className="flex flex-col gap-6 lg:gap-0 lg:flex-row px-[120px] pb-20 pt-[120px] justify-evenly items-center w-full">
        <Link
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

export default ProductCategory;
