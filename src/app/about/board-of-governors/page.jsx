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
      description: "Leading SSIM's vision and strategic direction with dedication and expertise.",
      image: "/about/bog/1. Smt. Aaraty Sampathy_1_11zon.webp",
    },
    {
      id: 2,
      name: "Dr. Sailesh Sampathy",
      role: "Vice Chairman",
      description: "Driving innovation and academic excellence at SSIM.",
      image: "/about/bog/2. Dr. Sailesh Sampathy_1_11zon.webp",
    },
    {
      id: 3,
      name: "Dr. S.V. Ramana Rao",
      role: "Member-Secretary (Ex officio)",
      description: "Empowering minds, inspiring leadership, and building a legacy of excellence",
      image: "/about/bog/3. Ramana Rao_2_11zon.webp",
    },
    {
      id: 4,
      name: "Smt. Deepika Sampathy",
      role: "Member",
      description: "Bringing expertise in academic leadership and management education.",
      image: "/about/bog/4. Deepika-Sampathy_3_11zon.webp",
    },
    {
      id: 5,
      name: "Prof. M. Kamalakar",
      role: "Member",
      description: "Providing strategic guidance for institutional growth.",
      image: "/about/bog/5. Kamalakar_4_11zon.webp",
    },
    {
      id: 6,
      name: "Prof. Mohammad Masood Ahmed",
      role: "Member",
      description: "Supporting SSIM's mission with industry expertise.",
      image: "/about/bog/6. Masood_2_11zon.webp",
    },
    {
      id: 7,
      name: "Dr. Vipul Singh",
      role: "Member",
      description: "Contributing to SSIM's continued success and development.",
      image: "/about/BoardOfGoverners/vipulsingh.jpg",
    },
    {
      id: 8,
      name: "Prof Ravi Kumar Jain",
      role: "Member",
      description: "Transforming potential into performance through purposeful education",
      image: "/about/bog/8. Ravi Kumar_3_11zon.webp",
    },
    {
      id: 9,
      name: "Dr. Harivansh Chaturvedi",
      role: "Special Invitee",
      description: "Guiding progress through experience, insight, and strategic foresight",
      image: "/about/bog/9. Dr. Harivansh Chaturvedi_4_11zon.webp",
    },
    {
      id: 10,
      name: "Dr. Jagathy Raj V.P.",
      role: "Nominee of the AICTE",
      description: "Leading with vision, serving with integrity, and striving for excellence",
      image: "/about/bog/10. Dr. Jagathy Raj V.P._5_11zon.webp",
    },
    {
      id: 11,
      name: "Dr. C. Srinath",
      role: "Nominee of the State Government",
      description: "Supporting the institution's growth through good governance and effective leadership",
      image: "/about/bog/11. Dr. C. Srinath_5_11zon.webp",
    },
    {
      id: 12,
      name: "DR. NRKS Chakravarthy",
      role: "Deputy Director, SSIM",
      description: "Contributing valuable insights to SSIM's governance and development.",
      image: "/about/bog/12. Mr. N.R.K.S. Chakravarthy_6_11zon.webp",
    },
    {
      id: 13,
      name: "Prof. S.F. Chandrasekhar",
      role: "Member",
      description: "Guiding academic and administrative excellence.",
      image: "/about/bog/13. Dr. S.F. Chandra Sekhar_7_11zon.webp",
    },
    {
      id: 14,
      name: "Prof. K.S. Harish",
      role: "Member",
      description: "Fostering innovation in management education.",
      image: "/about/bog/14. Dr. K.S. Harish_8_11zon.webp",
    },
    {
      id: 15,
      name: "Dr. Pavan Patel",
      role: "Member",
      description: "Building future-ready professionals through quality education.",
      image: "/about/bog/15. Dr. Pavan Patel_9_11zon.webp",
    },
    {
      id: 16,
      name: "Prof. V. Jayalakshmi",
      role: "Member",
      description: "Promoting excellence in teaching and research.",
      image: "/about/bog/16. Dr. V. Jayalakshmi_10_11zon.webp",
    },
    {
      id: 17,
      name: "Prof. V. Annapurna",
      role: "Member",
      description: "Building a culture of innovation, collaboration, and success.",
      image: "/about/bog/17. Dr. V. Annapurna_11_11zon.webp",
    },
    {
      id: 18,
      name: "Prof. N.C. Rajyalakshmi",
      role: "Member",
      description: "Together, shaping futures and creating lasting value.",
      image: "/about/bog/18. Rajyalakshmi_12_11zon.webp",
    },
    {
      id: 19,
      name: "Dr. T. Thirumal Reddy",
      role: "Member",
      description: "Supporting institutional development and growth.",
      image: "/about/bog/19. Dr. T. Thirumal Reddy_13_11zon.webp",
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
