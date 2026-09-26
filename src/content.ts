// All site copy and links live here — edit this file to update the portfolio.

export const links = {
  email: "awaregyarexford0@gmail.com",
  github: "https://github.com/ApewehRexford",
  linkedin: "https://www.linkedin.com/in/rexford-apeweh",
  // Put your CV at public/cv.pdf
  cv: "/cv.pdf",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Honors", href: "#honors" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const nowRow = [
  { label: "Now", text: "Founder of Xylovt · COO at SwapGPA Technologies" },
  { label: "Recently", text: "SWE & Data Science Intern at Afrifanom, building Mijo" },
  { label: "Honors", text: "Best in Engineering — Pan-African Robotics Competition 2024" },
];

export const marquee = [
  "React",
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "Python",
  "MediaPipe",
  "Tauri",
  "Electron",
  "Figma",
  "GitHub Actions",
];

export const workIndex = [
  {
    num: "01",
    title: "Seshat",
    href: "#seshat",
    desc: "Asset lifecycle system for a four-entity IT firm. Client project, 7-person team.",
    tags: "NestJS · Postgres · Tauri",
  },
  {
    num: "02",
    title: "Fordklyn TMS",
    href: "#fordklyn",
    desc: "Offline tenant & lease ledger rebuilt from a self-hosted web app into a zero-infra desktop app.",
    tags: "Electron · React · SQLite",
  },
  {
    num: "03",
    title: "XENO",
    href: "#tryon",
    desc: "Alien hand-tracking interface: a synth, a vision portal, zero-g relics and a creature, all driven by gestures.",
    tags: "MediaPipe · three.js · WebGL",
  },
  {
    num: "04",
    title: "CPU-SIM",
    href: "#cpu-sim",
    desc: "Interactive Von Neumann simulator with its own 16-instruction ISA and assembler.",
    tags: "HTML · JS · Architecture",
  },
];

export const seshat = {
  // App screenshots with mockup data only — no client data. First one is shown large.
  screenshots: [
    { src: "/projects/seshat-login.jpg", alt: "Seshat desktop app sign-in screen" },
    { src: "/projects/seshat-assets.jpg", alt: "Seshat asset register with class, status, location and assignee (mockup data)" },
    { src: "/projects/seshat-transfer.jpg", alt: "Seshat Transfer Asset dialog" },
  ],
  meta: [
    { label: "Client", value: "Multisoft Solutions Ltd, Accra" },
    { label: "Team", value: "Kemet Labs — 7 engineers" },
    { label: "My role", value: "DevOps & Release Lead · Full-stack" },
    { label: "Timeline", value: "June — August 2026" },
    {
      label: "Stack",
      value: "React · TypeScript · NestJS · PostgreSQL · Prisma · Tauri · GitHub Actions",
    },
  ],
  owned: [
    {
      title: "Native desktop packaging",
      body: "Wrapped the React app with Tauri into a ~3 MB Windows installer. One build works on every HR workstation because the server address is set on first launch, not baked in.",
    },
    {
      title: "CI pipeline & repo baseline",
      body: "GitHub Actions runs lint and tests on every push. A Makefile contract (setup · lint · test) standardises the stack, and main is protected behind review.",
    },
    {
      title: "Installation guide",
      body: "The full path from an empty on-prem server to the first HR account, written for IT staff — plus a build record documenting Windows-specific packaging issues and their fixes.",
    },
    {
      title: "Data normalisation & UI revamp",
      body: "Department names were free-typed in two places and drifted apart. I moved them into a normalised table with case-insensitive matching and a unique-constraint retry for concurrent creates — then reworked 20+ frontend components in the same pass.",
    },
  ],
  outcomes: [
    { value: "253", caption: "automated tests (81 backend, 172 frontend)" },
    { value: "58%", caption: "smaller initial bundle — 1,112 kB → 465 kB" },
    { value: "~3 MB", caption: "native Windows installer via Tauri" },
    { value: "4", caption: "company entities on one audited ledger" },
  ],
  decisions: [
    {
      title: "Append-only history",
      body: "Status, location, and custodian are derived from a permanent log of every action — never edited in place — so the audit trail can’t drift from reality.",
    },
    {
      title: "On-premises, LAN-only",
      body: "Runs on Multisoft’s own Windows Server with no public internet exposure, replacing an early cloud plan once requirements were clear.",
    },
    {
      title: "Desktop over browser",
      body: "A native Tauri client instead of a web app: smaller and faster than Electron, with self-hosted fonts for networks with no internet route.",
    },
  ],
};

