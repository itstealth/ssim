/* eslint-disable react/prop-types */
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const AboutSidebar = ({ sidebarLinks }) => {
  const router = useRouter();

  return (
    <div className="col-span-2 mb-16 pt-8 lg:h-[620px] lg:sticky lg:top-5 lg:overflow-y-auto hidden lg:block">
      <div className="flex flex-col h-full rounded-lg shadow-lg  text-white">
        <h2 className="mb-4 text-2xl text-red-600 font-bold tracking-wider uppercase ml-4">
          Overview
        </h2>

        <nav className="mb-8 space-y-2">
          {sidebarLinks.map((link) => (
            <Link
              href={link.href}
              className="block px-3 py-2 text-sm text-gray-800 transition-all duration-300 rounded-lg hover:pl-6 hover:text-white hover:bg-red-600 hover:shadow-md"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          onClick={() => router.push("/contact-us")}
          className="w-full px-3 py-2 mb-6 font-bold text-white bg-gradient-to-r from-[#b22222] to-[#ff4500] rounded-lg shadow-lg transition-all duration-300 hover:from-[#ff4500] hover:to-[#b22222]"
        >
          Apply Online
        </Button>

        <div className="relative flex-grow overflow-hidden rounded-lg bg-black shadow-md">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
            <p className="mb-3 text-xl font-semibold text-center">
              Discover Our Partnerships
            </p>
            <Button
              variant="outline"
              className="text-white transition-colors bg-transparent border border-white rounded-lg hover:bg-white hover:text-red-600 max-w-[90%] text-sm"
              onClick={() => router.push("/contact-us")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSidebar;
