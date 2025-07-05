export interface DoorDetails {
    doorLeafThickness: string;
    frameSize: string;
    frameSheetThickness: string;
    panelStuffing: string;
    leafSheetThickness: string;
    threshold: string;
    lock: string;
    handle: string;
    features: string[];
    extras: string;
    sizes: string;
    hinges: string;
  }
  
  export interface DoorVariant {
    id: string;
    name: string;
    image: string;
    cta: string;
    details: DoorDetails;
  }
  
  export interface DoorSeries {
    variants: DoorVariant[];
  }
  
  export interface LuxuryDoorsData {
    description: string;
    series: DoorSeries[];
  }