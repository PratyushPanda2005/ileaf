import React from "react";
import Button from "./button";

const ProductCard = ({
  heading1,
  heading2,
  description_1,
  description_2,
  description_3,
  description_4,
  description_5,
  description_6,
  doorImage,
}: {
  doorImage: string;
  heading1: string;
  heading2: string;
  description_1?: string;
  description_2?: string;
  description_3?: string;
  description_4?: string;
  description_5?: string;
  description_6?: string;
}) => {
  return (
    <div className="w-full min-h-screen flex  flex-col md:flex-row bg-[#dbdbdb] justify-evenly py-20 px-6 inset-0">
      <div className="text-center md:w-1/3 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-blafhyglibs tracking-[4px] lg:tracking-[7px] italic leading-[120%]">
          {heading1}
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-blafhyglibs tracking-[4px] lg:tracking-[7px] italic leading-[120%]">
          {heading2}
        </h1>
        <div className="flex w-full justify-center items-center mt-4">
          <div className="w-4 h-1.5 bg-[#FFC600] transform skew-x-[-200deg]" />
        </div>
      </div>
      <div className="md:w-1/3  flex md:hidden justify-center items-center mt-6 mb-6">
        <img
          src={doorImage}
          alt=""
          width={500}
          height={500}
          className="h-[320px] md:h-[30vw] w-auto"
        />
      </div>

      <div className="flex-1 flex flex-col  justify-center items-center md:w-1/3 ">
        <p className="text-center text-sm italic text-black max-w-xs font-raleway leading-[150%]">
          {description_1}
          <br/>
          {description_2}
          <br/>
          {description_3}
          <br/>
          {description_4}
          <br/>
          {description_5}
          <br/>
          {description_6}
        </p>
        <Button
        title="Explore now"
        bgColor="#FFBF00"
        textColor="black"
        />
      </div>
      <div className="md:w-1/3 hidden md:flex justify-center items-center ">
        <img
          src={doorImage}
          alt=""
          width={500}
          height={500}
          className="h-[120px] md:h-[30vw] w-auto"
        />
      </div>
    </div>
  );
};

export default ProductCard;
