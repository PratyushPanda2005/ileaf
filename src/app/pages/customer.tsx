"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import MaskImage from "../../../public/assets/bg/mask-image.png";
import MaskImageMob from "../../../public/assets/bg/mask-image-mob.webp";
import Play_Button from "../../../public/play_button.svg";
import Button from "../components/button";
import { most_asked_doubts_1, most_asked_doubts_2, most_asked_doubts_3, most_asked_doubts_4 } from "../config";

const marginClasses = [
  "translate-x-[0px]",
  "translate-x-[0px]",
  "lg:-translate-x-[34.333px]",
  "lg:-translate-x-[34.333px]",
];

const marginClassesMob = [
  "translate-x-[0px]",
  "-translate-x-[20.33px]",
];

const Customer = () => {
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
  ];

  const videosToShow = list.slice(0, 2);

  return (
    <section className="min-h-screen bg-[#e4e4e4] lg:px-20">
      {/* Hero Section */}
      <div
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/db4zbyipc/image/upload/v1752412420/our-customers-say-hero2_ju5nqa.webp)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      >
        <div className="absolute top-0 z-10 w-full md:w-1/2 h-full flex items-end md:items-center justify-center py-20 lg:py-12">
          <div className="text-center">
            <div className="mb-10 lg:mb-20 text-black lg:text-white">
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl italic font-blafhyglibs tracking-[3px] lg:tracking-[7px] mb-2">
                Our
              </h1>
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl italic font-blafhyglibs tracking-[3px] lg:tracking-[7px] mb-2">
                Customer&apos;s
              </h1>
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl italic font-blafhyglibs tracking-[3px] lg:tracking-[7px]">
                Say
              </h1>
            </div>
            <button className="btn-1 !text-black uppercase p-3 px-6 lg:px-8 transform  -skew-x-[20deg] text-sm  font-raleway tracking-[2px] font-[500] bg-amber-400">
            <span className="inline-block transform skew-x-[20deg]">Explore now</span>
            </button>
          </div>
        </div>
        <Image
          src={MaskImage}
          alt="Mask Image"
          className="w-full relative hidden md:flex"
        />
        <Image
          src={MaskImageMob}
          alt="Mask Image"
          className="w-full relative flex md:hidden"
        />
      </div>

      {/* Gallery Section */}
      <section className="bg-black min-h-screen gallery py-10 px-20 lg:p-20 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-6 justify-center items-center p-20">
          <h1 className="text-3xl md:text-4xl font-style italic text-amber-400 lg:text-white tracking-wide">
            Gallery
          </h1>
          <div className="w-4 h-2 bg-amber-300 transform skew-x-[-200deg]" />
        </div>



        
        <div className="w-full max-w-4xl h-full grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 lg:gap-16 mt-0 lg:mt-20">
         
          <div className="grid grid-cols-1 gap-y-6 md:hidden">
            {videosToShow.map((item) => (
              <div
                key={item.id}
                className="col-span-1 -skew-x-6 flex justify-center items-center relative group cursor-pointer"
                onClick={() => openVideoPopup(item)}
              >
                <video
                  poster={item.poster}
                  className={`${marginClassesMob[item.id]}`}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image src={Play_Button} alt="Play" />
                </div>
              </div>
            ))}
          </div>
          
          
          <div className="hidden md:grid md:grid-cols-2 gap-y-6 gap-x-4 lg:gap-16 col-span-full">
            {list.map((item) => (
              <div
                key={item.id}
                className="col-span-1 -skew-x-6 flex justify-center items-center relative group cursor-pointer"
                onClick={() => openVideoPopup(item)}
              >
                <video
                  poster={item.poster}
                  className={`${marginClasses[item.id]}`}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image src={Play_Button} alt="Play" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-20 flex justify-center items-center pb-20">
          <Button
            routeLink="/"
            title="Explore Now"
            bgColor="#FFC600"
            textColor="black"
          />
        </div>
      </section>

      {/* Video Popup */}
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
    </section>
  );
};

export default Customer;
