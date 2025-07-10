import Parallelogram from "@/app/components/parallelogram";
import ProductCategory from "@/app/components/product-category";
import ProductCategoryMob from "@/app/components/product-category-mob";
import ProductHero from "@/app/components/productsHero";
import RelatedProducts from "@/app/components/related-products";
import ImageZoom from "@/app/components/zoomin-effect";
import { wpcDoorsData } from "@/app/config/products/wpcdoors/wpcdoors";

type Params = Promise<{ subcategory: string }>;

async function DoorDetailsPage({ params }: { params: Params }) {
  const { subcategory } = await params;

  const doorDetails = wpcDoorsData["WpcDoors"].series[0].variants.find(
    (variant) => variant.number === subcategory
  );

  if (!doorDetails) {
    return <div>Door not found</div>;
  }

  const allProducts = wpcDoorsData["WpcDoors"].series[0].variants;

  return (
    <>
      <ProductHero bgImage="https://www.ileafdoors.com/wp-content/uploads/2025/04/Hero-Luxury-doors-scaled.webp" />
      <section className="min-h-screen bg-black">
        <ProductCategory />
        <div className=" grid lg:grid-cols-3 px-10 lg:px-20">
          <div className="lg:col-span-2 bg-[#5a5a5a] p-10 lg:p-20">
            <div className="flex h-full w-full gap-10">
              <div className="h-full w-full flex flex-col justify-center items-center">
                <h1 className="text-[#FFBF00] lg:text-black font-style text-xl md:text-2xl lg:text-3xl mb-10">
                  {doorDetails.id}
                </h1>
                <ImageZoom
                  src={doorDetails.image}
                  alt={doorDetails.id}
                  className="max-sm:h-[240px] max-lg:h-[320px] h-[90vh] w-auto"
              />
              </div>
              <div className="h-full w-full items-center justify-center hidden lg:flex">
                <p className="font-raleway tracking-[1px] text-[14px] font-[300] leading-[180%] max-w-[280px]">
                  {doorDetails.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-[#DBDBDB] lg:bg-[#6b6b6b] text-black lg:text-[#ffc600] font-raleway font-[300] leading-[180%] flex justify-center items-center p-10 xl:p-20 tracking-[1px] text-[14px]">
            <ul className=" text-center lg:text-left">
              <li>{doorDetails.details.material}</li>
              <li>{doorDetails.details.weight} </li>
              <li>{doorDetails.details.weight} </li>
              <li>{doorDetails.details.finishes}</li>
              <li>{doorDetails.details.texture}</li>
              <li>{doorDetails.details.appearance}</li>
              <li>{doorDetails.details.customization}</li>
              <li>{doorDetails.details.glassFeatures}</li>
              <li>{doorDetails.details.durability}</li>
              <li>{doorDetails.details.lasting}</li>
            </ul>
          </div>
        </div>
        <ProductCategoryMob/>
        <div className="flex flex-col justify-center items-center p-10 md:p-20 md:bg-black">
          <h1 className="text-xl md:text-2xl lg:text-3xl md:font-blafhyglibs md:normal-case italic uppercase font-raleway text-[#FFBF00] md:text-white tracking-[4px]">
            Related Products
          </h1>
          <Parallelogram />
        </div>
        <RelatedProducts
          routeType="wpcdoors"
          currentSubcategory={subcategory}
          allProducts={allProducts}
        />
      </section>
    </>
  );
}

export default DoorDetailsPage;
