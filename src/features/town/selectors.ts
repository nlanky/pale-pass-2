// PUBLIC MODULES
import { createSelector } from "@reduxjs/toolkit";

// LOCAL FILES
// Constants
import { VILLAGER_ID_TO_VILLAGER } from "features/villager/constants";
// Interfaces & Types
import type { RootState } from "features/redux/store";
import type { Resources } from "features/resource/types";
// Utility functions
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
import {
  getBuildingDescription,
  getBuildingImage,
} from "features/building/utils";
import { mergeResources } from "features/resource/utils";
import { getTownBuildingResourcesPerTurn } from "features/town/utils";

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
export const selectTownBuildingTier = createSelector(
  [selectTownBuilding],
  (townBuilding) => townBuilding?.tier,
);
export const selectTownBuildingImage = createSelector(
  [(_, buildingId: number) => buildingId, selectTownBuildingTier],
  (buildingId, tier) =>
    getBuildingImage(BUILDING_ID_TO_BUILDING[buildingId], tier),
);
export const selectTownBuildingDescription = createSelector(
  [(_, buildingId: number) => buildingId, selectTownBuildingTier],
  (buildingId, tier) =>
    getBuildingDescription(BUILDING_ID_TO_BUILDING[buildingId], tier),
);

// RESOURCES
export const selectTownResources = (state: RootState) =>
  state.town.resources;

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
export const selectUnassignedVillagerIds = createSelector(
  [selectTownVillagers],
  (townVillagers) =>
    townVillagers
      .filter(
        (townVillager) => townVillager.assignedBuildingId === null,
      )
      .map((townVillager) => townVillager.id),
);
export const selectVillagerIdsAssignedToBuilding = createSelector(
  [selectTownVillagers, (_, buildingId: number) => buildingId],
  (townVillager, buildingId) =>
    townVillager
      .filter(
        (villager) => villager.assignedBuildingId === buildingId,
      )
      .map((villager) => villager.id),
);

// COMBINED
export const selectTownResourcesPerTurn = createSelector(
  [selectTownBuildings, selectTownVillagers],
  (townBuildings, townVillagers) => {
    let resources: Resources = {
      Wood: 0,
      Stone: 0,
      Iron: 0,
      Steel: 0,
      Mythril: 0,
      Amethyst: 0,
    };
    townBuildings.forEach((townBuilding) => {
      resources = mergeResources(
        resources,
        getTownBuildingResourcesPerTurn(townBuilding, townVillagers),
      );
    });
    return resources;
  },
);

export const selectTownBuildingResourcesPerTurn = createSelector(
  [selectTownBuilding, selectTownVillagers],
  (townBuilding, townVillagers) =>
    getTownBuildingResourcesPerTurn(townBuilding, townVillagers),
);
