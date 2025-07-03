import React from "react";

const Info = () => {
  return (
    <section className="px-10 lg:px-20 bg-[#707070]">
      <div className="w-full flex flex-col gap-10 justify-center items-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            <h1 className="font-bold font-raleway text-center lg:text-left">
            Two decades of excellence in home protection
            </h1>
            <p className="font-extralight mt-4 font-raleway text-center lg:text-left">
            i-Leaf Buildpro Pvt. Ltd., an ISO 9001-2015 Certified company, has been a pioneer in the home security industry since its inception in 2005. As one of India’s oldest and most trusted steel door brands, i-Leaf specialises in crafting best quality steel doors, steel windows, FRP doors, and smart security locks. With a legacy of 20 years, we have earned the reputation of being the best steel doors brand, delivering innovative solutions tailored for modern homes.
            </p>
          </div>
          <div className="col-span-1">
            <h1 className="font-bold font-raleway text-center lg:text-left">
              Commitment to quality and sustainability
            </h1>
            <p className="font-extralight mt-4 font-raleway text-center lg:text-left">
              Despite the growing competition, i-Leaf remains at the forefront
              of the industry due to our uncompromising commitment to quality.
              With thousands of satisfied customers and a proven track record,
              we continue to lead the market with: Affordable luxury home doors
              in India Eco-conscious manufacturing processes Products designed
              for both residential and commercial applications
            </p>
          </div>
          <div className="col-span-1">
            <h1 className="font-medium italic text-center lg:text-left">
            Your trusted partner for peace of mind
            </h1>
            <p className="font-extralight italic mt-4 text-center lg:text-left">
            Whether you’re looking for beautiful steel doors, steel wood doors, or security steel doors, i-Leaf has you covered. As the first company in India to specialize in residential steel doors and windows, we combine 20 years of expertise with innovative designs to provide you with unmatched home security solutions.
            </p>
          </div>
        </div>
        <h1 className="text-3xl italic font-style hidden lg:flex">Choose i-Leaf. Secure Your Future.</h1>
        <h1 className="text-lg md:text-xl italic font-style text-center flex lg:hidden">Choose i-Leaf <br/> Secure Your Future.</h1>
      </div>
    </section>
  );
};

export default Info;
