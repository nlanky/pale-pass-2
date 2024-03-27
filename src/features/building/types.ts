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

export type BuildingEffect =
  | "COLLECT_WOOD"
  | "COLLECT_STONE"
  | "COLLECT_IRON"
  | "COLLECT_STEEL"
  | "COLLECT_MYTHRIL"
  | "COLLECT_AMETHYST"
  | "ENEMY_INFO"
  | "MAP_TILE"
  | "POPULATION"
  | "RESOURCE_STORAGE"
  | "TRAIN_COMBAT"
  | "TRAIN_GATHERING"
  | "TRAIN_HEALING"
  | "TRAIN_SCOUTING"
  | "TRAIN_SPYCRAFT";

export interface BuildingNew {
  id: number;
  name: string;
  descriptions: BuildingDescription[];
  images: BuildingImage[];
  position: BuildingPosition;
  maxTier: number;
  canAssignVillagers: boolean;
  effects: BuildingEffect[];
}

export interface TownBuilding {
  id: number;
  tier: number;
}
