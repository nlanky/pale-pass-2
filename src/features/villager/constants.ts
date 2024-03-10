// LOCAL FILES
// Classes
import { Villager } from "features/villager/classes";
// Icons & Images
import {
  villager1Image,
  villager2Image,
  villager3Image,
  villager4Image,
  villager5Image,
  villager6Image,
  villager7Image,
  villager8Image,
  villager9Image,
  villager10Image,
  villager11Image,
  villager12Image,
  villager13Image,
  villager14Image,
  villager15Image,
  villager16Image,
  villager17Image,
  villager18Image,
  villager19Image,
  villager20Image,
  villager21Image,
  villager22Image,
  villager23Image,
  villager24Image,
  villager25Image,
  villager26Image,
  villager27Image,
  villager28Image,
  villager29Image,
  villager30Image,
  villager31Image,
  villager32Image,
  villager33Image,
  villager34Image,
  villager35Image,
  villager36Image,
  villager37Image,
  villager38Image,
  villager39Image,
  villager40Image,
  villager41Image,
  villager42Image,
  villager43Image,
  villager44Image,
  villager45Image,
  villager46Image,
  villager47Image,
  villager48Image,
  villager49Image,
} from "assets/villager";

export const VILLAGER_ID_TO_VILLAGER: Record<number, Villager> = {
  1: new Villager({
    id: 1,
    name: "Tom",
    occupation: "Wizard",
    description:
      "A wizard, adorned in flowing robes, possesses an ancient visage. With eyes ablaze with arcane knowledge, they command the forces of magic, casting spells and weaving enchantments with a mere gesture. Their mastery lies in their wisdom and the ability to shape reality itself.",
    specialty: "Soldier",
    image: villager1Image,
  }),
  2: new Villager({
    id: 2,
    name: "Kobus",
    occupation: "Gargoyle",
    description:
      "A gargoyle, perched atop a cathedral, embodies stone transformed into an eerie sentinel. Its grotesque features depict twisted figures, frozen in eternal vigilance. With a stony countenance and piercing eyes, it stands as a silent guardian, warding off evil with a menacing presence. The rugged texture of its weathered form tells tales of centuries past, while its wings, poised for flight, hint at the mysteries it witnesses from its lofty perch.",
    specialty: "Spy",
    image: villager2Image,
  }),
  3: new Villager({
    id: 3,
    name: "Neil",
    occupation: "Arcane Architect",
    description:
      "An arcane architect, adorned in ornate robes, blends the realms of magic and construction. With a mind attuned to mystical geometries, they shape ethereal blueprints that defy the laws of ordinary design. Their creations rise with enchanted elegance, bridges woven from shimmering spells and towers spiraling with enchanted enchantments. Each structure radiates a hum of arcane energy, harmonizing with the very fabric of the cosmos. The arcane architect, a master of both the ethereal and the tangible, leaves a mark on the world that echoes with the whispers of otherworldly knowledge and arcane craftsmanship.",
    specialty: "Builder",
    image: villager3Image,
  }),
  4: new Villager({
    id: 4,
    name: "Spirit",
    occupation: "Thoughtsmith",
    description:
      "A thoughtsmith, adorned in intricate robes, forges ideas into tangible form. With a mind ablaze with creativity, they shape ethereal concepts, molding them into words and visions. Through their craft, they weave intricate tapestries of thought, unlocking the depths of imagination. With each stroke of their mental hammer, they shape the intangible into profound meaning. The thoughtsmith, a master of intellectual alchemy, transforms abstract musings into palpable inspiration, leaving an indelible mark on the tapestry of ideas and shaping the course of minds and hearts.",
    specialty: "Healer",
    image: villager4Image,
  }),
  5: new Villager({
    id: 5,
    name: "Alex",
    occupation: "Quartermaster",
    description:
      "A quartermaster, adorned in practical attire, is the backbone of logistical precision. With a meticulous eye and unwavering organization, they oversee the intricate web of supplies and provisions. Their realm is the vast inventory, where they track rations, equipment, and ammunition with methodical expertise. A quartermaster ensures the smooth functioning of military campaigns, expeditions, or even distant outposts. They allocate resources wisely, anticipating needs, and meticulously maintaining stockpiles. Their authority is derived from their ability to keep armies fed, armed, and ready, ensuring the wheels of operations turn smoothly even in the harshest of conditions.",
    specialty: "Spy",
    image: villager5Image,
  }),
  6: new Villager({
    id: 6,
    name: "Angie",
    occupation: "Bard",
    description:
      "A bard, adorned in vibrant attire, radiates the essence of art and storytelling. With nimble fingers dancing across strings or lips caressing a flute, they weave enchanting melodies that ignite emotions. Their voice, a conduit of raw passion and lyrical prowess, spins tales of heroes and lovers, captivating audiences with every word. A bard's presence commands attention, their performances bridging the realms of entertainment and inspiration. Beyond the stage, they carry the burden of history and culture, preserving and spreading the collective wisdom of their people through song and verse, leaving an indelible mark on the tapestry of oral tradition.",
    specialty: "Spy",
    image: villager6Image,
  }),
  7: new Villager({
    id: 7,
    name: "Malivil",
    occupation: "Maladin",
    description:
      "A paladin, clad in gleaming armor, embodies the fusion of righteousness and martial prowess. Their unwavering devotion to honor and justice fuels their every action. With a sword wielded with precision and a shield raised in defense, they stand as a beacon of courage and protection. Their unwavering faith in their chosen cause empowers them to heal the wounded, smite the wicked, and inspire allies with resolute conviction. A paladin's presence radiates a palpable aura of righteousness, commanding respect and embodying the unwavering pursuit of truth and righteousness in a world besieged by darkness.",
    specialty: "Healer",
    image: villager7Image,
  }),
  8: new Villager({
    id: 8,
    name: "Technofrood",
    occupation: "Machinator",
    description:
      "A machinator, veiled in shadows, embodies the essence of cunning and manipulation. With eyes gleaming with dark intelligence, they orchestrate intricate webs of deception and intrigue. Their mind, a labyrinth of schemes and machinations, calculates every move with meticulous precision. A master of manipulation, they pull invisible strings, leveraging secrets and alliances to advance their clandestine agenda. A machinator's presence exudes an air of mystery and danger, as they navigate the shadows, working behind the scenes to shape events and manipulate unsuspecting individuals to serve their hidden motives.",
    specialty: "Soldier",
    image: villager8Image,
  }),
  9: new Villager({
    id: 9,
    name: "Jason",
    occupation: "Smallholder",
    description:
      "A smallholder, weathered by toil and resilience, is the embodiment of self-sufficiency and humble perseverance. Tending to a modest plot of land, they cultivate crops and raise livestock with seasoned expertise. Their hands, calloused yet tender, sow seeds of sustenance and harvest the fruits of their labor. With an intimate connection to the earth, they navigate the ebb and flow of seasons, embodying the harmony between humanity and nature. A smallholder's life is one of humble abundance, where hard work, resourcefulness, and a deep appreciation for the land sustains their livelihood and nourishes their community.",
    specialty: "Scout",
    image: villager9Image,
  }),
  10: new Villager({
    id: 10,
    name: "Alistair",
    occupation: "Chorister",
    description:
      "A chorister, adorned in a resplendent choir robe, emanates a celestial aura of harmonious grace. With voice and soul entwined, they become an instrument of divine beauty. Their vocal cords weave melodies that soar to ethereal heights, filling sacred spaces with pure enchantment. Each note, guided by meticulous training, resonates with the essence of devotion and passion. As part of a united choir, they blend their voices, creating a symphony of unity and reverence. A chorister's presence uplifts spirits, transporting listeners to realms of spiritual transcendence through the power of melodic prayer.",
    specialty: "Healer",
    image: villager10Image,
  }),
  11: new Villager({
    id: 11,
    name: "Alex",
    occupation: "Swede",
    description:
      "A Swede, hailing from the enchanting lands of Sweden, embodies a blend of warmth and stoic resilience. With fair skin and often light hair, they exude a sense of tranquility and understated elegance. Grounded in a rich cultural heritage, Swedes embrace a balance of tradition and progress, valuing societal harmony and egalitarian values. They find solace in nature, embracing the beauty of their pristine landscapes. Known for their warmth, hospitality, and fika (coffee break) culture, Swedes create an inviting atmosphere, fostering a sense of community that reflects their enduring spirit and appreciation for life's simple pleasures.",
    specialty: "Scout",
    image: villager11Image,
  }),
  12: new Villager({
    id: 12,
    name: "Bruce",
    occupation: "Siege Engineer",
    description:
      "A siege engineer, draped in rugged attire, embodies the art of destruction and strategic ingenuity. With an unwavering focus, they analyze fortifications and devise methods to breach them. Their mind, a tapestry of engineering brilliance, designs trebuchets, catapults, and battering rams with precise calculations. A master of siege warfare, they manipulate leverage and counterweight, engineering the instruments of devastation. They strategize with generals, positioning war machines to shatter walls and crumble defenses. A siege engineer's presence carries the weight of impending turmoil, as they orchestrate the symphony of destruction, reshaping the course of battles and leaving their mark on the annals of warfare.",
    specialty: "Soldier",
    image: villager12Image,
  }),
  13: new Villager({
    id: 13,
    name: "Dan",
    occupation: "Forester",
    description:
      "A forester, donned in earth-toned attire, walks amidst the grandeur of nature with a deep reverence. With keen eyes, they navigate dense forests, studying trees like old friends. Their hands, calloused and nimble, prune and nurture, ensuring the vitality of the woodland. They possess a profound understanding of ecosystems, harmonizing conservation and sustainable management. In solitude or with fellow stewards, they preserve biodiversity, combatting threats with fierce dedication. A forester's presence breathes life into the wilderness, as they embrace the responsibility to safeguard the splendor of the natural world for generations to come.",
    specialty: "Scout",
    image: villager13Image,
  }),
  14: new Villager({
    id: 14,
    name: "Jordy",
    occupation: "Trickster",
    description:
      "A medieval trickster, cloaked in motley attire, embodies a mischievous spirit that dances on the edges of propriety. With a twinkle in their eye and a quick wit, they navigate the labyrinth of medieval society, challenging norms with clever deceptions. Their nimble fingers spin tales and perform sleight of hand, leaving audiences both delighted and bewildered. Masters of disguise and manipulation, they blur the lines between jest and subversion, using their cunning to outwit the unsuspecting. A medieval trickster's presence injects a dose of irreverence into the rigid tapestry of the era, leaving behind a legacy of laughter and clever trickery.",
    specialty: "Spy",
    image: villager14Image,
  }),
  15: new Villager({
    id: 15,
    name: "Putzly",
    occupation: "Miner",
    description:
      "A miner, adorned in worn attire, bears the mark of labor etched upon their rugged visage. With a steadfast resolve, they descend into the depths of the earth, chasing veins of precious ores and minerals. Their calloused hands wield pickaxes and shovels, extracting treasures from the unforgiving rock. In dimly lit tunnels, they toil amidst dust and sweat, driven by an unyielding spirit. With each swing of their tools, they unearth wealth and shape the foundations of industry. A miner's presence speaks of perseverance and resilience, embodying the indomitable human spirit in the face of the subterranean realm.",
    specialty: "Gatherer",
    image: villager15Image,
  }),
  16: new Villager({
    id: 16,
    name: "Shorts",
    occupation: "GIFsmith",
    description: "So mysterious.",
    specialty: "Spy",
    image: villager16Image,
  }),
  17: new Villager({
    id: 17,
    name: "Spaaz",
    occupation: "Baker",
    description:
      "A baker, adorned in a flour-dusted apron, emanates the comforting embrace of freshly baked wonders. With hands honed by years of experience, they knead dough with a rhythm of mastery. Their warm smile mirrors the aroma that wafts from their ovens, inviting passersby to indulge. A symphony of measured ingredients and precise techniques is their craft, yielding crusty breads, delicate pastries, and delectable treats. With dedication and passion, they transform humble ingredients into edible art, nourishing not only bodies but also the spirits of those who partake in their creations.",
    specialty: "Gatherer",
    image: villager17Image,
  }),
  18: new Villager({
    id: 18,
    name: "Umbra",
    occupation: "Necromancer",
    description:
      "A necromancer, shrouded in dark robes, embodies a forbidden mastery over life and death. With eyes veiled by shadows, they command the macabre forces that lay beyond the mortal realm. Their incantations, whispered with chilling precision, summon the spirits of the departed and manipulate the very essence of souls. With a touch both eerie and captivating, they navigate the boundaries of mortality, straddling the line between forbidden knowledge and unfathomable power. A necromancer's presence exudes an air of foreboding, as they tap into the necrotic energies, delving into the mysteries that lie beyond the veil of existence.",
    specialty: "Healer",
    image: villager18Image,
  }),
  19: new Villager({
    id: 19,
    name: "Vodrix",
    occupation: "Blacksmith",
    description:
      "A blacksmith, adorned in a soot-stained apron, embodies the fusion of strength and artistry. With brawny arms, they wield hammers and tongs, forging molten metal into shapes of utilitarian beauty. Sparks dance around their anvil as they shape iron and steel with a symphony of rhythmic strikes. Each swing is guided by years of experience and a keen eye for detail. From humble horseshoes to intricate weaponry, a blacksmith's skill transforms raw materials into objects of strength and functionality. Their presence radiates the essence of craftsmanship and resilience, breathing life into the ancient and noble profession.",
    specialty: "Soldier",
    image: villager19Image,
  }),
  20: new Villager({
    id: 20,
    name: "Jack",
    occupation: "Content Thief",
    description:
      "A content thief is an unscrupulous individual who illicitly duplicates and utilizes other people's original work without permission or attribution, often for personal gain and without regard for the creator's rights or efforts.",
    specialty: "Spy",
    image: villager20Image,
  }),
  21: new Villager({
    id: 21,
    name: "Woodysus",
    occupation: "Joiner",
    description:
      "A joiner, adorned in a leather apron, embodies the mastery of woodworking and precision craftsmanship. With skilled hands, they shape and fit timber with meticulous detail. From delicate furniture to sturdy structures, their joinery creates seamless connections, rendering wood into functional and aesthetic marvels. With chisels and planes as their tools of choice, they merge the natural beauty of wood with intricate design. A joiner's presence exudes a profound appreciation for the grain and texture of timber, as they transform raw material into enduring works of art that stand as testaments to their skill and dedication.",
    specialty: "Gatherer",
    image: villager21Image,
  }),
  22: new Villager({
    id: 22,
    name: "Zoarino",
    occupation: "Doctor",
    description:
      "A doctor is a highly trained medical professional who diagnoses and treats illnesses, injuries, and medical conditions. With extensive knowledge and expertise, doctors provide healthcare and support to patients, employing various medical interventions, therapies, and medications to improve well-being and save lives.",
    specialty: "Healer",
    image: villager22Image,
  }),
  23: new Villager({
    id: 23,
    name: "Carl",
    occupation: "Carpenter",
    description:
      "A carpenter, donned in a well-worn apron, epitomizes the artistry of woodworking. With skilled hands and an eye for detail, they shape timber into functional and aesthetic creations. From sturdy furniture to intricate cabinetry, their craftsmanship weaves together form and function. With saws and planes as their symphony of tools, they coax out the natural beauty of wood, transforming it into enduring works of art. A carpenter's presence radiates a deep connection to the materials they work with, as they breathe life into the grain and texture, leaving behind a legacy of tangible beauty that stands the test of time.",
    specialty: "Builder",
    image: villager23Image,
  }),
  24: new Villager({
    id: 24,
    name: "Aartvark",
    occupation: "Painter",
    description:
      "A painter, adorned in smudged smocks, wields brushes like extensions of their soul. With each stroke, they breathe life onto a blank canvas, transcending reality into realms of color and emotion. Their palette becomes a portal of expression, blending hues to capture fleeting moments and eternal beauty. With every brushstroke, they craft visual symphonies that evoke awe and introspection. A painter's presence emanates a captivating energy, as they navigate the delicate dance between light and shadow, capturing fragments of the human experience and immortalizing them in vibrant pigments, forever igniting the imaginations of those who behold their art.",
    specialty: "Gatherer",
    image: villager24Image,
  }),
  25: new Villager({
    id: 25,
    name: "Dapper",
    occupation: "Tax Collector",
    description:
      "A tax collector, draped in officious attire, embodies the weight of fiscal responsibility. With stern countenance and meticulous record-keeping, they navigate the intricate realm of taxation. Armed with knowledge of laws and regulations, they ensure compliance and collect dues to sustain public services. Their presence carries a mix of authority and, at times, reluctance, as they bear the burden of enforcing financial obligations. Often met with disdain, a tax collector's role is both essential and contentious, as they balance the scales of fiscal order, fostering the functioning of society while facing the ire of those who part with their hard-earned wealth.",
    specialty: "Gatherer",
    image: villager25Image,
  }),
  26: new Villager({
    id: 26,
    name: "Whitesage",
    occupation: "Chef",
    description:
      "A chef, adorned in a pristine white jacket, exudes a symphony of culinary creativity. With masterful hands and a discerning palate, they transform ingredients into edible art. In a bustling kitchen, they orchestrate the harmonious dance of flavors and textures, blending tradition with innovation. A chef's presence commands respect, as they navigate the delicate balance of precision and passion. Their culinary creations tantalize taste buds, weaving memories and evoking emotions. Beyond the confines of the kitchen, they become storytellers, using food as their medium to celebrate culture, connect people, and create moments of pure gastronomic delight.",
    specialty: "Gatherer",
    image: villager26Image,
  }),
  27: new Villager({
    id: 27,
    name: "Ash",
    occupation: "Whitesmith",
    description:
      "A whitesmith, clad in a leather apron, embodies the artistry of metalwork. With deft hands and meticulous precision, they shape and transform metals into objects of functional beauty. From intricate ironwork to delicate filigree, their craft merges technical skill with artistic finesse. With tools like hammers, anvils, and forges, they breathe life into raw materials, forging them into works that adorn homes and communities. A whitesmith's presence radiates the pride of craftsmanship and a deep understanding of metallurgy, as they infuse metal with their creative spirit, leaving behind a legacy of enduring creations that stand as testament to their skill.",
    specialty: "Gatherer",
    image: villager27Image,
  }),
  28: new Villager({
    id: 28,
    name: "Brady",
    occupation: "Mason",
    description:
      "A mason, adorned in a rugged workman's attire, epitomizes the art of stonework. With calloused hands and a discerning eye, they sculpt and shape stone into structures that withstand the test of time. From towering cathedrals to sturdy fortifications, their craftsmanship weaves together precision and strength. With chisels and trowels as their tools of choice, they carve intricate details and assemble blocks with meticulous care. A mason's presence exudes a deep connection to the earth's foundations, as they transform raw stone into enduring monuments, leaving behind a legacy of architectural beauty that stands as a testament to their skill and dedication.",
    specialty: "Builder",
    image: villager28Image,
  }),
  29: new Villager({
    id: 29,
    name: "Dingy",
    occupation: "Ranger",
    description:
      "A ranger, draped in rugged attire, embodies the spirit of the wild. With keen senses honed by the untamed realms they inhabit, they navigate dense forests and treacherous terrains with fluid grace. Their eyes, sharp and watchful, scan the horizon for signs of danger or hidden wonders. A master of survival and tracking, they move silently, blending with nature like an elusive shadow. A ranger's presence resonates with harmony and respect for the natural world, as they act as protectors, guiding travelers, and guardians of untamed realms, carrying the wisdom of the wilderness within their souls.",
    specialty: "Scout",
    image: villager29Image,
  }),
  30: new Villager({
    id: 30,
    name: "Ellen",
    occupation: "Bowyer",
    description:
      "A bowyer, adorned in leathers and surrounded by the scent of freshly cut wood, embodies the mastery of archery craftsmanship. With skilled hands and a deep understanding of woodwork, they shape staves and carve limbs, creating bows with exquisite precision. From the sinewy recurve to the elegant longbow, their artistry blends form and function. With patience and knowledge, they select the perfect wood, crafting a weapon that becomes an extension of the archer's spirit. A bowyer's presence exudes a reverence for the ancient art of archery, as they infuse each bow with the potential for a perfect shot, forever honoring the timeless dance between archer and bow.",
    specialty: "Soldier",
    image: villager30Image,
  }),
  31: new Villager({
    id: 31,
    name: "Jaakko",
    occupation: "Fool & Court Jester",
    description:
      "A man too fucking drunk to be of any use to the town. He may come out with a wise word every now and then though.",
    specialty: "Scout",
    image: villager31Image,
  }),
  32: new Villager({
    id: 32,
    name: "Gianni",
    occupation: "Hunter",
    description:
      "A hunter, draped in earth-toned attire, embodies the essence of primal connection with the natural world. With eyes keen and senses honed, they move silently through the wilderness, in pursuit of prey. Their patient determination and expert marksmanship make them a force to be reckoned with. In harmony with the cycle of life and death, they embody respect for the balance of nature. A hunter's presence resonates with an understanding of survival, a deep appreciation for the wild, and the ability to provide sustenance for themselves and their community, walking the line between predator and steward of the land.",
    specialty: "Scout",
    image: villager32Image,
  }),
  33: new Villager({
    id: 33,
    name: "Jar",
    occupation: "Alchemist",
    description:
      "An alchemist, adorned in mystical robes, embodies the fusion of science and magic. With ancient tomes and bubbling potions, they seek to unlock the secrets of transformation. Their laboratory hums with the rhythmic dance of fire and chemicals. Through precise calculations and experimental zeal, they transmute base elements into gold, brew elixirs of vitality, and unlock the mysteries of the cosmos. A master of arcane knowledge and practical ingenuity, an alchemist's presence exudes an aura of mystery and boundless curiosity, as they strive to unravel the hidden forces of the universe and harness their power for both enlightenment and worldly gain.",
    specialty: "Healer",
    image: villager33Image,
  }),
  34: new Villager({
    id: 34,
    name: "Crimmy",
    occupation: "Warrior",
    description:
      "A warrior, adorned in battle-worn armor, personifies strength and valor. With a resolute gaze and a firm grip on their weapon, they stand as a bulwark against darkness. Their movements are fluid, honed through rigorous training and combat experience. In the crucible of battle, they embody courage and skill, defending the weak and upholding justice. A warrior's presence commands respect, as they carry the weight of duty and sacrifice, embracing the clash of steel with unwavering resolve. Through their unwavering spirit, they become a beacon of hope, a shield against tyranny, and an embodiment of the indomitable human spirit.",
    specialty: "Soldier",
    image: villager34Image,
  }),
  35: new Villager({
    id: 35,
    name: "Lexie",
    occupation: "Artist",
    description:
      "An artist, adorned in vibrant hues, breathes life into the intangible realms of creativity. With brushes or pens, they capture fleeting moments and eternal emotions on canvas or paper. Their imagination, boundless and untamed, gives birth to worlds yet unseen. In strokes or lines, they convey their unique perspectives, evoking joy, contemplation, or introspection. An artist's presence exudes a contagious passion, as they channel their innermost thoughts and experiences into visual or auditory masterpieces. With their creations, they bridge the gap between the tangible and the ethereal, leaving an indelible mark on the canvas of human expression.",
    specialty: "Scout",
    image: villager35Image,
  }),
  36: new Villager({
    id: 36,
    name: "Lou",
    occupation: "Librarian",
    description:
      "A librarian, adorned in quiet composure, safeguards the boundless treasure trove of knowledge. With a gentle demeanor, they guide seekers through the labyrinth of shelves, whispering wisdom and literary secrets. Their hands glide over spines, summoning tales of both the past and the imagination. A librarian's mind is a wellspring of information, ready to quench the thirst for learning. In the hallowed halls of books, they curate collections, fostering a haven where curiosity thrives. A librarian's presence embodies the transformative power of words, nurturing the seeds of knowledge and inspiring a lifelong love affair with the written word.",
    specialty: "Healer",
    image: villager36Image,
  }),
  37: new Villager({
    id: 37,
    name: "Ricardo",
    occupation: "Armourer",
    description:
      "An armourer, adorned in a leather apron, wields the tools of fortification. With skilled hands and meticulous craftsmanship, they shape metal into protective shells. From gleaming plate armor to intricately linked chainmail, their artistry blends form and function. With anvils and hammers as their instruments, they forge layers of defense, safeguarding warriors on the battlefield. An armourer's presence emanates a profound understanding of the balance between strength and mobility, as they blend artistry and engineering to create works that embrace both style and durability. Their creations stand as shields against adversity, an embodiment of their craft and dedication.",
    specialty: "Builder",
    image: villager37Image,
  }),
  38: new Villager({
    id: 38,
    name: "Siggy",
    occupation: "Hooper",
    description:
      "A cooper, adorned in weathered overalls, embodies the artistry of barrel-making. With skilled hands and a deep understanding of woodwork, they craft sturdy vessels that stand the test of time. From the hooping of staves to the shaping of heads, their craftsmanship weaves together form and function. With precision and care, they select the perfect materials, shaping and joining them with the expertise passed down through generations. A cooper's presence exudes a deep connection to tradition and craftsmanship, as they transform raw wood into vessels that cradle the spirits and liquids of the world, leaving behind a legacy of functional beauty.",
    specialty: "Gatherer",
    image: villager38Image,
  }),
  39: new Villager({
    id: 39,
    name: "Sky",
    occupation: "Roofer",
    description:
      "A roofer, clad in weather-worn attire, scales the heights to protect shelter from the elements. With skilled hands and a discerning eye, they navigate rooftops, ensuring secure coverings. From shingles to tiles, their craftsmanship shields structures from rain, sun, and wind. With tools like hammers and nails, they anchor materials, creating a barrier against nature's forces. A roofer's presence exudes a sense of reliability and expertise, as they labor under the open sky, upholding the vital role of shelter in the tapestry of human dwellings. Their work stands as a testament to their skill, protecting lives and homes.",
    specialty: "Builder",
    image: villager39Image,
  }),
  40: new Villager({
    id: 40,
    name: "Bulba",
    occupation: "Trainer",
    description:
      "A trainer, adorned in athletic gear, epitomizes the art of physical and mental transformation. With passion and expertise, they guide individuals on their journey toward fitness and personal growth. With an unwavering belief in their clients' potential, they inspire, motivate, and educate. A trainer's presence exudes a contagious energy, as they lead workouts, tailor programs, and provide guidance to unlock peak performance. They become confidants and cheerleaders, instilling discipline and fostering resilience. Through their guidance and support, a trainer empowers others to surpass their limitations, fostering a lifelong commitment to health, well-being, and self-improvement.",
    specialty: "Soldier",
    image: villager40Image,
  }),
  41: new Villager({
    id: 41,
    name: "Sean",
    occupation: "Translator",
    description:
      "A translator, adorned in language's vibrant tapestry, bridges the gaps between cultures and worlds. With a keen ear and a nimble mind, they decipher the nuances of one language and transform it into another with precision and fluency. Their presence carries the weight of cultural exchange, facilitating understanding and fostering connections. A translator's expertise unlocks the beauty of diverse narratives, rendering them accessible to a global audience. They become conduits of expression, traversing linguistic boundaries with grace, ensuring that words retain their essence and stories transcend borders. Through their craft, they harmonize the symphony of human communication.",
    specialty: "Spy",
    image: villager41Image,
  }),
  42: new Villager({
    id: 42,
    name: "Tensa",
    occupation: "Builder",
    description:
      "A builder, adorned in a hardhat and work boots, embodies the essence of construction and creation. With skilled hands and a meticulous eye, they transform architectural plans into tangible structures. From foundations to roofs, their craftsmanship brings dreams to life. With tools and materials as their medium, they lay the groundwork for communities to flourish. A builder's presence exudes resilience and determination, as they navigate the challenges of the job, adapting to unforeseen obstacles. Through their labor, they shape the physical landscape, leaving behind a legacy of structures that stand as testaments to their skill and dedication.",
    specialty: "Builder",
    image: villager42Image,
  }),
  43: new Villager({
    id: 43,
    name: "Stig",
    occupation: "LUAnist",
    description:
      "A coder, adorned in the glow of a screen, epitomizes the fusion of logic and creativity. With nimble fingers and a mind adept in languages of code, they orchestrate the dance of digital realms. Lines of syntax become their paintbrush, algorithms their composition. A coder's presence radiates an insatiable curiosity and problem-solving prowess. They navigate the depths of complex systems, crafting software and applications that shape our digital landscape. Through their lines of code, they manifest ideas into interactive reality, weaving the fabric of technology that touches every aspect of our modern lives.",
    specialty: "Builder",
    image: villager43Image,
  }),
  44: new Villager({
    id: 44,
    name: "Tiger",
    occupation: "Rancher",
    description:
      "A rancher, adorned in rugged attire, embodies the essence of land stewardship and animal husbandry. With weathered hands and a deep connection to the earth, they oversee vast expanses of grazing land. Their presence exudes a blend of hard work and devotion, as they tend to livestock, ensuring their well-being and sustainable management. From sunrise to sunset, they navigate the cycles of nature, nurturing herds and balancing ecosystems. A rancher's role extends beyond the caretaking of animals; they safeguard traditions, preserve open landscapes, and nourish communities through the sustainable production of food and resources.",
    specialty: "Healer",
    image: villager44Image,
  }),
  45: new Villager({
    id: 45,
    name: "TJ",
    occupation: "Sea Captain",
    description:
      "A sea captain, adorned in a weathered coat, commands the boundless expanse with seasoned authority. With eyes that have witnessed both tempests and tranquility, they navigate the ever-shifting tides. Their hands, calloused yet steady, guide the helm, charting a course through uncharted waters. A master of maritime lore and seamanship, their presence exudes a blend of courage and experience. They harness the power of wind and wave, leading a crew through perilous journeys and distant horizons. A sea captain's spirit reflects the timeless allure of the open sea, embodying adventure, resilience, and the unbreakable bond between sailor and ocean.",
    specialty: "Soldier",
    image: villager45Image,
  }),
  46: new Villager({
    id: 46,
    name: "Sandpiper",
    occupation: "Knife Bird",
    description:
      "A malevolent overlord of the pass, that seems strangely to look kindly upon your little town.",
    specialty: "Soldier",
    image: villager46Image,
  }),
  47: new Villager({
    id: 47,
    name: "Nick",
    occupation: "Bushwhacker",
    description:
      "A bushwhacker, clad in rugged attire, embodies the spirit of wilderness survival and resourcefulness. With an uncanny ability to navigate dense foliage and unforgiving terrain, they traverse untamed landscapes with stealth and determination. Their presence carries the essence of adaptability, as they expertly overcome obstacles and exploit nature's bounty for sustenance and shelter. Equipped with sharp tools and wilderness skills, they forge paths where none exist, blending into the wilderness like a shadow. A bushwhacker's spirit thrives in the untamed wilds, embracing the challenges and embracing the freedom of the natural world.",
    specialty: "Scout",
    image: villager47Image,
  }),
  48: new Villager({
    id: 48,
    name: "Dom",
    occupation: "Actual Spy",
    description:
      "A spy, draped in secrecy, personifies the art of subterfuge and intelligence gathering. With a chameleon-like ability to blend into any environment, they become an invisible observer, extracting vital information with precision. Their presence is shrouded in mystery, their true identity concealed behind a veil of false personas. A master of manipulation and disguise, they navigate the shadows, always one step ahead. A spy's mind is a labyrinth of strategy, their actions driven by duty and allegiance. Their covert operations shape the course of history, as they work silently to protect national interests and uncover hidden truths.",
    specialty: "Spy",
    image: villager48Image,
  }),
  49: new Villager({
    id: 49,
    name: "Pardzival",
    occupation: "Politician",
    description:
      "A politician, adorned in tailored suits, embodies the art of governance and public service. With persuasive rhetoric and calculated charisma, they navigate the intricacies of politics. Their presence exudes ambition and a hunger for power, as they engage in the delicate dance of public opinion. A politician's mind is a tapestry of strategy and compromise, as they strive to shape policies and lead nations. While some embody integrity and strive for the betterment of society, others succumb to corruption and self-interest. Their influence can sway nations and impact countless lives, leaving a lasting legacy in the annals of history.",
    specialty: "Spy",
    image: villager49Image,
  }),
};
