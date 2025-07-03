import Image from "next/image";
import React from "react";
import Security from "../../../public/assets/whyus/securtiy (1).webp";
import EasyToInstall from "../../../public/assets/whyus/easy-to-install (1).webp";
import Fireproof from "../../../public/assets/whyus/fireproof.webp";
import EcoFriendly from "../../../public/assets/whyus/eco-friendly.webp";
import SoundProof from "../../../public/assets/whyus/soundproof.webp";

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
        <div className="w-full bg-amber-400 sticky top-0">
          <div className="relative h-full w-full">
            <Image
              src={Security}
              className="h-full w-full object-cover"
              alt="Security"
            />

            <div className="absolute top-1/2 -translate-y-[50%] right-[15vw] flex flex-col items-center justify-center">
              <h1 className="text-black md:text-xl lg:text-2xl xl:text-3xl font-style italic text-center">
                Our doors
              </h1>
              <h1 className="font-style  md:text-2xl lg:text-4xl xl:text-5xl text-center">Ensure your <br/> security.</h1>
            </div>
          </div>
        </div>
        <div className="w-full bg-amber-400 sticky top-0 z-[2]">
        <div className="relative h-full w-full">
            <Image
              src={EasyToInstall}
              className="h-full w-full object-cover"
              alt="Security"
            />

            <div className="absolute top-1/2 -translate-y-[50%] left-[20vw] flex flex-col items-center justify-center">
              <h1 className="text-black md:text-xl lg:text-2xl xl:text-3xl font-style italic text-center mb-4">
                Our Doors Are
              </h1>
              <h1 className="font-style  md:text-2xl lg:text-4xl xl:text-5xl text-center">Easy To Install.</h1>
            </div>
          </div>
        </div>
        <div className="w-full bg-amber-400 sticky top-0 z-[3]">
        <div className="relative h-full w-full">
            <Image
              src={Fireproof}
              className="h-full w-full object-cover"
              alt="Security"
            />

            <div className="absolute top-1/2 -translate-y-[50%] left-[15%] flex flex-col items-center justify-center">
              <div className="text-black md:text-2xl lg:text-3xl xl:text-4xl font-style italic text-left flex flex-col gap-3">
                <h1>Our</h1>
                <h1>Doors</h1> 
                <h1>Are</h1>
              </div>
            </div>
            <div className="absolute top-1/2 -translate-y-[50%] right-[15%] flex flex-col items-center justify-center">
              <div className="text-black md:text-2xl lg:text-3xl xl:text-4xl font-style italic text-left flex flex-col gap-3">
                <h1>Fireproof</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-amber-400 sticky top-0 z-[3]">
        <div className="relative h-full w-full">
            <Image
              src={SoundProof}
              className="h-full w-full object-cover"
              alt="Security"
            />

            <div className="absolute top-1/2 -translate-y-[50%] left-[15%] flex flex-col items-center justify-center">
              <div className="text-black md:text-2xl lg:text-3xl xl:text-4xl font-style italic text-left flex flex-col gap-3">
                <h1>Our Doors Are</h1>
                <h1>Soundproof</h1> 
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-amber-400 sticky top-0 z-[3]">
        <div className="relative h-full w-full">
            <Image
              src={EcoFriendly}
              className="h-full w-full object-cover"
              alt="Security"
            />

            <div className="absolute top-1/2 -translate-y-[50%] right-[15%] flex flex-col items-center justify-center">
              <div className="text-black md:text-2xl lg:text-3xl xl:text-4xl font-style italic text-left flex flex-col gap-3">
                <h1>Our Doors Are</h1>
                <h1>Eco-Friendly</h1> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full hidden md:flex justify-center items-center">
        <button className="uppercase p-3 px-6 lg:p-4 lg:px-8 transform -skew-x-12 text-sm lg:text-base bg-[#707070] text-amber-400 font-raleway font-bold">
          Explore now
        </button>
      </div>
    </section>
  );
};

export default WhyUs;
