import Logo from "../../../public/assets/logos/8f93e9b7801587928403b047a3fddf9487d7866f.png";
import Artherate from "../../../public/assets/logos/artherate.svg";
import Image from "next/image";
import IleafLogo from "@/../public/assets/logos/ileaflogo.svg";
import Instagram from "@/../public/assets/logos/linkedln.svg";
import Facebook from "@/../public/assets/logos/facebook.svg";
import Youtube from "@/../public/assets/logos/youtube.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="lg:px-20 bg-[#e4e4e4]">
      <div className="bg-[#e4e4e4] p-10 pt-12 pb-8 flex flex-col gap-10 lg:flex-row justify-between items-center">
        <Image src={Logo} alt="" className="h-16 w-auto" />
        <div className="flex  gap-2 items-center justify-center">
          <Image src={Artherate} alt="" className="w-8" />
          <h1 className="font-raleway">info@ileafdoors.com</h1>
        </div>
      </div>
      <div className="bg-black pt-12 pb-10 px-20 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between w-full">
          <div className="lg:w-1/3 text-center lg:text-left font-raleway footer-flex">
            <div className="w-3.5 h-1.5 bg-amber-300 transform skew-x-[-200deg] mb-10 hidden lg:flex" />
            <h1 className="uppercase text-[#707070] mb-4 italic">
              Quick Links
            </h1>
            <ul className="text-[#707070]  italic space-y-1">
              <li>- Home</li>
              <li>- About Us</li>
              <li>- Products</li>
              <li>- Features</li>
              <li>- Gallery</li>
              <li>- Testimonials</li>
              <li>- Enquiry</li>
              <li>- Contact Us</li>
            </ul>
          </div>
          <div className="lg:w-1/3 text-center lg:text-left font-raleway footer-flex">
            <div className="w-3.5 h-1.5 bg-amber-300 transform skew-x-[-200deg] mb-10" />
            <h1 className="uppercase text-[#707070]  mb-4 italic">products</h1>
            <ul className="text-[#707070] italic space-y-1">
              <li>- Luxury Doors</li>
              <li>- GL Doors</li>
              <li>- Gi Doors</li>
              <li>- Windows</li>
              <li>- Fibre Doors</li>
              <li>- WPC Doors</li>
            </ul>
          </div>
          <div className="lg:w-1/3 text-center lg:text-left font-raleway footer-flex">
            <div className="w-3.5 h-1.5 bg-amber-300 transform hidden lg:flex skew-x-[-200deg] mb-10" />
            <Image src={IleafLogo} alt="" className="h-12 w-auto mb-4" />
            <h1 className="uppercase text-[#707070] mb-4">address</h1>
            <ul className="text-[#707070] italic space-y-2">
              <p>
                34/1874A, Muttepadathu Building Padmasree Lane, Mamangalam,
                Kochi, Kerala, India - 682025
              </p>
              <h2>Tel : +91 484 4042626</h2>
              <h2>Mob : +91 91427 78877</h2>
              <h2>e-Mail : ileafdoor@gmail.com</h2>
              <div className="flex gap-2 mt-4 items-center lg:items-start lg:justify-start justify-center">
                <Link href="https://www.instagram.com/ileaf.doors/">
                <Image src={Instagram} alt="Instagram Logo" />
                </Link>
                <Link href="https://www.facebook.com/ILEAFSTEELDOORS" >
                <Image src={Facebook} alt="Facebook Logo" />
                </Link>
                <Link href="https://www.youtube.com/channel/UC84D_VYQW3Hi2Xa3SD8YccQ" >   
                <Image src={Youtube} alt="Youtube Logo" />
                </Link>
              </div>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 text-center lg:text-left justify-between w-full font-raleway">
          <h1 className="text-[#707070]">
            Copyright © 2025 i-LEAF Doors & Windows
          </h1>
          <div className="flex flex-wrap justify-center items-center  gap-3">
          <Link href="/legal/privacy" className="text-[#707070] flex gap-3 uppercase lg:normal-case">
            Privacy Policy<span className="hidden lg:flex">|</span>
          </Link>
          <Link href="/legal/terms" className="text-[#707070] flex gap-3 uppercase lg:normal-case">
            Terms of Service<span className="hidden lg:flex">|</span>
          </Link>
          <Link href="/legal/conditions" className="text-[#707070] uppercase lg:normal-case">
            Terms and Conditions
          </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
