// LOCAL FILES
// Assets
import {
  building001ExteriorImage,
  building001InteriorImage,
  building002ExteriorImage,
  building002InteriorImage,
} from "assets/building";
// Classes
import { Building } from "features/building/classes";
// Interfaces & Types
import type { TownBuilding } from "features/building/types";

export const POPULATION_PER_BUILDING_TIER = 10;

export const RESOURCE_STORAGE_PER_BUILDING_TIER = 100;

export const BUILDING_ID_TO_BUILDING: Record<number, Building> = {
  1: new Building({
    id: 1,
    name: "Housing",
    descriptions: [
      {
        tier: 1,
        text: "A few days of labour and you stand before small, but cosy and warm cottages. Much better than the tents and shelters people were using! People are sure to work harder with a good roof over their heads.",
      },
    ],
    images: [
      {
        tier: 1,
        exterior: building001ExteriorImage,
        interior: building001InteriorImage,
      },
      {
        tier: 2,
        exterior: building001ExteriorImage,
        interior: building001InteriorImage,
      },
      {
        tier: 3,
        exterior: building001ExteriorImage,
        interior: building001InteriorImage,
      },
      {
        tier: 4,
        exterior: building001ExteriorImage,
        interior: building001InteriorImage,
      },
      {
        tier: 5,
        exterior: building001ExteriorImage,
        interior: building001InteriorImage,
      },
    ],
    position: { x: 0.32, y: 0.65 },
    maxTier: 5,
    canAssignVillagers: false,
    effects: ["POPULATION"],
  }),
  2: new Building({
    id: 2,
    name: "Sawmill",
    descriptions: [
      {
        tier: 1,
        text: "A veritable forest of industry surrounds you as you stand amid the roaring of sawblades, processing felled trees deftly and quickly. And importantly, not doing so inside the town any longer!",
      },
    ],
    images: [
      {
        tier: 1,
        exterior: building002ExteriorImage,
        interior: building002InteriorImage,
      },
      {
        tier: 2,
        exterior: building002ExteriorImage,
        interior: building002InteriorImage,
      },
      {
        tier: 3,
        exterior: building002ExteriorImage,
        interior: building002InteriorImage,
      },
      {
        tier: 4,
        exterior: building002ExteriorImage,
        interior: building002InteriorImage,
      },
      {
        tier: 5,
        exterior: building002ExteriorImage,
        interior: building002InteriorImage,
      },
    ],
    position: { x: 0.87, y: 0.72 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["COLLECT_WOOD", "TRAIN_GATHERING"],
  }),
  3: new Building({
    id: 3,
    name: "Stone Quarry",
    descriptions: [],
    images: [],
    position: { x: 0.01, y: 0.7 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["COLLECT_STONE", "TRAIN_GATHERING"],
  }),
  4: new Building({
    id: 4,
    name: "Iron Mine",
    descriptions: [],
    images: [],
    position: { x: 0.38, y: 0.84 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["COLLECT_IRON", "TRAIN_GATHERING"],
  }),
  5: new Building({
    id: 5,
    name: "Steel Foundry",
    descriptions: [],
    images: [],
    position: { x: 0.27, y: 0.5 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["COLLECT_STEEL", "TRAIN_GATHERING"],
  }),
  6: new Building({
    id: 6,
    name: "Alchemist",
    descriptions: [],
    images: [],
    position: { x: 0.87, y: 0.5 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["COLLECT_MYTHRIL", "TRAIN_GATHERING"],
  }),
  7: new Building({
    id: 7,
    name: "Wizard Tower",
    descriptions: [],
    images: [],
    position: { x: 0.3, y: 0.14 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["COLLECT_AMETHYST", "TRAIN_GATHERING"],
  }),
  8: new Building({
    id: 8,
    name: "Cartographer",
    descriptions: [],
    images: [],
    position: { x: 0.33, y: 0.34 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["MAP_TILE", "TRAIN_SCOUTING"],
  }),
  9: new Building({
    id: 9,
    name: "Thieves Guild",
    descriptions: [],
    images: [],
    position: { x: 0.54, y: 0.5 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["ENEMY_INFO", "TRAIN_SPYCRAFT"],
  }),
  10: new Building({
    id: 10,
    name: "Barracks",
    descriptions: [],
    images: [],
    position: { x: 0.15, y: 0.31 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["TRAIN_COMBAT"],
  }),
  11: new Building({
    id: 11,
    name: "Infirmary",
    descriptions: [],
    images: [],
    position: { x: 0.71, y: 0.45 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["TRAIN_HEALING"],
  }),
  12: new Building({
    id: 12,
    name: "Market",
    descriptions: [],
    images: [],
    position: { x: 0.17, y: 0.68 },
    maxTier: 1,
    canAssignVillagers: false,
    effects: [],
  }),
  13: new Building({
    id: 13,
    name: "Warehouse",
    descriptions: [],
    images: [],
    position: { x: 0.04, y: 0.45 },
    maxTier: 5,
    canAssignVillagers: false,
    effects: [],
  }),
};

// Town starts with Housing at tier 1
export const INITIAL_BUILDINGS: TownBuilding[] = Object.values(
  BUILDING_ID_TO_BUILDING,
)
  .filter((building) => building.name === "Housing")
  .map((building) => ({ id: building.id, tier: 1 }));
