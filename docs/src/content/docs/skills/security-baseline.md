---
title: security-baseline
description: Measure with OpenSSF Scorecard, fix what settings can fix, and be honest about the rest.
sidebar:
  order: 10
---

`security-baseline` adds the OpenSSF Scorecard workflow, fixes what settings can fix, and tells you plainly which checks no setting will satisfy.

## Measure it

GitHard adds a Scorecard workflow that runs weekly and on every push to `main`, and publishes the result. Then:

```sh
bash ~/githard/skills/security-baseline/scorecard-check.sh OWNER/REPO
```

```
score    6.3/10, from commit a0e747f on 2026-11-09
not scored   Signed-Releases: n/a. no releases found
needs others Code-Review: 0/10. Found 0/23 approved changesets -- score normalized to 0
fixable      SAST: 0/10. SAST tool is not run on all commits -- score normalized to 0
```

That's GitHard's own first result.

## What needs other people

Code-Review wants a second reviewer, Contributors wants contributors from other organizations, and Maintained wants 90 days of history. GitHard never fakes these, and it won't call a score perfect while they're below 10. Branch-Protection's top points also need required reviews, and Fuzzing only counts where there's something to fuzz.

## The rest

- Secret scanning with push protection.
- CodeQL for the SAST check. Its `actions` language analyzes your workflows.
- Read-only workflow tokens by default.
- Signed releases, through [releases](/skills/releases/).
- The OpenSSF Best Practices badge, which you submit at bestpractices.dev.
- Secrets live only in GitHub secrets. If one leaks, rotate it first.
- Unsigned upstream tools get a pinned sha256 instead of `curl | sh`.
