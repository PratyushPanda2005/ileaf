import Image from "next/image";
import React from "react";
import MaskImage from "../../../public/assets/bg/mask-image.png";
const Customer = () => {
  return (
    <section className="min-h-screen px-10 lg:px-20">
      <div
        style={{
          backgroundImage:
            "url(https://www.ileafdoors.com/wp-content/uploads/2025/06/our-customers-say-hero2.webp)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="relative"
      >
        <div className="absolute top-0 z-10 w-1/2 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="mb-10 text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl italic font-serif">
                Our
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl italic font-serif">
                {" "}
                Customer&apos;s{" "}
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl italic font-serif">
                Say
              </h1>
            </div>
            <button className="uppercase p-3 px-6 lg:p-4 lg:px-8 transform -skew-x-12 text-sm lg:text-base bg-amber-400 text-black">
              Explore now
            </button>
          </div>
        </div>
        <Image src={MaskImage} alt="Mask Image" className="w-full relative" />
      </div>
      <section className="bg-black min-h-screen gallery">
        <div className="flex flex-col gap-6 justify-center items-center p-20">
          <h1 className="text-3xl md:text-4xl font-serif italic text-white tracking-wide">
            Gallery
          </h1>
          <div className="w-4 h-2 bg-amber-300 transform skew-x-[-200deg]" />
        </div>
        <div className="w-full h-full md:grid-cols-2 md:grid-rows-2 bg-amber-400">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </section>
    </section>
  );
};

export default Customer;
