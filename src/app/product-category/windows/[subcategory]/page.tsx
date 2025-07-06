import ProductCategory from "@/app/components/product-category";
import { windowsData } from "@/app/config/products/windows/windows";
import Image from "next/image";


type Params = Promise<{subcategory : string}>

async function DoorDetailsPage({ params } : {params : Params}) {

    const {subcategory} = await params;

  const doorDetails = windowsData["Windows"].series[0].variants.find(
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
            <li> {doorDetails.details.material} </li>
            <li> {doorDetails.details.sizes} </li>
            <li>{doorDetails.details.thickness}</li>
            <li>{doorDetails.details.coating}</li>
            <li>{doorDetails.details.designs}</li>
            <li>{doorDetails.details.features}</li>
            <li>{doorDetails.details.frameIncluded}</li>
            <li>{doorDetails.details.cost}</li>
            <li>{doorDetails.details.installation}</li>
            </ul>
        </div>
     </div>
    </section>
  );
}

export default DoorDetailsPage;