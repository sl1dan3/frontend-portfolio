# Arseniy Dementev — Frontend Engineer

[Visit my website](https://sl1dan3.github.io/personal-website/) · [Читать на русском](#на-русском)

I built this single-page website to introduce myself, share the tools I use and give people a way to contact me. The skills section supports keyboard navigation. The site follows your system theme and remembers your choice if you switch themes manually.

## Technology choices

- **React and JavaScript (JSX).** Each section has its own component. The skills tabs, mobile menu and theme switch manage their state locally. Moving between sections uses standard HTML anchors.
- **SCSS and BEM.** Each component’s styles sit beside its JSX. BEM class names identify the component a rule belongs to. Shared Sass mixins keep breakpoints consistent, and CSS custom properties let both themes use the same layout.
- **Vite and npm.** Vite provides the development server and bundles the site into static files. The npm lockfile lets local development and CI install the same dependency versions.
- **ESLint, Stylelint and Prettier.** ESLint checks JavaScript and React hooks, Stylelint checks SCSS, and Prettier keeps formatting consistent.

## Run locally

Use the Node.js version specified in [.nvmrc](.nvmrc). From the repository root, run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To check formatting, run both linters and build the site, use `npm run check`. Then run `npm run preview` to open the production build locally.

## Project structure

```text
├── index.html                  # HTML entry point
├── package.json                # Dependencies and npm scripts
├── vite.config.js              # Vite and React plugin configuration
├── public/favicon.svg          # Site icon
└── src/
    ├── main.jsx                # Mounts React and imports styles/index.scss
    ├── App.jsx                 # Sets the order of the page sections
    ├── App.scss                # Page layout
    ├── components/
    │   ├── Header/             # Header, navigation and theme switch
    │   ├── Hero/               # Name, role and contact button
    │   ├── Skills/             # Skill categories and interactive tabs
    │   ├── About/              # Background and education
    │   └── Footer/             # Contact links
    └── styles/
        ├── index.scss          # Loads global and component styles
        ├── variables.scss      # Theme colors and shared values
        ├── globals.scss        # Site-wide styles
        ├── fonts.scss          # Base font family
        ├── normalize.scss      # Normalizes browser defaults
        └── toolkit/            # Sass functions, mixins and breakpoints
```

Each section keeps its markup and styles together. For example, edit [Skills.jsx](src/components/Skills/Skills.jsx) to change a skill and [Skills.scss](src/components/Skills/Skills.scss) to change how the tabs look. The Sass toolkit is adapted from [scss-toolkit](https://github.com/sl1dan3/scss-toolkit/tree/5dc59f6f9b2c2fd25428feada9dfe4cb6547ca6e/helpers).

---

## На русском

[Открыть сайт](https://sl1dan3.github.io/personal-website/)

Я Арсений Дементьев, фронтенд-разработчик. На этом одностраничном сайте я рассказываю о себе, показываю инструменты, с которыми работаю, и оставляю контакты. Вкладки с навыками можно переключать с клавиатуры. Сайт учитывает системную тему и запоминает выбор, если переключить её вручную.

### Технологии и зачем они здесь

- **React и JavaScript (JSX).** Каждая секция оформлена отдельным компонентом. Состояние вкладок, мобильного меню и переключателя темы хранится в соответствующих компонентах. Для перехода между секциями служат обычные HTML-якоря.
- **SCSS и БЭМ.** Стили каждого компонента лежат рядом с его JSX. По имени БЭМ-класса видно, к какому блоку относится правило. Общие Sass-миксины задают точки перехода между вариантами раскладки, а CSS-переменные позволяют менять тему и использовать одну раскладку для обеих.
- **Vite и npm.** Vite запускает локальный сервер и собирает статические файлы для публикации. Файл `package-lock.json` фиксирует версии зависимостей для локальной разработки и автоматической сборки.
- **ESLint, Stylelint и Prettier.** ESLint проверяет JavaScript и правила использования React-хуков, Stylelint проверяет SCSS, а Prettier поддерживает единое форматирование.

### Локальный запуск

Версия Node.js указана в [.nvmrc](.nvmrc). В корне репозитория выполни:

```sh
npm ci
npm run dev
```

Открой адрес, который Vite выведет в терминал. Команда `npm run check` проверит форматирование, запустит оба линтера и соберёт сайт. После этого `npm run preview` позволит посмотреть готовую сборку локально.

### Структура проекта

```text
├── index.html                  # Точка входа HTML
├── package.json                # Зависимости и команды npm
├── vite.config.js              # Настройки Vite и плагина React
├── public/favicon.svg          # Иконка сайта
└── src/
    ├── main.jsx                # Запускает React и подключает styles/index.scss
    ├── App.jsx                 # Задаёт порядок секций страницы
    ├── App.scss                # Стили страницы
    ├── components/
    │   ├── Header/             # Шапка, навигация и переключатель темы
    │   ├── Hero/               # Имя, роль и кнопка связи
    │   ├── Skills/             # Категории навыков и вкладки
    │   ├── About/              # Информация об авторе и учёбе
    │   └── Footer/             # Контакты
    └── styles/
        ├── index.scss          # Подключает общие стили и стили компонентов
        ├── variables.scss      # Цвета тем и общие переменные
        ├── globals.scss        # Стили для всего сайта
        ├── fonts.scss          # Основной шрифт
        ├── normalize.scss      # Нормализация браузерных стилей
        └── toolkit/            # Sass-функции, миксины и брейкпоинты
```

Разметка и стили каждой секции лежат рядом. Например, список навыков можно изменить в [Skills.jsx](src/components/Skills/Skills.jsx), а оформление вкладок — в [Skills.scss](src/components/Skills/Skills.scss). В основе набора Sass-утилит лежит [scss-toolkit](https://github.com/sl1dan3/scss-toolkit/tree/5dc59f6f9b2c2fd25428feada9dfe4cb6547ca6e/helpers).
