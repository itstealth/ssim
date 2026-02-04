"use client";

import { usePathname } from "next/navigation";
import Header from "@/pages/Header/Header";
import Footer from "@/pages/Footer/Footer";
import ConditionalBanner from "@/components/ConditionalBanner";
import { DockButtons } from "@/components/DockButtons";
import EnquireNowButton from "@/components/EnquireNowButton";
import Image from "next/image";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isThankYouPage = pathname === "/thank-you";

  return (
    <>
      {!isThankYouPage && <Header />}
      {!isThankYouPage && <ConditionalBanner />}
      <main>{children}</main>
      {!isThankYouPage && <Footer />}
      {!isThankYouPage && <DockButtons />}
      {!isThankYouPage && <EnquireNowButton />}
      {!isThankYouPage && (
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
      )}
    </>
  );
}

