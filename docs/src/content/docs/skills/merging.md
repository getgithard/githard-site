---
title: merging
description: Merge when green, on the commit that was tested, one PR at a time.
sidebar:
  order: 7
---

Merging by hand means watching checks. Merging with a careless loop means merging something that isn't green, or burning your API limit until every tool you have goes blind. `merging` does it one PR at a time, on the commit that passed.

## One PR

```sh
bash ~/githard/skills/merging/merge-when-green.sh OWNER/REPO 41
```

```
#41: green on 741f378, merging
```

- It reads the required checks from your ruleset. Nothing's hard-coded.
- It merges with `--match-head-commit`, so a push that lands after the checks pass can't slip in.
- When a check fails, it reads the log. A download flake (a 5xx, a timeout, a reset) gets the failed jobs rerun, twice at most. Anything else stops it.
- An empty answer from GitHub means "ask again", never "done".
- It won't touch a PR from a fork. Review that with [fork-pr-safety](/skills/fork-pr-safety/) and merge it by hand.

## Several PRs

```sh
bash ~/githard/skills/merging/merge-queue.sh OWNER/REPO 41 42 43
```

One runner, one PR at a time. GitHub allows 5,000 API requests an hour, shared by every tool on your token, so parallel merge loops starve each other. Both scripts wait when fewer than 200 are left.
