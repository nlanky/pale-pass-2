// LOCAL FILES
// Assets
import {
  amethystImage,
  ironImage,
  mythrilImage,
  steelImage,
  stoneImage,
  woodImage,
} from "assets/resource";
// Interfaces & Types
import type { Resource, Resources } from "features/resources/types";

export const NO_RESOURCES: Resources = {
  Wood: 0,
  Stone: 0,
  Iron: 0,
  Steel: 0,
  Mythril: 0,
  Amethyst: 0,
};

export const RESOURCE_TO_IMAGE: Record<Resource, string> = {
  Wood: woodImage,
  Stone: stoneImage,
  Iron: ironImage,
  Steel: steelImage,
  Mythril: mythrilImage,
  Amethyst: amethystImage,
};
