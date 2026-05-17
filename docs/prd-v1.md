# SANA-WM V1 PRD

## Goal
Launch an English-first independent guide that satisfies the first search for `SANA-WM` better than a paper page or a news recap.

## Non-goals
- No login or registration.
- No payment flow.
- No hosted generator.
- No multi-language rollout in V1.

## Audience
- AI-curious searchers who saw the term in news or social posts.
- Researchers and builders checking whether the model is worth deeper attention.
- Users who want the official examples and links without reading the paper first.

## Page Structure
1. Hero
2. What is SANA-WM?
3. Why people are searching for it now
4. What it can do
5. Official examples
6. How it works
7. Hardware and official resources
8. FAQ
9. Source and attribution block

## Information Architecture
- `/` homepage
- `/about`
- `/privacy`
- `/terms`
- `/contact`
- `/robots.txt`
- `/sitemap.xml`

## Design Declaration
- Purpose: help a first-time searcher understand the model in under a minute and reach the right official source in one click.
- Tone: cinematic technical editorial - dark, precise, research-minded, and free of SaaS-template noise.
- Differentiation: the full-bleed official reel makes the capability obvious before the visitor reads a single paragraph.

## Success Metrics
- Search impressions for `SANA-WM`
- Organic CTR
- Hero CTA click-through
- Scroll depth into examples and FAQ
- Outbound clicks to paper, project page, and code

## Validation
- `pnpm exec tsc --noEmit`
- `pnpm build`
- Mobile and desktop visual review
- SEO metadata, schema, canonical, `robots.txt`, and `sitemap.xml` checks
- Verify all public routes return `200`

## Launch Notes
- Self-host a selected subset of official media after compression.
- Keep the page honest about availability and link to official sources for the latest state.
- Expand into comparison or tutorial pages only after Search Console shows actual query branches.
