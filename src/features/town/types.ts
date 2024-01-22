export interface TownBuilding {
  id: number;
  tier: number;
}

export interface TownVillager {
  id: number;
  assignedBuildingId: number | null;
}
