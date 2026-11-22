# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Локальная разработка

Установите зависимости командой `npm ci` и запустите Vite через `npm run dev`.

- `npm run format` форматирует исходники и конфигурацию с помощью Prettier.
- `npm run lint` запускает ESLint для JavaScript и JSX и Stylelint для CSS и SCSS в `src`.
- `npm run lint:fix` применяет доступные автоисправления линтеров.
- `npm run check` проверяет форматирование, запускает оба линтера и собирает проект.

Стили компонента можно импортировать прямо из JSX, как в `src/App.jsx`. Для имён классов Stylelint проверяет запись БЭМ с двойным дефисом для модификаторов, например `.project-card`, `.project-card__title` и `.project-card--featured`. Проверка охватывает и вложенные селекторы SCSS с `&`.
