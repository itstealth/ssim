import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";
import { HomepageSchema } from "@/components/Schema";
import DynamicSchema from "@/components/DynamicSchema";
import ConditionalLayout from "@/components/ConditionalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Top PGDM B-School in Hyderabad | SSIM Hyderabad",
  description:
    "Meta descriprion for home page	SSIM Hyderabad offers AICTE-approved PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top private B schools in Hyderabad. Apply Now!",
  canonical: "https://ssim.ac.in",
  alternates: {
    canonical: "https://ssim.ac.in",
  },
  openGraph: {
    title: "Top PGDM B-School in Hyderabad | SSIM Hyderabad",
    description:
      "Meta descriprion for home page	SSIM Hyderabad offers AICTE-approved PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top private B schools in Hyderabad. Apply Now!",
    url: "https://www.ssim.ac.in",
    siteName: "SSIM Hyderabad",
    images: ["/ssimlogo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top PGDM B-School in Hyderabad | SSIM Hyderabad",
    description:
      "Meta descriprion for home page	SSIM Hyderabad offers AICTE-approved PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top private B schools in Hyderabad. Apply Now!",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in",
  },
  icons: {
    icon: "/ssim-favicon.png",
  },  
  manifest: "/manifest.json",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://ssim.ac.in"),
  category: "education",
  keywords: ["SSIM Hyderabad", "MBA", "PGDM", "B-School", "Hyderabad"],
  authors: [{ name: "SSIM Hyderabad" }],
  creator: "SSIM Hyderabad",
  publisher: "SSIM Hyderabad",
  applicationName: "SSIM Hyderabad",
  generator: "Next.js",
  referrer: "origin",
  formatDetection: {
    email: false,
    address: false,
  },
  alternates: {
    canonical: "https://ssim.ac.in",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload Hero Banner Images for LCP */}
        <link rel="preload" as="image" href="/hero-sm.avif" media="(max-width: 767px)" type="image/avif" />
        <link rel="preload" as="image" href="/banner.avif" media="(min-width: 768px)" type="image/avif" />
        {/* Homepage @graph Schema — Organization + WebSite */}
        <HomepageSchema />
        {/* Dynamic Schema (Breadcrumbs, etc.) */}
        <DynamicSchema />
      </head>
      <GoogleTagManager gtmId="GTM-5LJR499N" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LJR499N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Script id="nopaperforms-config" strategy="lazyOnload">
          {`var npf_d='https://apply.ssim.ac.in'; var npf_c='277'; var npf_m='1';`}
        </Script>
        <Script
          src="https://track.nopaperforms.com/js/track.js"
          strategy="lazyOnload"
        />
        <QueryProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
          <Toaster />
        </QueryProvider>
      </body>
      <GoogleAnalytics gaId="G-G3TY673HQG" />
    </html>
  );
}