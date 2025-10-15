import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Events - SSIM",
  description:
    "Explore upcoming and past events at Siva Sivani Institute of Management. Stay updated with convocations, seminars, workshops, and cultural events.",
  keywords: "SSIM events, convocation, seminars, workshops, student activities",
  openGraph: {
    title: "Events - SSIM",
    description:
      "Explore upcoming and past events at Siva Sivani Institute of Management.",
    url: "https://www.ssim.ac.in/events",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/events-banner.jpg",
        width: 1200,
        height: 630,
        alt: "SSIM Events",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events - SSIM",
    description:
      "Explore upcoming and past events at Siva Sivani Institute of Management.",
    images: ["/events-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/events",
  },
};

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "30th Snatak (Convocation)",
      date: "Wednesday, 22nd October 2024",
      time: "11:30 AM",
      location: "SSIM Campus",
      type: "Academic",
      status: "upcoming",
      description:
        "Annual convocation ceremony celebrating academic excellence",
      featured: true,
      href: "/events/convocation-2024",
    },
  ];

  const pastEvents = [
    {
      id: 2,
      title: "Alumni Meet 2024",
      date: "15th March 2024",
      location: "SSIM Campus",
      type: "Alumni",
      status: "completed",
    },
    {
      id: 3,
      title: "Industry Connect Seminar",
      date: "28th February 2024",
      location: "SSIM Auditorium",
      type: "Seminar",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest events, convocations, seminars, and
            activities at SSIM
          </p>
        </div>

        {/* Upcoming Events Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Upcoming Events
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  event.featured
                    ? "ring-2 ring-red-200 bg-gradient-to-br from-red-50 to-white"
                    : "bg-white"
                }`}
              >
                {event.featured && (
                  <Badge className="absolute top-4 right-4 bg-red-600 hover:bg-red-700">
                    Featured
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {event.type}
                      </Badge>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {event.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-2">
                    {event.description}
                  </p>

                  <Button asChild className="w-full">
                    <Link href={event.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">Past Events</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Card
                key={event.id}
                className="bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {event.type}
                      </Badge>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {event.title}
                      </CardTitle>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-green-600 border-green-200"
                    >
                      Completed
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated with SSIM Events
              </h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to receive updates about upcoming
                events, convocations, and important announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Subscribe to Newsletter
                </Button>
                <Button variant="outline">Contact Event Coordinator</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
