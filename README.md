# BLINK 2026 NFC Mural Passport & Pitch Platform

A premium React-based pitch platform and functional demo for the BLINK 2026 art festival. This application combines a high-level proposal with a live interactive NFC Mural Passport experience.

## Features

- **Integrated Pitch Platform**: A full-scroll proposal landing page with narrative-driven animations.
- **NFC Mural Passport**: A functional web app demo that simulates "collecting" murals via NFC taps.
- **Sponsor Zone Integration**: Modular design showcasing placement zones for title sponsors and neighborhood partners.
- **Persistent Progress**: Mural collections are saved to `localStorage`, maintaining state across user sessions.
- **Interactive Map**: A dynamic route map that connects visited murals and displays upcoming targets.
- **Reward Trail**: A tiered reward system (Explorer, Navigator, Cartographer) with digital prize unlocks.

## Tech Stack

- **React**: Component-based UI and state management.
- **Vite**: Modern build tool and ultra-fast dev server.
- **Framer Motion**: Powering all scroll-reveal animations and app transitions.
- **Vanilla CSS**: Custom design system using HSL tokens and "Tactical Civic" aesthetics.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Explore the Pitch**: Scroll through the landing page to view the BLINK 2026 proposal.
4.  **Launch the Demo**: Click "LAUNCH LIVE DEMO" at any time to enter the functional Passport App.
5.  **Reset for Demo**: Use the "RESET DATA" button in the Top Right of the Passport App to clear progress for a fresh demonstration.

## Design Aesthetic

The project utilizes the "Tactical Civic" design system:
- **Core Colors**: Deep space background (`#06060E`), Neon Yellow accents (`#F5C800`), and Vibrant Orange (`#FF8C00`).
- **Typography**: Space Grotesk (Body) and Bebas Neue (Headers/Navigation).
- **Glassmorphism**: Subtle translucent layers and dashed border accents for a modern, functional feel.
