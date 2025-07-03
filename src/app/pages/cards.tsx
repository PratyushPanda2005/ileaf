import React from "react";
import LionLogo from "../../../public/assets/logos/Group 244.svg";
import QualityLogo from "../../../public/assets/logos/Group 243.svg";
import CustomerServiceLogo from "../../../public/assets/logos/Group 109.svg";
import Image from "next/image";
const CardsSection = () => {
  return (
    <section className="min-h-screen bg-black lg:p-20">
      <div className="grid lg:grid-cols-3 lg:gap-20 h-full w-full lg:p-20">
        <div className="grid-cols-1 h-full bg-[#707070] flex justify-center items-center p-10">
          <Image src={LionLogo} alt="Lion Logo" className="" />
        </div>
        <div className="grid-cols-1 h-full bg-[#707070] flex justify-center items-center">
          <Image src={QualityLogo} alt="Quality Logo" className="" />
        </div>
        <div className="grid-cols-1 h-full bg-[#707070] flex justify-center items-center">
          <Image src={CustomerServiceLogo} alt="Customer Service Logo" />
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
