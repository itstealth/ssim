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
      designation: "Vice President & Dy. Chief Executive, SSGI",
      description:
        "Leading SSIM's Board of Studies with strategic vision and academic excellence.",
      image: SaileshSampathy,
    },
    {
      id: 2,
      name: "Dr. M. Kamalakar",
      role: "Member",
      designation: "Executive Vice President, SSGI",
      description:
        "Contributing expertise in academic planning and curriculum development.",
      image: Kamalakar,
    },
    {
      id: 3,
      name: "Dr. S.V. Ramana Rao",
      role: "Member-Secretary",
      designation: "Director, SSIM",
      description:
        "Providing valuable insights for academic growth and innovation.",
      image: Ramana,
    },
    {
      id: 4,
      name: "Prof. S. Abhirama Krishna",
      role: "Member",
      designation: "Director General, Badruka Group of Institutions, Hyderabad.",
      description:
        "Guiding curriculum enhancement and academic standards.",
      image: AbhiramaKrishna,
    },
    {
      id: 5,
      name: "Prof. V. Venkaiah",
      role: "Member",
      designation: "Former Vice Chancellor, Krishna University, AP",
      description:
        "Supporting academic excellence and program development.",
      image: Venkaiah,
    },
    {
      id: 6,
      name: "Sri. Srikanth Surampudi",
      role: "Member",
      designation: "General Manager HR & Regional Head HR, TCS, Hyderabad.",
      description:
        "Contributing to academic policy and quality assurance.",
      image: SrikanthSurampudi,
    },
    {
      id: 7,
      name: "Dr. Shailesh Kumar",
      role: "Member",
      designation: "Chief Data Scientist, CoE AI/ML, Jio",
      description:
        "Contributing to academic excellence and management education.",
      image: ShaileshKumar,
    },
    {
      id: 8,
      name: "Sri. G. Muralikrishna",
      role: "Member",
      designation: "Director, G V Mall, Khammam.",
      description:
        "Advancing research initiatives and academic partnerships.",
      image: Muralikrishna,
    },
    {
      id: 9,
      name: "Dr. Kishore NK",
      role: "Member",
      designation: "Chief Financial Officer, BEKEM Infra Projects Pvt. Ltd, Hyderabad.",
      description:
        "Enhancing academic programs and student outcomes.",
      image: KishoreNK,
    },
    {
      id: 10,
      name: "Sri. Ravi Tanniru",
      role: "Member",
      designation: "Founder & CEO, Profintech Technologies, Hyderabad",
      description:
        "Supporting industry-academia collaboration.",
      image: RaviTanniru,
    },
    {
      id: 11,
      name: "Dr. Durga Prasad M",
      role: "Member",
      designation: "Dean-Administration & Professor of Finance, T A Pai Management Institute (TAPMI), Manipal.",
      description:
        "Advancing research and academic standards.",
      image: DurgaPrasadM,
    },
    {
      id: 12,
      name: "Dr. Anand S Upadhyaya",
      role: "Member",
      designation: "Director of Postgraduate Studies, Research and Innovation College of Banking & Financial Studies, Muscat, Sultanate of Oman.",
      description:
        "Contributing to curriculum development and academic planning.",
      image: AnandSUpadhyaya,
    },
    {
      id: 13,
      name: "Dr. Srinivas Gunta",
      role: "Member",
      designation: "Assistant Professor, IIM-Indore.",
      description:
        "Driving academic excellence and innovation.",
      image: SrinivasGunta,
    },
    {
      id: 14,
      name: "Dr. S. Anand Reddy",
      role: "Member",
      designation: "GM-L&D, Hetero Labs Limited, Hyderabad.",
      description:
        "Supporting program development and quality assurance.",
      image: SAnandReddy,
    },
    {
      id: 15,
      name: "Lakshmi Pathi Itha",
      role: "Member",
      designation: "Vice President-HR, Prodapt",
      description:
        "Strengthening industry-academia collaboration and talent development.",
      image: LakshmiPathiItha,
    },
    {
      id: 16,
      name: "Dr. V.G. Chari",
      role: "Member",
      designation: "Formerly Assistant Vice President, SSGI",
      description:
        "Supporting academic planning and institutional development.",
      image: VGChari,
    },
    {
      id: 17,
      name: "Sri Praveen Nagamalla",
      role: "Member",
      designation: "Founder & CEO, CRED FOODS (Fruitoholic)",
      description:
        "Encouraging innovation and technology-driven learning.",
      image: PraveenNagamalla,
    },
    {
      id: 18,
      name: "Sri Satyanarayana Vinjamoori",
      role: "Member",
      designation: "Industry Expert",
      description:
        "Strengthening analytical learning and research excellence.",
      image: SatyanarayanaVinjamoori,
    },
    {
      id: 19,
      name: "Sri Kadambala Balajee Rao",
      role: "Member",
      designation: "Senior Vice President - People Solutions, Lockton",
      description:
        "Promoting data-driven learning and industry-oriented education.",
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
                  {member.designation && (
                    <p className="text-sm text-gray-500 font-medium mt-0.5">{member.designation}</p>
                  )}
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
