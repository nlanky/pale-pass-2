// LOCAL FILES
// Interfaces & Types
import type {
  BuildingDescription,
  BuildingImage,
  BuildingNew,
  BuildingPosition,
} from "features/building/types";

export class Building {
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

  constructor({
    id,
    name,
    descriptions,
    images,
    position,
    maxTier,
  }: BuildingNew) {
    this.id = id;
    this.name = name;
    this.descriptions = descriptions;
    this.images = images;
    this.position = position;
    this.maxTier = maxTier;
  }

  getDescription(tier: number): BuildingDescription | undefined {
    return this.descriptions.find(
      (description) => description.tier === tier,
    );
  }

  getImage(tier: number): BuildingImage | undefined {
    return this.images.find((image) => image.tier === tier);
  }

  canUpgrade(tier: number): boolean {
    return tier < this.maxTier;
  }
}
