import Button from "@/app/components/button";
import Parallelogram from "@/app/components/parallelogram";
import React from "react";

const Info = () => {
  return (
    <section className="px-10 lg:px-20 bg-[#707070]">
      <div className="w-full flex flex-col gap-16 lg:gap-28 justify-center items-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="col-span-1">
            <h1 className="font-semibold font-raleway text-center lg:text-left text-[14px]">
              Two decades of excellence in home protection
            </h1>
            <p className="about-para">
              i-Leaf Buildpro Pvt. Ltd., an ISO 9001-2015 Certified company, has
              been a pioneer in the home security industry since its inception
              in 2005. As one of India’s oldest and most trusted steel door
              brands, i-Leaf specialises in crafting best quality steel doors,
              steel windows, FRP doors, and smart security locks. With a legacy
              of 20 years, we have earned the reputation of being the best steel
              doors brand, delivering innovative solutions tailored for modern
              homes.
            </p>
            <div className="w-full flex justify-center items-center lg:hidden">
              <Parallelogram />
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="font-semibold font-raleway text-center lg:text-left text-[14px]">
              Commitment to quality and sustainability
            </h1>
            <div className="about-para">
              Despite the growing competition, i-Leaf remains at the forefront
              of the industry due to our uncompromising commitment to quality.
              With thousands of satisfied customers and a proven track record,
              we continue to lead the market with:
              <br />
              <ul className="">
                <li className="flex items-start">
                  {"> "}
                  Affordable luxury home doors in India
                </li>
                <li className="flex items-start">
                  {"> "}
                  Eco-conscious manufacturing processes
                </li>
                <li className="flex items-start">
                  {"> "}
                  Products designed for both residential and commercial
                  applications
                </li>
              </ul>
              <div className="w-full flex justify-center items-center lg:hidden">
                <Parallelogram />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="font-semibold font-raleway text-center lg:text-left text-[14px]">
              Your trusted partner for peace of mind
            </h1>
            <p className="about-para">
              Whether you’re looking for beautiful steel doors, steel wood
              doors, or security steel doors, i-Leaf has you covered. As the
              first company in India to specialize in residential steel doors
              and windows, we combine 20 years of expertise with innovative
              designs to provide you with unmatched home security solutions.
            </p>
            <div className="w-full flex justify-center items-center lg:hidden">
              <Parallelogram />
            </div>
          </div>
        </div>
        <h1 className="text-3xl italic font-style hidden lg:flex">
          Choose i-Leaf. Secure Your Future.
        </h1>
        <h1 className="text-lg md:text-xl italic font-style text-center flex lg:hidden">
          Choose i-Leaf <br /> Secure Your Future.
        </h1>
        <div className="w-full flex justify-center items-center lg:hidden">
          <Parallelogram />
        </div>
        <div className="lg:hidden">
          <Button
            routeLink="/"
            title="Enquiry"
            border={1}
            borderColor="black"
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
