// PUBLIC MODULES
import { createSelector } from "@reduxjs/toolkit";

// LOCAL FILES
// Constants
import {
  BUILDING_ID_TO_BUILDING,
  POPULATION_PER_BUILDING_TIER,
} from "features/building/constants";
// Interfaces & Types
import type { RootState } from "features/redux/store";
// Redux
import { buildingAdapter } from "features/building/buildingSlice";
import { selectVillagerAssignments } from "features/villagerBuilding/selectors";

const selectBuildingId = (_: RootState, id: number) => id;

export const {
  selectAll: selectBuildings,
  selectById: selectBuildingById,
  selectIds: selectBuildingIds,
} = buildingAdapter.getSelectors<RootState>(
  (state) => state.building,
);

export const selectBuildingNames = createSelector(
  [selectBuildings],
  (buildings) =>
    buildings.map(
      (building) => BUILDING_ID_TO_BUILDING[building.id].name,
    ),
);

export const selectBuildingTier = createSelector(
  [selectBuildingById],
  (building) => building?.tier,
);

export const selectBuildingImage = createSelector(
  [selectBuildingId, selectBuildingTier],
  (buildingId, tier) =>
    BUILDING_ID_TO_BUILDING[buildingId].getImage(tier),
);

export const selectBuildingDescription = createSelector(
  [selectBuildingId, selectBuildingTier],
  (buildingId, tier) =>
    BUILDING_ID_TO_BUILDING[buildingId].getDescription(tier),
);

export const selectVillagerIdsAssignedToBuilding = createSelector(
  [selectVillagerAssignments, selectBuildingId],
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
      assignedVillagerIds.length + 1 <= building.tier &&
      BUILDING_ID_TO_BUILDING[building.id].canAssignVillagers
    );
  },
);

export const selectMaxPopulation = createSelector(
  [selectBuildings],
  (buildings) => {
    const populationBuildings = buildings.filter((building) =>
      BUILDING_ID_TO_BUILDING[building.id].effects.includes(
        "INCREASE_POPULATION",
      ),
    );
    let maxPopulation = 0;
    populationBuildings.forEach((building) => {
      maxPopulation += building.tier * POPULATION_PER_BUILDING_TIER;
    });
    return maxPopulation;
  },
);
