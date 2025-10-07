"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
const saqs = "/about/SAQS-Accredited-Logo.jpg";
const aiu = "/about/aiu-header.png";
const naac = "/about/naac.png";
const nba = "/about/nba.png";
const III = "/about/III.png";
const aict = "/about/aicte.png";

const ServiceCard = ({ title, description, features, image }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden mb-10 border border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-12 sm:gap-5">
        <div className="md:col-span-4 lg:col-span-3 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 border-b sm:border-r border-slate-100 transition-colors z-10"></div>
          <img
            src={image}
            alt={`Worker ${title?.toLowerCase()}`}
            className="rounded-l-2xl p-5 object-fit max-w-[220px] max-h-[220px] w-full h-full sm:h-auto group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="md:col-span-8 lg:col-span-9 p-5 pt-3 sm:py-8 sm:pr-8 sm:!pl-2 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-slate-700 text-sm md:text-lg leading-relaxed md:block hidden">
              {description}
            </p>
            <p className="text-slate-700 text-sm md:text-lg leading-relaxed md:hidden line-clamp-3">
              {description}
            </p>
            <div className="md:hidden">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="text-white hover:text-white/80 bg-mainBlue h-auto">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-mainBlue">{title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="text-slate-700 text-base leading-relaxed">
                      {description}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Accreditations() {
  const services = [
    {
      title: "Accreditation by AICTE",
      description:
        "Siva Sivani Institute of Management (SSIM) is one of the India's premier and the first B-School in Telugu speaking states. SSIM started offering management education with an AICTE approved in-take of 40 students in the year 1992 and now the total intake is 300 students every academic year. SSIM is among the handful of business schools in the top qualities, that has been accreditation by various accreditation bodies.",
      image: aict,
    },
    {
      title: "Accreditation by III",
      description:
        "Siva Sivani Institute of Management (SSIM), PGDM – BIFS Program has been accredited by Insurance Institute of India (III), Mumbai. III is considered to be one of the best accrediting bodies in the area of Banking, Insurance and Financial Services. SSIM is privileged to receive this accreditation to serve our students in all best possible ways in collaboration with the latest industry needs.",
      image: III,
    },
    // {
    //   description: "Siva Sivani Institute of Management (SSIM) is one of the few institutes to collaborate with Harvard Business School Online for Business Analytics Certification. PGDM – Business Analytics program at SSIM has a global edge to carve our students' understanding and knowledge in analytics with the support of HBS online certification.",
    //   image: "https://ssim.ac.in/wp-content/uploads/2022/11/harvard-ssim.png"
    // },
    {
      title: "Accreditation by NBA",
      description:
        "Siva Sivani Institute of Management (SSIM) received the prestigious accreditation from the National Board of Accreditation (NBA), in the year 2020, for its flagship PGDM program. NBA accreditation highlights the true standard of achievements in Postgraduate in business education. This accreditation is considered to be the best standard in the country for all PGDM program.",
      image: nba,
    },
    {
      title: "Accreditation by NAAC",
      description:
        "Siva Sivani Institute of Management (SSIM) PGDM programs received accreditation from National Assessment and Accreditation Council (NAAC) in the year 2014 and re-accreditation in the year 2021. NAAC conducts strategic audit it is considered to be the nationally benchmarked system for mentoring, quality improvement, quality assurance and accreditation. NAAC conduct audit to understand the institutes previous performances and their future aspirations.",
      image: naac,
    },
    {
      title: "Accreditation by SAQS",
      description:
        "Siva Sivani Institute of Management (SSIM) has been awarded the prestigious SAQS accreditation, an international quality assurance system launched by AMDISA for management schools across South Asia. SAQS accreditation validates SSIM's commitment to global standards of management education while respecting diverse cultural contexts. This recognition by SAQS, which emerged from EFMD-AMDISA cooperation, affirms SSIM's excellence in delivering world-class management education aligned with international benchmarks.",
      image: saqs,
    },
    {
      title: "Accreditation by AIU",
      description:
        "Siva Sivani Institute of Management (SSIM) has been awarded the prestigious accreditation from the Association of Indian Universities (AIU), validating its commitment to maintaining high academic standards. The AIU accreditation recognizes SSIM's excellence in delivering quality management education through its PGDM program, ensuring it meets rigorous national benchmarks. This accreditation affirms SSIM's dedication to continuous quality improvement and its position among India's leading management institutions.",
      image: aiu,
    },
  ];

  return (
    <div className="container grid grid-cols-2 md:block gap-5 mx-auto py-10 sm:py-16 max-w-6xl">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-12 sm:mb-16 mb-10 col-span-2 items-start">
        <div className="sm:space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Accreditations
          </h1>
        </div>
        <div className="space-y-6">
          <p className="text-slate-700 text-lg leading-relaxed">
            Building Excellence stands as your steadfast partner in the
            construction industry, dedicated to delivering exceptional outcomes
            with precision and care.
          </p>
        </div>
      </div>

      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}
