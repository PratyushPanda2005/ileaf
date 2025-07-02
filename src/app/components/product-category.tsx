import Link from "next/link";
import React from "react";

const ProductCategory = () => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-black">
      <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row p-[120px] justify-evenly items-center w-full">
        <Link
          href="/product-category/luxury"
          className="group text-[#707070] text-lg font-blafhyglibs tracking-[4px]"
        >
          <h1>Luxury Doors</h1>
          <div className="w-full flex justify-center items-center mt-4">
            <div className="hidden lg:flex w-4 h-2 bg-[#707070] group-hover:bg-amber-300 transform skew-x-[-200deg] transition-all duration-300" />
          </div>
        </Link>
        <Link
          href="/product-category/gldoors"
          className="group text-[#707070] text-lg font-blafhyglibs tracking-[4px] "
        >
          <h1>GL Doors</h1>
          <div className="w-full flex justify-center items-center mt-4">
            <div className="hidden lg:flex w-4 h-2 bg-[#707070] group-hover:bg-amber-300 transform skew-x-[-200deg] transition-all duration-300" />
          </div>
        </Link>
        <Link
          href="/product-category/gidoors"
          className="group text-[#707070] text-lg font-blafhyglibs tracking-[4px]"
        >
          <h1>Gi Doors</h1>
          <div className="w-full flex justify-center items-center mt-4">
            <div className="hidden lg:flex w-4 h-2 bg-[#707070] group-hover:bg-amber-300 transform skew-x-[-200deg] transition-all duration-300" />
          </div>
        </Link>
        <Link
          href="/product-category/windows"
          className="group text-[#707070] text-lg font-blafhyglibs tracking-[4px]"
        >
          <h1>Windows</h1>
          <div className="w-full flex justify-center items-center mt-4">
            <div className="hidden lg:flex w-4 h-2 bg-[#707070] group-hover:bg-amber-300 transform skew-x-[-200deg] transition-all duration-300" />
          </div>
        </Link>
        <Link
          href="/product-category/fibredoors"
          className="group text-[#707070] text-lg font-blafhyglibs tracking-[4px]"
        >
          <h1>Fibre Doors</h1>
          <div className="w-full flex justify-center items-center mt-4">
            <div className="hidden lg:flex w-4 h-2 bg-[#707070] group-hover:bg-amber-300 transform skew-x-[-200deg] transition-all duration-300" />
          </div>
        </Link>
        <Link
          href="/product-category/wpcdoors"
          className="group text-[#707070] text-lg font-blafhyglibs tracking-[4px]"
        >
          <h1>WPC Doors</h1>
          <div className="w-full flex justify-center items-center mt-4">
            <div className="hidden lg:flex w-4 h-2 bg-[#707070] group-hover:bg-amber-300 transform skew-x-[-200deg] transition-all duration-300" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCategory;
