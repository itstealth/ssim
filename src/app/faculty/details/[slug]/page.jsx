"use client";

import { teamMembers } from "../../../../data/facultyData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, GraduationCap, Briefcase, Sparkles, Linkedin, Mail, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function FacultyDetail({ params }) {
  const { slug } = params;
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      {/* Top Navigation */}
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 py-8 md:py-12">
        <Link
          href="/faculty/areas"
          className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
        >
          <span className="p-1 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </span>
          Back to Faculty List
        </Link>
      </nav>

      <main className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-[38%] shrink-0 lg:sticky lg:top-12"
          >
            <div className="relative rounded-[1.75rem] overflow-hidden bg-gray-50 aspect-[4/5] ring-1 ring-gray-100">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
              />
              {/* subtle bottom gradient for grounding */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="w-full lg:w-[62%] pt-2 lg:pt-6"
          >
            <div className="flex items-center gap-4 mb-5">
              {/* Area pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                {member.department || member.area}
              </div>

              {member.linkedin && member.linkedin !== "NA" && (
                <a
                  href={member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-xs font-semibold tracking-wide uppercase"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  Connect
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-xs font-semibold tracking-wide uppercase"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email
                </a>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-gray-900 tracking-tight leading-[1.05] mb-2">
              {member.name}
            </h1>

            {member.designation && (
              <p className="text-xl text-gray-500 font-medium mb-10">
                {member.designation}
              </p>
            )}

            {/* Stats row */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-12 pb-12 border-b border-gray-100">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-lg bg-gray-50 text-gray-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Qualification
                  </p>
                  <p className="text-base font-medium text-gray-800">
                    {member.qualification}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-lg bg-gray-50 text-gray-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Experience
                  </p>
                  <p className="text-base font-medium text-gray-800">
                    {member.experience} Years
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {/* About */}
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
                  About
                </h3>
                <div className="leading-relaxed text-[1.05rem] text-gray-600 font-normal max-w-2xl space-y-4">
                  {member.description.split('\n').map((paragraph, index) => (
                    paragraph.trim() ? (
                      <p key={index}>{paragraph}</p>
                    ) : null
                  ))}
                </div>
              </div>

              {/* Professional Memberships */}
              {member.memberships && !['NA', 'NO', 'No', 'N/A'].includes(member.memberships.trim().toUpperCase()) && (
                <div>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Professional Memberships
                  </h3>
                  <div className="leading-relaxed text-[1.05rem] text-gray-600 font-normal max-w-2xl">
                    <p>{member.memberships}</p>
                  </div>
                </div>
              )}

              {/* Awards & Achievements */}
              {member.awards && !['NA', 'NO', 'No', 'N/A'].includes(member.awards.trim().toUpperCase()) && (
                <div>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Awards & Achievements
                  </h3>
                  <div className="leading-relaxed text-[1.05rem] text-gray-600 font-normal max-w-2xl space-y-4">
                    {member.awards.split('•').filter(Boolean).map((award, index) => (
                      <p key={index} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1.5">•</span>
                        <span>{award.trim()}</span>
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}