# Christi — whole-site art-direction redesign

Source inspiration: https://aarchiwen.com/ (visual design language only; no original source code or art copied).

This preview uses an original, cohesive design inspired by Aarchiwen's pale panelled photo-wall setting, oversized cobalt editorial serif, personal photography and collected physical memorabilia. It keeps Christi's own photos, research, project titles and contact information.

## Main site routes
- `/` welcome, original photographed objects and featured work
- `/about` photographic personal story
- `/work` project artefact archive (all six existing projects)
- `/journal` a notebook of short thoughts
- `/contact` interactive mail-style contact screen
- `/work/[slug]` existing detailed case studies (including original Dell model and factor report) remain untouched, wrapped by the new site shell.

## Integration
Code targets a Next.js App Router repository and imports the existing `data/creative-projects.ts` and detailed report components. Upload the files to the corresponding paths from the package; preserve all other project files.

## Preview
Open `previews/home.html`, `previews/work.html`, etc. They are self-contained HTML exports of the TSX components for visual review. Their HTML links between the five pages work locally; project links resolve on the main Next.js site only. Open with a local HTTP file server if your browser restricts `file://` access.

## Visual design considerations
- Text, photos, objects and links are independent DOM elements, not invisible overlays on a screenshot.
- Photograph film strip and camcorder link to the About page; project artefacts link to real project pages.
- Actual source research chart is used in the factor notebook, not fabricated performance data.
- The photos were supplied by Christi for this website; original generated SVG embellishments are included, with no downloaded third-party images or fonts.
- The mobile arrangement deliberately differs from desktop.
- Supports keyboard focus, accessible labels and reduced motion.

## Verification
- Visual HTML render tested in Chromium with 390px, 768px and 1440px widths for all five pages.
- No missing images, page JS exceptions, or horizontal document overflow detected in the static preview.
- TSX transpile syntax check passed; styles and SVG parsed successfully.
- Full Next.js/Vercel build and deployment are NOT tested by this package.
