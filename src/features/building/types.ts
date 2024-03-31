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
  | "DISCOVER_ENEMY_INFO"
  | "DISCOVER_MAP_TILE"
  | "INCREASE_POPULATION"
  | "STORE_RESOURCES"
  | "TRADE_RESOURCES"
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
