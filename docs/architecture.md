# Application Architecture

This document provides a high-level overview of the technical architecture of the digicard application.

## 1. Overview

The application is a modern single-page application (SPA) built using React and Vite. It serves as a digital portfolio or personal website, dynamically fetching content from a headless CMS (Contentful).

## 2. Core Technologies

- _Frontend Library:_ [React](https.react.dev/) is used for building the user interface from components.
- _Build Tool:_ [Vite](https://vitejs.dev/) provides a fast development server and bundles the application for production.
- _Styling:_ Hybrid approach combining [Tailwind CSS](https://tailwindcss.com/) for layout utilities with CSS Modules for semantic component styling.
- _Content Management:_ [Contentful](https://www.contentful.com/) is used as a headless CMS to manage dynamic content like blog posts, project details, etc.

## 3. Project Structure

The codebase is organized into the following key directories:

- `src/`: Contains all the main source code for the application.
  - `src/components/`: Houses reusable React components that make up the UI.
    - `src/components/helpers/`: Component-specific helper functions, including theme management utilities.
  - `src/hooks/`: Contains custom React hooks, notably `useContentful.js` for fetching data.
  - `src/utils/`: Includes helper functions, such as the Contentful client setup (`contentful.js`).
  - `src/styles/`: Contains shared CSS files including color custom properties (`colors.css`).
  - `src/assets/`: Stores static assets like images and fonts.
  - `src/main.jsx`: The main entry point of the application.
- `public/`: Stores static assets that are not processed by the build tool (e.g., `favicon.png`).
- `docs/`: Contains documentation for the project.
- `test/`: Contains test files for the application.

## 4. CSS Architecture

The application uses a hybrid styling approach that combines the best of utility-first and component-scoped styling:

### 4.1 Hybrid Styling Strategy

- **Tailwind CSS for Layout**: Used for spacing, positioning, flexbox, grid, and responsive utilities (e.g., `flex`, `p-4`, `mb-2`, `justify-center`)
- **CSS Modules for Styling**: Used for colors, typography, borders, shadows, and visual appearance with semantic class names

### 4.2 CSS Modules Implementation

Each component can have its own `.module.css` file with semantic class names:

```css
/* Component.module.css */
.primaryButton {
  background-color: var(--github-blue);
  border-radius: 0.375rem;
  font-weight: 600;
}
```

### 4.3 Theme Management

The application supports multiple themes (GitHub, Dracula, Matrix, Web2, CSS Zen Garden) through:

- **Color Custom Properties**: Defined in `src/styles/colors.css` with CSS variables for all theme colors
- **Theme Helper Functions**: Located in `src/components/helpers/themeClassHelper.js` for dynamic theme class selection
- **Theme-Specific Classes**: CSS modules use theme suffixes (e.g., `buttonGithub`, `buttonMatrix`) for theme variations

Example theme helper usage:

```javascript
import { createThemeClassGetter } from './helpers/themeClassHelper';
const getThemeClass = createThemeClassGetter(styles);
const className = getThemeClass(theme, 'primaryButton');
```

### 4.4 Migration Strategy

The codebase is gradually migrating from Tailwind utility soup to semantic CSS modules while preserving layout utilities for optimal developer experience and maintainability.

## 5. Data Flow

The application follows a unidirectional data flow.

1. _Content Fetching:_ The `useContentful` custom hook is responsible for communicating with the Contentful API.
2. _State Management:_ The data fetched from Contentful is stored in the state of the components that use the `useContentful` hook.
3. _Rendering:_ Components render the data received from their state and props. User interactions can trigger new data fetches or state updates.

## 6. Deployment

The application is deployed on [Netlify](https://netlify.com/), providing continuous deployment from the main branch with automatic builds and optimized performance.

## 7. Tooling & Standards

- _Linting:_ [ESLint](https://eslint.org/) is configured to enforce code quality and consistency.
- _Formatting:_ [Prettier](https://prettier.io/) is used for automatic code formatting.
- _Development Server:_ Vite's development server provides hot module replacement (HMR) for a seamless development experience.

## Testing

The application is tested using [Vitest](https://vitest.dev/), a fast and modern test runner for JavaScript and TypeScript. The tests are located in the `test/` directory.
