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
} = villagerAdapter.getSelectors<RootState>(
  (state) => state.villager,
);

// TODO: Remove this in favour of different system
export const selectVillagersAvailableToRecruit = createSelector(
  [selectVillagerIds],
  (villagerIds) =>
    Object.values(VILLAGER_ID_TO_VILLAGER).filter(
      (villager) => !villagerIds.includes(villager.id),
    ),
);

export const selectUnassignedVillagerIds = createSelector(
  [selectVillagerIds, selectAssignedVillagerIds],
  (villagerIds, assignedVillagerIds) =>
    villagerIds.filter(
      (villagerId) => !assignedVillagerIds.includes(villagerId),
    ),
);
