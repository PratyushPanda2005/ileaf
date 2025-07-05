import Parallelogram from "@/app/components/parallelogram";
import ProductCategory from "@/app/components/product-category";
import ProductHero from "@/app/components/productsHero";
import { glDoorsData } from "@/app/config/products/gldoors/gldoors";
import React from "react";
import CardGrid from "./components/card-grid";

const GLDoors = () => {
  const glDoors = glDoorsData["GL Doors"];
  return (
    <>
      <ProductHero
        headingOne="Long Lasting"
        headingTwo="Robust"
        headingThree="Security"
        bgImage="https://www.ileafdoors.com/wp-content/uploads/2025/05/Hero-Gl-doors-scaled.webp"
      />
      <div className="bg-black text-white flex flex-col justify-center items-center px-20 pt-20">
        <h1 className="font-raleway tracking-[1px] text-[14px] font-[300] text-center max-w-3xl leading-[180%]">
          {glDoors.description}
        </h1>
        <Parallelogram />
      </div>
      <ProductCategory />
      <CardGrid />
    </>
  );
};

export default GLDoors;
