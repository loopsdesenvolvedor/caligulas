# Caligula's

A responsive **Next.js + TypeScript + Redux** project featuring a modular header with interactive buttons and reusable UI components.

## Features

- Mobile and desktop responsive header
- Interactive buttons: menu, search, favorites, user
- Global state management with Redux Toolkit
- Modular folder structure: `ui` for feature components, `shared` for reusable components
- TypeScript for type safety

src/
├─ ui/header/ # Header-specific components
├─ shared/ # Reusable components (ButtonWithIcon, etc.)
├─ store/ # Redux slices and store
└─ styles/ # Global styles and Tailwind confi
