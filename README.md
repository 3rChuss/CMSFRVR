# CMSFRVR

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Introduction

CMSFRVR is a content management system designed to provide a seamless experience for managing and delivering content. This project is built using modern web technologies including React, TypeScript, and Tailwind CSS.

## Installation

To get started with the project, clone the repository and install the dependencies using `npm`:

```sh
git clone <https://github.com/3rChuss/CMSFRVR>
cd CMSFRVR
npm install
```

Usage

```sh
npm run dev
```

To build the project for production, run:

```sh
npm run build
```

To preview the production build, run:

```sh
npm run preview
```

## Project Structure

.editorconfig
.eslintrc
.github/
.gitignore
.prettierrc
.vitest/
setup.ts
.vscode/
extensions.json
settings.json
index.html
package.json
pnpm-lock.yaml
postcss.config.mjs
public/
const/
daily.json
impressions.json
kpis.json
images/
robots.txt
README.md
src/
App.tsx
assets/
components/
Avatar/
Button/
CTA/
Form/
Input/
KPI/
Layout/
Metrics/
context/
hoc/
hooks/
index.tsx
interfaces/
pages/
routes/
utils/
tailwind.config.mjs
tsconfig.json
vite.config.ts

> public/: Static assets and configuration files.
> src/: Main source code directory.
> components/: Reusable UI components.
> context/: React context providers.
> hoc/: Higher-order components.
> hooks/: Custom React hooks.
> interfaces/: TypeScript interfaces and types.
> pages/: Page components.
> routes/: Application routes.
> utils/: Utility functions and helpers.

## Priority Tasks

1. Implement core functionality in `src/pages/`.
2. Develop reusable components in `src/components/`.
3. Create custom hooks in `src/hooks/`.
4. Define TypeScript interfaces and types in `src/interfaces/`.
5. Set up higher-order components in `src/hoc/`.
6. Configure application routes in `src/routes/`.
7. Add utility functions and helpers in `src/utils/`.

## Scripts

npm run dev: Start the development server.
npm run build: Build the project for production.
npm run preview: Preview the production build.
npm run test: Run tests.

## Developer notes

Used Tailwind Css for its facility in develop fast and quickly unique styles.
Used React with Typescript for the reusability of components, type safety, and to enhance maintainability
throughout the application. TypeScript helps in catching errors early during development, leading to a more robust codebase.
