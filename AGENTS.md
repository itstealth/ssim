# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 15 site using the App Router. Route pages and API handlers live in `src/app/` (API routes are under `src/app/api/`). Shared UI is in `src/components/`, including `ui/` primitives and feature folders; page sections are in `src/sections/`. Reusable hooks, data, and helpers live in `src/hooks/`, `src/data/`, `src/lib/`, and `src/utils/`. Static images and other served files belong in `public/`. Operational and sitemap scripts are in `scripts/`.

## Build, Test, and Development Commands

Use pnpm (Node.js 20.x):

- `pnpm install` installs the locked dependencies.
- `pnpm dev` starts the local Next.js development server with Turbopack.
- `pnpm build` generates sitemap routes, then creates a production build.
- `pnpm start` runs the standalone production server after a build.
- `pnpm lint` runs the configured Next.js lint command.
- `pnpm sitemap:test` checks sitemap output; `pnpm sitemap:regenerate` rebuilds it.

There is no repository-wide test runner configured. Run the relevant lint, build, or sitemap checks for your change; don’t treat standalone root `test-*.js` files as a maintained test suite.

## Coding Style & Naming Conventions

Follow the existing JavaScript and JSX style: two-space indentation, double quotes, and semicolons. Use PascalCase for React component files and names, camelCase for functions, hooks, and variables, and kebab-case for route segments. Keep route-specific UI near its route or in `src/sections/`; place genuinely shared UI in `src/components/`. Use the `@/` alias for imports from `src/`. ESLint uses `eslint-config-next` with Next.js Core Web Vitals rules.

## Testing Guidelines

Add focused checks when introducing behavior that can be tested in isolation. At minimum, run `pnpm lint` and, for production-facing or routing changes, `pnpm build`. Include manual verification steps for UI changes; provide before/after screenshots in the pull request when appearance changes materially.

## Commit & Pull Request Guidelines

No commit-message convention is established by the available history. Use a concise imperative subject, optionally scoped, such as `fix(admissions): correct form validation`. Pull requests should explain the change and user impact, link related issues, list validation performed, and include screenshots for visual changes. Call out new environment variables or deployment steps.

## Security & Configuration

Keep credentials out of source control. Configure database, Azure Storage, email, and public site URL values through environment variables; use placeholders in examples and never commit populated secrets.
