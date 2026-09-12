"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import SEO from "@/components/Seo";
import Link from "next/link";
import {
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
  ExternalLinkIcon,
  SchoolIcon,
  GraduationCapIcon,
} from "lucide-react";

const cn = (...classes) => classes.filter(Boolean).join(" ");
import { motion } from "framer-motion";
import { teamMembers } from "../../../data/facultyData";

const PROGRAM_ORDER = ["PGDM", "PGDM - BIFS", "PGDM - BA"];

/**
 * One filter row: a label and a wrapping set of pills. Program and area both
 * use this so the two rows stay visually identical.
 */
function FilterRow({ label, options, active, onSelect }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-baseline sm:gap-4">
      <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:w-40 sm:text-right">
        {label}
      </span>
      <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
        {options.map((option) => {
          const isActive = active === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                isActive
                  ? "border-primary bg-primary font-medium text-primary-foreground"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Areas() {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [activeArea, setActiveArea] = useState("All");
  const [activeProgram, setActiveProgram] = useState("All");

  const uniquePrograms = [
    "All",
    ...PROGRAM_ORDER.filter((p) =>
      teamMembers.some((m) => (m.programs || []).includes(p))
    ),
    ...Array.from(new Set(teamMembers.flatMap((m) => m.programs || [])))
      .filter(Boolean)
      .filter((p) => !PROGRAM_ORDER.includes(p)),
  ];

  // Areas are derived from the current program so the area row never offers a
  // combination that would come back empty.
  const membersInProgram =
    activeProgram === "All"
      ? teamMembers
      : teamMembers.filter((m) => (m.programs || []).includes(activeProgram));

  const uniqueAreas = ["All", ...Array.from(new Set(membersInProgram.map((m) => m.area))).filter(Boolean)];

  const filteredMembers = activeArea === "All"
    ? membersInProgram
    : membersInProgram.filter((m) => m.area === activeArea);

  const isFiltered = activeProgram !== "All" || activeArea !== "All";

  const clearFilters = () => {
    setActiveProgram("All");
    setActiveArea("All");
  };

  const handleProgramChange = (program) => {
    setActiveProgram(program);
    // The previously selected area may not exist inside the new program.
    if (activeArea !== "All") {
      const stillAvailable = teamMembers.some(
        (m) =>
          m.area === activeArea &&
          (program === "All" || (m.programs || []).includes(program))
      );
      if (!stillAvailable) setActiveArea("All");
    }
  };

  return (
    <>
      {/* <SEO
        title="Faculty Areas of Expertise"
        description="Explore the diverse areas of expertise of our distinguished faculty at Siva Sivani Institute of Management (SSIM). Meet our experts in Finance, HR, Marketing, and more."
        keywords="SSIM faculty, faculty expertise, business school professors, academic areas"
        canonicalUrl="https://ssim.ac.in/faculty/areas"
      /> */}
      <section className="w-full py-12">
        <div className="px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-10"
          >
            {/* <Badge variant="outline" className="border-purple-500 text-purple-600">
              Our Amazing Team
            </Badge> */}
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gray-900">
              Faculty Areas of Expertise
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet our distinguished faculty members and their specialized
              domains of knowledge and research
            </p>
          </motion.div>

          {/* Filters. Program and area use one shared pill pattern and one
              shared container width so the two rows read as a single control.
              Both wrap rather than scroll - there are few enough options that
              the old arrow carousel only ever rendered dead buttons. */}
          <div className="max-w-5xl mx-auto w-full space-y-5">
            <FilterRow
              label="Program"
              options={uniquePrograms}
              active={activeProgram}
              onSelect={handleProgramChange}
            />
            <FilterRow
              label="Area of expertise"
              options={uniqueAreas}
              active={activeArea}
              onSelect={setActiveArea}
            />
          </div>

          {isFiltered && (
            <p className="text-center text-sm text-gray-500 mt-6">
              Showing {filteredMembers.length} of {teamMembers.length} faculty members
              {" · "}
              <button
                type="button"
                onClick={clearFilters}
                className="underline underline-offset-2 hover:text-gray-900"
              >
                Clear filters
              </button>
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/faculty/details/${member.slug}`} className="block">
                  <Card
                    className={`group relative overflow-hidden bg-white/50 border-gray-200 backdrop-blur-sm transition-all duration-500
                      ${hoveredMember === index
                        ? "scale-105 shadow-2xl shadow-purple-500/20"
                        : "hover:shadow-xl"
                      }`}
                    onMouseEnter={() => setHoveredMember(index)}
                    onMouseLeave={() => setHoveredMember(null)}
                  >
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="relative shrink-0">
                          <div
                            className="w-36 h-44 rounded-2xl overflow-hidden ring-2 ring-purple-500/50 ring-offset-4 ring-offset-white
                            transition-all duration-500 group-hover:ring-purple-500 group-hover:ring-offset-8 shadow-md"
                          >
                            <img
                              alt={member.name}
                              src={member.image || "/placeholder.svg"}
                              className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div
                            className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 text-xs font-medium text-gray-700 bg-white/95 
                           whitespace-nowrap px-3 py-1 rounded-full border border-gray-200 shadow-sm z-10"
                          >
                            <SchoolIcon className="w-3.5 h-3.5 text-purple-600" />
                            <span>{member.qualification}</span>
                          </div>
                        </div>

                        <div className="flex-1 text-center md:text-left space-y-6">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                              {member.name}
                            </h3>
                            {/* A div, not a p: the Badge below renders a div,
                                which is invalid inside a p and caused a React
                                hydration error. */}
                            <div className="text-purple-600 font-medium inline-flex items-center gap-2">
                              {member.area}
                              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                              <Badge
                                className="flex items-center gap-1 text-sm text-gray-600 hover:bg-purple-100 bg-white/90 
                               whitespace-nowrap px-3 pb-1 rounded-full border border-gray-200"
                              >
                                <GraduationCapIcon className="w-4 h-4 mr-2" />
                                <span>{member.experience} years</span>
                              </Badge>
                            </div>
                          </div>

                          <p className="text-gray-600 text-sm leading-relaxed">
                            {member.shortDescription || member.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
