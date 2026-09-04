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
        canonicalUrl="https://ssim.ac.in/about/vision-mission"
      /> */}
      <section className="py-14 md:py-24 px-6 md:px-0 bg-white text-zinc-900">
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
              <div className="relative">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <div className="h-1 w-12 bg-mainBlue" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Our Vision
                  </h2>
                </div>
                <div className="relative bg-gradient-to-br from-purple-50 via-purple-100/50 to-purple-50 rounded-2xl p-6 md:p-8 border-2 border-purple-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-mainBlue/5 to-transparent rounded-2xl"></div>
                  <p className="relative text-mainBlue text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-center lg:text-left italic">
                    "To be a Premier Management Institute significantly contributing to Corporate World and Society."
                  </p>
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-purple-500/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-purple-400/10 rounded-full blur-2xl"></div>
                </div>
              </div>

              {/* Mission Section */}
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <div className="h-1 w-12 bg-mainBlue" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Our Mission
                  </h2>
                </div>
                <div className="space-y-4 md:space-y-5">
                  <div className="group bg-white border-l-4 border-mainBlue rounded-r-lg p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-purple-600 hover:-translate-x-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-mainBlue transition-colors duration-300">
                        <span className="text-mainBlue group-hover:text-white font-bold text-lg">1</span>
                      </div>
                      <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium pt-1">
                        To disseminate management knowledge through focused educational programmes.
                      </p>
                    </div>
                  </div>
                  <div className="group bg-white border-l-4 border-mainBlue rounded-r-lg p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-purple-600 hover:-translate-x-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-mainBlue transition-colors duration-300">
                        <span className="text-mainBlue group-hover:text-white font-bold text-lg">2</span>
                      </div>
                      <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium pt-1">
                        To contribute to management knowledge through extension and research activities.
                      </p>
                    </div>
                  </div>
                  <div className="group bg-white border-l-4 border-mainBlue rounded-r-lg p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-purple-600 hover:-translate-x-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-mainBlue transition-colors duration-300">
                        <span className="text-mainBlue group-hover:text-white font-bold text-lg">3</span>
                      </div>
                      <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium pt-1">
                        To develop responsible management graduates through ethics-based education.
                      </p>
                    </div>
                  </div>
                  <div className="group bg-white border-l-4 border-mainBlue rounded-r-lg p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-purple-600 hover:-translate-x-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-mainBlue transition-colors duration-300">
                        <span className="text-mainBlue group-hover:text-white font-bold text-lg">4</span>
                      </div>
                      <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium pt-1">
                        To promote the culture of critical, innovative thinking and social entrepreneurship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
