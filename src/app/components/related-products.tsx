"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import Button from "./button";
import { Navigation } from "swiper/modules";

interface ProductVariant {
  number: string;
  id: string;
  image: string;
  details: {
    [key: string]: string;
  };
}

interface RelatedProductsProps {
  currentSubcategory: string;
  allProducts: ProductVariant[];
  routeType: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  currentSubcategory,
  allProducts,
  routeType,
}) => {
  const relatedProducts = allProducts.filter(
    (product) => product.number !== currentSubcategory
  );

  return (
    <div className="p-10 lg:p-20 bg-black">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation]}
        className="mySwiper h-auto"
      >
        {relatedProducts.map((product) => (
          <SwiperSlide key={product.number}>
            <div className="flex flex-col justify-between items-center col-span-1 row-span-1 gap-6 pt-10 bg-[#707070] relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.id}
                className="w-auto h-[300px] object-contain mb-4"
                width={300}
                height={200}
              />
              <Button
                routeLink={`/product-category/${routeType}/${product.number}`}
                title="view details"
                bgColor="black"
                textColor="#FFBF00"
              />
              <div className="w-40 h-14 bg-[#ffbf00] transform -skew-x-[-20deg] absolute top-0 left-0 rotate-[270deg] -translate-x-[32.4%] translate-y-[75%] flex justify-center items-center p-4">
                <h1 className="text-black transform skew-x-[-20deg] font-raleway font-semibold line-clamp-1">
                  {product.id}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev-custom cursor-pointer absolute top-1/2 -translate-y-[50%] left-0 z-50 bg-black p-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#FFBF00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="swiper-button-next-custom  cursor-pointer absolute top-1/2 right-0 -translate-y-[50%] z-50 bg-black p-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="#FFBF00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Swiper>
    </div>
  );
};

export default RelatedProducts;
