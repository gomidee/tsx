# Slide.tsx

A zero-config, static webapp that renders `.tsx` slide decks in the browser. Drop a file, get a presentation. Hosted entirely on GitHub Pages — no build step, no server.

## 🚀 Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch** → `main` → `/ (root)`
4. Your slide renderer is live at `https://<username>.github.io/<repo>/`

That's it. No build step required.

## 📁 How It Works

Your `.tsx` file should **default-export** a React component. Each **direct child element** of the returned JSX becomes a slide.

```tsx
import React from "react";

export default function Slides() {
  return (
    <>
      <div style={{ /* Slide 1 */ }}>
        <h1>Hello World</h1>
      </div>
      <div style={{ /* Slide 2 */ }}>
        <h1>Second Slide</h1>
      </div>
    </>
  );
}
```

### Available Globals

These are available in your `.tsx` files without importing:

| Global | What it is |
|--------|-----------|
| `React` | React 18 |
| `useState`, `useEffect`, `useRef`, `useCallback`, `useMemo` | React hooks |
| `useReducer`, `useContext`, `createContext` | More hooks |
| `Recharts` | Full Recharts library for charts |

Import statements are **automatically stripped** — you can keep them in your source for editor support, they'll be ignored at runtime.

### Slide Sizing

Each slide renders inside a **960×540** frame (16:9). Style your slides to fill `width: 100%; height: 100%`.

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` `↓` `Space` | Next slide |
| `←` `↑` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `F` | Toggle fullscreen |
| `Esc` | Exit fullscreen |

## 📦 What's Included

- `index.html` — The entire webapp (single file, no dependencies to install)
- `example-slides.tsx` — A sample 4-slide deck you can drop in to test

## 🔧 Tech Stack

All loaded via CDN at runtime — nothing to install:

- **React 18** — Component rendering
- **Sucrase** — In-browser TypeScript/JSX transpilation
- **Recharts** — Charting (optional, available to slides)

## License

MIT
