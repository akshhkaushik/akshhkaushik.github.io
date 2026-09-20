// ─────────────────────────────────────────────────────────────
// Single source of truth for site copy. Edit here — components read from this.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Aksh Kaushik",
  available: true,
  email: "akshhkaushik@gmail.com",
  github: "https://github.com/akshhkaushik",
  githubHandle: "akshhkaushik",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Activity", href: "#activity" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Aksh Kaushik",
  // Big headline; SplitText reveals it line by line. Renders as plain text without JS.
  headline: "I build AI products that work in the real world.",
  sub: "Agents, backend systems, evidence infrastructure, and focused product experiments—designed, shipped, and evaluated end to end.",
};

export const work = {
  heading: "Work",
  intro:
    "Shipped products and substantive original work. Forks, templates, and smaller experiments stay on GitHub.",
  more: { label: "More on GitHub", href: "https://github.com/akshhkaushik" },
};

export const activity = {
  heading: "Build streaks",
  intro:
    "A year of building in public, from shipped code to the problem-solving reps behind it.",
  profiles: {
    github: {
      label: "GitHub",
      handle: "akshhkaushik",
      href: "https://github.com/akshhkaushik",
      heatmap: "https://ghchart.rshah.org/c24d2c/akshhkaushik",
      width: 722,
      height: 112,
    },
    leetcode: {
      label: "LeetCode",
      handle: "chickencheesesandwich",
      href: "https://leetcode.com/u/chickencheesesandwich/",
      heatmap:
        "https://leetcard.jacoblin.cool/chickencheesesandwich?theme=light&font=DM%20Mono&ext=heatmap",
      width: 500,
      height: 320,
    },
    codeforces: {
      label: "Codeforces",
      handle: "penaldopessi",
      href: "https://codeforces.com/profile/penaldopessi",
      heatmap: "",
      width: 0,
      height: 0,
    },
  },
};

export const blog = {
  heading: "Blog",
  status: "Coming soon",
  note: "Notes on what I’m building and breaking — once I get around to writing them.",
};

export const about = {
  lead: "I’m a BITS Pilani student who likes turning ambiguous problems into working software.",
  body: "My recent work spans multi-agent systems, evidence and provenance tooling, retrieval and evaluation, workflow automation, and data-heavy products. I care about clear interfaces, reliable backends, and proving ideas with a focused prototype.",
  focus: ["Agents & LLMs", "Backend systems", "Evidence & data"],
};

export const contact = {
  heading: "Get in touch.",
  sub: "Email’s the best way to reach me.",
};
