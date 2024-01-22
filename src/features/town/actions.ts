// PUBLIC MODULES
import { createAction } from "@reduxjs/toolkit";

// LOCAL FILES
// Classes
import { Building } from "features/building/classes";
import { Villager } from "features/villager/classes";

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
