// LOCAL FILES
// Classes
import type { Villager } from "features/villager/classes";
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
import {
  MAX_VILLAGER_STAT,
  MAX_VILLAGER_STAT_WITHOUT_SPECIALTY,
  VILLAGER_ID_TO_VILLAGER,
} from "features/villager/constants";
// Interfaces & Types
import type { TownVillager } from "features/villager/types";

export const getVillagerToAttract = (
  villagerIds: number[],
  buildingNames: string[],
  villagerNames: string[],
): Villager | null => {
  const villagerAttractPool = Object.values(
    VILLAGER_ID_TO_VILLAGER,
  ).filter((villager) => {
    // Villager in town
    if (villagerIds.includes(villager.id)) {
      return false;
    }

    // Villager requirements not met
    if (!villager.canAttract(buildingNames, villagerNames)) {
      return false;
    }

    return true;
  });
  if (villagerAttractPool.length === 0) {
    return null;
  }

  return villagerAttractPool[
    Math.floor(Math.random() * villagerAttractPool.length)
  ];
};

export const trainVillager = (
  townVillager: TownVillager,
  assignedBuildingId: number,
): TownVillager => {
  const villager = VILLAGER_ID_TO_VILLAGER[townVillager.id];
  const nextVillager = { ...townVillager };
  const nextVillagerStats = {
    ...nextVillager.stats,
  };
  BUILDING_ID_TO_BUILDING[assignedBuildingId].effects.forEach(
    (effect) => {
      switch (effect) {
        case "TRAIN_COMBAT":
          const nextCombatStat = nextVillagerStats.Combat + 1;
          if (
            nextCombatStat > MAX_VILLAGER_STAT ||
            (villager.specialty !== "Soldier" &&
              nextCombatStat > MAX_VILLAGER_STAT_WITHOUT_SPECIALTY)
          ) {
            break;
          }

          nextVillagerStats.Combat += 1;
          break;
        case "TRAIN_GATHERING":
          const nextGatheringStat = nextVillagerStats.Gathering + 1;
          if (
            nextGatheringStat > MAX_VILLAGER_STAT ||
            (villager.specialty !== "Gatherer" &&
              nextGatheringStat > MAX_VILLAGER_STAT_WITHOUT_SPECIALTY)
          ) {
            break;
          }

          nextVillagerStats.Gathering += 1;
          break;
        case "TRAIN_HEALING":
          const nextHealingStat = nextVillagerStats.Healing + 1;
          if (
            nextHealingStat > MAX_VILLAGER_STAT ||
            (villager.specialty !== "Healer" &&
              nextHealingStat > MAX_VILLAGER_STAT_WITHOUT_SPECIALTY)
          ) {
            break;
          }

          nextVillagerStats.Healing += 1;
          break;
        case "TRAIN_SCOUTING":
          const nextScoutingStat = nextVillagerStats.Scouting + 1;
          if (
            nextScoutingStat > MAX_VILLAGER_STAT ||
            (villager.specialty !== "Scout" &&
              nextScoutingStat > MAX_VILLAGER_STAT_WITHOUT_SPECIALTY)
          ) {
            break;
          }

          nextVillagerStats.Scouting += 1;
          break;
        case "TRAIN_SPYCRAFT":
          const nextSpycraftStat = nextVillagerStats.Spycraft + 1;
          if (
            nextSpycraftStat > MAX_VILLAGER_STAT ||
            (villager.specialty !== "Spy" &&
              nextSpycraftStat > MAX_VILLAGER_STAT_WITHOUT_SPECIALTY)
          ) {
            break;
          }

          nextVillagerStats.Spycraft += 1;
          break;
        default:
          break;
      }
    },
  );
  return { ...nextVillager, stats: nextVillagerStats };
};
