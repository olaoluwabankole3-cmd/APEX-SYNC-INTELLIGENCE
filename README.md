# QORVEX

**Build What Comes Next.**

The official source repository for the QORVEX corporate website.

The application lives in **[QORVEX/](QORVEX/)**. See [its README](QORVEX/README.md) for development, page routes, build instructions and release notes.

## Develop

\`\`\`bash
cd QORVEX
npm ci
npm run dev
\`\`\`

## Cloudflare Pages

The production site is hosted in the connected Cloudflare Pages project. Its build configuration currently refers to the application's **former folder location**.

For uninterrupted deployments, the old folder path remains temporarily as a **Git symbolic link** pointing to \`QORVEX/\`. After you change Cloudflare Pages **Build > Root directory** to \`QORVEX\` and confirm a successful deployment, this compatibility link can be deleted.

Build command: \`npm run build\`

Output directory: \`dist\`

The GitHub repository display/name and Cloudflare project's \`.pages.dev\` address are separate account settings. Renaming source files does not automatically change either of them.
