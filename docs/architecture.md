# Application Architecture

This document provides a high-level overview of the technical architecture of the digicard application.

## 1. Overview

The application is a modern single-page application (SPA) built using React and Vite. It serves as a digital portfolio or personal website, dynamically fetching content from a headless CMS (Contentful).

## 2. Core Technologies

- _Frontend Library:_ [React](https.react.dev/) is used for building the user interface from components.
- _Build Tool:_ [Vite](https://vitejs.dev/) provides a fast development server and bundles the application for production.
- _Styling:_ [Tailwind CSS](https://tailwindcss.com/) is used for utility-first styling.
- _Content Management:_ [Contentful](https://www.contentful.com/) is used as a headless CMS to manage dynamic content like blog posts, project details, etc.

## 3. Project Structure

The codebase is organized into the following key directories:

- `src/`: Contains all the main source code for the application.
  - `src/components/`: Houses reusable React components that make up the UI.
  - `src/hooks/`: Contains custom React hooks, notably `useContentful.js` for fetching data.
  - `src/utils/`: Includes helper functions, such as the Contentful client setup (`contentful.js`).
  - `src/assets/`: Stores static assets like images and fonts.
  - `src/main.jsx`: The main entry point of the application.
- `public/`: Stores static assets that are not processed by the build tool (e.g., `favicon.png`).
- `docs/`: Contains documentation for the project.
- `test/`: Contains test files for the application.

## 4. Data Flow

The application follows a unidirectional data flow.

1. _Content Fetching:_ The `useContentful` custom hook is responsible for communicating with the Contentful API.
2. _State Management:_ The data fetched from Contentful is stored in the state of the components that use the `useContentful` hook.
3. _Rendering:_ Components render the data received from their state and props. User interactions can trigger new data fetches or state updates.

## 5. Deployment

The application is deployed on [Netlify](https://netlify.com/), providing continuous deployment from the main branch with automatic builds and optimized performance.

## 6. Tooling & Standards

- _Linting:_ [ESLint](https://eslint.org/) is configured to enforce code quality and consistency.
- _Formatting:_ [Prettier](https://prettier.io/) is used for automatic code formatting.
- _Development Server:_ Vite's development server provides hot module replacement (HMR) for a seamless development experience.

## Testing

The application is tested using [Vitest](https://vitest.dev/), a fast and modern test runner for JavaScript and TypeScript. The tests are located in the `test/` directory.
