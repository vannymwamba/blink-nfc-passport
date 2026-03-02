import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AGAR_LOGO = "data:image/jpeg;base64,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";

const MURALS = [
  { id: 1, name: "Terminal of Time", artist: "NorthHouse", zone: "OTR", color: "#F5C800", emoji: "⏱", sponsor: "AGAR", x: 42, y: 25 },
  { id: 2, name: "Clive", artist: "Studio Clive", zone: "Downtown Core", color: "#FF6B35", emoji: "🎭", sponsor: "Kroger", x: 68, y: 45 },
  { id: 3, name: "zoOTRopia", artist: "Artworks Cincy", zone: "OTR", color: "#4FC3F7", emoji: "🌀", sponsor: "P&G", x: 30, y: 38 },
  { id: 4, name: "River Gaze", artist: "Local Collective", zone: "Rhine District", color: "#81C784", emoji: "🌊", sponsor: "FC Cincy", x: 35, y: 55 },
  { id: 5, name: "Mural by Jeks", artist: "Jeks", zone: "Vine Street", color: "#CE93D8", emoji: "🎨", sponsor: "MadTree", x: 45, y: 68 },
  { id: 6, name: "Mural by Pref", artist: "Pref", zone: "Washington Park", color: "#F48FB1", emoji: "✦", sponsor: "Tide", x: 60, y: 72 },
  { id: 7, name: "Light Bridge", artist: "Brave Berlin", zone: "Covington", color: "#80DEEA", emoji: "🌉", sponsor: "Braxton", x: 50, y: 82 },
  { id: 8, name: "Ember Field", artist: "AGAR Studio", zone: "Downtown Core", color: "#FFAB40", emoji: "🔥", sponsor: "AGAR", x: 72, y: 58 },
  { id: 9, name: "City Pulse", artist: "Urban Lens", zone: "OTR", color: "#A5D6A7", emoji: "⚡", sponsor: "Urban Hikers", x: 55, y: 32 },
  { id: 10, name: "Agent Bonus", artist: "Urban Hikers Agent", zone: "Roaming", color: "#F5C800", emoji: "🦺", sponsor: "Urban Hikers", isAgent: true, x: 20, y: 65 },
];

const REWARDS = [
  {
    tier: "EXPLORER", req: 5, icon: "🗺", color: "#C0C0C0", sponsor: "AGAR Studio", zone: "G",
    items: ["Hidden digital art piece", "Entry into prize draw", "BLINK stamp card"]
  },
  {
    tier: "NAVIGATOR", req: 10, icon: "🧭", color: "#FFD700", sponsor: "P&G", zone: "G",
    items: ["VIP Lounge access", "Exclusive merch discount", "Digital badge"]
  },
  {
    tier: "CARTOGRAPHER", req: 20, icon: "✦", color: "#FF8C00", sponsor: "City of Cincinnati", zone: "G",
    items: ["Limited-edition digital collectible", "Wall of Explorers recognition", "Grand Prize eligibility"]
  },
];

// ─── Sponsor Badge Component ──────────────────────────────────────────────────
function SponsorBadge({ type = "agar", size = "sm", label = "Presented by", zone = "B" }) {
  const isAgar = type === "agar";
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.03)", border: "1px solid #1a1a2a", borderRadius: 10, padding: size === "sm" ? "5px 10px" : "10px 16px" }}>
      <ZoneLabel text={zone} flat />
      <div style={{ width: size === "sm" ? 22 : 32, height: size === "sm" ? 22 : 32, borderRadius: "50%", background: isAgar ? "#F5C800" : "#00D4C8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: size === "sm" ? 12 : 16 }}>
        {isAgar ? "A" : "U"}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 8, color: "#444", textTransform: "uppercase", letterSpacing: 1, fontFamily: "'DM Mono',monospace" }}>{label}</span>
        <span style={{ fontSize: size === "sm" ? 11 : 14, color: isAgar ? "#F5C800" : "#fff", fontFamily: "'Bebas Neue',sans-serif", letterSpacing: 1.5 }}>
          {isAgar ? "AGAR STUDIO" : "URBAN HIKERS"}
        </span>
      </div>
    </div>
  );
}

// ─── Sponsor Zone Label ───────────────────────────────────────────────────────
function ZoneLabel({ text, flat = false }) {
  return (
    <div style={{
      position: flat ? "static" : "absolute", top: -8, right: -8,
      width: 18, height: 18, borderRadius: 4, background: "#00D4C8",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 10, color: "#000", fontWeight: "bold", fontFamily: "'Bebas Neue',sans-serif",
      boxShadow: "0 2px 8px rgba(0,212,200,0.3)", zIndex: 5
    }}>
      {text}
    </div>
  );
}

