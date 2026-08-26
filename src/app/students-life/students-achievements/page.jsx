// import AboutSidebar from "../../components/AboutSidebar";
"use client";
import { useState, useMemo } from "react";
// import SEO from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { industryData } from "@/data/industryData";
import Heading from "@/components/wrappers/Heading";

const breadcrumbItems = [
  { href: "/", label: "Home" },
  { href: "/corporate-connect/industry-visit", label: "Corporate Connect" },
  { label: "Industry Visits" },
];

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const StudentsAchievements = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = useMemo(() => industryData, []);

  const handleImageClick = (event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  return (
    <>
      {/* <SEO
        title="Student Achievements"
        description="Celebrate the achievements of our students at Siva Sivani Institute of Management (SSIM). Discover their accomplishments in academics, competitions, and extracurricular activities."
        keywords="SSIM student achievements, student success, student awards, business school competitions"
        canonicalUrl="https://ssim.ac.in/students-life/achievements"
      /> */}
      <section className="relative py-10 sm:py-20">
        <Heading title="Student Achievements" />
        <div className="container max-w-7xl mx-auto grid gap-14 relative">
          <div className="col-span-1" style={{paddingLeft: "1.4rem", paddingRight: "1.4rem"}}>
            <div className="events grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="group flex flex-col cursor-pointer overflow-visible mb-10"
                  onClick={() => handleImageClick(event)}
                >
                  <div className="relative aspect-[3/2] w-full mb-6 z-10">
                    <div className="absolute inset-0 bg-gray-100 rounded-[24px] overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 bg-white rounded-tr-3xl pt-3.5 pr-7 pl-6 pb-2 z-20">
                      <svg width="24" height="24" className="absolute left-0 bottom-full text-white fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M 0,24 L 0,0 C 0,13.25 10.75,24 24,24 Z" />
                      </svg>
                      <svg width="24" height="24" className="absolute left-full bottom-0 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M 0,0 L 0,24 L 24,24 C 10.75,24 0,13.25 0,0 Z" />
                      </svg>
                      <div className="flex items-center text-[14px] font-medium text-gray-700 bg-white">
                        <span className="tracking-wide">Achievement</span>
                        <span className="mx-4 w-[1px] h-3.5 bg-gray-300" />
                        <span className="tracking-wide">SSIM</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow px-2">
                    <h3 className="text-[19px] md:text-[21px] font-medium text-[#2d2b52] group-hover:text-[#4239c4] transition-colors line-clamp-2 leading-[1.4]">
                      {event.title}
                    </h3>
                    <Button
                      variant="ghost"
                      className="w-fit p-0 h-auto text-gray-400 hover:text-[#4239c4] hover:bg-transparent font-medium group/btn flex items-center mt-3 text-sm transition-colors"
                      onClick={() => handleImageClick(event)}
                    >
                      View More
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} modal={true}>
          <DialogContent className="w-[95%] max-w-3xl rounded-lg hide-scrollbar overflow-y-auto max-h-[90vh]">
            {selectedEvent && (
              <>
                <DialogHeader className="px-1">
                  <DialogTitle className="text-xl font-bold hidden">
                    {selectedEvent.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-2 space-y-3">
                  {selectedEvent.gallery && selectedEvent.gallery.length > 0 ? (
                    <Carousel
                      className="w-full"
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                    >
                      <CarouselContent className="flex">
                        {selectedEvent.gallery.map((image, index) => (
                          <CarouselItem
                            key={index}
                            className="basis-full flex justify-center items-center"
                          >
                            <div className="w-full max-h-[60vh] flex justify-center">
                              <img
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="max-w-full max-h-full object-contain rounded-md"
                                style={{
                                  maxWidth: "100%",
                                  maxHeight: "60vh",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                    </Carousel>
                  ) : (
                    <div className="w-full max-h-[60vh] flex justify-center">
                      <img
                        src={selectedEvent.image}
                        alt={`Event ${selectedEvent.id}`}
                        className="max-w-full max-h-full object-contain rounded-md"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "60vh",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  )}

                  <div className="px-1 pt-5 space-y-2">
                    <h3 className="text-2xl font-bold">
                      {selectedEvent.title}
                    </h3>
                    <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {selectedEvent.description.split('\n\n').map((paragraph, index) => {
                        // Check if paragraph starts with bullet points
                        if (paragraph.trim().startsWith('•') || paragraph.trim().startsWith('Winners:')) {
                          return (
                            <div key={index} className="mb-3">
                              {paragraph.split('\n').map((line, lineIndex) => {
                                if (line.trim().startsWith('•')) {
                                  return (
                                    <div key={lineIndex} className="ml-4 mb-1">
                                      {line.trim()}
                                    </div>
                                  );
                                }
                                return (
                                  <div key={lineIndex} className={lineIndex === 0 ? "font-semibold mb-2" : ""}>
                                    {line}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }
                        return (
                          <p key={index} className="mb-3">
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
};

export default StudentsAchievements;
