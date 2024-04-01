// PUBLIC MODULES
import { createSelector } from "@reduxjs/toolkit";

// LOCAL FILES
// Constants
import { VILLAGER_ID_TO_VILLAGER } from "features/villager/constants";
// Interfaces & Types
import type { RootState } from "features/redux/store";
// Redux
import { villagerAdapter } from "features/villager/villagerSlice";
import { selectAssignedVillagerIds } from "features/villagerBuilding/selectors";

export const {
  selectAll: selectVillagers,
  selectById: selectVillagerById,
  selectIds: selectVillagerIds,
  selectTotal: selectCurrentPopulation,
} = villagerAdapter.getSelectors<RootState>(
  (state) => state.villager,
);

export const selectLastAttractTurn = (state: RootState) =>
  state.villager.lastAttractTurn;

export const selectVillagerNames = createSelector(
  [selectVillagers],
  (villagers) =>
    villagers.map(
      (villager) => VILLAGER_ID_TO_VILLAGER[villager.id].name,
    ),
);

export const selectUnassignedVillagerIds = createSelector(
  [selectVillagerIds, selectAssignedVillagerIds],
  (villagerIds, assignedVillagerIds) =>
    villagerIds.filter(
      (villagerId) => !assignedVillagerIds.includes(villagerId),
    ),
);
