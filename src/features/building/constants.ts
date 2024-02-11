// LOCAL FILES
// Assets
import {
  building001ExteriorImage,
  building001InteriorImage,
  building002ExteriorImage,
  building002InteriorImage,
} from "assets/building";
// Interfaces & Types
import type { Building } from "features/building/types";

export const BUILDING_ID_TO_BUILDING: Record<number, Building> = {
  1: {
    id: 1,
    name: "Housing",
    descriptions: [
      {
        tier: 1,
        text: "A few days of labour and you stand before small, but cosy and warm cottages. Much better than the tents and shelters people were using! People are sure to work harder with a good roof over their heads.",
      },
    ],
    images: [
      {
        tier: 1,
        exterior: building001ExteriorImage,
        interior: building001InteriorImage,
      },
    ],
    position: { x: 0.37, y: 0.7 },
    maxTier: 5,
    maxAssignedVillagers: 5,
    effects: ["POPULATION"],
  },
  2: {
    id: 2,
    name: "Sawmill",
    descriptions: [
      {
        tier: 1,
        text: "A veritable forest of industry surrounds you as you stand amid the roaring of sawblades, processing felled trees deftly and quickly. And importantly, not doing so inside the town any longer!",
      },
    ],
    images: [
      {
        tier: 1,
        exterior: building002ExteriorImage,
        interior: building002InteriorImage,
      },
    ],
    position: { x: 0.92, y: 0.77 },
    maxTier: 5,
    maxAssignedVillagers: 5,
    effects: ["COLLECT_WOOD"],
  },
};