export const fordklyn = {
  // First one is shown large. Windows taskbar trimmed off each screenshot.
  screenshots: [
    { src: "/projects/fordklyn-dashboard.jpg", alt: "Fordklyn Homes dashboard: units, occupancy, rent collected and renewals" },
    { src: "/projects/fordklyn-tenants.jpg", alt: "Fordklyn tenant list with unit, annual rent and renewal status" },
    { src: "/projects/fordklyn-add-tenant.jpg", alt: "Fordklyn Add a tenant form" },
  ],
  decisions: [
    {
      title: "Typed IPC, no HTTP",
      body: "The UI never calls fetch(). Every read and write crosses a typed IPC bridge to the one process that touches the database.",
    },
    {
      title: "Money as integer cents",
      body: "SQLite has no decimal type, so amounts are stored in cents and converted at a single boundary.",
    },
    {
      title: "Derived renewal dates",
      body: "Renewals are always last payment + 1 year — computed, never typed — removing a whole class of entry errors.",
    },
    {
      title: "Backups like a save file",
      body: "Automatic daily snapshots with 14 days kept, plus one-click backup and restore to any folder or USB drive.",
    },
  ],
  stack: "Electron · React · TypeScript · SQLite · Prisma · electron-builder · npm workspaces",
};

export const twoUp = [
  {
    id: "tryon",
    kicker: "03 — Computer vision",
    title: "XENO",
    repo: "https://github.com/ApewehRexford/TryOn",
    media: "Hand-tracking demo",
    image: "/projects/xeno-demo.gif",
    desc: "An alien hand-tracking interface that runs entirely in the browser. Play a synth tuned to a non-human scale, frame a portal with your fingers to see in thermal or x-ray, fling zero-gravity relics into a black hole, and meet a creature whose eye follows your hand.",
    tags: "MediaPipe · three.js · WebGL · Web Audio",
  },
  {
    id: "cpu-sim",
    kicker: "04 — Systems",
    title: "CPU-SIM",
    repo: "https://github.com/ApewehRexford/CPU-SIM-FDE",
    media: "Simulator screenshot",
    image: "/projects/cpu-sim.jpg",
    desc: "An interactive Von Neumann simulator: write assembly in a custom 16-instruction ISA, step through fetch–decode–execute cycles, and watch data move across animated buses.",
    tags: "HTML · JavaScript · Computer architecture",
  },
];

export const moreBuilds = [
  {
    title: "EcoQuest Africa",
    desc: "Gamified climate-action app for African children, built for GreenRes Hackathon 2026 (Top 25). Real quests, a village that grows, four languages.",
    tags: "TypeScript · Vercel · Team lead",
  },
  {
    title: "Social Media Post",
    desc: "Full-stack CRUD app built twice — React + Flask + SQLAlchemy, then Node + Express + SQLite — to compare stacks.",
    tags: "React · Flask · Express · SQLite",
  },
  {
    title: "Real Estate Valuation",
    desc: "Housing-price regression model with feature engineering on tabular data.",
    tags: "Python · scikit-learn · pandas",
  },
];

