import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  BrainCircuit,
  Globe2,
  Handshake,
  Laptop,
  Lightbulb,
  Mic,
  Mountain,
  PlayCircle,
  Sparkles,
  Users,
} from "lucide-react";

const pillars = [
  "Knowledge acquisition",
  "Skill enhancement",
  "Critical thinking",
  "Social responsibility",
  "Industry readiness",
];

const nptelResources = [
  {
    topic: "Entrepreneurship — Introductory video",
    url: "https://nptel.ac.in/courses/110/106/110106141/",
  },
  {
    topic: "Financial Accounting",
    url: "https://nptel.ac.in/courses/110/101/110101131/",
  },
  {
    topic: "Introduction to Cost Accounting",
    url: "https://nptel.ac.in/courses/110/101/110101132/",
  },
  {
    topic: "Financial Derivatives and Risk Management",
    url: "https://nptel.ac.in/courses/110/107/110107128/",
  },
  {
    topic: "Introduction to Financial System",
    url: "https://nptel.ac.in/courses/110/105/110105121/",
  },
  {
    topic: "Principles of Human Resource Management",
    url: "https://nptel.ac.in/courses/110/105/110105069/",
  },
  {
    topic: "Marketing Management – I",
    url: "https://nptel.ac.in/courses/110/104/110104068/",
  },
  {
    topic: "Marketing Management – II",
    url: "https://nptel.ac.in/courses/110/105/110105121/",
  },
  {
    topic: "Organizational Behaviour",
    url: "https://nptel.ac.in/courses/110/105/110105033/",
  },
  {
    topic: "Total Quality Management - I",
    url: "https://nptel.ac.in/courses/110/104/110104080/",
  },
  {
    topic: "Security Analysis and Portfolio Management",
    url: "https://nptel.ac.in/courses/110/105/110105035/",
  },
];

