# octaviosantacruz.com

Personal portfolio for Octavio Santacruz, focused on security operations, technical practice, and selected work.

Built with [Astro](https://astro.build) and deployed as a static site.

## Proposed visual redesign

[Design review and proposal, 2026-10-21](docs/DESIGN-REVIEW-2026-10-21.md):
current-site findings, screenshots, a hero concept, color palette, motion
direction and an implementation plan. Pending owner review; not implemented
or published.

## Stack

- Astro
- TypeScript
- CSS
- Static output

## Development

```sh
npm install
npm run dev
npm run build
```

## Public project descriptions

The apex serves this portfolio. Project descriptions in English and Spanish
separate implemented capabilities from roadmap goals. Project-site links do
not imply a public operational console; Custodia links to its synthetic demo.

The local project section is now **Projects I’m working on**: one layout for
Switchboard, SIGEA and Custodia, with a wide explanatory scene and a shared
Today / What’s next checkpoint. The three-step animations use fictional data
and describe the idea; they do not call product APIs or prove an integration.
Visitors choose projects, pause the explanation or select a step. Reduced
motion and a complete no-JavaScript view are supported.

Custodia presents Acme Corp and the current interface. Its Go backend,
verified Switchboard access and additional tool adapters remain planned.
Implementation, local verification and review captures:
[Project showcase, 2026-10-22](docs/PROJECTS-2026-10-22.md).
These local changes do not publish or redeploy the site. Earlier presentation
iterations remain in [Custodia presentation](docs/CUSTODIA-2026-10-22.md).
