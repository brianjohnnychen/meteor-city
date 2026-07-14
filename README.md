# meteor.city

Corporate site for Meteor City LLC — static HTML/CSS/JS, no build step.

## Structure
- `index.html` / `skyros.html` / `elestoria.html` / `about.html` / `contact.html`
- `styles.css` — shared design system
- `site.js` — nav, scroll reveal
- `.nojekyll` — disables Jekyll processing on GitHub Pages

## Deploy (GitHub Pages)
Served from the `main` branch, root directory. Any push to `main` redeploys automatically.

## Custom domain (meteor.city via Cloudflare)
1. GitHub → repo Settings → Pages → Custom domain: `meteor.city` (creates/needs `CNAME` file)
2. Cloudflare DNS:
   - `A` records for apex `meteor.city` → 185.199.108.153 / 109.153 / 110.153 / 111.153
   - `CNAME` `www` → `<username>.github.io`
   - Proxy status: DNS only until the GitHub certificate is issued, then optional proxy
3. GitHub Pages → Enforce HTTPS once the certificate shows ready
