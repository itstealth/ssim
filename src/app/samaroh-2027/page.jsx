import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

const themes = [
  {
    number: "01",
    title: "Artificial Intelligence, GenAI & Agentic AI",
    topics: [
      "Generative AI",
      "Agentic AI",
      "Human–AI Collaboration",
      "Responsible AI",
      "AI-enabled Business Transformation",
    ],
  },
  {
    number: "02",
    title: "Digital Transformation, Emerging Technologies & Industry 5.0",
    topics: [
      "Digital Transformation",
      "IoT",
      "Digital Twins",
      "Robotics",
      "Metaverse",
      "Smart Organizations",
      "Industry 5.0",
    ],
  },
  {
    number: "03",
    title: "Marketing, Consumer Behaviour & Customer Experience",
    topics: [
      "AI Marketing",
      "Consumer Insights",
      "Branding",
      "Retail Innovation",
      "Omnichannel",
      "Customer Experience",
      "Digital Consumers",
    ],
  },
  {
    number: "04",
    title: "Innovation, Entrepreneurship, Startups & Business Models",
    topics: [
      "Entrepreneurial Innovation",
      "Startups",
      "Business Model Innovation",
      "Digital Entrepreneurship",
      "Social Innovation",
      "Startup Ecosystems",
    ],
  },
  {
    number: "05",
    title: "Sustainability, Circular Economy, ESG & Responsible Business",
    topics: [
      "Circular Economy",
      "ESG",
      "Sustainable Business Models",
      "Green Innovation",
      "Climate Action",
      "Responsible Business",
    ],
  },
  {
    number: "06",
    title: "Finance, FinTech & Business Analytics",
    topics: [
      "AI in Finance",
      "FinTech",
      "Digital Finance",
      "Financial Analytics",
      "Sustainable Finance",
      "Risk Analytics",
    ],
  },
  {
    number: "07",
    title: "Human Capital, Leadership, Organizational Behaviour & Future of Work",
    topics: [
      "AI-enabled HR",
      "Leadership",
      "People Analytics",
      "Employee Experience",
      "Future Skills",
      "Human–AI Collaboration",
    ],
  },
  {
    number: "08",
    title: "Operations, Supply Chain, Logistics & Industry 5.0",
    topics: [
      "Intelligent Supply Chains",
      "Smart Operations",
      "Logistics Innovation",
      "Supply Chain Resilience",
      "Automation",
      "Sustainable Operations",
    ],
  },
  {
    number: "09",
    title: "Strategy, Global Business & Organizational Transformation",
    topics: [
      "Strategic Transformation",
      "Global Business",
      "Competitive Advantage",
      "Organizational Agility",
      "Business Ecosystems",
      "Strategic Resilience",
    ],
  },
  {
    number: "10",
    title: "Data Analytics, Business Intelligence & Decision Sciences",
    topics: [
      "Predictive Analytics",
      "Machine Learning",
      "Business Intelligence",
      "Decision Analytics",
      "Data-driven Strategy",
      "AI-enabled Decision Making",
    ],
  },
  {
    number: "11",
    title: "Corporate Governance, Business Ethics, Policy & Responsible Management",
    topics: [
      "AI Governance",
      "Business Ethics",
      "Corporate Governance",
      "Data Privacy",
      "Responsible Innovation",
      "Policy & Regulation",
    ],
  },
  {
    number: "12",
    title: "Management Education, Research & Future of Learning",
    topics: [
      "AI in Management Education",
      "GenAI-enabled Learning",
      "Research Innovation",
      "Future Skills",
      "Experiential Learning",
      "Academic Integrity",
    ],
  },
  {
    number: "13",
    title: "Emerging Markets, Inclusive Business & Social Transformation",
    topics: [
      "Rural Markets",
      "Inclusive Innovation",
      "Social Entrepreneurship",
      "Digital Inclusion",
      "Emerging Economies",
      "Technology for Social Good",
    ],
  },
  {
    number: "14",
    title: "Healthcare, Education, Tourism & Service Innovation",
    topics: [
      "AI in Healthcare",
      "EdTech",
      "Service Innovation",
      "Digital Services",
      "Smart Tourism",
      "Customer Experience",
    ],
  },
];

const sectionLinks = [
  { href: "#about", label: "About" },
  { href: "#research-forum", label: "Research forum" },
  { href: "#themes", label: "Conference themes" },
];

