"use client";

import Script from "next/script";
import Image from "next/image";

export default function ThankYouPage() {
  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-brand-blue to-blue-600 overflow-x-hidden">

        {/* Background Decorative Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Abstract Shapes */}
          <svg
            className="absolute top-0 right-0 w-96 h-96 text-white/5"
            viewBox="0 0 200 200"
          >
            <path
              fill="currentColor"
              d="M45,-76.9C54.9,-69.3,57.2,-49.7,64.1,-32.8C71,-15.9,82.5,-1.7,82.9,12.7C83.3,27,72.5,41.5,60.2,52.4C47.9,63.3,34,70.6,18.4,74.8C2.8,78.9,-14.5,79.9,-31.9,76.1C-49.3,72.2,-66.8,63.5,-76.5,49.3C-86.2,35,-88,15.3,-85.6,-3.5C-83.1,-22.3,-76.3,-40.2,-63.3,-48.8C-50.3,-57.4,-31.1,-56.8,-15.3,-62.5C0.5,-68.2,13,-84.2,29.8,-85.9C46.7,-87.6,67.9,-75,45,-76.9Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Floating Circles */}
          <div className="absolute left-10 top-40 w-20 h-20 bg-white/10 rounded-full animate-float" />
          <div
            className="absolute right-20 bottom-40 w-16 h-16 bg-white/5 rounded-full animate-float"
            style={{ animationDelay: "-2s" }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative min-h-screen flex flex-col items-start justify-center p-5">
          {/* Logo and Badge Container */}
          <div className="flex items-center justify-start">
            {/* Siva Sivani Institute of Management Logo */}
            <Image
              className="w-[250px] mb-8 top-0 left-0"
              src="/logo ssim.png"
              alt="Siva Sivani Institute of Management Logo"
              width={250}
              height={100}
              priority
            />
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Success Illustration */}
            <div className="relative">
              {/* Decorative Ring */}
              <svg
                className="absolute inset-0 w-full h-full animate-spin-slow"
                viewBox="0 0 200 200"
              >
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop
                      offset="0%"
                      style={{ stopColor: "#ffffff", stopOpacity: 0.2 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#ffffff", stopOpacity: 0.05 }}
                    />
                  </linearGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              {/* Success Check Animation */}
              <div className="relative z-10 transform transition-all duration-700 animate-bounce-subtle">
                <svg className="w-32 h-32 mx-auto" viewBox="0 0 100 100" fill="none">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="white"
                    strokeWidth="5"
                    className="opacity-20"
                  />
                  <path
                    className="check"
                    d="M30 50l15 15 25-25"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 animate-fade-up">
              <h1 className="text-6xl font-bold text-white mb-6">Thank You!</h1>

              <p className="text-xl text-white/90 leading-relaxed">
                Your registration was successful.
                <br />
                We will get in touch with you soon.
              </p>

              {/* Info Cards */}
              <div className="grid md:grid-cols-2 gap-6 mt-10">
                {/* Check Our Website Card */}
                <a
                  href="https://www.ssim.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white transform hover:scale-105 transition-transform"
                >
                  <svg
                    className="w-12 h-12 mx-auto mb-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold mb-2">Check Our Website</h3>
                  <p className="text-sm text-white/80">
                    Visit our website for more information
                    <br />
                    about courses and upcoming events.
                  </p>
                </a>

                {/* Next Steps Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white transform hover:scale-105 transition-transform">
                  <svg
                    className="w-12 h-12 mx-auto mb-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      strokeWidth="2"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
                  <p className="text-sm text-white/80">
                    Our team will review your application
                    <br />
                    and contact you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-white/60 self-center mt-16 text-sm">
            <p>© 2024 Siva Sivani Institute of Management. All rights reserved.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        .check {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: draw 1s ease forwards;
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </>
  );
}
