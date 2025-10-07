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
  title: "SSIM - Siva Sivani Institute of Management",
  description:
    "Siva Sivani Institute of Management - Excellence in Management Education",
  icons: {
    icon: [
      {
        url: "/ssim-favicon.png",
        type: "image/png",
      },
      {
        url: "/ssim-favicon.png",
        sizes: "any",
      },
    ],
    apple: "/ssim-favicon.png",
    shortcut: "/ssim-favicon.png",
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
          {/* Fixed WhatsApp button */}
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
