"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  Menu,
  Clock,
  BookOpen,
  MapPin,
  GraduationCap,
  Briefcase,
  FlaskRoundIcon as Flask,
  Users,
  Award,
  Target,
  TrendingUp,
  Network,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseSchema, CustomSchema } from "@/components/Schema";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CheckCircle, ArrowRight, CalendarRange } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { programData } from "@/data/programData";

const programs = [
  {
    id: "pgdm-triple-specialisation",
    name: "PGDM Triple Specialisation",
    link: "/programs/pgdm-triple-specialisation",
    category: "PGDM",
  },
  {
    id: "pgdm-bifs",
    name: "PGDM BIFS",
    link: "/programs/pgdm-bifs",
    category: "PGDM",
  },
  {
    id: "pgdm-ba",
    name: "PGDM BA",
    link: "/programs/pgdm-ba",
    category: "PGDM",
  },
  { id: "fpm", name: "FPM", link: "/programs/fpm", category: "FPM/EFPM" },
  { id: "efpm", name: "EFPM", link: "/programs/efpm", category: "FPM/EFPM" },
];

const pgdmPrograms = programs.filter((p) => p.category === "PGDM");
const fpmEfpmPrograms = programs.filter((p) => p.category === "FPM/EFPM");

const sections = [
  { id: "about", name: "About", icon: ChevronRight },
  {
    id: "electives",
    name: "Specializations",
    icon: ChevronRight,
    hidden: ["fpm", "efpm", "fpm/efpm"],
  },
  {
    id: "specializations",
    name: "Specializations",
    icon: ChevronRight,
    showOnly: ["fpm", "efpm", "fpm/efpm"],
  },
  {
    id: "managerialCompetency",
    name: "Managerial Competency Development Modules",
    icon: ChevronRight,
  },
  { id: "differentiators", name: "Differentiators", icon: ChevronRight },
  { id: "programAdvantages", name: "Program Advantages", icon: ChevronRight },
  { id: "industryConnect", name: "Industry Connect", icon: ChevronRight },
  { id: "careerPathways", name: "Career Pathways", icon: ChevronRight },
  {
    id: "curriculum",
    name: "Program Structure",
    icon: ChevronRight,
    hidden: ["fpm", "efpm", "fpm/efpm"],
  },
  {
    id: "peo",
    name: "PEO, PO & PSO",
    icon: ChevronRight,
    hidden: ["fpm", "efpm", "fpm/efpm"],
  },
  { id: "eligibility", name: "Admissions", icon: ChevronRight },
  { id: "faq", name: "FAQs", icon: ChevronRight },
];

const useMediaQuery = (query) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

