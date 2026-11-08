---
title: repo-setup
description: Set up a new repo, or audit an existing one, against one checklist.
sidebar:
  order: 2
---

A new GitHub repo starts with everything off: no ruleset, no private vulnerability reporting, nothing stopping a push straight to `main`. `repo-setup` works through one checklist, either to set a repo up or to audit one that's already running.

## The checklist

| Item | Who does it |
|---|---|
| README, CONTRIBUTING, SECURITY, CODE_OF_CONDUCT | GitHard, from templates |
| LICENSE | You choose. GitHard offers MIT, Apache-2.0 or GPL-3.0, then fetches the text. |
| Issue templates, PR template, CODEOWNERS | GitHard |
| Dependabot, grouped and monthly | GitHard |
| CI skeleton with a DCO sign-off check | GitHard |
| Every Action pinned to a full commit SHA | GitHard |
| Ruleset: `main` is PR-only, required checks, branches don't have to be up to date | You say yes, then GitHard applies it |
| Private vulnerability reporting, Dependabot alerts, sign-off on web commits, Discussions | GitHard |

Files go in through a pull request, like any other change.

## Auditing a repo

GitHard runs the audit for you. To run it yourself, `cd` into your repo and point at the script in a clone of GitHard:

```sh
bash ~/githard/skills/repo-setup/audit.sh OWNER/REPO
```

It prints one line per item:

```
ok       README
missing  SECURITY
missing  Actions pinned to full commit SHAs: actions/checkout@v4
unknown  private vulnerability reporting (needs gh and an owner/repo)
```

`unknown` means it couldn't reach that setting, usually because `gh` isn't signed in or you don't have access. GitHard reports those as unchecked, never as fine. The script exits `1` if anything is missing.

## Why the ruleset doesn't require up-to-date branches

When a ruleset requires branches to be up to date, every merge restarts CI on every other open PR, so a queue of ten PRs can take hours. The required checks still have to pass on each PR.
