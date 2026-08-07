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
          fetchPriority="high"
        />
        {/* Mobile Banner Source */}
        <source
          media="(max-width: 767px)"
          srcSet={mobileImageSrc}
          type="image/avif"
          fetchPriority="high"
        />
        {/* Primary LCP Image Element
            - loading="eager": prevent lazy-load heuristics deferring the hero
            - decoding="async": decode off-main-thread so painting is not blocked
            - fetchPriority="high": tell the browser this is the most important resource
        */}
        <img
          src={mobileImageSrc}
          alt={altText}
          fetchPriority="high"
          loading="eager"
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