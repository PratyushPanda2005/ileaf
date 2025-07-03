"use client";
import React from "react";

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
  return (
    <div className="min-h-screen relative top-0 left-0 w-full overflow-x-hidden z-[-1]">
      <div className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              `url(${bgImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center">
          <div className="flex-1 flex items-center justify-end px-6 md:px-8 lg:px-12 w-[80%]">
            <div className="max-w-2xl text-right ">
              <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic text-amber-400 leading-tight font-serif font-thin">
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