function SectionEyebrow({ children, light = false }) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-violet-300" : "text-purple-700"
      }`}
    >
      {children}
    </p>
  );
}

export default function Samaroh2027Page() {
  return (
    <div id="conference-content" className="bg-[#fbf9fe] text-[#26183b]">
      <a
        href="#about"
        className="sr-only z-[100] rounded-md bg-white px-4 py-2 text-purple-800 shadow focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to conference information
      </a>

      <section className="relative isolate overflow-hidden bg-[#241039] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_22%,rgba(139,92,246,0.36),transparent_32%),radial-gradient(circle_at_76%_74%,rgba(196,181,253,0.2),transparent_28%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.38)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.38)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_right,black,transparent_76%)]"
        />

        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 pb-16 pt-16 sm:px-8 md:pb-20 md:pt-20 lg:grid-cols-[1.12fr_0.88fr] lg:px-12 lg:py-24">
          <div className="relative z-10 motion-safe:animate-fade-up">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-white/85 backdrop-blur-sm sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.8)]" />
              Siva Sivani Institute of Management
            </div>

            <p className="mt-6 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              Secunderabad, Hyderabad
              <span className="mx-2 text-violet-300" aria-hidden="true">/</span>
              In collaboration with the Association of Indian Management Schools (AIMS)
            </p>

            <p className="mt-10 text-xs font-bold uppercase tracking-[0.26em] text-violet-300">
              Presents · International Conference 2027
            </p>
            <h1 className="mt-3 font-playfair text-[clamp(3.25rem,9vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.055em] text-white">
              Samaroh<span className="text-violet-300">-2027</span>
            </h1>
            <p className="mt-8 max-w-3xl font-playfair text-xl leading-snug text-white/90 sm:text-2xl lg:text-[2rem]">
              “Reimagining Business and Management in the Age of AI: Innovation,
              Sustainability and Human-Centric Transformation”
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3.5 backdrop-blur-sm">
                <CalendarDays className="h-5 w-5 shrink-0 text-violet-300" aria-hidden="true" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/55">
                    Conference dates
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white sm:text-base">
                    11–12 February 2027
                  </p>
                </div>
              </div>
              <a
                href="#about"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-violet-300 px-5 py-3 text-sm font-bold text-[#241039] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#241039]"
              >
                Explore the conference
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[580px] motion-safe:animate-fade-up lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2rem] border border-violet-200/20" aria-hidden="true" />
            <div className="relative min-h-[370px] overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#35204a] shadow-2xl shadow-black/30 sm:min-h-[470px]">
              <Image
                src="/campus.webp"
                alt="Siva Sivani Institute of Management campus in Secunderabad, Hyderabad"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241039] via-[#241039]/25 to-[#241039]/5" />
              <div
                aria-hidden="true"
                className="absolute right-5 top-5 flex h-24 w-24 rotate-6 items-center justify-center rounded-full border border-white/25 bg-[#241039]/45 text-center font-playfair text-xl font-bold leading-none text-white backdrop-blur-md sm:right-8 sm:top-8 sm:h-28 sm:w-28 sm:text-2xl"
              >
                <span>2027<br /><span className="text-[0.55em] font-sans font-semibold uppercase tracking-[0.18em] text-violet-200">Samaroh</span></span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="mb-4 h-px w-14 bg-violet-300" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-200">
                  A meeting of ideas
                </p>
                <p className="mt-2 max-w-sm font-playfair text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Innovation with people at the centre.
                </p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-white/75">
                  <MapPin className="h-4 w-4 text-violet-300" aria-hidden="true" />
                  Secunderabad, Hyderabad
                </p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-4 h-20 w-20 rounded-full border border-violet-300/35 sm:-left-8 sm:h-28 sm:w-28"
            />
          </div>
        </div>

        <a
          href="#conference-navigation"
          aria-label="Continue to conference sections"
          className="mx-auto mb-6 flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
        >
          Discover Samaroh
          <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </section>

      <nav
        id="conference-navigation"
        aria-label="Conference sections"
        className="sticky top-0 z-30 border-b border-purple-100 bg-[#fbf9fe]/95 shadow-sm shadow-purple-950/[0.04] backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:px-12">
          <span className="mr-3 hidden shrink-0 font-playfair text-sm font-bold text-[#26183b] sm:block">
            SAMAROH-2027
          </span>
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full px-4 py-2 text-xs font-semibold text-slate-600 transition hover:bg-purple-50 hover:text-purple-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-700 sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <SectionEyebrow>Welcome to Samaroh-2027</SectionEyebrow>
            <h2 className="mt-4 max-w-3xl font-playfair text-4xl font-bold leading-tight tracking-tight text-[#26183b] sm:text-5xl">
              About the conference
            </h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              The International Conference brings together academicians,
              researchers, industry leaders, entrepreneurs, policymakers and
              emerging scholars to examine how Artificial Intelligence,
              emerging technologies, innovation and sustainability are
              transforming business, organizations and society.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              The conference seeks to advance contemporary management thought,
              rigorous research and evidence-based practice by creating a
              platform for interdisciplinary dialogue, knowledge exchange and
              academic–industry collaboration.
            </p>
          </div>

          <aside className="relative self-center rounded-2xl border border-[#e8e3da] bg-white p-6 shadow-[0_18px_55px_-38px_rgba(23,33,59,0.45)] sm:p-8">
            <div aria-hidden="true" className="absolute right-0 top-0 h-24 w-24 rounded-bl-[5rem] bg-violet-50" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-700">
                A platform for
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Academicians and researchers",
                  "Industry leaders and entrepreneurs",
                  "Policymakers and emerging scholars",
                ].map((audience, index) => (
                  <li key={audience} className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base">
                    <span className="mt-0.5 font-playfair text-lg font-bold text-purple-600" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-purple-700" aria-hidden="true" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      International Conference
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[#26183b] sm:text-base">
                      11–12 February 2027
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="research-forum"
        className="relative scroll-mt-24 overflow-hidden bg-[#321052] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
      >
        <div aria-hidden="true" className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/[0.07] sm:h-[30rem] sm:w-[30rem]" />
        <div aria-hidden="true" className="absolute -right-4 -top-4 h-48 w-48 rounded-full border border-violet-300/25 sm:h-72 sm:w-72" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
          <div>
            <SectionEyebrow light>Pre-conference research forum</SectionEyebrow>
            <div className="mt-6 flex items-end gap-4">
              <span className="font-playfair text-7xl font-bold leading-none text-white sm:text-8xl" aria-hidden="true">
                01
              </span>
              <div className="mb-1 border-l border-white/60 pl-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                  11 February 2027
                </p>
                <h2 className="mt-2 font-playfair text-3xl font-bold leading-tight sm:text-4xl">
                  Research Forum
                </h2>
              </div>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="font-playfair text-2xl font-semibold leading-snug text-white sm:text-3xl">
              “AI-Enabled Research Excellence: From Discovery to High-Impact Publication”
            </p>
            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              A focused research forum on AI-enabled research discovery,
              research design, advanced research tools, scholarly writing,
              research integrity, and strategies for developing high-quality
              research for reputed academic publications.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5" aria-label="Research forum topics">
              {[
                "Research discovery",
                "Research design",
                "Advanced research tools",
                "Scholarly writing",
                "Research integrity",
                "Academic publications",
              ].map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-xs font-medium text-white/80 sm:text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="themes" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionEyebrow>Explore the scope</SectionEyebrow>
              <h2 className="mt-4 font-playfair text-4xl font-bold leading-tight tracking-tight text-[#26183b] sm:text-5xl">
                Conference themes
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-base">
              Fourteen areas invite interdisciplinary perspectives on business,
              management, technology and society.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {themes.map((theme) => (
              <article
                key={theme.number}
                className="group relative overflow-hidden rounded-2xl border border-purple-100 bg-white p-5 shadow-[0_12px_35px_-30px_rgba(49,16,82,0.18)] transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-[0_20px_45px_-28px_rgba(74,29,110,0.28)] focus-within:ring-2 focus-within:ring-purple-700 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-playfair text-3xl font-bold leading-none text-purple-500 transition group-hover:text-purple-800">
                    {theme.number}
                  </span>
                  <span aria-hidden="true" className="mt-1 h-px w-10 bg-violet-300 transition-all group-hover:w-16 group-hover:bg-purple-500" />
                </div>
                <h3 className="mt-5 font-playfair text-xl font-bold leading-snug text-[#26183b] sm:text-[1.35rem]">
                  {theme.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {theme.topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-full bg-[#f5f3f8] px-2.5 py-1.5 text-[11px] leading-tight text-slate-600 sm:text-xs"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#4a1d6e] px-6 py-10 text-white shadow-xl shadow-purple-950/10 sm:px-10 sm:py-12 lg:px-14">
          <div aria-hidden="true" className="absolute -right-10 -top-24 h-64 w-64 rounded-full border border-white/10 sm:-right-4 sm:-top-32 sm:h-96 sm:w-96" />
          <div aria-hidden="true" className="absolute -right-20 -top-12 h-52 w-52 rounded-full border border-violet-200/30 sm:right-12 sm:-top-16 sm:h-72 sm:w-72" />
          <div className="relative flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-200">
                Samaroh-2027 · 11–12 February 2027
              </p>
              <h2 className="mt-4 max-w-2xl font-playfair text-3xl font-bold leading-tight sm:text-4xl">
                Reimagine business and management in the age of AI.
              </h2>
            </div>
            <a
              href="#themes"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-purple-900 transition hover:-translate-y-0.5 hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-900"
            >
              Explore the themes
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
