import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Brain, Database, Code2, Cloud, GitBranch, Cpu, Mail, Github, Linkedin,
  ExternalLink, Award, Sparkles, BookOpen, Coffee, Mountain, Music, Camera,
  ArrowRight, Quote, MapPin, Phone, Send, Terminal, Zap, LineChart, Workflow,
  Boxes, ServerCog, FlaskConical, Bot, Home, FolderOpen, Layers, MessageSquare, Heart,
  ChevronLeft, ChevronRight, Briefcase, Building2, Calendar,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arjun Mehta — AI/ML Engineer & Data Engineering Specialist" },
      { name: "description", content: "Portfolio of Arjun Mehta — AI/ML engineer building production ML systems, data pipelines, and LLM-powered products at scale." },
      { property: "og:title", content: "Arjun Mehta — AI/ML Engineer" },
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
            <span className="hidden sm:inline">arjun.mehta</span>
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
            Hire me <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

const SIDEBAR_ITEMS = [
  { id: "home", label: "Home", Icon: Home },
  { id: "skills", label: "Skills", Icon: Layers },
  { id: "projects", label: "Projects", Icon: FolderOpen },
  { id: "certs", label: "Certifications", Icon: Award },
  { id: "testimonials", label: "Testimonials", Icon: MessageSquare },
  { id: "interests", label: "Interests", Icon: Heart },
  { id: "contact", label: "Contact", Icon: Mail },
];

