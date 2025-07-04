"use client";
import React from "react";

const Hero = () => {
  

  return (
    <div className="min-h-screen relative top-0 left-0 w-full">
      <div className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://www.ileafdoors.com/wp-content/uploads/2024/12/hero-01.webp")',
          }}
        ></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center">
          <div className="flex-1 flex items-start sm:items-center justify-center sm:justify-end w-[90%] py-10 ">
            <div className="max-w-2xl md:text-right text-center">
              <h1 className="text-2xl md:text-3xl italic  text-yellow-400 lg:text-white leading-tight mb-2 lg:mb-4 ">
                <span className="block mb-2 lg:mb-6 md:mr-16 lg:mr-32 font-blafhyglibs tracking-[4px] lg:tracking-[7px]">
                  The Door to
                </span>
                <span className="block italic md:mr-12 lg:mr-20 font-blafhyglibs tracking-[4px] lg:tracking-[7px]">
                  Unmatched
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic text-amber-400 leading-tight">
                <span className="inline-block md:mr-6 font-blafhyglibs tracking-[4px] lg:tracking-[7px]">
                  Safety and Security
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
