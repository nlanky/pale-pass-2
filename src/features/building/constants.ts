// LOCAL FILES
// Assets
import {
  building001ExteriorImage,
  building001InteriorImage,
  building002ExteriorImage,
  building002InteriorImage,
  building006ExteriorImage,
  building006InteriorImage,
  building007ExteriorImage,
  building007InteriorImage,
  building008ExteriorImage,
  building008InteriorImage,
  building010ExteriorImage,
  building010InteriorImage,
  building011ExteriorImage,
  building011InteriorImage,
  building012ExteriorImage,
  building012InteriorImage,
  building013ExteriorImage,
  building013InteriorImage,
} from "assets/building";
// Classes
import { Building } from "features/building/classes";
// Interfaces & Types
import type { TownBuilding } from "features/building/types";

export const POPULATION_PER_BUILDING_TIER = 10;

export const RESOURCE_STORAGE_PER_BUILDING_TIER = 100;

export const BUILDING_OVERLAY_AVATAR_SIZE = 32;

// Fits three villager avatars + border
export const BUILDING_OVERLAY_WIDTH =
  BUILDING_OVERLAY_AVATAR_SIZE * 3 + 2 * 3;

// Fits two villager avatars + border
export const BUILDING_OVERLAY_HEIGHT =
  BUILDING_OVERLAY_AVATAR_SIZE * 2 + 2 * 3;

