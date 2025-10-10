"use client";
import Image from "next/image";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import "../../app/globals.css";

const Page = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="relative z-10 h-full sm:h-[560px] sm:pt-20 py-12 text-white">
        <Image
          src="/alumni-guidance/bg.png"
          alt="background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl max-w-[678px] mx-auto">
            SSIM Student-Alumni Community
          </h1>
          <p className="mt-4 text-lg">
            Exclusive & Thriving Student-Alumni Community
          </p>
          <a
            href="https://www.youtube.com/watch?v=X-pMOa8jBYk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-yellow-500 px-6 py-3 text-white"
          >
            <span className="flex items-center">
              <svg
                className="mr-2 h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              WATCH INTRO
            </span>
          </a>
        </div>

        {/* Alumni Images */}
        {isMobile ? (
          <div className="mt-10 relative z-10 flex justify-center">
            <Image
              src="/alumni-guidance/images.png"
              alt="alumni"
              width={350}
              height={340}
              objectFit="contain"
            />
          </div>
        ) : (
          <div className="absolute inset-0 z-0">
            <Image
              src="/alumni-guidance/images (2).png"
              alt="alumni"
              layout="fill"
              objectFit="contain"
              className="mx-auto h-full w-full max-w-7xl"
            />
          </div>
        )}
      </div>
      <AlumniNetwork />
      <GuidingAlumni />
      <AddingValues />
      <GivingBack />
    </>
  );
};

export default Page;

const AlumniNetwork = () => {
  const isMobile = useIsMobile();
  return (
    <iframe
      src="https://wg.univariety.com/widget/abf83374-8d85-47b9-8f2b-cba4a3604866"
      title="Directory Stats"
      width="100%"
      height={isMobile ? "580px" : "480px"}
      loading="lazy"
      description="Profile of Members in the SSIM Alumni Network"
      style={{
        border: "none",
        verticalAlign: "top",
      }}
    ></iframe>
  );
};

const GuidingAlumni = () => {
  const isMobile = useIsMobile();
  return (
    <iframe
      src="https://wg.univariety.com/widget/259a3fb6-4c6e-42af-b232-8f7e374ffda8"
      title="Guiding Alumni"
      width="100%"
      height={isMobile ? "715px" : "570px"}
      loading="lazy"
      description="Siva Sivani Institute of Management Guiding Alumni"
      style={{ border: "none", verticalAlign: "top" }}
    ></iframe>
  );
};

const valuesData = [
  {
    title: "Networking",
    points: [
      "Join quarterly networking sessions online/offline organized by the college",
      "Reconnect with your batchmates, seniors, juniors",
      "Build meaningful connections - personal & business",
    ],
    image: "/alumni-guidance/AddingValues 1.png",
  },
  {
    title: "Learning & Development",
    points: [
      "Get invited to learning webinars & workshops at no cost",
      "Opportunity to upskill in various areas",
      "Meet faculty/founders of top universities/organizations",
    ],
    image: "/alumni-guidance/AddingValues 2.png",
  },
  {
    title: "Recognition",
    points: [
      "Get featured on the college's social media & website for your achievements",
      "Nomination for illustrious alumni awards",
      "Receive a certificate of recognition for guiding juniors",
    ],
    image: "/alumni-guidance/AddingValues 3.png",
  },
  {
    title: "Nostalgia",
    points: [
      "Receive updates about your college's achievements",
      "Throwback memories of students, teachers, events, etc.",
      "Updates about your batchmates",
    ],
    image: "/alumni-guidance/AddingValues 4.png",
  },
  {
    title: "Benefits",
    points: [
      "Access to alumni directory for networking",
      "Discounts on certifications & other learning opportunities",
      "Access to job & internship opportunities",
    ],
    image: "/alumni-guidance/AddingValues 5.png",
  },
];

const AddingValues = () => {
  return (
    <div className="py-20 px-4 md:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Adding value to our Alumni
        </h2>
        <p className="mt-4 text-gray-600">
          We believe in nurturing our students even after they graduate from
          college. Here’s how we do it!
        </p>
      </div>

      <div className="mt-12 border-b max-w-6xl mx-auto">
        <div className="flex justify-center flex-wrap space-x-4 md:space-x-8">
          {valuesData.map((item) => (
            <a
              key={item.title}
              href={`#${item.title}`}
              className="pb-2 text-sm md:text-base text-gray-500 hover:text-yellow-500 transition-colors"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 space-y-20">
        {valuesData.map((item, index) => (
          <div
            id={item.title}
            key={item.title}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-8 items-center"
          >
            <div
              className={`order-1 ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`order-2 ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <h3 className="text-2xl font-bold text-black">{item.title}</h3>
              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://ags.univariety.com/user/SSIM/login"
                className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 inline-block transition-colors"
              >
                Sign Up
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const givingBackData = [
  {
    title: "Be A Mentor",
    description:
      "We believe mentoring is a great opportunity for Alumni to develop new skills and have a chance to share the benefit of their experience with young Alumnus. As a Alumni mentor, you can help current Alumnus find out more about the reality of courses, certain jobs, sectors and professions based on your personal experiences.",
    image: "/alumni-guidance/GivingBack1.png",
  },
  {
    title: "Give A Career Talk",
    description:
      "Share your career experience with young Alumnus and inspire them to achieve their goals and reach their full potential. We believe Alumnus would benefit tremendously from hearing from alumni who have ‘been there and done that’ and are able to give invaluable advice by sharing their experiences working in a particular role or sector.",
    image: "/alumni-guidance/GivingBack2.png",
  },
];

const GivingBack = () => {
  return (
    <div className="bg-gray-50 sm:py-20 py-16 px-4 md:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Giving back to College
        </h2>
        <p className="mt-4 text-gray-600">
          Your relationship with SSIM doesn't end once you graduate. You can
          stay involved by giving back in a variety of ways.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-16 space-y-8">
        {givingBackData.map((item, index) => (
          <div
            key={item.title}
            className="bg-white p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div
              className={`order-1 ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "300px" }}
              />
            </div>
            <div
              className={`order-2 ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
              <p className="mt-4 text-gray-600">{item.description}</p>
              <a
                href="https://ags.univariety.com/user/SSIM/login"
                className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-500 inline-block transition-colors"
              >
                I am Interested
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
