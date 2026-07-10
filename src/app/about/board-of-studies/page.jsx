"use client";
import { motion } from "framer-motion";
import { useState } from "react";
// import SEO from "@/components/Seo";
const SaileshSampathy = "/about/BoardOfStudies/Dr_Sailesh_Sampathy.jpg";
const Kamalakar = "/about/BoardOfStudies/Dr_M_Kamalakar.jpg";
const Ramana = "/about/BoardOfStudies/Dr_S_V_Ramana_Rao.jpg";
const AbhiramaKrishna = "/about/BoardOfStudies/Prof_S_Abhirama_Krishna.jpg";
const Venkaiah = "/about/BoardOfStudies/Prof_V_Venkaiah.jpg";
const SrikanthSurampudi = "/about/BoardOfStudies/Sri_Srikanth_Surampudi.jpg";
const ShaileshKumar = "/about/BoardOfStudies/Dr_Shailesh_Kumar.jpg";
const Muralikrishna = "/about/BoardOfStudies/Sri_G_Muralikrishna.jpg";
const KishoreNK = "/about/BoardOfStudies/Dr_Kishore_NK.jpg";
const RaviTanniru = "/about/BoardOfStudies/Sri_Ravi_Tanniru.jpg";
const DurgaPrasadM = "/about/BoardOfStudies/Dr_Durga_Prasad_M.jpg";
const AnandSUpadhyaya = "/about/BoardOfStudies/1.-Dr.-Anand-S-Upadhyaya.jpg";
const SrinivasGunta = "/about/BoardOfStudies/Dr_Srinivas_Gunta.jpg";
const SAnandReddy = "/about/BoardOfStudies/4.-Dr.-S.-Anand-Reddy.jpg";
const LakshmiPathiItha = "/about/BoardOfStudies/Sri_Lakshmi_Pathi_Itha.jpg";
const VGChari = "/about/BoardOfStudies/Dr_VG_Chari.jpg";
const PraveenNagamalla = "/about/BoardOfStudies/Sri_Praveen_Nagamalla.jpg";
const SatyanarayanaVinjamoori =
  "/about/BoardOfStudies/Sri_Satyanarayana_Vinjamoori.jpg";
const KadambalaBalajeeRao =
  "/about/BoardOfStudies/Sri_Kadambala_Balajee_Rao.jpg";

