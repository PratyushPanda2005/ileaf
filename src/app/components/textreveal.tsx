import React from "react";
import Parallelogram from "./parallelogram";

const TextReveal = () => {
  return (
    <section className="p-20 w-full relative bg-[#707070] ">
      <div className=" bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-black font-[300] italic text-base leading-7 tracking-[1px] text-center font-raleway md:max-w-[60%]">
            In today’s fast-paced world, homes are often left unattended due to
            hectic work schedules and constant travel. This has led to a growing
            need for heightened security at home. At i-Leaf, we bring you the
            best quality steel doors for homes equipped with modern smart locks
            that blend safety with sophistication. Whether you’re seeking
            fireproof doors for home safety, termite-proof doors, or beautiful
            steel doors that elevate your interiors, our wide range of products
            is designed to meet your every need. From security steel doors and
            steel windows for living rooms, kitchens, and bathrooms, we ensure
            the perfect solution for every space.
          </p>
        </div>
      </div>
      <Parallelogram />
    </section>
  );
};

export default TextReveal;