export default function PassportApp() {
  const [screen, setScreen] = useState("tap");
  const [stampKey, setStampKey] = useState(0);
  const [showStamp, setShowStamp] = useState(false);
  const [collectedMurals, setCollectedMurals] = useState(() => {
    const saved = localStorage.getItem("blink_collected");
    return saved ? JSON.parse(saved) : [1, 2, 3, 4];
  });
  const [trail, setTrail] = useState(() => {
    const saved = localStorage.getItem("blink_trail");
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, time: "8:12 PM", stamp: Date.now() - 100000 },
      { id: 2, time: "8:45 PM", stamp: Date.now() - 80000 },
      { id: 3, time: "9:15 PM", stamp: Date.now() - 50000 },
      { id: 4, time: "9:50 PM", stamp: Date.now() - 20000 },
    ];
  });

  useEffect(() => {
    localStorage.setItem("blink_collected", JSON.stringify(collectedMurals));
  }, [collectedMurals]);

  useEffect(() => {
    localStorage.setItem("blink_trail", JSON.stringify(trail));
  }, [trail]);

  const COLLECTED_COUNT = collectedMurals.length;
  const TOTAL_COUNT = MURALS.length;
  const PCT = Math.round((COLLECTED_COUNT / TOTAL_COUNT) * 100);

  const handleTap = useCallback(() => {
    setShowStamp(false);
    setScreen("stamp");
    setStampKey(k => k + 1);

    const uncollected = MURALS.filter(m => !collectedMurals.includes(m.id));
    const targetMural = uncollected.length > 0
      ? uncollected[Math.floor(Math.random() * uncollected.length)]
      : MURALS[Math.floor(Math.random() * MURALS.length)];

    setTimeout(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      if (!collectedMurals.includes(targetMural.id)) {
        setCollectedMurals(prev => [...new Set([...prev, targetMural.id])]);
        setTrail(prev => [...prev, { id: targetMural.id, time: timeStr, stamp: Date.now() }]);
      }
      window._lastMural = targetMural;
      setShowStamp(true);
    }, 100);

    setTimeout(() => setScreen("trail"), 3200);
  }, [collectedMurals]);

  const resetData = () => {
    setCollectedMurals([]);
    setTrail([]);
    setScreen("tap");
  };

  const NAV = [
    { id: "tap", icon: "📡", label: "TAP" },
    { id: "trail", icon: "🛤", label: "TRAIL" },
    { id: "passport", icon: "📖", label: "STAMPS" },
    { id: "map", icon: "🗺", label: "MAP" },
    { id: "rewards", icon: "🏆", label: "REWARDS" },
  ];

  const STEPS = [
    { id: "tap", icon: "📡", title: "Tap the NFC tag", desc: "Phone taps the mural placard." },
    { id: "stamp", icon: "🔖", title: "Stamp drops", desc: "Visit logged instantly." },
    { id: "trail", icon: "🛤", title: "View your trail", desc: "Ordered route tracking." },
    { id: "passport", icon: "📖", title: "Passport stamps", desc: "Visual collection grid." },
    { id: "rewards", icon: "🏆", title: "Unlock rewards", desc: "Earn co-branded prizes." },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#06060E", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "'Space Grotesk',sans-serif", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Bebas+Neue&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 2px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #2a2a2a; }
        @keyframes pulse { 0%,100%{transform:scale(1);opacity:.6} 50%{transform:scale(1.12);opacity:1} }
        @keyframes ripple { 0%{transform:scale(.8);opacity:1} 100%{transform:scale(1.25);opacity:0} }
        .side-step:hover { background: rgba(245,200,0,0.05); border-color: rgba(245,200,0,0.15) !important; }
      `}</style>

      <button onClick={resetData} style={{ position: "fixed", top: 20, right: 20, zIndex: 100, background: "rgba(255,255,255,0.05)", border: "1px solid #222", color: "#444", fontFamily: "'DM Mono',monospace", fontSize: 10, padding: "6px 14px", borderRadius: 20, cursor: "pointer" }}>RESET DATA</button>

      <div style={{ display: "flex", gap: 52, alignItems: "center" }}>
        <div style={{ width: 280, color: "#ccc", display: window.innerWidth < 1000 ? 'none' : 'block' }}>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: 3, color: "#F5C800", marginBottom: 14, textTransform: "uppercase" }}>BLINK 2026 · Cincinnati</div>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 40, color: "#fff", lineHeight: 1, marginBottom: 10 }}>NFC MURAL<br />PASSPORT</div>
          <div style={{ fontSize: 12.5, color: "#555", lineHeight: 1.65, marginBottom: 22 }}>Walk the art. Collect the city. Tap any mural to start.</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 22 }}>
            {STEPS.map((step, i) => (
              <div key={step.id} onClick={() => setScreen(step.id)} className="side-step" style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer", padding: "9px 10px", borderRadius: 10, border: `1px solid ${screen === step.id ? "rgba(245,200,0,0.25)" : "transparent"}`, background: screen === step.id ? "rgba(245,200,0,0.06)" : "transparent", transition: "all .2s" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: screen === step.id ? "#F5C800" : "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue',sans-serif", fontSize: 11, color: screen === step.id ? "#000" : "#555", flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: screen === step.id ? "#fff" : "#888", marginBottom: 2 }}>{step.icon} {step.title}</div>
                  <div style={{ fontSize: 11, color: "#3a3a3a", lineHeight: 1.4 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Share Card Preview - Zone H */}
          {trail.length > 0 && (
            <div style={{ marginTop: 24, padding: "16px", background: "rgba(108, 43, 217, 0.05)", borderRadius: 12, border: "1px solid rgba(108, 43, 217, 0.2)" }}>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "#6C2BD9", marginBottom: 8, letterSpacing: 2 }}>ZONE H: SOCIAL REACH</div>
              <div style={{ background: "#06060E", padding: 12, borderRadius: 8, border: "1px solid #1a1a1a" }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#F5C800", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🛤</div>
                  <div style={{ fontFamily: "'Bebas Neue'", fontSize: 16, color: "#fff" }}>MY BLINK TRAIL</div>
                </div>
                <div style={{ fontSize: 10, color: "#555", fontFamily: "'DM Mono'" }}>
                  {trail.slice(0, 3).map(t => MURALS.find(m => m.id === t.id)?.name).join(" → ")}
                  {trail.length > 3 && " ..."}
                </div>
              </div>
            </div>
          )}

          <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 14, marginTop: 20 }}>
            <div style={{ position: "relative", marginBottom: 14 }}>
              <ZoneLabel text="A" />
              <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#0f0f0f", border: "1px dashed rgba(245,200,0,0.3)", borderRadius: 10, padding: "10px 12px" }}>
                <img src={AGAR_LOGO} alt="Logo" style={{ width: 40, height: 40, borderRadius: "50%" }} />
                <div>
                  <div style={{ fontSize: 11, color: "#F5C800", fontFamily: "'Bebas Neue'", letterSpacing: 2 }}>AGAR STUDIO</div>
                  <div style={{ fontSize: 9, color: "#444" }}>Title Sponsor</div>
                </div>
              </div>
            </div>
            <button onClick={handleTap} style={{ width: "100%", padding: "8px", background: "rgba(245,200,0,0.1)", border: "1px solid rgba(245,200,0,0.2)", borderRadius: 8, color: "#F5C800", fontSize: 11, fontFamily: "'Bebas Neue'", letterSpacing: 1, cursor: "pointer" }}>SIMULATE MURAL TAP</button>
          </div>
        </div>

        {/* ─── PHONE ──────────────────────────────────────────────────── */}
        <div style={{ width: 336, height: 676, background: "#0c0c0c", borderRadius: 44, border: "1.5px solid #252525", overflow: "hidden", position: "relative", boxShadow: "0 40px 100px rgba(0,0,0,.9)" }}>
          <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 108, height: 28, background: "#0c0c0c", borderRadius: 18, zIndex: 100, border: "1.5px solid #1a1a2a" }} />

          <AnimatePresence mode="wait">
            {screen === "tap" && (
              <motion.div key="tap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ width: "100%", height: "100%", background: "#080810", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 26px" }}>
                <SponsorBadge zone="B" />
                <div style={{ margin: "40px 0", width: 130, height: 130, borderRadius: "50%", background: "#F5C800", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 30px rgba(245,200,0,.5)", fontSize: 26, animation: "ripple 2.2s infinite" }}>📡</div>
                <div style={{ fontFamily: "'Bebas Neue'", fontSize: 28, color: "#fff", textAlign: "center" }}>Terminal<br />of Time</div>
                <button onClick={handleTap} style={{ width: "100%", padding: "14px", background: "#F5C800", borderRadius: 12, border: "none", fontFamily: "'Bebas Neue'", fontSize: 18, letterSpacing: 3, marginTop: 40, cursor: "pointer" }}>STAMP PASSPORT</button>
              </motion.div>
            )}

            {screen === "stamp" && (
              <motion.div key="stamp" style={{ width: "100%", height: "100%", background: "#080810", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <ZoneLabel text="D" />
                <motion.div initial={{ scale: 3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ fontSize: 60 }}>{window._lastMural?.emoji || "🎨"}</motion.div>
                <div style={{ marginTop: 20, color: "#fff", fontFamily: "'Bebas Neue'", fontSize: 24 }}>STAMP COLLECTED</div>
              </motion.div>
            )}

            {screen === "trail" && (
              <motion.div key="trail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ width: "100%", height: "100%", background: "#080810", overflowY: "auto", padding: "60px 20px" }}>
                <div style={{ fontFamily: "'Bebas Neue'", fontSize: 24, color: "#fff", marginBottom: 20 }}>ROUTE SEQUENCE</div>
                <button
                  onClick={() => alert("Social Share Card [Zone H] Activated")}
                  style={{ width: "100%", padding: 12, background: "#6C2BD9", border: "none", borderRadius: 10, color: "#fff", fontFamily: "'Bebas Neue'", fontSize: 14, letterSpacing: 2, marginBottom: 20, cursor: "pointer" }}
                >SHARE MY TRAIL [ZONE H]</button>
                {trail.map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", border: "2px solid #6C2BD9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#6C2BD9", flexShrink: 0 }}>{i + 1}</div>
                    <div style={{ background: "#111", borderRadius: 10, padding: 10, flex: 1 }}>
                      <div style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>{MURALS.find(m => m.id === t.id)?.name}</div>
                      <div style={{ color: "#444", fontSize: 9, fontFamily: "'DM Mono'" }}>{t.time}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {screen === "passport" && (
              <motion.div key="stamps" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ width: "100%", height: "100%", background: "#080810", overflowY: "auto", padding: "60px 20px" }}>
                <div style={{ fontFamily: "'Bebas Neue'", fontSize: 24, color: "#fff", marginBottom: 20 }}>MY STAMPS</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                  {MURALS.map(m => (
                    <div key={m.id} style={{ aspectRatio: "1", borderRadius: 12, background: collectedMurals.includes(m.id) ? "#111" : "#080808", border: "1px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                      {collectedMurals.includes(m.id) ? m.emoji : "?"}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {screen === "map" && (
              <motion.div key="map" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ width: "100%", height: "100%", background: "#080810", position: "relative" }}>
                <div style={{ position: "absolute", top: 60, left: 20, color: "#fff", fontFamily: "'Bebas Neue'", fontSize: 20 }}>MURAL MAP</div>
                {/* Reuse the SVG map logic here */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 12, background: "#0c0c18" }}>
                  <ZoneLabel text="F" flat />
                  <div style={{ color: "#444", fontSize: 8 }}>WAYFINDING SPONSOR</div>
                  <div style={{ color: "#F5C800", fontFamily: "'Bebas Neue'", fontSize: 14 }}>KROGER FRESH ROUTES</div>
                </div>
              </motion.div>
            )}

            {screen === "rewards" && (
              <motion.div key="rewards" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ width: "100%", height: "100%", background: "#080810", padding: "60px 20px" }}>
                <div style={{ fontFamily: "'Bebas Neue'", fontSize: 24, color: "#fff", marginBottom: 20 }}>REWARDS</div>
                {REWARDS.map(r => (
                  <div key={r.tier} style={{ padding: 12, background: collectedMurals.length >= r.req ? "rgba(0,212,200,0.05)" : "#111", borderRadius: 12, border: "1px solid #1a1a1a", marginBottom: 12 }}>
                    <div style={{ color: r.color, fontFamily: "'Bebas Neue'", fontSize: 16 }}>{r.tier}</div>
                    <div style={{ color: "#444", fontSize: 9 }}>{r.req} MURALS</div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {["tap", "stamp"].indexOf(screen) === -1 && (
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "#080810", borderTop: "1px solid #1a1a1a", display: "flex" }}>
              {NAV.map(n => (
                <button key={n.id} onClick={() => setScreen(n.id)} style={{ flex: 1, background: "none", border: "none", color: screen === n.id ? "#F5C800" : "#444", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, cursor: "pointer" }}>
                  <span style={{ fontSize: 18 }}>{n.icon}</span>
                  <span style={{ fontSize: 8 }}>{n.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div style={{ width: 220, display: window.innerWidth < 1200 ? 'none' : 'block' }}>
          <div style={{ color: "#00D4C8", fontFamily: "'DM Mono'", fontSize: 10, letterSpacing: 2, marginBottom: 16 }}>SPONSORSHIP MODEL</div>
          {["A", "B", "C", "D", "E", "F", "G", "H"].map(z => (
            <div key={z} style={{ display: "flex", gap: 10, marginBottom: 8, padding: 8, background: "#0d0d1a", borderRadius: 8 }}>
              <div style={{ width: 22, height: 22, background: "#00D4C8", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontWeight: "bold" }}>{z}</div>
              <div style={{ fontSize: 11, color: "#888" }}>Zone {z}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
