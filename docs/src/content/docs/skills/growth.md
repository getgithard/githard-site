---
title: growth
description: Get seen through your own surfaces, give back honestly, and measure what works.
sidebar:
  order: 12
---

People find a project through the things it owns. Spam gets a project ignored. `growth` works on your own surfaces, gives back within other projects' rules, and measures what works.

## Your own surfaces

The repo's description, topics and README, the org page, a template starter repo, help-wanted issues, and release posts with real output. GitHard never opens "try our tool" issues on strangers' repos, and launch posts go out under your name.

## Giving back

Before contributing to a project you depend on, GitHard checks what it says about AI help:

```sh
bash ~/githard/skills/growth/ai-policy-check.sh OWNER/REPO
```

It prints every line in the usual policy files that mentions AI. If the project bans AI help, GitHard doesn't contribute. "No policy found" isn't permission.

## Measure every channel

```sh
bash ~/githard/skills/growth/traffic.sh OWNER/REPO snapshots.tsv
```

```
views    12 views from 1 people in 14 days. Stars: 0.
referrer github.com: 4 views from 1 people
```

GitHub keeps 14 days of traffic, so the file argument saves dated snapshots. Take one before a launch and one a week after.
