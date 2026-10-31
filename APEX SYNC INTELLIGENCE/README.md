# QORVEX — Corporate Website V3

This is the **multi-page QORVEX corporate website**, built from the earlier APEX SYNC INTELLIGENCE / QORVEX V1 and V2 design iterations. It preserves the approved QORVEX identity and separates the company's story, philosophy, product, innovation and editorial content into dedicated experiences.

**Public release:** approved for deployment to the Cloudflare Pages production branch. Update the custom domain and official contact details separately.

## Website pages

| Route | Purpose |
|---|---|
| \`/\` | Editorial homepage and company/product introduction |
| \`/company\` | Corporate philosophy, origin and brand interpretation |
| \`/approach\` | Four-stage interactive method: Quest / Vision / Execution / Impact |
| \`/cortex\` | Current product, planned architecture, intelligence models and oversight |
| \`/innovation\` | Research and engineering philosophy |
| \`/notes\` | Filterable original editorial Field Notes |
| \`/notes/:slug\` | Distinct full-length article pages with browser-readable URLs |
| \`/careers\` | Working culture and truthful current role status |
| \`/contact\` | Corporate enquiry topics and honest contact-channel status |
| Other | Designed 404 page |

### Implementation

- React, TypeScript, Vite and the project's existing packages
- Path-based navigation via the browser History API, with back/forward handling
- Shared site header/footer and custom per-page art direction
- Custom responsive CSS with breakpoints down to 320px
- Accessibility: skip navigation, semantic headings, ARIA tabs and menu, focus outlines, reduced-motion support, touch targets
- Original vector/SVG graphic language and actual QORVEX SVG assets
- Live browser QA with Playwright, screenshots, and checks for mobile layouts

### File structure

- \`src/qorvex3/layout.tsx\` — routing, header, footer and page helpers
- \`src/qorvex3/home.tsx\` — homepage
- \`src/qorvex3/corporate.tsx\` — company, approach and innovation
- \`src/qorvex3/cortex.tsx\` — CORTEX product page and interactive concept illustration
- \`src/qorvex3/editorial.tsx\` — Field Notes, articles, careers, contact and 404
- \`src/qorvex3/content.ts\` — single place for editorial and product narrative content
- \`src/qorvex3/base.css\` — brand/layout styles
- \`src/qorvex3/pages.css\` — corporate and home styles
- \`src/qorvex3/details.css\` — product, editorial and contact styles
- \`scripts/multipage-qa.mjs\` — automated route and mobile QA

## Run locally

From the \`APEX SYNC INTELLIGENCE\` directory:

\`\`\`bash
npm ci
npm run lint
npm run build
npm run dev
\`\`\`

Vite builds to \`dist\`. Cloudflare Pages automatically creates a preview for this branch in the existing Pages project.

## Corporate facts and integrity

- QORVEX is the company; CORTEX is its **only current product**.
- CORTEX is described as **in development**; diagrams are explicitly conceptual, not working-product screenshots.
- No invented institutional clients, achievements, verified legal status, quantitative outcomes, ownership relationships or job vacancies.
- No fake contact form, fabricated public corporate email, or nonexistent back-end submission.
- Field Notes are **original editorial perspectives**, not dated news claims.

## Remaining production improvements

1. Founder approval of each page and brand artwork.
2. Test on real iOS and Android devices in addition to automated responsive browser runs.
3. Provide **verified** contact details and legal/privacy documents before creating enquiry forms.
4. The temporary \`noindex, nofollow\` directive was removed for the public release. Configure canonical URLs and any redirects once the final QORVEX domain is connected.
5. Set up analytics with privacy consideration and a genuine editorial workflow.
6. Consider building static route-level HTML via SSR or prerendering for the strongest search indexing and social sharing.
7. Run Lighthouse and accessibility reviews, self-host fonts, verify 404 behavior on Cloudflare Pages, then deploy deliberately.

Use the production website as the source of truth after release. Keep the older branch previews for historical visual comparison only.