export default function BoardOfStudies() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sailesh Sampathy",
      role: "Chairman",
      description:
        "Vice President & Dy. Chief Executive, SSGI. Leading SSIM's Board of Studies with strategic vision and academic excellence.",
      image: SaileshSampathy,
    },
    {
      id: 2,
      name: "Dr. M. Kamalakar",
      role: "Member",
      description:
        "Executive Vice President, SSGI. Contributing expertise in academic planning and curriculum development.",
      image: Kamalakar,
    },
    {
      id: 3,
      name: "Dr. S.V. Ramana Rao",
      role: "Member-Secretary",
      description:
        "Director, SSIM. Providing valuable insights for academic growth and innovation.",
      image: Ramana,
    },
    {
      id: 4,
      name: "Prof. S. Abhirama Krishna",
      role: "Member",
      description:
        "Director General, Badruka Group of Institutions, Hyderabad. Guiding curriculum enhancement and academic standards.",
      image: AbhiramaKrishna,
    },
    {
      id: 5,
      name: "Prof. V. Venkaiah",
      role: "Member",
      description:
        "Former Vice Chancellor, Krishna University, AP. Supporting academic excellence and program development.",
      image: Venkaiah,
    },
    {
      id: 6,
      name: "Sri. Srikanth Surampudi",
      role: "Member",
      description:
        "General Manager HR & Regional Head HR, TCS, Hyderabad. Connecting classroom learning with real-world industry practices.",
      image: SrikanthSurampudi,
    },
    {
      id: 7,
      name: "Dr. Shailesh Kumar",
      role: "Member",
      description:
        "Chief Data Scientist, CoE AI/ML, Jio. Bringing AI and Data Science expertise to strengthen management education.",
      image: ShaileshKumar,
    },
    {
      id: 8,
      name: "Sri. G. Muralikrishna",
      role: "Member",
      description:
        "Director, G V Mall, Khammam. Helping students to understand today's business and retail environment.",
      image: Muralikrishna,
    },
    {
      id: 9,
      name: "Dr. Kishore NK",
      role: "Member",
      description:
        "Chief Financial Officer, BEKEM Infra Projects Pvt. Ltd, Hyderabad. Bringing financial leadership and industry expertise to management education.",
      image: KishoreNK,
    },
    {
      id: 10,
      name: "Sri. Ravi Tanniru",
      role: "Member",
      description:
        "Founder & CEO, Profintech Technologies, Hyderabad. Bringing innovation and fintech expertise to management education.",
      image: RaviTanniru,
    },
    {
      id: 11,
      name: "Dr. Durga Prasad M",
      role: "Member",
      description:
        "Dean-Administration & Professor of Finance, T A Pai Management Institute (TAPMI), Manipal. Advancing research and academic standards.",
      image: DurgaPrasadM,
    },
    {
      id: 12,
      name: "Dr. Anand S Upadhyaya",
      role: "Member",
      description:
        "Director of Postgraduate Studies, Research and Innovation College of Banking & Financial Studies, Muscat, Sultanate of Oman. Contributing to curriculum development and academic planning.",
      image: AnandSUpadhyaya,
    },
    {
      id: 13,
      name: "Dr. Srinivas Gunta",
      role: "Member",
      description:
        "Assistant Professor, IIM-Indore. Contributing valuable insights for continuous academic improvement.",
      image: SrinivasGunta,
    },
    {
      id: 14,
      name: "Dr. S. Anand Reddy",
      role: "Member",
      description:
        "GM-L&D, Hetero Labs Limited, Hyderabad. Guiding students with real-world expertise in learning and leadership development.",
      image: SAnandReddy,
    },
    {
      id: 15,
      name: "Sri. Lakshmi Pathi Itha",
      role: "Member",
      description:
        "Vice President-HR, Prodapt. Promoting talent development, leadership skills, and industry-ready management education.",
      image: LakshmiPathiItha,
    },
    {
      id: 16,
      name: "Dr. V.G. Chari",
      role: "Member",
      description:
        "Formerly Assistant Vice President, SSGI. Supporting academic planning and institutional development.",
      image: VGChari,
    },
    {
      id: 17,
      name: "Sri. Praveen Nagamalla",
      role: "Member",
      description:
        "Founder & CEO, CRED FOODS (Fruitoholic). Promoting innovation and startup learning among students.",
      image: PraveenNagamalla,
    },
    {
      id: 18,
      name: "Sri. Satyanarayana Vinjamoori",
      role: "Member",
      description:
        "Industry Expert. Promoting analytical excellence and industry relevance in management education.",
      image: SatyanarayanaVinjamoori,
    },
    {
      id: 19,
      name: "Sri. Kadambala Balajee Rao",
      role: "Member",
      description:
        "Senior Vice President - People Solutions, Lockton. Supporting quality education through industry expertise and best practices.",
      image: KadambalaBalajeeRao,
    },
  ];

  return (
    <>
      {/* <SEO
        title="Board of Studies"
        description="Meet the Board of Studies at Siva Sivani Institute of Management (SSIM). Our board ensures the curriculum is relevant, rigorous, and industry-aligned."
        keywords="SSIM board of studies, academic curriculum, course development, business school academics"
        canonicalUrl="https://ssim.ac.in/about/board-of-studies"
      /> */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-mainBlue mb-4 tracking-tight">
            Board Of Studies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 sm:gap-8 gap-4 max-w-7xl mx-auto mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col items-center sm:flex-row gap-8 group p-4 rounded-lg bg-gray-100"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredMember(member.id)}
              onHoverEnd={() => setHoveredMember(null)}
            >
              <div className="relative w-48 h-48 flex-shrink-0 overflow-hidden rounded-lg">
                <motion.img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col text-center sm:text-left justify-center">
                <motion.div
                  initial={false}
                  animate={{ y: hoveredMember === member.id ? -2 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-zinc-900">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 mt-2 mb-4 leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
