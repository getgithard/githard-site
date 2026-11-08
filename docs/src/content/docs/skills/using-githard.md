---
title: using-githard
description: The front door that sends each request to the right skill.
sidebar:
  order: 1
---

`using-githard` loads when you ask what GitHard can do, or when a GitHub request doesn't obviously belong to one skill. It keeps a table of every skill, marked built or planned, and sends your request to the one that fits.

When the matching skill is only planned, the reply opens with this sentence, before anything else:

> GitHard's `releases` skill isn't built yet, so this is general advice rather than GitHard's own checklist.

It also carries the rules every skill follows, which are listed in [How it works](/how-it-works/).
