import { useState, useEffect, useRef } from "react";
import LandingPage from "./components/LandingPage";
import PassportApp from "./components/PassportApp";

export default function App() {
    const [view, setView] = useState("landing"); // 'landing' or 'app'

    return (
        <>
            {view === "landing" ? (
                <LandingPage onLaunchDemo={() => setView("app")} />
            ) : (
                <div style={{ position: 'relative' }}>
                    <button
                        onClick={() => setView("landing")}
                        style={{
                            position: 'fixed',
                            top: '20px',
                            left: '20px',
                            zIndex: 1000,
                            background: 'rgba(245,200,0,0.1)',
                            border: '1px solid rgba(245,200,0,0.3)',
                            color: '#F5C800',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '11px',
                            cursor: 'pointer',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        ← BACK TO PITCH
                    </button>
                    <PassportApp />
                </div>
            )}
        </>
    );
}
