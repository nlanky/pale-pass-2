// LOCAL FILES
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
// Interfaces & Types
import type { TownBuilding } from "features/building/types";
import type { Resource, Resources } from "features/resource/types";
import type { VillagerBuildingAssignment } from "features/villager/types";

/**
 * Simple function to merge two resource objects together into a new object.
 */
export const mergeResources = (
  resources1: Resources,
  resources2: Resources,
): Resources => {
  const mergedResources = { ...resources1 };
  (Object.keys(resources2) as Resource[]).forEach((resource) => {
    mergedResources[resource] += resources2[resource];
  });
  return mergedResources;
};

/**
 * Calculates the resources per turn a building should produce based on
 * the assigned villagers.
 */
export const getBuildingResourcesPerTurn = (
  townBuilding: TownBuilding,
  assignments: VillagerBuildingAssignment[],
): Resources => {
  const { id } = townBuilding;
  const building = BUILDING_ID_TO_BUILDING[id];
  const resources: Resources = {
    Wood: 0,
    Stone: 0,
    Iron: 0,
    Steel: 0,
    Mythril: 0,
    Amethyst: 0,
  };
  const assignedVillagers = assignments.reduce(
    (count, assignment) => {
      if (assignment.buildingId === id) {
        count++;
      }
      return count;
    },
    0,
  );
  building.effects.forEach((effect) => {
    switch (effect) {
      case "COLLECT_WOOD":
        resources.Wood += assignedVillagers * 1;
        break;
      case "COLLECT_STONE":
        resources.Stone += assignedVillagers * 1;
        break;
      case "COLLECT_IRON":
        resources.Iron += assignedVillagers * 1;
        break;
      case "COLLECT_STEEL":
        resources.Steel += assignedVillagers * 1;
        break;
      case "COLLECT_MYTHRIL":
        resources.Mythril += assignedVillagers * 1;
        break;
      case "COLLECT_AMETHYST":
        resources.Amethyst += assignedVillagers * 1;
        break;
    }
  });
  return resources;
};
