import Image from "next/image";

const HeroSection = ({
  desktopImageSrc = "/banner.webp",
  mobileImageSrc = "/hero-sm.webp",
  altText = "SSIM Hyderabad campus AICTE-approved PGDM ranked 2nd top B-school by Outlook India",
  className = ""
}) => {
  return (
    <section className={`relative w-full overflow-hidden flex flex-col ${className}`}>
      {/* Desktop Image */}
      <div className="hidden md:block relative w-full h-screen min-h-[600px]">
        <Image
          src={desktopImageSrc}
          alt={altText}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      
      {/* Mobile Image (Primary LCP Element) */}
      <div className="block md:hidden relative w-full aspect-[768/1024]">
        <Image
          src={mobileImageSrc}
          alt={altText}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};

export default HeroSection; 