"use client";

const HeroSection = ({ 
  desktopImageSrc = "/banner.png", 
  mobileImageSrc = "/hero-sm.png",
  altText = "Reach the PINNACLE of success WITH AICTE APPROVED 2nd TOP B-school by Outlook",
  className = ""
}) => {
  return (
    <section className={`relative w-full h-full md:h-screen ${className}`}>
      {/* Desktop Image */}
      <img
        src={desktopImageSrc}
        alt={altText}
        className="object-cover object-center hidden md:block"
      />
      
      {/* Mobile Image */}
      <img
        src={mobileImageSrc}
        alt={altText}
        className="object-cover object-center block md:hidden"
      />
    </section>
  );
};

export default HeroSection; 