// PUBLIC MODULES
import {
  Backpack as GathererIcon,
  Carpenter as BuilderIcon,
  Hiking as ScoutIcon,
  LocalHospital as HealerIcon,
  MilitaryTech as SoldierIcon,
  PersonSearch as SpyIcon,
} from "@mui/icons-material";
import type { SxProps } from "@mui/material";

// LOCAL FILES
// Interfaces & Types
import type {
  VillagerNew,
  VillagerSpecialty,
  VillagerStats,
} from "features/villager/types";

export class Villager {
  /** @type {number} Unique identifier for villager */
  id: number;
  /** @type {string} Name of villager */
  name: string;
  /** @type {string} Occupation of villager (flavour text) */
  occupation: string;
  /** @type {string} Description of villager and what they do */
  description: string;
  /** @type {VillagerSpecialty} Specialty dictates starting/max stats */
  specialty: VillagerSpecialty;
  /** @type {string} Path to image of villager */
  image: string;

  constructor(villager: VillagerNew) {
    const { id, name, occupation, description, specialty, image } =
      villager;
    this.id = id;
    this.name = name;
    this.occupation = occupation;
    this.description = description;
    this.specialty = specialty;
    this.image = image;
  }

  get startingStats(): VillagerStats {
    const stats: VillagerStats = {
      Building: Math.ceil(Math.random() * 10),
      Combat: Math.ceil(Math.random() * 10),
      Gathering: Math.ceil(Math.random() * 10),
      Healing: Math.ceil(Math.random() * 10),
      Scouting: Math.ceil(Math.random() * 10),
      Spycraft: Math.ceil(Math.random() * 10),
    };

    // Villagers start with proficiency in the stat matching their specialty
    switch (this.specialty) {
      case "Builder":
        stats.Building += 30;
        break;
      case "Gatherer":
        stats.Gathering += 30;
        break;
      case "Healer":
        stats.Healing += 30;
        break;
      case "Scout":
        stats.Scouting += 30;
        break;
      case "Soldier":
        stats.Combat += 30;
        break;
      case "Spy":
        stats.Spycraft += 30;
        break;
      default:
        break;
    }

    return stats;
  }

  get title(): string {
    return `${this.name} the ${this.occupation}`;
  }

  get specialtyIcon(): JSX.Element {
    const iconSx: SxProps = {
      p: 0.5,
      bgcolor: "containerBorder.main",
      color: "white",
      borderRadius: "50%",
      fontSize: "4rem",
    };

    switch (this.specialty) {
      case "Builder":
        return <BuilderIcon sx={iconSx} />;
      case "Gatherer":
        return <GathererIcon sx={iconSx} />;
      case "Healer":
        return <HealerIcon sx={iconSx} />;
      case "Scout":
        return <ScoutIcon sx={iconSx} />;
      case "Soldier":
        return <SoldierIcon sx={iconSx} />;
      case "Spy":
        return <SpyIcon sx={iconSx} />;
      default:
        return <></>;
    }
  }
}
