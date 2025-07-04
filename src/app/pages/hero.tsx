"use client";
import Link from "next/link";
import React, { useState } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen relative top-0 left-0 w-full">
      <div className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://www.ileafdoors.com/wp-content/uploads/2024/12/hero-01.webp")',
          }}
        ></div>

        <button
          onClick={toggleMenu}
          className="text-yellow-400 fixed lg:hidden focus:outline-none  top-20 right-4 z-[60]"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div
          className={`fixed lg:hidden top-0 left-0 min-h-screen w-full bg-black z-50 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-y-full"
          } transition-transform duration-300 ease-in-out md:hidden pt-16`}
        >
          <ul className="flex flex-col gap-2 uppercase text-sm italic p-6 text-[#FFBF00] text-center">
            <li className="pb-2">
              <Link href="/">Home</Link>
            </li>
            <li className="pb-2">About Us</li>
            <li className="pb-2">Products</li>
            <li className="pb-2">Features</li>
            <li className="pb-2">Gallery</li>
            <li className="pb-2">Testimonial</li>
            <li className="pb-2">Enquiry</li>
            <li className="pb-2">Contact</li>
          </ul>
          <div className="flex justify-center items-center">
            <div className=" w-4 h-2 bg-amber-300 transform skew-x-[-200deg]" />
          </div>
          <ul className="flex flex-col gap-2 uppercase text-sm italic p-6 text-[#FFBF00] text-center">
            <li className="pb-2">Luxury doors</li>
            <li className="pb-2">Gi doorss</li>
            <li className="pb-2">GL doors</li>
            <li className="pb-2">windows</li>
            <li className="pb-2">fiber doors</li>
            <li className="pb-2">wpc doors</li>
          </ul>
          <div className="flex-1 flex flex-col gap-10 justify-center items-center">
            <button className="uppercase p-3 px-6 lg:p-4 lg:px-8 transform -skew-x-12 text-sm lg:text-base border border-[#707070] text-amber-400">
              download brochure
            </button>
          </div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center">
          <div className="flex-1 flex items-start sm:items-center justify-center sm:justify-end w-[90%] py-10 ">
            <div className="max-w-2xl md:text-right text-center">
              <h1 className="text-2xl md:text-3xl italic  text-yellow-400 lg:text-white leading-tight mb-2 lg:mb-4 ">
                <span className="block mb-2 lg:mb-6 md:mr-16 lg:mr-32 font-blafhyglibs tracking-[4px] lg:tracking-[7px]">
                  The Door to
                </span>
                <span className="block italic md:mr-12 lg:mr-20 font-blafhyglibs tracking-[4px] lg:tracking-[7px]">
                  Unmatched
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic text-amber-400 leading-tight">
                <span className="inline-block md:mr-6 font-blafhyglibs tracking-[4px] lg:tracking-[7px]">
                  Safety and Security
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
