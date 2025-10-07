/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone bundles a minimal Node server + required node_modules
  output: "standalone", // SSR/ISR/API routes remain dynamic; not a static export [web:211],

  // Ensure dependencies that tracing sometimes misses are included
  outputFileTracingIncludes: {
    "/*": [
      "node_modules/@next/env/**",
      "node_modules/@swc/helpers/**",
      "node_modules/styled-jsx/**",
    ],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/vi/**",
      },
      { protocol: "https", hostname: "i.ytimg.com", port: "", pathname: "/**" },
      {
        protocol: "https",
        hostname: "yt3.ggpht.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
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
