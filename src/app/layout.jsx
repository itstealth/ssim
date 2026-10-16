import { Geist, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import { Toaster } from "sonner";
import { HomepageSchema } from "@/components/Schema";
import DynamicSchema from "@/components/DynamicSchema";
import ConditionalLayout from "@/components/ConditionalLayout";
import HeadingStyleManager from "@/components/HeadingStyleManager";

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
  // Keep this secondary heading font out of the initial critical request chain.
  preload: false,
});

export const metadata = {
  title: "Top PGDM B-School in Hyderabad | SSIM Hyderabad",
  description:
    "SSIM Hyderabad offers AICTE-approved PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top private B schools in Hyderabad. Apply Now!",
  canonical: "https://ssim.ac.in",
  alternates: {
    canonical: "https://ssim.ac.in",
  },
  openGraph: {
    title: "Top PGDM B-School in Hyderabad | SSIM Hyderabad",
    description:
      "SSIM Hyderabad offers AICTE-approved PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top private B schools in Hyderabad. Apply Now!",
    url: "https://www.ssim.ac.in",
    siteName: "SSIM Hyderabad",
    images: ["/ssimlogo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top PGDM B-School in Hyderabad | SSIM Hyderabad",
    description:
      "SSIM Hyderabad offers AICTE-approved PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top private B schools in Hyderabad. Apply Now!",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload Mobile LCP Hero Banner Image for minimal resource load delay */}
        <link rel="preload" as="image" href="/hero-sm.avif" media="(max-width: 767px)" type="image/avif" fetchPriority="high" />
        <link rel="preload" as="image" href="/banner-home-v2.avif" media="(min-width: 768px)" type="image/avif" fetchPriority="high" />
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

        {/* Load GTM after the first interaction or after the page has settled.
            Analytics and ad tags then stay off the initial main-thread path. */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d){
              var loaded=false;
              var fallback;
              var events=['pointerdown','keydown','touchstart','scroll'];
              function boot(){
                if(loaded)return;
                loaded=true;
                w.clearTimeout(fallback);
                events.forEach(function(name){w.removeEventListener(name,onInteraction)});
                w.dataLayer=w.dataLayer||[];
                w.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var first=d.getElementsByTagName('script')[0];
                var script=d.createElement('script');
                script.async=true;
                script.src='https://www.googletagmanager.com/gtm.js?id=GTM-5LJR499N';
                first.parentNode.insertBefore(script,first);
              }
              var interactionScheduled=false;
              function onInteraction(){
                if(loaded||interactionScheduled)return;
                interactionScheduled=true;
                w.setTimeout(boot,1000);
              }
              events.forEach(function(name){
                w.addEventListener(name,onInteraction,{once:true,passive:true});
              });
              fallback=w.setTimeout(boot,10000);
            })(window,document);
          `}
        </Script>

        {/* NoPaperForms — lazyOnload fires only during browser idle time */}
        <Script id="nopaperforms-config" strategy="lazyOnload">
          {`var npf_d='https://apply.ssim.ac.in'; var npf_c='277'; var npf_m='1';`}
        </Script>
        <Script
          src="https://track.nopaperforms.com/js/track.js"
          strategy="lazyOnload"
        />

        <QueryProvider>
          <HeadingStyleManager />
          <ConditionalLayout>{children}</ConditionalLayout>
          <Toaster />
        </QueryProvider>

      </body>
    </html>
  );
}
