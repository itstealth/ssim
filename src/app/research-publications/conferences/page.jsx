"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

import {
  BookOpen,
  Calendar,
  CreditCard,
  FileText,
  GraduationCap,
  Menu,
  Trophy,
  Users,
  FormInput,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowDown, ArrowRight, CalendarDays, MapPin } from "lucide-react";
// import SEO from "../Seo";

// Navigation Data
const navigationSections = [
  { id: "highlights", label: "CONFERENCE HIGHLIGHTS", icon: Trophy },
  { id: "why-participate", label: "WHY PARTICIPATE?", icon: GraduationCap },
  { id: "participants", label: "WHO CAN PARTICIPATE?", icon: Users },
  { id: "important-dates", label: "IMPORTANT DATES", icon: Calendar },
  { id: "registration-fees", label: "REGISTRATION FEES", icon: CreditCard },
  { id: "publishing-opportunities", label: "PUBLICATION OPPORTUNITIES", icon: BookOpen },
  { id: "submission-guidelines", label: "SUBMISSION GUIDELINES", icon: FileText },
  { id: "online-registration", label: "ONLINE REGISTRATION", icon: FormInput },
];
const conferenceTitle = "Reimagining Business and Management in the Age of AI: Innovation, Sustainability and Human-Centric Transformation";
const registrationUrl = "https://forms.gle/8XdJyvfCbHW2yit69";
const conferenceThemes = [
  {
    number: "01",
    title: "Artificial Intelligence, GenAI & Agentic AI",
    topics: ["Generative AI", "Agentic AI", "Human–AI Collaboration", "Responsible AI", "AI-enabled Business Transformation"],
  },
  {
    number: "02",
    title: "Digital Transformation, Emerging Technologies & Industry 5.0",
    topics: ["Digital Transformation", "IoT", "Digital Twins", "Robotics", "Metaverse", "Smart Organizations", "Industry 5.0"],
  },
  {
    number: "03",
    title: "Marketing, Consumer Behaviour & Customer Experience",
    topics: ["AI Marketing", "Consumer Insights", "Branding", "Retail Innovation", "Omnichannel", "Customer Experience", "Digital Consumers"],
  },
  {
    number: "04",
    title: "Innovation, Entrepreneurship, Startups & Business Models",
    topics: ["Entrepreneurial Innovation", "Startups", "Business Model Innovation", "Digital Entrepreneurship", "Social Innovation", "Startup Ecosystems"],
  },
  {
    number: "05",
    title: "Sustainability, Circular Economy, ESG & Responsible Business",
    topics: ["Circular Economy", "ESG", "Sustainable Business Models", "Green Innovation", "Climate Action", "Responsible Business"],
  },
  {
    number: "06",
    title: "Finance, FinTech & Business Analytics",
    topics: ["AI in Finance", "FinTech", "Digital Finance", "Financial Analytics", "Sustainable Finance", "Risk Analytics"],
  },
  {
    number: "07",
    title: "Human Capital, Leadership, Organizational Behaviour & Future of Work",
    topics: ["AI-enabled HR", "Leadership", "People Analytics", "Employee Experience", "Future Skills", "Human–AI Collaboration"],
  },
  {
    number: "08",
    title: "Operations, Supply Chain, Logistics & Industry 5.0",
    topics: ["Intelligent Supply Chains", "Smart Operations", "Logistics Innovation", "Supply Chain Resilience", "Automation", "Sustainable Operations"],
  },
  {
    number: "09",
    title: "Strategy, Global Business & Organizational Transformation",
    topics: ["Strategic Transformation", "Global Business", "Competitive Advantage", "Organizational Agility", "Business Ecosystems", "Strategic Resilience"],
  },
  {
    number: "10",
    title: "Data Analytics, Business Intelligence & Decision Sciences",
    topics: ["Predictive Analytics", "Machine Learning", "Business Intelligence", "Decision Analytics", "Data-driven Strategy", "AI-enabled Decision Making"],
  },
  {
    number: "11",
    title: "Corporate Governance, Business Ethics, Policy & Responsible Management",
    topics: ["AI Governance", "Business Ethics", "Corporate Governance", "Data Privacy", "Responsible Innovation", "Policy & Regulation"],
  },
  {
    number: "12",
    title: "Management Education, Research & Future of Learning",
    topics: ["AI in Management Education", "GenAI-enabled Learning", "Research Innovation", "Future Skills", "Experiential Learning", "Academic Integrity"],
  },
  {
    number: "13",
    title: "Emerging Markets, Inclusive Business & Social Transformation",
    topics: ["Rural Markets", "Inclusive Innovation", "Social Entrepreneurship", "Digital Inclusion", "Emerging Economies", "Technology for Social Good"],
  },
  {
    number: "14",
    title: "Healthcare, Education, Tourism & Service Innovation",
    topics: ["AI in Healthcare", "EdTech", "Service Innovation", "Digital Services", "Smart Tourism", "Customer Experience"],
  },
];
// Navigation Component
const NavContent = ({ activeSection, setActiveSection, sections }) => (
  <div className="space-y-2">
    {sections.map((section) => {
      const Icon = section.icon;
      return (
        <motion.button
          key={section.id}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveSection(section.id)}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors
            ${
              activeSection === section.id
                ? "bg-mainBlue text-white"
                : "hover:bg-muted text-red-600"
            }`}
        >
          <Icon className="w-5 h-5" />
          <span className="font-medium">{section.label}</span>
        </motion.button>
      );
    })}
  </div>
);

// Sections migrated from the Samaroh-2027 page.
const ConferenceBanner2027 = () => (
  <section className="relative isolate overflow-hidden bg-[#241039] text-white">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_22%,rgba(139,92,246,0.36),transparent_32%),radial-gradient(circle_at_76%_74%,rgba(196,181,253,0.2),transparent_28%)]"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.38)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.38)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_right,black,transparent_76%)]"
    />

    <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-12 px-5 pb-16 pt-16 sm:px-8 md:pb-20 md:pt-20 lg:grid-cols-[1.12fr_0.88fr] lg:px-12 lg:py-24">
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
          “{conferenceTitle}”
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3.5 backdrop-blur-sm">
            <CalendarDays className="h-5 w-5 shrink-0 text-violet-300" aria-hidden="true" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/55">Conference dates</p>
              <p className="mt-0.5 text-sm font-semibold text-white sm:text-base">11–12 February 2027</p>
            </div>
          </div>
          <a
            href="#about-conference"
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
          <div aria-hidden="true" className="absolute right-5 top-5 flex h-24 w-24 rotate-6 items-center justify-center rounded-full border border-white/25 bg-[#241039]/45 text-center font-playfair text-xl font-bold leading-none text-white backdrop-blur-md sm:right-8 sm:top-8 sm:h-28 sm:w-28 sm:text-2xl">
            <span>2027<br /><span className="text-[0.55em] font-sans font-semibold uppercase tracking-[0.18em] text-violet-200">Samaroh</span></span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <div className="mb-4 h-px w-14 bg-violet-300" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-200">A meeting of ideas</p>
            <p className="mt-2 max-w-sm font-playfair text-2xl font-semibold leading-tight text-white sm:text-3xl">Innovation with people at the centre.</p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-white/75">
              <MapPin className="h-4 w-4 text-violet-300" aria-hidden="true" />
              Secunderabad, Hyderabad
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute -bottom-5 -left-4 h-20 w-20 rounded-full border border-violet-300/35 sm:-left-8 sm:h-28 sm:w-28" />
      </div>
    </div>

    <a href="#about-conference" aria-label="Continue to conference information" className="mx-auto mb-6 flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
      Discover Samaroh
      <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  </section>
);

const AboutConference2027 = () => (
  <section id="about-conference" className="scroll-mt-24 bg-[#fbf9fe] px-5 py-16 text-[#26183b] sm:px-8 sm:py-20 lg:px-12 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-700">Welcome to Samaroh-2027</p>
          <h2 className="mt-4 max-w-3xl font-playfair text-4xl font-bold leading-tight tracking-tight sm:text-5xl">About the conference</h2>
          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            The International Conference brings together academicians, researchers, industry leaders, entrepreneurs, policymakers and emerging scholars to examine how Artificial Intelligence, emerging technologies, innovation and sustainability are transforming business, organizations and society.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            The conference seeks to advance contemporary management thought, rigorous research and evidence-based practice by creating a platform for interdisciplinary dialogue, knowledge exchange and academic–industry collaboration.
          </p>
        </div>
        <aside className="relative self-center rounded-2xl border border-[#e8e3da] bg-white p-6 shadow-[0_18px_55px_-38px_rgba(23,33,59,0.45)] sm:p-8">
          <div aria-hidden="true" className="absolute right-0 top-0 h-24 w-24 rounded-bl-[5rem] bg-violet-50" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-700">A platform for</p>
            <ul className="mt-5 space-y-3">
              {["Academicians and researchers", "Industry leaders and entrepreneurs", "Policymakers and emerging scholars"].map((audience, index) => (
                <li key={audience} className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base">
                  <span className="mt-0.5 font-playfair text-lg font-bold text-purple-600" aria-hidden="true">0{index + 1}</span>
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 border-t border-slate-100 pt-5">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-purple-700" aria-hidden="true" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">International Conference</p>
                  <p className="mt-0.5 text-sm font-semibold text-[#26183b] sm:text-base">11–12 February 2027</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="mt-14">
        <div className="mb-5 flex items-center gap-3">
          <FormInput className="h-7 w-7 text-red-600" aria-hidden="true" />
          <h3 className="font-playfair text-3xl font-bold uppercase tracking-wide text-[#26183b]">Online Registration</h3>
        </div>
        <Card className="border-slate-200 bg-white">
          <CardContent className="p-6 sm:p-8">
            <OnlineRegistration2027 />
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const PreConferenceResearchForum2027 = () => {
  const topics = [
    "Research discovery",
    "Research design",
    "Advanced research tools",
    "Scholarly writing",
    "Research integrity",
    "Academic publications",
  ];

  return (
    <section id="research-forum" className="relative scroll-mt-24 overflow-hidden bg-[#321052] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12">
      <div aria-hidden="true" className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/[0.07] sm:h-[30rem] sm:w-[30rem]" />
      <div aria-hidden="true" className="absolute -right-4 -top-4 h-48 w-48 rounded-full border border-violet-300/25 sm:h-72 sm:w-72" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Pre-conference research forum</p>
          <div className="mt-6 flex items-end gap-4">
            <span className="font-playfair text-7xl font-bold leading-none text-white sm:text-8xl" aria-hidden="true">01</span>
            <div className="mb-1 border-l border-white/60 pl-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">11 February 2027</p>
              <h2 className="mt-2 font-playfair text-3xl font-bold leading-tight sm:text-4xl">Research Forum</h2>
            </div>
          </div>
        </div>
        <div className="max-w-3xl">
          <p className="font-playfair text-2xl font-semibold leading-snug text-white sm:text-3xl">
            “AI-Enabled Research Excellence: From Discovery to High-Impact Publication”
          </p>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
            A focused research forum on AI-enabled research discovery, research design, advanced research tools, scholarly writing, research integrity, and strategies for developing high-quality research for reputed academic publications.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5" aria-label="Research forum topics">
            {topics.map((topic) => (
              <span key={topic} className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-xs font-medium text-white/80 sm:text-sm">{topic}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ConferenceThemes2027 = () => {
  return (
    <section id="themes" className="scroll-mt-24 bg-[#fbf9fe] px-5 py-20 text-[#26183b] sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-700">Explore the scope</p>
            <h2 className="mt-4 font-playfair text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Conference themes</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-base">Fourteen areas invite interdisciplinary perspectives on business, management, technology and society.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {conferenceThemes.map((theme) => (
            <article key={theme.number} className="group relative overflow-hidden rounded-2xl border border-purple-100 bg-white p-5 shadow-[0_12px_35px_-30px_rgba(49,16,82,0.18)] transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-[0_20px_45px_-28px_rgba(74,29,110,0.28)] focus-within:ring-2 focus-within:ring-purple-700 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="font-playfair text-3xl font-bold leading-none text-purple-500 transition group-hover:text-purple-800">{theme.number}</span>
                <span aria-hidden="true" className="mt-1 h-px w-10 bg-violet-300 transition-all group-hover:w-16 group-hover:bg-purple-500" />
              </div>
              <h3 className="mt-5 font-playfair text-xl font-bold leading-snug text-[#26183b] sm:text-[1.35rem]">{theme.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {theme.topics.map((topic) => (
                  <li key={topic} className="rounded-full bg-[#f5f3f8] px-2.5 py-1.5 text-[11px] leading-tight text-slate-600 sm:text-xs">{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const SamarohClosingBanner2027 = () => (
  <section className="bg-[#fbf9fe] px-5 pb-20 text-white sm:px-8 sm:pb-24 lg:px-12">
    <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#4a1d6e] px-6 py-10 shadow-xl shadow-purple-950/10 sm:px-10 sm:py-12 lg:px-14">
      <div aria-hidden="true" className="absolute -right-10 -top-24 h-64 w-64 rounded-full border border-white/10 sm:-right-4 sm:-top-32 sm:h-96 sm:w-96" />
      <div aria-hidden="true" className="absolute -right-20 -top-12 h-52 w-52 rounded-full border border-violet-200/30 sm:right-12 sm:-top-16 sm:h-72 sm:w-72" />
      <div className="relative flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-200">Samaroh-2027 · 11–12 February 2027</p>
          <h2 className="mt-4 max-w-2xl font-playfair text-3xl font-bold leading-tight sm:text-4xl">Reimagine business and management in the age of AI.</h2>
        </div>
        <a href="#themes" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-purple-900 transition hover:-translate-y-0.5 hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-900">
          Explore the themes
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

const ConferenceHighlights2027 = () => {
  const highlights = [
    ["International Research Platform", "Engage with researchers, academicians, practitioners, and institutions from India and abroad."],
    ["Research Excellence", "Take part in rigorous scholarly exchange across contemporary management and social-science domains."],
    ["AI-Enabled Research Forum", "Explore AI tools, research methodology, and approaches to high-impact publication."],
    ["Publication Opportunities", "Selected papers may be considered for publication, subject to peer review and journal policies."],
    ["Academic-Industry Interface", "Connect academic research with managerial practice and policy perspectives."],
    ["Networking & Collaboration", "Build research collaborations, institutional partnerships, and interdisciplinary connections."],
    ["Future Research Agenda", "Identify emerging research questions, methods, and new directions in management scholarship."],
  ];
  return <div className="space-y-5"><h3 className="font-bold text-mainBlue text-2xl">Conference Highlights</h3><div className="grid gap-4 md:grid-cols-2">{highlights.map(([title, description]) => <Card key={title} className="border-purple-100 bg-purple-50/60"><CardHeader className="pb-2"><CardTitle className="text-lg text-mainBlue">{title}</CardTitle></CardHeader><CardContent className="text-gray-700">{description}</CardContent></Card>)}</div></div>;
};

const WhyParticipate2027 = () => {
  const items = [["Research", "Present your work and receive feedback on contemporary research."], ["Learn", "Explore emerging AI tools, technologies, and research methodologies."], ["Publish", "Learn about potential publication pathways for selected papers."], ["Connect", "Build national and international academic and industry networks."], ["Collaborate", "Find opportunities for joint research, projects, and institutional partnerships."]];
  return <div className="space-y-5"><h3 className="font-bold text-mainBlue text-2xl">Why Participate?</h3><div className="grid gap-4 sm:grid-cols-2">{items.map(([title, body]) => <div key={title} className="rounded-lg border bg-white p-4 shadow-sm"><h4 className="font-bold text-red-600">{title}</h4><p className="mt-1 text-gray-700">{body}</p></div>)}</div></div>;
};

const WhoCanParticipate2027 = () => {
  const participants = ["Academicians", "Researchers", "Doctoral Scholars", "Research Fellows", "Industry Professionals", "Corporate Leaders", "Entrepreneurs", "Start-up Founders", "Policymakers", "Management Students", "International Researchers", "Research Institutions"];
  return <div className="space-y-5"><h3 className="font-bold text-mainBlue text-2xl">Who Can Participate?</h3><p className="text-gray-700">The conference welcomes contributions and participation from:</p><ul className="grid list-disc gap-x-8 gap-y-2 pl-6 text-gray-700 sm:grid-cols-2">{participants.map((person) => <li key={person}>{person}</li>)}</ul></div>;
};

const ImportantDates2027 = () => {
  const dates = [["Submission of extended abstracts/full papers starts", "20 October 2026"], ["Last date to submit extended abstracts", "31 December 2026"], ["Notification of acceptance of extended abstracts/full papers", "5 January 2027"], ["Last date to submit full papers", "15 January 2027"], ["Last date for registration", "5 February 2027"], ["Pre-conference research forum", "11 February 2027"], ["International conference", "11-12 February 2027"]];
  return <div className="space-y-4"><h3 className="font-bold text-mainBlue text-2xl">Important Dates</h3><Table className="border border-gray-300 bg-purple-50"><TableHeader><TableRow><TableHead>Milestone</TableHead><TableHead>Date</TableHead></TableRow></TableHeader><TableBody>{dates.map(([event, date]) => <TableRow key={event}><TableCell>{event}</TableCell><TableCell>{date}</TableCell></TableRow>)}</TableBody></Table></div>;
};

const RegistrationFees2027 = () => {
  const fees = [["Corporate Delegates", "INR 2,800", "INR 3,000"], ["Academicians", "INR 1,800", "INR 2,000"], ["Students / Research Scholars", "INR 800", "INR 1,000"], ["Foreign Participants", "USD 40", "USD 50"]];
  return <div className="space-y-4"><h3 className="font-bold text-mainBlue text-2xl">Registration Fees</h3><Table className="border border-gray-300 bg-purple-50"><TableHeader><TableRow><TableHead>Category</TableHead><TableHead>Early-bird fee</TableHead><TableHead>Registration fee</TableHead></TableRow></TableHeader><TableBody>{fees.map(([category, early, standard]) => <TableRow key={category}><TableCell>{category}</TableCell><TableCell>{early}</TableCell><TableCell>{standard}</TableCell></TableRow>)}</TableBody></Table></div>;
};

const PublishingOpportunities2027 = () => (
  <div className="space-y-4 text-gray-700">
    <h3 className="font-bold text-mainBlue text-2xl">Publication Opportunities</h3>
    <p>Selected high-quality papers may be considered for publication in reputed Scopus- and ABDC-indexed journals, subject to peer review, editorial evaluation, journal scope, and each journal's publication policies.</p>
    <p>Possible publication pathway:</p>
    <ol className="grid list-decimal gap-2 pl-6 sm:grid-cols-2"><li>Research submission</li><li>Peer review</li><li>Conference presentation</li><li>Paper development and revision</li><li>Journal consideration or submission</li></ol>
    <p>This publication pathway is consistent with practices at established management research conferences, where selected papers may be developed for journal publication or proceedings following peer review. Publication is subject to the respective journal's peer-review and editorial decision and is not guaranteed solely by conference participation.</p>
  </div>
);

const SubmissionGuidelines2027 = () => {
  const rules = ["The conference accepts extended abstracts and full papers.", "Extended abstracts must be 700-1,000 words, including references.", "Full papers must not exceed 6,000 words, including references.", "Both submissions must include a 100-200 word abstract and 4-5 keywords.", "The full paper must include a title page with the paper title, author names, affiliations, and corresponding author's email address.", "Use double spacing, one-inch margins, Times New Roman 12-point font, and consecutive page numbers.", "Submit the paper as a Word document (.docx or .doc) or PDF (.pdf). Name the file using the submission ID.", "Use APA (American Psychological Association) 7th edition referencing style.", "Submissions must be in English. Submissions that do not follow the guidelines will not be considered."];
  return <div className="space-y-4"><h3 className="font-bold text-mainBlue text-2xl">Guidelines for Authors</h3><ul className="list-disc space-y-2 pl-6 text-gray-700">{rules.map((rule) => <li key={rule}>{rule}</li>)}</ul><p className="text-gray-700">For enquiries, email <a className="font-semibold text-red-600" href="mailto:icbmt2027@ssim.ac.in">icbmt2027@ssim.ac.in</a>.</p></div>;
};

const OnlineRegistration2027 = () => (
  <div className="space-y-5">
    <h3 className="font-bold text-mainBlue text-2xl">Register for the Conference</h3>
    <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_280px]">
      <div className="space-y-4">
        <p className="text-gray-700">Register for the international conference on 11-12 February 2027. The registration deadline is 5 February 2027.</p>
        <a href={registrationUrl} target="_blank" rel="noopener noreferrer">
          <Button className="bg-mainBlue text-white hover:bg-mainBlue/90">Open Registration Form <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </a>
        <p className="text-gray-700">Conference email: <a className="font-semibold text-red-600" href="mailto:icbmt2027@ssim.ac.in">icbmt2027@ssim.ac.in</a></p>
        <p className="text-gray-700">Conference website: <a className="font-semibold text-red-600" href="https://ssim.ac.in">ssim.ac.in</a></p>
      </div>
      <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="mx-auto block rounded-xl border bg-white p-3 shadow-sm" aria-label="Open conference registration form from QR code">
        <Image src="/faculty-research/conferences/registration-qr.png" alt="Scan the QR code to open the conference registration form" width={260} height={260} className="h-auto w-56 md:w-64" priority />
      </a>
    </div>
    <p className="text-sm leading-7 text-gray-600"><strong>Conference information:</strong> Call for Papers | Paper Submission | Registration | Keynote Sessions | Research Presentations | Panel Discussions | Publication Opportunities | Networking</p>
  </div>
);

const Conferences = () => {
  const [activeSection, setActiveSection] = useState("highlights");

  return (
    <>
      <ConferenceBanner2027 />
      <AboutConference2027 />
      <PreConferenceResearchForum2027 />
      <ConferenceThemes2027 />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 sm:py-16">
        {/* Main Content */}
        <div className="container max-w-7xl mx-auto px-4 py-8 sm:pb-0">
          <h2 className="mb-8 font-playfair text-3xl font-bold text-mainBlue sm:text-4xl">
            Conference information
          </h2>
          <div className="lg:grid lg:grid-cols-[350px_1fr] gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block sticky top-8 h-fit">
              <Card>
                <CardHeader>
                  {/* <CardTitle>Navigation</CardTitle>
                  <CardDescription>
                    Explore our navigation
                  </CardDescription> */}
                </CardHeader>
                <CardContent>
                  <NavContent
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    sections={navigationSections}
                  />
                </CardContent>
              </Card>
            </aside>

            {/* Mobile Navigation */}
            <div className="lg:hidden mb-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    <Menu className="w-4 h-4" />
                    <span>Navigation Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="py-4">
                    <NavContent
                      activeSection={activeSection}
                      setActiveSection={setActiveSection}
                      sections={navigationSections}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Content Area */}
            <main>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Section Title */}
                  <div className="flex items-center gap-3 mb-6">
                    {navigationSections.find((s) => s.id === activeSection)
                      ?.icon &&
                      React.createElement(
                        navigationSections.find((s) => s.id === activeSection)
                          ?.icon,
                        { className: "w-8 h-8 text-red-600" }
                      )}
                    <h2 className="text-3xl text-mainBlue font-bold">
                      {
                        navigationSections.find((s) => s.id === activeSection)
                          ?.label
                      }
                    </h2>
                  </div>

                  {/* Section Content */}
                  <Card className="border">
                    <CardContent className="p-6">
                      {(() => {
                        switch (activeSection) {
                          case "highlights": return <ConferenceHighlights2027 />;
                          case "why-participate": return <WhyParticipate2027 />;
                          case "participants": return <WhoCanParticipate2027 />;
                          case "important-dates": return <ImportantDates2027 />;
                          case "registration-fees": return <RegistrationFees2027 />;
                          case "publishing-opportunities": return <PublishingOpportunities2027 />;
                          case "submission-guidelines": return <SubmissionGuidelines2027 />;
                          case "online-registration": return <OnlineRegistration2027 />;
                          default:
                            return null;
                        }
                      })()}
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
        {/* <TeamSection /> */}
        {/* <Tourists /> */}
      </div>
      <SamarohClosingBanner2027 />
    </>
  );
};

export default Conferences;
