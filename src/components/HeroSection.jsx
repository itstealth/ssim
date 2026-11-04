const HeroSection = ({
  desktopImageSrc = "/banner-home-v2.avif",
  mobileImageSrc = "/hero-sm.avif",
  altText = "SSIM Hyderabad campus AICTE-approved PGDM ranked 2nd top B-school by Outlook India",
  className = ""
}) => {
  return (
    <>
      <link rel="preload" as="image" href={mobileImageSrc} media="(max-width: 767px)" type="image/avif" fetchPriority="high" />
      <link rel="preload" as="image" href={desktopImageSrc} media="(min-width: 768px)" type="image/avif" fetchPriority="high" />
      <section className={`relative w-full overflow-hidden flex flex-col ${className}`}>
        <picture className="w-full">
          <source
            media="(min-width: 768px)"
            srcSet={desktopImageSrc}
            type="image/avif"
            fetchPriority="high"
          />
          <source
            media="(max-width: 767px)"
            srcSet={mobileImageSrc}
            type="image/avif"
            fetchPriority="high"
          />
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
    </>
  );
};

export default HeroSection;
