// PUBLIC MODULES
import { createAction } from "@reduxjs/toolkit";

// LOCAL FILES
// Interfaces & Types
import type { Building } from "features/building/types";
import type { Villager } from "features/villager/types";

export const buildBuilding = createAction<Building>(
  "town/buildBuilding",
);
export const recruitVillager = createAction<Villager>(
  "town/recruitVillager",
);
export const assignVillager = createAction<{
  villagerId: number;
  buildingId: number;
}>("town/assignVillager");
export const unassignVillager = createAction<number>(
  "town/unassignVillager",
);
