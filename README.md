# Harsh Vaddoriya - Portfolio

A production-ready, beautifully designed portfolio application built with Next.js 15+, React 19, Tailwind CSS v4, and Jotai for state management.

## Features

*   **Modern Design:** Glassmorphic UI elements, smooth micro-interactions, and a premium aesthetic.
*   **Dark/Light Mode:** Seamless theme switching managed by Jotai state and Tailwind's class-based dark mode.
*   **Showcase Search:** A debounced search bar to filter showcase items (links, GitHub, CV download, etc.).
*   **State Management:** Powered by Jotai for lightweight, atomic state management.
*   **Code Quality:** Enforced with ESLint, TypeScript strict mode, and Husky pre-commit hooks running `lint-staged`.

## Tech Stack

*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS v4 (with custom `@custom-variant dark`)
*   **State Management:** Jotai (`atom`)
*   **Icons:** Custom inline SVGs
*   **Git Hooks:** Husky + `lint-staged`

## Getting Started

### Prerequisites

*   Node.js (v20+)
*   `pnpm` (recommended)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/harshvaddoriya/portfolio.git
    cd portfolio
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    ```

3.  Start the development server:
    ```bash
    pnpm dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

*   `app/`: Next.js App Router root.
    *   `common/`: Reusable, global components (Header, Footer, Atoms).
        *   `atoms/`: Smallest UI building blocks (Button, Icon, ThemeToggle).
    *   `components/`: Domain-specific components (HeroSection, SearchBar, ShowcaseList).
    *   `constants/`: Static data (e.g., showcase items).
    *   `hooks/`: Custom React hooks (e.g., `useDebounce`).
    *   `lib/`: Core logic and state (Jotai store).
    *   `types/`: TypeScript definitions.
*   `public/`: Static assets (images, fonts).

## Git Hooks

This project uses Husky to run pre-commit hooks. Before each commit, `lint-staged` will automatically run ESLint on all staged `.js`, `.jsx`, `.ts`, and `.tsx` files to ensure code quality.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
