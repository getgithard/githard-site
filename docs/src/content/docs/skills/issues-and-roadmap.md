---
title: issues-and-roadmap
description: A roadmap people can see, and issues a stranger can finish.
sidebar:
  order: 6
---

An issue that says "improve search" sits there until you do it yourself. One that names the file, the test and what "done" looks like gets claimed. `issues-and-roadmap` keeps your roadmap visible and every issue ready to pick up.

## What every issue gets

A type (Bug, Feature or Task), a milestone, a card on the project board with a size (XS to L), and a "Done when" list. A PR that closes it says `Fixes #N`.

Big issues become a parent with sub-issues, and blockers are linked with GitHub's issue dependencies. GitHard uses the REST API for both:

```sh
# make #13 a sub-issue of #9 (the id is the issue's API id, not its number)
gh api -X POST repos/OWNER/REPO/issues/9/sub_issues -F sub_issue_id=$(gh api repos/OWNER/REPO/issues/13 --jq .id)

# mark #12 as blocked by #9
gh api -X POST repos/OWNER/REPO/issues/12/dependencies/blocked_by -F issue_id=$(gh api repos/OWNER/REPO/issues/9 --jq .id)
```

## Starter issues

Each one names the files to change, says how to test, lists "Done when", and says which files to stay out of. GitHard keeps about ten of them open and unassigned, so nobody who turns up has to wait for work. Docs issues get a `writers wanted` label, and they say plainly that the work is volunteer.

## Checking a repo

```sh
bash ~/githard/skills/issues-and-roadmap/issue-health.sh OWNER/REPO
```

```
needs    #41 improve search  (no type, no "Done when")
pool     6 ready to pick up, target 10: scope 4 more
```

It exits `1` when there's work to do, and `2` when GitHub didn't answer.
