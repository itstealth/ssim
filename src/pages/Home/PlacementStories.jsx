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
    <div
      className="relative bg-cover bg-center transform-gpu"
      style={{
        // backgroundImage: `url(${bg})`,
        willChange: "transform",
      }}
    >
      <Container className="!py-0">
        <div>
          <Heading
            title="SSIM Placement Stories"
            titleClassName="!text-mainBlue text-left text-center"
            subtitleClassName="text-gray-500 !mx-auto !max-w-2xl m-0 lg:text-lg lg:font-normal lg:max-w-full text-center !text-base sm:!text-lg lg:!text-xl"
            subtitle="Our students are successfully placed in top companies, gaining invaluable experience and insights that enhance their skills and career prospects."
            className="lg:pb-10"
          />

          <PlacementCardMarquee>
            {placementCards.map((card) => (
              <ThreeDPlacementCard key={card.id} {...card} />
            ))}
          </PlacementCardMarquee>
        </div>
      </Container>
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
          className="group gap-0 text-white px-0 py-0 h-0 rounded-none mt-8"
          size="lg"
        >
          <div className="bg-red-600 mt-8 h-11 flex items-center pl-8 pr-4 hover:bg-red-700">
            View All Placement
          </div>
          <div className="bg-mainBlue mt-8 h-11 flex items-center px-4">
            <ArrowRight className="w-4 bg-mainBlue h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default memo(PlacementStories);
