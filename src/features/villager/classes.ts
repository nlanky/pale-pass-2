// LOCAL FILES
// Interfaces & Types
import type { VillagerNew } from "features/villager/types";

export class Villager {
  /** @type {number} Unique identifier for villager */
  id: number;
  /** @type {string} Name of building */
  name: string;
  /** @type {string} Description of villager and what they do */
  description: string;
  /** @type {string} Path to image of villager */
  image: string;

  constructor({ id, name, description, image }: VillagerNew) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
  }
}
