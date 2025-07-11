import React from "react";
import ProductHero from "../components/productsHero";
import ProductCategory from "../components/product-category";
import ProductGrid from "./components/product-grid";
import Button from "../components/button";
import { ChevronUp } from "lucide-react";

const ProductsPage = () => {
  return (
    <>
      <ProductHero
        bgImage="https://www.ileafdoors.com/wp-content/uploads/2025/01/hero-03.webp"
        headingOne="Discover"
        headingTwo="unmatched"
        headingThree="Strength"
        headingFour="And Style"
      />
      <ProductCategory />

      <section className="h-[40vh] md:h-[55vh] w-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://www.ileafdoors.com/wp-content/uploads/2025/06/products-hero-2-scaled.webp)`,
          }}
        >
          <div className="relative h-full flex items-center">
            <div className="bg-amber-400 rounded-full sm:hidden absolute bottom-6 left-1/2 -translate-x-1/2">
              <ChevronUp strokeWidth={1.5} />
            </div>
            <div className="hidden sm:flex justify-end w-full px-20 ">
              <button
                id="enquiry-button"
                className="uppercase p-3 px-6 lg:px-8 transform  -skew-x-[20deg] text-sm  font-raleway tracking-[2px] font-[500] border border-amber-400"
              >
                <span className="inline-block transform skew-x-[20deg] text-amber-400">
                  enquiry
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <ProductGrid />
      <div className="lg:hidden bg-[#707070] p-10 flex justify-center items-center">
        <Button routeLink="/" title="Enquiry" border={1} borderColor="black" />
      </div>
    </>
  );
};

export default ProductsPage;
