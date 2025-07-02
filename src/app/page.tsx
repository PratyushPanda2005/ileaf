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
    </div>
    </>
  );
}
