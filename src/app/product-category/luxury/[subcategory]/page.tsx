import { luxuryDoorsData } from "@/app/config/products/luxury/luxury";
import Image from "next/image";



interface DoorDetailsPageProps {
    params: {
      subcategory: string;
    };
  }
 function DoorDetailsPage({ params } : DoorDetailsPageProps) {
    
  const doorDetails = luxuryDoorsData["Luxury Doors"].series[0].variants.find(
    variant => variant.number === params.subcategory
  );

  if (!doorDetails) {
    return <div>Door not found</div>;
  }

  return (
    <div className="door-details">
      <h1>{doorDetails.id}</h1>
      <Image src={doorDetails.image} width={500} height={500} alt={doorDetails.id} className="w-full h-full" />
      <h2>Product ID: {doorDetails.id}</h2>
      
      <div className="specifications">
        <h3>Specifications:</h3>
        <ul>
          <li>Door Leaf Thickness: {doorDetails.details.doorLeafThickness}</li>
          <li>Frame Size: {doorDetails.details.frameSize}</li>
          <li>Frame Sheet Thickness: {doorDetails.details.frameSheetThickness}</li>
        </ul>
        
        <h3>Features:</h3>
        <ul>
          {doorDetails.details.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DoorDetailsPage;