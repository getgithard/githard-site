---
title: Getting started
description: What GitHard is, what you need, and where it stands today.
---

GitHard is a plugin for [Claude Code](https://claude.com/claude-code). It teaches Claude how well-run projects set up and run their GitHub orgs and repos, and it works the same way on a repo you started this morning and one you've run for years.

## Where it stands

GitHard isn't released yet. The first release, `v0.1.0`, is planned before the new year, and this page will have the install command once it's out. Until then you can read the skills [on GitHub](https://github.com/getgithard/githard/tree/main/skills) and follow the build in the [plan](https://github.com/getgithard/githard/blob/main/docs/plan.md).

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

Eight more are planned: issues and roadmap, merging, releases, docs honesty, security baseline, org setup, growth and save point.
