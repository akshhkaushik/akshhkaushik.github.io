export type ProjectStatus = "Live" | "Complete" | "Open source" | "Research";

export interface ProjectLink {
  label: "Live" | "Source";
  href: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  links: ProjectLink[];
}

// A deliberately curated set: shipped products and substantive original work.
// Forks, templates, coursework, and empty repositories stay on GitHub instead of
// competing for attention here.
export const projects: Project[] = [
  {
    id: "01",
    name: "Linkrunner Onboarding Lab",
    description:
      "An end-to-end proof of work for Linkrunner: a working onboarding product, integration thesis, and implementation plan built to demonstrate product and engineering judgment.",
    status: "Live",
    tags: ["Next.js", "TypeScript", "Product engineering", "APIs"],
    links: [
      { label: "Live", href: "https://linkrunner-onboarding-lab-aksh.rurradvisors.chatgpt.site" },
      { label: "Source", href: "https://github.com/akshhkaushik/linkrunner-onboarding-lab" },
    ],
  },
  {
    id: "02",
    name: "Aksh Outreach",
    description:
      "A review-first outreach assistant that researches companies, matches relevant portfolio evidence, drafts personalized Gmail messages, and records observed opens.",
    status: "Open source",
    tags: ["Next.js", "Gmail API", "AI", "Redis"],
    links: [
      { label: "Source", href: "https://github.com/akshhkaushik/EmailAutomator" },
    ],
  },
  {
    id: "03",
    name: "Sift Class Notes",
    description:
      "A privacy-first English and Hindi class-recording workflow that turns lectures into structured, searchable notes while keeping consent and data handling explicit.",
    status: "Live",
    tags: ["Next.js", "TypeScript", "Speech", "Privacy"],
    links: [{ label: "Live", href: "https://sift-class-notes.vercel.app" }],
  },
  {
    id: "04",
    name: "Transcript Registry",
    description:
      "A free, agent-readable public library of timestamped YouTube transcripts, with captions-first ingestion, local Whisper contributions, and reusable text and JSON endpoints.",
    status: "Live",
    tags: ["Next.js", "Open data", "Whisper", "Agents"],
    links: [
      { label: "Live", href: "https://transcript-registry.vercel.app/" },
      { label: "Source", href: "https://github.com/akshhkaushik/transcript-registry" },
    ],
  },
  {
    id: "05",
    name: "Transcript Commons",
    description:
      "The local-compute companion to Transcript Registry: it discovers videos, prefers existing captions, runs permissioned Whisper transcription, and publishes reusable records.",
    status: "Open source",
    tags: ["Python", "Whisper", "YouTube", "Local compute"],
    links: [
      { label: "Source", href: "https://github.com/akshhkaushik/transcript-commons" },
    ],
  },
  {
    id: "06",
    name: "CEO Voice",
    description:
      "An evidence-backed executive communication system that models measured voice patterns, keeps structure independent, and makes generation and revision traceable.",
    status: "Live",
    tags: ["Next.js", "Python", "LLMs", "Evaluation"],
    links: [
      { label: "Live", href: "https://ceo-voice-platform.vercel.app/" },
      { label: "Source", href: "https://github.com/akshhkaushik/ceo-voice-platform" },
    ],
  },
  {
    id: "07",
    name: "Veritas",
    description:
      "An evidence intelligence platform that reconstructs how public claims emerge and spread, then separates support, contradiction, and uncertainty with cited sources.",
    status: "Live",
    tags: ["Next.js", "Evidence retrieval", "Provenance", "AI"],
    links: [
      { label: "Live", href: "https://veritas-virid.vercel.app/" },
      { label: "Source", href: "https://github.com/akshhkaushik/veritas" },
    ],
  },
  {
    id: "08",
    name: "GLOB",
    description:
      "A living spatial globe that turns photographs into memories you can revisit by place, time, and emotion.",
    status: "Live",
    tags: ["React", "WebGL", "Cloudflare"],
    links: [{ label: "Live", href: "https://glob.akshh.workers.dev/" }],
  },
  {
    id: "09",
    name: "EvoComb",
    description:
      "A transparent Environmental Stress Index for Delhi NCR, combining noise, crowding, heat, and air quality.",
    status: "Live",
    tags: ["Next.js", "Geospatial", "Data visualisation"],
    links: [{ label: "Live", href: "https://evo-comb-web.vercel.app/" }],
  },
  {
    id: "10",
    name: "VAYU",
    description:
      "Satellite-derived surface AQI and HCHO hotspot detection over India, with an honest spatial-validation pipeline.",
    status: "Research",
    tags: ["Python", "Remote sensing", "ML", "Next.js"],
    links: [
      { label: "Source", href: "https://github.com/akshhkaushik/vayu-aqi-hcho" },
    ],
  },
  {
    id: "11",
    name: "Fraud detection pipeline",
    description:
      "A graph-attention and Transformer pipeline for transaction risk, exposed through an API and browser extension.",
    status: "Complete",
    tags: ["PyTorch", "GAT", "Transformer", "Flask"],
    links: [
      {
        label: "Source",
        href: "https://github.com/akshhkaushik/Credit-Card-Fraud-Detection--GAT-Transformer-Pipeline",
      },
    ],
  },
  {
    id: "12",
    name: "Mifos AI Suite",
    description:
      "AI-assisted digitisation, report generation, and legacy-data migration tooling for the Mifos X ecosystem.",
    status: "Open source",
    tags: ["Python", "OCR", "Agents", "Fineract"],
    links: [
      { label: "Source", href: "https://github.com/akshhkaushik/Mifos-Ai-Suite" },
    ],
  },
  {
    id: "13",
    name: "BITS network keepalive",
    description:
      "A small, resilient authentication helper that keeps campus network sessions alive with observable logging.",
    status: "Open source",
    tags: ["Python", "Automation", "Networking"],
    links: [
      { label: "Source", href: "https://github.com/akshhkaushik/BitsPilaniAuthScript" },
    ],
  },
];
