# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DigiCard is a React-based digital portfolio/business card application featuring multiple dynamic themes and interactive console easter eggs. The application showcases projects, social links, and a featured post in various visual styles.

## Development Commands

### Core Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint with error reporting
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Git Hooks

- Pre-commit hooks are configured via Husky to run linting and formatting
- Lint-staged runs ESLint and Prettier on staged files before commits

## Architecture

### Theme System

The application uses a comprehensive theme system with 5 distinct themes:

- **light** (Github theme)
- **dark** (Dracula theme)
- **matrix** (Matrix/terminal theme with animated background)
- **web2** (Web 2.0 retro theme)
- **csszen** (CSS Zen Garden inspired theme)

Theme state is managed in `App.jsx` using React state and persisted in `sessionStorage`. Theme classes are applied to `document.documentElement` and body classes are dynamically managed for theme-specific backgrounds.

### Component Structure

- **App.jsx** - Main application component with theme management
- **Header.jsx** - Contains theme switching and navigation
- **Profile.jsx** - User profile and bio section
- **Projects.jsx** - Project showcase with responsive cards
- **Links.jsx** - Social links with theme-aware styling
- **FeaturedPost.jsx** - Featured content section
- **Footer.jsx** - Theme-specific footer implementations

### Project Data Management

Projects are defined as an array in `src/components/Projects.jsx` with:

- Multiple image variants (normal/wide) for different layouts
- Order-based sorting system
- Theme-specific rendering (ClassicProjectsList for web2/csszen themes)

### Styling Architecture

- **Tailwind CSS** for utility-first styling
- **Custom CSS classes** for theme-specific styling (matrix effects, web2 gradients)
- **Conditional styling** using `clsx` for theme-aware component styling
- **CSS-in-JS** for dynamic styling in special cases

### Interactive Features

- **Console Easter Eggs** (`src/utils/consoleEasterEgg.js`) - Interactive console commands for theme unlocking
- **Ripple Effects** - Click animations on project cards
- **Intersection Observer** - Scroll-based animations (currently disabled but infrastructure present)
- **Theme Persistence** - Session storage for theme state

## Key Files

### Configuration

- `vite.config.js` - Vite configuration with React SWC and image optimization
- `tailwind.config.js` - Tailwind CSS configuration with custom theme colors
- `eslint.config.js` - ESLint configuration for React
- `postcss.config.js` - PostCSS configuration

### Assets

- `src/assets/` - Images, audio files, and static assets
- Project images are imported directly in components
- Theme-specific assets (matrix-bg.gif, css-zen-banner.png)

### Styling

- `src/index.css` - Global styles and theme-specific CSS
- `src/App.css` - Application-specific styles

## Development Notes

### Theme Development

- New themes require CSS class additions in `src/index.css`
- Theme switching logic in `App.jsx` handles body class management
- Component styling uses conditional classes with `clsx`

### Project Management

- Projects are defined in `Projects.jsx` with order-based sorting
- Image optimization is handled by Vite plugin
- Different image variants can be used based on layout requirements

### Console Easter Eggs

- Interactive commands are defined in `consoleEasterEgg.js`
- Commands can trigger theme changes and special effects
- Cleanup function provided for proper component unmounting

## Build Configuration

- **Vite** for fast development and optimized builds
- **React SWC** for faster compilation
- **Image optimization** via vite-plugin-imagemin
- **ESLint** for code quality
- **Prettier** for consistent formatting
- **Husky** for Git hooks management
