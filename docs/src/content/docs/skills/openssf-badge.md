---
title: openssf-badge
description: The OpenSSF Best Practices badge, from setup to gold.
sidebar:
  order: 14
---

The [OpenSSF Best Practices badge](https://www.bestpractices.dev) shows, criterion by criterion, that a project is run carefully. Passing is quick for a GitHard project. Silver takes real documents. Gold also takes people. `openssf-badge` takes you the whole way, and never fakes the parts that need people.

## See what's left

You create the project at bestpractices.dev. Then:

```sh
bash ~/githard/skills/openssf-badge/badge-status.sh 12345 silver
```

It reads your real answers from bestpractices.dev and lists every MUST that's unmet or unanswered for that level and the ones below it, then the SHOULDs.

## What GitHard brings to each level

- **Passing:** mostly `repo-setup`, `releases`, `security-baseline` and `contributors`.
- **Silver:** templates for governance and roles, a roadmap, architecture, and a security model with an assurance case, plus coding standards enforced in CI and 80% test coverage.
- **Gold:**
  - per-file copyright and SPDX license lines (`add-spdx.sh`)
  - hardened headers on your sites (`csp-headers.py` writes them, `check-headers.sh` checks them)
  - code review standards
  - 2FA
  - 90% statement and 80% branch coverage
  - a security review
  - dynamic analysis

githard.dev and this docs site send the headers `csp-headers.py` writes.

## What only people can earn

A second person with owner access, a bus factor of two, half of each release reviewed by someone other than its author, and two contributors from different organizations. GitHard helps you earn those through good first issues, quick replies and a findable project. It never fills them in with a second account or a rubber stamp.
