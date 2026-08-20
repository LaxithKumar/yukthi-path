# Yukthi Path

A premium mobile learning application built with **React Native** and **Expo**.

## Tech Stack

- **Expo** (~53) — Managed React Native framework
- **Expo Router** — File-based navigation
- **React Native** — Cross-platform mobile UI
- **JavaScript** — No TypeScript

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/go) on your phone (for testing)

### Installation

```bash
npm install
```

### Running

```bash
npx expo start
```

Scan the QR code with **Expo Go** (Android) or the Camera app (iOS).

## Project Structure

```
yukthi-path/
├── app/                    # Expo Router screens & layouts
│   ├── _layout.js          # Root layout
│   └── (tabs)/             # Tab-based navigation
│       ├── _layout.js      # Tab bar configuration
│       ├── index.js        # Dashboard / Home
│       ├── learn.js        # Course catalog
│       ├── library.js      # Resources library
│       ├── progress.js     # Learning analytics
│       ├── profile.js      # User profile & settings
│       ├── tutor.js        # AI Tutor
│       ├── lab.js          # Virtual Lab
│       ├── question-bank.js# Practice questions
│       ├── paper-generator.js # Test paper builder
│       └── recharge.js     # Break & relaxation
├── components/             # Reusable UI components
├── constants/              # Theme tokens & layout constants
├── contexts/               # React contexts (ThemeContext)
├── hooks/                  # Custom hooks
├── styles/                 # Global shared styles
├── utils/                  # Utility functions
├── services/               # API services (placeholder)
└── assets/                 # Images, fonts, icons
```

## Design System

- **Theme**: Eye-friendly dark mode
- **Palette**: Deep navy, soft blue, teal, slate, white
- **Typography**: System fonts with a consistent type scale
- **Components**: Card, Button, Header, ProgressBar, StatCard, and more

## Scripts

| Command | Description |
|---------|-------------|
| `npx expo start` | Start the dev server |
| `npx expo start --android` | Open on Android |
| `npx expo start --ios` | Open on iOS |

## License

Private — All rights reserved.
