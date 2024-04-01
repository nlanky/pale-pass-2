// LOCAL FILES
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
import {
  NO_RESOURCES,
  type Resource,
  RESOURCE_TO_TRADE_RATES,
  type Resources,
} from "features/resource/constants";
// Interfaces & Types
import type { TownBuilding } from "features/building/types";
import type { VillagerBuildingAssignment } from "features/villager/types";

/**
 * Simple function to create a full Resources object from a partial definition.
 */
export const createFullResourcesObject = (
  resources: Partial<Resources>,
): Resources => Object.assign({ ...NO_RESOURCES }, resources);

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
      // TODO: Better trained villagers should gather more resources
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

/**
 * Finds the minimum quantity of a resource that can be traded to ensure
 * the resource the player receives is a whole number.
 */
export const getMinTradeQuantity = (
  fromResource: Resource,
  toResource: Resource,
): number => {
  const tradeRate = RESOURCE_TO_TRADE_RATES[fromResource][toResource];
  let quantity = 1;
  while (quantity * tradeRate !== Math.round(quantity * tradeRate)) {
    quantity++;
  }

  return quantity;
};

/**
 * Calculates max quantity of a resource player can trade for based on their
 * current resources. Takes into account minimum quantity required for trade.
 */
export const getMaxTradeQuantity = (
  resources: Resources,
  fromResource: Resource,
  toResource: Resource,
): number => {
  const resourceAmount = resources[fromResource];
  const minQuantity = getMinTradeQuantity(fromResource, toResource);
  const maxNumberOfTrades = Math.floor(resourceAmount / minQuantity);
  return maxNumberOfTrades * minQuantity;
};

export const getNextTurnResources = (
  currentResources: Resources,
  buildings: TownBuilding[],
  assignments: VillagerBuildingAssignment[],
): Resources => {
  let nextResources = { ...currentResources };
  buildings.forEach((building) => {
    nextResources = mergeResources(
      nextResources,
      getBuildingResourcesPerTurn(building, assignments),
    );
  });
  return nextResources;
};
