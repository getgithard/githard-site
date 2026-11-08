---
title: releases
description: Notes written as you go, a draft you can check, and what to do after it ships.
sidebar:
  order: 8
---

A release is a promise: these files, built from this commit, do what the notes say. `releases` keeps the notes honest as you go, and checks the draft before anyone publishes it.

## Notes as you go

The next release's notes live in a draft GitHub release. Each time a change merges, GitHard adds a line saying what changed for the reader, and thanks outside contributors by `@handle`. Only merged changes go in.

## Cut after the last fix

GitHard won't cut a release while the milestone still has open issues or PRs. Either they merge first, or you decide to move them to the next milestone.

## A draft you can check

GitHard ships a release workflow you start by hand. It builds, writes `SHA256SUMS`, attests build provenance for every file, and creates a **draft** release. It never publishes. Then:

```sh
bash ~/githard/skills/releases/verify-release.sh OWNER/REPO v1.3.0
```

```
ok    checksums match SHA256SUMS
ok    every asset has a build attestation from OWNER/REPO
v1.3.0 is ready to publish: gh release edit v1.3.0 -R OWNER/REPO --draft=false
```

Add `--version-cmd` and `--smoke` to run the downloaded build too, where `{dir}` is the download folder. Those run the build on your machine, so use them only on your own project.

## A Claude Code plugin

A plugin release is a tag: `claude plugin tag --dry-run`, then `claude plugin tag --push`. Run the plugin's evals first.

## After it ships

GitHard works through a list and reports each item: comment on every merged PR, update READMEs and version pins, regenerate docs from the tag, upgrade your own copy, open issues for the work the release creates, and start the next draft.
