# SANA-WM

Independent English guide site for the `SANA-WM` search term.

Repository: `https://github.com/hiETsang/sana-wm`

## Local development
```bash
pnpm install
pnpm dev
```

## Verification
```bash
pnpm exec tsc --noEmit
pnpm build
```

## Deployment
1. Deploy the project to Vercel.
2. Attach `sana-wm.com` as the production domain.
3. Add the DNS records Vercel requests inside Cloudflare.
4. Verify `/`, `/robots.txt`, and `/sitemap.xml`.

## Content maintenance
- Update reusable homepage text in `src/lib/content.ts`.
- Update site-wide metadata in `src/lib/site.ts`.
- Replace self-hosted media under `public/media/` only after compression.
- Keep public copy factual and user-facing; implementation notes belong in docs, not on the live page.
