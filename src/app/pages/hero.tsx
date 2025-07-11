"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        backgroundPosition: "center 80%", 
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top top", 
          end: "bottom top", 
          scrub: 1, 
          markers: false 
        }
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <div className="h-[calc(60vh-64px)] sm:min-h-screen relative top-0 left-0 w-full">
      <div className="relative h-[60vh] sm:h-screen w-full">
        <div ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-bg-bounce"
          style={{
            backgroundImage: 'url("https://www.ileafdoors.com/wp-content/uploads/2024/12/hero-01.webp")',
            backgroundPosition: 'center 30%', 
            willChange: 'background-position'
          }}
        ></div>
        <div className="hidden lg:flex lg:flex-col absolute top-[20%] left-[5.5%] text-amber-400 font-raleway uppercase text-xs tracking-[0.1em]">
          <h1>Download <br/> Brochure</h1>
          <div className="w-3.5 h-1.5 bg-amber-300 transform skew-x-[-200deg] mt-4" />
        </div>

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