"use client";

const HeroSection = ({
  desktopImageSrc = "/banner.png",
  mobileImageSrc = "/hero-sm.png",
  altText = "SSIM Hyderabad campus AICTE-approved PGDM ranked 2nd top B-school by Outlook India",
  className = ""
}) => {
  return (
    <section className={`relative w-full overflow-hidden flex flex-col ${className}`}>
      {/* Desktop Image */}
      <img
        src={desktopImageSrc}
        alt={altText}
        className="w-full h-auto object-cover object-center hidden md:block"
      />
      
      {/* Mobile Image */}
      <img
        src={mobileImageSrc}
        alt={altText}
        className="w-full h-auto object-cover object-center block md:hidden"
      />
    </section>
  );
};

export default HeroSection; 