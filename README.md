# Kumar Shivam — Professional Portfolio

A fast, dependency-free portfolio positioning Kumar Shivam as an AI/ML & Software Engineer. The experience uses an editorial grid, factual project case studies, compact architecture diagrams, responsive layouts, and accessible progressive enhancement.

## Information architecture

1. Proposition-led hero with education and professional links
2. Three evidence-backed flagship case studies
3. Capabilities connected to demonstrated projects
4. Education and professional development
5. Supporting work
6. About and professional contact

## Featured work

- AgentLedger — idempotent x402-inspired Razorpay settlement gateway
- AgentShield AI — AI payment risk and deterministic policy layer
- Credit Risk Predictor — leakage-aware explainable ML pipeline
- SafeSpend — evidence-aware personal finance decision agent
- ReviewLens — supporting NLP project with a public demo

Project selection and wording are based on the connected GitHub account and public repository documentation. Incomplete public projects or projects without enough current evidence are not featured. The page does not invent employment, clients, awards, contact details, impact metrics, or demos.

## Source structure

- `dist/index.html` — semantic content, metadata, structured data, and page architecture
- `dist/styles.css` — tokens, responsive layout, interaction states, and reduced motion
- `dist/script.js` — accessible navigation, project details, scroll reveal, and header state
- `dist/robots.txt` and `dist/sitemap.xml` — crawl configuration
- `tests/portfolio.test.mjs` — content, accessibility, asset, interaction, and SEO contract

## Local use

Serve `dist` with any static web server. No installation or build step is required.

## Validation

```bash
node --test tests/portfolio.test.mjs
node --check dist/script.js
```

The tests reject incorrect degree wording, unverified flagship projects, unsafe external links, missing responsive/accessibility contracts, broken fragments/assets, and incomplete professional metadata.
