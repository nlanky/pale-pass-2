export type VillagerSpecialty =
  | "Builder"
  | "Gatherer"
  | "Healer"
  | "Scout"
  | "Soldier"
  | "Spy";

export const VILLAGER_STATS = [
  "Building",
  "Combat",
  "Gathering",
  "Healing",
  "Scouting",
  "Spycraft",
] as const;

export type VillagerStat = (typeof VILLAGER_STATS)[number];

export type VillagerStats = Record<VillagerStat, number>;

export interface VillagerNew {
  /** @type {number} Unique identifier for villager */
  id: number;
  /** @type {string} Name of villager */
  name: string;
  /** @type {string} Occupation of villager (flavour text) */
  occupation: string;
  /** @type {string} Description of villager and what they do */
  description: string;
  /** @type {string} Path to image of villager */
  image: string;
  /** @type {VillagerSpecialty} Specialty dictates starting/max stats */
  specialty: VillagerSpecialty;
}

export interface TownVillager {
  id: number;
  stats: VillagerStats;
}

export interface VillagerBuildingAssignment {
  villagerId: number;
  buildingId: number;
}
