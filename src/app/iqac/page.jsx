"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronRight,
  ClipboardList,
  FileText,
  Info,
  Layers,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mapping of actual AICTE PDF file names by year
const aicteFileNames = {
  2025: "AICTE_2025_.pdf",
  2024: "AICTE_2024.pdf",
  2023: "AICTE_2023.pdf",
  2022: "AICTE_2022.pdf",
  2021: "AICTE_2021.pdf",
  2020: "AICTE_2020.pdf",
  2019: "AICTE_2019.pdf",
  2018: "AICTE_2018.pdf",
  2017: "AICTE_2017.pdf",
  2016: "AICTE_2016.pdf",
  2015: "AICTE_2015.pdf",
  2014: "AICTE_2014.pdf",
  2013: "AICTE_2013_April.pdf",
  2012: "AICTE_2012.pdf",
  2011: "AICTE_2011.pdf",
  2010: "AICTE_2010.pdf",
  2009: "AICTE_2008_TO_2011.pdf",
  2008: "AICTE_2008.pdf",
  2007: "AICTE_2007.pdf",
  2006: "AICTE_2006.pdf",
  2005: "AICTE_2005.pdf",
  2004: "AICTE_2004_&_2005.pdf",
  2003: "AICTE_2003.pdf",
  2002: "AICTE_2002.pdf",
  2001: "AICTE_2000_TO_2003.pdf",
  2000: "AICTE_2000_TO_2003.pdf",
  1999: "AICTE_1999.pdf",
  1998: "AICTE_1998.pdf",
  1997: "AICTE_1997_98.pdf",
  1996: "AICTE_1996.pdf",
  1995: "AICTE_1995.pdf",
  1994: "AICTE_1993_&_1994 (1).pdf",
  1993: "AICTE_1993_&_1994 (1).pdf",
  1992: "AICTE_1992.pdf",
};

// Generate AICTE PDF paths for all years (2025 to 1992) using new folder structure
const generateAicteYears = () => {
  const years = [];
  for (let year = 2025; year >= 1992; year--) {
    if (aicteFileNames[year]) {
      years.push({
        year,
        link: `/pdfs/iqac/AICTE/${year}/${aicteFileNames[year]}`,
      });
    }
  }
  return years;
};

const allAicteYears = generateAicteYears();
const recentYears = allAicteYears.filter((item) => item.year >= 2016);
const olderYears = allAicteYears.filter((item) => item.year < 2016);

// Keep old paths for reference (commented but alive)
// const aicte2025 = `/pdfs/iqac/AICTE/AICTE_2025_.PDF`;
// const aicte2024 = `/pdfs/iqac/AICTE/AICTE_2024.pdf`;
// const aicte2023 = `/pdfs/iqac/AICTE/AICTE_2023.pdf`;
// const aicte2022 = `/pdfs/iqac/AICTE/AICTE_2022.pdf`;
// const aicte2021 = `/pdfs/iqac/AICTE/AICTE_2021.pdf`;
// const aicte2020 = `/pdfs/iqac/AICTE/AICTE_2020.pdf`;
// const aicte2019 = `/pdfs/iqac/AICTE/AICTE_2019.pdf`;
// const aicte2018 = `/pdfs/iqac/AICTE/AICTE_2018.pdf`;
// const aicte2017 = `/pdfs/iqac/AICTE/AICTE_2017.pdf`;
const insurance2023 = `/pdfs/iqac/Accreditations/Insurance-Institute-of-India-of-Siva-Sivani-Inst.of-Management-Exemption-Letter-2023.pdf`;
const insurance2021 = `/pdfs/iqac/Accreditations/Insurance-Institute-of-India-of-Siva-Sivani-Inst.of-Management-Exemption-Letter-2021.pdf`;
const insurance2016 = `/pdfs/iqac/Accreditations/Insurance-Institute-of-India-of-Siva-Sivani-Inst.-of-Management-2016.pdf`;
const aiuEquivalent = `/pdfs/iqac/Accreditations/5.-Siva-Sivani-PGDM-Letters-PGDM-PGDM-BA-PGDM-BIFS.pdf`;
const naacAccreditation = `/pdfs/iqac/Accreditations/NAAC_Accreditation.pdf`;
const nbaAccreditation = `/pdfs/iqac/Accreditations/NBA-Accreditation.pdf`;
const saqsAccreditation = `/pdfs/iqac/Accreditations/SAQS-Accreditation.pdf`;
const nirfAccreditation = `/pdfs/iqac/Accreditations/NIRF-Ranking.pdf`;
const annualReport2022 = `/pdfs/iqac/AnnualReport/SSIM_Annual-Accounts_OriginalScanned_FY2021-22.pdf`;
const annualReport2021 = `/pdfs/iqac/AnnualReport/SSIM_Annual-Accounts_OriginalScanned_FY2020-21.pdf`;
const annualReport2020 = `/pdfs/iqac/AnnualReport/SSIM_Annual-Accounts_OriginalScanned_FY2019-20.pdf`;
const bogJuly2022 = `/pdfs/iqac/AabBog/BOG-JULY-2022-MINUTES-OF-THE-MEETING.pdf`;
const bogAug2021 = `/pdfs/iqac/AabBog/BOG-AUG-2021-MINUTES-OF-THE-MEETING.pdf`;
const bogJune2002 = `/pdfs/iqac/AabBog/BOG-MINUTES-OF-THE-MEETING-JUNE-2020.pdf`;
const bogJan2020 = `/pdfs/iqac/AabBog/BOG-MINUTES-OF-THE-MEETING-JAN-2020.pdf`;
const bogJuly2019 = `/pdfs/iqac/AabBog/BOG-MINUTES-OF-THE-MEETING-JULY-2019.pdf`;

