# ethanrjames.com

A one-page personal site built with [Astro](https://astro.build).

## Editing

- **About text:** `src/about.md` (Markdown).
- **Name, email, links:** `src/site.ts`. The email and links appear under the about text once they're filled in.
- **Look:** `src/styles/global.css`.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321, reloads as you edit
```

## Publish

```bash
npm run deploy
```

That builds the site and force-pushes `dist/` to the `gh-pages` branch of
[ethanrjames3-afk/ethanrjames.com](https://github.com/ethanrjames3-afk/ethanrjames.com). GitHub Pages serves that
branch at https://ethanrjames.com, and changes go live a minute or two later. Commit and push `main` separately to
back up the source.

## How the domain is set up (Nov 2026)

- **GitHub Pages:** the source is "Deploy from a branch", `gh-pages`, `/ (root)`. The custom domain is
  `ethanrjames.com` (`public/CNAME`), HTTPS is enforced, and the certificate renews automatically.
- **GoDaddy DNS** (nameservers `ns69/ns70.domaincontrol.com`):

  | Type | Name | Value |
  |---|---|---|
  | A | @ | 185.199.108.153 |
  | A | @ | 185.199.109.153 |
  | A | @ | 185.199.110.153 |
  | A | @ | 185.199.111.153 |
  | CNAME | www | ethanrjames3-afk.github.io |
