"use client";

const logo = "/logo-transparent.png";
import Image from "next/image";
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
import { usePathname } from "next/navigation";
import { secondHomeTheme } from "../theme";

const aicteapprovals = "/pdfs/footer/AICTE_Approval_1992_2026_All_Years.pdf";

type FooterItem = {
  name: string;
  path: string;
  external?: boolean;
};

type FooterSection = {
  label: string;
  items: FooterItem[];
  helpline?: boolean;
};

export default function Footer() {
  const pathname = usePathname();
  const isPurpleHome = pathname === "/secondHome" || pathname === "/thirdHome";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerSections: FooterSection[] = [
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
        { name: "Contact Us", path: "/contact-us" },
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
      label: "S. P. Sampathy's Siva Sivani Educational Society",
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
      helpline: true,
    },
  ];

  return (
    <footer
      className={`relative pt-16 pb-10 px-4 md:px-6 lg:px-8 overflow-hidden ${isPurpleHome
          ? "bg-gradient-to-br from-purple-950 via-purple-900 to-[#2E1065]"
          : secondHomeTheme.shellMuted
        }`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${isPurpleHome ? "opacity-[0.08]" : "opacity-[0.05]"
          }`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isPurpleHome
              ? "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)"
              : "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <Link
                href="/"
                className="inline-flex items-center gap-3 group"
                onClick={scrollToTop}
              >
                <span className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-white/85 px-4 py-3 shadow-[0_18px_40px_rgba(7,8,25,0.28)] ring-1 ring-white/35 backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.02]">
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/80 via-white/25 to-white/10" />
                  <span className="pointer-events-none absolute inset-x-3 top-2 h-4 rounded-full bg-white/35 blur-md" />
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt="SSIM Logo"
                    width={240}
                    height={72}
                    className="relative z-10 h-14 sm:h-[72px] w-auto drop-shadow-[0_3px_6px_rgba(255,255,255,0.22)]"
                    style={{ width: 'auto' }}
                  />
                </span>
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
                    href: "https://www.linkedin.com/company/ssim-siva-sivani-institute-of-management/",
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
                      className={`rounded-full transition-all hover:scale-110 shadow-[0_8px_18px_rgba(16,34,105,0.08)] ${isPurpleHome
                          ? "text-white bg-white/10 hover:bg-white/15 border border-white/15"
                          : "text-purple-700 bg-white hover:opacity-90"
                        }`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className={`text-sm ${isPurpleHome ? "text-white/80" : "text-slate-600"}`}>
                <strong className={isPurpleHome ? "text-white" : "text-slate-700"}>
                  Address:
                </strong>{" "}
                NH 44, Kompally, Secunderabad, Telangana - 500100
              </p>
              <p className={`text-sm ${isPurpleHome ? "text-white/80" : "text-slate-600"}`}>
                <strong className={isPurpleHome ? "text-white" : "text-slate-700"}>
                  Email:
                </strong>{" "}
                <a href="mailto:info@ssim.ac.in" className={isPurpleHome ? "text-white/85 hover:text-white" : "hover:text-purple-700"}>
                  info@ssim.ac.in
                </a>
              </p>
              <p className={`text-sm ${isPurpleHome ? "text-white/80" : "text-slate-600"}`}>
                <strong className={isPurpleHome ? "text-white" : "text-slate-700"}>
                  Phone:
                </strong>{" "}
                <a href="tel:+91-040-27165451" className={isPurpleHome ? "text-white/85 hover:text-white" : "hover:text-purple-700"}>
                  040-2716 5451/53/54
                </a>
                ,{" "}
                <a href="tel:+919391114948" className={isPurpleHome ? "text-white/85 hover:text-white" : "hover:text-purple-700"}>
                  +91 9391114948
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.label} className="space-y-6">
                <h3
                  className={`text-lg font-semibold tracking-wide ${isPurpleHome ? "text-white" : "text-slate-900"
                    }`}
                >
                  {section.label}
                </h3>
                {section.helpline ? (
                  <>
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
                              className={`group inline-flex items-center gap-1 transition-colors duration-200 ${isPurpleHome
                                  ? "text-white/75 hover:text-white"
                                  : "text-slate-600 hover:text-purple-700"
                                }`}
                            >
                              {item.name}
                            </a>
                          ) : (
                            <Link
                              href={item.path}
                              onClick={scrollToTop}
                              className={`group inline-flex items-center gap-1 transition-colors duration-200 ${isPurpleHome
                                  ? "text-white/75 hover:text-white"
                                  : "text-slate-600 hover:text-purple-700"
                                }`}
                            >
                              {item.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                    {/* <div className="pt-4">
                      <p className={`text-sm font-medium mb-2 ${isPurpleHome ? "text-white" : "text-slate-700"}`}>
                        24/7 Women Helpline Number
                      </p>
                      <a href="tel:+919133305062">
                        <Button
                          className={`gap-2 rounded-full hover:opacity-90 transition-colors shadow-[0_10px_24px_rgba(16,34,105,0.08)] ${
                            isPurpleHome
                            ? "bg-white/10 text-white border border-white/15"
                            : "bg-gradient-to-r from-purple-700 to-[#1B50EC] text-white"
                          }`}
                        >
                          <Phone className="h-4 w-4" />
                          91333 05062
                        </Button>
                      </a>
                    </div> */}
                  </>
                ) : (
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
                            className={`group inline-flex items-center gap-1 transition-colors duration-200 ${isPurpleHome
                                ? "text-white/80 hover:text-white"
                                : "text-slate-600 hover:text-purple-700"
                              }`}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            href={item.path}
                            onClick={scrollToTop}
                            className={`group inline-flex items-center gap-1 transition-colors duration-200 ${isPurpleHome
                                ? "text-white/80 hover:text-white"
                                : "text-slate-600 hover:text-purple-700"
                              }`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <Separator className={`my-12 ${isPurpleHome ? "bg-white/15" : "bg-slate-200/80"}`} />

        <div
          className={`flex flex-col sm:flex-row justify-center items-center gap-4 text-base ${isPurpleHome ? "text-white/75" : "text-slate-700"
            }`}
        >
          <p className={isPurpleHome ? "text-white/75" : "text-slate-700"}>
            Copyright © SSIM {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
