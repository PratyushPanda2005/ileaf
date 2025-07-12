'use client'
import React, { useEffect, useRef } from "react";
import Parallelogram from "../components/parallelogram";
import { ChevronUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Parallax = ({
  title,
  bgImage,
  className,
}: {
  title?: string;
  bgImage: string;
  className?: string;
}) => {

  const parallaxRef = useRef(null)

  useEffect(() => {
    if (!parallaxRef.current) return;
    
    gsap.to(parallaxRef.current, {
      backgroundPositionY: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top bottom",
        end: "bottom top", 
        scrub: 1,
      }
    })
  }, [])
  return (
    <section  className="h-[40vh] md:h-[55vh] w-full relative">
      <div ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-[position:center_60%] bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="relative h-full flex flex-col items-center justify-evenly">
          <div className="flex flex-col w-full items-center justify-center">
            <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-blafhyglibs tracking-[4px] lg:tracking-[7px] italic">
              {title}
            </h1>
            <div className={`${className}`}>
              <Parallelogram />
            </div>
          </div>
          <div className="bg-amber-400 rounded-full sm:hidden absolute bottom-6">
            <ChevronUp strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
