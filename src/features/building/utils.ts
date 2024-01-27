// LOCAL FILES
// Interfaces & Types
import type {
  Building,
  BuildingDescription,
  BuildingImage,
} from "features/building/types";

export const getBuildingDescription = (
  building: Building,
  tier: number,
): BuildingDescription | undefined =>
  building.descriptions.find(
    (description) => description.tier === tier,
  );

export const getBuildingImage = (
  building: Building,
  tier: number,
): BuildingImage | undefined =>
  building.images.find((image) => image.tier === tier);

export const canBuildingUpgrade = (
  building: Building,
  tier: number,
): boolean => tier < building.maxTier;
