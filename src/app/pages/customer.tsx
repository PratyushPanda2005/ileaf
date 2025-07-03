"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import MaskImage from "../../../public/assets/bg/mask-image.png";
import MaskImageMob from "../../../public/assets/bg/mask-image-mob.webp";
import {
  most_asked_doubts_1,
  most_asked_doubts_2,
  most_asked_doubts_3,
  most_asked_doubts_4,
} from "../config";
import Play_Button from "../../../public/play_button.svg";
const VideoPlayer = ({ src, poster }: { src: string; poster: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <div className="w-auto mx-auto relative group h-[40vw] md:h-[20vw]">
      <video
        ref={videoRef}
        className="w-full h-full rounded-lg shadow-lg"
        poster={poster}
        onClick={togglePlay}
        loop
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={togglePlay}
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
           text-white rounded-full p-4 transition-opacity duration-300
          ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <Image src={Play_Button} alt="" />
        )}
      </button>
    </div>
  );
};

const Customer = () => {
  const videos = [
    {
      src: "https://ileafdoors.com/wp-content/uploads/2025/05/Most-Asked-Doubts-Part-1.mp4",
      poster: most_asked_doubts_1,
    },
    {
      src: "https://ileafdoors.com/wp-content/uploads/2025/05/Most-Asked-Doubts-Part-1.mp4",
      poster: most_asked_doubts_2,
    },
    {
      src: "https://ileafdoors.com/wp-content/uploads/2025/05/I-Leaf-5-Things-Before-Buying-Kashi-18-3-25.mp4",
      poster: most_asked_doubts_3,
    },
    {
      src: "https://ileafdoors.com/wp-content/uploads/2025/05/Steel-Doors-For-Your-Home.mp4",
      poster: most_asked_doubts_4,
    },
  ];

  return (
    <section className="min-h-screen lg:px-20">
      <div
        style={{
          backgroundImage:
            "url(https://www.ileafdoors.com/wp-content/uploads/2025/06/our-customers-say-hero2.webp)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      >
        <div className="absolute top-0 z-10 w-full lg:w-1/2 h-full flex items-end lg:items-center justify-center  py-12">
          <div className="text-center">
            <div className="mb-10 text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl italic font-blafhyglibs tracking-[3px] lg:tracking-[7px] mb-2">
                Our
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl italic font-blafhyglibs tracking-[3px] lg:tracking-[7px] mb-2">
                {" "}
                Customer&apos;s{" "}
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl italic font-blafhyglibs tracking-[3px] lg:tracking-[7px]">
                Say
              </h1>
            </div>
            <button className="uppercase p-3 px-6 lg:p-4 lg:px-8 transform -skew-x-12 text-sm lg:text-base bg-amber-400 text-black font-raleway">
              Explore now
            </button>
          </div>
        </div>
        <Image
          src={MaskImage}
          alt="Mask Image"
          className="w-full relative hidden lg:flex"
        />
        <Image
          src={MaskImageMob}
          alt="Mask Image"
          className="w-full relative flex lg:hidden"
        />
      </div>
      <section className="bg-black min-h-screen gallery p-20">
        <div className="flex flex-col gap-6 justify-center items-center p-20">
          <h1 className="text-3xl md:text-4xl font-style italic text-amber-400 lg:text-white tracking-wide">
            Gallery
          </h1>
          <div className="w-4 h-2 bg-amber-300 transform skew-x-[-200deg]" />
        </div>
        <div className="w-full h-full grid md:grid-cols-2 md:grid-rows-2 gap-y-10">
          {videos.map((video, index) => (
            <VideoPlayer key={index} src={video.src} poster={video.poster} />
          ))}
        </div>
        <div className="pt-20 flex justify-center items-center pb-20 ">
          <button className="uppercase p-3 px-6 lg:p-4 lg:px-8 transform -skew-x-12 text-sm lg:text-base bg-amber-400 text-black font-raleway">
            Explore Now
          </button>
        </div>
      </section>
    </section>
  );
};

export default Customer;
