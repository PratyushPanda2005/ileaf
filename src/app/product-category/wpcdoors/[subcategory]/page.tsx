import ProductCategory from "@/app/components/product-category";
import { wpcDoorsData } from "@/app/config/products/wpcdoors/wpcdoors";
import Image from "next/image";


type Params = Promise<{subcategory : string}>

async function DoorDetailsPage({ params } : {params : Params}) {

    const {subcategory} = await params;

  const doorDetails = wpcDoorsData["WpcDoors"].series[0].variants.find(
    variant => variant.number === subcategory
  );


  if (!doorDetails) {
    return <div>Door not found</div>;
  }

  return (
    <section className="min-h-screen bg-black">
      <ProductCategory/>
     <div className=" grid grid-cols-3 px-20">
        <div className="col-span-2 bg-[#5a5a5a] p-20">
            <div className="flex h-full w-full">
            <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="font-style text-3xl mb-10">{doorDetails.id}</h1>
            <Image src={doorDetails.image} width={300} height={300} alt="" />
            </div>
            <div className="h-full w-full flex items-center justify-center">
            <p className="font-raleway tracking-[1px] text-[14px] font-[300] leading-[180%] max-w-[280px]">{doorDetails.description}</p>
            </div>
            </div>

        </div>
        <div className="col-span-1 bg-[#6b6b6b] text-[#ffc600] font-raleway font-[300] leading-[180%] flex justify-center items-center p-20 tracking-[1px] text-[14px]">
            <ul>
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
    </section>
  );
}

export default DoorDetailsPage;