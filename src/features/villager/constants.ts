// LOCAL FILES
// Assets
import { villager1Image } from "assets/villager";
// Classes
import { Villager } from "features/villager/classes";

export const VILLAGER_ID_TO_VILLAGER: Record<number, Villager> = {
  1: new Villager({
    id: 1,
    name: "Tom",
    description:
      "A wizard, adorned in flowing robes, possesses an ancient visage. With eyes ablaze with arcane knowledge, they command the forces of magic, casting spells and weaving enchantments with a mere gesture. Their mastery lies in their wisdom and the ability to shape reality itself.",
    image: villager1Image,
  }),
};
