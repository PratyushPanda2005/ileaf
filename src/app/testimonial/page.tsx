'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  deepak_kumar,
  divya_kc,
  saibin_ahamad,
  johny_joseph,
  kantharao,
  vijay_kumar,
  viswanatham_mnmspc,
  thirumarainthan,
  remya,
} from "../config";
import { ChevronDown, ChevronUp } from "lucide-react";

const Testimonial = () => {
  const testimonialData = [
    {
      id:'1',
      title: "Dipu Kumar M",
      description: "As a Designing Engineer based in Kochi, I have been using i-Leaf steel doors for my clients since 2013. The consistent quality, durability, and value for money have made i-leaf a trusted brand in my projects. My clients are uniformly pleased—not just with the product’s performance but also with the prompt and reliable customer support. I confidently recommend i-Leaf for both residential and commercial applications",
      image: deepak_kumar
    },
    {
      id:'2',
      title: "Divya K C",
      description: "We recently bought five main entrance doors and two bedroom doors from i-Leaf, and we’re thoroughly impressed with their quality, secure locking system, and fine finish. These doors have truly enhanced the overall look of our home, giving it a premium feel. We’re very happy with our purchase and would highly recommend i-Leaf to anyone looking for stylish and reliable doors for their home.",
      image: divya_kc
    },
    {
      id:'3',
      title: "Dr. Saibin Ahamad",
      description: "I have installed 14 i-Leaf steel doors in my home, and after one and a half years of use, I am extremely satisfied with their structure, durability, and overall functionality. The doors feature a uniquely designed hinge and multi-directional locking system, offering enhanced safety and security. They installed my front door according to my specific requirements, and I was highly impressed with its design and construction quality. The i-Leaf team in Calicut was highly supportive, with excellent technicians who managed the project efficiently—from the start of the masonry work to the final finishing touches. Their post-installation service has also been commendable.",
      image: saibin_ahamad
    },
    {
      id:'4',
      title: "Johny joseph",
      description: "I have connected with i-Leaf team when I was constructing a new house during the year 2020. Team headed by Mr. Jinson so prompt to visit me and provided all the information required and also arranged for a demo of the product at their facility. In the current consumer market, most of the transactions are one time affair and consumer loyalty is thing of past , I found my experience with i-Leaf is clear exception. It was beginning of long term relationship with trust and loyalty. i-Leaf created a very delightful customer experience with the product quality and best in the market after sales service.",
      image: johny_joseph
    },
    {
      id:'5',
      title: "Mr. Kantharao",
      description: "We are extremely satisfied with the service provided by i-Leaf Doors. Their team has been consistently responsive, promptly attending whenever we called for support. The manager assigned to us was soft-spoken, professional, and a pleasure to work with. Their delivery timelines were accurate, and impressively, they completed the installation of 32 doors within just four days. The technician who handled the installation was not only skilled and efficient but also courteous and respectful in his approach. We’re very happy with the overall experience and would confidently recommend i-Leaf Doors to anyone.",
      image: kantharao
    },
    {
      id:'6',
      title: "Vijay Kumar Umapathy",
      description: "I’m extremely satisfied with my experience with i-Leaf. The build quality of the door is fantastic bundled by great customer service. The i-Leaf team helped me choose the right model and made sure installation was flawless and hassle-free. I would absolutely recommend i-Leaf Door to anyone looking for a door with superior quality, design and durability",
      image: vijay_kumar
    },
    {
      id:'7',
      title: "Kona Viswanatham",
      description: "We have been using i-Leaf Steel Doors for the past three years and have installed a total of 34 doors, including at my brother’s house and my own. We haven’t encountered a single issue with any of them. We’re extremely satisfied with the quality and performance of these doors.",
      image: viswanatham_mnmspc
    },
    {
      id:'8',
      title: "Er. S Thirumarainthan",
      description: "As part of a renovation project for a property in Madurai, we began demolishing an old structure on-site. During this process, we found that existing wooden doors and windows were found to be severely termite-infested and structurally weak. That moment – I chose to utilize everything with steel — doors, windows, and grills — and that decision turned out to be excellent & get connected with i-Leaf. The team was highly responsive throughout, and the final outcome exceeded expectations. The steel doors are sturdy, stylish, soundproof, well-insulated, and still look brand new. I believe they’ll easily last a century. I wholeheartedly recommend i-Leaf Doors & Windows for anyone seeking long-lasting quality and peace of mind.",
      image: thirumarainthan
    },
    {
      id:'9',
      title: "Remya Muralikrishna",
      description: "We chose i-Leaf steel doors for our property, and it turned out to be an excellent decision. During an attempted burglary at our home, the i-Leaf door demonstrated its superior quality and robust security features, effectively preventing any breach. We were truly impressed—not only by the product but also by the prompt support from their team, who replaced the door within a day. We’re sincerely grateful to the i-Leaf team for their quick response and unwavering support during a difficult time",
      image: remya
    },
  ]

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const itemsToShow = isMobile && !showAll ? 4 : testimonialData.length;

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);


  return (
    <section className="min-h-screen bg-black px-10 lg:px-20 py-20 lg:py-[160px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-32">
        {testimonialData.slice(0,itemsToShow).map((item) => (
          <div key={item.id} className="col-span-1 flex flex-col justify-start items-center gap-6 relative ">
            <Image 
              src={item.image} 
              alt={item.title} 
              width={300} 
              height={300}
              className="object-cover"
            />

            <div className="relative flex flex-col justify-center items-center "> 
              <div className="relative w-full lg:max-w-[70%] ">
              <p className={`text-[#707070] text-center font-style leading-[160%] !tracking-[0.5px] w-full ${
                expandedId === item.id ? '' : 'line-clamp-[7]'
              }`}>
                {item.description}
              </p>
              <button 
                onClick={() => toggleExpand(item.id)}
                className=" transform bg-amber-400 rounded-[100%] -translate-y-2 absolute bottom-0 right-0 p-0.5"
                aria-label={expandedId === item.id ? "Show less" : "Show more"}
              >
                {expandedId === item.id ? <ChevronUp size={12}  /> : <ChevronDown size={12}  />}
              </button>
              </div>
            </div>

            <h1 className="text-[#FFBF00] mt-4 font-style !tracking-[1px] text-lg uppercase">
              {item.title}
            </h1>
          </div>
        ))}

{isMobile && (
        <div className="flex justify-center mt-20">
          <button
            onClick={() => setShowAll(!showAll)}
            className="uppercase p-3 px-6 lg:px-8 transform  -skew-x-[20deg] text-sm  font-raleway tracking-[2px] font-[500] bg-[#707070] text-black"
          >
           <span className="inline-block transform skew-x-[20deg]">{showAll ? 'View Less' : 'View All'}</span>
          </button>
        </div>
      )}
      </div>
    </section>
  );
};

export default Testimonial;
