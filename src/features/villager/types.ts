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

export interface VillagerAttractionRequirements {
  buildings: string[];
  villagers: string[];
}

export interface VillagerNew {
  id: number;
  name: string;
  occupation: string;
  description: string;
  image: string;
  specialty: VillagerSpecialty;
  attractEnabled: boolean;
  attractRequirements?: VillagerAttractionRequirements;
}

export interface TownVillager {
  id: number;
  stats: VillagerStats;
}

export interface VillagerBuildingAssignment {
  villagerId: number;
  buildingId: number;
}
