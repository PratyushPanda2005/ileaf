import React from "react";
import SectionHeading from "../components/sectionheading";
import ProductCard from "../components/product-card";

const ProductRange = () => {
  return (
    <div>
      <SectionHeading />
      <div className="px-10 lg:px-20">
        <div className="sticky top-0">
          <ProductCard 
          heading1="Luxury"
          heading2="Doors"
          description="Made of high quality Cast Aluminium, Galvalume sheets & Carbonated wood with several unique features."
          doorImage="https://www.ileafdoors.com/wp-content/uploads/2025/01/ILZ-D-21.webp" />
        </div>
        <div className="sticky top-0 z-[2]">
          <ProductCard 
          heading1="GL Doors"
          heading2=""
          description="These multi-locking doors features a stunning wooden steel door finish, combining durability with aesthetic appeal."
          doorImage="https://www.ileafdoors.com/wp-content/uploads/2025/04/IL-GL-SG121.webp" />
        </div>
        <div className="sticky top-0 z-[4]">
          <ProductCard 
          heading1="Gi Doors"
          heading2=""
          description="Built from premium galvanised steel, our GI doors provide heightened security with lock points and heavy-duty hinges. These steel wood doors are perfect for homes looking for a balance of affordability and luxury."
          doorImage="https://www.ileafdoors.com/wp-content/uploads/2025/04/IL-Gi-66-TW.webp" />
        </div>
        <div className="sticky top-0 z-[10]">
          <ProductCard 
          heading1="Windows"
          heading2=""
          description="
Our steel windows are crafted with high-quality GI steel, making them termite-proof, weather-resistant, and maintenance-free. Easy to install, they are ideal for modern homes, eliminating the need for carpentry."
          doorImage="https://www.ileafdoors.com/wp-content/uploads/2024/12/EP-3-Panel-CD.webp" />
        </div>
        <div className="sticky top-0 z-[20]">
          <ProductCard 
          heading1="Fibre Doors"
          heading2=""
          description="i-Leaf’s FRP doors offer a lightweight yet durable alternative to wood, perfect for bathrooms, kitchens, and bedrooms. Available in wood colour finishes, these customised doors bring a fresh look to your interiors."
          doorImage="https://www.ileafdoors.com/wp-content/uploads/2025/05/DUTON.webp" />
        </div>
        <div className="sticky top-0 z-[30]">
          <ProductCard 
          heading1="WPC Doors"
          heading2=""
          description="WPC Doors and Frames are widely accepted with its property and so becoming perfect replacement to wooden doors and frames. WPC frames are water proof, termite/ borer resistant and high screw holding capacity."
          doorImage="https://www.ileafdoors.com/wp-content/uploads/2024/12/WPC-Doors.webp" />
        </div>
      </div>
    </div>
  );
};

export default ProductRange;