function SectionSidebar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(true);
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
      className={`fixed top-24 left-4 z-40 hidden flex-col gap-1 rounded-2xl glass py-3 transition-all duration-300 lg:flex ${
        open ? "w-48 px-3" : "w-12 px-1.5 items-center"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="mb-2 flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-mono text-muted-foreground transition hover:bg-secondary hover:text-foreground"
        title={open ? "Collapse" : "Expand"}
      >
        {open ? <ChevronLeft className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
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
              <span className="text-sm font-medium transition-opacity duration-200">
                {label}
              </span>
            )}
            {isActive && open && (
              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            )}
          </a>
        );
      })}
    </aside>
  );
}

const ROLES = [
  "AI / ML Engineer",
  "Data Engineering Specialist",
  "MLOps Practitioner",
  "LLM Systems Builder",
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
            Available for senior AI/ML roles · Remote / Bengaluru
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
            I design and ship end-to-end ML systems — from petabyte-scale data pipelines and
            feature stores to fine-tuned LLMs and real-time inference services. 6+ years turning
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
              { k: "6+", v: "Years in AI/ML" },
              { k: "40+", v: "Models in production" },
              { k: "12PB", v: "Data orchestrated" },
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
          <span className="ml-2 text-muted-foreground">~/arjun/about</span>
        </div>
        <pre className="mt-3 whitespace-pre-wrap leading-relaxed text-muted-foreground">
<span className="text-primary">$</span> whoami
<span className="text-foreground">arjun — ai/ml engineer · data pipelines · llm systems</span>
<span className="text-primary">$</span> cat stack.json
<span className="text-foreground">{"{"} pytorch, jax, ray, spark, airflow, kafka, dbt {"}"}</span>
        </pre>
      </div>
    </div>
  );
}

const TICKER = [
  "PyTorch", "TensorFlow", "JAX", "Hugging Face", "LangChain", "vLLM",
  "Apache Spark", "Airflow", "Kafka", "Flink", "dbt", "Snowflake",
  "BigQuery", "Databricks", "Ray", "MLflow", "Weights & Biases", "Kubeflow",
  "Docker", "Kubernetes", "Terraform", "AWS", "GCP", "Azure",
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
    title: "AI / Machine Learning",
    Icon: Brain,
    color: "var(--electric)",
    skills: [
      { name: "PyTorch / TensorFlow", level: 95 },
      { name: "LLMs · RAG · Fine-tuning", level: 92 },
      { name: "Computer Vision", level: 85 },
      { name: "Time-series & Forecasting", level: 88 },
    ],
  },
  {
    title: "Data Engineering",
    Icon: Database,
    color: "var(--accent)",
    skills: [
      { name: "Spark · Flink · Beam", level: 93 },
      { name: "Airflow · Dagster · dbt", level: 90 },
      { name: "Kafka · Pub/Sub · Kinesis", level: 87 },
      { name: "Snowflake · BigQuery · Iceberg", level: 91 },
    ],
  },
  {
    title: "MLOps & Infrastructure",
    Icon: ServerCog,
    color: "var(--neon)",
    skills: [
      { name: "Kubernetes · Ray · KServe", level: 88 },
      { name: "MLflow · Weights & Biases", level: 90 },
      { name: "Feature Stores (Feast)", level: 84 },
      { name: "Terraform · CI/CD", level: 86 },
    ],
  },
  {
    title: "Languages & Tools",
    Icon: Code2,
    color: "var(--magenta)",
    skills: [
      { name: "Python", level: 97 },
      { name: "SQL · PL/pgSQL", level: 94 },
      { name: "Scala · Go", level: 78 },
      { name: "TypeScript", level: 80 },
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

const PROJECTS = [
  {
    title: "RAG-Powered Research Copilot",
    blurb: "Domain-tuned LLM assistant ingesting 4M+ documents with hybrid search and reranking. Reduced analyst research time by 68%.",
    tags: ["LLM", "RAG", "vLLM", "Pinecone", "LangGraph"],
    metrics: [{ k: "p95", v: "420ms" }, { k: "Recall@10", v: "0.93" }, { k: "Users", v: "1.2k" }],
    Icon: Bot,
    accent: "var(--electric)",
  },
  {
    title: "Real-time Fraud Detection Pipeline",
    blurb: "Streaming feature store + gradient boosting served on Kafka with sub-100ms inference. Saved $4.2M in disputed charges in Q1.",
    tags: ["Kafka", "Flink", "Feast", "XGBoost", "KServe"],
    metrics: [{ k: "TPS", v: "38k" }, { k: "AUC", v: "0.974" }, { k: "Latency", v: "84ms" }],
    Icon: Zap,
    accent: "var(--neon)",
  },
  {
    title: "Lakehouse Migration · 12PB",
    blurb: "Re-architected legacy Hadoop warehouse to Iceberg + dbt on Databricks. Cut storage cost 41% and query times 6x.",
    tags: ["Iceberg", "dbt", "Spark", "Databricks", "Terraform"],
    metrics: [{ k: "Cost", v: "−41%" }, { k: "Queries", v: "6× faster" }, { k: "Tables", v: "2,400" }],
    Icon: Database,
    accent: "var(--accent)",
  },
  {
    title: "Forecasting Platform for Retail",
    blurb: "Hierarchical demand forecasting across 18k SKUs using Temporal Fusion Transformers, served via Ray Serve.",
    tags: ["PyTorch", "TFT", "Ray Serve", "MLflow", "Airflow"],
    metrics: [{ k: "WAPE", v: "−22%" }, { k: "SKUs", v: "18k" }, { k: "Refresh", v: "hourly" }],
    Icon: LineChart,
    accent: "var(--magenta)",
  },
  {
    title: "LLM Eval & Guardrails Framework",
    blurb: "Internal harness for evaluating prompt versions across hallucination, toxicity, and factuality with offline + online metrics.",
    tags: ["LangSmith", "DeepEval", "Pytest", "Prometheus"],
    metrics: [{ k: "Suites", v: "120" }, { k: "Saved hrs/wk", v: "60+" }, { k: "Adoption", v: "8 teams" }],
    Icon: FlaskConical,
    accent: "var(--electric)",
  },
  {
    title: "Vector Search at Scale",
    blurb: "Designed a billion-scale ANN index using FAISS + HNSW with sharded GPU serving. Powers semantic search in 5 products.",
    tags: ["FAISS", "HNSW", "Triton", "CUDA", "Go"],
    metrics: [{ k: "Vectors", v: "1.4B" }, { k: "QPS", v: "12k" }, { k: "p99", v: "60ms" }],
    Icon: Boxes,
    accent: "var(--neon)",
  },
];

function Projects() {
  return (
    <Section id="projects" eyebrow="// selected work" title="Projects that shipped real impact" sub="A sampling of production systems I've designed, built, and operated end-to-end.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 transition hover:border-primary/50 hover:shadow-[var(--shadow-elevated)]">
            <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }} />
            <div className="flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-background/60" style={{ color: p.accent }}>
                <p.Icon className="h-5 w-5" />
              </span>
              <ExternalLink className="h-4 w-4 text-muted-foreground transition group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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

const CERTS = [
  { name: "AWS Certified Machine Learning — Specialty", issuer: "Amazon Web Services", year: "2024" },
  { name: "Google Professional Data Engineer", issuer: "Google Cloud", year: "2024" },
  { name: "Databricks Certified ML Professional", issuer: "Databricks", year: "2023" },
  { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2022" },
  { name: "Deep Learning Specialization", issuer: "DeepLearning.AI", year: "2021" },
  { name: "Confluent Certified Developer — Kafka", issuer: "Confluent", year: "2023" },
];

function Certifications() {
  return (
    <Section id="certs" eyebrow="// credentials" title="Certifications" sub="Continuous learning across cloud, data, and modern ML.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c) => (
          <div key={c.name} className="glass flex items-start gap-4 rounded-xl p-5 transition hover:border-primary/40">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[var(--gradient-primary)] text-primary-foreground">
              <Award className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-sm font-semibold leading-snug">{c.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.issuer} · <span className="font-mono">{c.year}</span></p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const TESTIMONIALS = [
  {
    quote: "Arjun is the rare engineer who can architect a streaming pipeline in the morning and fine-tune a transformer by evening. He single-handedly rebuilt our fraud platform and the impact is still compounding.",
    name: "Priya Raman",
    role: "Director of Engineering, Fintech",
  },
  {
    quote: "He shipped our RAG copilot from prototype to 1.2k weekly users in 10 weeks. His attention to evaluation rigor changed how our entire ML org thinks about LLM quality.",
    name: "Daniel Okafor",
    role: "Head of AI, SaaS Platform",
  },
  {
    quote: "One of the most thoughtful data engineers I've worked with. Arjun made our 12PB lakehouse migration look almost routine — and our finance team noticed first.",
    name: "Mei Lin Tan",
    role: "Principal Data Engineer",
  },
  {
    quote: "Beyond the tech depth, Arjun mentors juniors with patience and lifts the whole team. He's a force multiplier on any ML project.",
    name: "Rahul Verma",
    role: "Engineering Manager",
  },
];

function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="// what teammates say" title="Trusted by peers and leaders" sub="A few words from colleagues I've shipped alongside.">
      <div className="grid gap-5 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="glass relative rounded-2xl p-7">
            <Quote className="h-7 w-7 text-primary/60" />
            <blockquote className="mt-3 text-[15px] leading-relaxed text-foreground">"{t.quote}"</blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-primary)] font-display text-sm font-bold text-primary-foreground">
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
  { Icon: BookOpen, title: "Reading ML papers", note: "Weekly arXiv deep-dives" },
  { Icon: Mountain, title: "Trail running", note: "Half-marathon · 1:42" },
  { Icon: Camera, title: "Film photography", note: "35mm + medium format" },
  { Icon: Music, title: "Synthesizers", note: "Modular & ambient sets" },
  { Icon: Coffee, title: "Espresso geeking", note: "V60 to lever pulls" },
  { Icon: GitBranch, title: "Open source", note: "Maintain 3 ML utilities" },
  { Icon: Sparkles, title: "Mentoring", note: "ADPList · 80+ sessions" },
  { Icon: FlaskConical, title: "Side experiments", note: "Tiny LLM agents" },
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

function Contact() {
  return (
    <Section id="contact" eyebrow="// let's talk" title="Have a hard ML problem?" sub="I'm open to senior IC roles, staff-level ML engineering, and selective consulting.">
      <div className="grid gap-6 lg:grid-cols-[1fr,1.2fr]">
        <div className="glass rounded-2xl p-7">
          <h3 className="font-display text-lg font-semibold">Direct channels</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2"><Mail className="h-4 w-4 text-primary" /></span>
              <a href="mailto:arjun@example.com" className="hover:text-primary">arjun.mehta@proton.me</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2"><Phone className="h-4 w-4 text-primary" /></span>
              <span>+91 98xxx 12345</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2"><MapPin className="h-4 w-4 text-primary" /></span>
              <span>Bengaluru, India · Open to remote</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2"><Linkedin className="h-4 w-4 text-primary" /></span>
              <a href="#" className="hover:text-primary">linkedin.com/in/arjunmehta</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2"><Github className="h-4 w-4 text-primary" /></span>
              <a href="#" className="hover:text-primary">github.com/arjunmehta</a>
            </li>
          </ul>

          <div className="mt-7 rounded-xl border border-border bg-background/40 p-4 font-mono text-xs text-muted-foreground">
            <div><span className="text-primary">$</span> availability --next</div>
            <div className="mt-1 text-foreground">→ accepting interviews for Q3 2026</div>
          </div>
        </div>

        <form
          className="glass rounded-2xl p-7"
          onSubmit={(e) => { e.preventDefault(); alert("Thanks! I'll get back to you within 24h."); }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
          </div>
          <Field label="Company / role" name="company" placeholder="Acme · Engineering Manager" className="mt-4" />
          <div className="mt-4">
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              required rows={5}
              placeholder="Tell me a bit about the problem you're solving…"
              className="w-full rounded-lg border border-border bg-background/60 px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:translate-y-[-1px]">
            Send message <Send className="h-4 w-4" />
          </button>
        </form>
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
          © {new Date().getFullYear()} Arjun Mehta · Built with intent.
        </p>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="#" aria-label="GitHub" className="hover:text-primary"><Github className="h-4 w-4" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:arjun.mehta@proton.me" aria-label="Email" className="hover:text-primary"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
