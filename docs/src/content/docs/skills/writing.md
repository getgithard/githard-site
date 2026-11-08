---
title: writing
description: READMEs, docs, release notes and replies that sound like a person wrote them.
sidebar:
  order: 5
---

`writing` loads whenever GitHard writes something a person will read.

## Your style guide first

Before writing, it looks for your project's own rules: `STYLE.md` and its variants, a writing section in `CONTRIBUTING.md`, or a prose linter's config (`.vale.ini`, `.markdownlint*`, `.textlintrc*`). If it finds one, it follows it, and says which file it used. If it doesn't, it uses GitHard's [house voice](https://github.com/getgithard/githard/blob/main/knowledge/voice.md).

## By kind of text

| Text | What matters most |
|---|---|
| README | What it does for the reader, in the first two lines. |
| Docs | The exact command and its real output. No selling. |
| Release notes | Only what shipped, with each contributor thanked by `@handle` next to their change. |
| Reply to a contributor | Their name, the specific thing you're thanking them for, and the next step with a date. |

## Before and after

Before:

> This release includes various improvements and bug fixes. Thanks to all our contributors!

After:

> **Search is now instant on big folders.** On 20,000 notes, the first result shows up in 40 ms instead of 3 s. Thanks @rkhan for the index (#212).
