"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      const isMobile = window.innerWidth < 768;

      if(isMobile) {
        const mobileTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top top", 
            end: "bottom 30%", 
            scrub: true, 
          }
        });
        
        mobileTimeline
          .fromTo(imageRef.current, 
            { x: "-30%" },
            {
              x: "0%",
              duration: 1.25,
              ease: "power2.inOut",
            }
          )
        
      }

      if(!isMobile) {
        gsap.fromTo(imageRef.current, 
          { y: "-15%" },
          {
            y: "0%",
            duration: 1.25,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 3,
            repeatDelay: 0
          }
        );
      }
      
      gsap.to(imageRef.current, {
        y: "-15%",
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
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
      <div className="relative h-[60vh] sm:h-screen w-full overflow-hidden">
        <div 
          ref={imageRef}
          className="absolute inset-0 max-sm:w-[200%] w-full h-[120%] will-change-transform"
          style={{
            transform: 'translateY(-10%)',
            willChange: 'transform'
          }}
        >
          <Image
            src="https://res.cloudinary.com/db4zbyipc/image/upload/v1752411438/home-hero_1_1_zlk7mp.webp"
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>

        <div className="hidden lg:flex lg:flex-col absolute top-[20%] left-[5.5%] text-amber-400 font-raleway uppercase text-xs tracking-[0.1em] z-20">
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