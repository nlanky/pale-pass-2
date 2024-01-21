export interface BuildingDescription {
  tier: number;
  text: string;
}

export interface BuildingImage {
  tier: number;
  image: string;
}

export interface BuildingPosition {
  x: number;
  y: number;
}

export interface BuildingNew {
  id: number;
  name: string;
  descriptions: BuildingDescription[];
  images: BuildingImage[];
  position: BuildingPosition;
  maxTier: number;
}
