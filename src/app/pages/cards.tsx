import React from "react";
import LionLogo from "../../../public/assets/logos/since-2005.svg";
import QualityLogo from "../../../public/assets/logos/focus-on-quality.svg";
import CustomerServiceLogo from "../../../public/assets/logos/customer-service.svg";
import Image from "next/image";
import Parallelogram from "../components/parallelogram";
const CardsSection = () => {
  return (
    <section className="min-h-screen lg:h-screen bg-black lg:p-20">
      <div className="grid lg:grid-cols-3 xl:gap-16 2xl:gap-32 h-full w-full lg:p-20">
        <div className="col-span-1 h-full bg-[#707070] items-center p-20 flex flex-col justify-between hover:-translate-y-3 transition-all duration-300">
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <h1 className="font-[50] uppercase text-amber-400 text-2xl tracking-[3px] text-center">
              SINCE
            </h1>
            <Image
              src={LionLogo}
              alt="Lion Logo"
              className="w-[160px] h-auto"
            />
            <h1 className="font-raleway text-2xl text-amber-400 font-thin -translate-y-[32px]">
              20
              <br />
              25
            </h1>
          </div>
          <Parallelogram />
        </div>
        <div className="col-span-1 h-full bg-[#707070] items-center p-20 flex flex-col justify-between hover:-translate-y-3 transition-all duration-300">
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <h1 className="font-[50] uppercase text-amber-400 text-2xl tracking-[3px] text-center leading-[100%] italic">
              focus on<br/>quality
            </h1>
            <Image
              src={QualityLogo}
              alt="Lion Logo"
              className="w-[160px] h-auto"
            />
          </div>
          <Parallelogram />
        </div>
        <div className="col-span-1 h-full bg-[#707070] items-center p-20 flex flex-col justify-between hover:-translate-y-3 transition-all duration-300">
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <h1 className="font-[50] uppercase text-amber-400 text-2xl tracking-[3px] text-center leading-[100%] italic">
              best<br/>customer<br/>service
            </h1>
            <Image
              src={CustomerServiceLogo}
              alt="Lion Logo"
              className="w-[160px] h-auto"
            />
          </div>
          <Parallelogram />
        </div>
    
      </div>
    </section>
  );
};

export default CardsSection;
