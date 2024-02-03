// LOCAL FILES
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
// Interfaces & Types
import type { Resources } from "features/resource/types";
import type { TownBuilding, TownVillager } from "features/town/types";

/**
 * Calculates the resources per turn a building should produce based on
 * the assigned villagers.
 */
export const getTownBuildingResourcesPerTurn = (
  townBuilding: TownBuilding,
  townVillagers: TownVillager[],
): Resources => {
  const { id } = townBuilding;
  const resources: Resources = {
    Wood: 0,
    Stone: 0,
    Iron: 0,
    Steel: 0,
    Mythril: 0,
    Amethyst: 0,
  };
  const building = BUILDING_ID_TO_BUILDING[id];
  const assignedVillagers = townVillagers.reduce(
    (count, townVillager) => {
      if (townVillager.assignedBuildingId === id) {
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
