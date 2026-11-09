---
title: Getting started
description: What GitHard is, what you need, and where it stands today.
---

GitHard is a plugin for [Claude Code](https://claude.com/claude-code). It teaches Claude how well-run projects set up and run their GitHub orgs and repos, and it works the same way on a repo you started this morning and one you've run for years.

## Install

In Claude Code:

```text
/plugin marketplace add getgithard/githard
/plugin install githard@githard
```

Then ask for what you want in your own words. If the skills don't show up straight away, start a new session. The current release is [githard--v0.1.0](https://github.com/getgithard/githard/releases/tag/githard--v0.1.0).

## What you'll need

- Claude Code.
- The [GitHub CLI](https://cli.github.com/), signed in with `gh auth login`. The skills use it to read and change repo settings.
- Owner or admin access to the repos you want GitHard to set up. It can audit what it can see without that, and it'll tell you what it couldn't check.

## What's built

| Skill | What it's for |
|---|---|
| [`using-githard`](/skills/using-githard/) | The front door. Sends your request to the right skill. |
| [`repo-setup`](/skills/repo-setup/) | A new repo's files and settings, or an audit of an existing one. |
| [`fork-pr-safety`](/skills/fork-pr-safety/) | PRs from forks, before their CI runs. |
| [`contributors`](/skills/contributors/) | Claims, replies, quiet PRs, reactions, an AI policy. |
| [`writing`](/skills/writing/) | READMEs, docs, release notes and replies in a human voice. |
| [`issues-and-roadmap`](/skills/issues-and-roadmap/) | Milestones, a board, and issues a newcomer can finish. |
| [`merging`](/skills/merging/) | Merge when green, one PR at a time. |
| [`releases`](/skills/releases/) | Running notes, a verified draft, and what comes after. |
| [`docs-honesty`](/skills/docs-honesty/) | Docs that only describe what shipped. |
| [`security-baseline`](/skills/security-baseline/) | OpenSSF Scorecard, secrets, unsigned upstreams. |
| [`org-setup`](/skills/org-setup/) | The org's front page and defaults. |
| [`growth`](/skills/growth/) | Getting seen without spamming anyone. |
| [`save-point`](/skills/save-point/) | A handoff file the next session can trust. |
| [`openssf-badge`](/skills/openssf-badge/) | The OpenSSF Best Practices badge, passing to gold. |
| [`agent-toolkit`](/skills/agent-toolkit/) | The right Claude Code plugins, MCP servers and language servers for a repo. |

