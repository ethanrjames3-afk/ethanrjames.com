# ethanrjames.com

A personal site built with [Astro](https://astro.build): an about blurb, projects and experience.

## Editing

- **About text:** `src/about.md` (Markdown).
- **Projects and jobs:** one Markdown file each in `src/content/work/`. Each gets its own page at `/work/<file name>/`.
  The fields at the top are described in `src/content.config.ts`. Set `kind: project` to list it under Projects or
  `kind: job` for Experience, and set `sort` to the year it ended (newest shows first).
- **Images:** put them in `src/assets/work/<file name>/` and reference them from the Markdown, for example
  `cover: ../../assets/work/my-project/photo.jpg`. Add more under `gallery:` with a caption each. Astro resizes them
  when it builds.
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