function Section({ icon: Icon, eyebrow, title, children }) {
  return (
    <section className="scroll-mt-24">
      {/* The icon sits inline with the eyebrow rather than in a left gutter, so
          the heading starts on the same line as the prose below it. */}
      <div className="mb-6">
        {eyebrow ? (
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600">
            <Icon className="h-4 w-4" />
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {title}
        </h2>
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function Prose({ children }) {
  return (
    <p className="text-gray-700 leading-relaxed text-base">{children}</p>
  );
}

function Bullets({ items, title }) {
  return (
    <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-6">
      {title ? (
        <h3 className="text-base font-semibold text-gray-900 mb-3">{title}</h3>
      ) : null}
      {/* Two columns only once there are enough items to fill them; below that
          a second column just leaves an orphan stranded on its own. */}
      <ul className={`grid gap-2 ${items.length >= 4 ? "sm:grid-cols-2" : ""}`}>
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-gray-700">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Several source images are panorama strips or portrait graphics. Cropping those
// to a fixed landscape tile loses most of the picture, so each image can opt into
// `full` (span the whole row) and `fit: "contain"` (letterbox instead of crop).
function Gallery({ images, caption }) {
  const tiles = images.filter((image) => !image.full);
  const gridCols =
    tiles.length <= 1
      ? "grid-cols-1"
      : tiles.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <figure className="space-y-3">
      <div className={`grid gap-4 ${gridCols}`}>
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className={[
              "rounded-xl border border-gray-200 shadow-sm bg-gray-50",
              // A contained image keeps its own width and centres, instead of
              // being stretched across the row with dead space either side.
              image.full
                ? "col-span-full mx-auto w-auto max-w-full max-h-96 object-contain"
                : "w-full h-56 sm:h-60",
              image.full
                ? ""
                : image.fit === "contain"
                  ? "object-contain p-2"
                  : "object-cover",
            ]
              .filter(Boolean)
              .join(" ")}
          />
        ))}
      </div>
      {caption ? (
        <figcaption className="text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function FacultyInitiatives() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        {/* The banner above already shows the page title twice (hero and
            breadcrumb), so the h1 is kept for document structure but sized as
            a standfirst rather than repeating it a third time at display size. */}
        <header className="text-center space-y-3">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Faculty Initiatives on Teaching &amp; Learning
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A student-centric, outcome-based and blended teaching-learning
            approach aligned with NAAC Criterion II
          </p>
        </header>

        {/* Overview */}
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Sparkles className="h-6 w-6" />
              Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <Prose>
              Siva Sivani Institute of Management (SSIM) adopts a
              student-centric, outcome-based and blended teaching-learning
              approach aligned with NAAC Criterion II. Faculty continuously
              integrate innovative pedagogy, ICT tools, experiential learning
              and global exposure to ensure holistic student development.
            </Prose>
            <div className="flex flex-wrap gap-2">
              {pillars.map((pillar) => (
                <Badge
                  key={pillar}
                  className="text-sm px-4 py-2 bg-purple-100 hover:bg-purple-100 text-purple-800 font-medium"
                >
                  {pillar}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ICT */}
        <Section
          icon={Laptop}
          eyebrow="Digital pedagogy"
          title="ICT-Enabled Teaching and Digital Learning"
        >
          <Prose>
            SSIM classrooms integrate ICT-enabled teaching and digital learning
            practices to enhance the quality of education. Faculty members
            utilise Learning Management Systems (LMS), smart classrooms and
            digital collaboration tools to deliver course content, facilitate
            discussions and conduct continuous assessments. E-resources such as
            online case repositories, simulation platforms, video lectures and
            MOOCs are incorporated into the curriculum to promote self-directed
            and blended learning. Online quizzes and interactive platforms are
            used to track student progress.
          </Prose>
          <Prose>
            This ICT integration improves accessibility and engagement, and
            equips students with the digital competencies essential for an
            evolving industry landscape.
          </Prose>
          <Bullets
            title="Tools and methods in regular use"
            items={[
              "PowerPoint presentations",
              "Video-based learning",
              "Recorded lectures",
              "Online platforms (SWAYAM, MOOCs, YouTube, Podcasts)",
            ]}
          />
          <Gallery
            caption="ICT-enabled classroom sessions in progress"
            images={[
              {
                src: "/faculty-initiatives/ict-classroom-1.webp",
                alt: "Student presenting with a smart display during an ICT-enabled classroom session at SSIM",
              },
              {
                src: "/faculty-initiatives/ict-classroom-2.webp",
                alt: "Faculty addressing students in an ICT-enabled auditorium session at SSIM",
              },
            ]}
          />
        </Section>

        {/* Experiential learning */}
        <Section
          icon={Handshake}
          eyebrow="Learning by doing"
          title="Experiential Learning and Industry Interface"
        >
          <Prose>
            The institute emphasises learning by doing through corporate
            interviews, industry interaction, field visits and business
            simulations. Students gain exposure to real-world business
            environments, enhancing their practical understanding and analytical
            skills.
          </Prose>
          <Prose>
            From Term 01, the programme integrates structured experiential
            learning to ensure outcome-based education. Students are engaged in
            simulation-based exercises, role-plays, case analyses and
            collaborative projects that mirror real-world managerial contexts.
            Mock interviews, business communication labs, group problem-solving
            tasks and field-based assignments are systematically mapped to Course
            Outcomes (COs) and Programme Outcomes (POs), with defined rubrics for
            assessment. Reflective learning is emphasised through journals and
            feedback sessions, enabling students to critically evaluate their
            performance and learning progression.
          </Prose>
          <Bullets
            title="Key learning outcomes"
            items={[
              "Professional communication skills",
              "Teamwork and interpersonal effectiveness",
              "Critical thinking",
              "Decision-making in uncertain environments",
            ]}
          />
          <Gallery
            caption="SSIM students during experiential learning and industry visits"
            images={[
              {
                src: "/faculty-initiatives/experiential-learning-1.webp",
                full: true,
                alt: "SSIM students on an industry visit to a manufacturing unit in Hyderabad",
              },
              {
                src: "/faculty-initiatives/experiential-learning-2.webp",
                alt: "SSIM students and faculty on a field visit inside a production facility",
              },
            ]}
          />
        </Section>

        {/* Communication */}
        <Section
          icon={Mic}
          eyebrow="Eclectic pedagogy"
          title="Communication and Soft Skills Development"
        >
          <Prose>
            SSIM adopts an eclectic pedagogy to make the teaching and learning
            process more effective and engaging. The Communication Department
            uses innovative methods such as role plays, corporate interviews and
            video resumes, alongside JAM sessions, group discussions, mock
            interviews and mock meetings.
          </Prose>
          <Bullets
            title="Students are also encouraged to"
            items={[
              "Maintain professional profiles on LinkedIn",
              "Write blogs on contemporary issues",
              "Engage in digital discussions",
              "Build awareness of cyber fraud on social platforms",
            ]}
          />
          <Prose>
            The department prepares students for internships and placements by
            enhancing their soft skills; keeps learning in communication relevant
            to the dynamics of societal change; and prepares students to be
            adaptive, empathetic, assertive and smart communicators in a world
            where AI manages much of routine communication. These initiatives
            develop confidence, articulation and employability skills.
          </Prose>
          <Gallery
            caption="SSIM students conducting a corporate interview"
            images={[
              {
                src: "/faculty-initiatives/corporate-interview-2.webp",
                alt: "SSIM student interviewing a corporate professional as part of the communication course",
              },
            ]}
          />

          <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Role Play</h3>
            <Prose>
              Role play is a structured experiential learning activity
              integrated into the curriculum to simulate real-world business and
              communication scenarios. Students participate in negotiations,
              client interactions, group discussions and conflict resolution
              exercises, applying theoretical concepts in practice. These
              activities are evaluated through predefined rubrics focusing on
              communication effectiveness, teamwork, problem-solving and
              adaptability.
            </Prose>
            <Gallery
              caption="SSIM students conducting a role play"
              images={[
                {
                  src: "/faculty-initiatives/role-play-1.webp",
                full: true,
                  alt: "SSIM students presenting a role play on geoeconomic risks in a classroom",
                },
                {
                  src: "/faculty-initiatives/role-play-2.webp",
                  alt: "Group of SSIM students performing a role play exercise before the class",
                },
              ]}
            />
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Mock Personal Interviews (Mock PI)
            </h3>
            <Prose>
              Mock Personal Interviews are conducted as part of career readiness
              and industry interface initiatives. Students undergo simulated
              interview sessions that replicate real corporate hiring
              environments, followed by structured feedback from faculty and
              industry experts. Evaluation focuses on communication clarity,
              confidence, domain knowledge and professional etiquette, improving
              interview preparedness and employability outcomes.
            </Prose>
            <Gallery
              caption="An SSIM student attending a mock interview"
              images={[
                {
                  src: "/faculty-initiatives/mock-interview-1.webp",
                  alt: "SSIM student attending a mock personal interview with a faculty panel",
                },
              ]}
            />
          </div>
        </Section>

        {/* Global */}
        <Section
          icon={Globe2}
          eyebrow="Global competence"
          title="Global and Cross-Cultural Learning"
        >
          <Bullets
            title="To enhance global competence, students engage in"
            items={[
              "Interaction with international students and professionals",
              "Cross-cultural communication exercises",
              "Analysis of global workplace practices",
            ]}
          />
          <Prose>
            Students are trained in cross-cultural and intercultural
            communication. To apply these concepts, they network directly with
            international students and working professionals, gather information
            on cross-cultural training in other countries, learn the art of
            observation, and understand cultural differences. They become
            empathetic listeners, gathering effective clues towards resolving
            cross-cultural conflicts, and thought leaders able to express
            informed views on global issues.
          </Prose>
          <Gallery
            caption="Dubai immersion programme"
            images={[
              {
                src: "/faculty-initiatives/dubai-immersion-1.webp",
                alt: "SSIM students at Sharjah Research Technology and Innovation Park during the Dubai immersion",
              },
              {
                src: "/faculty-initiatives/dubai-immersion-2.webp",
                alt: "SSIM students receiving certificates at Ureka Global Innovation Hub during the Dubai immersion",
              },
            ]}
          />
          <Gallery
            caption="International guest talk by Prof. Ross O'Brien, Program Director, Center for Business as Mission, Dallas Baptist University, USA"
            images={[
              {
                src: "/faculty-initiatives/international-guest-talk-1.webp",
                full: true,
                alt: "Prof. Ross O'Brien addressing SSIM students and faculty during an international guest talk",
              },
            ]}
          />
        </Section>

        {/* Simulation */}
        <Section
          icon={Users}
          eyebrow="Simulation-based learning"
          title="Mock United Nations and Business Simulations"
        >
          <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Mock United Nations (MUN)
            </h3>
            <Prose>
              Students play the role of global leaders and social activists and
              debate issues relevant to a country or to the wider global
              scenario. Through these sessions they are exposed to sustainability
              and the United Nations Sustainable Development Goals, and to a
              country&apos;s participation and performance against those goals.
              This helps them argue their points and make justified claims
              towards a hypothetical UN fund, learning to negotiate, persuade and
              communicate assertively.
            </Prose>
            <Bullets
              items={[
                "Negotiation skills",
                "Critical thinking",
                "Policy understanding",
              ]}
            />
            <Gallery
              caption="Mock UN session at SSIM"
              images={[
                {
                  src: "/faculty-initiatives/mock-un-1.webp",
                full: true,
                  alt: "SSIM students seated behind country placards during a Mock United Nations session",
                },
                {
                  src: "/faculty-initiatives/mock-un-2.webp",
                  alt: "SSIM students and faculty at a Mock United Nations session",
                },
              ]}
            />
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Business Simulation Workshops
            </h3>
            <Bullets
              title="Students participate in"
              items={[
                "Idea generation",
                "Concept testing",
                "Business plan development",
              ]}
            />
            <Prose>
              These workshops strengthen entrepreneurial and strategic skills.
            </Prose>
            <Gallery
              caption="Business simulation and club activity"
              images={[
                {
                  src: "/faculty-initiatives/business-simulation-2.webp",
                fit: "contain",
                  alt: "Toastmasters leaderboard showing weekly top performers at SSIM",
                },
              ]}
            />
          </div>
        </Section>

        {/* Social engagement */}
        <Section
          icon={Handshake}
          eyebrow="Community-based learning"
          title="Social Engagement and Community-Based Learning"
        >
          <Prose>
            As part of the persuasion exercise, students form small groups and
            approach social change agents and NGOs to take their causes forward.
            They must persuade the NGO to engage with the cause beyond a
            photo-opportunity, then listen critically to understand its
            requirements. Students plan their approach, identify target groups
            and mobilise both funds and commodities — without drawing on their
            own pocket money or approaching family, friends and acquaintances.
          </Prose>
          <Bullets
            title="Students participate in"
            items={[
              "NGO collaboration and persuasion exercises",
              "Resource mobilisation projects",
              "Community visits, including to orphanages",
            ]}
          />
          <Bullets
            title="This develops"
            items={[
              "Leadership",
              "Social responsibility",
              "Project management skills",
            ]}
          />
          <Gallery
            caption="Students' visits to orphanages and care homes"
            images={[
              {
                src: "/faculty-initiatives/orphanage-visit-1.webp",
                full: true,
                alt: "SSIM students distributing supplies during visits to an orphanage and a care home",
              },
              {
                src: "/faculty-initiatives/orphanage-visit-2.webp",
                full: true,
                alt: "SSIM students with NGO partners during community outreach visits",
              },
            ]}
          />
          <Gallery
            caption="Community engagement and NGO activity"
            images={[
              {
                src: "/faculty-initiatives/community-ngo-1.webp",
                full: true,
                alt: "SSIM students and faculty with schoolchildren at a Mandal Parishad primary school",
              },
              {
                src: "/faculty-initiatives/community-ngo-2.webp",
                full: true,
                alt: "SSIM students during an NGO community engagement activity",
              },
              {
                src: "/faculty-initiatives/community-ngo-3.webp",
                alt: "SSIM students conducting a drawing activity with children at a community centre",
              },
            ]}
          />
        </Section>

        {/* Creative and reflective */}
        <Section
          icon={Lightbulb}
          eyebrow="Creative and reflective practice"
          title="Emulating Leaders and the Art of Storytelling"
        >
          <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Emulating Leaders
            </h3>
            <Prose>
              Students analyse leadership communication styles to enhance
              critical thinking and self-development. They observe leaders
              critically, emulate their communication styles and patterns,
              evaluate the strengths and weaknesses of those styles, and refine
              their own communication to become better leaders. This improves
              logical reasoning, critical analysis and self-development, leading
              towards continuous lifelong learning.
            </Prose>
            <Gallery
              caption="Students emulating leaders through presentations and performances"
              images={[
                {
                  src: "/faculty-initiatives/emulating-leaders-1.webp",
                fit: "contain",
                  alt: "SSIM student presenting on a business leader's commitment to education",
                },
                {
                  src: "/faculty-initiatives/emulating-leaders-2.webp",
                fit: "contain",
                  alt: "SSIM student recreating a leader's portrait as part of the emulating leaders exercise",
                },
                {
                  src: "/faculty-initiatives/emulating-leaders-4.webp",
                full: true,
                  alt: "SSIM student delivering a presentation on a historical leader",
                },
              ]}
            />
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              The Art of Storytelling
            </h3>
            <Prose>
              Students develop stories based on concepts learned during their
              management courses and deliver them to teach a general audience and
              build social awareness on contemporary issues such as
              cryptocurrency, risk management, insurance, fintech and digital
              analytics. They learn story creation, narration and delivery, the
              use of technical tools to produce video stories, and how to explain
              difficult management concepts to society at large.
            </Prose>
            <Bullets
              title="This improves"
              items={["Creativity", "Communication", "Concept retention"]}
            />
          </div>
        </Section>

        {/* OBT */}
        <Section
          icon={Mountain}
          eyebrow="Outbound training"
          title="Outbound Training (OBT)"
        >
          <Bullets
            title="Outbound Training programmes provide experiential learning through"
            items={[
              "Team-building activities",
              "Problem-solving tasks",
              "Physical and group challenges",
            ]}
          />
          <Bullets
            title="These enhance"
            items={["Leadership", "Collaboration", "Decision-making skills"]}
          />
          <Gallery
            caption="Outbound training activities"
            images={[
              {
                src: "/faculty-initiatives/outbound-training-1.webp",
                alt: "SSIM students taking part in an outdoor team-building activity during outbound training",
              },
              {
                src: "/faculty-initiatives/outbound-training-2.webp",
                alt: "SSIM students working through a group problem-solving task during outbound training",
              },
              {
                src: "/faculty-initiatives/outbound-training-3.webp",
                alt: "SSIM students in a group challenge at the outbound training campsite",
              },
            ]}
          />
        </Section>

        {/* Innovative instructional methods */}
        <Section
          icon={PlayCircle}
          eyebrow="Innovative instruction"
          title="Innovative Instructional Methods"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                YouTube video lectures
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Some faculty members record their classroom lectures and make
                them available to students, who can replay them whenever a
                concept is not fully clear.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Subject blogs
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Faculty members maintain their own blogs and post the latest
                developments relating to their topics that are not normally
                covered in a structured syllabus, which interested students can
                use to extend their knowledge.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Debates
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                As part of the managerial communication course, students debate
                management and business topics — developing critical thinking,
                the ability to communicate ideas effectively, and leadership
                through building persuasive arguments as a team.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Other methods
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Faculty also use role plays, stress management exercises, video
                resume creation, podcasts and digital lectures.
              </p>
            </div>
          </div>
          <Gallery
            caption="Faculty-led video and podcast recording"
            images={[
              {
                src: "/faculty-initiatives/innovative-methods-1.webp",
                alt: "SSIM podcast recording session between an interviewer and a guest",
              },
            ]}
          />
        </Section>

        {/* NPTEL */}
        <Section
          icon={BookOpen}
          eyebrow="Online learning resources"
          title="Integration of Online Learning Resources (NPTEL)"
        >
          <Prose>
            NPTEL (National Programme on Technology Enhanced Learning) videos on
            management are used in the classroom — SSIM is an authorised chapter
            representing IIT Roorkee, and several faculty members screen and
            reference NPTEL content in their courses.
          </Prose>
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">
                  Digital learning resources on NPTEL used at SSIM
                </caption>
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold w-16">
                      Sl. No
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Topic
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {nptelResources.map((resource, index) => (
                    <tr
                      key={resource.topic}
                      className="border-t border-gray-100 even:bg-gray-50/60"
                    >
                      <td className="px-4 py-3 text-gray-500">{index + 1}</td>
                      <td className="px-4 py-3 text-gray-800">
                        {resource.topic}
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 underline underline-offset-2 break-all"
                        >
                          View on NPTEL
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Bullets
            title="Courses also delivered through NPTEL and SWAYAM"
            items={[
              "Entrepreneurship — NPTEL",
              "Financial Accounting — NPTEL",
              "HR Management — SWAYAM",
              "Marketing Management — NPTEL",
              "Organizational Behaviour — NPTEL",
            ]}
          />
        </Section>

        {/* Closing */}
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center gap-2">
              <BrainCircuit className="h-6 w-6" />
              An Outcome-Oriented Ecosystem
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <Prose>
              SSIM&apos;s teaching-learning practices reflect a comprehensive,
              innovative and outcome-oriented ecosystem aligned with NAAC
              standards. The integration of ICT tools, experiential learning,
              global exposure, communication training and social engagement
              ensures the development of competent, confident and socially
              responsible management professionals.
            </Prose>
            <div className="flex flex-wrap gap-2">
              {[
                "ICT tools",
                "Experiential learning",
                "Global exposure",
                "Communication training",
                "Social engagement",
              ].map((item) => (
                <Badge
                  key={item}
                  className="text-sm px-4 py-2 bg-purple-100 hover:bg-purple-100 text-purple-800 font-medium"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
