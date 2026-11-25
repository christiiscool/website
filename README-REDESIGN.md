# Christi's Corner — site-wide redesign

The uploaded collage image remains the desktop homepage hero. This update rebuilds the pages beneath it.

## Navigation

- `/` — selected collage homepage, with active click areas linking to fresh pages.
- `/about` — personal story, interests, photographs and public experience summary.
- `/work` — interactive category-filtered projects showcase.
- `/work/[slug]` — six new project stories with source links where public and available.
- `/journal` — a small, working writing/ideas archive, no dead 'read more' buttons.
- `/contact` — functioning email, LinkedIn and GitHub contact links.

Old `/projects`, `/research`, `/market-notes`, `/experience`, and the two previous research detail paths redirect to the new locations. Existing material is not needed to render any of the new pages.

Project copy is stored in `data/creative-projects.ts`. The project illustrations in `components/creative-project-art.tsx` are conceptual artwork, not fabricated screenshots or backtest charts. The six case studies avoid confidential investment details and clearly label research limitations. Personal portrait images are in `public/art/`.

`styles/creative-pages.css` is the independent design system for the new site pages, reusing the cream, cobalt and pink editorial/collage language of the approved homepage. Existing legacy components can be cleaned up after final publication QA.
