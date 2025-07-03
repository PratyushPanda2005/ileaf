import Image, { StaticImageData } from "next/image";
import React from "react";
import LuxuryDoor from "../../../../public/assets/doors/Villa-doors.webp";
import GLDoor from "../../../../public/assets/doors/GL-doors.webp";
import GiDoor from "../../../../public/assets/doors/Gi-doors.webp";
import Windows from "../../../../public/assets/doors/Stell-Window.webp";
import FibreDoor from "../../../../public/assets/doors/DUTON.webp";
import WPCDoor from "../../../../public/assets/doors/WPC-doors.webp";
import Button from "@/app/components/button";

interface ProductGridCardProps {
  heading?: string;
  subheading?: string; // Made optional with ?
  imageSrc: StaticImageData;
  imageAlt: string;
}

const ProductGridCard: React.FC<ProductGridCardProps> = ({
  heading,
  subheading = "",
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="flex flex-col justify-between items-center col-span-1 row-span-1 gap-6 p-10 bg-[#707070]">
      <h1 className="category-heading font-serif italic text-2xl">{heading}</h1>
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="w-auto h-[320px] object-contain"
        width={300}
        height={200}
      />
      <h2 className="category-subheading text-md text-center max-w-[50%] italic  font-thin">
        {subheading}
      </h2>
      <Button 
      title=""
      />
    </div>
  );
};

const ProductGrid = () => {
  return (
    <section className="min-h-screen px-10 lg:px-20 bg-black">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-row-2 gap-10">
        <ProductGridCard
          heading="Luxury Doors"
          imageSrc={LuxuryDoor}
          imageAlt=""
          subheading="Unbeatable Strength. Unmatched Beauty. Long Life Span."
        />
        <ProductGridCard
          heading="GL Doors"
          imageSrc={GLDoor}
          imageAlt=""
          subheading="Elevate safety and elegance"
        />
        <ProductGridCard
          heading="Gi Doors"
          imageSrc={GiDoor}
          imageAlt=""
          subheading="Long lasting robust security"
        />
        <ProductGridCard
          heading="Windows"
          imageSrc={Windows}
          imageAlt=""
          subheading="Strength and simplicity for modern homes"
        />
        <ProductGridCard
          heading="Fibre Doors"
          imageSrc={FibreDoor}
          imageAlt=""
          subheading="Lightweight durability with stylish finishes"
        />
        <ProductGridCard
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
