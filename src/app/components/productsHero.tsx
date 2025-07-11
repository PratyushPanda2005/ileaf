"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProductHero = ({
  headingOne,
  headingTwo,
  headingThree,
  headingFour,
  bgImage
}: {
  headingOne?: string;
  headingTwo?: string;
  headingThree?: string;
  headingFour?: string;
  bgImage: string;
}) => {

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
    <div className="h-[calc(60vh-64px)] sm:min-h-screen relative top-0 left-0 w-full overflow-x-hidden z-[-1]">
      <div className="relative h-[60vh] sm:h-screen w-full">
        <div ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-bg-bounce"
          style={{
            backgroundImage:
              `url(${bgImage})`,
              backgroundPosition: 'center 30%', 
            willChange: 'background-position'
          }}
        >
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center">
          <div className="flex-1 flex items-center justify-end px-6 md:px-8 lg:px-12 w-[85%]">
            <div className="max-w-2xl text-right ">
              <div className="text-3xl md:text-4xl lg:text-5xl italic text-[#ffbf00] leading-[140%] font-blafhyglibs font-[300] text-center">
                <h1 className="font-style">{headingOne}</h1>
                <h1 className="font-style">{headingTwo}</h1>
                <h1 className="font-style">{headingThree}</h1>
                <h1 className="font-style">{headingFour}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
