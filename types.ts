
export enum ViewType {
  LANDING = 'LANDING',
  DASHBOARD = 'DASHBOARD'
}

export interface PillarData {
  id: string;
  title: string;
  description: string;
  icon: string;
  subPoints: string[];
}

export interface FarmPlot {
  id: string;
  owner: string;
  size: number; // in hectares
  location: [number, number];
  carbonCredits: number;
  ndvi: number;
  treesCount: number;
  solarCapacity: number; // in kW
  biogasYield: number; // in m3
}
