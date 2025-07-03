import ProductCategory from "./components/product-category";
import TextReveal from "./components/textreveal";
import CardsSection from "./pages/cards";
import Customer from "./pages/customer";
import Hero from "./pages/hero";
import Parallax from "./pages/parallax";
import ProductRange from "./pages/products-range";
import WhyUs from "./pages/whyus";

export default function Home() {
  return (
    <>
    <div>
     <Hero/>
     <Parallax
     title="Live safe and sound"
     bgImage="https://www.ileafdoors.com/wp-content/uploads/2024/12/live-safe-and-sound.webp"
     />
     <TextReveal
     />
     <ProductCategory/>
     <ProductRange/>
     <CardsSection/>
     <WhyUs/>
     <Customer/>
     <div  className="w-full flex justify-center sm:hidden items-center p-10 bg-[#707070]">
     <button
      className="uppercase p-3 px-6 lg:px-8 transform border -skew-x-[20deg] text-sm  font-raleway tracking-[2px] font-[300]"
    >
      <span className="inline-block transform skew-x-[20deg]">Enquiry</span>
    </button>
     </div>
    </div>
    </>
  );
}