const ProgramStats = ({ programId }) => {
  const program = programData[programId];

  const data = [
    { name: "Applicants", value: program.stats.applicants },
    { name: "Enrolled", value: program.stats.enrolled },
    { name: "Graduates", value: program.stats.graduates },
    { name: "Avg. Salary", value: program.stats.avgSalary / 1000 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{program.name} Statistics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4">
        <p>Employment Rate: {program.stats.employmentRate}%</p>
        <p>Average Time to Graduate: {program.stats.avgTimeToGraduate} years</p>
      </div>
    </div>
  );
};

const ProgramComparison = ({ programs }) => {
  const comparisonData = [
    { feature: "Duration", key: "duration" },
    { feature: "Credits", key: "credits" },
    { feature: "Sanctioned Intake", key: "Sanctioned Intake" },
    { feature: "Location", key: "location" },
    { feature: "Degree", key: "degree" },
    { feature: "Applicants", key: "applicants" },
    { feature: "Enrolled", key: "enrolled" },
    { feature: "Graduates", key: "graduates" },
    { feature: "Employment Rate", key: "employmentRate" },
    { feature: "Avg. Salary", key: "avgSalary" },
    { feature: "Avg. Time to Graduate", key: "avgTimeToGraduate" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-mainBlue">
        Program Comparison
      </h2>
      <Table>
        <TableHeader className="bg-gradient-to-r from-purple-200 via-purple-50 to-purple-200">
          <TableRow>
            <TableHead className="text-navy">Feature</TableHead>
            {programs.map((program) => (
              <TableHead className="text-navy" key={program.id}>
                {program.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonData.map(({ feature, key }) => (
            <TableRow key={key}>
              <TableCell className="font-medium text-base">{feature}</TableCell>
              {programs.map((program) => (
                <TableCell className="text-base" key={program.id}>
                  {key in programData[program.id].keyInfo
                    ? programData[program.id].keyInfo[key]
                    : key in programData[program.id].stats
                    ? key === "avgSalary"
                      ? `$${programData[program.id].stats[
                          key
                        ].toLocaleString()}`
                      : key === "employmentRate" || key === "avgTimeToGraduate"
                      ? `${programData[program.id].stats[key]}%`
                      : programData[program.id].stats[key].toLocaleString()
                    : "N/A"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const KeyInformation = ({ info }) => {
  const iconMap = {
    duration: Clock,
    credits: BookOpen,
    "Sanctioned Intake": CalendarRange,
    location: MapPin,
    degree: GraduationCap,
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Key Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(info).map(([key, value]) => {
          const Icon = iconMap[key];
          return (
            <Card
              key={key}
              className={`overflow-hidden ${
                key === "degree" ? "md:col-span-2" : ""
              }`}
            >
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-mainBlue rounded-full p-3 flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-base text-gray-800 capitalize">
                    {key}
                  </h4>
                  <p className="text-lg font-semibold text-red-600 break-words">
                    {value}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const Specializations = ({ specializations }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Specializations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specializations?.map((spec, index) => (
          <Card
            key={index}
            className="overflow-hidden flex flex-row items-center gap-4 p-2"
          >
            {spec.icon.startsWith("http") ||
            spec.icon.startsWith("data:image") ||
            spec.icon.startsWith("/") ? (
              <div className="min-w-20 h-20 flex items-center justify-center text-4xl bg-gray-50 rounded-lg">
                <img src={spec?.icon} alt={spec?.title} className="w-14 h-14" />
              </div>
            ) : (
              <div className="min-w-20 h-20 flex items-center justify-center text-4xl bg-gray-50 rounded-lg">
                {spec?.icon}
              </div>
            )}
            <CardTitle className="text-xl text-red-600">
              {spec?.title}
            </CardTitle>
          </Card>
        ))}
      </div>
    </div>
  );
};
const ManagerialCompetency = ({ managerialCompetency }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Managerial Competency Development Modules
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {managerialCompetency.map((spec, index) => (
          <Card
            key={index}
            className="overflow-hidden flex flex-col gap-3 p-5 sm:p-3"
          >
            <div className="flex flex-row items-center gap-4">
              <img src={spec?.icon} alt={spec?.title} className="w-16 h-16" />
              <CardTitle className="text-xl text-red-600">
                {spec?.title}
              </CardTitle>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <CardDescription className="sm:line-clamp-2 line-clamp-1">
                  {spec?.description}
                </CardDescription>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="text-mainBlue bg-white p-0 h-auto absolute right-0 bottom-0 bg-gradient-to-l from-white via-white to-transparent pl-4"
                    >
                      Read More
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{spec?.title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <p>{spec?.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const Differentiators = ({ differentiators, programId }) => {
  const iconMap = {
    0: Briefcase,
    1: Flask,
    2: Users,
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Program Differentiators
      </h3>
      {Array.isArray(differentiators) && differentiators.length && (
        <>
          {/* Financial Support Panel - Only for FPM/EFPM */}
          {(programId === "fpm" ||
            programId === "efpm" ||
            programId === "fpm/efpm") && (
            <div className="mb-8">
              <div className="rounded-2xl border border-mainBlue bg-purple-50/40 shadow-md p-6 md:p-8">
                <h4 className="text-xl md:text-2xl text-mainBlue font-extrabold flex items-center gap-2 mb-3">
                  <Briefcase className="w-7 h-7 text-mainBlue mr-1" /> Financial
                  Support (Full-time Researchers & Freshers)
                </h4>
                <ul className="list-inside list-disc text-base space-y-2 mb-4 pl-2 md:pl-5">
                  <li>
                    <span className="font-medium">Limited scholarships</span>{" "}
                    offered to FPM scholars (Full-time) based on academic
                    performance during selection and tenure.
                  </li>
                  <li>
                    <span className="font-medium">Monthly Stipend:</span>
                    <ul className="list-inside list-[circle] ml-6 space-y-1">
                      <li>
                        <span className="text-mainBlue font-semibold">
                          Year 1:
                        </span>{" "}
                        ₹20,000/month
                      </li>
                      <li>
                        <span className="text-mainBlue font-semibold">
                          Year 2:
                        </span>{" "}
                        ₹25,000/month
                      </li>
                      <li>
                        <span className="text-mainBlue font-semibold">
                          Year 3:
                        </span>{" "}
                        ₹30,000/month
                      </li>
                    </ul>
                  </li>
                  <li>
                    Stipend applies only if scholar{" "}
                    <span className="font-medium">
                      is not employed elsewhere
                    </span>
                    .
                  </li>
                  <li>
                    Scholars are required to serve as{" "}
                    <span className="font-medium">
                      Teaching/Research Assistants
                    </span>{" "}
                    at SSIM.
                  </li>
                  <li>
                    <span className="font-medium">Progress Review:</span> Every
                    6 months by Research Advisory Committee and guide; next
                    stipend installment is subject to satisfactory performance.
                  </li>
                  <li>
                    <span className="font-medium">No stipend extension</span>{" "}
                    beyond 3 years.
                  </li>
                  <li>
                    <span className="font-medium">Tuition Exemption:</span>{" "}
                    Scholars receiving stipends do{" "}
                    <span className="text-green-700 font-semibold">
                      not pay tuition fees
                    </span>
                    .
                  </li>
                  <li>
                    <span className="font-medium">Fees Payable:</span> ₹70,000
                    (Acceptance fee: ₹60,000{" "}
                    <span className="text-gray-500 text-xs">
                      (non-refundable)
                    </span>{" "}
                    + ₹10,000{" "}
                    <span className="text-gray-500 text-xs">
                      (refundable security deposit)
                    </span>
                    ).
                  </li>
                </ul>
                <div className="text-xs text-gray-700 bg-yellow-50 rounded-lg p-3 border-l-4 border-yellow-400">
                  <strong>Note:</strong> Scholars’ performance in previous 6
                  months must be certified as{" "}
                  <span className="font-semibold text-green-600">
                    satisfactory
                  </span>{" "}
                  by their academic guide to continue receiving stipend.
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {differentiators.map((diff, index) => {
          const Icon = iconMap[index] || Users;
          return (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="bg-mainBlue rounded-full p-2">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-red-600">{diff.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{diff.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const ProgramContentSection = ({ section }) => {
  if (!section) return null;

  const iconMap = {
    programAdvantages: Target,
    industryConnect: Network,
    careerPathways: TrendingUp,
    default: Award,
  };
  const Icon = iconMap[section.id] || iconMap.default;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-red-600">
          {section.title}
        </h3>
        {section.description && (
          <p className="text-gray-700 leading-relaxed">
            {section.description}
          </p>
        )}
      </div>

      {section.stats && section.stats.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {section.stats.map((stat, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-5">
                <p className="text-2xl font-bold text-mainBlue">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-gray-700 mt-1">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {section.items && section.items.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {section.items.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="bg-mainBlue rounded-full p-2">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-red-600">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {item.description && <p>{item.description}</p>}
                {item.points && (
                  <ul className="space-y-2">
                    {item.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {section.groups && section.groups.length > 0 && (
        <div className="space-y-6">
          {section.groups.map((group, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-red-600">{group.title}</CardTitle>
                {group.description && (
                  <CardDescription>{group.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-2 rounded-lg bg-slate-50 p-3 text-sm text-gray-700"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

const PEOSection = ({ peo }) => {
  if (!peo) return null;

  return (
    <div className="space-y-10">
      {peo.peoStatements && peo.peoStatements.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-red-600">
            Program Educational Objective (PEO)
          </h3>
          <p className="text-gray-700 mb-4">
            SSIM PEOs Statements ({peo.peoStatements.length})
          </p>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>PEO No.</TableHead>
                  <TableHead>Keywords</TableHead>
                  <TableHead>PEO Statement (Graduates will...)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {peo.peoStatements.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-mainBlue whitespace-nowrap align-top">
                      {item.no}
                    </TableCell>
                    <TableCell className="font-medium align-top">
                      {item.keyword}
                    </TableCell>
                    <TableCell>{item.statement}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {peo.programOutcomes && peo.programOutcomes.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-red-600">
            Program Outcomes (POs)
          </h3>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>POs</TableHead>
                  <TableHead>Statement</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {peo.programOutcomes.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-mainBlue whitespace-nowrap align-top">
                      {item.no}
                    </TableCell>
                    <TableCell>{item.statement}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {peo.programSpecificOutcomes && peo.programSpecificOutcomes.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-red-600">
            Program Specific Outcomes (PSOs)
          </h3>
          <p className="text-gray-700 mb-4">
            On successful completion of the program, graduates will:
          </p>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>PSOs</TableHead>
                  <TableHead>Statement</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {peo.programSpecificOutcomes.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-mainBlue whitespace-nowrap align-top">
                      {item.no}
                    </TableCell>
                    <TableCell>{item.statement}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

const Curriculum = ({ curriculum }) => {
  // Find the detailed curriculum object, which contains module1, module2, etc.
  const detailedCurriculumData = curriculum?.find((item) => item.module1);
  // Filter for image-based curriculum items.
  const imageCurriculum = curriculum?.filter((item) => item.link);

  return (
    <>
      {curriculum && (
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-red-600">
            Program Structure
          </h3>

          {/* Renders the tab-based detailed curriculum view if data for it exists */}
          {detailedCurriculumData && (
            <section className={`py-5`}>
              <div className="mx-auto relative z-10">
                <Tabs defaultValue="module1" className="max-w-4xl mx-auto">
                  <TabsList className="grid grid-cols-6 mb-12 p-1 bg-slate-100 rounded-full">
                    {/* Static tabs for now */}
                    <TabsTrigger
                      value="module1"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 1
                    </TabsTrigger>
                    <TabsTrigger
                      value="module2"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 2
                    </TabsTrigger>
                    <TabsTrigger
                      value="module3"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 3
                    </TabsTrigger>
                    <TabsTrigger
                      value="module4"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 4
                    </TabsTrigger>
                    <TabsTrigger
                      value="module5"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 5
                    </TabsTrigger>
                    <TabsTrigger
                      value="module6"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 6
                    </TabsTrigger>
                  </TabsList>

                  {Object.keys(detailedCurriculumData).map(
                    (moduleKey, moduleIndex) => {
                      const data = detailedCurriculumData[moduleKey];
                      return (
                        <TabsContent
                          key={moduleIndex}
                          value={moduleKey}
                          className="transition-all duration-500 ease-in-out"
                        >
                          <div className="grid md:grid-cols-1 sm:gap-8">
                            {/* <div className="md:col-span-1 h-min bg-white p-8 rounded-2xl shadow-lg border border-slate-100"> */}
                            <h3 className="sm:text-3xl text-xl sm:ml-7 mb-5 flex items-center text-gray-700 font-bold ">
                              <BookOpen className="h-8 w-8 text-primary mr-3 mt-2" />{" "}
                              {data.title}
                            </h3>
                            {/* <div className="flex items-center gap-2 mb-4">
                                <Badge variant="outline" className="text-sm">
                                  <CalendarIcon className="h-3 w-3 mr-1" />
                                  {data.duration}
                                </Badge>
                              </div> */}
                            {/* <p className="text-muted-foreground mb-6">
                                {data.description}
                              </p>
                              <div className="mt-auto pt-4 border-t">
                                <Button
                                  variant="outline"
                                  className="w-full gap-2"
                                >
                                  Download Syllabus{" "}
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div> */}
                            {/* </div> */}
                            <div className="md:col-span-2">
                              <div className="w-full">
                                {data.topics.map((topic, index) => (
                                  <div
                                    key={index}
                                    className="bg-white mb-4 rounded-xl border border-slate-100 overflow-hidden group transition-all duration-300 px-6 py-4"
                                  >
                                    <div className="flex items-center gap-4">
                                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <span className="font-bold text-primary text-lg">
                                          {index + 1}
                                        </span>
                                      </div>
                                      <span className="text-base sm:text-lg text-left font-medium">
                                        {topic.title}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      );
                    }
                  )}
                </Tabs>
              </div>
            </section>
          )}

          {/* Renders image-based curriculum items */}
          <div className="space-y-8">
            {imageCurriculum?.map((item, index) => (
              <div key={index}>
                <img src={item.link} alt={item.name} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const EligibilityAdmission = ({ eligibility, admission }) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-red-600">
          Eligibility Criteria
        </h3>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-2">
              {eligibility.map((criteria, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{criteria}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-red-600">
          Admission Procedure
        </h3>
        <Card>
          <CardContent className="p-6">
            <ol className="space-y-4">
              {admission.map((step, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <span>{step}</span>
                  {index < admission.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ProgramFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold mb-6 text-red-600">
        Frequently Asked Questions
      </h3>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-50 group"
            >
              <span className="text-lg font-semibold text-slate-800 pr-8 group-hover:text-red-600 transition-colors">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <ChevronDown
                  className={`h-5 w-5 ${
                    openIndex === index ? "text-red-600" : "text-slate-400"
                  }`}
                />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/30">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

const CourseElectives = ({ electives, programId }) => {
  if (!electives) {
    return <div>No electives offered for this program.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Electives Offered
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from our comprehensive range of specialized courses across
          major, minor, and sectoral electives
        </p>
      </div> */}

      <div className="space-y-16">
        {Object.entries(electives).map(([key, category]) => (
          <section key={key} className="relative">
            <div className="flex items-center mb-8">
              <div
                className={`${category.headerColor} text-white px-6 py-3 rounded-lg shadow-lg`}
              >
                <h2 className="text-2xl md:text-3xl font-bold">
                  {category?.title}
                </h2>
              </div>
              <div className="flex-1 h-px bg-gray-300 ml-6"></div>
            </div>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 ${
                programId === "pgdm-ba" ? "lg:grid-cols-2" : "lg:grid-cols-3"
              } gap-6`}
            >
              {category?.specializations.map((specialization, index) => (
                <Card
                  key={index}
                  className={`${category.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-gray-800 flex items-center justify-between">
                      {specialization?.name}
                      {/* <Badge variant="secondary" className="ml-2 text-xs">
                        {specialization.courses.length} courses
                      </Badge> */}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {specialization?.courses?.map((course, courseIndex) => (
                        <li
                          key={courseIndex}
                          className="text-sm text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                        >
                          <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

const ProgramSection = ({ programId, activeSection }) => {
  const program = programData[programId];
  if (!program) return <div>Program not found</div>;

  const seoTitle = `${program.name} | SSIM`;
  const seoDescription = `Learn about the ${program.name} program at Siva Sivani Institute of Management. Explore the curriculum, specializations, and career opportunities.`;
  const seoKeywords = `SSIM ${program.name}, ${program.name} program, ${program.name} curriculum, ${program.name} admissions`;
  const canonicalUrl = `https://ssim.ac.in/programs/${programId}`;

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="space-y-8">
            {program.about && (
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold mb-4 text-red-600">
                  About the Program
                </h3>
                <div
                  className="text-gray-700 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: program.about.replace(/\n/g, "<br />"),
                  }}
                />
              </div>
            )}
            <KeyInformation info={program.keyInfo} />
            {program.partners && program.partners.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-red-600">
                  Industry Collaborations
                </h3>
                <div className="flex flex-wrap items-center gap-8">
                  {program.partners.map((partner, index) => (
                    <div key={index} className="flex flex-col items-center gap-3">
                      {partner.label && (
                        <h4 className="text-lg font-semibold text-gray-700 text-center">{partner.label}</h4>
                      )}
                      <div
                        className="flex items-center justify-center bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-2"
                        style={{ minWidth: "220px", minHeight: "140px" }}
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-40 max-w-[300px] object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      case "electives":
        return (
          <CourseElectives
            electives={program.electives}
            programId={programId}
          />
        );
      case "specializations":
        // Only show specializations for FPM/EFPM programs
        if (
          programId === "fpm" ||
          programId === "efpm" ||
          programId === "fpm/efpm"
        ) {
          return <Specializations specializations={program.specializations} />;
        }
        return null;
      case "managerialCompetency":
        return (
          <ManagerialCompetency
            managerialCompetency={program.managerialCompetency}
          />
        );
      case "differentiators":
        return (
          <Differentiators
            differentiators={program.differentiators}
            programId={programId}
          />
        );
      case "programAdvantages":
      case "industryConnect":
      case "careerPathways":
        return (
          <ProgramContentSection
            section={program.additionalSections?.[activeSection]}
          />
        );
      case "curriculum":
        return <Curriculum curriculum={program.curriculum} />;
      case "peo":
        return <PEOSection peo={program.peo} />;
      case "eligibility":
        return (
          <EligibilityAdmission
            eligibility={program.eligibility}
            admission={program.admission}
          />
        );
      case "faq":
        return <ProgramFAQ faqs={program.faqs} />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {renderContent()}
      </motion.div>
    </AnimatePresence>
  );
};

const ProgramsOverview = ({ params }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { programId } = params;

  // Map URL segments to program IDs
  const urlToProgramId = {
    "fpm-efpm": "fpm", // Support legacy URL
    fpm: "fpm",
    efpm: "efpm",
    "pgdm-ba": "pgdm-ba",
    "pgdm-bifs": "pgdm-bifs",
    "pgdm-triple-specialisation": "pgdm-triple-specialisation",
  };

  const [activeProgram, setActiveProgram] = useState(
    () => urlToProgramId[programId] || programs[0].id
  );
  const [activeSection, setActiveSection] = useState(
    () => searchParams.get("section") || "about"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [showComparison, setShowComparison] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  React.useEffect(() => {
    const currentProgramId = urlToProgramId[programId];
    if (currentProgramId && currentProgramId !== activeProgram) {
      setActiveProgram(currentProgramId);
    }
    const section = searchParams.get("section") || "about";
    if (section !== activeSection) {
      setActiveSection(section);
    }
  }, [programId, searchParams, activeProgram, activeSection]);

  const handleProgramChange = (programId) => {
    const program = programs.find((p) => p.id === programId);
    if (program) {
      router.push(`${program.link}?section=about`);
    }
  };

  const handleSectionChange = (sectionId) => {
    // If the section is "eligibility", redirect to the appropriate admission page
    if (sectionId === "eligibility") {
      // Map program IDs to their admission routes
      const admissionRoutes = {
        fpm: "/admissions/fpm-efpm",
        efpm: "/admissions/efpm",
        "fpm/efpm": "/admissions/fpm-efpm", // Legacy support
        "pgdm-ba": "/admissions/pgdm-ba",
        "pgdm-bifs": "/admissions/pgdm-bifs",
        "pgdm-triple-specialisation": "/admissions/pgdm-triple-specialisation",
      };

      const admissionRoute = admissionRoutes[activeProgram];
      if (admissionRoute) {
        router.push(admissionRoute);
        return;
      }
    }

    // For other sections, proceed with normal behavior
    setActiveSection(sectionId);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("section", sectionId);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  // Determine active category based on selected program
  const activeCategory = React.useMemo(() => {
    const program = programs.find((p) => p.id === activeProgram);
    return program?.category || "PGDM";
  }, [activeProgram]);

  const filteredSections = sections.filter((section) => {
    const program = programData[activeProgram];
    if (section.id === "electives" && !program.electives) {
      return false;
    }
    if (
      ["programAdvantages", "industryConnect", "careerPathways"].includes(
        section.id
      ) &&
      !program.additionalSections?.[section.id]
    ) {
      return false;
    }
    const matchesSearch = section.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const isHidden = section.hidden?.includes(activeProgram);
    const isShowOnly =
      section.showOnly && !section.showOnly.includes(activeProgram);
    return matchesSearch && !isHidden && !isShowOnly;
  });

  const Overlay = isDesktop ? Dialog : Drawer;
  const OverlayContent = isDesktop ? DialogContent : DrawerContent;

  const SidebarContent = () => (
    <>
      {/* <div className="mb-4 relative">
        <Input
          type="text"
          placeholder="Search sections..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div> */}
      {/* <ScrollArea className="h-[calc(100vh-200px)] lg:h-auto"> */}
      <ul className="space-y-2">
        {filteredSections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => {
                handleSectionChange(section.id);
                if (!isDesktop) setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded-sm transition-colors ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-red-600 via-red-400 to-red-600 text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              <span className="flex items-center">
                {section.name}
                {activeSection === section.id ? (
                  <ChevronDown className="ml-auto min-w-6" />
                ) : (
                  <ChevronRight className="ml-auto min-w-6" />
                )}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {/* </ScrollArea> */}
      <div className="flex flex-col sm:flex-row gap-2 mt-4">
        {/* <Button
          onClick={() => {
            setShowComparison(!showComparison);
            if (!isDesktop) setSidebarOpen(false);
          }}
          className="w-full sm:flex-1 bg-gradient-to-r from-mainBlue via-[#2f65ca] to-mainBlue text-white hover:bg-mainBlue/80"
        >
          {showComparison ? "Hide Comparison" : "Compare Programs"}
        </Button> */}
        <Overlay>
          <OverlayContent className="">
            <ProgramStats programId={activeProgram} />
          </OverlayContent>
        </Overlay>
      </div>
    </>
  );

  // Generate Course Schema based on active program
  const courseSchemaData = useMemo(() => {
    const program = programData[activeProgram];
    if (!program) return null;

    const programInfo = programs.find((p) => p.id === activeProgram);
    const programName =
      programInfo?.name || program.name || "Management Program";

    return {
      name: programName,
      description:
        program.description ||
        program.about ||
        `Learn about ${programName} at SSIM Hyderabad`,
      courseCode: activeProgram.toUpperCase(),
      educationalCredentialAwarded:
        program.degree ||
        program.keyInfo?.degree ||
        "Post Graduate Diploma in Management",
      timeRequired: program.duration || program.keyInfo?.duration || "P2Y",
      url: `https://ssim.ac.in/programs/${programId}`,
      coursePrerequisites: "Bachelor's degree from a recognized university",
    };
  }, [activeProgram, programId]);

  return (
    <>
      {programData[activeProgram]?.schema ? (
        <CustomSchema schema={programData[activeProgram].schema} />
      ) : (
        courseSchemaData && <CourseSchema {...courseSchemaData} />
      )}
      <div className="container max-w-7xl mx-auto px-2 sm:px-4 py-14 sm:py-20">
        {/* <h1 className="text-4xl font-bold mb-16 text-center text-primary">
        Graduate Programs
      </h1> */}
        <div className="mb-8">
          <Tabs
            value={activeProgram}
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
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="space-y-3"
                >
                  {/* <h2 className="text-xl font-semibold text-navy px-2">
                  Post Graduate Courses
                </h2> */}
                  <TabsList className="w-full flex flex-wrap text-navy bg-gradient-to-r from-purple-200 via-purple-50 to-purple-200 justify-center gap-2 p-1 h-auto">
                    {pgdmPrograms.map((program) => (
                      <TabsTrigger
                        key={program.id}
                        value={program.id}
                        className="flex-grow sm:flex-grow text-sm sm:text-base px-4 py-2 h-auto data-[state=active]:bg-mainBlue data-[state=active]:text-primary-foreground transition-all duration-300"
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
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="space-y-3"
                >
                  <h2 className="text-xl font-semibold text-navy px-2">
                    FPM/EFPM
                  </h2>
                  <TabsList className="w-full flex flex-wrap text-navy bg-gradient-to-r from-purple-200 via-purple-50 to-purple-200 justify-center gap-2 p-1 h-auto">
                    {fpmEfpmPrograms.map((program) => (
                      <TabsTrigger
                        key={program.id}
                        value={program.id}
                        className="flex-grow sm:flex-grow text-sm sm:text-base px-4 py-2 h-auto data-[state=active]:bg-mainBlue data-[state=active]:text-primary-foreground transition-all duration-300"
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
        <div className="flex flex-col lg:flex-row gap-8">
          {isDesktop ? (
            <nav className="lg:w-1/4">
              <SidebarContent />
            </nav>
          ) : (
            <Drawer open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <DrawerTrigger asChild>
                <Button
                  variant="outline"
                  className="lg:hidden mb-4 w-full justify-between"
                >
                  <span className="flex items-center">
                    <Menu className="mr-2 h-4 w-4" />
                    Menu
                  </span>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="p-4">
                  <SidebarContent />
                </div>
                <DrawerClose asChild>
                  <Button className="mt-4">Close</Button>
                </DrawerClose>
              </DrawerContent>
            </Drawer>
          )}
          <main className="lg:w-3/4 overflow-hidden">
            <AnimatePresence mode="wait">
              {!showComparison ? (
                <motion.div
                  key={`${activeProgram}-${activeSection}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProgramSection
                    programId={activeProgram}
                    activeSection={activeSection}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="comparison"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProgramComparison programs={programs} />
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProgramsOverview;
