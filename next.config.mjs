/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use platform default runtime (no standalone) so next start loads deps from root node_modules.
  // output: "standalone", // remove this line

  outputFileTracingIncludes: {
    "/*": [
      "node_modules/@next/env/**",
      "node_modules/@swc/helpers/**",
      "node_modules/styled-jsx/**",
    ],
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/**" },
      { protocol: "https", hostname: "yt3.ggpht.com", pathname: "/**" },
      { protocol: "https", hostname: "img.youtube.com", pathname: "/**" },
    ],
    minimumCacheTTL: 60,
    formats: ["image/webp", "image/avif"],
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
