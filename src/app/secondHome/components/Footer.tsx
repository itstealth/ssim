"use client";

const logo = "/logo ssim.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { secondHomeTheme } from '../theme'
const aicteapprovals = "/pdfs/footer/AICTE_Approval_1992_2026_All_Years.pdf";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerSections = [
    {
      label: "Useful Links",
      items: [
        { name: "About Us", path: "/about/vision-mission" },
        {
          name: "Rankings & Accreditations",
          path: "/about/accreditations-rankings",
        },
        { name: "Events", path: "/students-life/life-at-ssim" },
        { name: "Media", path: "/students-life/news" },
        { name: "Blog", path: "/blog" },
        { name: "IQAC", path: "/iqac" },
        { name: "Careers", path: "/careers" },
        { name: "AICTE Approvals", path: aicteapprovals },
      ],
    },
    {
      label: "Programs Offered",
      items: [
        { name: "PGDM", path: "/programs/pgdm-triple-specialisation" },
        { name: "PGDM - BIFS", path: "/programs/pgdm-bifs" },
        { name: "PGDM - BA", path: "/programs/pgdm-ba" },
        { name: "FPM", path: "/programs/fpm-efpm" },
        { name: "EFPM", path: "/programs/fpm-efpm" },
      ],
    },
    {
      label: "Committees & Policies",
      items: [
        {
          name: "Grievance Redressal Mechanism",
          path: "/grievance-redressal-mechanism",
        },
        { name: "Internal Complaints Committee", path: "/internal-complaints" },
        { name: "Employee Handbook", path: "/pdfs/footer/Employee_Hand_Book.pdf", external: true },
        { name: "Student Handbook", path: "/pdfs/footer/Student_Hand_Book_Batch_2025_27.pdf", external: true },
        { name: "HR & Faculty Development Policies", path: "/pdfs/footer/hr&facultyDevelopmentPolicies.pdf", external: true },
      ],
    },
    {
      label: "S P Sampathys Siva Sivani Educational Society",
      items: [
        { name: "Siva Sivani Institute of Management", path: "/" },
        { name: "Siva Sivani Degree College", path: "https://ssdc.ac.in" },
        {
          name: "Siva Sivani Degree College Hyderabad",
          path: "https://ssdchyderabad.in",
        },
        { name: "Siva Sivani Junior College", path: "https://ssjc.ac.in" },
        {
          name: "Siva Sivani High School",
          path: "https://www.spsschool.ac.in",
        },
      ],
    },
  ];

  return (
    <footer className={`relative pt-16 pb-10 px-4 md:px-6 lg:px-8 overflow-hidden ${secondHomeTheme.shellMuted}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* Logo and Social Section */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <Link
                href="/"
                className="flex items-center gap-3 group"
                onClick={scrollToTop}
              >
              <img
                src={logo || "/placeholder.svg"}
                alt="SSIM Logo"
                className="h-14 sm:h-[72px] cursor-pointer w-auto transition-transform group-hover:scale-105"
              />
              </Link>
              <div className="flex gap-3">
                {[
                  {
                    icon: Facebook,
                    bgColor: "bg-white",
                    label: "Facebook",
                    href: "https://www.facebook.com/SivaSivaniInstituteofManagementHyderabad/",
                  },
                  {
                    icon: Instagram,
                    bgColor: "bg-white",
                    label: "Instagram",
                    href: "https://www.instagram.com/ssim_b_school/?hl=en",
                  },
                  {
                    icon: Twitter,
                    bgColor: "bg-white",
                    label: "Twitter",
                    href: "https://x.com/SSIMHyderabad",
                  },
                  {
                    icon: Linkedin,
                    bgColor: "bg-white",
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/school/siva-sivani-institute-of-management/",
                  },
                  {
                    icon: Youtube,
                    bgColor: "bg-white",
                    label: "YouTube",
                    href: "https://www.youtube.com/@sivasivaniinstituteofmanag3545",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="icon"
                      className={`rounded-full transition-all hover:scale-110 text-purple-700 ${social.bgColor} hover:opacity-90 shadow-[0_8px_18px_rgba(16,34,105,0.08)]`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-3">
                <p className="text-sm text-slate-700 font-medium mb-3">
                  24/7 Women Helpline Number
                </p>
                <a href="tel:+919133305062">
                <Button className="gap-2 bg-white text-purple-700 rounded-full hover:bg-white/90 hover:text-purple-700 transition-colors shadow-[0_10px_24px_rgba(16,34,105,0.08)]">
                  <Phone className="h-4 w-4" />
                  91333 05062
                </Button>
              </a>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-slate-600">
                <strong className="text-slate-700">Address:</strong> NH 44, Kompally, Secunderabad, Telangana - 500100
              </p>
              <p className="text-sm text-slate-600">
                <strong className="text-slate-700">Email:</strong>{' '}
                <a href="mailto:info@ssim.ac.in" className="hover:text-purple-700">info@ssim.ac.in</a>
              </p>
              <p className="text-sm text-slate-600">
                <strong className="text-slate-700">Phone:</strong>{' '}
                <a href="tel:+91-040-27165451" className="hover:text-purple-700">040-2716 5451/53/54</a>,{' '}
                <a href="tel:+919391114948" className="hover:text-purple-700">+91 9391114948</a>
              </p>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.label} className="space-y-6">
                <h3 className="text-lg font-semibold text-slate-900 tracking-wide">
                  {section.label}
                </h3>
                <ul className="space-y-3 text-base">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      {item.path.startsWith("https:") ||
                      item.external ||
                      item.path === aicteapprovals ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 text-slate-600 hover:text-purple-700 transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={item.path}
                          onClick={scrollToTop}
                          className="group inline-flex items-center gap-1 text-slate-600 hover:text-purple-700 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-12 bg-slate-200/80" />

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-base text-slate-700">
          <p className="text-slate-700">
            Copyright © SSIM {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