export const honors = [
  {
    date: "Jul — Aug 2026 · University of Ghana",
    title: "Top 25",
    body: "GreenRes Hackathon 2026 — Africa Climate Collaborative × Mastercard Foundation. I led the team and the engineering on EcoQuest Africa: a gamified climate-action app where children complete real-world quests to help their village grow, in English, French, Kiswahili, and Hausa.",
    tags: "Team Lead & Lead Software Engineer · TypeScript",
    demo: "https://ecoquest-neon.vercel.app/",
    thumb: "App screen",
    photos: [
      { src: "/honors/greenres-2026-1.jpg", alt: "EcoQuest Africa welcome screen with language choice: English, French, Kiswahili, Hausa" },
      { src: "/honors/greenres-2026-2.jpg", alt: "EcoQuest Africa home screen showing village health and available quests" },
      { src: "/honors/greenres-2026-3.jpg", alt: "EcoQuest Africa leaderboard with village health by region and top explorers" },
    ],
  },
  {
    date: "Jul 2024 · Somone, Senegal",
    title: "Best in Engineering",
    body: "Pan-African Robotics Competition 2024. Engineered autonomous systems in Python on VEX V5 — the first team from Ghana to win the award.",
    tags: "Python · VEX V5 · Team award",
    thumb: "Photo",
    photos: [
      { src: "/honors/parc-2024-build.jpg", alt: "Assembling the VEX V5 robot at the Pan-African Robotics Competition 2024" },
      { src: "/honors/parc-2024-certificate.jpg", alt: "PARC 2024 Stars League certificate of achievement" },
    ],
  },
  {
    date: "Aug 2023 · Ghana",
    title: "Winner",
    body: "Ghana Robotics Competition 2023, the competition’s first edition. Built with MicroPython on a Raspberry Pi.",
    tags: "MicroPython · Raspberry Pi · Team award",
    thumb: "Photo",
    photos: [
      { src: "/honors/grc-2023-team.jpg", alt: "The team with organisers at the Ghana Robotics Competition 2023" },
      { src: "/honors/grc-2023-trophy.jpg", alt: "Holding the GRC 2023 Tournament Champion trophy with teammates" },
    ],
  },
];

export const experience = [
  {
    date: "2025 — Now",
    role: "Founder",
    org: "Xylovt",
    desc: "A software company building web, mobile, and data systems for businesses. First delivered project: Fordklyn Apartments TMS. Also designing a property management platform with its own design system.",
    location: "Ghana",
  },
  {
    date: "May 2026 — Now",
    role: "Chief Operating Officer",
    org: "SwapGPA Technologies",
    desc: "Leading operations after moving up from Software Engineer (Feb 2026) and Head of Sales & Growth (Mar 2026).",
    location: "Accra",
  },
  {
    date: "Jun — Aug 2026",
    role: "DevOps & Release Lead",
    org: "Kemet Labs · University of Ghana",
    desc: "Seshat, a client system for Multisoft Solutions. Owned CI, desktop packaging, and deployment documentation.",
    location: "Accra",
  },
  {
    date: "Apr — May 2026",
    role: "SWE & Data Science Intern",
    org: "Afrifanom Limited",
    desc: "Contributed to Mijo, a ride-hailing and logistics platform for African markets with flat-rate driver subscriptions and digital address integration.",
    location: "Accra",
  },
  {
    date: "Oct — Dec 2024",
    role: "Data Science Fellow",
    org: "GI-KACE",
    desc: "Ghana-India Kofi Annan Centre of Excellence in ICT. Built and implemented machine learning models for data-driven problems.",
    location: "Accra",
  },
  {
    date: "2023 — Sep 2024",
    role: "VP, Robotics / Robotech Club",
    org: "Opoku Ware School",
    desc: "Led the club through national and continental robotics competitions.",
    location: "Kumasi",
  },
];

export const education = [
  { date: "2025 — 2028", title: "BSc Computer Science", sub: "University of Ghana" },
  {
    date: "2026",
    title: "Professional Certificate, Data Science",
    sub: "The University of Tokyo — Fundamental Theories and Implementations of Data Science",
    certificate: "/certificates/utokyo-data-science.jpg",
  },
  {
    date: "2026",
    title: "Object-Oriented Programming in Java",
    sub: "Educative",
    certificate: "/certificates/educative-java-oop.jpg",
  },
  {
    date: "2026",
    title: "Learn Python",
    sub: "Educative",
    certificate: "/certificates/educative-python.jpg",
  },
];

export const stack = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "MicroPython"] },
  { label: "Frontend & Desktop", items: ["React", "Vite", "Tailwind CSS", "Electron", "Tauri"] },
  {
    label: "Backend & Data",
    items: ["NestJS", "Flask", "Express", "PostgreSQL", "SQLite", "Prisma"],
  },
  { label: "AI / ML", items: ["MediaPipe", "scikit-learn", "pandas", "Jupyter"] },
  { label: "DevOps", items: ["GitHub Actions", "Make", "electron-builder", "Git"] },
  { label: "Design", items: ["Figma", "Figma Plugin API", "Design systems"] },
];
