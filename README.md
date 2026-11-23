# Arseniy Dementev — Frontend Engineer

A single-page portfolio built with React, Vite and SCSS. It introduces Arseniy, groups his frontend skills into six keyboard-accessible tabs, and includes his background and contact details. The theme follows the system preference until the visitor chooses light or dark mode.

## Local development

Use the Node.js version in `.nvmrc` (26.8.2), then run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Production build

```sh
npm run check
npm run preview
```

`npm run check` checks formatting with Prettier, runs ESLint and Stylelint, and builds the production site in `dist/`. The preview command serves that build locally. To run the build alone, use `npm run build`.

## Project layout

- [src/main.jsx](src/main.jsx) mounts the React application and loads the global stylesheet.
- [src/App.jsx](src/App.jsx) assembles the header, hero, skills, about section and contact footer in page order.
- [src/components](src/components) contains each section’s JSX and BEM stylesheet side by side. Edit [Skills.jsx](src/components/Skills/Skills.jsx) to update a technology or category. The navigation and theme switch live in [Header](src/components/Header).
- [src/styles/index.scss](src/styles/index.scss) controls stylesheet order. Theme colors and header height live in [variables.scss](src/styles/variables.scss). Shared sizing functions, breakpoints and mixins live in the [SCSS toolkit](src/styles/toolkit).
- [public/favicon.svg](public/favicon.svg) supplies the header icon and favicon.

The toolkit is adapted from [scss-toolkit](https://github.com/sl1dan3/scss-toolkit/tree/5dc59f6f9b2c2fd25428feada9dfe4cb6547ca6e/helpers).
