"use client";
// import bg from "@/assets/landing/Placement-Banner.jpg";
import Container from "@/components/wrappers/Container";
import Heading from "@/components/wrappers/Heading";
import ThreeDPlacementCard from "@/components/ui/ThreeDPlacementCard";
import PlacementCardMarquee from "@/components/ui/PlacementCardMarquee";
import { placementCards } from "@/data/placementData";
import { Button } from "@/components/ui/button";

import { useEffect, memo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PlacementStories = () => {
  // Preload images
  useEffect(() => {
    placementCards.forEach((card) => {
      const img = new Image();
      img.src = card.image;
      const logo = new Image();
      logo.src = card.logo;
    });
  }, []);

  return (
    <section className="relative bg-white py-12 md:py-16 overflow-hidden">
      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <Container className="!py-0 relative z-10">
        <div>
          <Heading
            title="SSIM Placement Stories"
            titleClassName="text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl"
            subtitleClassName="text-slate-500 !mx-auto !max-w-2xl text-center text-base sm:text-lg mt-3"
            subtitle="Our students are successfully placed in top companies, gaining invaluable experience and insights that enhance their skills and career prospects."
            className="pb-6 md:pb-8"
          />

          <PlacementCardMarquee>
            {placementCards.map((card) => (
              <ThreeDPlacementCard key={card.id} {...card} />
            ))}
          </PlacementCardMarquee>
        </div>

        <div className="flex justify-center mt-6 md:mt-8 relative z-20">
          <Link
            href="/placement/records"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <Button
              className="group gap-0 text-white p-0 h-11 rounded-none border-none shadow-md hover:shadow-lg transition-all overflow-hidden"
              size="lg"
            >
              <div className="h-11 flex items-center px-6 font-medium text-sm bg-gradient-to-r from-purple-700 via-purple-600 to-[#1B50EC] text-white transition-colors">
                View All Placement
              </div>
              <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-[#1B50EC] text-white h-11 w-11 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </div>
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default memo(PlacementStories);
