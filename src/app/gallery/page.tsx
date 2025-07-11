'use client'
import React, { useState } from "react";
import Image from "next/image";
import {
  most_asked_doubts_1,
  most_asked_doubts_2,
  most_asked_doubts_3,
  most_asked_doubts_4,
  most_asked_doubts_5,
  most_asked_doubts_6,
  most_asked_doubts_7,
  most_asked_doubts_8
} from "../config";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const list = [
    {
      id: 0,
      src: "https://ileafdoors.com/wp-content/uploads/2025/05/Most-Asked-Doubts-Part-1.mp4",
      poster: most_asked_doubts_1,
    },
    {
      id: 1,
      src: "https://ileafdoors.com/wp-content/uploads/2025/05/Most-Asked-Doubts-Part-1.mp4",
      poster: most_asked_doubts_2,
    },
    {
      id: 2,
      src: "https://ileafdoors.com/wp-content/uploads/2025/05/I-Leaf-5-Things-Before-Buying-Kashi-18-3-25.mp4",
      poster: most_asked_doubts_3,
    },
    {
      id: 3,
      src: "https://ileafdoors.com/wp-content/uploads/2025/05/Steel-Doors-For-Your-Home.mp4",
      poster: most_asked_doubts_4,
    },
    {
      id: 4,
      src: "https://ileafdoors.com/wp-content/uploads/2025/05/Steel-Doors-For-Your-Home.mp4",
      poster: most_asked_doubts_5,
    },
    {
      id: 5,
      src: "https://ileafdoors.com/wp-content/uploads/2025/05/Steel-Doors-For-Your-Home.mp4",
      poster: most_asked_doubts_6,
    },
    {
      id: 6,
      src: "https://ileafdoors.com/wp-content/uploads/2025/05/Steel-Doors-For-Your-Home.mp4",
      poster: most_asked_doubts_7,
    },
    {
      id: 7,
      src: "https://ileafdoors.com/wp-content/uploads/2025/05/Steel-Doors-For-Your-Home.mp4",
      poster: most_asked_doubts_8,
    },
  ];

  const marginClasses = [
    "translate-x-[0px]",
    "translate-x-[0px]",
    "lg:-translate-x-[34.333px]",
    "lg:-translate-x-[34.333px]",
    "lg:-translate-x-[68.666px]",
    "lg:-translate-x-[68.666px]",
    "lg:-translate-x-[103px]",
    "lg:-translate-x-[103px]",
  ];

  // Show only first 4 items on mobile initially, all items on desktop
  const displayList = showAll ? list : list.slice(0, 4); // Mobile: first 4 items or all based on state
  const fullList = list; // Desktop: all items

  return (
    <section className="min-h-screen flex justify-center items-center pb-[120px] pt-[120px] lg:pt-[160px] bg-black px-20 lg:px-20">
      <div className="flex flex-col gap-10 lg:flex-row w-full justify-between">
        <ul className="text-[#707070] font-style !tracking-[1px] space-y-4 text-sm text-center lg:text-left">
          <li className="flex gap-3 items-center max-lg:justify-center">
            <div className="w-3.5 h-1.5 bg-amber-300 transform skew-x-[-200deg]" />
            Video Gallery
          </li>
          <li className="flex gap-3 items-center max-lg:justify-center">
            <div className="w-3.5 h-1.5 bg-[#707070] transform skew-x-[-200deg]" />
            Photo Gallery
          </li>
          <li className="flex gap-3 items-center max-lg:justify-center">
            <div className="w-3.5 h-1.5 bg-[#707070] transform skew-x-[-200deg]" />
            Download Brochure
          </li>
        </ul>
        
        <div className="lg:hidden">
          <div className="grid grid-cols-1 gap-10">
            {displayList.map((item) => (
              <div
                key={item.id}
                className="col-span-1 -skew-x-6 flex justify-center items-center"
              >
                <Image
                  src={item.poster}
                  alt="Cycling"
                  width={300}
                  height={300}
                  className={`w-96 h-64 ${marginClasses[item.id]}`}
                />
              </div>
            ))}
          </div>
          
          {/* View More/View Less Button */}
          {!showAll && list.length > 4 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="uppercase p-3 px-6 lg:px-8 transform bg-amber-400 -skew-x-[20deg] text-sm  font-raleway tracking-[2px] font-[500]"
              >
                <span className="inline-block transform skew-x-[20deg]">View More</span>
              </button>
            </div>
          )}
          
          {showAll && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(false)}
                className="uppercase p-3 px-6 lg:px-8 transform bg-amber-400 -skew-x-[20deg] text-sm  font-raleway tracking-[2px] font-[500]"
              >
               <span className="inline-block transform skew-x-[20deg]">View Less</span>
              </button>
            </div>
          )}
        </div>

        {/* Desktop view - show all items */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10">
          {fullList.map((item) => (
            <div
              key={item.id}
              className="col-span-1 -skew-x-6 flex justify-center items-center"
            >
              <Image
                src={item.poster}
                alt="Cycling"
                width={300}
                height={300}
                className={`w-96 h-64 ${marginClasses[item.id]}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;