---
title: agent-toolkit
description: The right Claude Code plugins, MCP servers and language servers for a repo.
sidebar:
  order: 15
---

An agent with the right tools writes less, guesses less and breaks less. `agent-toolkit` picks the tools a project needs, and saves them in the repo so everyone who works on it gets the same set.

## Pick

```sh
bash ~/githard/skills/agent-toolkit/toolkit.sh
```

```
typescript-lsp@claude-plugins-official     language server: install typescript-language-server first: bun add -g typescript-language-server typescript
superpowers@claude-plugins-official        plans, test-driven work, debugging, reviews
ponytail@ponytail                          the smallest change that fully solves the task
context7@claude-plugins-official           current docs for the libraries in your dependencies
githard@githard                            running the repo: issues, PRs, releases, security
```

That's real output for [keyparity](https://github.com/keyparity/keyparity), a Bun and TypeScript CLI. There's a language server for every language it finds, with a note saying whether its binary is installed.

## Only from places you can trust

Plugins and MCP servers run code on your machine. GitHard recommends them only from Anthropic's official marketplace, or from a short vetted list that records who publishes each one and what it runs. Anything else waits for your yes.

## Save it in the repo

```sh
bash ~/githard/skills/agent-toolkit/toolkit.sh --apply
```

This writes `.claude/settings.json` (`enabledPlugins`, plus `extraKnownMarketplaces` for anything outside the official marketplace). Commit it, and everyone who clones and trusts the repo is offered the same plugins. If your git setup ignores `.claude/`, the script says so and gives you the `git add -f` command.
