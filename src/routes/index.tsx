import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Brain, Database, Code2, Cloud, GitBranch, Cpu, Mail, Github, Linkedin,
  ExternalLink, Award, Sparkles, BookOpen, Coffee, Mountain, Music, Camera,
  ArrowRight, Quote, MapPin, Phone, Send, Terminal, Zap, LineChart, Workflow,
  Boxes, ServerCog, FlaskConical, Bot, Home, FolderOpen, Layers, MessageSquare, Heart,
  ChevronLeft, ChevronRight, Briefcase, Building2, Calendar,
  FileArchive,
  FileSearch,
  BrainCircuit,
  GraduationCap,
  Popcorn,
  Car,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rohith Vignesh — AI/ML Engineer & Data Engineering Specialist" },
      { name: "description", content: "Portfolio of Rohith Vignesh — AI/ML engineer building production ML systems, data pipelines, and LLM-powered products at scale." },
      { property: "og:title", content: "Rohith Vignesh — AI/ML Engineer" },
      { property: "og:description", content: "Production ML, MLOps, and large-scale data engineering. Selected projects, certifications, and contact." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certs", label: "Certifications" },
  { id: "testimonials", label: "Testimonials" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <ScanLine />
      <Nav />
      <SectionSidebar />
      <main>
        <Hero />
        <TechTicker />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Testimonials />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function ScanLine() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
    </div>
  );
}

function Nav() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass flex items-center justify-between rounded-full px-4 py-2.5">
          <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-[var(--gradient-primary)] text-primary-foreground">
              <Terminal className="h-4 w-4" />
            </span>
            <span className="hidden sm:inline">rohith.vignesh</span>
            <span className="text-primary animate-blink">_</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  active === n.id ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Hello Rohith! <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

const SIDEBAR_ITEMS = [
  { id: "home", label: "Home", Icon: Home },
  { id: "skills", label: "Skills", Icon: Layers },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "projects", label: "Projects", Icon: FolderOpen },
  { id: "certs", label: "Certifications", Icon: Award },
  { id: "testimonials", label: "Testimonials", Icon: MessageSquare },
  { id: "interests", label: "Interests", Icon: Heart },
  { id: "contact", label: "Contact", Icon: Mail },
];

function SectionSidebar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SIDEBAR_ITEMS.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <aside
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setTimeout(() => setOpen(false), 200)}
      className={`fixed top-24 left-4 z-40 hidden flex-col gap-1 rounded-2xl glass py-3 transition-all duration-300 lg:flex ${
        open ? "w-48 px-3" : "w-12 px-1.5 items-center"
      }`}
    >
      <button
        className="mb-2 flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-mono text-muted-foreground transition hover:bg-secondary hover:text-foreground"
      >
        {open ? (
          <ChevronLeft className="h-3.5 w-3.5" />
        ) : (
          <ChevronRight className="h-3.5 w-3.5" />
        )}
        {open && <span>Sections</span>}
      </button>

      {SIDEBAR_ITEMS.map(({ id, label, Icon }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`group flex items-center gap-3 rounded-xl px-2.5 py-2.5 transition ${
              isActive
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
            }`}
          >
            <span
              className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg border transition ${
                isActive
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-surface group-hover:border-primary/20"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
            </span>

            {open && (
              <span className="text-sm font-medium">
                {label}
              </span>
            )}
          </a>
        );
      })}
    </aside>
  );
}

const ROLES = [
  "AI / ML Engineer",
  "Data Engineer",
  "MLOps Engineer",
  "Senior Python Developer",
];

