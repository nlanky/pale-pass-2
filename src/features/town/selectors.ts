// PUBLIC MODULES
import { createSelector } from "@reduxjs/toolkit";

// LOCAL FILES
// Constants
import { VILLAGER_ID_TO_VILLAGER } from "features/villager/constants";
// Interfaces & Types
import type { RootState } from "features/redux/store";
// Utility functions
import { addItemToArray } from "features/common/utils";

// BUILDINGS
export const selectTownBuildingIdToBuilding = (state: RootState) =>
  state.town.buildingIdToBuilding;
export const selectTownBuildings = createSelector(
  [selectTownBuildingIdToBuilding],
  (buildingIdToBuilding) => Object.values(buildingIdToBuilding),
);
export const selectTownBuildingIds = createSelector(
  [selectTownBuildingIdToBuilding],
  (buildingIdToBuilding) =>
    Object.keys(buildingIdToBuilding).map((buildingId) =>
      Number(buildingId),
    ),
);
export const selectTownBuilding = createSelector(
  [
    selectTownBuildingIdToBuilding,
    (_, buildingId: number) => buildingId,
  ],
  (buildingIdToBuilding, buildingId) =>
    buildingIdToBuilding[buildingId],
);

// VILLAGERS
export const selectTownVillagerIdToVillager = (state: RootState) =>
  state.town.villagerIdToVillager;
export const selectTownVillagers = createSelector(
  [selectTownVillagerIdToVillager],
  (villagerIdToVillager) => Object.values(villagerIdToVillager),
);
export const selectTownVillagerIds = createSelector(
  [selectTownVillagerIdToVillager],
  (villagerIdToVillager) =>
    Object.keys(villagerIdToVillager).map((villagerId) =>
      Number(villagerId),
    ),
);
// TODO: Either remove this in favour of different system or add checks
export const selectVillagersAvailableToRecruit = createSelector(
  [selectTownVillagerIds],
  (townVillagerIds) =>
    Object.values(VILLAGER_ID_TO_VILLAGER).filter(
      (villager) => !townVillagerIds.includes(villager.id),
    ),
);
export const selectUnassignedVillagers = createSelector(
  [selectTownVillagers],
  (townVillagers) =>
    townVillagers.filter(
      (townVillager) => townVillager.assignedBuildingId === null,
    ),
);
export const selectAssignedVillagers = createSelector(
  [selectTownVillagers],
  (townVillagers) =>
    townVillagers.filter(
      (townVillager) => townVillager.assignedBuildingId !== null,
    ),
);
export const selectBuildingIdToAssignedVillagerIds = createSelector(
  [selectAssignedVillagers],
  (townVillagers) =>
    townVillagers.reduce<Record<number, number[]>>(
      (buildingIdToVillagerIds, townVillager) => {
        const { id, assignedBuildingId } = townVillager;
        if (!assignedBuildingId) {
          return buildingIdToVillagerIds;
        }

        if (!buildingIdToVillagerIds[assignedBuildingId]) {
          buildingIdToVillagerIds[assignedBuildingId] = [id];
        } else {
          buildingIdToVillagerIds[assignedBuildingId] =
            addItemToArray(
              buildingIdToVillagerIds[assignedBuildingId],
              id,
            );
        }

        return buildingIdToVillagerIds;
      },
      {},
    ),
);
