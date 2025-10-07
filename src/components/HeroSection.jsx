"use client";
import Image from "next/image";

const HeroSection = ({ 
  desktopImageSrc = "/banner.png", 
  mobileImageSrc = "/hero-sm.png",
  altText = "Reach the PINNACLE of success WITH AICTE APPROVED 2nd TOP B-school by Outlook",
  className = ""
}) => {
  return (
    <section className={`relative w-full h-[60vh] md:h-screen ${className}`}>
      {/* Desktop Image */}
      <Image
        src={desktopImageSrc}
        alt={altText}
        fill
        priority
        className="object-cover object-center hidden md:block"
        sizes="100vw"
      />
      
      {/* Mobile Image */}
      <Image
        src={mobileImageSrc}
        alt={altText}
        fill
        priority
        className="object-cover object-center block md:hidden"
        sizes="100vw"
      />
    </section>
  );
};

export default HeroSection; 