// --- THE APOTHECARY DATABASE ---
export const ingredientDatabase = [
    { id: "iron", aliases: ["Eisen", "Floradix", "iron supplement"], realName: "Iron", fantasyName: "Ferrix Root Extract", description: "Forged in the earth, red as the heart.", sprite: "assets/iron.png", baseColor: "#A93226", sound: "SFX/02stomp.wav" },
    { id: "vitc", aliases: ["vit c", "vitamin c", "ascorbic acid"], realName: "Vitamin C", fantasyName: "Sunfruit Essence", description: "Pressed from the golden fruits of the High Gardens.", sprite: "assets/vitc.png", baseColor: "#F1C40F", sound: "SFX/01Shimmer.wav" },
    { id: "vitd", realName: "Vitamin D", aliases: ["vit d", "vitamin d3", "d3"],fantasyName: "Liquid Sunlight", description: "Captured rays of dawn in a bottle.", sprite: "assets/vitd.png", baseColor: "#F39C12", sound: "SFX/01Shimmer.wav" },
    { id: "b12", realName: "Vitamin B12", aliases: ["b12", "b-12", "cobalamin", "vitamin b"], fantasyName: "Sanguine Vitalis", description: "Forged from deep earth lifeblood, it restores the ebbing strength of weary travelers.", sprite: "assets/b12.png", baseColor: "#2E86C1", sound: "SFX/01Shimmer.wav" },
    { id: "magnesium", realName: "Magnesium", fantasyName: "Moonstone Dust", description: "Ground from stones fallen from the lunar surface.", sprite: "assets/magnesium.png", baseColor: "#8E44AD", sound: "SFX/02stomp.wav" },
    { id: "zinc", realName: "Zinc", fantasyName: "Galvanic Shards", description: "Charged metallic fragments that spark vitality.", sprite: "assets/zinc.png", baseColor: "#7F8C8D", sound: "SFX/02stomp.wav" },
    { id: "omega3", realName: "Omega-3", aliases: ["omega 3 oil", "fish oil", "seawee", "omega 3"], fantasyName: "Leviathan Oil", description: "Extracted from the depths of the Midnight Ocean.", sprite: "assets/omega3.png", baseColor: "#3498DB", sound: "SFX/01Shimmer.wav" },
    { id: "multi", realName: "Multivitamin", aliases: ["multivitamins", "multi vitamin", "multi-vitamin"],fantasyName: "Elixir of the All-Seeing", description: "A complex brew containing trace amounts of everything.", sprite: "assets/multi.png", baseColor: "#E67E22", sound: "SFX/01Shimmer.wav" },
    { id: "probiotic", realName: "Probiotics", aliases: ["probiotic", "probiotics"], fantasyName: "Flora Spirit Cultures", description: "Micro-spirits that guard the inner sanctum.", sprite: "assets/probiotic.png", baseColor: "#27AE60", sound: "SFX/01Shimmer.wav" },
    { id: "ashwagandha", realName: "Ashwagandha", fantasyName: "Root of Ancient Calm", description: "A grounding root used by forest elders.", sprite: "assets/ashwa.png", baseColor: "#6E2C00", sound: "SFX/02stomp.wav" },
    { id: "creatine", realName: "Creatine", aliases: ["creatin", "kreatin"],fantasyName: "Stoneblood Powder", description: "A gritty powder that fuels the muscles of giants.", sprite: "assets/creatine.png", baseColor: "#BDC3C7", sound: "SFX/02stomp.wav" },
    { id: "melatonin", realName: "Melatonin", fantasyName: "Dreamweaver's Mist", description: "A vapor gathered from the Valley of Sleep.", sprite: "assets/melatonin.png", baseColor: "#1A237E", sound: "SFX/01Shimmer.wav" },
    { id: "calcium", realName: "Calcium", fantasyName: "Bonefort Calcification", description: "Strengthens the internal skeletal framework.", sprite: "assets/calcium.png", baseColor: "#ECF0F1", sound: "SFX/02stomp.wav" },
    { id: "vita", realName: "Vitamin A", fantasyName: "Falcon-Eye Berries", description: "Sharpens the vision even in the dimmest dungeons.", sprite: "assets/vita.png", baseColor: "#E74C3C", sound: "SFX/01Shimmer.wav" },
    { id: "vite", realName: "Vitamin E", fantasyName: "Balm", description: "Protects the cells from the rot of time.", sprite: "assets/vite.png", baseColor: "#16A085", sound: "SFX/01Shimmer.wav" },
    { id: "turmeric", realName: "Turmeric", fantasyName: "Golden Hearth Resin", description: "A warm fire to soothe the aching joints.", sprite: "assets/turmeric.png", baseColor: "#D4AC0D", sound: "SFX/02stomp.wav" },
    { id: "electrolytes", realName: "Electrolytes", fantasyName: "Thunder-Tap Water", description: "Replaces the lightning lost during great exertion.", sprite: "assets/electro.png", baseColor: "#5DADE2", sound: "SFX/01Shimmer.wav" },
    { id: "protein", realName: "Protein", aliases: ["proteins", "protein powder", "amino acids", "whey protein", "vegan protein"], fantasyName: "Titan's Draught", description: "Thick and heavy, it feeds the muscles as stone feeds the mountain.", sprite: "assets/protein.png", baseColor: "#1E8449", sound: "SFX/02stomp.wav" },
    { id: "psyllium", realName: "Psyllium", fantasyName: "Aeolian Husks", description: "From the fluvian gorge of an island.", sprite: "assets/psyllium.png", baseColor: "#1E8449", sound: "SFX/02stomp.wav" },
    { id: "prebiotics", realName: "Prebiotics", fantasyName: "Prima Materia", description: "", sprite: "assets/prebiotics.png", baseColor: "#1E8449", sound: "SFX/02stomp.wav" },
    { id: "bcomplex", realName: "Vit B Complex", aliases: ["vitamin b complex", "b-complex", "b complex"], fantasyName: "Mercurial Oil", description: ".", sprite: "assets/bcomplex.png", baseColor: "#1E8449", sound: "SFX/02stomp.wav" },
    { id: "collagen", realName: "Collagen", fantasyName: "Alabaster Salve", description: ".", sprite: "assets/collagen.png", baseColor: "#1E8449", sound: "SFX/02stomp.wav" },
    { id: "mushroom", realName: "Mushroom", aliases: ["lions mane", "lion's mane"], fantasyName: "Ivory King", description: "Tinder mushroom of an elden forest.", sprite: "assets/mushroom.png", baseColor: "#dfdebf", sound: "SFX/02stomp.wav" },
    { id: "chasteberry", realName: "Chasteberry", aliases: ["mönchspfeffer", "chaste berry"], fantasyName: "Monk's Elysium", description: ".", sprite: "assets/chasteperry.png", baseColor: "#1E8449", sound: "SFX/02stomp.wav" },
    { id: "q10", realName: "Coenzyme Q10", aliases: ["coenzyme q-10", "coenzym q10"],fantasyName: "Aeonian Flux", description: ".", sprite: "assets/chasteberry.png", baseColor: "#1E8449", sound: "SFX/02stomp.wav" },
    { id: "vegvit", realName: "Vegan Vitamines", aliases: ["vegan vitamins", "vegan multivitamin", "vegan vitamin"],fantasyName: "Sylvan Elixir", description: "Bottled from the first dew of the elder trees, it nourishes the body as the forest nourishes the soul.", sprite: "assets/vegvit.png", baseColor: "#1E8449", sound: "SFX/02stomp.wav" }
];

