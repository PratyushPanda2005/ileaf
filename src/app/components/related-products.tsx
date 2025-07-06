'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';
import Button from './button';

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
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentSubcategory, allProducts }) => {
  // Filter out the current product and get only related products
  const relatedProducts = allProducts.filter(product => product.number !== currentSubcategory);

  return (
    <div className='p-10 lg:p-20 bg-black'>
   
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
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
        routeLink={product.id}
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
      </Swiper>
    </div>
  );
}

export default RelatedProducts;