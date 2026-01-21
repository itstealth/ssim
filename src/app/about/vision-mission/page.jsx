"use client";

const vm1 = "/about/vm1.webp";
const vm2 = "/about/vm2.webp";
const vm3 = "/about/vm3.webp";
const vm4 = "/about/vm4.webp";
// import SEO from "@/components/Seo";
import { useState } from "react";

const images = [
  {
    url: vm1,
    position: "top-0 left-1/2 -translate-x-1/2 -translate-y-4",
  },
  {
    url: vm2,
    position: "top-1/2 left-0 -translate-y-1/2 -translate-x-4",
  },
  {
    url: vm3,
    position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-4",
  },
  {
    url: vm4,
    position: "top-1/2 right-0 -translate-y-1/2 translate-x-4",
  },
];

export default function VisionMission() {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <>
      {/* <SEO
        title="Vision & Mission"
        description="Learn about the vision, mission, and goals of Siva Sivani Institute of Management (SSIM). Discover our commitment to shaping future business leaders."
        keywords="SSIM vision, SSIM mission, business school goals, management institute values"
        canonicalUrl="https://www.ssim.ac.in/about/vision-mission"
      /> */}
      <section className="py-14 md:py-24 bg-white text-zinc-900">
        <div className="container mx-auto px-0 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
            {/* Right Section */}
            <div className="relative mt-8 lg:mt-0 order-1 lg:order-2">
              <div className="relative w-full aspect-square max-w-[600px] lg:max-w-[800px] mx-auto">
                {images.map(({ url, position }) => (
                  <div
                    key={url}
                    className={`absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[360px] lg:h-[360px] bg-cover bg-center transform transition-transform hover:scale-105 ${position}`}
                    style={{
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                      backgroundImage: `url(${url})`,
                      boxShadow:
                        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                    }}
                  />
                ))}
              </div>
            </div>
            {/* Left Section */}
            <div className="max-w-xl mx-auto lg:mx-0 order-2 lg:order-1 space-y-12 md:space-y-16">
              {/* Vision Section */}
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <div className="h-1 w-12 bg-teal-500" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Our Vision
                  </h2>
                </div>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  <strong>"To be a Premier Management Institute significantly contributing to Corporate World and Society."</strong>
                </p>
              </div>

              {/* Mission Section */}
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <div className="h-1 w-12 bg-teal-500" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Our Mission
                  </h2>
                </div>
                <ul className="space-y-3 md:space-y-4 text-zinc-600 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-500 font-bold mt-1">•</span>
                    <span className="leading-relaxed">To disseminate management knowledge through focused educational programmes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-500 font-bold mt-1">•</span>
                    <span className="leading-relaxed">To contribute to management knowledge through extension and research activities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-500 font-bold mt-1">•</span>
                    <span className="leading-relaxed">To develop responsible management graduates through ethics-based education.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-500 font-bold mt-1">•</span>
                    <span className="leading-relaxed">To promote the culture of critical, innovative thinking and social entrepreneurship.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
