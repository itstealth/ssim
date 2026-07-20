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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const cn = (...classes) => classes.filter(Boolean).join(" ");
import { motion } from "framer-motion";
import { teamMembers } from "../../data/facultyData";

export default function Areas() {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [activeArea, setActiveArea] = useState("All");

  const uniqueAreas = ["All", ...Array.from(new Set(teamMembers.map((m) => m.area))).filter(Boolean)];

  const filteredMembers = activeArea === "All"
    ? teamMembers
    : teamMembers.filter((m) => m.area === activeArea);

  return (
    <>
      {/* <SEO
        title="Faculty Areas of Expertise"
        description="Explore the diverse areas of expertise of our distinguished faculty at Siva Sivani Institute of Management (SSIM). Meet our experts in Finance, HR, Marketing, and more."
        keywords="SSIM faculty, faculty expertise, business school professors, academic areas"
        canonicalUrl="https://ssim.ac.in/faculty/areas"
      /> */}
      <section className="w-full py-16">
        <div className="px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            {/* <Badge variant="outline" className="border-blue-500 text-blue-600">
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

          <div className="relative max-w-7xl mx-auto w-full mb-8 px-4">
            <div className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-20">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
                onClick={() => {
                  const container = document.querySelector(".filter-scroll");
                  if (container) container.scrollBy({ left: -200, behavior: "smooth" });
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-2 max-w-7xl mx-auto overflow-x-auto hide-scrollbar filter-scroll py-2"
            >
              {uniqueAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
                  className="flex-none first:ml-8 sm:first:ml-2 last:mr-8 sm:last:mr-2"
                >
                  <Button
                    variant={activeArea === area ? "default" : "outline"}
                    onClick={() => setActiveArea(area)}
                    className={cn(
                      "transition-all duration-200 hover:scale-105 whitespace-nowrap shadow-sm hover:shadow-md",
                      activeArea === area && "ring-2 ring-primary/20 bg-primary text-primary-foreground font-medium"
                    )}
                  >
                    {area}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <div className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-20">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
                onClick={() => {
                  const container = document.querySelector(".filter-scroll");
                  if (container) container.scrollBy({ left: 200, behavior: "smooth" });
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/faculty/details/${member.slug}`} className="block">
                  <Card
                    className={`group relative overflow-hidden bg-white/50 border-gray-200 backdrop-blur-sm transition-all duration-500
                      ${hoveredMember === index
                        ? "scale-105 shadow-2xl shadow-blue-500/20"
                        : "hover:shadow-xl"
                      }`}
                    onMouseEnter={() => setHoveredMember(index)}
                    onMouseLeave={() => setHoveredMember(null)}
                  >
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="relative">
                          <div
                            className="w-40 h-40 rounded-full overflow-hidden ring-2 ring-blue-500/50 ring-offset-4 ring-offset-white
                            transition-all duration-500 group-hover:ring-blue-500 group-hover:ring-offset-8"
                          >
                            <img
                              alt={member.name}
                              src={member.image || "/placeholder.svg"}
                              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div
                            className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1 text-sm text-gray-600 bg-white/90 
                           whitespace-nowrap px-3 py-1 rounded-full border border-gray-200"
                          >
                            <SchoolIcon className="w-4 h-4" />
                            <span>{member.qualification}</span>
                          </div>
                        </div>

                        <div className="flex-1 text-center md:text-left space-y-6">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {member.name}
                            </h3>
                            <p className="text-blue-600 font-medium inline-flex items-center gap-2">
                              {member.area}
                              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                              <Badge
                                className="flex items-center gap-1 text-sm text-gray-600 hover:bg-blue-100 bg-white/90 
                               whitespace-nowrap px-3 pb-1 rounded-full border border-gray-200"
                              >
                                <GraduationCapIcon className="w-4 h-4 mr-2" />
                                <span>{member.experience} years</span>
                              </Badge>
                            </p>
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
