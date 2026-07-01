"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BoardOfGovernors() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Smt. Arathy Sampathy",
      role: "Chairman",
      designation: "President, S.P. Sampathy's Siva Sivani Educational Society",
      description: "Leading SSIM's vision and strategic direction with dedication and expertise.",
      image: "/about/bog/1. Smt. Aaraty Sampathy_1_11zon.webp",
    },
    {
      id: 2,
      name: "Dr. Sailesh Sampathy",
      role: "Vice Chairman",
      designation: "Vice President, S.P. Sampathy's Siva Sivani Educational Society",
      description: "Driving innovation and academic excellence at SSIM.",
      image: "/about/bog/2. Dr. Sailesh Sampathy_1_11zon.webp",
    },
    {
      id: 3,
      name: "Dr. S.V. Ramana Rao",
      role: "Member-Secretary (Ex officio)",
      designation: "Director, Siva Sivani Institute of Management",
      description: "Empowering minds, inspiring leadership, and building a legacy of excellence",
      image: "/about/bog/Ramana Rao.jpg",
    },
    {
      id: 4,
      name: "Smt. Deepika Sampathy",
      role: "Member",
      designation: "Associate Vice President, S.P. Sampathy's Siva Sivani Educational Society",
      description: "Bringing expertise in academic leadership and management education.",
      image: "/about/bog/4. Deepika-Sampathy_3_11zon.webp",
    },
    {
      id: 5,
      name: "Prof. M. Kamalakar",
      role: "Member",
      designation: "Executive Vice President, S.P. Sampathy's Siva Sivani Group of Institutions",
      description: "Providing strategic guidance for institutional growth.",
      image: "/about/bog/5. Kamalakar.jpg",
    },
    {
      id: 6,
      name: "Prof. Mohammad Masood Ahmed",
      role: "Member",
      designation: "Secretary, Hospital Chief Operating Officer (HCOO), Renova BIBI Cancer Hospital, Hyderabad",
      description: "Supporting SSIM's mission with industry expertise.",
      image: "/about/bog/6. Masood_2_11zon.webp",
    },
    {
      id: 7,
      name: "Dr. Vipul Singh",
      role: "Member",
      designation: "People Director & HR Head, Lloyds Technology Centre",
      description: "Contributing to SSIM's continued success and development.",
      image: "/about/BoardOfGoverners/vipulsingh.jpg",
    },
    {
      id: 8,
      name: "Prof. Ravi Kumar Jain",
      role: "Member",
      designation: "Vice Chancellor, IILM University, Gurugram",
      description: "Transforming potential into performance through purposeful education",
      image: "/about/bog/8. Ravi Kumar_3_11zon.webp",
    },
    {
      id: 9,
      name: "Dr. Harivansh Chaturvedi",
      role: "Special Invitee",
      designation: "Director General, IILM, New Delhi",
      description: "Guiding progress through experience, insight, and strategic foresight",
      image: "/about/bog/9. Dr. Harivansh Chaturvedi_4_11zon.webp",
    },
    {
      id: 10,
      name: "Dr. Jagathy Raj V.P.",
      role: "Nominee of the AICTE",
      designation: "Vice Chancellor, Sreenarayanaguru Open University, Kerala",
      description: "Leading with vision, serving with integrity, and striving for excellence",
      image: "/about/bog/10. Dr. Jagathy Raj V.P._5_11zon.webp",
    },
    {
      id: 11,
      name: "Dr. C. Srinath",
      role: "Nominee of the State Government",
      designation: "Regional Joint Director, Commissioner of Technical Education, Hyderabad",
      description: "Supporting the institution's growth through good governance and effective leadership",
      image: "/about/bog/11. Dr. C. Srinath_5_11zon.webp",
    },
    {
      id: 12,
      name: "DR. NRKS Chakravarthy",
      role: "Member",
      designation: "Deputy Director, SSIM",
      description: "Contributing valuable insights to SSIM's governance and development.",
      image: "/about/bog/12. Mr. N.R.K.S. Chakravarthy.jpg",
    },
    {
      id: 13,
      name: "Prof. S.F. Chandrasekhar",
      role: "Member",
      designation: "Professor & Area Chair – HR and Strategy, SSIM",
      description: "Guiding academic and administrative excellence.",
      image: "/about/bog/13. Dr. S.F. Chandra Sekhar.jpg",
    },
    {
      id: 14,
      name: "Prof. K.S. Harish",
      role: "Member",
      designation: "Professor & Area Chair – Data Science, SSIM",
      description: "Fostering innovation in management education.",
      image: "/about/bog/14. Dr. K.S. Harish.jpg",
    },
    {
      id: 15,
      name: "Dr. Pavan Patel",
      role: "Member",
      designation: "Professor & Program Chair – PGDM",
      description: "Building future-ready professionals through quality education.",
      image: "/about/bog/15. Dr. Pavan Patel.jpg",
    },
    {
      id: 16,
      name: "Prof. V. Jayalakshmi",
      role: "Member",
      designation: "Professor & Area Chair – Finance & Accounting, SSIM",
      description: "Promoting excellence in teaching and research.",
      image: "/about/bog/16. Dr. V. Jayalakshmi.jpg",
    },
    {
      id: 17,
      name: "Prof. V. Annapurna",
      role: "Member",
      designation: "Professor & Program Chair – FPM, SSIM",
      description: "Building a culture of innovation, collaboration, and success.",
      image: "/about/bog/17. Dr. V. Annapurna.jpg",
    },
    {
      id: 18,
      name: "Prof. N.C. Rajyalakshmi",
      role: "Member",
      designation: "Professor & PGP-Chair, SSIM",
      description: "Together, shaping futures and creating lasting value.",
      image: "/about/bog/18. Rajyalakshmi.jpg",
    },
    {
      id: 19,
      name: "Dr. T. Thirumal Reddy",
      role: "Member",
      designation: "Coordinator-IQAC & i/c. Area Chair – Marketing, SSIM",
      description: "Supporting institutional development and growth.",
      image: "/about/bog/19. Dr. T. Thirumal Reddy.jpg",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-mainBlue mb-4 tracking-tight">
          Board Of Governers
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
                className="w-full h-full object-cover object-top"
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
  );
}
