# TerraStack Docs Handoff

## Project Summary

This repository contains the TerraStack documentation site. It is a React Router + Vite application with Tailwind CSS support and optional Docker/Nginx deployment assets.

## Tech Stack

- React Router
- Vite
- TypeScript
- Tailwind CSS
- Docker + Nginx (deployment path)

## Local Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Key Repository Paths

- `app/` — Route modules and app code
- `build/` — Build output (generated)
- `reference-material/` — Supporting reference docs/assets
- `Dockerfile` / `docker-compose.yml` / `nginx.conf` — Containerized deployment setup

## Operational Notes

- Node dependencies are managed with `npm` (`package-lock.json` is present).
- Tailwind is configured via `tailwind.config.ts`.
- Vite and React Router config live in `vite.config.ts` and `react-router.config.ts`.

## Recommended Handoff Checklist

1. Run `npm install` and `npm run dev` to confirm local setup.
2. Run `npm run build` before deployment changes.
3. Validate Docker image build if deploying via container.
4. Review `reference-material/` for product/domain context before major doc updates.
