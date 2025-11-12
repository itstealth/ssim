import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import Drawer from "@/pages/Header/Drawer";

export default function BannerNav() {
  return (
    <div className="bg-gray-100 py-2 px-4 text-sm block">
      <div className="mx-auto flex justify-between sm:items-center">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <img
              src="/logo ssim.png"
              alt="Indo Global Group of Colleges"
              className="h-12 sm:h-[72px] object-contain"
            />
          </Link>
        </div>
        <div className="flex items-center gap-10">
          <div className="hidden md:flex text-black justify-end sm:items-center space-x-4">
            {/* <Link href="/iqac">IQAC</Link> */}
            <a
              href="https://maps.app.goo.gl/HhbEn3qSWAFCeuKR7"
              target="_blank"
              className="flex items-center"
            >
              <MapPin size={16} className="text-blue-800 mr-1" />
              <span>NH 44, Kompally,Secunderabad, Telangana - 500100.</span>
            </a>
            <a href="mailto:info@ssim.ac.in" className="flex items-center">
              <Mail size={16} className="text-blue-800 mr-1" />
              <span>admissions@ssim.ac.in</span>
            </a>
            <div className="flex flex-row gap-2">
              <a href="tel:+91-040-27165451" className="flex items-center">
                <Phone size={16} className="text-blue-800 mr-1" />
                <span>040-2716 5451/53/54</span>
              </a>
              <a href="tel:+919391114948" className="flex items-center">
                <Phone size={16} className="text-blue-800 mr-1" />
                <span>+91 9391114948</span>
              </a>
            </div>
          </div>
          <Drawer className="text-black bg-black" />
        </div>
      </div>
    </div>
  );
}
