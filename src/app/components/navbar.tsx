'use client'
import React, { useState } from "react";
import Logo from "../../../public/assets/logos/logo-i-LEAF-logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button - Only visible on small screens */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#5e636b]/70 p-4 flex justify-between items-center">
            <div className="h-[2em] w-fit ">
          <Image src={Logo} alt="i-LEAF Logo" className="w-full h-[2em]"/>
        </div>
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
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
        
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#5e636b] z-40 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden pt-16`}
      >
        <ul className="flex flex-col gap-6 uppercase text-sm italic p-6 text-white">
          <li className="border-b border-gray-400 pb-2">
            <Link href="/">Home</Link>
          </li>
          <li className="border-b border-gray-400 pb-2">About Us</li>
          <li className="border-b border-gray-400 pb-2">Products</li>
          <li className="border-b border-gray-400 pb-2">Features</li>
          <li className="border-b border-gray-400 pb-2">Gallery</li>
          <li className="border-b border-gray-400 pb-2">Testimonial</li>
          <li className="border-b border-gray-400 pb-2">Enquiry</li>
          <li className="border-b border-gray-400 pb-2">Contact</li>
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Desktop Navbar - Hidden on mobile */}
      <nav className="hidden fixed z-[50] lg:flex justify-between items-center w-full py-6 px-12 lg:px-20 bg-[#5e636b]/90">
        <div>
          <ul className="flex lg:gap-6 xl:gap-10 uppercase text-sm italic">
            <li>
            <Link href="/">Home</Link>
            </li>
            <li>
            <Link href="/aboutus">About Us</Link>
            </li>
            <li>
            <Link href="/products">Products</Link>
            </li>
            <li>
            <Link href="/features">Features</Link>
            </li>
          </ul>
        </div>
        <div>
          <Image src={Logo} alt="i-LEAF Logo" className="h-[3em] w-fit" />
        </div>
        <div>
          <ul className="flex lg:gap-6 xl:gap-10 uppercase text-sm italic">
            <li>
            <Link href="/gallery">Gallery</Link>
            </li>
            <li>
            <Link href="/testimonial">Testimonial</Link>
            </li>
            <li>
            <Link href="/enquiry">Enquiry</Link>
            </li>
            <li>
            <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;