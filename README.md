# chandl.io

Personal site + resume + side-project showcase. A single static page built with [Astro](https://astro.build), deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + build to dist/
```

## Add a side project

Drop a Markdown file in `src/content/projects/` — that's it. The frontmatter is validated at build time.

```yaml
# src/content/projects/my-thing.md
---
title: my-thing.dev
tagline: One sentence on what it does.
url: https://my-thing.dev                  # optional — live link
repo: https://github.com/chandl/my-thing   # required
stack: [Go, SQLite]
status: live        # live | wip | archived
order: 4            # lower = earlier
accent: "#ff5c8a"   # optional — card highlight color
---
```

It shows up in the projects grid and the ⌘K command palette automatically.

## Edit resume content

Everything else (intro, experience, skills, education, links) lives in `src/data/resume.ts`.

## Layout

| Path | What |
| --- | --- |
| `src/pages/index.astro` | The page — composes the sections |
| `src/components/` | Nav, Hero, Projects, Experience, Toolkit, Contact, CommandPalette |
| `src/scripts/field.ts` | Hero dot-field canvas + name scramble |
| `src/styles/global.css` | Design tokens (dark/light), scroll reveals, print styles |
| `astro.config.mjs` | Site URL + legacy blog redirects to stacktracing.com |
| `scripts/og.mjs` | Regenerates `public/og.png` (`npm run og`) |

Printing the page (or ⌘K → "Print resume") produces a clean resume.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages. In the repo, **Settings → Pages → Source** must be set to **GitHub Actions**. The custom domain comes from `public/CNAME`.
