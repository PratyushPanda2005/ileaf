"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen relative top-0 left-0 w-full overflow-x-hidden z-[-1]">
      <div className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://www.ileafdoors.com/wp-content/uploads/2024/12/hero-01.webp")',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center">
          <div className="flex-1 flex items-center justify-end px-6 md:px-8 lg:px-12 w-[80%]">
            <div className="max-w-2xl text-right ">
              <h1 className="text-3xl md:text-4xl italic font-serif font-light text-white leading-tight mb-4 ">
                <span className="block mb-2 md:mb-4 mr-12 md:mr-16">
                  The Door to
                </span>
                <span className="block italic mr-8 md:mr-12">Unmatched</span>
              </h1>

              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic text-amber-400 leading-tight font-serif font-thin">
                <span className="inline-block mr-4 md:mr-6">Safety</span>
                <span className="">and</span>
                <span className="inline-block ml-4 md:ml-6">Security</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
