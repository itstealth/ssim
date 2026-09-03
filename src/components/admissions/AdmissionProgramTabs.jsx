"use client";
import React, { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Admission program data - using existing static routes
const admissionPrograms = [
  {
    id: "pgdm-triple-specialisation",
    name: "PGDM Triple Specialisation",
    path: "/admissions/pgdm-triple-specialisation",
    category: "PGDM",
  },
  { id: "pgdm-bifs", name: "PGDM BIFS", path: "/admissions/pgdm-bifs", category: "PGDM" },
  { id: "pgdm-ba", name: "PGDM BA", path: "/admissions/pgdm-ba", category: "PGDM" },
  // FPM and EFPM routes
  { id: "fpm", name: "FPM", path: "/admissions/fpm-efpm", category: "FPM/EFPM" },
  { id: "efpm", name: "EFPM", path: "/admissions/efpm", category: "FPM/EFPM" },
  // Legacy support - if someone visits fpm-efpm, show FPM tab as active
  { id: "fpm-efpm", name: "FPM/EFPM", path: "/admissions/fpm-efpm", category: "FPM/EFPM", redirectTo: "fpm" },
];

const pgdmPrograms = admissionPrograms.filter((p) => p.category === "PGDM");
const fpmEfpmPrograms = admissionPrograms.filter((p) => p.category === "FPM/EFPM");

const AdmissionProgramTabs = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Determine current program from pathname
  const currentProgram = useMemo(() => {
    // Find matching program by exact path match first
    const exactMatch = admissionPrograms.find((p) => p.path === pathname);
    if (exactMatch && !exactMatch.redirectTo) {
      return exactMatch.id;
    }

    // Handle legacy fpm-efpm route - redirect to fpm
    if (exactMatch?.redirectTo) {
      return exactMatch.redirectTo;
    }

    // Extract program segment for fallback matching
    const pathSegments = pathname.split("/").filter(Boolean);
    const programSegment = pathSegments[pathSegments.length - 1];

    // Fallback: find by segment match (excluding redirect routes)
    const segmentMatch = admissionPrograms.find((p) => {
      const pathSeg = p.path.split("/").filter(Boolean).pop();
      return pathSeg === programSegment && !p.redirectTo;
    });

    return segmentMatch?.id || null;
  }, [pathname]);

  // Determine active category
  const activeCategory = useMemo(() => {
    const program = admissionPrograms.find((p) => p.id === currentProgram);
    return program?.category || "PGDM";
  }, [currentProgram]);

  // Handle program change
  const handleProgramChange = (programId) => {
    // Don't navigate if clicking the same active tab
    if (programId === currentProgram) {
      return;
    }

    const program = admissionPrograms.find((p) => p.id === programId);
    if (!program || program.redirectTo) return;

    // Navigate immediately - use startTransition for better performance
    router.push(program.path);
  };

  return (
    <div className="mb-8">
      <Tabs
        value={currentProgram || ""}
        onValueChange={handleProgramChange}
        className="w-full"
      >
        <AnimatePresence mode="wait">
          {/* PGDM Section - Only show when PGDM category is active */}
          {activeCategory === "PGDM" && (
            <motion.div
              key="pgdm-section"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="space-y-3"
            >
              <TabsList className="w-full flex flex-wrap text-[#293794] bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 justify-center gap-2 p-1 h-auto">
                {pgdmPrograms.map((program) => (
                  <TabsTrigger
                    key={program.id}
                    value={program.id}
                    className="flex-grow sm:flex-grow text-sm sm:text-base px-4 py-2 h-auto data-[state=active]:bg-mainBlue data-[state=active]:text-primary-foreground transition-all duration-200"
                  >
                    {program.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>
          )}

          {/* FPM/EFPM Section - Only show when FPM/EFPM category is active */}
          {activeCategory === "FPM/EFPM" && (
            <motion.div
              key="fpm-efpm-section"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="space-y-3"
            >
              <TabsList className="w-full flex flex-wrap text-[#293794] bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 justify-center gap-2 p-1 h-auto">
                {fpmEfpmPrograms.filter(p => !p.redirectTo).map((program) => (
                  <TabsTrigger
                    key={program.id}
                    value={program.id}
                    className="flex-grow sm:flex-grow text-sm sm:text-base px-4 py-2 h-auto data-[state=active]:bg-mainBlue data-[state=active]:text-primary-foreground transition-all duration-200"
                  >
                    {program.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>
          )}
        </AnimatePresence>
      </Tabs>
    </div>
  );
};

export default AdmissionProgramTabs;

