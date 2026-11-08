# githard-site

The website for [GitHard](https://github.com/getgithard/githard): the home page at githard.dev, and the docs at docs.githard.dev.

- `www/` is the home page. It's plain HTML, CSS and a little JavaScript, with no build step.
- `docs/` is the docs, built with [Starlight](https://starlight.astro.build). Run `npm ci && npm run dev` inside it to preview.

Both deploy to Cloudflare Pages.

The scoreboard numbers in `www/data/scores.json` come from a full eval run of the plugin (`claude plugin eval`). The audit output in `www/app.js` is real output from `skills/repo-setup/audit.sh`. When either changes, re-run it and paste in the new output. Don't edit the numbers by hand.

Tank, the bulldog, was made with Z-Image-Turbo (Apache-2.0). The fonts are Big Shoulders Stencil, Archivo and JetBrains Mono, all under the SIL Open Font License.

## License

[MIT](LICENSE)
