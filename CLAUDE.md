# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SSIM Next is a Next.js 15 website for Siva Sivani Institute of Management (SSIM), an AICTE-approved PGDM B-School in Hyderabad. The site features program admissions, faculty publications, placement records, blogs, and more.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS + shadcn/ui (Radix UI primitives)
- **Database**: MySQL (mysql2/promise with connection pooling)
- **State Management**: TanStack React Query
- **Forms**: React Hook Form + Zod validation
- **Rich Text**: Tiptap 3
- **Animations**: Framer Motion + Motion
- **Image Processing**: Sharp
- **File Storage**: Azure Blob Storage
- **Email**: Nodemailer
- **Analytics**: Google Tag Manager + Google Analytics (via @next/third-parties)

## Common Commands

```bash
pnpm dev          # Development server with Turbopack
pnpm build        # Production build
pnpm start        # Start production server (standalone)
pnpm lint         # ESLint
pnpm logs         # Inspect application logs
pnpm logs:overview # Log overview
pnpm logs:errors  # Error logs only
pnpm debug        # Debug logs
pnpm sitemap:regenerate  # Regenerate sitemap
```

## Architecture

### Directory Structure

- **`src/app/`** — Next.js App Router pages and API routes
  - Pages use file-based routing (e.g., `src/app/blog/page.jsx`)
  - Dynamic routes use bracket notation (e.g., `[blogId]`, `[programId]`)
  - API routes in `src/app/api/` handle CRUD operations
- **`src/pages/`** — Home page section components (Header, Home subcomponents, Footer)
- **`src/components/`** — Shared components
  - **`ui/`** — shadcn/ui component library (buttons, dialogs, forms, etc.)
  - **`admissions/`** — Admission-specific components
- **`src/lib/`** — Utilities and integrations
  - `db.js` — MySQL connection pool with auto schema initialization
  - `utils.js` — `cn()` helper (clsx + tailwind-merge)
  - `azure-blob-storage.js` — Azure Blob Storage integration
  - `logger.js` / `file-logger.js` — Application logging
  - `sitemap-utils.js` — Sitemap utilities
- **`src/hooks/`** — Custom React hooks
- **`scripts/`** — Operational scripts (log inspection, sitemap management)
- **`public/`** — Static assets organized by section (Hero, Home, about/, etc.)

### Key Patterns

**Database**: MySQL pool is created at startup if `DB_HOST`, `DB_USER`, `DB_DATABASE` env vars are present. Schema auto-initializes on runtime (not during build). SSL certificates are loaded from `public/DigiCertGlobalRootG2.crt.pem` with fallback to system certs.

**API Routes**: Located in `src/app/api/`. They handle:
- Blogs CRUD (`/api/blogs`, `/api/blogs/all`, `/api/blogs/[blogId]`)
- Placements, Internships, Guest Lectures, Publications (with Excel upload routes)
- Contact form submissions
- Sitemap regeneration

**Home Page Structure**: The homepage (`src/app/page.jsx`) composes section components from `src/pages/Home/` with Framer Motion scroll animations via `useInView`. Components are wrapped in `SectionWrapper` for animation triggers.

**Forms**: Use `react-hook-form` with `@hookform/resolvers` and `zod` for validation. UI components come from `src/components/ui/form.jsx`.

**Schema Components**: `src/components/Schema.jsx` and `src/components/DynamicSchema.jsx` render JSON-LD structured data (Organization, WebSite, Article schemas).

**Conditional Layout**: `ConditionalLayout` wraps page content for conditional rendering of navigation elements.

## Environment Variables

Key environment variables required at runtime:
- `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_DATABASE` — MySQL connection
- `AZURE_STORAGE_CONNECTION_STRING` — Azure Blob Storage
- `NEXT_PUBLIC_BASE_URL` / `NEXT_PUBLIC_SITE_URL` — Site URL for metadata
- `GMAIL_USER`, `GMAIL_PASS` — Email (nodemailer)
- `GTM_ID`, `GA_ID` — Analytics (also set in code via `@next/third-parties`)
