import Image from "next/image";
import React from "react";
import { security, easy_to_install, fireproof, soundproof, eco_friendly } from "../config";


const WhyUs = () => {
  return (
    <section className="min-h-screen bg-black lg:px-20 md:pb-20">
      <div className="flex flex-col gap-6 justify-center items-center p-10 md:p-20 bg-black md:bg-[#707070] ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-blafhyglibs tracking-[3px] lg:tracking-[7px] italic text-white uppercase">
          Why us
        </h1>
        <div className="w-4 h-2 bg-amber-300 transform skew-x-[-200deg]" />
      </div>
      <div className="flex flex-col md:gap-10 md:mb-10 lg:mb-16">
        <div className="w-full bg-amber-400 sticky top-0 ">
          <Image src={security} width={400} height={400} className="h-full w-full object-cover" alt="Security" />
        </div>
        <div className="w-full bg-amber-400 sticky top-0 z-[2]">
          <Image src={easy_to_install} width={400} height={400} className="h-full w-full object-cover" alt="Security" />
        </div>
        <div className="w-full bg-amber-400 sticky top-0 z-[3]">
          <Image src={fireproof} width={400} height={400} className="h-full w-full object-cover" alt="Security" />
        </div>
        <div className="w-full bg-amber-400 sticky top-0 z-[4]">
          <Image src={soundproof} width={400} height={400} className="h-full w-full object-contain" alt="Security" />
        </div>
        <div className="w-full bg-amber-400 sticky top-0 z-[5]">
          <Image src={eco_friendly} width={400} height={400} className="h-full w-full" alt="Security" />
        </div>
      </div>
      <div className="w-full hidden md:flex justify-center items-center">
        <button className="uppercase p-3 px-6 lg:p-4 lg:px-8 transform -skew-x-12 text-sm lg:text-base bg-[#707070] text-amber-400">
          Explore now
        </button>
      </div>
    </section>
  );
};

export default WhyUs;
