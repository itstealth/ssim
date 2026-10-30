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
import Heading from "@/components/wrappers/Heading";
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
  ListTodo,
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
import { ArrowRight } from "lucide-react";
// import SEO from "../Seo";

// Navigation Data
const navigationSections = [
  { id: "about-conference", label: "ABOUT THE CONFERENCE", icon: Users },
  { id: "research-forum", label: "PRE-CONFERENCE RESEARCH FORUM", icon: BookOpen },
  { id: "conference-themes", label: "CONFERENCE THEMES", icon: ListTodo },
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

// Conference content sections
const AboutConference2027 = () => (
  <div className="space-y-5 text-gray-700">
    <h3 className="font-bold text-mainBlue text-2xl">{conferenceTitle}</h3>
    <p>Join researchers, academicians, practitioners, institutions, and policy leaders to explore how artificial intelligence is reshaping business and management. The conference focuses on innovation, sustainability, and human-centric transformation.</p>
    <div className="rounded-lg border bg-purple-50 p-4"><p className="font-semibold text-mainBlue">International Conference</p><p>11–12 February 2027</p></div>
    <p><strong>Organized by:</strong> Siva Sivani Institute of Management (SSIM), Secunderabad<br /><strong>In collaboration with:</strong> Association of Indian Management Schools (AIMS)</p>
  </div>
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
    <div className="space-y-6">
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-5 sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">11 February 2027</p>
        <h3 className="mt-2 text-2xl font-bold leading-snug text-mainBlue">
          “AI-Enabled Research Excellence: From Discovery to High-Impact Publication”
        </h3>
        <p className="mt-4 leading-7 text-gray-700">
          A focused research forum on AI-enabled research discovery, research design, advanced research tools, scholarly writing, research integrity, and strategies for developing high-quality research for reputed academic publications.
        </p>
      </div>
      <div>
        <h4 className="mb-3 font-semibold text-mainBlue">Forum topics</h4>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span key={topic} className="rounded-full border border-purple-200 bg-white px-3 py-2 text-sm text-gray-700">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ConferenceThemes2027 = () => {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="font-bold text-mainBlue text-2xl">Conference Themes</h3>
        <p className="mt-2 text-gray-700">Fourteen areas invite interdisciplinary perspectives on business, management, technology, and society.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {conferenceThemes.map((theme) => (
          <article key={theme.number} className="rounded-xl border border-purple-100 bg-white p-5 shadow-sm">
            <p className="font-semibold text-purple-700">{theme.number}</p>
            <h4 className="mt-2 font-bold leading-snug text-mainBlue">{theme.title}</h4>
            <ul className="mt-4 flex flex-wrap gap-2">
              {theme.topics.map((topic) => (
                <li key={topic} className="rounded-full bg-purple-50 px-2.5 py-1.5 text-xs text-gray-700">{topic}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};

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
  const [activeSection, setActiveSection] = useState("about-conference");

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 sm:py-16">
        {/* Main Content */}
        <div className="container max-w-7xl mx-auto px-4 py-8 sm:pb-0">
          <Heading
            title={conferenceTitle}
            className="text-red-600 sm:!text-4xl"
          />
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
                          case "about-conference": return <AboutConference2027 />;
                          case "research-forum": return <PreConferenceResearchForum2027 />;
                          case "conference-themes": return <ConferenceThemes2027 />;
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
    </>
  );
};

export default Conferences;
