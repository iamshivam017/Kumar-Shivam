# Portfolio Redesign Design

## Goal

Rebuild Kumar Shivam's portfolio so recruiters, founders, engineers, clients, and hackathon judges can quickly understand his professional positioning, inspect credible projects, and reach his verified profiles.

## Source of truth

- Identity: Kumar Shivam.
- Positioning: AI/ML & Software Engineer, with supporting work in AI agents, full-stack systems, Web3, FinTech, and applied AI.
- Education: B.Sc. in Data Science & AI, Indian Institute of Technology Guwahati, 2023–2027.
- Program: AWS AI & ML Scholars, currently enrolled.
- Verified profiles: GitHub `iamshivam017`, LinkedIn `shivam017`, X `shivam_aarya017`.
- Project claims, technologies, status, repositories, and demo URLs come only from the connected GitHub account and repository documentation.

## Information architecture

The site remains a fast static single page. The order is: compact sticky navigation; proposition-led hero; four flagship case studies; capabilities; education and professional development; supporting work; about; contact; footer. Empty Writing and Resume links are omitted until real artifacts exist.

## Project selection

Flagships are AgentLedger, AgentShield AI, and Credit Risk Predictor. They have substantial public repositories and the strongest combination of technical depth, professional relevance, completeness, and public evidence. SafeSpend and ReviewLens appear in a compact additional-work index; ReviewLens links to its verified Streamlit demo. ProofPay is excluded because its public `main` branch contains only a placeholder README and points to unfinished development on another branch. CoSign, DiaCare AI, SolMate, and the earlier portfolio are omitted because current public repository evidence is unavailable or insufficient.

## Visual system

Use modern editorial structure with engineering precision: warm neutral canvas, near-black type, one restrained moss/acid-green accent, clean sans typography, thin rules, and open bands rather than generic cards. The name is small identity text; the proposition is the H1. Monospace is restricted to project numbers and technical metadata. Corners are square or lightly rounded. Motion is limited to navigation, disclosure, hover, and viewport-reveal cues and is disabled for reduced-motion users.

## Project presentation

Each flagship has problem, system, engineering detail, verified stack, status, and repository/demo actions. Compact code-native diagrams explain real flows without pretending to be product screenshots. Credit Risk Predictor uses a real repository plot where appropriate and preserves its limitations. Metrics appear only when explicitly documented and are labeled accurately, including AgentShield's synthetic benchmark qualifier.

## Accessibility and responsive behavior

Semantic landmarks, ordered headings, visible focus, skip link, accessible disclosure buttons, 44px touch targets, readable minimum text sizes, and reduced motion are required. Desktop uses a 12-column rhythm. Tablet and mobile reflow case studies, diagrams, navigation, and contact actions without horizontal scrolling.

## SEO and performance

Use a professional title and description, canonical URL, Open Graph/X metadata without an invented image, `Person` and `WebSite` JSON-LD, `robots.txt`, and `sitemap.xml`. Keep local fonts, no runtime dependencies, no trackers, no external JavaScript, and minimal layout shift.

## Verification

Static tests enforce content accuracy, required sections, safe external links, metadata, local assets, degree wording, and absence of B.Tech references. Browser QA covers 1440×900, 1280×800, 768×1024, and 390×844, keyboard navigation, disclosures, mobile menu, and overflow. Visual comparison uses the generated section concepts as references.
