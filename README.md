# Caligula's

A responsive **Next.js + TypeScript + Redux** project featuring a modular header with interactive buttons and reusable UI components.

## Features

- Mobile and desktop responsive header
- Interactive buttons: menu, search, favorites, user
- Global state management with Redux Toolkit
- Modular folder structure: `ui` for feature components, `shared` for reusable components
- TypeScript for type safety

## Folder Structure

```text
src/
├─ ui/header/     # Header-specific components
├─ shared/        # Reusable components (ButtonWithIcon, etc.)
├─ store/         # Redux slices and store
└─ styles/        # Global styles and Tailwind config

```

## Age Restriction

This website contains adult content and is intended for users **18 years and older**.  
By accessing this site, you confirm that you are of legal age in your country.

## Figma Design

[View Prototype](https://www.figma.com/design/6pijIBjw9o4TpmQ72R0KTc/Caligulas?node-id=490-3&t=aopo8hSCQbCEXznX-0)

## Getting Started

1. Install dependencies:

```bash
npm install
# or
yarn install
```

```bash
npm run dev
# or
yarn dev
```

## License

This project is licensed for learning and prototyping purposes only.