// --- PROGRESSION & TITLES ---
export const alchemyProgress = {
    levels: [
        { title: "Kitchen Tinkerer", minXP: 0 },
        { title: "Flask Washer", minXP: 50 },
        { title: "Mortar Novice", minXP: 120 },
        { title: "Herb-Gatherer", minXP: 250 },
        { title: "Hedge Alchemist", minXP: 450 },
        { title: "Potion Brewer", minXP: 700 },
        { title: "Copper-Tier Craftsman", minXP: 1000 },
        { title: "Apothecary Clerk", minXP: 1400 },
        { title: "Distiller of Essences", minXP: 1900 },
        { title: "Silver-Circle Initiate", minXP: 2500 },
        { title: "Transmutationist", minXP: 3200 },
        { title: "Master of Elixirs", minXP: 4000 },
        { title: "Grand Curator of Tonics", minXP: 5000 },
        { title: "Aether-Chaser", minXP: 6200 },
        { title: "Void-Stiller", minXP: 7500 },
        { title: "Emerald Arch-Alchemist", minXP: 9000 },
        { title: "Keeper of the Great Work", minXP: 11000 },
        { title: "Ascended Elementalist", minXP: 13500 },
        { title: "Sovereign of Souls", minXP: 16500 },
        { title: "Supreme Arch-Mage of Secrets", minXP: 20000 }
    ],
    xpRewards: {
        itemTaken: 10,
        dayComplete: 50
    }
};

