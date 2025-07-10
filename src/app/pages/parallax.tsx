import React from "react";
import Parallelogram from "../components/parallelogram";
import MobileMenu from "../components/mobile-menu";

const Parallax = ({
  title,
  bgImage,
  className,
}: {
  title?: string;
  bgImage: string;
  className?: string;
}) => {
  return (
    <section className="h-[40vh] md:h-[55vh] w-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="h-full flex flex-col items-center justify-evenly">
          <div className="flex flex-col w-full items-center justify-center">
            <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-blafhyglibs tracking-[4px] lg:tracking-[7px] italic">
              {title}
            </h1>
            <div className={`${className}`}>
              <Parallelogram />
            </div>
          </div>
          <div className="flex lg:hidden w-full">
            <MobileMenu/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
