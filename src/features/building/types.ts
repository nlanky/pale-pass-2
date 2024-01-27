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

export interface Building {
  /** @type {number} Unique identifier for building */
  id: number;
  /** @type {string} Name of building */
  name: string;
  /** @type {BuildingDescription[]} List of building descriptions. One per tier. */
  descriptions: BuildingDescription[];
  /** @type {BuildingImage[]} List of building images. One per tier. */
  images: BuildingImage[];
  /** @type {BuildingPosition} Position of building on town map. x and y are percentages from top left of image. */
  position: BuildingPosition;
  /** @type {number} The highest tier the building can reach */
  maxTier: number;
}
