"use client";

import React, { useState, useEffect, MouseEvent } from "react";
import { useTransitionRouter } from "next-view-transitions";
import Logo from "../../../public/assets/logos/logo-i-LEAF-logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useTransitionRouter();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const leftRoutes = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/aboutus" },
    { label: "Products", url: "/products" },
    { label: "Features", url: "/features" },
  ];

  const rightRoutes = [
    { label: "Gallery", url: "/gallery" },
    { label: "Testimonial", url: "/testimonial" },
    { label: "Enquiry", url: "/enquiry" },
    { label: "Contact", url: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  const handleNavigation = (e: MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    router.push(url, {
      onTransitionReady: pageAnimation,
    });
  };

  return (
    <>
      {/* Mobile Nav */}
      <div 
        className={`lg:hidden relative top-0 left-0 right-0 z-50 bg-[#5e636b]/70 p-4 flex justify-center items-center transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-[2em] w-fit">
          <Link href="/" onClick={(e) => handleNavigation(e, "/")}>
            <Image src={Logo} alt="i-LEAF Logo" className="w-full h-[2em]" />
          </Link>
        </div>
      </div>


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
          } transition-transform duration-300 ease-in-out md:hidden pt-4`}
        >
          <ul className="flex flex-col gap-4 uppercase text-sm italic p-6 text-[#FFBF00] text-center">
            {leftRoutes.map((route) => (
              <li key={route.label}>
                <Link
                  href={route.url}
                  onClick={(e) => {
                    handleNavigation(e, route.url);
                    setIsMenuOpen(false);
                  }}
                  className="hover:text-amber-300 transition-all duration-300"
                >
                  {route.label}
                </Link>
              </li>
            ))}
             {rightRoutes.map((route) => (
              <li key={route.label}>
                <Link
                  href={route.url}
                  onClick={(e) => {
                    handleNavigation(e, route.url);
                    setIsMenuOpen(false);
                  }}
                  className="hover:text-amber-300 transition-all duration-300"
                >
                  {route.label}
                </Link>
              </li>
            ))}
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

      {/* Desktop Nav */}
      <nav 
        className={`hidden lg:flex fixed z-[50] justify-between items-center w-full py-6 px-12 lg:px-20 bg-[#5e636b]/90 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mt-7">
          <ul className="flex lg:gap-6 xl:gap-10 uppercase text-[13px] font-raleway font-[500]">
            {leftRoutes.map((route) => (
              <li key={route.label}>
                <Link
                  href={route.url}
                  onClick={(e) => handleNavigation(e, route.url)}
                  className="hover:text-amber-300 transition-all duration-300"
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <Link href="/" onClick={(e) => handleNavigation(e, "/")}>
            <Image src={Logo} alt="i-LEAF Logo" className="h-[3em] w-fit" />
          </Link>
        </div>
        
        <div className="mt-7">
          <ul className="flex lg:gap-6 xl:gap-10 uppercase text-[13px] font-raleway font-[500]">
            {rightRoutes.map((route) => (
              <li key={route.label}>
                <Link
                  href={route.url}
                  onClick={(e) => handleNavigation(e, route.url)}
                  className="hover:text-amber-300 transition-all duration-300"
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 1,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default Navbar;