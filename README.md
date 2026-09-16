# zayd yusufi — personal site

Single-page, dependency-free portfolio. Plain HTML/CSS/JS, no build step.

```
index.html   content (edit this to update experience, projects, etc.)
style.css    theme — colours live in :root / [data-theme="dark"]
script.js    dark-mode toggle + footer year
favicon.svg  eight-point star
.nojekyll    tells GitHub Pages to serve files as-is
```

## Publish on GitHub Pages

1. Push to `main` on `github.com/rumi-1/website`.
2. In the repo: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, branch `main`, folder `/ (root)`. Save.
3. The site goes live at `https://rumi-1.github.io/website/` within a minute or two.

To use a custom domain, add a `CNAME` file containing the domain and point DNS at GitHub Pages.

## Local preview

```
python3 -m http.server 8000
```
then open http://localhost:8000.

## Editing tips

- Section numbers use Persian numerals (`۰۱`, `۰۲`, …) — copy the pattern when adding a section.
- Palette: lapis `--lapis`, turquoise `--turquoise`, terracotta `--terracotta`, saffron `--saffron`. Swap them in `:root` and the dark block to retheme.
- The kilim border band at the top/bottom is a `repeating-linear-gradient` in `.border-top` / `.border-bottom`.
