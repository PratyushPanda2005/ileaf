import React from "react";
import SectionHeading from "../components/sectionheading";
import Button from "../components/button";

const ProductRange = () => {
  return (
    <div>
      <SectionHeading />
      <div className="lg:px-20 bg-[#e4e4e4]">
        <div className="sticky top-0">
          <div className="w-full min-h-screen flex  flex-col md:flex-row bg-[#dbdbdb] justify-evenly py-20 px-6 inset-0">
            <div className="text-center md:w-1/3 ">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-blafhyglibs tracking-[4px] lg:tracking-[7px] italic leading-[120%]">
                Luxury
              </h1>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-blafhyglibs tracking-[4px] lg:tracking-[7px] italic leading-[120%]">
                Doors
              </h1>
              <div className="flex w-full justify-center items-center mt-4">
                <div className="w-4 h-1.5 bg-[#FFC600] transform skew-x-[-200deg]" />
              </div>
            </div>
            <div className="md:w-1/3 flex md:hidden justify-center items-center mt-6 mb-6">
              <img
                src="https://www.ileafdoors.com/wp-content/uploads/2025/01/ILZ-D-21.webp"
                alt=""
                width={100}
                height={100}
                className="h-[240px] md:h-[30vw] w-auto"
              />
            </div>

            <div className="flex-1 flex flex-col gap-10 justify-center items-center md:w-1/3">
              <p className="text-center text-sm italic text-black max-w-[80%] font-[300] tracking-widest font-raleway leading-[180%]">
                Made of{" "}
                <span className="text-black font-[600]">
                  high quality Cast Aluminium, Galvalume sheets & Carbonated
                  wood
                </span>{" "}
                with several unique features.
              </p>
              <Button title="Explore now" bgColor="#FFBF00" textColor="black" />
            </div>
            <div className="md:w-1/3 hidden md:flex justify-center items-center ">
              <img
                src="https://www.ileafdoors.com/wp-content/uploads/2025/01/ILZ-D-21.webp"
                alt=""
                width={500}
                height={500}
                className="h-[120px] md:h-[30vw] w-auto"
              />
            </div>
          </div>
        </div>
        <div className="sticky top-0 z-[2]">
          <div className="w-full min-h-screen flex  flex-col md:flex-row bg-[#dbdbdb] justify-evenly py-20 px-6 inset-0">
            <div className="text-center md:w-1/3 ">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-blafhyglibs tracking-[4px] lg:tracking-[7px] italic leading-[120%]">
                GL Doors
              </h1>
              <div className="flex w-full justify-center items-center mt-4">
                <div className="w-4 h-1.5 bg-[#FFC600] transform skew-x-[-200deg]" />
              </div>
            </div>
            <div className="md:w-1/3  flex md:hidden justify-center items-center mt-6 mb-6">
              <img
                src="https://www.ileafdoors.com/wp-content/uploads/2025/04/IL-GL-SG121.webp"
                alt=""
                width={500}
                height={500}
                className="h-[240px] md:h-[30vw] w-auto"
              />
            </div>

            <div className="flex-1 flex flex-col gap-10 justify-center items-center md:w-1/3 ">
              <p className="text-center text-sm italic text-black max-w-[80%] font-[300] tracking-widest font-raleway leading-[180%]">
                These{" "}
                <span className="text-black font-[600]">
                  multi-locking doors features
                </span>{" "}
                a stunning{" "}
                <span className="text-black font-[600]">
                  wooden steel door finish,
                </span>{" "}
                combining durability with aesthetic appeal
              </p>
              <Button title="Explore now" bgColor="#FFBF00" textColor="black" />
            </div>
            <div className="md:w-1/3 hidden md:flex justify-center items-center ">
              <img
                src="https://www.ileafdoors.com/wp-content/uploads/2025/04/IL-GL-SG121.webp"
                alt=""
                width={500}
                height={500}
                className="h-[120px] md:h-[30vw] w-auto"
              />
            </div>
          </div>
        </div>
        <div className="sticky top-0 z-[4]">
          <div className="w-full min-h-screen flex  flex-col md:flex-row bg-[#dbdbdb] justify-evenly py-20 px-6 inset-0">
            <div className="text-center md:w-1/3 ">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-blafhyglibs tracking-[4px] lg:tracking-[7px] italic leading-[120%]">
                Gi Doors
              </h1>
              <div className="flex w-full justify-center items-center mt-4">
                <div className="w-4 h-1.5 bg-[#FFC600] transform skew-x-[-200deg]" />
              </div>
            </div>
            <div className="md:w-1/3  flex md:hidden justify-center items-center mt-6 mb-6">
              <img
                src="https://www.ileafdoors.com/wp-content/uploads/2025/04/IL-Gi-66-TW.webp"
                alt=""
                width={500}
                height={500}
                className="h-[240px] md:h-[30vw] w-auto"
              />
            </div>

            <div className="flex-1 flex flex-col gap-10 justify-center items-center md:w-1/3 ">
              <p className="text-center text-sm italic text-black max-w-[80%] font-[300] tracking-widest font-raleway leading-[180%]">
                Built from premium{" "}
                <span className="text-black font-[600]">galvanised steel</span>{" "}
                our GI doors provide{" "}
                <span className="text-black font-[600]">
                  heightened security
                </span>{" "}
                with <span className="text-black font-[600]">lock points</span>{" "}
                and heavy-duty hinges. These{" "}
                <span className="text-black font-[600]">steel wood doors</span>{" "}
                are perfect for homes looking for a balance of affordability and
                luxury.
              </p>
              <Button title="Explore now" bgColor="#FFBF00" textColor="black" />
            </div>
            <div className="md:w-1/3 hidden md:flex justify-center items-center ">
              <img
                src="https://www.ileafdoors.com/wp-content/uploads/2025/04/IL-Gi-66-TW.webp"
                alt=""
                width={500}
                height={500}
                className="h-[120px] md:h-[30vw] w-auto"
              />
            </div>
          </div>
        </div>
        <div className="sticky top-0 z-[10] ">
          <div className="w-full min-h-screen flex  flex-col md:flex-row bg-[#dbdbdb] justify-evenly py-20 px-6 inset-0">
            <div className="text-center md:w-1/3 ">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-blafhyglibs tracking-[4px] lg:tracking-[7px] italic leading-[120%]">
                Windows
              </h1>
              <div className="flex w-full justify-center items-center mt-4">
                <div className="w-4 h-1.5 bg-[#FFC600] transform skew-x-[-200deg]" />
              </div>
            </div>
            <div className="md:w-1/3  flex md:hidden justify-center items-center mt-6 mb-6">
              <img
                src="https://www.ileafdoors.com/wp-content/uploads/2024/12/EP-3-Panel-CD.webp"
                alt=""
                width={500}
                height={500}
                className="h-[240px] md:h-[30vw] w-auto"
              />
            </div>

            <div className="flex-1 flex flex-col gap-10 justify-center items-center md:w-1/3 ">
              <p className="text-center text-sm italic text-black max-w-[80%] font-[300] tracking-widest font-raleway leading-[180%]">
                Our steel windows are crafted with high-quality{" "}
                <span className="text-black font-[600]">GI steel.</span> making
                them{" "}
                <span className="text-black font-[600]">
                  termite-proof, weather-resistant,
                </span>{" "}
                and maintenance-free. Easy to install, they are ideal for modern
                homes, eliminating the need for carpentry.{" "}
              </p>
              <Button title="Explore now" bgColor="#FFBF00" textColor="black" />
            </div>
            <div className="md:w-1/3 hidden md:flex justify-center items-center ">
              <img
                src="https://www.ileafdoors.com/wp-content/uploads/2024/12/EP-3-Panel-CD.webp"
                alt=""
                width={500}
                height={500}
                className="h-[120px] md:h-[26vw] w-auto"
              />
            </div>
          </div>
        </div>
        <div className="sticky top-0 z-[20]">
          <div className="w-full min-h-screen flex  flex-col md:flex-row bg-[#dbdbdb] justify-evenly py-20 px-6 inset-0">
            <div className="text-center md:w-1/3 ">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-blafhyglibs tracking-[4px] lg:tracking-[7px] italic leading-[120%]">
                Fibre Doors
              </h1>
              <div className="flex w-full justify-center items-center mt-4">
                <div className="w-4 h-1.5 bg-[#FFC600] transform skew-x-[-200deg]" />
              </div>
            </div>
            <div className="md:w-1/3  flex md:hidden justify-center items-center mt-6 mb-6">
              <img
                src="https://www.ileafdoors.com/wp-content/uploads/2025/05/DUTON.webp"
                alt=""
                width={500}
                height={500}
                className="h-[240px] md:h-[30vw] w-auto"
              />
            </div>

            <div className="flex-1 flex flex-col gap-10 justify-center items-center md:w-1/3 ">
              <p className="text-center text-sm italic text-black max-w-[80%] font-[300] tracking-widest font-raleway leading-[180%]">
                i-Leaf’s{" "}
                <span className="text-black font-[600]">FRP doors</span> offer a
                lightweight yet durable alternative to wood, perfect for
                bathrooms, kitchens, and bedrooms. Available in{" "}
                <span className="text-black font-[600]">
                  wood colour finishes
                </span>{" "}
                these{" "}
                <span className="text-black font-[600]">customised doors</span>{" "}
                bring a fresh look to your interiors.
              </p>
              <Button title="Explore now" bgColor="#FFBF00" textColor="black" />
            </div>
            <div className="md:w-1/3 hidden md:flex justify-center items-center ">
              <img
                src="https://www.ileafdoors.com/wp-content/uploads/2025/05/DUTON.webp"
                alt=""
                width={500}
                height={500}
                className="h-[120px] md:h-[26vw] w-auto"
              />
            </div>
          </div>
        </div>
        <div className="sticky top-0 z-[30]">
          <div className="w-full min-h-screen flex  flex-col md:flex-row bg-[#dbdbdb] justify-evenly py-20 px-6 inset-0">
            <div className="text-center md:w-1/3 ">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-blafhyglibs tracking-[4px] lg:tracking-[7px] italic leading-[120%]">
              WPC Doors
              </h1>
              <div className="flex w-full justify-center items-center mt-4">
                <div className="w-4 h-1.5 bg-[#FFC600] transform skew-x-[-200deg]" />
              </div>
            </div>
            <div className="md:w-1/3  flex md:hidden justify-center items-center mt-8 mb-6">
              <img
                src="https://www.ileafdoors.com/wp-content/uploads/2024/12/WPC-Doors.webp"
                alt=""
                width={500}
                height={500}
                className="h-[240px] md:h-[30vw] w-auto"
              />
            </div>

            <div className="flex-1 flex flex-col gap-10 justify-center items-center md:w-1/3 ">
              <p className="text-center text-sm italic text-black max-w-[80%] font-[300] tracking-widest font-raleway leading-[180%]">
              WPC Doors and Frames are widely accepted with its property and so becoming perfect replacement to wooden doors and frames. WPC frames are{" "}
                <span className="text-black font-[600]">water proof, termite/borer resistant</span>{" "}and{" "}<span className="text-black font-[600]">high screw holding capacity.</span>
              </p>
              <Button title="Explore now" bgColor="#FFBF00" textColor="black" />
            </div>
            <div className="md:w-1/3 hidden md:flex justify-center items-center ">
              <img
                src="https://www.ileafdoors.com/wp-content/uploads/2024/12/WPC-Doors.webp"
                alt=""
                width={500}
                height={500}
                className="h-[120px] md:h-[30vw] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRange;
