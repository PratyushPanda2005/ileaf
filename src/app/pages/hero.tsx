"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-[calc(60vh-64px)] sm:min-h-screen relative top-0 left-0 w-full">
      <div className="relative h-[60vh] sm:h-screen w-full overflow-hidden">
        <div
          className={`absolute inset-0 bg-no-repeat transition-all duration-1000 ease-in-out ${
            !animationComplete ? 'animate-bg-bounce sm:animate-bg-bounce-vertical' : ''
          }`}
          style={{
            backgroundImage:
              'url("https://www.ileafdoors.com/wp-content/uploads/2024/12/hero-01.webp")',
            backgroundSize: '110% 110%',
            backgroundPosition: 'center center',
            animationIterationCount: '2',
            animationDuration: '2s',
            animationTimingFunction: 'ease-in-out'
          }}
        />
        
        <div className="hidden lg:flex lg:flex-col absolute top-[20%] left-[5.5%] text-amber-400 font-raleway uppercase text-xs tracking-[0.1em] z-20">
          <h1>Download <br/> Brochure</h1>
          <div className="w-3.5 h-1.5 bg-amber-300 transform skew-x-[-200deg] mt-4" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center">
          <div className="flex-1 flex items-start sm:items-center justify-center sm:justify-end w-[90%] py-10">
            <div className="max-w-2xl md:text-right text-center">
              <h1 className="text-2xl md:text-3xl italic text-yellow-400 lg:text-white leading-tight mb-2 lg:mb-4">
                <span className="block mb-2 lg:mb-6 md:mr-16 lg:mr-32 font-blafhyglibs tracking-[4px] lg:tracking-[7px]">
                  The Door to
                </span>
                <span className="block italic md:mr-12 lg:mr-20 font-blafhyglibs tracking-[4px] lg:tracking-[7px]">
                  Unmatched
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic text-amber-400 leading-tight">
                <span className="inline-block md:mr-6 font-blafhyglibs tracking-[4px] lg:tracking-[7px]">
                  S<span className="inline-block"><div className="w-2 lg:w-3.5 h-1 lg:h-1.5 bg-amber-400 transform skew-x-[-200deg] ml-2" />a</span>fety and Security
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