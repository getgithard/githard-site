---
title: save-point
description: A handoff file the next session can trust.
sidebar:
  order: 13
---

A session that stops without a save point leaves the next one guessing. `save-point` keeps one running file, usually `docs/handoff.md`, with a new dated section at each stopping point.

## Writing one

```sh
bash ~/githard/skills/save-point/save-point.sh OWNER/REPO
```

It drafts the facts from GitHub: your open PRs, workflows still running, outside PRs owed a reply, and issues assigned to you. GitHard fills in what's done, what's next, and the gotchas.

## Decisions

When you state a rule, like "always squash-merge", GitHard writes it into the repo's agent instructions file with your reason, so it outlasts the chat.

## Starting a session

GitHard reads the instructions file and the last handoff section, checks who's owed a reply, checks what's still running, and then picks up "Next". If the handoff and GitHub disagree, GitHub wins.
