// LOCAL FILES
// Interfaces & Types
import type {
  BuildingDescription,
  BuildingEffect,
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
  /** @type {BuildingPosition} Position of building on town map. x and y are percentages. (x, y) is centre of building on town map. */
  position: BuildingPosition;
  /** @type {number} The highest tier the building can reach */
  maxTier: number;
  /** @type {boolean} Whether player can assign villagers to work at building. */
  canAssignVillagers: boolean;
  /** @type {BuildingEffect[]} List of effects obtained from the building being built */
  effects: BuildingEffect[];

  constructor(building: BuildingNew) {
    const {
      id,
      name,
      descriptions,
      images,
      position,
      maxTier,
      canAssignVillagers,
      effects,
    } = building;
    this.id = id;
    this.name = name;
    this.descriptions = descriptions;
    this.images = images;
    this.position = position;
    this.maxTier = maxTier;
    this.canAssignVillagers = canAssignVillagers;
    this.effects = effects;
  }

  getDescription(tier: number): string | undefined {
    return this.descriptions.find(
      (description) => description.tier === tier,
    )?.text;
  }

  getImage(tier: number): BuildingImage | undefined {
    return this.images.find((image) => image.tier === tier);
  }

  canUpgrade(tier: number): boolean {
    return tier < this.maxTier;
  }
}