function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    const full = ROLES[roleIdx];
    let i = 0, dir = 1;
    const t = setInterval(() => {
      i += dir;
      setText(full.slice(0, i));
      if (i === full.length) { dir = -1; setTimeout(() => {}, 1200); }
      if (i === 0 && dir === -1) { dir = 1; setRoleIdx((r) => (r + 1) % ROLES.length); clearInterval(t); }
    }, 70);
    return () => clearInterval(t);
  }, [roleIdx]);

  return (
    <section id="home" className="relative mx-auto max-w-6xl px-4 pt-16 pb-24 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr,1fr]">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for Mid Senior AI/ML roles · Remote / Bengaluru / Chennai / Hyderabad / Trivandrum
          </div>

          <h1 className="font-display mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Building <span className="text-gradient">intelligent systems</span><br />
            from raw data to <span className="text-gradient">production</span>.
          </h1>

          <div className="mt-6 flex items-center gap-2 font-mono text-base sm:text-lg">
            <span className="text-primary">&gt;</span>
            <span className="text-muted-foreground">role:</span>
            <span className="text-foreground">{text}</span>
            <span className="text-primary animate-blink">▍</span>
          </div>

          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            I design and ship end-to-end ML systems — from Terrabyte-scale data pipelines and
            feature stores to fine-tuned LLMs and real-time inference services. 2+ years turning
            ambiguous business problems into measurable model impact.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:translate-y-[-1px]">
              Explore my work <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-semibold transition hover:bg-surface-2">
              <Mail className="h-4 w-4" /> Get in touch
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-8">
            {[
              { k: "2+", v: "Years in AI/ML" },
              { k: "10+", v: "Models in production" },
              { k: "6TB", v: "Data orchestrated" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-bold text-foreground sm:text-4xl">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroCard />
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative animate-fade-up [animation-delay:200ms]">
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-[var(--gradient-primary)] opacity-20 blur-3xl" />

      {/* Orbiting tech icons */}
      <div className="relative mx-auto aspect-square max-w-md">
        <div className="absolute inset-0 rounded-full border border-border" />
        <div className="absolute inset-8 rounded-full border border-border/70" />
        <div className="absolute inset-16 rounded-full border border-border/50" />

        {[
          { Icon: Brain, r: 180, d: "20s", c: "var(--electric)" },
          { Icon: Database, r: 180, d: "20s", c: "var(--accent)", delay: "-5s" },
          { Icon: Cloud, r: 180, d: "20s", c: "var(--neon)", delay: "-10s" },
          { Icon: Cpu, r: 180, d: "20s", c: "var(--magenta)", delay: "-15s" },
          { Icon: Bot, r: 120, d: "14s", c: "var(--neon)" },
          { Icon: Workflow, r: 120, d: "14s", c: "var(--electric)", delay: "-7s" },
        ].map(({ Icon, r, d, c, delay }, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 -ml-5 -mt-5 grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface shadow-[var(--shadow-elevated)]"
            style={{
              animation: `orbit ${d} linear infinite`,
              animationDelay: delay,
              ["--r" as string]: `${r}px`,
              color: c,
            }}
          >
            <Icon className="h-5 w-5" />
          </span>
        ))}

        {/* Center avatar */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-[var(--gradient-primary)] opacity-60 blur-xl" />
            <div className="relative grid h-32 w-32 place-items-center overflow-hidden rounded-full border-2 border-primary bg-surface shadow-[var(--shadow-glow)]">
              <span className="font-display text-4xl font-bold text-gradient">AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal card */}
      <div className="glass mt-6 rounded-xl p-4 font-mono text-xs">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-muted-foreground">~/rohith/about</span>
        </div>
        <pre className="mt-3 whitespace-pre-wrap leading-relaxed text-muted-foreground">
<span className="text-primary">$</span> whoami
<span className="text-foreground">rohith — ai/ml engineer · data pipelines · llm systems</span>
<span className="text-primary">$</span> cat stack.json
<span className="text-foreground">{"{"}YOLO, Deep/Machine learning, spark, cloud services, SQL/NoSQL DB, RAG{"}"}</span>
        </pre>
      </div>
    </div>
  );
}

const TICKER = [
  "Python", "Data Engineering", "PySpark", "Apache Spark",
  "AWS", "AWS EMR", "Lambda", "EventBridge", "Amazon S3",
  "Google Cloud", "BigQuery", "Docker",
  "Generative AI", "LLMs", "OpenAI", "Gemini",
  "Claude", "Amazon Bedrock", "RAG", "Multi-Agent AI",
  "Elasticsearch", "PaddleOCR", "YOLO", "Computer Vision",
  "Salesforce", "REST APIs", "Cloud Architecture","Databricks","ETL Pipelines"
];

function TechTicker() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface/40 py-5">
      <div className="flex w-max gap-12 animate-ticker">
        {[...TICKER, ...TICKER].map((t, i) => (
          <span key={i} className="font-mono text-sm text-muted-foreground whitespace-nowrap">
            <span className="text-primary">▸</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

const SKILL_GROUPS = [
  {
    title: "AI & Generative AI",
    Icon: Brain,
    color: "var(--electric)",
    skills: [
      { name: "LLMs · RAG · Multi-Agent AI", level: 97 },
      { name: "OCR · PaddleOCR · Tesseract · GCV", level: 96 },
      { name: "Computer Vision · YOLO", level: 95 },
      { name: "OpenAI · Gemini · Claude · Bedrock", level: 94 },
    ],
  },
  {
    title: "Data Engineering",
    Icon: Database,
    color: "var(--accent)",
    skills: [
      { name: "PySpark · Apache Spark · AWS EMR", level: 95 },
      { name: "BigQuery · SQL · ETL Pipelines", level: 94 },
      { name: "Pandas · NumPy · Data Processing", level: 97 },
      { name: "Salesforce Integration · REST · Bulk API", level: 94 },
    ],
  },
  {
    title: "Programming",
    Icon: Code2,
    color: "var(--magenta)",
    skills: [
      { name: "Python", level: 99 },
      { name: "SQL · BigQuery SQL", level: 96 },
      { name: "JavaScript · React · Streamlit", level: 70 },
      { name: "Flask · FastAPI · REST APIs", level: 92 },
    ],
  },
  {
    title: "Cloud & Architecture",
    Icon: ServerCog,
    color: "var(--neon)",
    skills: [
      { name: "AWS (S3, Lambda, EMR, SQS, EventBridge)", level: 95 },
      { name: "GCP (BigQuery, Cloud Run, Vertex AI)", level: 92 },
      { name: "Docker · Linux · Git", level: 88 },
      { name: "Scalable APIs · Cloud Architecture", level: 94 },
    ],
  },
];

function Section({ id, eyebrow, title, sub, children }: any) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-4 py-24">
      <div className="mb-14 max-w-2xl">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
        {sub && <p className="mt-4 text-muted-foreground sm:text-lg">{sub}</p>}
      </div>
      {children}
    </section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="// skills" title="A full-stack ML toolkit" sub="From streaming ingestion to model serving — I work across the entire data and ML lifecycle.">
      <div className="grid gap-6 md:grid-cols-2">
        {SKILL_GROUPS.map(({ title, Icon, color, skills }) => (
          <div key={title} className="glass glow-border group relative overflow-hidden rounded-2xl p-6 transition hover:translate-y-[-2px]">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-surface" style={{ color }}>
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {skills.map((s) => (
                <li key={s.name}>
                  <div className="mb-1.5 flex items-baseline justify-between font-mono text-xs">
                    <span className="text-foreground">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full transition-[width] duration-700"
                      style={{ width: `${s.level}%`, background: "var(--gradient-primary)" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}


const EXPERIENCE = [
  {
    company: "Nura Analytics",
    location: "Chennai, IN",
    totalDuration: "2 yrs 1 mos",
    accent: "var(--primary)",
    roles: [
      {
        role: "AI/ML Engineer",
        period: "Jan 2025 — Present",
        blurb: "Specialized in cloud data engineering, large-scale data migrations, distributed processing, Salesforce integrations, and multi-agent LLM solutions for intelligent document extraction.",
        bullets: [
          "Designed and implemented scalable cloud-based data pipelines to handle high-volume data and file processing across enterprise systems.",
          "Built strong expertise in distributed data processing using PySpark and AWS EMR clusters, optimizing large-scale data transformation workflows.",
          "Developed secure and reliable cloud storage pipelines using Amazon S3 for staging, backup, and downstream system integrations.",
          "Integrated enterprise applications with Salesforce CRM using REST APIs and Salesforce Bulk API, enabling large-scale insert, update, and upsert operations.",
          "Collaborated with cross-functional teams to ensure data quality, accurate record mapping, and successful enterprise data migrations.",
          "Gained hands-on experience in cloud infrastructure configuration, large dataset processing, and enterprise data integration architectures.",
          "Implemented document intelligence solutions using Google Document AI to parse and extract transaction tables from bank statements.",
          "Built AI-powered extraction pipelines using Gemini, AWS Bedrock models, and OpenAI to accurately extract transaction details from unstructured bank statements, including scanned images and documents without table structures.",
          "Developed expertise in designing multi-agent LLM architectures and orchestration workflows with hands-on experience in Gemini, OpenAI, and AWS Bedrock models (Claude, Llama, Nova) for document understanding and intelligent data extraction."
        ],
        stack: [
  "Python",
  "PySpark",
  "AWS",
  "Amazon EMR",
  "Amazon S3",
  "Salesforce",
  "Salesforce",
  "OCR",
  "Google Document AI",
  "Generative AI",
  "OpenAI",
  "Gemini",
  "AWS Bedrock",
  "Claude",
  "Llama",
  "Nova",
  "LLM Orchestration",
  "Multi-Agent AI Systems",
  "Data Engineering",
  "ETL Pipelines",
  "Enterprise Data Migration",
  "REST APIs",
  "Cloud Architecture"
],
      },
      {
        role: "Data Analytics Intern",
        period: "Jun 2024 — Dec 2024",
        blurb: "Built scalable AI and cloud-based automation solutions using Python, OCR, LLMs, vector databases, and machine learning to streamline document processing, data retrieval, and business operations.",
        bullets: [
          "Developed an automated mailroom system for document processing.",
          "Utilized OCR technology to extract data from documents and staged the extracted information into SQL databases.",
          "Managed files and resources using Google Cloud Platform (GCP), containerized the application, and deployed it via GCP Cloud Run.",
          "Built a chatbot integrated with SQL and Vector Databases (such as ChromaDB, Elasticsearch, and FAISS) to retrieve data dynamically.",
          "Worked with Large Language Models (LLMs), including OpenAI and LLaMA, for enhanced data processing and chatbot interactions.",
          "Led backend development using Python for processing logic, API handling, and data management.",
          "Created a Flask application with a background scheduler to automate file processing, optimizing compute resources for the entire project lifecycle.",
          "Trained machine learning models tailored to business requirements using frameworks like scikit-learn, TensorFlow, and YOLO."
        ],
        stack: ["Python","Flask","OCR","OpenAI","LLaMA","ChromaDB","FAISS","Elasticsearch","SQL","TensorFlow","YOLO","GCP","Docker"],
      },
    ],
  },
    {
    company: "NCR Corporation Ltd.",
    location: "Chennai, IN",
    totalDuration: "6 mos",
    accent: "var(--accent)",
    roles: [
      {
        role: "Manufacturing Engineer Trainee",
        period: "Feb 2023 — Jul 2023",
        blurb: "Supported manufacturing operations, process optimization, and quality improvement initiatives within a high-volume production environment.",
        bullets: [
          "Worked on production planning and quality assurance activities.",
          "Assisted in process optimization and operational improvements.",
          "Collaborated with cross-functional teams on manufacturing projects.",
        ],
        stack: [
          "Lean Manufacturing",
          "Quality Control",
          "Process Improvement",
          "Production Planning",
          "Operations Management"
        ],
      },
    ],
  },
];

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="// career"
      title="Work experience"
      sub="Building enterprise software, AI solutions, and data systems that solve real business problems."
    >
      <ol className="relative space-y-6 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-border md:before:left-5">
        {EXPERIENCE.map((e) => (
          <li
            key={e.company}
            className="relative pl-12 md:pl-16"
          >
            <span
              className="absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full border border-border bg-background md:h-10 md:w-10"
              style={{ color: e.accent }}
            >
              <Briefcase className="h-4 w-4" />
            </span>

            <article className="group relative rounded-2xl border border-border bg-surface/60 p-5 transition hover:border-primary/50 hover:shadow-[var(--shadow-elevated)]">
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${e.accent}, transparent)`,
                }}
              />

              {/* Company Header */}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-foreground">
                    <Building2 className="h-4 w-4" />
                    {e.company}
                  </span>

                  <span className="text-sm font-medium text-primary">
                    · {e.totalDuration}
                  </span>
                </div>

                <div className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {e.location}
                </div>
              </div>

              {/* Roles */}
              <div className="mt-5">
                {e.roles?.map((role, idx) => (
                  <div
                    key={role.role}
                    className={
                      idx > 0
                        ? "mt-6 border-t border-border pt-6"
                        : ""
                    }
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold leading-tight">
                        {role.role}
                      </h3>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {role.period}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {role.blurb}
                    </p>

                    <ul className="mt-3 space-y-1.5">
                      {role.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 text-sm text-foreground/90"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full"
                            style={{
                              background: e.accent,
                            }}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {role.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

const PROJECTS = [
  {
  title: "Intelligent Document Processing & RAG Platform",
  blurb: "Engineered an AI-powered Intelligent Document Processing (IDP) platform for a leading Indian financial services company to extract structured data from diverse document formats using OCR, custom computer vision models, and LLMs. Developed in-house YOLO models to detect signatures, seals, photographs, stamps, and thumb impressions, improving document validation accuracy. Built a Retrieval-Augmented Generation (RAG) system with Elasticsearch for semantic document retrieval, enabling instant information access and automating loan processing workflows. The solution reduced manual approval effort by 65% and increased document processing throughput by 200%.",
  tags: [
    "Python",
    "PaddleOCR",
    "Tesseract",
    "Google Vision AI",
    "YOLO",
    "Computer Vision",
    "OpenAI",
    "Gemini",
    "Claude",
    "Amazon Bedrock",
    "RAG",
    "Elasticsearch"
  ],
  metrics: [
    { k: "Automation", v: "65%" },
    { k: "Throughput", v: "+200%" },
    { k: "Custom AI", v: "YOLO" }
  ],
  Icon: FileSearch,
  accent: "var(--emerald)",
},
    {
  title: "GenBI Multi-Agent Analytics Platform",
  blurb: "Built an enterprise GenBI assistant for one of Saudi Arabia's largest real estate companies, enabling natural language analytics over BigQuery. Designed a multi-agent architecture powered by Gemini and OpenAI models to validate user queries, identify relevant schemas, generate optimized BigQuery SQL, create interactive charts and KPIs, and deliver business insights with automated summaries.",
  tags: [
    "Python",
    "Gemini",
    "OpenAI",
    "BigQuery",
    "GCP",
    "Multi-Agent AI",
    "LLM",
    "Data Analytics"
  ],
  metrics: [
    { k: "LLMs", v: "Gemini + OpenAI" },
    { k: "Platform", v: "GCP" },
    { k: "Agents", v: "5+" }
  ],
  Icon: Bot,
  accent: "var(--purple)",
  },
  {
  title: "Nationalised Bank Data Migration",
  blurb: "Built a large-scale AWS EMR (PySpark) data migration pipeline to process 1TB of banking data from Amazon S3, perform customer-specific transformations, and migrate records into Salesforce using REST and Bulk APIs with high-throughput batch processing.",
  tags: ["AWS EMR", "PySpark", "Amazon S3", "Salesforce", "REST API", "Bulk API"],
  metrics: [
    { k: "Data", v: "1TB+" },
    { k: "Platform", v: "AWS" },
    { k: "Target", v: "Salesforce" }
  ],
  Icon: Database,
  accent: "var(--neon)",
},
  {
  title: "Enterprise File Migration to Salesforce",
  blurb: "Developed a Python-based file migration solution for India's largest automobile manufacturer to migrate and link over 4TB of business documents from on-premises client servers to Salesforce. Automated file uploads and record associations using Salesforce REST APIs, enabling seamless access to repair orders, invoices, and other service documents.",
  tags: [
    "Python",
    "Salesforce",
    "REST API",
    "File Migration",
    "Data Integration",
    "Automation"
  ],
  metrics: [
    { k: "Storage", v: "4TB+" },
    { k: "Platform", v: "Salesforce" },
    { k: "Documents", v: "Repair Orders & Invoices" }
  ],
  Icon: FileArchive,
  accent: "var(--primary)",
},
];

const PROJECT_COLUMNS = 2;

const PROJECT_GRID_CLASS = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-1 lg:grid-cols-2",
  3: "md:grid-cols-1 lg:grid-cols-3",
  4: "md:grid-cols-1 lg:grid-cols-4",
}[PROJECT_COLUMNS];

function Projects() {
  return (
    <Section id="projects" eyebrow="// selected work" title="Projects that shipped real impact" sub="A sampling of production systems I've designed, built, and operated end-to-end.">
      <div className={`grid gap-6 ${PROJECT_GRID_CLASS}`}>
        {PROJECTS.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 transition hover:border-primary/50 hover:shadow-[var(--shadow-elevated)]">
            <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }} />
            <div className="flex items-center">
              <span
                className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-background/60"
                style={{ color: p.accent }}
              >
                <p.Icon className="h-5 w-5" />
              </span>
            </div>
            <h3 className="font-display mt-5 text-lg font-semibold leading-snug">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>

            <div className="mt-5 grid grid-cols-3 gap-2 rounded-lg border border-border bg-background/40 p-3">
              {p.metrics.map((m) => (
                <div key={m.k}>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{m.k}</div>
                  <div className="font-display text-sm font-semibold text-foreground">{m.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-border bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

import databricksLogo from "../certs/databricks.jpg";
import iitmLogo from "../certs/iitm.jpg";
import guviLogo from "../certs/guvi.jpg";

const CERTS = [
  {
    name: "Databricks Certified Associate: Data Engineer",
    issuer: "GUVI & IITM Pravartak Technologies Foundations",
    year: "2025",
    link: "https://credentials.databricks.com/f71c5dc9-3c76-4d57-8c45-2e4227e2a5f9",
    logo: databricksLogo
  },
  {
    name: "Certified Professional in Advanced Programming",
    issuer: "GUVI & IITM Pravartak Technologies Foundations",
    year: "2024",
    link: "https://digitalskills.iitmpravartak.org.in/verify/cert/45171qG101C2m51105",
    logo: iitmLogo
  },
  {
    name: "Master Data Science Program",
    issuer: "Guvi Geeks Network",
    year: "2024",
    link: "https://www.guvi.in/share-certificate/45171qG101C2m51105",
    logo: guviLogo
  },
]

function Certifications() {
  return (
    <Section
      id="certs"
      eyebrow="// credentials"
      title="Certifications"
      sub="Continuous learning across cloud, data, and modern ML."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c) => (
          <a
            key={c.name}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass relative flex items-start gap-4 rounded-xl p-5 transition hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-lg border border-border bg-white p-1">
              <img
                src={c.logo}
                alt={c.issuer}
                className="h-full w-full object-contain"
              />
            </span>

            <div className="min-w-0 flex-1">
              <h3 className="font-display text-sm font-semibold leading-snug">
                {c.name}
              </h3>

              <p className="mt-1 text-xs text-muted-foreground">
                {c.issuer} ·{" "}
                <span className="font-mono">{c.year}</span>
              </p>
            </div>

            <ExternalLink className="h-4 w-4 text-muted-foreground transition group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </Section>
  );
}

const TESTIMONIALS = [
{
  quote: "Rohith consistently exceeded expectations with his ability to bridge business needs and data engineering solutions. He quickly grasped complex requirements, designed scalable data pipelines, and delivered reliable outcomes that aligned perfectly with business objectives. Working with him across three consecutive projects has been an outstanding experience.",
  name: "Shivangi Mishra",
  role: "Vice President, SaaS Platform",
},
{
  quote: "Rohith played a pivotal role in transforming our loan processing workflow through AI-driven automation. His expertise in Machine Learning, Deep Learning, and Intelligent Document Processing reduced manual approval effort by 65%, significantly accelerated loan processing, and delivered measurable operational efficiencies. He has a remarkable ability to bridge complex business requirements with practical, scalable AI solutions, making him an invaluable asset to any organization.",
  name: "Arun Kumar B",
  role: "Associate Vice President, Digital Transformation & Customer Experience, Fincorp",
},

  {
  quote: "Rohith consistently demonstrated exceptional technical depth and ownership throughout our 4TB enterprise file migration initiative. He architected a scalable event-driven data pipeline using AWS EventBridge and seamlessly integrated it with Salesforce, ensuring reliable and efficient document migration. Beyond his technical expertise in cloud architecture and data engineering, Rohith is a dependable team player who quickly understands business needs and delivers high-quality solutions. He is an outstanding engineer with tremendous potential.",
  name: "Nilesh Borole",
  role: "Sr. Manager – DMS & IT Systems, India's Largest Automobile Manufacturer",
},
{
  quote: "Rohith has a unique ability to bridge business challenges with AI-driven solutions. The LLM-powered GenBI assistant he architected transformed how our teams interact with data, automating a significant portion of our reporting and analytics workflows. This enabled us to reduce our dependency on manual Power BI development, allowing our BI team to focus on strategic initiatives while delivering faster insights and improving business decision-making. His expertise in data engineering, Generative AI, and cloud technologies makes him an exceptional engineer.",
  name: "Abdelaati Elshami",
  role: "IT Manager, Real Estate & Construction, Saudi Arabia",
},
{
  quote: "I had the opportunity to work with Rohith during product development during my time at Nura Analytics, and he was someone the team could always rely on. His APIs were robust, scalable, and thoughtfully designed, making frontend integration straightforward. He also built well-structured data pipelines that were easy to extend and maintain. What stood out most was his collaborative attitude, he was always ready to discuss ideas, solve problems, and support the team whenever needed.",
  name: "Hari Prasath S",
  role: "Senior Frontend Developer, Tricon Infotech",
},
{
  quote: "Working with Rohith has been a great experience. He has a strong foundation in data engineering, cloud platforms, and Generative AI, and consistently applies those skills to solve real business problems. What stands out most is his ability to understand business requirements quickly, design scalable solutions, and execute them with confidence. He's a dependable teammate, always ready to collaborate, share ideas, and take ownership of complex challenges.",
  name: "Liya T Mathew",
  role: "Senior Analytics Engineer, Nura Analytics",
},
{
  quote: "I've had the privilege of mentoring Rohith from his early days as a Data Analytics Intern to his current role as an AI/ML Engineer. His growth has been exceptional, driven by curiosity, ownership, and a commitment to continuous learning. Rohith has developed strong expertise in data engineering, cloud technologies, and Generative AI, consistently delivering scalable solutions that address real business challenges. His ability to quickly understand complex requirements, architect practical solutions, and execute them with confidence makes him a valuable asset to any engineering team. Beyond his technical capabilities, he is collaborative, dependable, and always willing to take ownership of challenging initiatives.",
  name: "Thangabalu Karunanithi",
  role: "Chief Technology Officer, Nura Analytics",
},
{
  quote: "Although Rohith joined us through a single opportunity, the range of responsibilities he has taken on across multiple projects speaks volumes about his versatility and ability to adapt. From large-scale data engineering and cloud-native architectures to enterprise AI and Generative AI solutions, he has consistently delivered impactful outcomes while maintaining a strong focus on business objectives. Rohith combines technical excellence with ownership, collaboration, and a continuous learning mindset, making him an engineer I can confidently recommend for any high-impact technology role.",
  name: "Ramachandran Srinivasan",
  role: "Chief Executive Officer, Nura Analytics",
}
];

function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="// Testimonials" title="Perspectives from Colleagues, Clients, and Technology leaders.">
      <div className="grid gap-5 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="glass relative rounded-2xl p-7">
            <Quote className="h-7 w-7 text-primary/60" />
            <blockquote className="mt-3 text-[15px] leading-relaxed text-foreground">"{t.quote}"</blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <span
                className="grid h-10 w-10 place-items-center rounded-full font-display text-sm font-bold text-white"
                style={{ background: "var(--gradient-primary)" }}
              >
                {t.name.split(" ").map((n) => n[0]).join("")}
              </span>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}


const INTERESTS = [
  { Icon: BrainCircuit, title: "Exploring AI Trends", note: "Following the latest GenAI, LLM & Data Engineering innovations" },
  { Icon: Linkedin, title: "Industry Learning", note: "Keeping up with emerging technologies and engineering leaders on LinkedIn" },
  { Icon: GraduationCap, title: "Mentoring", note: "Weekend special sessions and career guidance at GUVI" },
  { Icon: FlaskConical, title: "Side Experiments", note: "Building AI agents, RAG systems & automation projects" },
  { Icon: Trophy, title: "Sports", note: "Badminton, Chess & Carrom to recharge and stay competitive" },
  { Icon: Car, title: "Short Drives", note: "Relaxing drives for a cup of tea and fresh perspectives" },
  { Icon: Popcorn, title: "Movie Buff", note: "Enjoying sci-fi, thrillers and inspiring stories" },
  { Icon: BookOpen, title: "Continuous Learning", note: "Exploring cloud architectures, distributed systems and ML research" },
];

function Interests() {
  return (
    <Section id="interests" eyebrow="// off the clock" title="Curiosity outside the terminal" sub="What I do when I'm not deploying models.">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {INTERESTS.map(({ Icon, title, note }) => (
          <div key={title} className="group rounded-xl border border-border bg-surface/60 p-5 transition hover:border-primary/40 hover:bg-surface-2">
            <Icon className="h-5 w-5 text-primary transition group-hover:scale-110" />
            <h3 className="font-display mt-4 text-sm font-semibold">{title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{note}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

import { toast } from "sonner";

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const loadingToast = toast.loading(
    "Sending message..."
  );

  try {
    const response = await fetch(
      "https://formspree.io/f/maqzdapj",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    toast.dismiss(loadingToast);

    if (response.ok) {
      toast.success(
        "Message sent successfully!",
        {
          description:
            "Thanks for reaching out. I'll get back to you soon.",
        }
      );

      form.reset();
    } else {
      toast.error(
        "Failed to send message",
        {
          description:
            "Please try again or contact me directly via email.",
        }
      );
    }
  } catch (error) {
    toast.dismiss(loadingToast);

    toast.error(
      "Something went wrong",
      {
        description:
          "Unable to send your message right now.",
      }
    );
  }
};


function Contact() {
  return (
    <Section id="contact" eyebrow="// let's talk" title="Building Enterprise AI & Data Solutions?" sub="I'm open to opportunities in AI/ML Engineering, Data Engineering, and Generative AI, where I can design scalable data platforms, intelligent document processing systems, multi-agent AI solutions, and cloud-native architectures that solve real business problems.">
      <div className="grid gap-6 lg:grid-cols-[1fr,1.2fr]">
        <div className="glass rounded-2xl p-7">
          <h3 className="font-display text-lg font-semibold">Direct channels</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2"><Mail className="h-4 w-4 text-primary" /></span>
              <a href="mailto:rohithvignesh.c@gmail.com" className="hover:text-primary">rohithvignesh.c@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2"><Phone className="h-4 w-4 text-primary" /></span>
              <span>+91 8220537547</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2"><MapPin className="h-4 w-4 text-primary" /></span>
              <span>Chennai, India · Open to remote</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2"><Linkedin className="h-4 w-4 text-primary" /></span>
              <a href="https://www.linkedin.com/in/csrv547/" className="hover:text-primary" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/in/csrv547/
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2"><Github className="h-4 w-4 text-primary" /></span>
              <a href="https://github.com/CSRV547" className="hover:text-primary" target="_blank" rel="noopener noreferrer">
                github.com/csrv547
              </a>
            </li>
          </ul>

          <div className="mt-7 rounded-xl border border-border bg-background/40 p-4 font-mono text-xs text-muted-foreground">
            <div><span className="text-primary">$</span> availability --next</div>
            <div className="mt-1 text-foreground">→ Currently not available for new opportunities</div>
          </div>
        </div>

        <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                name="name"
                placeholder="Jane Doe"
              />

              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="jane@company.com"
              />
            </div>

            <Field
              label="Company / Role"
              name="company"
              placeholder="Acme · Engineering Manager"
              className="mt-4"
            />

            <div className="mt-4">
              <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Message
              </label>

              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me a bit about the problem you're solving…"
                className="w-full rounded-lg border border-border bg-background/60 px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>

            {/* Optional email subject */}
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Request"
            />

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:translate-y-[-1px]"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </form>

          {/* If you want a success message without leaving the page:

          <form
            action="https://formspree.io/f/maqzdapj"
            method="POST"
          >
            ...
            <input
              type="hidden"
              name="_next"
              value="https://rohithvignesh-portfolio.vercel.app/?success=true"
            />
          </form> */}
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder, className = "" }: any) {
  return (
    <div className={className}>
      <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        required name={name} type={type} placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background/60 px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rohith Vignesh · Building AI that delivers business impact.
        </p>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="https://github.com/CSRV547" aria-label="GitHub" className="hover:text-primary" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/csrv547/" aria-label="LinkedIn" className="hover:text-primary" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:rohithvignesh.c@gmail.com" aria-label="Email" className="hover:text-primary">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
