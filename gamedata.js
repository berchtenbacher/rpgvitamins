// --- THE APOTHECARY DATABASE ---
export const ingredientDatabase = [
    { id: "iron", realName: "Iron", fantasyName: "Ferrix Root Extract", description: "Forged in the earth, red as the heart.", sprite: "assets/iron.png", baseColor: "#A93226", sound: "SFX/02stomp.wav" },
    { id: "vitc", realName: "Vitamin C", fantasyName: "Sunfruit Essence", description: "Pressed from the golden fruits of the High Gardens.", sprite: "assets/vitc.png", baseColor: "#F1C40F", sound: "SFX/01Shimmer.wav" },
    { id: "vitd", realName: "Vitamin D", fantasyName: "Liquid Sunlight", description: "Captured rays of dawn in a bottle.", sprite: "assets/vitd.png", baseColor: "#F39C12", sound: "SFX/01Shimmer.wav" },
    { id: "b12", realName: "Vitamin B12", fantasyName: "Sanguine Vitalis", description: "Forged from deep earth lifeblood, it restores the ebbing strength of weary travelers.", sprite: "assets/b12.png", baseColor: "#2E86C1", sound: "SFX/01Shimmer.wav" },
    { id: "magnesium", realName: "Magnesium", fantasyName: "Moonstone Dust", description: "Ground from stones fallen from the lunar surface.", sprite: "assets/magnesium.png", baseColor: "#8E44AD", sound: "SFX/02stomp.wav" },
    { id: "zinc", realName: "Zinc", fantasyName: "Galvanic Shards", description: "Charged metallic fragments that spark vitality.", sprite: "assets/zinc.png", baseColor: "#7F8C8D", sound: "SFX/02stomp.wav" },
    { id: "omega3", realName: "Omega-3", fantasyName: "Leviathan Oil", description: "Extracted from the depths of the Midnight Ocean.", sprite: "assets/omega3.png", baseColor: "#3498DB", sound: "SFX/01Shimmer.wav" },
    { id: "multi", realName: "Multivitamin", fantasyName: "Elixir of the All-Seeing", description: "A complex brew containing trace amounts of everything.", sprite: "assets/multi.png", baseColor: "#E67E22", sound: "SFX/01Shimmer.wav" },
    { id: "probiotic", realName: "Probiotics", fantasyName: "Flora Spirit Cultures", description: "Micro-spirits that guard the inner sanctum.", sprite: "assets/probiotic.png", baseColor: "#27AE60", sound: "SFX/01Shimmer.wav" },
    { id: "ashwagandha", realName: "Ashwagandha", fantasyName: "Root of Ancient Calm", description: "A grounding root used by forest elders.", sprite: "assets/ashwa.png", baseColor: "#6E2C00", sound: "SFX/02stomp.wav" },
    { id: "creatine", realName: "Creatine", fantasyName: "Stoneblood Powder", description: "A gritty powder that fuels the muscles of giants.", sprite: "assets/creatine.png", baseColor: "#BDC3C7", sound: "SFX/02stomp.wav" },
    { id: "melatonin", realName: "Melatonin", fantasyName: "Dreamweaver's Mist", description: "A vapor gathered from the Valley of Sleep.", sprite: "assets/melatonin.png", baseColor: "#1A237E", sound: "SFX/01Shimmer.wav" },
    { id: "calcium", realName: "Calcium", fantasyName: "Bonefort Calcification", description: "Strengthens the internal skeletal framework.", sprite: "assets/calcium.png", baseColor: "#ECF0F1", sound: "SFX/02stomp.wav" },
    { id: "vita", realName: "Vitamin A", fantasyName: "Falcon-Eye Berries", description: "Sharpens the vision even in the dimmest dungeons.", sprite: "assets/vita.png", baseColor: "#E74C3C", sound: "SFX/01Shimmer.wav" },
    { id: "vite", realName: "Vitamin E", fantasyName: "Balm", description: "Protects the cells from the rot of time.", sprite: "assets/vite.png", baseColor: "#16A085", sound: "SFX/01Shimmer.wav" },
    { id: "turmeric", realName: "Turmeric", fantasyName: "Golden Hearth Resin", description: "A warm fire to soothe the aching joints.", sprite: "assets/turmeric.png", baseColor: "#D4AC0D", sound: "SFX/02stomp.wav" },
    { id: "electrolytes", realName: "Electrolytes", fantasyName: "Thunder-Tap Water", description: "Replaces the lightning lost during great exertion.", sprite: "assets/electro.png", baseColor: "#5DADE2", sound: "SFX/01Shimmer.wav" },
    { id: "protein", realName: "protein", fantasyName: "Titan's Draught", description: "Thick and heavy, it feeds the muscles as stone feeds the mountain.", sprite: "assets/protein.png", baseColor: "#1E8449", sound: "SFX/02stomp.wav" },
    { id: "vegvit", realName: "Vegan Vitamines", fantasyName: "Sylvan Elixir", description: "Bottled from the first dew of the elder trees, it nourishes the body as the forest nourishes the soul.", sprite: "assets/vegvit.png", baseColor: "#1E8449", sound: "SFX/02stomp.wav" }
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
    { id: "cauldron", name: "Copper Cauldron", unlockXP: 300, sprite: "assets/cauldron.png", description: "Perfect for even heat distribution." },
    { id: "vials", name: "Crystal Vials", unlockXP: 550, sprite: "assets/vials.png", description: "Glassware that never cracks." },
    { id: "rod", name: "Silver Stirring Rod", unlockXP: 900, sprite: "assets/rod.png", description: "Neutralizes toxins instantly." },
    { id: "scroll", name: "Ancient Scroll", unlockXP: 2000, sprite: "assets/scroll.png", description: "Contains lost recipe secrets." },
    { id: "quill", name: "Phoenix Quill", unlockXP: 3800, sprite: "assets/quill.png", description: "Writes recipes in permanent fire." },
    { id: "stone", name: "Philosopher's Stone", unlockXP: 5000, sprite: "assets/stone.png", description: "The ultimate peak of Alchemy." }
];

export const mysteryItem = {
    fantasyName: "Unknown Concoction",
    description: "An unlabeled bottle sits on your shelf. Be careful.",
    sprite: "assets/mystery.png",
    baseColor: "#555555"
};