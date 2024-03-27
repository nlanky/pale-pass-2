// PUBLIC MODULES
import { createSelector } from "@reduxjs/toolkit";

// LOCAL FILES
// Constants
import {
  HOUSING_BUILDING_ID,
  POPULATION_PER_HOUSING_TIER,
} from "features/building/constants";
// Redux
import { selectBuildings } from "features/building/selectors";
import { selectVillagerIds } from "features/villager/selectors";

export const selectCurrentPopulation = createSelector(
  [selectVillagerIds],
  (villagerIds) => villagerIds.length,
);

export const selectMaxPopulation = createSelector(
  [selectBuildings],
  (buildings) => {
    const housing = buildings.find(
      (building) => building.id === HOUSING_BUILDING_ID,
    );
    return (housing?.tier || 0) * POPULATION_PER_HOUSING_TIER;
  },
);
