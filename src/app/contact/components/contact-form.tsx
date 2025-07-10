import Map from "@/app/components/map";
import Parallelogram from "@/app/components/parallelogram";
import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-black p-10 lg:p-20">
      <div className="w-full bg-white">
        <div className="flex flex-col justify-center items-center p-10 md:p-20 lg:p-[100px]">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-blafhyglibs italic text-black tracking-[4px] lg:tracking-[7px] mb-10">
            Contact
          </h1>
          <Parallelogram />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="uppercase font-[600] mb-6 text-amber-400">Corporate Office</h1>
          <ul className="text-center font-raleway uppercase font-[500] space-y-4">
            <li>I-Leaf Buildpro Pvt. Ltd</li>
            <li>34/1874 A, Muttepadathu Building,</li>
            <li>Padmasree Lane, Mamangalam, Kochi, Kerala, India – 682025</li>
            <li>Tel: +91 484 – 4042626</li>
            <li>Mob : +91 91427 78877</li>
            <li>Email: info@ileafdoors.com</li>
          </ul>
        </div>
        <Map/>
      </div>
    </section>
  );
};

export default ContactForm;
