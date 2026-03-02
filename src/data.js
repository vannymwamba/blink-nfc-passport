export const MURALS = [
    { id: 1, name: "Terminal of Time", artist: "NorthHouse", zone: "OTR", color: "#F5C800" },
    { id: 2, name: "Clive", artist: "Studio Clive", zone: "Downtown Core", color: "#FF6B35" },
    { id: 3, name: "zoOTRopia", artist: "Artworks Cincy", zone: "OTR", color: "#4FC3F7" },
    { id: 4, name: "River Gaze", artist: "Local Collective", zone: "Rhine District", color: "#81C784" },
    { id: 5, name: "Mural by Jeks", artist: "Jeks", zone: "Vine Street", color: "#CE93D8" },
    { id: 6, name: "Mural by Pref", artist: "Pref", zone: "Washington Park", color: "#F48FB1" },
    { id: 7, name: "Light Bridge", artist: "Brave Berlin", zone: "Covington", color: "#80DEEA" },
    { id: 8, name: "Ember Field", artist: "AGAR Studio", zone: "Downtown Core", color: "#FFAB40" },
    { id: 9, name: "City Pulse", artist: "Urban Lens", zone: "OTR", color: "#A5D6A7" },
];

export const MAP_PINS = [
    { id: 1, x: 42, y: 25, emoji: "⏱" },
    { id: 3, x: 30, y: 38, emoji: "🌀" },
    { id: 9, x: 55, y: 32, emoji: "⚡" },
    { id: 2, x: 68, y: 45, emoji: "🎭" },
    { id: 8, x: 72, y: 58, emoji: "🔥" },
    { id: 4, x: 35, y: 55, emoji: "🌊" },
    { id: 5, x: 45, y: 68, emoji: "🎨" },
    { id: 6, x: 60, y: 72, emoji: "✦" },
    { id: 7, x: 50, y: 82, emoji: "🌉" },
];

export const REWARDS_DATA = [
    {
        name: "EXPLORER", req: 5, icon: "🗺", color: "#C0C0C0",
        items: ["Hidden digital art piece — passport holders only", "Entry into nightly prize draw", "Shareable BLINK stamp card"]
    },
    {
        name: "NAVIGATOR", req: 10, icon: "🧭", color: "#F5C800",
        items: ["Curated Urban Hikers neighborhood guide", "Discount at participating local businesses", "Artist behind-the-scenes content"]
    },
    {
        name: "CARTOGRAPHER", req: 9, icon: "✦", color: "#FF8C00",
        items: ["Limited-edition BLINK 2026 digital collectible", "Wall of Explorers recognition", "Grand Prize drawing eligibility"]
    },
];

export const STEPS = [
    { id: "tap", icon: "📡", title: "Tap the NFC tag", desc: "Phone taps the placard at the mural. No app needed." },
    { id: "stamp", icon: "🔖", title: "Stamp drops", desc: "Visit is logged, passport updates instantly." },
    { id: "passport", icon: "📖", title: "View your passport", desc: "Live stamp grid showing your BLINK route." },
    { id: "map", icon: "🗺", title: "Track your route", desc: "Interactive map of visited and unvisited murals." },
    { id: "rewards", icon: "🏆", title: "Unlock rewards", desc: "Collect tiers to earn digital collectibles & prizes." },
];
