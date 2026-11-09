---
title: org-setup
description: An org's front page, defaults for every repo, and the settings only an owner can change.
sidebar:
  order: 11
---

An org's page is the first thing people see. `org-setup` sets one up, or audits an existing one. Org settings are account changes, so GitHard hands each one to you as steps or a command.

## The checklist

- A display name, description, website and public email.
- An avatar.
- A public `.github` repo with `profile/README.md` (the org's front page) and default community files that every repo without its own copy inherits.
- A verified domain.
- Pinned repos.
- Members get read access by default.
- Two-factor authentication required, after checking it removes nobody.
- Sign-off required on web commits.

## The .github repo

GitHard prepares the files in a folder and gives you one command:

```sh
bash ~/githard/skills/org-setup/bootstrap-dotgithub.sh ORG /path/to/folder
```

It creates the repo if needed and is safe to run again. Once the repo has a ruleset, it opens a PR instead of pushing.

## Checking an org

```sh
bash ~/githard/skills/org-setup/org-audit.sh ORG
```

Settings only owners can see come back `unknown` for anyone else, never `ok`.
