"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { CollectionPageSchema } from "@/components/Schema";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const page = () => {
  return (
    <>
      <CollectionPageSchema
        name="SSIM Hyderabad Success Stories"
        description="Read inspiring success stories from SSIM Hyderabad—alumni achievements, student milestones, and career journeys that exemplify dedication and excellence."
        url="https://ssim.ac.in/success-stories"
        mainEntity={{
          "@type": "ItemList",
          itemListElement: [],
        }}
      />
      <Banner />
      <StudentInsights />
      <SuccessStories />
      <TopCareers />
      <TopCompanies />
      <Benefits />
      <AlumniMentors />
    </>
  );
};

export default page;

const Banner = () => {
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-[#6B21A8] via-[#7C3AED] to-[#2563EB] text-white py-12 sm:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
            <div className="text-center md:w-[320px] md:ml-auto md:text-left">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold md:!leading-[1.2] md:w-min">
                Creating Student Successes, Always!
              </h1>
              <div className="mt-8 flex items-center justify-center md:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => setIsIntroOpen(true)}
                  className="rounded-full max-w-fit bg-[#6C3EAA] border-2 border-white px-6 py-2.5 text-white font-semibold flex items-center gap-3 text-sm tracking-wide shadow-[0_10px_28px_rgba(0,0,0,0.35)] hover:bg-[#5A3390] transition-colors"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white flex-shrink-0">
                    <span className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-purple-700 border-b-[6px] border-b-transparent ml-0.5" />
                  </span>
                  WATCH INTRO
                </button>
                <img
                  src="/success-stories/watch-intro-arrow.png"
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-auto hidden sm:block"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="/success-stories/banner-img.svg"
                alt="Success Stories"
                className="w-full h-full max-w-[550px]"
              />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isIntroOpen} onOpenChange={setIsIntroOpen}>
        <DialogContent className="sm:max-w-4xl border-none bg-transparent p-0">
          <DialogClose className="absolute -top-10 right-0 text-white hover:text-gray-300 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            Close
          </DialogClose>
          <div className="w-full aspect-video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/miXLSDJ9RkI?rel=0&modestbranding=1&playsinline=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const StudentInsights = () => {
  return (
    <div className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Student Insights</h2>
          <p className="mt-4 text-gray-600">
            Siva Sivani Institute of Management students are in dominating
            positions across the world in different Careers and Companies.
          </p>
        </div>
        <div className="sm:mt-12 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto">
          <div className="flex justify-center sm:justify-start items-center space-x-4">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39.64"
                height="34.839"
                viewBox="0 0 39.64 34.839"
              >
                <path
                  id="_003-portfolio"
                  data-name="003-portfolio"
                  d="M38.485,4.646H27.949V3.484A3.488,3.488,0,0,0,24.465,0H15.175a3.488,3.488,0,0,0-3.484,3.484V4.645H1.161A1.164,1.164,0,0,0,0,5.807V31.355a3.488,3.488,0,0,0,3.484,3.484H36.156a3.488,3.488,0,0,0,3.484-3.484V5.827A1.127,1.127,0,0,0,38.485,4.646ZM14.013,3.484a1.163,1.163,0,0,1,1.161-1.161h9.291a1.163,1.163,0,0,1,1.161,1.161V4.645H14.013ZM36.867,6.968,33.26,17.787a1.159,1.159,0,0,1-1.1.794H25.626V17.42a1.161,1.161,0,0,0-1.161-1.161H15.175a1.161,1.161,0,0,0-1.161,1.161v1.161H7.48a1.159,1.159,0,0,1-1.1-.794L2.773,6.968ZM23.3,18.581V20.9H16.336V18.581ZM37.317,31.355a1.163,1.163,0,0,1-1.161,1.161H3.484a1.163,1.163,0,0,1-1.161-1.161V12.963l1.853,5.559A3.479,3.479,0,0,0,7.48,20.9h6.533v1.161a1.161,1.161,0,0,0,1.161,1.161h9.291a1.161,1.161,0,0,0,1.161-1.161V20.9h6.533a3.479,3.479,0,0,0,3.3-2.382l1.853-5.559Zm0,0"
                  fill="#d8bb35"
                />
              </svg>
            </div>
            <div>
              <p className="text-3xl font-bold">82%+</p>
              <p className="text-sm text-gray-500">
                Total Working Professionals
              </p>
            </div>
          </div>
          <div className="flex justify-center sm:justify-start items-center space-x-4">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44.861"
                height="44.861"
                viewBox="0 0 44.861 44.861"
              >
                <g
                  id="Group_81633"
                  data-name="Group 81633"
                  transform="translate(-3.5 -3.5)"
                >
                  <path
                    id="Path_184109"
                    data-name="Path 184109"
                    d="M39.143,29.472a1.18,1.18,0,0,1-1.181-1.181V5.861h-18.1v22.43a1.181,1.181,0,0,1-2.361,0V4.681A1.18,1.18,0,0,1,18.681,3.5H39.143a1.18,1.18,0,0,1,1.181,1.181V28.292A1.18,1.18,0,0,1,39.143,29.472Z"
                    transform="translate(-2.982)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184110"
                    data-name="Path 184110"
                    d="M4.681,34.815A1.18,1.18,0,0,1,3.5,33.634V22.477a1.18,1.18,0,0,1,.8-1.116l11.018-3.8a1.18,1.18,0,1,1,.769,2.232L5.861,23.319V33.634a1.18,1.18,0,0,1-1.181,1.181Z"
                    transform="translate(0 -2.981)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184111"
                    data-name="Path 184111"
                    d="M55.7,34.815a1.18,1.18,0,0,1-1.181-1.181V23.319L44.3,19.8a1.18,1.18,0,0,1,.769-2.232l11.018,3.8a1.18,1.18,0,0,1,.8,1.116V33.634A1.18,1.18,0,0,1,55.7,34.814Z"
                    transform="translate(-8.519 -2.981)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184112"
                    data-name="Path 184112"
                    d="M24.681,21.222A1.18,1.18,0,0,1,23.5,20.042V17.681a1.181,1.181,0,1,1,2.361,0v2.361A1.18,1.18,0,0,1,24.681,21.222Z"
                    transform="translate(-4.259 -2.769)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184113"
                    data-name="Path 184113"
                    d="M11.681,31.222A1.18,1.18,0,0,1,10.5,30.042V27.681a1.181,1.181,0,1,1,2.361,0v2.361A1.18,1.18,0,0,1,11.681,31.222Z"
                    transform="translate(-1.491 -4.898)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184114"
                    data-name="Path 184114"
                    d="M51.681,31.222A1.18,1.18,0,0,1,50.5,30.042V27.681a1.181,1.181,0,1,1,2.361,0v2.361A1.18,1.18,0,0,1,51.681,31.222Z"
                    transform="translate(-10.009 -4.898)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184115"
                    data-name="Path 184115"
                    d="M31.681,21.222A1.18,1.18,0,0,1,30.5,20.042V17.681a1.181,1.181,0,0,1,2.361,0v2.361A1.18,1.18,0,0,1,31.681,21.222Z"
                    transform="translate(-5.75 -2.769)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184116"
                    data-name="Path 184116"
                    d="M38.681,21.222A1.18,1.18,0,0,1,37.5,20.042V17.681a1.181,1.181,0,1,1,2.361,0v2.361A1.18,1.18,0,0,1,38.681,21.222Z"
                    transform="translate(-7.241 -2.769)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184117"
                    data-name="Path 184117"
                    d="M24.681,13.222A1.18,1.18,0,0,1,23.5,12.042V9.681a1.181,1.181,0,1,1,2.361,0v2.361A1.18,1.18,0,0,1,24.681,13.222Z"
                    transform="translate(-4.259 -1.065)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184118"
                    data-name="Path 184118"
                    d="M31.681,13.222A1.18,1.18,0,0,1,30.5,12.042V9.681a1.181,1.181,0,0,1,2.361,0v2.361A1.18,1.18,0,0,1,31.681,13.222Z"
                    transform="translate(-5.75 -1.065)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184119"
                    data-name="Path 184119"
                    d="M38.681,13.222A1.18,1.18,0,0,1,37.5,12.042V9.681a1.181,1.181,0,1,1,2.361,0v2.361A1.18,1.18,0,0,1,38.681,13.222Z"
                    transform="translate(-7.241 -1.065)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184120"
                    data-name="Path 184120"
                    d="M24.681,29.222A1.18,1.18,0,0,1,23.5,28.042V25.681a1.181,1.181,0,0,1,2.361,0v2.361A1.18,1.18,0,0,1,24.681,29.222Z"
                    transform="translate(-4.259 -4.472)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184121"
                    data-name="Path 184121"
                    d="M31.681,29.222A1.18,1.18,0,0,1,30.5,28.042V25.681a1.181,1.181,0,0,1,2.361,0v2.361A1.18,1.18,0,0,1,31.681,29.222Z"
                    transform="translate(-5.75 -4.472)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184122"
                    data-name="Path 184122"
                    d="M38.681,29.222A1.18,1.18,0,0,1,37.5,28.042V25.681a1.181,1.181,0,0,1,2.361,0v2.361A1.18,1.18,0,0,1,38.681,29.222Z"
                    transform="translate(-7.241 -4.472)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184123"
                    data-name="Path 184123"
                    d="M12.029,49.057a5.438,5.438,0,1,1,5.438-5.438A5.444,5.444,0,0,1,12.029,49.057Zm0-8.514a3.077,3.077,0,1,0,3.077,3.077A3.08,3.08,0,0,0,12.029,40.543Z"
                    transform="translate(-0.658 -7.386)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184124"
                    data-name="Path 184124"
                    d="M12.551,58.051H4.681A1.18,1.18,0,0,1,3.5,56.87a7.868,7.868,0,0,1,15.214-2.822,1.18,1.18,0,1,1-2.205.843,5.508,5.508,0,0,0-10.521.8h6.563a1.181,1.181,0,1,1,0,2.361Z"
                    transform="translate(0 -9.69)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184125"
                    data-name="Path 184125"
                    d="M49.029,49.057a5.438,5.438,0,1,1,5.438-5.438A5.444,5.444,0,0,1,49.029,49.057Zm0-8.514a3.077,3.077,0,1,0,3.077,3.077A3.08,3.08,0,0,0,49.029,40.543Z"
                    transform="translate(-8.538 -7.386)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184126"
                    data-name="Path 184126"
                    d="M55.181,58.051h-7.87a1.181,1.181,0,1,1,0-2.361h6.563a5.508,5.508,0,0,0-10.521-.8,1.18,1.18,0,1,1-2.205-.843A7.868,7.868,0,0,1,56.362,56.87,1.18,1.18,0,0,1,55.181,58.051Z"
                    transform="translate(-8.001 -9.69)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184127"
                    data-name="Path 184127"
                    d="M11.681,20.054A1.18,1.18,0,0,1,10.5,18.874V13.042a1.181,1.181,0,0,1,.716-1.085L16.724,9.6a1.181,1.181,0,0,1,.93,2.17L12.861,13.82v5.053A1.18,1.18,0,0,1,11.681,20.054Z"
                    transform="translate(-1.491 -1.278)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184128"
                    data-name="Path 184128"
                    d="M50.19,20.054a1.18,1.18,0,0,1-1.181-1.181V13.82l-4.793-2.054a1.181,1.181,0,0,1,.93-2.17l5.508,2.361a1.181,1.181,0,0,1,.716,1.085v5.832A1.18,1.18,0,0,1,50.19,20.054Z"
                    transform="translate(-8.519 -1.278)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184129"
                    data-name="Path 184129"
                    d="M30.19,45.88a6.69,6.69,0,1,1,6.69-6.69A6.7,6.7,0,0,1,30.19,45.88Zm0-11.018a4.329,4.329,0,1,0,4.329,4.329A4.334,4.334,0,0,0,30.19,34.861Z"
                    transform="translate(-4.259 -6.176)"
                    fill="#d8bb35"
                  />
                  <path
                    id="Path_184130"
                    data-name="Path 184130"
                    d="M38,57.518H20.681A1.18,1.18,0,0,1,19.5,56.338a9.838,9.838,0,1,1,19.676,0A1.18,1.18,0,0,1,38,57.518ZM21.954,55.157H36.722a7.478,7.478,0,0,0-14.768,0Z"
                    transform="translate(-3.407 -9.158)"
                    fill="#d8bb35"
                  />
                </g>
              </svg>
            </div>
            <div>
              <p className="text-3xl font-bold">80+</p>
              <p className="text-sm text-gray-500">
                Startups Founded By Alumni
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const successStoriesData = [
  {
    name: "aditya sanukara",
    batch: "2015",
    image: "/success-stories/aditya-sunkara.jpg",
    course: "Siva Sivani Institute of Management, PGDM, 2015",
    position: "N/A",
  },
  {
    name: "Biplav Kumar",
    batch: "2020",
    image: "/success-stories/biplav-kumar.png",
    course: "Siva Sivani Institute of Management, PGDM MK/IG, 2020",
    position: "Senior Manager at Bank of Baroda",
  },
  {
    name: "Dilip Varma",
    batch: "2019",
    image: "/success-stories/dilip-verma.jpg",
    course: "Siva Sivani Institute of Management, PGDM BIFAAS, 2019",
    position: "US Tax Specialist at Kreston International",
  },
  {
    name: "Ananya Ashok",
    batch: "2021",
    image: "/success-stories/ananya-ashok.jpg",
    course: "Siva Sivani Institute of Management, PGDM BIFAAS, 2021",
    position: "Sr Analyst at Deloitte Consulting LLP",
  },
  {
    name: "Rijesh K",
    batch: "2009",
    image: "/success-stories/rijesh.jpg",
    course: "Siva Sivani Institute of Management, PGDM MKTG, 2009",
    position: "SR Commander at Air India",
  },
  {
    name: "Ramesh Kumar",
    batch: "2013",
    image: "/success-stories/ramesh-kumar.jpg",
    course: "Siva Sivani Institute of Management, PGDM BFS, 2013",
    position: "Product Manager at Harris Computer",
  },
  {
    name: "Rahul Adarsh",
    batch: "2011",
    image: "/success-stories/rahul-adarsh.jpg",
    course: "Siva Sivani Institute of Management, PGDM, 2011",
    position: "AVP at Sciva Strat India Private Limited",
  },
  {
    name: "Avishek Agarwal",
    batch: "2010",
    image: "/success-stories/avishek-agarwal.jpg",
    course: "Siva Sivani Institute of Management, PGDM, 2010",
    position: "Owner at Phoenix Enterprises",
  },
  {
    name: "Abhishek Kumar",
    batch: "2011",
    image: "/success-stories/abhishek-kumar.jpg",
    course: "Siva Sivani Institute of Management, PGDM MKTG, 2011",
    position: "Zonal Head at Finolex Cables Ltd",
  },
];

const SuccessStories = () => {
  return (
    <div className="bg-purple-50 py-12 sm:py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Success Stories</h2>
          <p className="mt-4 text-gray-600">
            Here are some notable alumni who are out there making their dreams
            come true and making us proud too!
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: false,
          }}
          className="w-full mt-12 [&_.carousel-content]:transition-transform [&_.carousel-content]:duration-300 [&_.carousel-content]:ease-in-out"
        >
          <CarouselContent>
            {successStoriesData.map((story, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <div className="bg-white p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-left h-full flex flex-col w-[280px] mx-auto sm:w-full min-h-[350px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                    <div className="flex-shrink-0">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-24 h-24 rounded-full mx-auto"
                      />
                      <h3 className="mt-4 text-lg font-bold">{story.name}</h3>
                      <p className="text-sm text-gray-500">
                        Batch {story.batch}
                      </p>
                    </div>
                    <div className="flex-grow mt-4 pt-4 border-t border-gray-200 space-y-2 text-left">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 pt-1 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18.007"
                            viewBox="0 0 18 18.007"
                          >
                            <g
                              id="Path_183018"
                              data-name="Path 183018"
                              transform="translate(-0.098)"
                              fill="#d8bb35"
                            >
                              <path
                                d="M 0.2354781329631805 17.8653736114502 L 1.223726153373718 13.55068874359131 L 1.232738614082336 13.52354049682617 C 1.391648650169373 13.04419994354248 1.664588570594788 12.60208988189697 2.022058725357056 12.24497985839844 L 4.880518436431885 9.385210037231445 L 4.951298713684082 9.314400672912598 L 4.880398750305176 9.243710517883301 L 0.2391747385263443 4.615597248077393 L 4.669694900512695 0.1416657269001007 L 9.331818580627441 4.790600299835205 L 9.402548789978027 4.861130237579346 L 9.473158836364746 4.79049015045166 L 13.81130886077881 0.4505003392696381 C 14.02931880950928 0.232410341501236 14.31971836090088 0.1123003363609314 14.62901878356934 0.1123003363609314 C 14.93793869018555 0.1123003363609314 15.22805881500244 0.2321603298187256 15.44593906402588 0.4498103260993958 L 17.65097808837891 2.652580261230469 C 17.86927795410156 2.870660305023193 17.98956871032715 3.160620450973511 17.98969841003418 3.46906042098999 C 17.98982810974121 3.777540445327759 17.86978912353516 4.067600250244141 17.65168952941895 4.285830497741699 L 13.3167085647583 8.622799873352051 L 13.24592876434326 8.693610191345215 L 13.31682872772217 8.764300346374512 L 17.95682334899902 13.39118385314941 L 13.52626323699951 17.86515426635742 L 8.865378379821777 13.21738052368164 L 8.794648170471191 13.1468505859375 L 8.724039077758789 13.21750068664551 L 5.861428737640381 16.08139038085938 C 5.503778457641602 16.43859100341797 5.061118602752686 16.71129035949707 4.581368446350098 16.86993980407715 L 4.554237365722656 16.87893295288086 L 0.2354781329631805 17.8653736114502 Z M 2.333218574523926 14.1041898727417 L 2.2928786277771 14.2802906036377 L 1.874218583106995 16.10795021057129 L 1.838648676872253 16.26324081420898 L 1.993968605995178 16.22776985168457 L 3.823818683624268 15.80985069274902 L 4.000288486480713 15.76955032348633 L 3.872218608856201 15.64161014556885 L 2.461028575897217 14.23187065124512 L 2.333218574523926 14.1041898727417 Z M 12.3940486907959 9.545870780944824 L 12.32343864440918 9.616510391235352 L 9.717258453369141 12.22384071350098 L 9.646478652954102 12.2946605682373 L 9.717378616333008 12.3653507232666 L 13.44986820220947 16.0872802734375 L 13.52092838287354 16.15814018249512 L 13.59152889251709 16.08683967590332 L 16.18557929992676 13.46741008758545 L 16.25570869445801 13.3966007232666 L 16.18513870239258 13.3262300491333 L 14.82572841644287 11.9706506729126 L 14.75433826446533 11.8994607925415 L 14.68373870849609 11.97143077850342 L 13.42660140991211 13.25274085998535 L 12.56646537780762 12.40883922576904 L 13.83157825469971 11.11944007873535 L 13.90104866027832 11.0486307144165 L 13.83080863952637 10.97859001159668 L 12.46477890014648 9.616400718688965 L 12.3940486907959 9.545870780944824 Z M 12.83817863464355 3.128490447998047 L 12.76749897003174 3.199200391769409 L 3.02267861366272 12.94838047027588 L 2.951968669891357 13.01912021636963 L 3.022738695144653 13.08981990814209 L 5.016148567199707 15.08119010925293 L 5.086868762969971 15.15184020996094 L 5.157548427581787 15.081130027771 L 14.90237903594971 5.331950187683105 L 14.97308826446533 5.261210441589355 L 14.90231895446777 5.190510272979736 L 12.90889835357666 3.199140310287476 L 12.83817863464355 3.128490447998047 Z M 4.675058841705322 1.848650336265564 L 4.604458808898926 1.919950366020203 L 2.010418653488159 4.53941011428833 L 1.940288662910461 4.610220432281494 L 2.010858535766602 4.680590152740479 L 5.732448577880859 8.391650199890137 L 5.803178787231445 8.462180137634277 L 5.873788833618164 8.39154052734375 L 8.479969024658203 5.784210205078125 L 8.550748825073242 5.713390350341797 L 8.479848861694336 5.6427001953125 L 7.105028629302979 4.271790504455566 L 7.033648490905762 4.200610160827637 L 6.963048458099365 4.272560119628906 L 5.681754589080811 5.578250885009766 L 4.821669101715088 4.734246253967285 L 6.110868453979492 3.4205002784729 L 6.180358409881592 3.349700450897217 L 6.110108852386475 3.279650449752808 L 4.746118545532227 1.919510364532471 L 4.675058841705322 1.848650336265564 Z M 14.62897872924805 1.33685028553009 L 14.55829906463623 1.40755033493042 L 13.76071834564209 2.205470323562622 L 13.69000816345215 2.276220321655273 L 13.76077842712402 2.346920251846313 L 15.75423908233643 4.338300228118896 L 15.82495880126953 4.408950328826904 L 15.89563846588135 4.338240146636963 L 16.69320869445801 3.540310382843018 L 16.76391792297363 3.469570398330688 L 16.69314956665039 3.398870229721069 L 14.69969844818115 1.407500386238098 L 14.62897872924805 1.33685028553009 Z"
                                stroke="none"
                              />
                              <path
                                d="M 14.62896919250488 0.2122898101806641 C 14.3464183807373 0.2122898101806641 14.08114814758301 0.321990966796875 13.88202857971191 0.5211906433105469 L 9.402658462524414 5.002460479736328 L 4.670141220092773 0.2833309173583984 L 0.3803501129150391 4.615154266357422 L 5.092798233032227 9.314290046691895 L 2.092729568481445 12.3157205581665 C 1.746238708496094 12.6618709564209 1.481689453125 13.0903902053833 1.327638626098633 13.55504035949707 L 1.320133209228516 13.5776481628418 L 0.3685150146484375 17.73241233825684 L 4.549978256225586 16.77499008178711 C 5.014998435974121 16.62121963500977 5.44407844543457 16.35688018798828 5.790708541870117 16.01069068908691 L 8.794538497924805 13.0055103302002 L 13.52581691741943 17.72348785400391 L 17.81564712524414 13.39162635803223 L 13.10442924499512 8.693719863891602 L 17.58095932006836 4.215140342712402 C 17.7801685333252 4.015810012817383 17.88981819152832 3.750860214233398 17.88969802856445 3.469110488891602 C 17.88956832885742 3.187370300292969 17.77968788146973 2.922510147094727 17.58029937744141 2.723320007324219 L 15.37525844573975 0.5205612182617188 C 15.17627906799316 0.3217906951904297 14.91123867034912 0.212310791015625 14.62896919250488 0.2122898101806641 M 15.82501888275146 4.550350189208984 L 13.54855918884277 2.276269912719727 L 14.62892913818359 1.195449829101562 L 16.90535926818848 3.469510078430176 L 15.82501888275146 4.550350189208984 M 4.963089942932129 4.732912063598633 L 5.680420875549316 5.436831474304199 L 7.032878875732422 4.058620452880859 L 8.692248344421387 5.71328067779541 L 5.803288459777832 8.603509902954102 L 1.799118041992188 4.61067008972168 L 4.674618721008301 1.706991195678711 L 6.321208953857422 3.348930358886719 L 4.963089942932129 4.732912063598633 M 5.086918830871582 15.29324054718018 L 2.810518264770508 13.0191707611084 L 12.8381290435791 2.987090110778809 L 15.11452865600586 5.261159896850586 L 5.086918830871582 15.29324054718018 M 12.70788192749023 12.4074878692627 L 13.42525386810303 13.11132049560547 L 14.75355911254883 11.75747013092041 L 16.39687919616699 13.39615058898926 L 13.5213680267334 16.29980087280273 L 9.504978179931641 12.29477024078369 L 12.3939380645752 9.404540061950684 L 14.04189872741699 11.04786014556885 L 12.70788192749023 12.4074878692627 M 1.705598831176758 16.39620971679688 L 2.276088714599609 13.90577030181885 L 4.199028968811035 15.82672023773193 L 1.705598831176758 16.39620971679688 M 4.669248580932617 0 L 9.40242862701416 4.719790458679199 L 13.74057865142822 0.3798007965087891 C 14.23009872436523 -0.1099109649658203 15.02676868438721 -0.110260009765625 15.51660919189453 0.3790607452392578 L 17.72164916992188 2.581830024719238 C 17.95882797241211 2.818770408630371 18.08954811096191 3.13385009765625 18.08969879150391 3.469019889831543 C 18.0898380279541 3.804190635681152 17.95938873291016 4.119410514831543 17.7224178314209 4.356520652770996 L 13.38743877410889 8.693490028381348 L 18.09799957275391 13.39074039459229 L 13.52670860290527 18.00682067871094 L 8.794768333435059 13.2881908416748 L 5.932158470153809 16.15208053588867 C 5.563368797302246 16.52041053771973 5.107288360595703 16.80134963989258 4.612768173217773 16.96487998962402 L 4.581158638000488 16.97536087036133 L 0.1024284362792969 17.99834060668945 L 1.127307891845703 13.52371978759766 L 1.137828826904297 13.49203014373779 C 1.30164909362793 12.99790000915527 1.5830078125 12.54224014282227 1.951377868652344 12.17423057556152 L 4.809788703918457 9.314519882202148 L 0.09799766540527344 4.616040229797363 L 4.669248580932617 0 Z M 15.82490921020508 4.267550468444824 L 16.62247848510742 3.469620704650879 L 14.6290283203125 1.478250503540039 L 13.83144855499268 2.27617073059082 L 15.82490921020508 4.267550468444824 Z M 5.683088302612305 5.719660758972168 L 4.680258750915527 4.735580444335938 L 6.039498329162598 3.350460052490234 L 4.675508499145508 1.990320205688477 L 2.08146858215332 4.609780311584473 L 5.803058624267578 8.320839881896973 L 8.409238815307617 5.713510513305664 L 7.034419059753418 4.342599868774414 L 5.683088302612305 5.719660758972168 Z M 5.086818695068359 15.01044082641602 L 14.83164882659912 5.261260032653809 L 12.83822822570801 3.269890785217285 L 3.093399047851562 13.01906967163086 L 5.086818695068359 15.01044082641602 Z M 13.42794799804688 13.39414978027344 L 12.425048828125 12.41018104553223 L 13.76019859313965 11.04940032958984 L 12.39416885375977 9.687210083007812 L 9.787988662719727 12.29454040527344 L 13.52047920227051 16.01646995544434 L 16.11452865600586 13.39704036712646 L 14.75510883331299 12.04146003723145 L 13.42794799804688 13.39414978027344 Z M 1.971698760986328 16.13027954101562 L 3.801548957824707 15.71235084533691 L 2.390358924865723 14.30261993408203 L 1.971698760986328 16.13027954101562 Z"
                                stroke="none"
                                fill="#fff"
                              />
                            </g>
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700 font-medium">
                          {story.course}
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 pt-1 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21.64"
                            height="18.839"
                            viewBox="0 0 39.64 34.839"
                          >
                            <path
                              id="_003-portfolio"
                              data-name="003-portfolio"
                              d="M38.485,4.646H27.949V3.484A3.488,3.488,0,0,0,24.465,0H15.175a3.488,3.488,0,0,0-3.484,3.484V4.645H1.161A1.164,1.164,0,0,0,0,5.807V31.355a3.488,3.488,0,0,0,3.484,3.484H36.156a3.488,3.488,0,0,0,3.484-3.484V5.827A1.127,1.127,0,0,0,38.485,4.646ZM14.013,3.484a1.163,1.163,0,0,1,1.161-1.161h9.291a1.163,1.163,0,0,1,1.161,1.161V4.645H14.013ZM36.867,6.968,33.26,17.787a1.159,1.159,0,0,1-1.1.794H25.626V17.42a1.161,1.161,0,0,0-1.161-1.161H15.175a1.161,1.161,0,0,0-1.161,1.161v1.161H7.48a1.159,1.159,0,0,1-1.1-.794L2.773,6.968ZM23.3,18.581V20.9H16.336V18.581ZM37.317,31.355a1.163,1.163,0,0,1-1.161,1.161H3.484a1.163,1.163,0,0,1-1.161-1.161V12.963l1.853,5.559A3.479,3.479,0,0,0,7.48,20.9h6.533v1.161a1.161,1.161,0,0,0,1.161,1.161h9.291a1.161,1.161,0,0,0,1.161-1.161V20.9h6.533a3.479,3.479,0,0,0,3.3-2.382l1.853-5.559Zm0,0"
                              fill="#d8bb35"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gold-light font-medium">
                          {story.position}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 md:-left-12" />
          <CarouselNext className="right-1 md:-right-12" />
        </Carousel>
      </div>
    </div>
  );
};

const TopCareers = () => {
  const isMobile = useIsMobile();
  return (
    <div className="bg-navy py-12 sm:py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Global Citizens & Diverse Career Paths
          </h2>
          <p className="mt-4 text-white">
            SSIM students are making a mark in different industries across the
            globe. We are proud to see how successful they are today!
          </p>
        </div>

        <iframe
          src="https://wg.univariety.com/widget/45461317-3036-46e8-a8c1-002818b9584e"
          title="Top Industries"
          width="100%"
          height={isMobile ? "550px" : "540px"}
          loading="lazy"
          description="Top Careers"
          style={{
            border: "none",
            verticalAlign: "top",
            borderRadius: "10px",
          }}
        ></iframe>
      </div>
    </div>
  );
};

const TopCompanies = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 py-12 sm:py-20">
      <iframe
        src="https://wg.univariety.com/widget/da77a6f0-683e-4b4c-92d5-2f8cf387c05b"
        title="Top Companies"
        width="100%"
        height="100%"
        className="h-[540px] sm:h-[540px]"
        loading="lazy"
        description="Our Alumni Work with Leading Companies Globally"
        style={{
          border: "none",
          verticalAlign: "top",
          scrollbarWidth: "none",
        }}
      ></iframe>
    </div>
  );
};

const Benefits = () => {
  const [activeTab, setActiveTab] = useState("view");

  const tabs = [
    {
      id: "view",
      label: "View",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      ),
      content: {
        title: "View Alumni Journey",
        description:
          "Right from entrance exams to current job roles, students can view their alumni journeys. The unique platform enables students to filter by interest and view thousands of alumni profiles.",
        image: "/benefits/alumni-journey.png",
      },
    },
    {
      id: "watch",
      label: "Watch",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      content: {
        title: "Watch Real-time Video Case Studies",
        description:
          "Students get access to a large video library with alumni videos on various topics, real-time case studies related to internships, application process and more. The video library also has pre-recorded webinars conducted by alumni.",
        image: "/benefits/success-stories.png",
      },
    },
    {
      id: "ask",
      label: "Ask",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      content: {
        title: "Ask 1-1 Questions to Alumni",
        description:
          "There’s no better way to seek guidance from someone who’s been there and done that. Students can reach out to their seniors from across batches to ask anything and everything about career clarity.",
        image: "/benefits/ask-questions.png",
      },
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="bg-[#F5F5F5] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase mb-4">
            YOUR CHILD GETS THESE BENEFITS
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            A single platform for students to connect with their Alumni of
            different batches and branches from around the world.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="sm:bg-white bg-[#F5F5F5] rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:p-8 items-center">
            {/* Left Column - Tab Navigation */}
            <div className="lg:col-span-3">
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-4 rounded-lg transition-all duration-200 text-left ${
                      activeTab === tab.id
                        ? "bg-yellow-400 text-black font-medium shadow-md"
                        : "text-gray-600 hover:text-black hover:bg-gray-50"
                    }`}
                  >
                    <span
                      className={`${
                        activeTab === tab.id ? "text-black" : "text-yellow-500"
                      }`}
                    >
                      {tab.icon}
                    </span>
                    <span className="text-lg">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Tab Content */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Content */}
                <div className="flex flex-col justify-center">
                  <div className="transition-all duration-300 ease-in-out">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                      {activeTabData.content.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {activeTabData.content.description}
                    </p>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="flex justify-center items-center">
                  <div className="transition-all duration-300 ease-in-out">
                    <Image
                      src={`/success-stories/benefit${
                        activeTab === "view"
                          ? "1"
                          : activeTab === "watch"
                          ? "2"
                          : "3"
                      }.png`}
                      alt={activeTabData.content.title}
                      width={600}
                      height={400}
                      className="rounded-lg w-full h-auto max-w-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const alumniMentorsData = [
  {
    name: "Vinod Kumar",
    batch: "2013",
    image: "/success-stories/vinod-kumar.jpg",
    course: "Siva Sivani Institute of Management, PGDM BIFAAS, 2013",
    position: "Manager at KPMG Global Services",
  },
  {
    name: "Suvarna V Ch",
    batch: "2007",
    image: "/success-stories/suvarna-v-ch.jpg",
    course: "Siva Sivani Institute of Management, PGDM, 2007",
    position: "Assistant Vice President at A to Z EduTech Pvt Ltd",
  },
  {
    name: "Vedula Satya Manasa",
    batch: "2014",
    image: "/success-stories/vedula-satya-manasa.png",
    course: "Siva Sivani Institute of Management, PGDM, 2014",
    position: "Manager at Deloitte USI",
  },
  {
    name: "T Goutham Harish",
    batch: "2015",
    image: "/success-stories/t-goutham-harish.png",
    course: "Siva Sivani Institute of Management, PGDM, 2015",
    position: "Senior SAP Consultant at Accenture",
  },
  {
    name: "Shaik Rafiya Tanveer",
    batch: "2015",
    image: "/success-stories/shaik-rafiya-tanveer.jpg",
    course: "Siva Sivani Institute of Management, PGDM BIFAAS, 2015",
    position: "Senior Manager Sales Business Development at NTT DATA",
  },
  {
    name: "Anchal Srivastava",
    batch: "2010",
    image: "/success-stories/anchal-srivastava.jpg",
    course: "Siva Sivani Institute of Management, PGDM HR, 2010",
    position: "Growth & Development at Deloitte Consulting LLP",
  },
  {
    name: "Gagan Kishor",
    batch: "2009",
    image: "/success-stories/gagan-kishor.jpg",
    course: "Siva Sivani Institute of Management, PGDM MKTG, 2009",
    position: "Vice President at Marsh McLennan",
  },
  {
    name: "Shweta Kedia",
    batch: "2019",
    image: "/success-stories/shweta-kedia.png",
    course: "Siva Sivani Institute of Management, PGDM BFS, 2019",
    position: "Senior Operations Analyst at The Ciko Group Limited",
  },
  {
    name: "Moses Mendem",
    batch: "2014",
    image: "/success-stories/moses-mendem.jpg",
    course: "Siva Sivani Institute of Management, PGDM HR, 2014",
    position:
      "Manager - HR Business Partner at Deloitte Touche Tohmatsu India, LLP",
  },
  {
    name: "Rijesh K",
    batch: "2009",
    image: "/success-stories/rijesh-k.jpg",
    course: "Siva Sivani Institute of Management, PGDM MKTG, 2009",
    position: "SR Commander at Air India",
  },
];

const AlumniMentors = () => {
  return (
    <div className="bg-[#fffcee] py-12 sm:py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Alumni Mentors
          </h2>
          <p className="mt-4 text-gray-600">
            Our students first-hand guidance from those who’ve been there and
            done that!
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: false,
          }}
          className="w-full mt-12 [&_.carousel-content]:transition-transform [&_.carousel-content]:duration-300 [&_.carousel-content]:ease-in-out"
        >
          <CarouselContent>
            {alumniMentorsData.map((story, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <div className="bg-white p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-left h-full flex flex-col w-[280px] mx-auto sm:w-full min-h-[350px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                    <div className="flex-shrink-0">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-24 h-24 rounded-full mx-auto"
                      />
                      <h3 className="mt-4 text-lg font-bold">{story.name}</h3>
                      <p className="text-sm text-gray-500">
                        Batch {story.batch}
                      </p>
                    </div>
                    <div className="flex-grow mt-4 pt-4 border-t border-gray-200 space-y-2 text-left">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 pt-1 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18.007"
                            viewBox="0 0 18 18.007"
                          >
                            <g
                              id="Path_183018"
                              data-name="Path 183018"
                              transform="translate(-0.098)"
                              fill="#d8bb35"
                            >
                              <path
                                d="M 0.2354781329631805 17.8653736114502 L 1.223726153373718 13.55068874359131 L 1.232738614082336 13.52354049682617 C 1.391648650169373 13.04419994354248 1.664588570594788 12.60208988189697 2.022058725357056 12.24497985839844 L 4.880518436431885 9.385210037231445 L 4.951298713684082 9.314400672912598 L 4.880398750305176 9.243710517883301 L 0.2391747385263443 4.615597248077393 L 4.669694900512695 0.1416657269001007 L 9.331818580627441 4.790600299835205 L 9.402548789978027 4.861130237579346 L 9.473158836364746 4.79049015045166 L 13.81130886077881 0.4505003392696381 C 14.02931880950928 0.232410341501236 14.31971836090088 0.1123003363609314 14.62901878356934 0.1123003363609314 C 14.93793869018555 0.1123003363609314 15.22805881500244 0.2321603298187256 15.44593906402588 0.4498103260993958 L 17.65097808837891 2.652580261230469 C 17.86927795410156 2.870660305023193 17.98956871032715 3.160620450973511 17.98969841003418 3.46906042098999 C 17.98982810974121 3.777540445327759 17.86978912353516 4.067600250244141 17.65168952941895 4.285830497741699 L 13.3167085647583 8.622799873352051 L 13.24592876434326 8.693610191345215 L 13.31682872772217 8.764300346374512 L 17.95682334899902 13.39118385314941 L 13.52626323699951 17.86515426635742 L 8.865378379821777 13.21738052368164 L 8.794648170471191 13.1468505859375 L 8.724039077758789 13.21750068664551 L 5.861428737640381 16.08139038085938 C 5.503778457641602 16.43859100341797 5.061118602752686 16.71129035949707 4.581368446350098 16.86993980407715 L 4.554237365722656 16.87893295288086 L 0.2354781329631805 17.8653736114502 Z M 2.333218574523926 14.1041898727417 L 2.2928786277771 14.2802906036377 L 1.874218583106995 16.10795021057129 L 1.838648676872253 16.26324081420898 L 1.993968605995178 16.22776985168457 L 3.823818683624268 15.80985069274902 L 4.000288486480713 15.76955032348633 L 3.872218608856201 15.64161014556885 L 2.461028575897217 14.23187065124512 L 2.333218574523926 14.1041898727417 Z M 12.3940486907959 9.545870780944824 L 12.32343864440918 9.616510391235352 L 9.717258453369141 12.22384071350098 L 9.646478652954102 12.2946605682373 L 9.717378616333008 12.3653507232666 L 13.44986820220947 16.0872802734375 L 13.52092838287354 16.15814018249512 L 13.59152889251709 16.08683967590332 L 16.18557929992676 13.46741008758545 L 16.25570869445801 13.3966007232666 L 16.18513870239258 13.3262300491333 L 14.82572841644287 11.9706506729126 L 14.75433826446533 11.8994607925415 L 14.68373870849609 11.97143077850342 L 13.42660140991211 13.25274085998535 L 12.56646537780762 12.40883922576904 L 13.83157825469971 11.11944007873535 L 13.90104866027832 11.0486307144165 L 13.83080863952637 10.97859001159668 L 12.46477890014648 9.616400718688965 L 12.3940486907959 9.545870780944824 Z M 12.83817863464355 3.128490447998047 L 12.76749897003174 3.199200391769409 L 3.02267861366272 12.94838047027588 L 2.951968669891357 13.01912021636963 L 3.022738695144653 13.08981990814209 L 5.016148567199707 15.08119010925293 L 5.086868762969971 15.15184020996094 L 5.157548427581787 15.081130027771 L 14.90237903594971 5.331950187683105 L 14.97308826446533 5.261210441589355 L 14.90231895446777 5.190510272979736 L 12.90889835357666 3.199140310287476 L 12.83817863464355 3.128490447998047 Z M 4.675058841705322 1.848650336265564 L 4.604458808898926 1.919950366020203 L 2.010418653488159 4.53941011428833 L 1.940288662910461 4.610220432281494 L 2.010858535766602 4.680590152740479 L 5.732448577880859 8.391650199890137 L 5.803178787231445 8.462180137634277 L 5.873788833618164 8.39154052734375 L 8.479969024658203 5.784210205078125 L 8.550748825073242 5.713390350341797 L 8.479848861694336 5.6427001953125 L 7.105028629302979 4.271790504455566 L 7.033648490905762 4.200610160827637 L 6.963048458099365 4.272560119628906 L 5.681754589080811 5.578250885009766 L 4.821669101715088 4.734246253967285 L 6.110868453979492 3.4205002784729 L 6.180358409881592 3.349700450897217 L 6.110108852386475 3.279650449752808 L 4.746118545532227 1.919510364532471 L 4.675058841705322 1.848650336265564 Z M 14.62897872924805 1.33685028553009 L 14.55829906463623 1.40755033493042 L 13.76071834564209 2.205470323562622 L 13.69000816345215 2.276220321655273 L 13.76077842712402 2.346920251846313 L 15.75423908233643 4.338300228118896 L 15.82495880126953 4.408950328826904 L 15.89563846588135 4.338240146636963 L 16.69320869445801 3.540310382843018 L 16.76391792297363 3.469570398330688 L 16.69314956665039 3.398870229721069 L 14.69969844818115 1.407500386238098 L 14.62897872924805 1.33685028553009 Z"
                                stroke="none"
                              />
                              <path
                                d="M 14.62896919250488 0.2122898101806641 C 14.3464183807373 0.2122898101806641 14.08114814758301 0.321990966796875 13.88202857971191 0.5211906433105469 L 9.402658462524414 5.002460479736328 L 4.670141220092773 0.2833309173583984 L 0.3803501129150391 4.615154266357422 L 5.092798233032227 9.314290046691895 L 2.092729568481445 12.3157205581665 C 1.746238708496094 12.6618709564209 1.481689453125 13.0903902053833 1.327638626098633 13.55504035949707 L 1.320133209228516 13.5776481628418 L 0.3685150146484375 17.73241233825684 L 4.549978256225586 16.77499008178711 C 5.014998435974121 16.62121963500977 5.44407844543457 16.35688018798828 5.790708541870117 16.01069068908691 L 8.794538497924805 13.0055103302002 L 13.52581691741943 17.72348785400391 L 17.81564712524414 13.39162635803223 L 13.10442924499512 8.693719863891602 L 17.58095932006836 4.215140342712402 C 17.7801685333252 4.015810012817383 17.88981819152832 3.750860214233398 17.88969802856445 3.469110488891602 C 17.88956832885742 3.187370300292969 17.77968788146973 2.922510147094727 17.58029937744141 2.723320007324219 L 15.37525844573975 0.5205612182617188 C 15.17627906799316 0.3217906951904297 14.91123867034912 0.212310791015625 14.62896919250488 0.2122898101806641 M 15.82501888275146 4.550350189208984 L 13.54855918884277 2.276269912719727 L 14.62892913818359 1.195449829101562 L 16.90535926818848 3.469510078430176 L 15.82501888275146 4.550350189208984 M 4.963089942932129 4.732912063598633 L 5.680420875549316 5.436831474304199 L 7.032878875732422 4.058620452880859 L 8.692248344421387 5.71328067779541 L 5.803288459777832 8.603509902954102 L 1.799118041992188 4.61067008972168 L 4.674618721008301 1.706991195678711 L 6.321208953857422 3.348930358886719 L 4.963089942932129 4.732912063598633 M 5.086918830871582 15.29324054718018 L 2.810518264770508 13.0191707611084 L 12.8381290435791 2.987090110778809 L 15.11452865600586 5.261159896850586 L 5.086918830871582 15.29324054718018 M 12.70788192749023 12.4074878692627 L 13.42525386810303 13.11132049560547 L 14.75355911254883 11.75747013092041 L 16.39687919616699 13.39615058898926 L 13.5213680267334 16.29980087280273 L 9.504978179931641 12.29477024078369 L 12.3939380645752 9.404540061950684 L 14.04189872741699 11.04786014556885 L 12.70788192749023 12.4074878692627 M 1.705598831176758 16.39620971679688 L 2.276088714599609 13.90577030181885 L 4.199028968811035 15.82672023773193 L 1.705598831176758 16.39620971679688 M 4.669248580932617 0 L 9.40242862701416 4.719790458679199 L 13.74057865142822 0.3798007965087891 C 14.23009872436523 -0.1099109649658203 15.02676868438721 -0.110260009765625 15.51660919189453 0.3790607452392578 L 17.72164916992188 2.581830024719238 C 17.95882797241211 2.818770408630371 18.08954811096191 3.13385009765625 18.08969879150391 3.469019889831543 C 18.0898380279541 3.804190635681152 17.95938873291016 4.119410514831543 17.7224178314209 4.356520652770996 L 13.38743877410889 8.693490028381348 L 18.09799957275391 13.39074039459229 L 13.52670860290527 18.00682067871094 L 8.794768333435059 13.2881908416748 L 5.932158470153809 16.15208053588867 C 5.563368797302246 16.52041053771973 5.107288360595703 16.80134963989258 4.612768173217773 16.96487998962402 L 4.581158638000488 16.97536087036133 L 0.1024284362792969 17.99834060668945 L 1.127307891845703 13.52371978759766 L 1.137828826904297 13.49203014373779 C 1.30164909362793 12.99790000915527 1.5830078125 12.54224014282227 1.951377868652344 12.17423057556152 L 4.809788703918457 9.314519882202148 L 0.09799766540527344 4.616040229797363 L 4.669248580932617 0 Z M 15.82490921020508 4.267550468444824 L 16.62247848510742 3.469620704650879 L 14.6290283203125 1.478250503540039 L 13.83144855499268 2.27617073059082 L 15.82490921020508 4.267550468444824 Z M 5.683088302612305 5.719660758972168 L 4.680258750915527 4.735580444335938 L 6.039498329162598 3.350460052490234 L 4.675508499145508 1.990320205688477 L 2.08146858215332 4.609780311584473 L 5.803058624267578 8.320839881896973 L 8.409238815307617 5.713510513305664 L 7.034419059753418 4.342599868774414 L 5.683088302612305 5.719660758972168 Z M 5.086818695068359 15.01044082641602 L 14.83164882659912 5.261260032653809 L 12.83822822570801 3.269890785217285 L 3.093399047851562 13.01906967163086 L 5.086818695068359 15.01044082641602 Z M 13.42794799804688 13.39414978027344 L 12.425048828125 12.41018104553223 L 13.76019859313965 11.04940032958984 L 12.39416885375977 9.687210083007812 L 9.787988662719727 12.29454040527344 L 13.52047920227051 16.01646995544434 L 16.11452865600586 13.39704036712646 L 14.75510883331299 12.04146003723145 L 13.42794799804688 13.39414978027344 Z M 1.971698760986328 16.13027954101562 L 3.801548957824707 15.71235084533691 L 2.390358924865723 14.30261993408203 L 1.971698760986328 16.13027954101562 Z"
                                stroke="none"
                                fill="#fff"
                              />
                            </g>
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700 font-medium">
                          {story.course}
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 pt-1 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21.64"
                            height="18.839"
                            viewBox="0 0 39.64 34.839"
                          >
                            <path
                              id="_003-portfolio"
                              data-name="003-portfolio"
                              d="M38.485,4.646H27.949V3.484A3.488,3.488,0,0,0,24.465,0H15.175a3.488,3.488,0,0,0-3.484,3.484V4.645H1.161A1.164,1.164,0,0,0,0,5.807V31.355a3.488,3.488,0,0,0,3.484,3.484H36.156a3.488,3.488,0,0,0,3.484-3.484V5.827A1.127,1.127,0,0,0,38.485,4.646ZM14.013,3.484a1.163,1.163,0,0,1,1.161-1.161h9.291a1.163,1.163,0,0,1,1.161,1.161V4.645H14.013ZM36.867,6.968,33.26,17.787a1.159,1.159,0,0,1-1.1.794H25.626V17.42a1.161,1.161,0,0,0-1.161-1.161H15.175a1.161,1.161,0,0,0-1.161,1.161v1.161H7.48a1.159,1.159,0,0,1-1.1-.794L2.773,6.968ZM23.3,18.581V20.9H16.336V18.581ZM37.317,31.355a1.163,1.163,0,0,1-1.161,1.161H3.484a1.163,1.163,0,0,1-1.161-1.161V12.963l1.853,5.559A3.479,3.479,0,0,0,7.48,20.9h6.533v1.161a1.161,1.161,0,0,0,1.161,1.161h9.291a1.161,1.161,0,0,0,1.161-1.161V20.9h6.533a3.479,3.479,0,0,0,3.3-2.382l1.853-5.559Zm0,0"
                              fill="#d8bb35"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gold-light font-medium">
                          {story.position}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 md:-left-12" />
          <CarouselNext className="right-1 md:-right-12" />
        </Carousel>
      </div>
    </div>
  );
};
