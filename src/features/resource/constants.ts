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

export const RESOURCES = [
  "Wood",
  "Stone",
  "Iron",
  "Steel",
  "Mythril",
  "Amethyst",
] as const;

export type Resource = (typeof RESOURCES)[number];

export const NO_RESOURCES: Record<Resource, number> = {
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

/** How much 1 of the resource is worth compared to the other resources */
export const RESOURCE_TO_TRADE_RATES: Record<
  Resource,
  Record<Resource, number>
> = {
  Wood: {
    Wood: 1,
    Stone: 1,
    Iron: 1 / 20,
    Steel: 1 / 30,
    Mythril: 1 / 40,
    Amethyst: 1 / 50,
  },
  Stone: {
    Wood: 1,
    Stone: 1,
    Iron: 1 / 20,
    Steel: 1 / 30,
    Mythril: 1 / 40,
    Amethyst: 1 / 50,
  },
  Iron: {
    Wood: 20,
    Stone: 20,
    Iron: 1,
    Steel: 2 / 3,
    Mythril: 1 / 2,
    Amethyst: 2 / 5,
  },
  Steel: {
    Wood: 30,
    Stone: 30,
    Iron: 20,
    Steel: 1,
    Mythril: 3 / 4,
    Amethyst: 3 / 5,
  },
  Mythril: {
    Wood: 40,
    Stone: 40,
    Iron: 30,
    Steel: 20,
    Mythril: 1,
    Amethyst: 4 / 5,
  },
  Amethyst: {
    Wood: 50,
    Stone: 50,
    Iron: 40,
    Steel: 30,
    Mythril: 20,
    Amethyst: 1,
  },
};
