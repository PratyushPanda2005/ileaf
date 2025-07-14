"use client";
import Button from "@/app/components/button";
import { giDoorsData } from "@/app/config/products/gidoors/gidoors";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3 }}
      className="flex flex-col justify-between items-center col-span-1 row-span-1 gap-6 pt-10 bg-[#707070] relative overflow-hidden"
    >
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
        bgHoverColor="#000000"
      />
      <div className="w-40 h-14 bg-[#ffbf00] transform -skew-x-[-20deg] absolute top-0 left-0 rotate-[270deg] -translate-x-[32.4%] translate-y-[75%] flex justify-center items-center p-4">
        <h1 className="text-black transform skew-x-[-20deg] font-raleway font-semibold line-clamp-1">
          {heading}
        </h1>
      </div>
    </motion.div>
  );
};

const SimpleLoader = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-[#707070] border-t-[#FFBF00] rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-[#FFBF00] rounded-full animate-spin animation-delay-150"></div>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const giDoors = giDoorsData["Gi Doors"].series[0].variants;
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = 12;

  const totalPages = Math.ceil(giDoors.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = giDoors.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    if (pageNumber === currentPage) return;

    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsLoading(false);
    }, 2000);
  };

  const itemsToShow = isMobile && !showAll ? 1 : giDoors.length;

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <section className="min-h-screen bg-black p-10 lg:p-20">
      {totalPages > 1 && (
        <div className="flex max-sm:flex-col gap-3 justify-between items-center mb-10 ">
          <h1 className="text-[#707070] font-raleway tracking-[1px] text-[14px]">
            Showing {indexOfFirstItem + 1}-
            {Math.min(indexOfLastItem, giDoors.length)} of {giDoors.length}{" "}
            results
          </h1>
          <nav className="flex items-center gap-2 ">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-[#FFBF00] disabled:opacity-50"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 transform font-raleway -skew-x-[20deg] ${
                    currentPage === number
                      ? "bg-[#FFBF00] text-black"
                      : "text-[#FFBF00] hover:bg-[#FFBF00] hover:text-black"
                  }`}
                >
                  <span className="transform skew-x-[20deg] inline-block">
                    {number}
                  </span>
                </button>
              )
            )}

            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-[#FFBF00] disabled:opacity-50"
            >
              &gt;
            </button>
          </nav>
        </div>
      )}

      {isLoading ? (
        <SimpleLoader />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-row-2 gap-3.5">
          {currentItems.slice(0, itemsToShow).map((variant) => (
            <ProductGridCard
              key={variant.id}
              heading={variant.id}
              routeLink={`/product-category/gidoors/${variant.number}`}
              imageSrc={variant.image}
              imageAlt={`${variant.id} gi door`}
            />
          ))}
        </div>
      )}

      {isMobile && (
        <div className="flex justify-center mt-20">
          <button
            onClick={() => setShowAll(!showAll)}
            className="uppercase p-3 px-6 lg:px-8 transform  -skew-x-[20deg] text-sm  font-raleway tracking-[2px] font-[500] bg-[#707070] text-black"
          >
            <span className="inline-block transform skew-x-[20deg]">
              {showAll ? "View Less" : "View All"}
            </span>
          </button>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex max-sm:flex-col gap-3 justify-between items-center mt-10 ">
          <h1 className="text-[#707070] font-raleway tracking-[1px] text-[14px]">
            Showing {indexOfFirstItem + 1}-
            {Math.min(indexOfLastItem, giDoors.length)} of {giDoors.length}{" "}
            results
          </h1>
          <nav className="flex items-center gap-2 ">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-[#FFBF00] disabled:opacity-50"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 transform font-raleway -skew-x-[20deg] ${
                    currentPage === number
                      ? "bg-[#FFBF00] text-black"
                      : "text-[#FFBF00] hover:bg-[#FFBF00] hover:text-black"
                  }`}
                >
                  <span className="transform skew-x-[20deg] inline-block">
                    {number}
                  </span>
                </button>
              )
            )}

            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-[#FFBF00] disabled:opacity-50"
            >
              &gt;
            </button>
          </nav>
        </div>
      )}
    </section>
  );
};

export default CardGrid;
