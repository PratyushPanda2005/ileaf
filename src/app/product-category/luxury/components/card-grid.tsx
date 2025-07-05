import Button from "@/app/components/button";
import { luxuryDoorsData } from "@/app/config/products/luxury/luxury";
import Image from "next/image";
import React from "react";

interface ProductGridCardProps {
  heading?: string;
  imageSrc: string;
  imageAlt: string;
  routeLink: string;
}

const ProductGridCard: React.FC<ProductGridCardProps> = ({
  heading,
  imageSrc,
  imageAlt,
  routeLink,
}) => {
  return (
    <div className="flex flex-col justify-between items-center col-span-1 row-span-1 gap-6 pt-10 bg-[#707070] relative overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="w-auto h-[300px] object-contain mb-4"
        width={300}
        height={200}
      />
      <Button
        routeLink={routeLink}
        title="view details"
        bgColor="black"
        textColor="#FFBF00"
      />
      <div className="w-40 h-14 bg-[#ffbf00] transform -skew-x-[-20deg] absolute top-0 left-0 rotate-[270deg] -translate-x-[32.4%] translate-y-[75%] flex justify-center items-center p-4">
        <h1 className="text-black transform skew-x-[-20deg] font-raleway font-semibold">
          {heading}
        </h1>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const luxuryDoors = luxuryDoorsData["Luxury Doors"].series[0].variants;
  return (
    <section className="min-h-screen bg-black p-10 lg:p-20">
      <h1 className="text-[#707070] font-raleway mb-10 tracking-[1px] text-[14px]">Showing all {luxuryDoors.length} results</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-row-2 gap-3.5">
        {luxuryDoors.map((variant) => (
          <ProductGridCard
            key={variant.id}
            heading={variant.id}
            routeLink={`/product-category/luxury/${variant.number}`}
            imageSrc={variant.image}
            imageAlt={`${variant.id} luxury door`}
          />
        ))}
      </div>
      <h1 className="text-[#707070] font-raleway mt-10 tracking-[1px] text-[14px]">Showing all {luxuryDoors.length} results</h1>
    </section>
  );
};

export default CardGrid;
