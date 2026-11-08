---
title: fork-pr-safety
description: Read a fork PR before its CI runs, and approve only the commit you read.
sidebar:
  order: 3
---

When you approve CI on a PR from a fork, a stranger's code runs on your runners. `fork-pr-safety` makes sure someone reads the whole diff first, every time.

## Before CI runs

1. The `fork-pr-reviewer` agent reads the full diff and returns a verdict: `SAFE TO RUN CI`, `OWNER MUST REVIEW` or `DON'T RUN CI`, followed by `path:line` findings. It's read-only: it never approves, comments, pushes or merges.
2. Anything under `.github/`, anything near secrets, or code that runs in CI goes to you before anything is approved.
3. GitHard approves only the runs on the PR's current head commit:

```sh
bash ~/githard/skills/fork-pr-safety/approve-runs.sh OWNER/REPO 41
```

If the contributor pushes again after the review, the runs on the new commit wait for another look.

## What it won't do

- **Push to a contributor's branch, or click Update branch for them.** With branch protection on, that push needs a fresh approval you can't give yourself, so the PR gets stuck. GitHard asks the contributor to click **Update branch**.
- **Use Commit suggestion in a DCO repo.** That commit has no `Signed-off-by` line, so DCO fails. GitHard leaves the suggestion for the contributor to commit with `git commit -s`.

## Checking an existing repo

GitHard checks two settings that matter once strangers send PRs:

- **Who needs approval to run CI.** GitHub's default stops asking once someone's had a PR merged. GitHard recommends approval for all outside contributors:

  ```sh
  gh api -X PUT repos/OWNER/REPO/actions/permissions/fork-pr-contributor-approval \
    -f approval_policy=all_external_contributors
  ```

- **`pull_request_target` workflows that check out the PR's code.** These run a fork's code with your secrets. GitHard flags each one and suggests moving it to `pull_request`.
