import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/pages/Header/Header";
import Footer from "@/pages/Footer/Footer";
import QueryProvider from "@/components/QueryProvider";
import ConditionalBanner from "@/components/ConditionalBanner";
import { DockButtons } from "@/components/DockButtons";
import { GoogleTagManager } from "@next/third-parties/google";
import Image from "next/image";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Top MBA & PGDM B-School in Hyderabad | SSIM Hyderabad",
  description:
    "SSIM Hyderabad offers AICTE-approved MBA/PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top B-schools in Hyderabad. Call 9391114948!",
  canonical: "https://www.ssim.ac.in",
  alternates: {
    canonical: "https://www.ssim.ac.in",
  },
  openGraph: {
    title: "Top MBA & PGDM B-School in Hyderabad | SSIM Hyderabad",
    description:
      "SSIM Hyderabad offers AICTE-approved MBA/PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top B-schools in Hyderabad. Call 9391114948!",
    url: "https://www.ssim.ac.in",
    siteName: "SSIM Hyderabad",
    images: ["/ssimlogo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top MBA & PGDM B-School in Hyderabad | SSIM Hyderabad",
    description:
      "SSIM Hyderabad offers AICTE-approved MBA/PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top B-schools in Hyderabad. Call 9391114948!",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in",
  },
  icons: {
    icon: "/ssim-favicon.png",
  },  
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
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
    canonical: "https://www.ssim.ac.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-TQZNQ47" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="text/javascript">
          var npf_d='https://apply.ssim.ac.in'; var npf_c='277'; var npf_m='1';
          var s=document.createElement("script"); s.type="text/javascript";
          s.async=true; s.src="https://track.nopaperforms.com/js/track.js";
          document.body.appendChild(s);
        </script>
        <QueryProvider>
          <Header />
          <ConditionalBanner />
          <main>{children}</main>
          <Footer />
          <DockButtons />
          <Toaster />
          {/* Fixed WhatsApp button SSIM */}
          <div className="fixed hidden sm:block bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
            <a
              href="https://wa.me/919391114948"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/30 rounded-full p-2 inline-block"
            >
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={36}
                height={36}
              />
            </a>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
