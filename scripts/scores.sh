#!/usr/bin/env bash
# Copyright 2026 James Conway
# SPDX-License-Identifier: MIT
# Build www/data/scores.json from a full eval run, so the scoreboard is never typed by hand.
# Usage: bash scripts/scores.sh PATH/TO/aggregate-result.json > www/data/scores.json
#   The run must have both arms: `claude plugin eval . --scaffold --judge-model sonnet` in the githard repo.
# Skills are sorted by how much GitHard adds, most first.
set -euo pipefail
r=${1:?usage: bash scripts/scores.sh aggregate-result.json}
jq -e '[.cases[].arms | has("without")] | all' "$r" >/dev/null || { echo "$r has no without arm: run the evals with the baseline" >&2; exit 2; }
jq '
  def tally(arm): [.[] | .arms[arm][] | .passed] | [(map(select(.)) | length), length];
  (.startedAt[0:10]) as $day | (.cases | length) as $n |
  {skills: (.cases | group_by(.dir | split("/")[1]) | map({name: (.[0].dir | split("/")[1]), cases: length, with: tally("with"), without: tally("without")})
     | sort_by(-((.with[0] / .with[1]) - (.without[0] / .without[1])), .name)),
   method: "Claude Code with Opus 5.5, \($n) cases, three runs each with GitHard and three without. A Sonnet judge grades each answer against a written checklist, alongside file and regex checks. All from one run on \($day). Where Claude already passes without GitHard, the case stays in as a regression check."}
' "$r"