// New BOG/AAB PDFs from image
const bogAug2024 = `/pdfs/iqac/AabBog/BOG-AUGUST-2024-MINUTES-OF-THE-MEETING.pdf`;
const bogJune2025 = `/pdfs/iqac/AabBog/BOG-JUNE-2025-MINUTES-OF-THE-MEETING.pdf`;
const bogMarch2025 = `/pdfs/iqac/AabBog/BOG-MARCH-2025-MINUTES-OF-THE-MEETING.pdf`;
const bogMay2023 = `/pdfs/iqac/AabBog/BOG-MAY-2023-MINUTES-OF-THE-MEETING.pdf`;

const sss2122 = `/pdfs/iqac/SSS-21-22.pdf`;
const aqar2021 = `/pdfs/iqac/AQAR-20-21.pdf`;
const mandatoryDisclosure2025 = `/pdfs/iqac/Mandatory_Disclosures_2025_26.pdf`;

export default function IQAC() {
  const [showOlder, setShowOlder] = useState(false);

  return (
    <div className="min-h-screen bg-blue-50">
      {/* <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Internal Quality Assurance Cell
              </h1>
              <p className="text-slate-600 mt-1">
                Ensuring excellence in academic and administrative performance
              </p>
            </div>
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm bg-slate-100 border-slate-200"
            >
              Est. 2016
            </Badge>
          </div>
        </div>
      </header> */}

      <main className="container max-w-7xl mx-auto px-4 py-10 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center gap-2 mb-2">
                <Info className="h-5 min-w-5 text-red-500" />
                <h2 className="text-2xl font-bold text-mainBlue">
                  The Primary Aim of IQAC
                </h2>
              </div>
              <hr className="mb-3 border-t-2 border-gray-200 ml-1" />
              <div className="space-y-4 text-slate-700">
                <p>
                  To play the role as a catalyst and develop a system for
                  conscious and consistent improvement in the academic and
                  administrative performance of the institution.
                </p>
                <p>
                  To promote measures for institutional functioning towards
                  quality enhancement and sustenance through internalization of
                  quality culture and institutionalization of best practices.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 min-w-5 text-red-500" />
                <h2 className="text-2xl font-bold text-mainBlue">
                  Quality Policy
                </h2>
              </div>
              <hr className="mb-3 border-t-2 border-gray-200 ml-1" />
              <p className="text-slate-700">
                The Institute is committed to deliver quality education for all
                round development of the students to meet the varying
                requirements of industry, business and society.
              </p>
            </section>

            <section className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 min-w-5 text-red-500" />
                <h2 className="text-2xl font-bold text-mainBlue">
                  Composition of the IQAC
                </h2>
              </div>
              <hr className="mb-3 border-t-2 border-gray-200 ml-1" />
              <p className="text-slate-700 mb-4">
                IQAC may be constituted in the institution under the
                Chairmanship of the Head of the institution with heads of
                important academic and administrative units and a few teachers
                and a few distinguished educationists and representatives of
                local management and stakeholders.
              </p>

              <h3 className="text-lg font-medium text-slate-800 mb-3">
                The composition of the IQAC may be as follows:
              </h3>

              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span>Chairperson: Head of the Institution</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span>Teachers to represent all level (Three to eight)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span>One member from the Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span>Few Senior administrative officers</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span>
                    One nominee each from local society, Students and Alumni
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span>
                    One nominee each from Employers, Industrialists/Stakeholders
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span>
                    One of the senior teachers as the coordinator/Director of
                    the IQAC
                  </span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center gap-2 mb-2">
                <ClipboardList className="h-5 min-w-5 text-red-500" />
                <h2 className="text-2xl font-bold text-mainBlue">Functions</h2>
              </div>
              <hr className="mb-3 border-t-2 border-gray-200 ml-1" />
              <p className="text-slate-700 mb-4">
                Some of the functions of the IQAC are as follows:
              </p>

              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 min-w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Development and application of quality benchmarks and
                    setting parameters for various academic and administrative
                    activities of the Institution.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 min-w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Facilitating the creation of a learner-centric environment
                    conducive to quality education and faculty maturation to
                    adopt the required knowledge and technology for
                    participatory teaching and learning process.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 min-w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Arrangement for feedback response from students, parents and
                    other stakeholders on quality-related institutional
                    processes.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 min-w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Dissemination of information on various quality parameters
                    of higher education.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 min-w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Organization of inter and intra institutional workshops,
                    seminars on quality related themes and promotion of quality
                    circles.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 min-w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Documentation of the various programmes/activities leading
                    to quality improvement.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 min-w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Acting as a nodal agency of the Institution for coordinating
                    quality-related activities, including adoption and
                    dissemination of best practices.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 min-w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Development and maintenance of institutional database
                    through MIS for the purpose of maintaining /enhancing the
                    institutional quality.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 min-w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Development of Quality Culture in the institution.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 min-w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Preparation and submission of the Annual Quality Assurance
                    Report (AQAR) as per guidelines and parameters of NAAC.
                  </span>
                </li>
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            {/* <Tabs defaultValue="approvals" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="approvals">Approvals</TabsTrigger>
                <TabsTrigger value="accreditations">Accreditations</TabsTrigger>
                <TabsTrigger value="committees">Committees</TabsTrigger>
              </TabsList>

              <TabsContent value="approvals" className="mt-4"></TabsContent>

              <TabsContent
                value="accreditations"
                className="mt-4"
              ></TabsContent>

              <TabsContent value="committees" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-amber-500" />
                      List of Committees
                    </CardTitle>
                    <CardDescription>Institutional committees</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        "BOG MEMBERS AUG 2021",
                        "BOS CONSTITUTION",
                        "BOS MEMBERS - PGDM 22-23",
                        "AAB CONSTITUTION 2022",
                        "DISCIPLINARY COMMITTEE",
                        "ICC COMMITTEE",
                        "IQAC COMMITTEE 2022-23",
                        "GRIEVANCE REDRESSEL COMMITTEE",
                        "ANTI RAGGING SQUAD",
                        "ANTI RAGGING COMMITTEE",
                      ].map((item, index) => (
                        <Link
                          href="#"
                          key={index}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100  transition-colors"
                        >
                          <Users className="h-4 w-4 text-slate-500" />
                          <span className="text-sm">{item}</span>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs> */}

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  AICTE Approvals
                </CardTitle>
                <CardDescription>Year-wise approval status</CardDescription>
              </CardHeader>
              <CardContent className="relative pb-12">
                <div className="grid grid-cols-2 gap-2">
                  {recentYears.map((item) => (
                    <Link
                      href={item.link}
                      target="_blank"
                      key={item.year}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <Calendar className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-mainBlue font-medium">
                        AICTE {item.year}
                      </span>
                    </Link>
                  ))}
                  <div
                    className={`grid grid-cols-2 gap-2 col-span-2 transition-all duration-700 ease-in-out overflow-hidden ${
                      showOlder
                        ? "max-h-[2000px] opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-4"
                    }`}
                  >
                    {olderYears.map((item) => (
                      <Link
                        href={item.link}
                        target="_blank"
                        key={item.year}
                        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-all duration-300 ${
                          showOlder
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2"
                        }`}
                      >
                        <Calendar className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-mainBlue font-medium">
                          AICTE {item.year}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                {olderYears.length > 0 && (
                  <button
                    onClick={() => setShowOlder(!showOlder)}
                    className="absolute bottom-2 right-2 px-3 py-1.5 text-xs font-medium text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white rounded-lg transition-colors border border-blue-200"
                  >
                    {showOlder ? "Show Less" : "Show Older"}
                  </button>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-500" />
                  Accreditations
                </CardTitle>
                <CardDescription>Quality certifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {[
                    {
                      name: "Insurance Institute of India of Siva Sivani Inst.of Management Exemption Letter (2023)",
                      link: insurance2023,
                    },
                    {
                      name: "Insurance Institute of India of Siva Sivani Inst.of Management Exemption Letter (2021)",
                      link: insurance2021,
                    },
                    {
                      name: "Insurance Institute of India of Siva Sivani Inst.of Management (2016)",
                      link: insurance2016,
                    },
                    {
                      name: "AIU Equivalence Certificate",
                      link: aiuEquivalent,
                    },
                    {
                      name: "NAAC Accreditation",
                      link: naacAccreditation,
                    },
                    {
                      name: "NBA Accreditation",
                      link: nbaAccreditation,
                    },
                    {
                      name: "SAQS Accreditation",
                      link: saqsAccreditation,
                    },
                    {
                      name: "NIRF Ranking",
                      link: nirfAccreditation,
                    },
                  ].map((item, index) => (
                    <Link
                      href={item.link}
                      target="_blank"
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100  transition-colors"
                    >
                      <Shield className="h-4 min-w-4 text-red-500" />
                      <span className="text-sm text-mainBlue font-medium">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5 text-amber-500" />
                  Annual Audit Report
                </CardTitle>
                <CardDescription>Financial statements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    {
                      name: "SSIM Annual Accounts - 2021 - 22",
                      link: annualReport2022,
                    },
                    {
                      name: "SSIM Annual Accounts - 2020 - 21",
                      link: annualReport2021,
                    },
                    {
                      name: "SSIM Annual Accounts - 2019 - 20",
                      link: annualReport2020,
                    },
                  ].map((item, index) => (
                    <Link
                      href={item.link}
                      target="_blank"
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100  transition-colors"
                    >
                      <FileText className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-mainBlue font-medium">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Layers className="h-5 w-5 text-amber-500" />
                  AAB and BOG
                </CardTitle>
                <CardDescription>Meeting minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    {
                      name: "BOG JUNE 2025 MINUTES OF THE MEETING",
                      link: bogJune2025,
                    },
                    {
                      name: "BOG MARCH 2025 MINUTES OF THE MEETING",
                      link: bogMarch2025,
                    },
                    {
                      name: "BOG AUGUST 2024 MINUTES OF THE MEETING",
                      link: bogAug2024,
                    },
                    {
                      name: "BOG MAY 2023 MINUTES OF THE MEETING",
                      link: bogMay2023,
                    },
                    {
                      name: "BOG JULY 2022 MINUTES OF THE MEETING",
                      link: bogJuly2022,
                    },
                    {
                      name: "BOG AUG 2021 MINUTES OF THE MEETING",
                      link: bogAug2021,
                    },
                    {
                      name: "BOG MINUTES OF THE MEETING JUNE 2020",
                      link: bogJune2002,
                    },
                    {
                      name: "BOG MINUTES OF THE MEETING JAN 2020",
                      link: bogJan2020,
                    },
                    {
                      name: "BOG MINUTES OF THE MEETING JULY 2019",
                      link: bogJuly2019,
                    },
                  ].map((item, index) => (
                    <Link
                      href={item.link}
                      target="_blank"
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <FileText className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-mainBlue font-medium">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-amber-500" />
                  IQAC Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    {
                      name: "SSR 21-22",
                      link: sss2122,
                    },
                    {
                      name: "AQAR 20-21",
                      link: aqar2021,
                    },
                  ].map((item, index) => (
                    <Link
                      href={item.link}
                      target="_blank"
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <FileText className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-mainBlue font-medium">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Info className="h-5 w-5 text-amber-500" />
                  Mandatory Disclosure 2025-26
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  href={mandatoryDisclosure2025}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full p-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  <FileText className="h-5 w-5 text-red-500" />
                  <span className="font-medium text-mainBlue">
                    View Disclosure Document
                  </span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
