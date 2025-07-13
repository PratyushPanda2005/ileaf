'use client'
import React, { useEffect, useRef } from "react";
import ProductHero from "../components/productsHero";
import ProductCategory from "../components/product-category";
import ProductGrid from "./components/product-grid";
import { ChevronUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EnquiryMob from "../components/enquiry-mob";
gsap.registerPlugin(ScrollTrigger)

const ProductsPage = () => {
  const parallaxRef = useRef(null)

  useEffect(() => {
    if (!parallaxRef.current) return;
    
    gsap.to(parallaxRef.current, {
      backgroundPositionY: "30%",
      ease: "none",
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top bottom",
        end: "bottom top", 
        scrub: true,
      }
    })
  }, [])

  const handleEnquiryClick = () => {
    // Dispatch a custom event that the Navbar can listen to
    const event = new CustomEvent('openEnquiryDropdown');
    window.dispatchEvent(event);
  };
  return (
    <>
      <ProductHero
        bgImage="https://res.cloudinary.com/db4zbyipc/image/upload/v1752412510/product-hero_1_nmirl7.webp"
        headingOne="Discover"
        headingTwo="unmatched"
        headingThree="Strength"
        headingFour="And Style"
      />
      <ProductCategory />

      <section className="h-[40vh] md:h-[55vh] w-full relative">
        <div ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-[position:center_0%] bg-no-repeat"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/db4zbyipc/image/upload/v1752412522/product-hero_2_cthfb5.webp)`,
          }}
        >
          <div className="relative h-full flex items-center">
            <div className="bg-amber-400 rounded-full sm:hidden absolute bottom-6 left-1/2 -translate-x-1/2">
              <ChevronUp strokeWidth={1.5} />
            </div>
            <div className="hidden sm:flex justify-end w-full px-20 ">
              <button
              onClick={handleEnquiryClick}
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
      <EnquiryMob/>
    </>
  );
};

export default ProductsPage;
