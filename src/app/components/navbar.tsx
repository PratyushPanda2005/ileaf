"use client";
import React, { useState, useEffect } from "react";
import Logo from "../../../public/assets/logos/logo-i-LEAF-logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      if (Math.abs(prevScrollPos - currentScrollPos) > 10) {
        setVisible(!isScrollingDown || currentScrollPos < 10);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <div 
        className={`lg:hidden relative top-0 left-0 right-0 z-50 bg-[#5e636b]/70 p-4 flex justify-center items-center transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-[2em] w-fit">
          <Image src={Logo} alt="i-LEAF Logo" className="w-full h-[2em]" />
        </div>
      </div>

      <nav 
        className={`hidden lg:flex fixed z-[50] justify-between items-center w-full py-6 px-12 lg:px-20 bg-[#5e636b]/90 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div>
          <ul className="flex lg:gap-6 xl:gap-10 uppercase text-sm font-raleway font-bold">
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