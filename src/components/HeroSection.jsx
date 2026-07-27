import Image from "next/image";

const HeroSection = ({
  desktopImageSrc = "/banner.avif",
  mobileImageSrc = "/hero-sm.avif",
  altText = "SSIM Hyderabad campus AICTE-approved PGDM ranked 2nd top B-school by Outlook India",
  className = ""
}) => {
  return (
    <section className={`relative w-full overflow-hidden flex flex-col ${className}`}>
      <picture className="w-full">
        {/* Desktop Banner Source */}
        <source
          media="(min-width: 768px)"
          srcSet={desktopImageSrc}
          type="image/avif"
        />
        {/* Mobile Banner Source */}
        <source
          media="(max-width: 767px)"
          srcSet={mobileImageSrc}
          type="image/avif"
        />
        {/* Primary LCP Image Element */}
        <img
          src={mobileImageSrc}
          alt={altText}
          fetchPriority="high"
          decoding="async"
          width={768}
          height={1024}
          className="w-full aspect-[768/1024] md:aspect-auto md:h-screen md:min-h-[600px] object-cover object-center"
        />
      </picture>
    </section>
  );
};

export default HeroSection;