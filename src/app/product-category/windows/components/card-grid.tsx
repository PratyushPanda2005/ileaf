"use client";
import Button from "@/app/components/button";
import { windowsData } from "@/app/config/products/windows/windows";
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
      className="flex flex-col justify-between items-center col-span-1 row-span-1 gap-6 pt-10 bg-[#707070] relative overflow-hidden px-10"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="w-auto h-[280px] object-contain mb-4"
        width={300}
        height={200}
      />
      <div className="">
        <h1 className="text-black transform  font-raleway font-semibold line-clamp-1">
          {heading}
        </h1>
      </div>
      <Button
        routeLink={routeLink}
        title="view details"
        bgColor="black"
        textColor="#FFBF00"
        bgHoverColor="#000000"
      />
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
  const windows = windowsData["Windows"].series[0].variants;
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(windows.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = windows.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    if (pageNumber === currentPage) return;

    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsLoading(false);
    }, 2000);
  };

  const itemsToShow = isMobile && !showAll ? 1 : windows.length;

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
            {Math.min(indexOfLastItem, windows.length)} of {windows.length}{" "}
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
                      : "text-[#FFBF00]"
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
              routeLink={`/product-category/windows/${variant.number}`}
              imageSrc={variant.image}
              imageAlt={`${variant.id} gl door`}
            />
          ))}
        </div>
      )}

      {isMobile && (
        <div className="flex  justify-center mt-20">
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
            {Math.min(indexOfLastItem, windows.length)} of {windows.length}{" "}
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
                      : "text-[#FFBF00]"
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
