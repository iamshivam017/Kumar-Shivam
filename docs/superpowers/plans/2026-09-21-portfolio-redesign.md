# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing template-like portfolio with a factual, recruiter-ready AI/ML and software-engineering portfolio backed by verified GitHub projects.

**Architecture:** Preserve the dependency-free static architecture and Sites identity. Rebuild the page in focused HTML sections, use one tokenized CSS system, and keep JavaScript limited to navigation, disclosures, and progressive reveal.

**Tech Stack:** Semantic HTML5, CSS custom properties, vanilla JavaScript, Node.js static validation, Sites static hosting.

**Spec:** `docs/superpowers/specs/2026-09-21-portfolio-redesign-design.md`

## Global Constraints

- Exact education wording: `B.Sc. in Data Science & AI`, `Indian Institute of Technology Guwahati`, `2023–2027`.
- No B.Tech reference anywhere in shipped source or metadata.
- No invented experience, awards, metrics, email, resume, demos, or project status.
- Use verified GitHub repositories and documented live URLs only.
- Preserve `.openai/hosting.json` and the existing Site project ID.
- Respect `prefers-reduced-motion` and WCAG AA contrast.

## Review Focus

- A 320px viewport must not overflow horizontally.
- The mobile menu must close on link activation, Escape, and desktop transition.
- Project disclosure controls must remain keyboard-operable with accurate expanded state.
- External links opened in a new tab must include `noopener noreferrer`.
- JSON-LD must contain the corrected degree and verified profile URLs only.

---

### Task 1: Content architecture and accuracy contract

**Files:**
- Create: `tests/portfolio.test.mjs`
- Modify: `dist/index.html`

**Interfaces:**
- Consumes: verified GitHub project summaries and the design spec.
- Produces: stable section IDs and semantic project/article markup consumed by CSS and JavaScript.

- [ ] **Step 1: Write the failing test**

Create Node assertions for the corrected degree, professional positioning, required project names/links, required section IDs, one H1, safe external links, and the absence of `B.Tech`.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/portfolio.test.mjs`
Expected: FAIL because the current page contains B.Tech and lacks the new structure.

- [ ] **Step 3: Implement the semantic content**

Replace `dist/index.html` with the hero, four case studies, capabilities, professional development, supporting work, about, contact, footer, and verified links from the spec.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/portfolio.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

`git commit -m "refactor: establish professional portfolio content architecture"`

### Task 2: Responsive design system and interaction behavior

**Files:**
- Modify: `dist/styles.css`
- Modify: `dist/script.js`
- Modify: `tests/portfolio.test.mjs`

**Interfaces:**
- Consumes: stable classes and IDs from Task 1.
- Produces: responsive visual system, menu state, disclosure state, and reveal behavior.

- [ ] **Step 1: Extend the failing test**

Assert required design tokens, breakpoint coverage, reduced-motion handling, focus-visible styles, menu ARIA updates, disclosure ARIA updates, and no remote script/font dependencies.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/portfolio.test.mjs`
Expected: FAIL because the old styling and JavaScript do not implement the new contract.

- [ ] **Step 3: Implement the visual and interaction system**

Build the compact hero, project case-study bands, diagrams, capability table, experience band, about/contact layout, responsive breakpoints, accessible mobile navigation, project disclosures, and reduced-motion behavior.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/portfolio.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

`git commit -m "feat: redesign portfolio experience and responsive system"`

### Task 3: SEO, documentation, and production validation

**Files:**
- Modify: `dist/index.html`
- Create: `dist/robots.txt`
- Create: `dist/sitemap.xml`
- Modify: `README.md`
- Modify: `tests/portfolio.test.mjs`

**Interfaces:**
- Consumes: final page structure and canonical Sites URL.
- Produces: crawl metadata, JSON-LD, maintainable documentation, and deployable static output.

- [ ] **Step 1: Extend the failing test**

Assert canonical URL, Open Graph/X tags, `Person` and `WebSite` JSON-LD, robots/sitemap entries, local asset resolution, unique IDs, and valid fragment links.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/portfolio.test.mjs`
Expected: FAIL because crawler files and structured data are missing.

- [ ] **Step 3: Implement metadata and documentation**

Add metadata, structured data, robots, sitemap, and update README with the new information architecture, verified project policy, and checks.

- [ ] **Step 4: Run static and browser validation**

Run: `node --test tests/portfolio.test.mjs && node --check dist/script.js`
Expected: PASS with no missing assets, unsafe links, or content inaccuracies. Then run supervised browser QA at the required viewports and fix blocking issues.

- [ ] **Step 5: Commit**

`git commit -m "seo: harden portfolio metadata and production quality"`
