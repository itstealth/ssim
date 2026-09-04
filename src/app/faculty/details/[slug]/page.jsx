"use client";

import { teamMembers } from "../../../../data/facultyData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Source_Serif_4 } from "next/font/google";
import {
  ChevronLeft,
  GraduationCap,
  Briefcase,
  Landmark,
  Sparkles,
  Linkedin,
  Mail,
  Award,
  Users,
  BookOpen,
  IdCard,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

/* ---------------------------------------------------------------- */
/* Shared motion presets                                             */
/* ---------------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

/* ---------------------------------------------------------------- */
/* Shared helpers                                                     */
/* ---------------------------------------------------------------- */

function SectionLabel({ id, eyebrow }) {
  return (
    <div id={id} className="flex items-center gap-3 mb-7 scroll-mt-28">
      <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-gray-400 uppercase">
        {eyebrow}
      </span>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

function isEmptyField(value) {
  if (!value) return true;
  return ["NA", "NO", "N/A"].includes(String(value).trim().toUpperCase());
}

function splitList(value) {
  return value
    .split(/[•\n]/)
    .map((v) => v.trim())
    .filter(Boolean);
}

function normalizedLink(url) {
  if (!url) return "#";
  return url.startsWith("http") ? url : `https://${url}`;
}

/* ---------------------------------------------------------------- */
/* Quick navigation — jump straight to any section                  */
/* ---------------------------------------------------------------- */

function FacultyQuickNav({ items }) {
  if (items.length === 0) return null;
  return (
    <nav
      aria-label="Section navigation"
      className="sticky top-0 z-20 px-6 lg:px-8 bg-white/85 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto flex items-center gap-1 overflow-x-auto py-3">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="shrink-0 px-3.5 py-1.5 rounded-full text-[0.8rem] font-medium text-gray-500 hover:text-purple-600 hover:bg-purple-50 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ---------------------------------------------------------------- */
/* Hero — clean, light, restrained                                   */
/* ---------------------------------------------------------------- */

function FacultyHero({ member }) {
  const deptLabel = member.department || member.area;

  return (
    <section className="grid lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] gap-10 lg:gap-16 items-center py-10 lg:py-16">
      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-xs mx-auto lg:mx-0 w-full"
      >
        <div className="rounded-[1.5rem] overflow-hidden aspect-[4/5] ring-1 ring-gray-100 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.22)]">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        </div>

      </motion.div>

      {/* Identity */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        {!isEmptyField(deptLabel) && (
          <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.16em] text-purple-600 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            {deptLabel}
          </span>
        )}

        <h1 className={`${serif.className} text-4xl md:text-[3.2rem] font-medium text-gray-900 tracking-tight leading-[1.05] mb-3`}>
          {member.name}
        </h1>

        {!isEmptyField(member.designation) && (
          <p className="text-lg text-gray-500 font-medium mb-6">{member.designation}</p>
        )}

        {!isEmptyField(member.shortDescription) && (
          <p className="text-[1.05rem] text-gray-600 leading-relaxed max-w-xl mb-8">
            {member.shortDescription}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3">
          {!isEmptyField(member.linkedin) && (
            <a
              href={normalizedLink(member.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-purple-600 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white text-gray-700 ring-1 ring-gray-200 px-5 py-2.5 text-sm font-medium hover:border-purple-200 hover:text-purple-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Information Dashboard — one independent card per field            */
/* ---------------------------------------------------------------- */

function DashboardCard({ icon: Icon, label, value, href, external }) {
  const content = (
    <>
      <div className="flex items-center justify-between mb-3.5">
        <div className="p-2 rounded-lg bg-gray-50 text-gray-500 ring-1 ring-gray-100 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
          <Icon className="w-4 h-4" />
        </div>
        {href && (
          <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-purple-600 transition-colors" />
        )}
      </div>
      <p className="text-[0.62rem] font-semibold tracking-[0.14em] text-gray-400 uppercase mb-1">
        {label}
      </p>
      <p className="text-[0.95rem] font-semibold text-gray-900 leading-snug break-words">
        {value}
      </p>
    </>
  );

  const cardClass =
    "group rounded-xl bg-white ring-1 ring-gray-100 p-4 transition-colors duration-200 hover:ring-purple-200 hover:bg-purple-50/30";

  if (href) {
    return (
      <motion.a
        variants={fadeUp}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cardClass}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div variants={fadeUp} className={cardClass}>
      {content}
    </motion.div>
  );
}

function FacultyDashboard({ member, id }) {
  const cards = [
    { icon: GraduationCap, label: "Qualification", value: member.qualification },
    { icon: Briefcase, label: "Experience", value: `${member.experience} Years` },
    { icon: Landmark, label: "Department", value: member.department || member.area },
    { icon: BookOpen, label: "Area of Expertise", value: member.area },
    { icon: IdCard, label: "Designation", value: member.designation },
    {
      icon: Mail,
      label: "Email",
      value: member.email,
      href: member.email ? `mailto:${member.email}` : null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "View Profile",
      href: !isEmptyField(member.linkedin) ? normalizedLink(member.linkedin) : null,
      external: true,
    },
  ].filter((c) => !isEmptyField(c.value));

  return (
    <motion.section
      id={id}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="pb-14 scroll-mt-28"
    >
      <SectionLabel eyebrow="At a Glance" />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {cards.map((c) => (
          <DashboardCard key={c.label} {...c} />
        ))}
      </div>
    </motion.section>
  );
}

/* ---------------------------------------------------------------- */
/* Sticky summary sidebar (desktop)                                  */
/* ---------------------------------------------------------------- */

function FacultySummarySidebar({ member }) {
  const rows = [
    { icon: GraduationCap, label: "Qualification", value: member.qualification },
    { icon: Briefcase, label: "Experience", value: `${member.experience} Years` },
    { icon: Landmark, label: "Department", value: member.department || member.area },
  ].filter((r) => !isEmptyField(r.value));

  return (
    <div className="hidden lg:block lg:sticky lg:top-24">
      <div className="rounded-2xl bg-white ring-1 ring-gray-100 overflow-hidden">
        <div className="relative aspect-[16/12] overflow-hidden">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="p-5">
          <p className={`${serif.className} text-gray-900 text-base font-medium leading-tight`}>
            {member.name}
          </p>
          {!isEmptyField(member.designation) && (
            <p className="text-gray-500 text-xs font-medium mt-0.5 mb-4">{member.designation}</p>
          )}

          <div className="space-y-3.5 pt-4 border-t border-gray-100">
            {rows.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-2.5">
                <Icon className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="text-[0.6rem] font-semibold text-gray-400 uppercase tracking-widest">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-gray-800 truncate">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col gap-2">
            {!isEmptyField(member.linkedin) && (
              <a
                href={normalizedLink(member.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-purple-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Connect
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-gray-700 ring-1 ring-gray-200 px-4 py-2.5 text-sm font-medium hover:border-purple-200 hover:text-purple-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Quick Contact
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Biography                                                          */
/* ---------------------------------------------------------------- */

function FacultyBiography({ member, id }) {
  if (isEmptyField(member.description)) return null;
  const paragraphs = member.description.split("\n").map((p) => p.trim()).filter(Boolean);

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-14"
    >
      <SectionLabel id={id} eyebrow="Biography" />
      <div className="max-w-2xl space-y-5">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`leading-[1.8] text-[1.02rem] text-gray-600 ${serif.className}`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </motion.section>
  );
}

/* ---------------------------------------------------------------- */
/* Awards — redesigned: clean plaque cards, single accent, no clutter*/
/* ---------------------------------------------------------------- */

function FacultyAwards({ awards, id }) {
  if (isEmptyField(awards)) return null;
  const items = splitList(awards);

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-14"
    >
      <SectionLabel id={id} eyebrow="Awards & Achievements" />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 gap-3"
      >
        {items.map((award, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="group relative rounded-xl bg-white ring-1 ring-gray-100 p-5 transition-all duration-200 hover:ring-purple-200 hover:shadow-[0_12px_28px_-16px_rgba(37,99,235,0.22)]"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-purple-600 ring-1 ring-purple-100 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Award className="w-4 h-4" />
            </div>
            <p className="text-[0.95rem] font-semibold text-gray-900 leading-snug">{award}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

/* ---------------------------------------------------------------- */
/* Memberships                                                        */
/* ---------------------------------------------------------------- */

function FacultyMemberships({ memberships, id }) {
  if (isEmptyField(memberships)) return null;
  const items = splitList(memberships.includes(",") ? memberships.replace(/,/g, "•") : memberships);

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-14"
    >
      <SectionLabel id={id} eyebrow="Professional Memberships" />
      <div className="flex flex-wrap gap-2.5">
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1.5 rounded-full bg-white text-gray-700 ring-1 ring-gray-200 px-3.5 py-1.5 text-sm font-medium hover:ring-purple-200 hover:text-purple-600 transition-colors"
          >
            <Users className="w-3.5 h-3.5 text-gray-400" />
            {item}
          </span>
        ))}
      </div>
    </motion.section>
  );
}

/* ---------------------------------------------------------------- */
/* Contact card (mobile — desktop uses sticky sidebar instead)       */
/* ---------------------------------------------------------------- */

function FacultyContact({ member, id }) {
  const rows = [
    { icon: Landmark, label: "Department", value: member.department || member.area },
    { icon: Sparkles, label: "Area of Expertise", value: member.area },
  ].filter((r) => !isEmptyField(r.value));

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="lg:hidden"
    >
      <SectionLabel id={id} eyebrow="Contact" />
      <div className="rounded-2xl bg-white ring-1 ring-gray-100 p-5 space-y-5">
        {rows.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3">
            <Icon className="w-4 h-4 text-gray-400 mt-0.5" />
            <div className="flex flex-col gap-0.5">
              <p className="text-[0.65rem] font-semibold text-gray-400 uppercase tracking-widest">
                {label}
              </p>
              <p className="text-sm font-medium text-gray-800">{value}</p>
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-2.5 pt-2">
          {!isEmptyField(member.linkedin) && (
            <a
              href={normalizedLink(member.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-purple-600 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-gray-700 ring-1 ring-gray-200 px-4 py-2.5 text-sm font-medium hover:border-purple-200 hover:text-purple-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send an Email
            </a>
          )}
        </div>
      </div>
    </motion.section>
  );
}

/* ---------------------------------------------------------------- */
/* Page                                                                */
/* ---------------------------------------------------------------- */

export default function FacultyDetail({ params }) {
  const { slug } = params;
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  const navItems = [
    { id: "dashboard", label: "Overview" },
    !isEmptyField(member.description) && { id: "biography", label: "Biography" },
    !isEmptyField(member.awards) && { id: "awards", label: "Awards" },
    !isEmptyField(member.memberships) && { id: "memberships", label: "Memberships" },
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100 scroll-smooth">
      {/* Top Navigation */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-8">
        <Link
          href="/faculty"
          className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors"
        >
          <span className="p-1 rounded-full bg-gray-50 group-hover:bg-purple-50 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </span>
          Back to Faculty List
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FacultyHero member={member} />
      </div>

      <FacultyQuickNav items={navItems} />

      <main className="max-w-6xl mx-auto px-6 lg:px-8 pt-10 pb-28">
        <FacultyDashboard member={member} id="dashboard" />

        <div className="grid lg:grid-cols-[28%_72%] gap-12 lg:gap-16 items-start">
          <FacultySummarySidebar member={member} />

          <div className="w-full">
            <FacultyBiography member={member} id="biography" />
            <FacultyAwards awards={member.awards} id="awards" />
            <FacultyMemberships memberships={member.memberships} id="memberships" />
            <FacultyContact member={member} id="contact" />
          </div>
        </div>
      </main>
    </div>
  );
}