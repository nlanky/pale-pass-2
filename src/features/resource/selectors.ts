// PUBLIC MODULES
import { createSelector } from "@reduxjs/toolkit";

// LOCAL FILES
// Interfaces & Types
import type { RootState } from "features/redux/store";
import type { Resources } from "features/resource/types";
// Redux
import {
  selectBuildingById,
  selectBuildings,
} from "features/building/selectors";
import { selectVillagerAssignments } from "features/villager/selectors";
// Utility functions
import {
  getBuildingResourcesPerTurn,
  mergeResources,
} from "features/resource/utils";

export const selectResourcesTotal = (state: RootState) =>
  state.resource.total;

export const selectResourcesPerTurn = createSelector(
  [selectBuildings, selectVillagerAssignments],
  (buildings, assignments) => {
    let resources: Resources = {
      Wood: 0,
      Stone: 0,
      Iron: 0,
      Steel: 0,
      Mythril: 0,
      Amethyst: 0,
    };
    buildings.forEach((building) => {
      resources = mergeResources(
        resources,
        getBuildingResourcesPerTurn(building, assignments),
      );
    });
    return resources;
  },
);

export const selectBuildingResourcesPerTurn = createSelector(
  [selectBuildingById, selectVillagerAssignments],
  (building, assignments) =>
    getBuildingResourcesPerTurn(building, assignments),
);
