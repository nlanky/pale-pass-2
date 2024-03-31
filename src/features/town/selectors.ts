// PUBLIC MODULES
import { createSelector } from "@reduxjs/toolkit";

// LOCAL FILES
// Constants
import {
  BUILDING_ID_TO_BUILDING,
  POPULATION_PER_BUILDING_TIER,
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
