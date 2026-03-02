import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── FONTS & GLOBAL STYLES ─────────────────────────────────────────────────── */
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;500;600;700;800&family=Syne+Mono&display=swap');`;

const SECTIONS = [
    { id: "hero", label: "INTRO" },
    { id: "why-nfc", label: "WHY NFC" },
    { id: "infrastructure", label: "INFRASTRUCTURE" },
    { id: "product", label: "PRODUCT" },
    { id: "sponsors", label: "SPONSORS" },
    { id: "data", label: "DATA" },
    { id: "tech", label: "TECH" },
];

const PACKAGES = [
    {
        tier: "TITLE SPONSOR", price: "$25,000", spots: 1, total: "$25,000",
        color: "#F5C800", icon: "🏙", tag: "PREMIER",
        headline: "Own the entire digital & physical experience",
        perks: [
            "Naming rights: 'The [Sponsor] Mural Passport'",
            "Exclusive Zone A visibility (Largest app placement)",
            "Logo on every mural placard & all 7 visibility zones",
            "Full-screen co-branded Cartographer tier reward",
            "100% data access + co-authored city report",
        ],
    },
    {
        tier: "PRESENTING SPONSOR", price: "$12,000", spots: 2, total: "$24,000",
        color: "#00D4C8", icon: "✦", tag: "PRESENTING",
        headline: "Persistent brand presence throughout the route",
        perks: [
            "Zone B (Header Strip) persistent badge",
            "Zone C (Tap Screen) multi-logo strip placement",
            "Zone D visibility at 5 high-traffic murals",
            "Zone F (Map Footer) wayfinding co-branding",
        ],
    },
    {
        tier: "SUPPORTING SPONSOR", price: "$6,000", spots: 3, total: "$18,000",
        color: "#6C2BD9", icon: "🛡", tag: "SUPPORTING",
        headline: "Attach your brand to the explorer's journey",
        perks: [
            "Zone E (Passport Header) co-branding",
            "Zone G (Reward Tier) co-branded prize moment",
            "Logo in 'Journey Recap' post-event email",
            "Tier-specific visitor engagement data",
        ],
    },
    {
        tier: "MURAL SPONSOR", price: "$2,500", spots: 20, total: "$50,000",
        color: "#FF8C00", icon: "🎨", tag: "CULTURAL",
        headline: "Your brand linked to a specific work of art",
        perks: [
            "Exclusive Zone D visibility on 1 specific mural",
            "Logo on the physical placard at that mural",
            "Artist profile page co-branded with your logo",
            "Mural-level dwell-time & engagement analytics",
        ],
    },
];

