"use client";
import React, { useState } from "react";
import LionLogo from "../../../public/assets/logos/since-2005.svg";
import QualityLogo from "../../../public/assets/logos/focus-on-quality.svg";
import CustomerServiceLogo from "../../../public/assets/logos/customer-service.svg";
import Image from "next/image";
import Parallelogram from "../components/parallelogram";
const CardsSection = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <section className="min-h-screen lg:h-screen bg-black lg:p-20">
      <div className="grid lg:grid-cols-3 xl:gap-16 2xl:gap-32 h-full w-full lg:p-20">
      <div
          className={`group col-span-1 h-full bg-[#707070] items-center py-10 sm:p-20 flex flex-col justify-between hover:-translate-y-3 transition-all duration-300 ${
            isClicked ? "-translate-y-3" : ""
          }`}
          onClick={() => setIsClicked(!isClicked)}
        >
          <div className=" w-full flex flex-col justify-center items-center gap-3">
            <h1 className={`flex justify-center [&>span]:inline-block [&>span]:mx-0.5 [&>span]:text-3xl font-[50] uppercase text-amber-400 font-raleway mt-10 max-sm:mt-0 ${
                isClicked ? "-translate-y-2" : "group-hover:translate-y-2"
              } transition-all duration-500`}>
              <span className="rotate-[-16deg] translate-y-1">S</span>
              <span className="rotate-[-6deg]">i</span>
              <span className="rotate-0">n</span>
              <span className="rotate-[6deg] ">c</span>
              <span className="rotate-[12deg] translate-y-1">e</span>
            </h1>
            <Image
              src={LionLogo}
              alt="Lion Logo"
              className="w-[140px] h-auto"
            />
            <h1 className={`font-raleway text-2xl text-amber-400 font-thin -translate-y-4 sm:-translate-y-[32px] transition-all duration-300 ${
                isClicked ? "translate-y-[2px]" : "group-hover:translate-y-2"
              }`}>
              20
              <br />
              25
            </h1>
          </div>
          <div className="group-hover:translate-y-2 transition-all duration-300 mt-5 sm:mt-0">
            <Parallelogram />
          </div>
        </div>
        <div
          className={`group col-span-1 h-full bg-[#707070] items-center py-10 sm:p-20 flex flex-col justify-between hover:-translate-y-3 transition-all duration-300 ${
            isClicked ? "-translate-y-3" : ""
          }`}
          onClick={() => setIsClicked(!isClicked)}
        >
          <div className=" w-full flex flex-col justify-center items-center gap-3">
            <h1 className={`font-[50] uppercase text-amber-400 text-2xl tracking-[3px] text-center leading-[100%] italic group-hover:-translate-y-3 transition-all duration-300 font-raleway  ${
                isClicked ? "-translate-y-3" : "group-hover:-translate-y-3"
              }`}>
              focus on
              <br />
              quality
            </h1>
            <Image
              src={QualityLogo}
              alt="Lion Logo"
              className="w-[140px] h-auto mb-8 mt-8"
            />
          </div>
          <div className="group-hover:translate-y-2 transition-all duration-300 mt-5 sm:mt-0">
            <Parallelogram />
          </div>
        </div>
        <div
          className={`group col-span-1 h-full bg-[#707070] items-center py-10 sm:p-20 flex flex-col justify-between hover:-translate-y-3 transition-all duration-300 ${
            isClicked ? "-translate-y-3" : ""
          }`}
          onClick={() => setIsClicked(!isClicked)}
        >
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <h1
              className={`font-[50] uppercase text-amber-400 text-2xl tracking-[3px] text-center leading-[100%] italic transition-all duration-300 font-raleway ${
                isClicked ? "-translate-y-3" : "group-hover:-translate-y-3"
              }`}
            >
              best
              <br />
              customer
              <br />
              service
            </h1>
            <Image
              src={CustomerServiceLogo}
              alt="Lion Logo"
              className="w-[120px] h-auto mb-8 mt-4"
            />
          </div>
          <div
            className={`transition-all duration-300 hidden sm:flex ${
              isClicked ? "translate-y-2" : "group-hover:translate-y-2"
            }`}
          >
            <Parallelogram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
