// LOCAL FILES
// Interfaces & Types
import type { Building } from "features/building/types";

/*
TODO
hover over upgrade to see next building image?
grey out tier 1 building until built
build phase
    fixed build time?
    assign villagers to build faster?
    resource cost?
repair phase
    fixed repair time?
    assign villagers to repair faster?
    resource cost?
requirements
*/

export const BUILDING_ID_TO_BUILDING: Record<number, Building> = {
  1: {
    id: 1,
    name: "Housing",
    descriptions: [{ tier: 1, text: "Housing tier 1" }],
    images: [],
    position: { x: 0.28, y: 0.55 },
    maxTier: 1,
  },
};
