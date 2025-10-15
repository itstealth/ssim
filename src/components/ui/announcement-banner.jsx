"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  MapPin,
  Clock,
  Users,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const announcements = [
    {
      id: 1,
      title: "30th Snatak (Convocation)",
      date: "Wednesday, 22nd October 2024",
      time: "11:30 AM",
      location: "SSIM Campus",
      chiefGuest: "Prof. T.G. Sitharam",
      chiefGuestTitle: "Chairman, AICTE",
      guestOfHonour: "Sri Ramakrishna Sataluri",
      guestOfHonourTitle: "CEO, Shakti Energy Solutions Limited (SESL)",
      description:
        "S.P. Sampathy's Siva Sivani Institute of Management cordially invites you to the 30th Convocation Ceremony",
      type: "convocation",
      priority: "high",
    },
  ];

  useEffect(() => {
    if (announcements.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % announcements.length);
      }, 8000); // Change slide every 8 seconds

      return () => clearInterval(timer);
    }
  }, [announcements.length]);

  // Auto-open image modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImageModalOpen(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || announcements.length === 0) {
    return null;
  }

  const currentAnnouncement = announcements[currentSlide];

  // Desktop Banner Component
  const DesktopBanner = () => (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="container mx-auto px-4 py-3"
          >
            <div className="flex items-center justify-between gap-4">
              {/* Left side - Event info */}
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <div className="flex-shrink-0">
                  <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">
                    <Calendar className="w-3 h-3 mr-1" />
                    Upcoming Event
                  </Badge>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-lg truncate">
                      {currentAnnouncement.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm opacity-90">
                      <Clock className="w-3 h-3" />
                      {currentAnnouncement.time}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm opacity-90">
                    <span className="truncate">
                      📅 {currentAnnouncement.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {currentAnnouncement.location}
                    </span>
                  </div>

                  <div className="mt-1 text-sm opacity-80">
                    <span className="font-medium">Chief Guest:</span>{" "}
                    {currentAnnouncement.chiefGuest} (
                    {currentAnnouncement.chiefGuestTitle})
                    <span className="mx-2">•</span>
                    <span className="font-medium">Guest of Honour:</span>{" "}
                    {currentAnnouncement.guestOfHonour} (
                    {currentAnnouncement.guestOfHonourTitle})
                  </div>
                </div>
              </div>

              {/* Right side - CTA and close */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  asChild
                >
                  <a
                    href="/events/convocation-2024"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 p-1 h-auto"
                  onClick={() => setIsVisible(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots for multiple announcements */}
        {announcements.length > 1 && (
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
            {announcements.map((_, index) => (
              <button
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Image Popup Component (works for both mobile and desktop)
  const ImagePopup = () => (
    <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
      <DialogContent className="max-w-[95vw] max-h-[90vh] p-0">
        <DialogTitle className="sr-only">SSIM 30th Convocation Invitation</DialogTitle>
        <div className="relative">
          <Image
            src="/SSIM-30th-Convocation-invitation.jpg"
            alt="SSIM 30th Convocation Invitation"
            width={800}
            height={1000}
            className="w-full h-auto max-h-[80vh] object-contain"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <>
      {/* Desktop Banner - Hidden on mobile */}
      <div className="hidden md:block">
        <DesktopBanner />
      </div>

      {/* Mobile and Desktop Image Popup (auto-opens after 5 seconds) */}
      <ImagePopup />
    </>
  );
}
