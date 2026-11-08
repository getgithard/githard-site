---
title: How it works
description: How GitHard decides what to do, and when it stops to ask you.
---

Each GitHard skill is a set of instructions Claude loads when your request needs it. You don't call skills by name. Say what you want, like "get this repo ready to go public" or "can I approve CI on this fork PR?", and Claude picks the skill that fits.

If your request lands on a skill that isn't built yet, GitHard says so in its first sentence, then gives general advice that's clearly marked as general.

## When it asks you first

GitHard acts, then reports. It stops to ask before:

- anything that costs money
- account changes, and ruleset or branch-protection changes
- legal choices, such as which license a repo uses
- disputes with people
- deletions that can't be undone

Every time it needs you to do something, it gives you the exact command, or numbered steps with the URL and the button names.

## Your project's rules come first

If your repo has a style guide, an AI policy or contribution terms, GitHard follows them over its own defaults.
