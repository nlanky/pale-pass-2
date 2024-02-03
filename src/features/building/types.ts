export interface BuildingDescription {
  tier: number;
  text: string;
}

export interface BuildingImage {
  tier: number;
  exterior: string;
  interior: string;
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
  /** @type {BuildingPosition} Position of building on town map. x and y are percentages. (x, y) is centre of building on town map. */
  position: BuildingPosition;
  /** @type {number} The highest tier the building can reach */
  maxTier: number;
  /** @type {number} The highest number of villagers that can be assigned to the building */
  maxAssignedVillagers: number;
}
