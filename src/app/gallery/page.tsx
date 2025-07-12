'use client'
import React, { useRef, useState } from "react";
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
import Play_Button from "../../../public/play_button.svg";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{
    src: string;
    poster: string;
  } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const openVideoPopup = (video: { src: string; poster: string }) => {
    setSelectedVideo(video);
    setIsPlaying(true);
  };

  const closeVideoPopup = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedVideo(null);
    setIsPlaying(false);
  };
  const list = [
    {
      id: 0,
      src: "https://ileafdoors.com/wp-content/uploads/2025/05/Most-Asked-Doubts-Part-1.mp4",
      poster: most_asked_doubts_1,
    },
    {
      id: 1,
      src: "https://res.cloudinary.com/db4zbyipc/video/upload/v1752319624/Most-Asked-Doubts-Part-2_dmxo99.mp4",
      poster: most_asked_doubts_2,
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/db4zbyipc/video/upload/v1752319628/Steel-Doors-For-Your-Home_ebnelz.mp4",
      poster: most_asked_doubts_3,
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/db4zbyipc/video/upload/v1752319618/I-Leaf-Elavate-Your-Home-07-4-25-Kashi-2_jtewka.mp4",
      poster: most_asked_doubts_4,
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/db4zbyipc/video/upload/v1752319617/Match-Your-Home-Style-Ileaf-Abhijith_mcnq4j.mp4",
      poster: most_asked_doubts_5,
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/db4zbyipc/video/upload/v1752319618/Ileaf-Price-Of-Steel-Doors-Part1_m40esk.mp4",
      poster: most_asked_doubts_6,
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/db4zbyipc/video/upload/v1752319618/I-Leaf-Elavate-Your-Home-07-4-25-Kashi-2_jtewka.mp4",
      poster: most_asked_doubts_7,
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/db4zbyipc/video/upload/v1752319621/Safety-Locking-System_fzkcl5.mp4",
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
              <div onClick={() => openVideoPopup(item)}
                key={item.id}
                className="col-span-1 -skew-x-6 flex justify-center items-center"
              >
                <video
                  poster={item.poster}
                  className={`${marginClasses[item.id]} md:w-96 md:h-64`}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image src={Play_Button} alt="Play" className={`${marginClasses[item.id]}`} />
                </div>
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
            onClick={() => openVideoPopup(item)}
              key={item.id}
              className="col-span-1 -skew-x-6 flex justify-center items-center"
            >
              <video
                  poster={item.poster}
                  className={`${marginClasses[item.id]} w-96 h-64`}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image src={Play_Button} alt="Play" className={`${marginClasses[item.id]}`} />
                </div>
            </div>
          ))}
        </div>
        {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeVideoPopup}
              className="absolute -top-10 right-0 text-white text-3xl z-50"
              aria-label="Close video"
            >
              &times;
            </button>
            <div className="relative pt-[56.25%]">
              {" "}
              {/* 16:9 aspect ratio */}
              <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full"
                poster={selectedVideo.poster}
                onClick={togglePlay}
                controls
                autoPlay
                loop
              >
                <source src={selectedVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    text-white rounded-full p-4"
                  aria-label="Play"
                >
                  <Image src={Play_Button} alt="Play" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Gallery;