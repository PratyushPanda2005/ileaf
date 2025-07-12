import Image, { StaticImageData } from "next/image";
import React from "react";
import LuxuryDoor from "../../../../public/assets/doors/Villa-doors.webp";
import GLDoor from "../../../../public/assets/doors/GL-doors.webp";
import GiDoor from "../../../../public/assets/doors/Gi-doors.webp";
import Windows from "../../../../public/assets/doors/Stell-Window.webp";
import FibreDoor from "../../../../public/assets/doors/DUTON.webp";
import WPCDoor from "../../../../public/assets/doors/WPC-doors.webp";
import Button from "@/app/components/button";
import Parallelogram from "@/app/components/parallelogram";

interface ProductGridCardProps {
  heading?: string;
  subheading?: string; // Made optional with ?
  imageSrc: StaticImageData;
  imageAlt: string;
  routeLink: string;
}

const ProductGridCard: React.FC<ProductGridCardProps> = ({
  heading,
  subheading = "",
  imageSrc,
  imageAlt,
  routeLink
}) => {
  return (
    <div className="flex flex-col justify-between items-center col-span-1 row-span-1 gap-6 p-10 bg-[#707070] relative">
      <h1 className="font-style text-lg !tracking-[3px]">{heading}</h1>
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="w-auto h-[280px] object-contain"
        width={300}
        height={200}
      />
      <h2 className="about-para uppercase !text-xs !text-center w-full !max-w-[60%]">
        {subheading}
      </h2>
      <Button 
      routeLink={routeLink}
      title="explore"
      bgColor="black"
      textColor="#FFBF00"
      bgHoverColor="#000000"
      />
      <div className="absolute right-6 top-0">
      <Parallelogram/>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <section className="min-h-screen px-10 lg:px-20 bg-black py-20">
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-row-2 gap-10">
        <ProductGridCard
          routeLink="/product-category/luxury"
          heading="Luxury Doors"
          imageSrc={LuxuryDoor}
          imageAlt=""
          subheading="Unbeatable Strength. Unmatched Beauty. Long Life Span."
        />
        <ProductGridCard
          routeLink="/product-category/gldoors"
          heading="GL Doors"
          imageSrc={GLDoor}
          imageAlt=""
          subheading="Elevate safety and elegance"
        />
        <ProductGridCard
        routeLink="/product-category/gidoors"
          heading="Gi Doors"
          imageSrc={GiDoor}
          imageAlt=""
          subheading="Long lasting robust security"
        />
        <ProductGridCard
        routeLink="/product-category/windows"
          heading="Windows"
          imageSrc={Windows}
          imageAlt=""
          subheading="Strength and simplicity for modern homes"
        />
        <ProductGridCard
        routeLink="/product-category/fibredoors"
          heading="Fibre Doors"
          imageSrc={FibreDoor}
          imageAlt=""
          subheading="Lightweight durability with stylish finishes"
        />
        <ProductGridCard
        routeLink="/product-category/wpcdoors"
          heading="WPC Doors"
          imageSrc={WPCDoor}
          imageAlt=""
          subheading="Eco-friendly and waterproof solutions for every space"
        />
      </div>
    </section>
  );
};

export default ProductGrid;
