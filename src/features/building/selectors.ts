// PUBLIC MODULES
import { createSelector } from "@reduxjs/toolkit";

// LOCAL FILES
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
// Interfaces & Types
import type { RootState } from "features/redux/store";
// Redux
import { buildingAdapter } from "features/building/buildingSlice";
import { selectVillagerAssignments } from "features/villager/selectors";
// Utility functions
import {
  getBuildingImage,
  getBuildingDescription,
} from "features/building/utils";

export const {
  selectAll: selectBuildings,
  selectById: selectBuildingById,
  selectIds: selectBuildingIds,
} = buildingAdapter.getSelectors<RootState>(
  (state) => state.building,
);

export const selectBuildingTier = createSelector(
  [selectBuildingById],
  (building) => building?.tier,
);

export const selectBuildingImage = createSelector(
  [(_, buildingId: number) => buildingId, selectBuildingTier],
  (buildingId, tier) =>
    getBuildingImage(BUILDING_ID_TO_BUILDING[buildingId], tier),
);

export const selectBuildingDescription = createSelector(
  [(_, buildingId: number) => buildingId, selectBuildingTier],
  (buildingId, tier) =>
    getBuildingDescription(BUILDING_ID_TO_BUILDING[buildingId], tier),
);

export const selectVillagerIdsAssignedToBuilding = createSelector(
  [selectVillagerAssignments, (_, buildingId: number) => buildingId],
  (assignments, buildingId) =>
    assignments
      .filter((assignment) => assignment.buildingId === buildingId)
      .map((assignment) => assignment.villagerId),
);

export const selectCanAssignVillagerToBuilding = createSelector(
  [selectBuildingById, selectVillagerIdsAssignedToBuilding],
  (building, assignedVillagerIds) => {
    if (!building) {
      return false;
    }

    return (
      assignedVillagerIds.length + 1 <=
      BUILDING_ID_TO_BUILDING[building.id].maxAssignedVillagers
    );
  },
);