/* ─── MINI PASSPORT PREVIEW ───────────────────────────────────────────────── */
function PassportPreview({ sponsorName }) {
    const [screen, setScreen] = useState("tap");
    const [collected, setCollected] = useState([1, 3, 5]);
    const MURALS = [
        { id: 1, name: "Terminal of Time", zone: "OTR", e: "⏱" },
        { id: 2, name: "Clive", zone: "Downtown", e: "🎭" },
        { id: 3, name: "zoOTRopia", zone: "OTR", e: "🌀" },
        { id: 4, name: "River Gaze", zone: "Rhine", e: "🌊" },
        { id: 5, name: "Mural by Jeks", zone: "Vine", e: "🎨" },
        { id: 6, name: "Ember Field", zone: "Dt Core", e: "🔥" },
        { id: 7, name: "Light Bridge", zone: "Cov", e: "🌉" },
        { id: 8, name: "City Pulse", zone: "OTR", e: "⚡" },
        { id: 9, name: "Mural by Pref", zone: "Wash Pk", e: "✦" },
    ];
    const tap = (id) => {
        if (!collected.includes(id)) setCollected(c => [...c, id]);
        setScreen("passport");
    };
    return (
        <div style={{ width: 260, height: 520, background: "#04040e", borderRadius: 32, border: "1.5px solid #111", overflow: "hidden", position: "relative", boxShadow: "0 40px 80px rgba(0,0,0,0.8),0 0 0 1px #0a0a14", flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 80, height: 22, background: "#04040e", borderRadius: 12, border: "1.5px solid #111", zIndex: 10 }} />
            {/* NAV */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", background: "rgba(4,4,14,.97)", borderTop: "1px solid #0f0f18", padding: "6px 0 8px", zIndex: 20 }}>
                {[{ id: "tap", ic: "📡" }, { id: "passport", ic: "📖" }, { id: "map", ic: "🗺" }, { id: "rewards", ic: "🏆" }].map(n => (
                    <button key={n.id} onClick={() => setScreen(n.id)} style={{ flex: 1, border: "none", background: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <span style={{ fontSize: 16 }}>{n.ic}</span>
                        <span style={{ fontFamily: "'Syne Mono'", fontSize: 7, color: screen === n.id ? "#F5C800" : "#1a1a2a" }}>{n.id.toUpperCase()}</span>
                    </button>
                ))}
            </div>
            {/* TAP */}
            {screen === "tap" && (
                <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "44px 20px 70px", position: "relative", background: "radial-gradient(ellipse 80% 60% at 50% 50%,rgba(245,200,0,.08) 0%,transparent 70%)" }}>
                    <div style={{ position: "relative", width: 100, height: 100, marginBottom: 20 }}>
                        {[0, 1, 2].map(i => <div key={i} style={{ position: "absolute", inset: i * 14, borderRadius: "50%", border: "1.5px solid", borderColor: `rgba(245,200,0,${0.6 - i * 0.18})`, animation: `ripple ${1.8 + i * 0.4}s ease-out ${i * 0.4}s infinite` }} />)}
                        <div style={{ position: "absolute", inset: 36, borderRadius: "50%", background: "#F5C800", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, boxShadow: "0 0 24px rgba(245,200,0,.7)" }}>📡</div>
                    </div>
                    <div style={{ fontFamily: "'Syne Mono'", fontSize: 9, letterSpacing: 4, color: "#F5C800", marginBottom: 4 }}>NFC DETECTED</div>
                    <div style={{ fontFamily: "'Bebas Neue'", fontSize: 22, letterSpacing: 1, textAlign: "center", marginBottom: 3 }}>Terminal of Time</div>
                    <div style={{ fontSize: 11, color: "#333", marginBottom: 6 }}>NorthHouse · OTR</div>
                    {sponsorName && <div style={{ fontFamily: "'Syne Mono'", fontSize: 9, color: "#F5C800", background: "rgba(245,200,0,.08)", border: "1px solid rgba(245,200,0,.2)", borderRadius: 20, padding: "3px 10px", marginBottom: 16 }}>{sponsorName} ZONE</div>}
                    <button onClick={() => tap(1)} style={{ width: "100%", padding: "12px", border: "none", borderRadius: 10, background: "#F5C800", fontFamily: "'Bebas Neue'", fontSize: 16, letterSpacing: 3, color: "#000", cursor: "pointer" }}>STAMP MY PASSPORT</button>
                    <div style={{ fontFamily: "'Syne Mono'", fontSize: 9, color: "#1a1a2a", marginTop: 8 }}>NO APP · NO ACCOUNT</div>
                </div>
            )}
            {/* PASSPORT */}
            {screen === "passport" && (
                <div style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    <div style={{ padding: "36px 16px 10px", borderBottom: "1px solid #0f0f18" }}>
                        <div style={{ fontFamily: "'Syne Mono'", fontSize: 8, letterSpacing: 3, color: "#F5C800", marginBottom: 2 }}>BLINK 2026 PASSPORT</div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ fontFamily: "'Bebas Neue'", fontSize: 20 }}>MURAL TRAIL</div>
                            <div style={{ fontFamily: "'Syne Mono'", fontSize: 10, color: "#F5C800" }}>{collected.length}/9</div>
                        </div>
                        <div style={{ height: 3, background: "#0d0d18", borderRadius: 2, marginTop: 8, overflow: "hidden" }}>
                            <div style={{ height: "100%", width: `${(collected.length / 9) * 100}%`, background: "linear-gradient(90deg,#F5C800,#FF8C00)", borderRadius: 2 }} />
                        </div>
                    </div>
                    <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, padding: "10px 12px", overflowY: "auto", paddingBottom: 70 }}>
                        {MURALS.map(m => {
                            const on = collected.includes(m.id);
                            return (
                                <div key={m.id} onClick={() => !on && tap(m.id)} style={{ aspectRatio: "1", borderRadius: 10, background: on ? "#0d0d1e" : "#07070f", border: `1px solid ${on ? "#1e1e30" : "#0a0a14"}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, cursor: on ? "default" : "pointer", position: "relative" }}>
                                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: on ? "rgba(245,200,0,.15)" : "#0a0a14", border: on ? "1.5px solid rgba(245,200,0,.4)" : "1px dashed #111", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>{on ? m.e : "?"}</div>
                                    {on && <div style={{ position: "absolute", top: 4, right: 4, width: 12, height: 12, borderRadius: "50%", background: "#F5C800", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, color: "#000", fontWeight: 900 }}>✓</div>}
                                    <div style={{ fontSize: 7, textAlign: "center", padding: "0 3px", lineHeight: 1.3, color: on ? "#666" : "#1a1a2a", fontWeight: 600 }}>{on ? m.name : "???"}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            {/* MAP */}
            {screen === "map" && (
                <div style={{ height: "100%", background: "#030310", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(245,200,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(245,200,0,.04) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
                    <div style={{ position: "absolute", top: 40, left: 14, fontFamily: "'Syne Mono'", fontSize: 9, letterSpacing: 2, color: "#F5C800" }}>ROUTE MAP</div>
                    {MURALS.map(m => {
                        const pos = [{ l: 22, t: 30 }, { l: 62, t: 24 }, { l: 28, t: 48 }, { l: 42, t: 62 }, { l: 55, t: 44 }, { l: 70, t: 56 }, { l: 50, t: 72 }, { l: 35, t: 38 }, { l: 78, t: 36 }][m.id - 1];
                        const on = collected.includes(m.id);
                        return (
                            <div key={m.id} style={{ position: "absolute", left: `${pos.l}%`, top: `${pos.t}%`, transform: "translate(-50%,-50%)", zIndex: 5 }}>
                                <div style={{ width: on ? 30 : 22, height: on ? 30 : 22, borderRadius: "50%", background: on ? "rgba(245,200,0,.25)" : "#0a0a14", border: on ? "2px solid #F5C800" : "1.5px dashed #1a1a2a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: on ? 13 : 10, boxShadow: on ? "0 0 12px rgba(245,200,0,.4)" : "none", transition: "all .3s" }}>{on ? m.e : "·"}</div>
                            </div>
                        );
                    })}
                </div>
            )}
            {/* REWARDS */}
            {screen === "rewards" && (
                <div style={{ height: "100%", overflowY: "auto", padding: "36px 14px 70px" }}>
                    <div style={{ fontFamily: "'Syne Mono'", fontSize: 8, letterSpacing: 3, color: "#F5C800", marginBottom: 4 }}>EARN AS YOU WALK</div>
                    <div style={{ fontFamily: "'Bebas Neue'", fontSize: 20, marginBottom: 12 }}>REWARD TRAIL</div>
                    {[{ n: "EXPLORER", r: 3, ic: "🗺", c: "#C0C0C0" }, { n: "NAVIGATOR", r: 5, ic: "🧭", c: "#F5C800" }, { n: "CARTOGRAPHER", r: 9, ic: "✦", c: "#FF8C00" }].map(rw => {
                        const done = collected.length >= rw.r;
                        return (
                            <div key={rw.n} style={{ marginBottom: 8, background: done ? "rgba(245,200,0,.04)" : "#08080f", border: `1px solid ${done ? "rgba(245,200,0,.2)" : "#0f0f18"}`, borderRadius: 10, overflow: "hidden" }}>
                                <div style={{ padding: "9px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", background: done ? "rgba(245,200,0,.06)" : "#0c0c18" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${rw.c}18`, border: `1.5px solid ${rw.c}33`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>{rw.ic}</div>
                                        <div>
                                            <div style={{ fontFamily: "'Bebas Neue'", fontSize: 12, letterSpacing: 2, color: rw.c }}>{rw.n}</div>
                                            <div style={{ fontFamily: "'Syne Mono'", fontSize: 8, color: "#2a2a3a" }}>{rw.r} murals</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

/* ─── SPONSOR CARD ────────────────────────────────────────────────────────── */
function SponsorCard({ pkg, idx }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{ background: "#07070f", border: `1px solid ${open ? pkg.color + "40" : "#0f0f1a"}`, borderRadius: 18, overflow: "hidden", transition: "border-color .3s", cursor: "pointer", position: "relative" }} onClick={() => setOpen(o => !o)}
        >
            {pkg.tag === "PREMIER" && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${pkg.color},${pkg.color}88)` }} />}
            <div style={{ padding: "20px 22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 44, height: 44, borderRadius: 12, background: `${pkg.color}18`, border: `1.5px solid ${pkg.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{pkg.icon}</div>
                        <div>
                            <div style={{ fontFamily: "'Syne Mono'", fontSize: 8, letterSpacing: 2, color: pkg.color, marginBottom: 2 }}>{pkg.tag}</div>
                            <div style={{ fontFamily: "'Bebas Neue'", fontSize: 15, letterSpacing: 2 }}>{pkg.tier}</div>
                        </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <div style={{ fontFamily: "'Bebas Neue'", fontSize: 28, color: pkg.color, lineHeight: 1 }}>{pkg.price}</div>
                        <div style={{ fontFamily: "'Syne Mono'", fontSize: 8, color: "#2a2a3a" }}>{pkg.spots} spots</div>
                    </div>
                </div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.5, marginBottom: 12 }}>{pkg.headline}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontFamily: "'Syne Mono'", fontSize: 10, color: "#1a1a2a" }}>TOTAL POOL: <span style={{ color: pkg.color }}>{pkg.total}</span></div>
                    <div style={{ fontFamily: "'Syne Mono'", fontSize: 9, color: open ? pkg.color : "#2a2a3a", transition: "color .2s" }}>{open ? "COLLAPSE ↑" : "SEE PERKS ↓"}</div>
                </div>
            </div>
            {open && (
                <div style={{ borderTop: `1px solid ${pkg.color}20`, padding: "16px 22px", background: `${pkg.color}05` }}>
                    {pkg.perks.map((p, i) => (
                        <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                            <div style={{ width: 16, height: 16, borderRadius: "50%", background: `${pkg.color}18`, border: `1.5px solid ${pkg.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: pkg.color, flexShrink: 0, marginTop: 1 }}>✓</div>
                            <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{p}</div>
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    );
}

/* ─── SECTION WRAPPER ─────────────────────────────────────────────────────── */
const S = ({ id, children, style = {} }) => (
    <section id={id} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 60px 60px", position: "relative", overflow: "hidden", ...style }}>{children}</section>
);

/* ─── MAIN ────────────────────────────────────────────────────────────────── */
export default function LandingPage({ onLaunchDemo }) {
    const [active, setActive] = useState("hero");
    const [sponsorPreview, setSponsorPreview] = useState("");

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="landing-page-root" style={{ background: '#04040a', color: '#fff', fontFamily: 'Syne, sans-serif' }}>
            <style>{FONTS}
                {`
          @keyframes ripple {0%{transform:scale(.6);opacity:1}100%{transform:scale(2.2);opacity:0}}
          @keyframes ticker {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        `}
            </style>

            {/* ── FIXED NAV ───────────────────────────────────────────────── */}
            <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, padding: "14px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(4,4,10,.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,.04)" }}>
                <div style={{ fontFamily: "'Bebas Neue'", fontSize: 18, letterSpacing: 3, color: "#F5C800", cursor: "pointer" }} onClick={() => scrollTo("hero")}>URBAN HIKERS <span style={{ color: "#1e1e30", fontSize: 12, letterSpacing: 2, fontFamily: "'Syne Mono'" }}>× BLINK 2026</span></div>
                <div style={{ display: "flex", gap: 4 }}>
                    {SECTIONS.map(s => (
                        <button key={s.id} onClick={() => scrollTo(s.id)} style={{ padding: "6px 12px", borderRadius: 20, border: "none", background: active === s.id ? "rgba(245,200,0,.12)" : "transparent", fontFamily: "'Syne Mono'", fontSize: 9, letterSpacing: 2, color: active === s.id ? "#F5C800" : "#2a2a4a", cursor: "pointer", transition: "all .2s" }}>
                            {s.label}
                        </button>
                    ))}
                </div>
                <button onClick={onLaunchDemo} style={{ padding: "8px 20px", borderRadius: 30, border: "1.5px solid #F5C800", background: "transparent", fontFamily: "'Syne Mono'", fontSize: 10, letterSpacing: 2, color: "#F5C800", cursor: "pointer", transition: "all .2s" }}>
                    LAUNCH LIVE DEMO
                </button>
            </nav>

            {/* HERO */}
            <S id="hero">
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,212,200,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,200,.025) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
                <div style={{ maxWidth: 720, position: "relative", zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ fontFamily: "'Syne Mono'", fontSize: 11, letterSpacing: 5, color: "#00D4C8", marginBottom: 16 }}>URBAN HIKERS × BLINK CINCINNATI · 2026</motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(54px,7vw,90px)", letterSpacing: 2, lineHeight: .92, marginBottom: 24 }}>
                        NFC MURAL<br />
                        <span style={{ color: "#F5C800" }}>PASSPORT</span> &<br />
                        <span style={{ color: "#F5C800" }}>SPONSORSHIP</span> PLATFORM
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ fontSize: 18, color: "#888", lineHeight: 1.7, maxWidth: 540, marginBottom: 36 }}>
                        A city-scale engagement layer for BLINK 2026. Designed to show sponsors exactly where brand presence lives inside the visitor experience. Tap murals. Build passports. Capture legacy.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <button onClick={() => scrollTo("product")} style={{ padding: "14px 32px", borderRadius: 40, border: "none", background: "#F5C800", fontFamily: "'Bebas Neue'", fontSize: 18, letterSpacing: 3, color: "#000", cursor: "pointer" }}>VIEW THE ECOSYSTEM</button>
                        <button onClick={onLaunchDemo} style={{ padding: "14px 32px", borderRadius: 40, border: "1.5px solid rgba(0,212,200,.3)", background: "transparent", fontFamily: "'Bebas Neue'", fontSize: 18, letterSpacing: 3, color: "#00D4C8", cursor: "pointer" }}>LAUNCH LIVE DEMO</button>
                    </motion.div>
                </div>
            </S>

            {/* WHY NFC */}
            <S id="why-nfc" style={{ background: "#06060E" }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ fontFamily: "'Syne Mono'", fontSize: 10, letterSpacing: 5, color: "#00D4C8", marginBottom: 16 }}>THE BARRIER TO ENTRY</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(48px,5vw,72px)", letterSpacing: 2, lineHeight: .92, marginBottom: 48 }}>
                    APP DOWNLOADS KILL EVENTS.<br />
                    <span style={{ color: "#F5C800" }}>NFC REMOVES EVERY FRICTION.</span>
                </motion.h2>

                <div style={{ width: "100%", maxWidth: 900, background: "rgba(255,255,255,0.02)", border: "1px solid #1a1a2a", borderRadius: 24, overflow: "hidden" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", borderBottom: "1px solid #1a1a2a", background: "rgba(0,212,200,0.05)" }}>
                        <div style={{ padding: "20px 30px", fontFamily: "'Bebas Neue'", fontSize: 18, letterSpacing: 2, color: "#666" }}>TRADITIONAL APP</div>
                        <div style={{ padding: "20px 30px", fontFamily: "'Bebas Neue'", fontSize: 18, letterSpacing: 2, color: "#00D4C8" }}>URBAN HIKERS NFC PASSPORT</div>
                    </div>
                    {[
                        ["Requires download (iOS / Android)", "Tap → web page opens instantly"],
                        ["Account creation / login", "No account. No friction. One-tap collection."],
                        ["Push notification permissions", "Opt-in only, at reward unlock moment"],
                        ["Visitor must find app in store", "Chip is embedded in the mural itself"],
                        ["Sponsor logo buried in menus", "Sponsor visible on every screen. Zone B Persistent."],
                    ].map((row, i) => (
                        <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", borderBottom: i === 4 ? "none" : "1px solid #14141d" }}>
                            <div style={{ padding: "16px 30px", fontSize: 14, color: "#555", borderRight: "1px solid #14141d" }}>{row[0]}</div>
                            <div style={{ padding: "16px 30px", fontSize: 14, color: "#888", fontWeight: i === 4 ? 700 : 400 }}>{row[1]}</div>
                        </div>
                    ))}
                </div>
            </S>

            {/* INFRASTRUCTURE */}
            <S id="infrastructure">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ fontFamily: "'Syne Mono'", fontSize: 10, letterSpacing: 5, color: "#6C2BD9", marginBottom: 16 }}>THE DEPLOYMENT LAYER</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(48px,5vw,72px)", letterSpacing: 2, lineHeight: .92, marginBottom: 48 }}>
                    PHYSICAL HARDWARE.<br />
                    <span style={{ color: "#6C2BD9" }}>HUMAN INTELLIGENCE.</span>
                </motion.h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, maxWidth: 1100 }}>
                    {[
                        { t: "NFC CHIPS", d: "Embedded into 20+ murals. Weatherproof, battery-free, $0.40/unit.", ic: "📡" },
                        { t: "30 FLOW AGENTS", d: "Staff stationed across 4 zones, onboarding visitors and guiding routes.", ic: "🦺" },
                        { t: "OPS DASHBOARD", d: "Real-time surveillance of visitor flow and engagement volume.", ic: "📊" },
                        { t: "COMMUNITY DATA", d: "Aggregated, anonymized data returned to neighborhoods for legacy planning.", ic: "🏙" }
                    ].map((item, i) => (
                        <div key={i} style={{ padding: "30px", background: "#080814", border: "1px solid #1a1a2a", borderRadius: 20 }}>
                            <div style={{ fontSize: 32, marginBottom: 20 }}>{item.ic}</div>
                            <div style={{ fontFamily: "'Bebas Neue'", fontSize: 18, letterSpacing: 2, marginBottom: 10 }}>{item.t}</div>
                            <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{item.d}</div>
                        </div>
                    ))}
                </div>
            </S>

            {/* PRODUCT */}
            <S id="product">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 80, alignItems: "center", maxWidth: 1100 }}>
                    <div>
                        <div style={{ fontFamily: "'Syne Mono'", fontSize: 10, letterSpacing: 5, color: "#F5C800", marginBottom: 16 }}>THE PRODUCT</div>
                        <h2 style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(48px,4vw,64px)", letterSpacing: 1, lineHeight: .92, marginBottom: 20 }}>NFC MURAL<br /><span style={{ color: "#F5C800" }}>PASSPORT</span></h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {[
                                { n: "01", t: "TAP THE NFC PLACARD", d: "No app, no account, no friction. Opens browser instantly.", c: "#F5C800" },
                                { n: "02", t: "STAMP DROPS", d: "Animated stamp-drop sequence updates your digital passport.", c: "#3DD9F5" },
                                { n: "03", t: "BUILD YOUR ROUTE", d: "Interactive map tracks your journey across 6 BLINK zones.", c: "#3DFFA0" },
                                { n: "04", t: "UNLOCK REWARDS", d: "Collect badges and unlock exclusive rewards from sponsors.", c: "#FF8A3D" },
                            ].map((s, i) => (
                                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "14px 16px", background: "#07070f", border: "1px solid #0f0f18", borderRadius: 12, borderLeft: `3px solid ${s.c}` }}>
                                    <div style={{ fontFamily: "'Bebas Neue'", fontSize: 28, color: s.c, lineHeight: 1, width: 36 }}>{s.n}</div>
                                    <div>
                                        <div style={{ fontFamily: "'Bebas Neue'", fontSize: 15, letterSpacing: 2, marginBottom: 3 }}>{s.t}</div>
                                        <div style={{ fontSize: 12, color: "#444", lineHeight: 1.5 }}>{s.d}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                        <PassportPreview sponsorName={sponsorPreview} />
                        <div style={{ fontFamily: "'Syne Mono'", fontSize: 9, letterSpacing: 2, color: "#333" }}>INTERACTIVE PASS-THROUGH PREVIEW</div>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                            {["", "Kroger", "P&G", "FC Cincinnati"].map(n => (
                                <button key={n} onClick={() => setSponsorPreview(n)} style={{ padding: "5px 12px", borderRadius: 20, border: `1px solid ${sponsorPreview === n ? "rgba(245,200,0,.5)" : "#111"}`, background: sponsorPreview === n ? "rgba(245,200,0,.08)" : "transparent", fontFamily: "'Syne Mono'", fontSize: 9, color: sponsorPreview === n ? "#F5C800" : "#333", cursor: "pointer" }}>{n || "NO SPONSOR"}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </S>

            {/* SPONSORS */}
            <S id="sponsors" style={{ background: "#030308" }}>
                <div style={{ fontFamily: "'Syne Mono'", fontSize: 10, letterSpacing: 5, color: "#F5C800", marginBottom: 16 }}>SPONSOR PACKAGES</div>
                <h2 style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(40px,4vw,60px)", letterSpacing: 1, lineHeight: .92, marginBottom: 40 }}>
                    14 SPONSOR SLOTS.<br />
                    <span style={{ color: "#F5C800" }}>$209,000 TOTAL POOL.</span>
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 14, maxWidth: 1200 }}>
                    {PACKAGES.map((pkg, i) => <SponsorCard key={pkg.tier} pkg={pkg} idx={i} />)}
                </div>
            </S>

            {/* DATA */}
            <S id="data" style={{ background: "#030308" }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ fontFamily: "'Syne Mono'", fontSize: 10, letterSpacing: 5, color: "#F5C800", marginBottom: 16 }}>DATA UTILITY</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(48px,5vw,72px)", letterSpacing: 2, lineHeight: .92, marginBottom: 48 }}>
                    BEYOND THE STAMP.<br />
                    <span style={{ color: "#F5C800" }}>WHAT THE DATA DELIVERS.</span>
                </motion.h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 10, maxWidth: 1100 }}>
                    {[
                        "MURAL VISIT COUNTS — per mural, per hour, all 4 nights",
                        "ROUTE SEQUENCES — which murals visitors move between",
                        "DWELL TIME — how long visitors spend at each location",
                        "COMPLETION RATES — % of visitors reaching each reward tier",
                        "PEAK HOUR MAPPING — engagement volume by hour",
                        "ECONOMIC ACTIVATION — foot traffic correlation with local biz",
                    ].map((d, i) => (
                        <div key={i} style={{ padding: "16px 20px", background: "rgba(245,200,0,0.03)", border: "1px solid rgba(245,200,0,0.1)", borderRadius: 12, fontFamily: "'DM Mono'", fontSize: 11, color: "#888" }}>
                            {d}
                        </div>
                    ))}
                </div>
            </S>

            {/* TECH */}
            <S id="tech">
                <div style={{ maxWidth: 800 }}>
                    <div style={{ fontFamily: "'Syne Mono'", fontSize: 10, letterSpacing: 5, color: "#606080", marginBottom: 16 }}>TECHNICAL ARCHITECTURE</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
                        <div>
                            <div style={{ fontSize: 15, color: "#fff", fontWeight: 700, marginBottom: 12 }}>FRONTEND EXPERIENCE</div>
                            <div style={{ fontSize: 13, color: "#555", lineHeight: 1.7 }}>
                                Built with **React** and **Vite** for ultra-fast performance. **Framer Motion** powers purposeful transitions. Dashboard-grade visualization via SVG mapping.
                            </div>
                        </div>
                        <div>
                            <div style={{ fontSize: 15, color: "#fff", fontWeight: 700, marginBottom: 12 }}>PHYSICAL INTERFACE</div>
                            <div style={{ fontSize: 13, color: "#555", lineHeight: 1.7 }}>
                                Native **NDEFReader** API for direct NFC chip reading. Fallback QR routing for older devices. Persistent state via **localStorage**.
                            </div>
                        </div>
                    </div>
                </div>
            </S>
            <footer style={{ borderTop: "1px solid rgba(255,255,255,.04)", padding: "40px 60px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#030308" }}>
                <div style={{ fontFamily: "'Syne Mono'", fontSize: 9, color: "#1a1a2a" }}>URBAN HIKERS × BLINK 2026</div>
                <div style={{ display: "flex", gap: 24 }}>
                    <button onClick={onLaunchDemo} style={{ padding: "12px 30px", borderRadius: 40, border: "none", background: "#F5C800", fontFamily: "'Bebas Neue'", fontSize: 18, letterSpacing: 3, color: "#000", cursor: "pointer" }}>LAUNCH DEMO</button>
                </div>
            </footer>
        </div>
    );
}
