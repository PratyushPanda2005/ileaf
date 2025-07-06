import ProductCategory from "@/app/components/product-category";
import { giDoorsData } from "@/app/config/products/gidoors/gidoors";
import Image from "next/image";


type Params = Promise<{subcategory : string}>

async function DoorDetailsPage({ params } : {params : Params}) {

    const {subcategory} = await params;

  const doorDetails = giDoorsData["Gi Doors"].series[0].variants.find(
    variant => variant.number === subcategory
  );

  const description = giDoorsData["Gi Doors"]

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
            <p className="font-raleway tracking-[1px] text-[14px] font-[300] leading-[180%] max-w-[280px]">{description.description}</p>
            </div>
            </div>

        </div>
        <div className="col-span-1 bg-[#6b6b6b] text-[#ffc600] font-raleway font-[300] leading-[180%] flex justify-center items-center p-20 tracking-[1px] text-[14px]">
            <ul>
            <li><span className="font-semibold">Door leaf thickness:</span> {doorDetails.details.doorLeafThickness} </li>
            <li><span className="font-semibold">Structured door frame sheet thickness: </span>{doorDetails.details.frameSheetThickness} </li>
            <li><span className="font-semibold">Structured door leaf sheet thickness: </span>{doorDetails.details.leafSheetThickness} </li>
            <li>{doorDetails.details.threshold}</li>
            <li><span className="font-semibold">Door panel stuffing:</span> {doorDetails.details.panelStuffing}</li>
            <li>{doorDetails.details.lockingSystem.primary}</li>
            <li>{doorDetails.details.lockingSystem.secondary}</li>
            <li>{doorDetails.details.finish}</li>
            <li>{doorDetails.details.protection}</li>
            <li><span className="font-semibold">Easy to install, aesthetic finish</span> {doorDetails.details.hardware}</li>
            </ul>
        </div>
     </div>
    </section>
  );
}

export default DoorDetailsPage;