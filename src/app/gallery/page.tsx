import React from "react";
import Cycling from "@/../public/maico-amorim-SJWPKMb9u-k-unsplash.jpg";
import Image from "next/image";
const Gallery = () => {
  const list = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
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

  return (
    <section className="min-h-screen flex justify-center items-center py-[120px] bg-black px-20 lg:px-20">
      <div className="flex flex-col gap-10 lg:flex-row w-full justify-between">
        <ul className="text-[#707070] font-style !tracking-[1px] space-y-4 text-sm text-center lg:text-left">
          <li>Video Gallery</li>
          <li>Photo Gallery</li>
          <li>Download Brochure</li>
        </ul>
        <div className="grid lg:grid-cols-2 gap-10">
          {list.map((item) => (
            <div
              key={item.id}
              className="col-span-1 -skew-x-6 flex justify-center items-center"
            >
              <Image
                src={Cycling}
                alt="Cycling"
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
