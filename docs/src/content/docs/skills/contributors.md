---
title: contributors
description: Answer every claim and every outside PR, and handle quiet ones like a person.
sidebar:
  order: 4
---

People come back to a project that answers them. `contributors` covers what to do when someone claims an issue, opens a PR, gets merged, or goes quiet.

## What happens when

| Event | What GitHard does |
|---|---|
| Someone claims an issue | Assigns them and welcomes them. On their first time, it tells them that fork CI waits for approval and to use **Update branch** if `main` moves on. |
| An outside PR opens | Replies the same day: thanks for the specific change, and when the review will happen. |
| It merges | Thanks them by `@handle` in the release notes, and comments on the PR when the release ships. |
| 30 days quiet | A person checks in. |
| 60 days quiet | Close it with thanks, or finish it and credit them. |

There's no stale bot. If your repo has one, GitHard suggests removing it.

## Reactions

One per item, only on other people's posts: 🚀 for a claim or a new PR, 👀 while reviewing, 🎉 on merge, ❤️ for going beyond the ask, 👍 to acknowledge. A reaction never replaces a reply someone is owed.

## Who's still waiting

GitHard runs this at the start of each session. To run it yourself from a clone of GitHard:

```sh
bash ~/githard/skills/contributors/unanswered.sh OWNER/REPO
```

It lists outside PRs with no maintainer reply yet (`unanswered`), and PRs quiet for 30 days (`check-in`) or 60 days (`decide`). Bots and maintainers' own PRs are skipped. If GitHub doesn't answer, it exits `2` and says `unknown`, never "nothing owed".

## An AI policy

If your repo has no `AI_POLICY.md`, GitHard offers a template that welcomes AI help as long as it's disclosed, with the contributor responsible for every line. Whether to ban AI help is your call, so it asks.