export const BUILDING_ID_TO_BUILDING: Record<number, Building> = {
  1: new Building({
    id: 1,
    name: "Housing",
    descriptions: [
      {
        tier: 1,
        text: "A few days of labour and you stand before small, but cosy and warm cottages. Much better than the tents and shelters people were using! People are sure to work harder with a good roof over their heads.",
      },
      {
        tier: 2,
        text: "A few days of labour and you stand before small, but cosy and warm cottages. Much better than the tents and shelters people were using! People are sure to work harder with a good roof over their heads.",
      },
      {
        tier: 3,
        text: "A few days of labour and you stand before small, but cosy and warm cottages. Much better than the tents and shelters people were using! People are sure to work harder with a good roof over their heads.",
      },
      {
        tier: 4,
        text: "A few days of labour and you stand before small, but cosy and warm cottages. Much better than the tents and shelters people were using! People are sure to work harder with a good roof over their heads.",
      },
      {
        tier: 5,
        text: "A few days of labour and you stand before small, but cosy and warm cottages. Much better than the tents and shelters people were using! People are sure to work harder with a good roof over their heads.",
      },
    ],
    images: [
      {
        tier: 1,
        exterior: building001ExteriorImage,
        interior: building001InteriorImage,
      },
      {
        tier: 2,
        exterior: building001ExteriorImage,
        interior: building001InteriorImage,
      },
      {
        tier: 3,
        exterior: building001ExteriorImage,
        interior: building001InteriorImage,
      },
      {
        tier: 4,
        exterior: building001ExteriorImage,
        interior: building001InteriorImage,
      },
      {
        tier: 5,
        exterior: building001ExteriorImage,
        interior: building001InteriorImage,
      },
    ],
    position: { x: 0.32, y: 0.65 },
    maxTier: 5,
    canAssignVillagers: false,
    effects: ["INCREASE_POPULATION"],
  }),
  2: new Building({
    id: 2,
    name: "Sawmill",
    descriptions: [
      {
        tier: 1,
        text: "A veritable forest of industry surrounds you as you stand amid the roaring of sawblades, processing felled trees deftly and quickly. And importantly, not doing so inside the town any longer!",
      },
      {
        tier: 2,
        text: "A veritable forest of industry surrounds you as you stand amid the roaring of sawblades, processing felled trees deftly and quickly. And importantly, not doing so inside the town any longer!",
      },
      {
        tier: 3,
        text: "A veritable forest of industry surrounds you as you stand amid the roaring of sawblades, processing felled trees deftly and quickly. And importantly, not doing so inside the town any longer!",
      },
      {
        tier: 4,
        text: "A veritable forest of industry surrounds you as you stand amid the roaring of sawblades, processing felled trees deftly and quickly. And importantly, not doing so inside the town any longer!",
      },
      {
        tier: 5,
        text: "A veritable forest of industry surrounds you as you stand amid the roaring of sawblades, processing felled trees deftly and quickly. And importantly, not doing so inside the town any longer!",
      },
    ],
    images: [
      {
        tier: 1,
        exterior: building002ExteriorImage,
        interior: building002InteriorImage,
      },
      {
        tier: 2,
        exterior: building002ExteriorImage,
        interior: building002InteriorImage,
      },
      {
        tier: 3,
        exterior: building002ExteriorImage,
        interior: building002InteriorImage,
      },
      {
        tier: 4,
        exterior: building002ExteriorImage,
        interior: building002InteriorImage,
      },
      {
        tier: 5,
        exterior: building002ExteriorImage,
        interior: building002InteriorImage,
      },
    ],
    position: { x: 0.87, y: 0.72 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["COLLECT_WOOD", "TRAIN_GATHERING"],
  }),
  3: new Building({
    id: 3,
    name: "Stone Quarry",
    descriptions: [],
    images: [],
    position: { x: 0.01, y: 0.7 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["COLLECT_STONE", "TRAIN_GATHERING"],
  }),
  4: new Building({
    id: 4,
    name: "Iron Mine",
    descriptions: [],
    images: [],
    position: { x: 0.38, y: 0.84 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["COLLECT_IRON", "TRAIN_GATHERING"],
  }),
  5: new Building({
    id: 5,
    name: "Steel Foundry",
    descriptions: [],
    images: [],
    position: { x: 0.27, y: 0.5 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["COLLECT_STEEL", "TRAIN_GATHERING"],
  }),
  6: new Building({
    id: 6,
    name: "Alchemist",
    descriptions: [
      {
        tier: 1,
        text: "Nestled within the enigmatic quarter of the city, the newly founded alchemist's sanctum emanates an aura of mystery and discovery. Its ornate furnishings and shelves laden with rare ingredients stand as a testament to the tireless pursuit of knowledge by the city's alchemists. The sanctum hums with the energy of transformative experiments and the soft glow of alchemical apparatus. Seekers of wisdom and novices alike find themselves drawn to its allure, engaging in discussions that bridge the gap between science and magic. The alchemist's sanctum has seamlessly woven itself into the fabric of the city's consciousness, an emblem of exploration and innovation, ensuring a boundless future for all who dare to venture into the realm of the unknown.",
      },
      {
        tier: 2,
        text: "Nestled within the enigmatic quarter of the city, the newly founded alchemist's sanctum emanates an aura of mystery and discovery. Its ornate furnishings and shelves laden with rare ingredients stand as a testament to the tireless pursuit of knowledge by the city's alchemists. The sanctum hums with the energy of transformative experiments and the soft glow of alchemical apparatus. Seekers of wisdom and novices alike find themselves drawn to its allure, engaging in discussions that bridge the gap between science and magic. The alchemist's sanctum has seamlessly woven itself into the fabric of the city's consciousness, an emblem of exploration and innovation, ensuring a boundless future for all who dare to venture into the realm of the unknown.",
      },
      {
        tier: 3,
        text: "Nestled within the enigmatic quarter of the city, the newly founded alchemist's sanctum emanates an aura of mystery and discovery. Its ornate furnishings and shelves laden with rare ingredients stand as a testament to the tireless pursuit of knowledge by the city's alchemists. The sanctum hums with the energy of transformative experiments and the soft glow of alchemical apparatus. Seekers of wisdom and novices alike find themselves drawn to its allure, engaging in discussions that bridge the gap between science and magic. The alchemist's sanctum has seamlessly woven itself into the fabric of the city's consciousness, an emblem of exploration and innovation, ensuring a boundless future for all who dare to venture into the realm of the unknown.",
      },
      {
        tier: 4,
        text: "Nestled within the enigmatic quarter of the city, the newly founded alchemist's sanctum emanates an aura of mystery and discovery. Its ornate furnishings and shelves laden with rare ingredients stand as a testament to the tireless pursuit of knowledge by the city's alchemists. The sanctum hums with the energy of transformative experiments and the soft glow of alchemical apparatus. Seekers of wisdom and novices alike find themselves drawn to its allure, engaging in discussions that bridge the gap between science and magic. The alchemist's sanctum has seamlessly woven itself into the fabric of the city's consciousness, an emblem of exploration and innovation, ensuring a boundless future for all who dare to venture into the realm of the unknown.",
      },
      {
        tier: 5,
        text: "Nestled within the enigmatic quarter of the city, the newly founded alchemist's sanctum emanates an aura of mystery and discovery. Its ornate furnishings and shelves laden with rare ingredients stand as a testament to the tireless pursuit of knowledge by the city's alchemists. The sanctum hums with the energy of transformative experiments and the soft glow of alchemical apparatus. Seekers of wisdom and novices alike find themselves drawn to its allure, engaging in discussions that bridge the gap between science and magic. The alchemist's sanctum has seamlessly woven itself into the fabric of the city's consciousness, an emblem of exploration and innovation, ensuring a boundless future for all who dare to venture into the realm of the unknown.",
      },
    ],
    images: [
      {
        tier: 1,
        exterior: building006ExteriorImage,
        interior: building006InteriorImage,
      },
      {
        tier: 2,
        exterior: building006ExteriorImage,
        interior: building006InteriorImage,
      },
      {
        tier: 3,
        exterior: building006ExteriorImage,
        interior: building006InteriorImage,
      },
      {
        tier: 4,
        exterior: building006ExteriorImage,
        interior: building006InteriorImage,
      },
      {
        tier: 5,
        exterior: building006ExteriorImage,
        interior: building006InteriorImage,
      },
    ],
    position: { x: 0.87, y: 0.5 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["COLLECT_MYTHRIL", "TRAIN_GATHERING"],
  }),
  7: new Building({
    id: 7,
    name: "Wizard Tower",
    descriptions: [
      {
        tier: 1,
        text: "Rising elegantly against the horizon, the newly constructed wizard tower exudes an aura of enchantment and sagacity. Its tall spires and windows adorned with sigils stand as a tribute to the dedication and mastery of the realm's most skilled spellcasters. The wizard tower resonates with the echoes of ancient spells and the hum of arcane devices as magic is harnessed for both study and exploration. Wizards, scholars, and those intrigued by the mysteries of magic gather within its chambers, exchanging theories, casting spells, and delving into the secrets of the unseen realms. The wizard tower has seamlessly woven itself into the fabric of the land, an emblem of wonder and collaboration, ensuring an enlightened future for all who seek to unravel the mysteries of the universe through the art of magic.",
      },
      {
        tier: 2,
        text: "Rising elegantly against the horizon, the newly constructed wizard tower exudes an aura of enchantment and sagacity. Its tall spires and windows adorned with sigils stand as a tribute to the dedication and mastery of the realm's most skilled spellcasters. The wizard tower resonates with the echoes of ancient spells and the hum of arcane devices as magic is harnessed for both study and exploration. Wizards, scholars, and those intrigued by the mysteries of magic gather within its chambers, exchanging theories, casting spells, and delving into the secrets of the unseen realms. The wizard tower has seamlessly woven itself into the fabric of the land, an emblem of wonder and collaboration, ensuring an enlightened future for all who seek to unravel the mysteries of the universe through the art of magic.",
      },
      {
        tier: 3,
        text: "Rising elegantly against the horizon, the newly constructed wizard tower exudes an aura of enchantment and sagacity. Its tall spires and windows adorned with sigils stand as a tribute to the dedication and mastery of the realm's most skilled spellcasters. The wizard tower resonates with the echoes of ancient spells and the hum of arcane devices as magic is harnessed for both study and exploration. Wizards, scholars, and those intrigued by the mysteries of magic gather within its chambers, exchanging theories, casting spells, and delving into the secrets of the unseen realms. The wizard tower has seamlessly woven itself into the fabric of the land, an emblem of wonder and collaboration, ensuring an enlightened future for all who seek to unravel the mysteries of the universe through the art of magic.",
      },
      {
        tier: 4,
        text: "Rising elegantly against the horizon, the newly constructed wizard tower exudes an aura of enchantment and sagacity. Its tall spires and windows adorned with sigils stand as a tribute to the dedication and mastery of the realm's most skilled spellcasters. The wizard tower resonates with the echoes of ancient spells and the hum of arcane devices as magic is harnessed for both study and exploration. Wizards, scholars, and those intrigued by the mysteries of magic gather within its chambers, exchanging theories, casting spells, and delving into the secrets of the unseen realms. The wizard tower has seamlessly woven itself into the fabric of the land, an emblem of wonder and collaboration, ensuring an enlightened future for all who seek to unravel the mysteries of the universe through the art of magic.",
      },
      {
        tier: 5,
        text: "Rising elegantly against the horizon, the newly constructed wizard tower exudes an aura of enchantment and sagacity. Its tall spires and windows adorned with sigils stand as a tribute to the dedication and mastery of the realm's most skilled spellcasters. The wizard tower resonates with the echoes of ancient spells and the hum of arcane devices as magic is harnessed for both study and exploration. Wizards, scholars, and those intrigued by the mysteries of magic gather within its chambers, exchanging theories, casting spells, and delving into the secrets of the unseen realms. The wizard tower has seamlessly woven itself into the fabric of the land, an emblem of wonder and collaboration, ensuring an enlightened future for all who seek to unravel the mysteries of the universe through the art of magic.",
      },
    ],
    images: [
      {
        tier: 1,
        exterior: building007ExteriorImage,
        interior: building007InteriorImage,
      },
      {
        tier: 2,
        exterior: building007ExteriorImage,
        interior: building007InteriorImage,
      },
      {
        tier: 3,
        exterior: building007ExteriorImage,
        interior: building007InteriorImage,
      },
      {
        tier: 4,
        exterior: building007ExteriorImage,
        interior: building007InteriorImage,
      },
      {
        tier: 5,
        exterior: building007ExteriorImage,
        interior: building007InteriorImage,
      },
    ],
    position: { x: 0.3, y: 0.14 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["COLLECT_AMETHYST", "TRAIN_GATHERING"],
  }),
  8: new Building({
    id: 8,
    name: "Cartographer",
    descriptions: [
      {
        tier: 1,
        text: "Perched at the intersection of knowledge and exploration, the newly inaugurated cartographer's studio exudes an air of discovery and meticulousness. Its walls adorned with intricate maps and shelves laden with atlases stand as a tribute to the dedication and curiosity of the institute's cartographers. The studio hums with the scratch of pens and the rustle of paper as cartographers bring to life lands both known and uncharted. Scholars, adventurers, and enthusiasts gather within its confines, sharing insights, tracing routes, and delving into the histories etched on parchment. The cartographer's studio has seamlessly integrated itself into the essence of the institute, an emblem of enlightenment and collaboration, ensuring an informed future for all who navigate the world's secrets, one stroke of ink at a time.",
      },
      {
        tier: 2,
        text: "Perched at the intersection of knowledge and exploration, the newly inaugurated cartographer's studio exudes an air of discovery and meticulousness. Its walls adorned with intricate maps and shelves laden with atlases stand as a tribute to the dedication and curiosity of the institute's cartographers. The studio hums with the scratch of pens and the rustle of paper as cartographers bring to life lands both known and uncharted. Scholars, adventurers, and enthusiasts gather within its confines, sharing insights, tracing routes, and delving into the histories etched on parchment. The cartographer's studio has seamlessly integrated itself into the essence of the institute, an emblem of enlightenment and collaboration, ensuring an informed future for all who navigate the world's secrets, one stroke of ink at a time.",
      },
      {
        tier: 3,
        text: "Perched at the intersection of knowledge and exploration, the newly inaugurated cartographer's studio exudes an air of discovery and meticulousness. Its walls adorned with intricate maps and shelves laden with atlases stand as a tribute to the dedication and curiosity of the institute's cartographers. The studio hums with the scratch of pens and the rustle of paper as cartographers bring to life lands both known and uncharted. Scholars, adventurers, and enthusiasts gather within its confines, sharing insights, tracing routes, and delving into the histories etched on parchment. The cartographer's studio has seamlessly integrated itself into the essence of the institute, an emblem of enlightenment and collaboration, ensuring an informed future for all who navigate the world's secrets, one stroke of ink at a time.",
      },
      {
        tier: 4,
        text: "Perched at the intersection of knowledge and exploration, the newly inaugurated cartographer's studio exudes an air of discovery and meticulousness. Its walls adorned with intricate maps and shelves laden with atlases stand as a tribute to the dedication and curiosity of the institute's cartographers. The studio hums with the scratch of pens and the rustle of paper as cartographers bring to life lands both known and uncharted. Scholars, adventurers, and enthusiasts gather within its confines, sharing insights, tracing routes, and delving into the histories etched on parchment. The cartographer's studio has seamlessly integrated itself into the essence of the institute, an emblem of enlightenment and collaboration, ensuring an informed future for all who navigate the world's secrets, one stroke of ink at a time.",
      },
      {
        tier: 5,
        text: "Perched at the intersection of knowledge and exploration, the newly inaugurated cartographer's studio exudes an air of discovery and meticulousness. Its walls adorned with intricate maps and shelves laden with atlases stand as a tribute to the dedication and curiosity of the institute's cartographers. The studio hums with the scratch of pens and the rustle of paper as cartographers bring to life lands both known and uncharted. Scholars, adventurers, and enthusiasts gather within its confines, sharing insights, tracing routes, and delving into the histories etched on parchment. The cartographer's studio has seamlessly integrated itself into the essence of the institute, an emblem of enlightenment and collaboration, ensuring an informed future for all who navigate the world's secrets, one stroke of ink at a time.",
      },
    ],
    images: [
      {
        tier: 1,
        exterior: building008ExteriorImage,
        interior: building008InteriorImage,
      },
      {
        tier: 2,
        exterior: building008ExteriorImage,
        interior: building008InteriorImage,
      },
      {
        tier: 3,
        exterior: building008ExteriorImage,
        interior: building008InteriorImage,
      },
      {
        tier: 4,
        exterior: building008ExteriorImage,
        interior: building008InteriorImage,
      },
      {
        tier: 5,
        exterior: building008ExteriorImage,
        interior: building008InteriorImage,
      },
    ],
    position: { x: 0.33, y: 0.34 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["DISCOVER_MAP_TILE", "TRAIN_SCOUTING"],
  }),
  9: new Building({
    id: 9,
    name: "Thieves Guild",
    descriptions: [],
    images: [],
    position: { x: 0.54, y: 0.5 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["DISCOVER_ENEMY_INFO", "TRAIN_SPYCRAFT"],
  }),
  10: new Building({
    id: 10,
    name: "Barracks",
    descriptions: [
      {
        tier: 1,
        text: "Rising proudly within the heart of the military compound, the newly constructed barracks exudes an aura of discipline and readiness. Its sturdy architecture and orderly bunks stand as a tribute to the dedication and valor of the soldiers who serve. The barracks hums with the camaraderie of soldiers in training and veterans swapping tales of battle. Within its walls, soldiers find rest, regroup, and forge unbreakable bonds that transcend the battlefield. The barracks has seamlessly integrated itself into the essence of the compound, an emblem of strength and collaboration, ensuring a steadfast future for all who stand united in the face of adversity.",
      },
      {
        tier: 2,
        text: "Rising proudly within the heart of the military compound, the newly constructed barracks exudes an aura of discipline and readiness. Its sturdy architecture and orderly bunks stand as a tribute to the dedication and valor of the soldiers who serve. The barracks hums with the camaraderie of soldiers in training and veterans swapping tales of battle. Within its walls, soldiers find rest, regroup, and forge unbreakable bonds that transcend the battlefield. The barracks has seamlessly integrated itself into the essence of the compound, an emblem of strength and collaboration, ensuring a steadfast future for all who stand united in the face of adversity.",
      },
      {
        tier: 3,
        text: "Rising proudly within the heart of the military compound, the newly constructed barracks exudes an aura of discipline and readiness. Its sturdy architecture and orderly bunks stand as a tribute to the dedication and valor of the soldiers who serve. The barracks hums with the camaraderie of soldiers in training and veterans swapping tales of battle. Within its walls, soldiers find rest, regroup, and forge unbreakable bonds that transcend the battlefield. The barracks has seamlessly integrated itself into the essence of the compound, an emblem of strength and collaboration, ensuring a steadfast future for all who stand united in the face of adversity.",
      },
      {
        tier: 4,
        text: "Rising proudly within the heart of the military compound, the newly constructed barracks exudes an aura of discipline and readiness. Its sturdy architecture and orderly bunks stand as a tribute to the dedication and valor of the soldiers who serve. The barracks hums with the camaraderie of soldiers in training and veterans swapping tales of battle. Within its walls, soldiers find rest, regroup, and forge unbreakable bonds that transcend the battlefield. The barracks has seamlessly integrated itself into the essence of the compound, an emblem of strength and collaboration, ensuring a steadfast future for all who stand united in the face of adversity.",
      },
      {
        tier: 5,
        text: "Rising proudly within the heart of the military compound, the newly constructed barracks exudes an aura of discipline and readiness. Its sturdy architecture and orderly bunks stand as a tribute to the dedication and valor of the soldiers who serve. The barracks hums with the camaraderie of soldiers in training and veterans swapping tales of battle. Within its walls, soldiers find rest, regroup, and forge unbreakable bonds that transcend the battlefield. The barracks has seamlessly integrated itself into the essence of the compound, an emblem of strength and collaboration, ensuring a steadfast future for all who stand united in the face of adversity.",
      },
    ],
    images: [
      {
        tier: 1,
        exterior: building010ExteriorImage,
        interior: building010InteriorImage,
      },
      {
        tier: 2,
        exterior: building010ExteriorImage,
        interior: building010InteriorImage,
      },
      {
        tier: 3,
        exterior: building010ExteriorImage,
        interior: building010InteriorImage,
      },
      {
        tier: 4,
        exterior: building010ExteriorImage,
        interior: building010InteriorImage,
      },
      {
        tier: 5,
        exterior: building010ExteriorImage,
        interior: building010InteriorImage,
      },
    ],
    position: { x: 0.15, y: 0.31 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["TRAIN_COMBAT"],
  }),
  11: new Building({
    id: 11,
    name: "Infirmary",
    descriptions: [
      {
        tier: 1,
        text: "Nestled within the village's heart, the newly founded infirmary exudes an aura of compassion and expertise. Its pristine wards and modern medical equipment stand as a tribute to the dedication and knowledge of the village's healers. The infirmary resonates with the soft sounds of footsteps and the hum of medical devices as patients receive care and practitioners collaborate to diagnose and treat. Villagers, caregivers, and those in need of medical attention gather within its rooms, sharing stories of recovery and placing their trust in the skilled hands that tend to their well-being. The infirmary has seamlessly woven itself into the village's fabric, an emblem of health and solidarity, ensuring a resilient future for all who seek comfort and healing within its walls.",
      },
      {
        tier: 2,
        text: "Nestled within the village's heart, the newly founded infirmary exudes an aura of compassion and expertise. Its pristine wards and modern medical equipment stand as a tribute to the dedication and knowledge of the village's healers. The infirmary resonates with the soft sounds of footsteps and the hum of medical devices as patients receive care and practitioners collaborate to diagnose and treat. Villagers, caregivers, and those in need of medical attention gather within its rooms, sharing stories of recovery and placing their trust in the skilled hands that tend to their well-being. The infirmary has seamlessly woven itself into the village's fabric, an emblem of health and solidarity, ensuring a resilient future for all who seek comfort and healing within its walls.",
      },
      {
        tier: 3,
        text: "Nestled within the village's heart, the newly founded infirmary exudes an aura of compassion and expertise. Its pristine wards and modern medical equipment stand as a tribute to the dedication and knowledge of the village's healers. The infirmary resonates with the soft sounds of footsteps and the hum of medical devices as patients receive care and practitioners collaborate to diagnose and treat. Villagers, caregivers, and those in need of medical attention gather within its rooms, sharing stories of recovery and placing their trust in the skilled hands that tend to their well-being. The infirmary has seamlessly woven itself into the village's fabric, an emblem of health and solidarity, ensuring a resilient future for all who seek comfort and healing within its walls.",
      },
      {
        tier: 4,
        text: "Nestled within the village's heart, the newly founded infirmary exudes an aura of compassion and expertise. Its pristine wards and modern medical equipment stand as a tribute to the dedication and knowledge of the village's healers. The infirmary resonates with the soft sounds of footsteps and the hum of medical devices as patients receive care and practitioners collaborate to diagnose and treat. Villagers, caregivers, and those in need of medical attention gather within its rooms, sharing stories of recovery and placing their trust in the skilled hands that tend to their well-being. The infirmary has seamlessly woven itself into the village's fabric, an emblem of health and solidarity, ensuring a resilient future for all who seek comfort and healing within its walls.",
      },
      {
        tier: 5,
        text: "Nestled within the village's heart, the newly founded infirmary exudes an aura of compassion and expertise. Its pristine wards and modern medical equipment stand as a tribute to the dedication and knowledge of the village's healers. The infirmary resonates with the soft sounds of footsteps and the hum of medical devices as patients receive care and practitioners collaborate to diagnose and treat. Villagers, caregivers, and those in need of medical attention gather within its rooms, sharing stories of recovery and placing their trust in the skilled hands that tend to their well-being. The infirmary has seamlessly woven itself into the village's fabric, an emblem of health and solidarity, ensuring a resilient future for all who seek comfort and healing within its walls.",
      },
    ],
    images: [
      {
        tier: 1,
        exterior: building011ExteriorImage,
        interior: building011InteriorImage,
      },
      {
        tier: 2,
        exterior: building011ExteriorImage,
        interior: building011InteriorImage,
      },
      {
        tier: 3,
        exterior: building011ExteriorImage,
        interior: building011InteriorImage,
      },
      {
        tier: 4,
        exterior: building011ExteriorImage,
        interior: building011InteriorImage,
      },
      {
        tier: 5,
        exterior: building011ExteriorImage,
        interior: building011InteriorImage,
      },
    ],
    position: { x: 0.71, y: 0.45 },
    maxTier: 5,
    canAssignVillagers: true,
    effects: ["TRAIN_HEALING"],
  }),
  12: new Building({
    id: 12,
    name: "Market",
    descriptions: [
      {
        tier: 1,
        text: "Radiating life in the heart of the town, the newly inaugurated market square exudes an air of vibrancy and commerce. Its stalls laden with goods and colorful awnings stand as a testament to the entrepreneurial spirit of the town's merchants. The square resonates with the hubbub of activity as shoppers peruse, vendors make their pitches, and the scent of freshly cooked food mingles with the sounds of laughter. Townspeople, travelers, and curious souls gather within its bustling expanse, connecting over shared interests and engaging in the timeless dance of buyer and seller. The market square has seamlessly integrated itself into the town's daily rhythm, an emblem of enterprise and camaraderie, ensuring a thriving future for all who contribute to the dynamic tapestry of exchange and interaction.",
      },
      {
        tier: 2,
        text: "Radiating life in the heart of the town, the newly inaugurated market square exudes an air of vibrancy and commerce. Its stalls laden with goods and colorful awnings stand as a testament to the entrepreneurial spirit of the town's merchants. The square resonates with the hubbub of activity as shoppers peruse, vendors make their pitches, and the scent of freshly cooked food mingles with the sounds of laughter. Townspeople, travelers, and curious souls gather within its bustling expanse, connecting over shared interests and engaging in the timeless dance of buyer and seller. The market square has seamlessly integrated itself into the town's daily rhythm, an emblem of enterprise and camaraderie, ensuring a thriving future for all who contribute to the dynamic tapestry of exchange and interaction.",
      },
      {
        tier: 3,
        text: "Radiating life in the heart of the town, the newly inaugurated market square exudes an air of vibrancy and commerce. Its stalls laden with goods and colorful awnings stand as a testament to the entrepreneurial spirit of the town's merchants. The square resonates with the hubbub of activity as shoppers peruse, vendors make their pitches, and the scent of freshly cooked food mingles with the sounds of laughter. Townspeople, travelers, and curious souls gather within its bustling expanse, connecting over shared interests and engaging in the timeless dance of buyer and seller. The market square has seamlessly integrated itself into the town's daily rhythm, an emblem of enterprise and camaraderie, ensuring a thriving future for all who contribute to the dynamic tapestry of exchange and interaction.",
      },
      {
        tier: 4,
        text: "Radiating life in the heart of the town, the newly inaugurated market square exudes an air of vibrancy and commerce. Its stalls laden with goods and colorful awnings stand as a testament to the entrepreneurial spirit of the town's merchants. The square resonates with the hubbub of activity as shoppers peruse, vendors make their pitches, and the scent of freshly cooked food mingles with the sounds of laughter. Townspeople, travelers, and curious souls gather within its bustling expanse, connecting over shared interests and engaging in the timeless dance of buyer and seller. The market square has seamlessly integrated itself into the town's daily rhythm, an emblem of enterprise and camaraderie, ensuring a thriving future for all who contribute to the dynamic tapestry of exchange and interaction.",
      },
      {
        tier: 5,
        text: "Radiating life in the heart of the town, the newly inaugurated market square exudes an air of vibrancy and commerce. Its stalls laden with goods and colorful awnings stand as a testament to the entrepreneurial spirit of the town's merchants. The square resonates with the hubbub of activity as shoppers peruse, vendors make their pitches, and the scent of freshly cooked food mingles with the sounds of laughter. Townspeople, travelers, and curious souls gather within its bustling expanse, connecting over shared interests and engaging in the timeless dance of buyer and seller. The market square has seamlessly integrated itself into the town's daily rhythm, an emblem of enterprise and camaraderie, ensuring a thriving future for all who contribute to the dynamic tapestry of exchange and interaction.",
      },
    ],
    images: [
      {
        tier: 1,
        exterior: building012ExteriorImage,
        interior: building012InteriorImage,
      },
      {
        tier: 2,
        exterior: building012ExteriorImage,
        interior: building012InteriorImage,
      },
      {
        tier: 3,
        exterior: building012ExteriorImage,
        interior: building012InteriorImage,
      },
      {
        tier: 4,
        exterior: building012ExteriorImage,
        interior: building012InteriorImage,
      },
      {
        tier: 5,
        exterior: building012ExteriorImage,
        interior: building012InteriorImage,
      },
    ],
    position: { x: 0.17, y: 0.68 },
    maxTier: 1,
    canAssignVillagers: false,
    effects: ["TRADE_RESOURCES"],
  }),
  13: new Building({
    id: 13,
    name: "Warehouse",
    descriptions: [
      {
        tier: 1,
        text: "Holding steadfast at the heart of the town's commercial operations, the newly constructed warehouse exudes an air of diligence and functionality. Its towering shelves and precisely labeled containers stand as a tribute to the meticulousness and dedication of the town's logistics professionals. The warehouse resounds with the echo of footsteps and the rumble of carts as supplies are received, inventoried, and dispatched. Traders, suppliers, and those involved in the town's economic engine gather within its expansive interior, exchanging goods, collaborating on inventory management, and ensuring the seamless flow of resources. The warehouse has seamlessly woven itself into the town's economic fabric, an emblem of efficiency and cooperation, ensuring a prosperous future for all who contribute to the well-oiled machinery of trade and commerce.",
      },
      {
        tier: 2,
        text: "Holding steadfast at the heart of the town's commercial operations, the newly constructed warehouse exudes an air of diligence and functionality. Its towering shelves and precisely labeled containers stand as a tribute to the meticulousness and dedication of the town's logistics professionals. The warehouse resounds with the echo of footsteps and the rumble of carts as supplies are received, inventoried, and dispatched. Traders, suppliers, and those involved in the town's economic engine gather within its expansive interior, exchanging goods, collaborating on inventory management, and ensuring the seamless flow of resources. The warehouse has seamlessly woven itself into the town's economic fabric, an emblem of efficiency and cooperation, ensuring a prosperous future for all who contribute to the well-oiled machinery of trade and commerce.",
      },
      {
        tier: 3,
        text: "Holding steadfast at the heart of the town's commercial operations, the newly constructed warehouse exudes an air of diligence and functionality. Its towering shelves and precisely labeled containers stand as a tribute to the meticulousness and dedication of the town's logistics professionals. The warehouse resounds with the echo of footsteps and the rumble of carts as supplies are received, inventoried, and dispatched. Traders, suppliers, and those involved in the town's economic engine gather within its expansive interior, exchanging goods, collaborating on inventory management, and ensuring the seamless flow of resources. The warehouse has seamlessly woven itself into the town's economic fabric, an emblem of efficiency and cooperation, ensuring a prosperous future for all who contribute to the well-oiled machinery of trade and commerce.",
      },
      {
        tier: 4,
        text: "Holding steadfast at the heart of the town's commercial operations, the newly constructed warehouse exudes an air of diligence and functionality. Its towering shelves and precisely labeled containers stand as a tribute to the meticulousness and dedication of the town's logistics professionals. The warehouse resounds with the echo of footsteps and the rumble of carts as supplies are received, inventoried, and dispatched. Traders, suppliers, and those involved in the town's economic engine gather within its expansive interior, exchanging goods, collaborating on inventory management, and ensuring the seamless flow of resources. The warehouse has seamlessly woven itself into the town's economic fabric, an emblem of efficiency and cooperation, ensuring a prosperous future for all who contribute to the well-oiled machinery of trade and commerce.",
      },
      {
        tier: 5,
        text: "Holding steadfast at the heart of the town's commercial operations, the newly constructed warehouse exudes an air of diligence and functionality. Its towering shelves and precisely labeled containers stand as a tribute to the meticulousness and dedication of the town's logistics professionals. The warehouse resounds with the echo of footsteps and the rumble of carts as supplies are received, inventoried, and dispatched. Traders, suppliers, and those involved in the town's economic engine gather within its expansive interior, exchanging goods, collaborating on inventory management, and ensuring the seamless flow of resources. The warehouse has seamlessly woven itself into the town's economic fabric, an emblem of efficiency and cooperation, ensuring a prosperous future for all who contribute to the well-oiled machinery of trade and commerce.",
      },
    ],
    images: [
      {
        tier: 1,
        exterior: building013ExteriorImage,
        interior: building013InteriorImage,
      },
      {
        tier: 2,
        exterior: building013ExteriorImage,
        interior: building013InteriorImage,
      },
      {
        tier: 3,
        exterior: building013ExteriorImage,
        interior: building013InteriorImage,
      },
      {
        tier: 4,
        exterior: building013ExteriorImage,
        interior: building013InteriorImage,
      },
      {
        tier: 5,
        exterior: building013ExteriorImage,
        interior: building013InteriorImage,
      },
    ],
    position: { x: 0.04, y: 0.45 },
    maxTier: 5,
    canAssignVillagers: false,
    effects: ["STORE_RESOURCES"],
  }),
};

// Town starts with Housing and Warehouse at tier 1
export const INITIAL_BUILDINGS: TownBuilding[] = Object.values(
  BUILDING_ID_TO_BUILDING,
)
  .filter((building) =>
    ["Housing", "Warehouse"].includes(building.name),
  )
  .map((building) => ({ id: building.id, tier: 1 }));
