/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/**" },
      { protocol: "https", hostname: "yt3.ggpht.com", pathname: "/**" },
      { protocol: "https", hostname: "img.youtube.com", pathname: "/**" },
    ],
    minimumCacheTTL: 60,
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },

  async rewrites() {
    return [
      {
        source: "/pdfs/:path*",
        destination:
          "https://raw.githack.com/Stealth-Rishabh/ssim-assets/main/:path*",
      },
    ];
  },
};

export default nextConfig;
