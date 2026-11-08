// Real output of skills/repo-setup/audit.sh. Day 1: the audit-existing eval scaffold. Day 30: GitHard's own repo.
const runs = {
  1: { cmd: "$ bash audit.sh", out: "ok       README\nok       LICENSE\nmissing  CONTRIBUTING\nmissing  SECURITY\nmissing  CODE_OF_CONDUCT\nmissing  CODEOWNERS\nmissing  PR template\nmissing  issue templates\nmissing  Dependabot watches GitHub Actions\nmissing  Dependabot runs monthly\nmissing  Dependabot groups updates\nok       CI workflow\nmissing  Actions pinned to full commit SHAs: actions/checkout@v4 actions/setup-node@v4\nmissing  DCO sign-off check in CI\nunknown  ruleset on the default branch (needs gh and an owner/repo)\nunknown  private vulnerability reporting (needs gh and an owner/repo)\nunknown  Discussions (needs gh and an owner/repo)\nunknown  Dependabot alerts (needs gh and an owner/repo)\nunknown  sign-off required on web commits (needs gh and an owner/repo)" },
  30: { cmd: "$ bash audit.sh getgithard/githard", out: "ok       README\nok       LICENSE\nok       CONTRIBUTING\nok       SECURITY\nok       CODE_OF_CONDUCT\nok       CODEOWNERS\nok       PR template\nok       issue templates\nok       Dependabot watches GitHub Actions\nok       Dependabot runs monthly\nok       Dependabot groups updates\nok       CI workflow\nok       Actions pinned to full commit SHAs\nok       DCO sign-off check in CI\nok       main is PR-only\nok       required status checks\nok       branches don't have to be up to date\nok       private vulnerability reporting\nok       Discussions\nok       Dependabot alerts\nok       sign-off required on web commits" },
};
const out = document.getElementById("out"), cmd = document.getElementById("cmd"), tally = document.getElementById("tally");

function show(day) {
  const run = runs[day];
  cmd.textContent = run.cmd;
  out.replaceChildren(...run.out.split("\n").map((line, i) => {
    const span = document.createElement("span");
    span.className = line.split(/\s/)[0];
    span.style.setProperty("--i", i);
    span.textContent = line + "\n";
    return span;
  }));
  out.classList.remove("typing"); void out.offsetWidth; out.classList.add("typing");
  const count = s => run.out.split("\n").filter(l => l.startsWith(s)).length;
  const [ok, missing, unknown] = ["ok", "missing", "unknown"].map(count);
  tally.textContent = missing || unknown
    ? `${ok} ok, ${missing} missing, ${unknown} unchecked. Drop and give me twenty.`
    : `${ok} for ${ok}. Dismissed.`;
  document.querySelectorAll(".day").forEach(b => b.setAttribute("aria-pressed", b.dataset.day == day));
}
document.querySelectorAll(".day").forEach(b => b.addEventListener("click", () => show(b.dataset.day)));
show(1);

fetch("data/scores.json").then(r => r.json()).then(({ skills, method }) => {
  const pct = (p, t) => Math.round(100 * p / t);
  document.getElementById("scores").innerHTML = skills.map(s => `
    <div class="score">
      <h3>${s.name} <small>${s.cases} cases</small></h3>
      <div class="meters">
        <div class="meter with"><span>With GitHard</span><i><span style="width:${pct(s.with[0], s.with[1])}%"></span></i><output>${s.with[0]}/${s.with[1]}</output></div>
        <div class="meter without"><span>Without</span><i><span style="width:${pct(s.without[0], s.without[1])}%"></span></i><output>${s.without[0]}/${s.without[1]}</output></div>
      </div>
    </div>`).join("");
  document.getElementById("method").textContent = method;
}).catch(() => { document.getElementById("scores").textContent = "Couldn't load the scores. They're in the repo's eval results."; });

