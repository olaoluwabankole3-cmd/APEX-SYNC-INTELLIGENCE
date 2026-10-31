# QORVEX Corporate Website — Initial Brand Integration

This is a non-destructive first iteration of the QORVEX website based on the original APEX SYNC INTELLIGENCE React/Vite project. The feature branch preserves all legacy site components for reference, but the new entry point renders QORVEX-specific content.

## Start

From the \`APEX SYNC INTELLIGENCE\` directory:

\`\`\`bash
npm install
npm run dev
npm run lint
npm run build
\`\`\`

## New site code

- \`src/QorvexSite.tsx\`: responsive single-page corporate website
- \`src/qorvex.css\`: QORVEX design system and responsive styles
- \`public/qorvex-wordmark.svg\`: approved brand SVG wordmark
- \`public/qorvex-emblem.svg\`: approved geometric Q emblem
- \`public/favicon.svg\`: approved app icon construction
- \`src/App.tsx\`: renders QorvexSite

## Business content safeguards

- QORVEX is the company; CORTEX is its **only current product**.
- CORTEX is identified as **in development**, with initial focus on financial institutions.
- No unverified jobs, client names, testimonials, numerical performance claims, legal registrations, or corporate contact details are published.
- No fake contact form: the Contact section explicitly says contact channels are pending verification.
- There is no production domain/deployment configuration yet.

## Before launching

1. Verify final brand approval and trademark/domain availability.
2. Provide a verified corporate contact address and working backend or mail service if a form is desired.
3. Review accessibility, SEO, responsive behavior, build output, and security headers.
4. Determine whether the site should be split into separate SEO-friendly routes/pages.
5. Confirm hiring claims and whether a journal has genuine approved articles.

The original site remains intact on the repository's \`main\` branch. This branch is intended for review only.