// --- REWARDS LIST ---
export const rewards = [
    { id: "mortar", name: "Novice Mortar", unlockXP: 50, sprite: "assets/mortar.png", description: "A stone tool for crushing herbs." },
    { id: "cauldron", name: "Copper Cauldron", unlockXP: 120, sprite: "assets/cauldron.png", description: "Perfect for even heat distribution." },
    { id: "vials", name: "Crystal Vials", unlockXP: 250, sprite: "assets/vials.png", description: "Glassware that never cracks." },
    { id: "rod", name: "Silver Stirring Rod", unlockXP: 350, sprite: "assets/rod.png", description: "Neutralizes toxins instantly." },
    { id: "astrolobe", name: "Arcane Astrolobe", unlockXP: 500, sprite: "assets/astrolobe.png", description: "A rotating silver map of the heavens." },
    { id: "grim", name: "Grimoire of the Rubedo", unlockXP: 700, sprite: "assets/grim.png", description: "Arcane tome of transmutation." },
    { id: "signet", name: "Ouroboros Signet", unlockXP: 900, sprite: "assets/signet.png", description: "The serpent devouring its tail." },
    { id: "vintage", name: "Sunken Vintage", unlockXP: 1100, sprite: "assets/vintage.png", description: "Finest vintage from a sunken ship." },
    { id: "skull", name: "Crystal Skull", unlockXP: 1200, sprite: "assets/skull.png", description: "Contains a glowing and previously unknown ore." },
    { id: "pearl", name: "Pearl of the Abyss", unlockXP: 1300, sprite: "assets/pearl.png", description: "Nacreous orb from below the deepest trench." },
    { id: "cinnabar", name: "Cinnabar Dragon Seal", unlockXP: 1500, sprite: "assets/cinnabar.png", description: "Arcane seal from a far away land." },
    { id: "cabinet", name: "Collection Cabinet", unlockXP: 1700, sprite: "assets/cabinet.png", description: "For your collection." },
    { id: "chalice", name: "Chalice of the Deep", unlockXP: 1900, sprite: "assets/chalice.png", description: "From a labyrinthian tomb below a university." },
    { id: "hourglass", name: "Aeonian Hourglass", unlockXP: 2000, sprite: "assets/hourglass.png", description: "Filled with sparkling blue sand." },
    { id: "tooth", name: "Basilisk Tooth", unlockXP: 2200, sprite: "assets/tooth.png", description: "The real deal." },
    { id: "scroll", name: "Ancient Scroll", unlockXP: 2400, sprite: "assets/scroll.png", description: "A lost hint to the secret of secrets." },
    { id: "candelabra", name: "Eldrytch Candelabra", unlockXP: 3200, sprite: "assets/candelabra.png", description: "Hides an impossible flame." },
    { id: "mask", name: "Mask of Mutation", unlockXP: 4000, sprite: "assets/mask.png", description: "An relic that it itself an enigma." },
    { id: "amber", name: "Hyperborean Amber", unlockXP: 5000, sprite: "assets/amber.png", description: "Surviving piece of antiquity." },
    { id: "chronos", name: "Heart of Chronos", unlockXP: 6200, sprite: "assets/chronos.png", description: "An ancient and most intricate time piece." },
    { id: "tablet", name: "Emerald Tablet", unlockXP: 7500, sprite: "assets/tablet.png", description: "If deciphered could yield the ultimate elixir." },
    { id: "quill", name: "Phoenix Quill", unlockXP: 9000, sprite: "assets/quill.png", description: "Writes recipes in permanent fire." },
    { id: "sigil", name: "Sigil of the Unspoken", unlockXP: 11000, sprite: "assets/sigil.png", description: "Heavy disc with arcane runes." },
    { id: "obsidian", name: "Obsidian Mirror", unlockXP: 13500, sprite: "assets/obsidian.png", description: "Volcanic glass polished to perfection." },
    { id: "oricalchum", name: "Oricalchum Sextant", unlockXP: 16500, sprite: "assets/quill.png", description: "Genuine relic from Atlantis." },
    { id: "stone", name: "Philosopher's Stone", unlockXP: 20000, sprite: "assets/stone.png", description: "The peak of alchemy. Accept no substitutes." }
];

export const mysteryItems = [
    { 
        id: "somaambrosia", 
        fantasyName: "Soma Ambrosia", 
        description: "Golden nectar that hums with the vibration of the spheres.", 
        sprite: "assets/somaambrosia.png", 
        baseColor: "#F4D03F" // Gold
    },
    { 
        id: "materiaobscura", 
        fantasyName: "Materia Obscura", 
        description: "Clump of dark matter that absorbs the light around it.", 
        sprite: "assets/materiaobscura.png", 
        baseColor: "#2C3E50" // Dark Charcoal
    },

    { 
        id: "aeonianflux", 
        fantasyName: "Aeonian Flux", 
        description: "Energy trapped in a state of constant temporal shift.", 
        sprite: "assets/aeonianflux.png", 
        baseColor: "#85C1E9" // Sky Blue
    },
    { 
        id: "voidsalts", 
        fantasyName: "Void Salts", 
        description: "Crystals harvested from the shores of a dried-up cosmic sea.", 
        sprite: "assets/voidsalts.png", 
        baseColor: "#FDFEFE" // Stark White
    },
    { 
        id: "eldritchcatalyst", 
        fantasyName: "Eldritch Catalyst", 
        description: "Unstable, bubbling bloom that bridges incompatible elements.", 
        sprite: "assets/eldritchcatalyst.png", 
        baseColor: "#27AE60" // Toxic Green
    },
    { 
        id: "ouroboroselixir", 
        fantasyName: "Ouroboros Elixir", 
        description: "Liquid loop that feeds upon itself eternally.", 
        sprite: "assets/ouroboroselixir.png", 
        baseColor: "#8E44AD" // Purple
    }
];
