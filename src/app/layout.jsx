import { Geist, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";
import { HomepageSchema } from "@/components/Schema";
import DynamicSchema from "@/components/DynamicSchema";
import ConditionalLayout from "@/components/ConditionalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  // Geist is the body font – preload it so text renders on first paint
  preload: true,
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  // Playfair is only used decoratively below the fold.
  // Setting preload:false removes it from the critical rendering path entirely.
  // The browser will still load it when first needed, just not block initial paint.
  preload: false,
});

export const metadata = {
  title: "Top PGDM B-School in Hyderabad | SSIM Hyderabad",
  description:
    "Meta descriprion for home page\tSSIM Hyderabad offers AICTE-approved PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top private B schools in Hyderabad. Apply Now!",
  canonical: "https://ssim.ac.in",
  alternates: {
    canonical: "https://ssim.ac.in",
  },
  openGraph: {
    title: "Top PGDM B-School in Hyderabad | SSIM Hyderabad",
    description:
      "Meta descriprion for home page\tSSIM Hyderabad offers AICTE-approved PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top private B schools in Hyderabad. Apply Now!",
    url: "https://www.ssim.ac.in",
    siteName: "SSIM Hyderabad",
    images: ["/ssimlogo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top PGDM B-School in Hyderabad | SSIM Hyderabad",
    description:
      "Meta descriprion for home page\tSSIM Hyderabad offers AICTE-approved PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top private B schools in Hyderabad. Apply Now!",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
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
        {/* Preload Mobile LCP Hero Banner Image for minimal resource load delay */}
        <link rel="preload" as="image" href="/hero-sm.avif" media="(max-width: 767px)" type="image/avif" fetchPriority="high" />
        <link rel="preload" as="image" href="/banner.avif" media="(min-width: 768px)" type="image/avif" fetchPriority="high" />
        {/* Homepage @graph Schema — Organization + WebSite */}
        <HomepageSchema />
        {/* Dynamic Schema (Breadcrumbs, etc.) */}
        <DynamicSchema />
      </head>
      <body
        className={`${geistSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        {/* Google Tag Manager noscript fallback for no-JS environments */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LJR499N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* GTM — afterInteractive: fires only after the page becomes interactive.
            This ensures GTM never competes with LCP for network/CPU bandwidth. */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
        >{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5LJR499N');
        `}</Script>

        {/* NoPaperForms — lazyOnload fires only during browser idle time */}
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

        {/* Google Analytics — afterInteractive, inside <body> (was incorrectly after </html>).
            @next/third-parties/google already uses afterInteractive internally. */}
        <GoogleAnalytics gaId="G-G3TY673HQG" />
      </body>
    </html>
  );
}