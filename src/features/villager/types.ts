export interface Villager {
  /** @type {number} Unique identifier for villager */
  id: number;
  /** @type {string} Name of building */
  name: string;
  /** @type {string} Description of villager and what they do */
  description: string;
  /** @type {string} Path to image of villager */
  image: string;
}

export interface TownVillager {
  id: number;
}

export interface VillagerBuildingAssignment {
  villagerId: number;
  buildingId: number;
}
