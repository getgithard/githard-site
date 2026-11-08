---
title: docs-honesty
description: Docs that only describe what shipped, checked against every release.
sidebar:
  order: 9
---

Docs that describe a feature you haven't shipped cost you twice: the reader loses an evening, and then they stop believing the rest. `docs-honesty` keeps your docs true of what's released.

## The rules

- A feature's docs merge when the feature is in a release.
- Docs live in the repo, change through PRs, and build in CI.
- Example output comes from running the released build. Never typed by hand.
- Install docs name the current release.

## Audit every release

After a release, GitHard sends the read-only `docs-auditor` agent through your docs. It compares them with the release's help text, notes and links, and reports each untrue claim as `path:line` with the evidence.

Two of those checks are a script you can run yourself:

```sh
bash ~/githard/skills/docs-honesty/audit-docs.sh docs/ --tool jot --help-cmd "./dist/jot --help"
```

```
untrue   docs/usage.md:6  `jot sync` isn't in the help text
untrue   docs/usage.md:6  `--watch` isn't in the help text
dead     docs/install.md:12  https://example.com/schema.json (404)
```

## A site that hides its 404s

If your docs site answers 200 for a page that doesn't exist, dead internal links pass every check. Try `curl -s -o /dev/null -w '%{http_code}' https://YOUR-SITE/no-such-page`. Anything but 404 means the site needs a real 404 page. That's how we found githard.dev was missing one.
