---
title: Evals
description: How GitHard's skills are tested, and how to run the tests yourself.
---

Every skill ships with eval cases in [`evals/`](https://github.com/getgithard/githard/tree/main/evals). Each case is a prompt, sometimes a small throwaway repo for it to work in, and a set of graders. The graders are file checks, regex checks, and a judge model that grades the answer against a written checklist.

Each case runs with GitHard and without it, so you can see what the plugin adds. The scoreboard on [githard.dev](https://githard.dev/#scoreboard) comes from those runs.

## Run them yourself

From the plugin repo's root:

```sh
claude plugin eval . --scaffold --allow-tools Bash Write Edit --judge-model sonnet
```

- `--scaffold` builds each case's throwaway repo. Only pass it for cases you've read.
- `--allow-tools` lets the cases that write files or run scripts do so.
- `--judge-model sonnet` is there because the default judge sometimes passes and sometimes fails the same reply.

Filter by skill with `--tag repo-setup`, for example.

## What CI checks

The evals need Claude credentials, so CI doesn't run them. It checks that every case is well-formed, that every scaffold runs, and that `audit.sh` flags every gap in a known-bad repo.
