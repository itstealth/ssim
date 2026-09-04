import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "30th Convocation Ceremony - SSIM",
  description:
    "Join us for the 30th Snatak (Convocation) ceremony of Siva Sivani Institute of Management on Wednesday, 22nd October 2024 at 11:30 AM.",
  keywords:
    "SSIM convocation, 30th convocation, graduation ceremony, AICTE chairman, Prof. T.G. Sitharam",
  openGraph: {
    title: "30th Convocation Ceremony - SSIM",
    description:
      "Join us for the 30th Snatak (Convocation) ceremony of Siva Sivani Institute of Management.",
    url: "https://www.ssim.ac.in/events/convocation-2024",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/convocation-invitation.jpg",
        width: 1200,
        height: 800,
        alt: "SSIM 30th Convocation Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "30th Convocation Ceremony - SSIM",
    description:
      "Join us for the 30th Snatak (Convocation) ceremony of Siva Sivani Institute of Management.",
    images: ["/convocation-invitation.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/events/convocation-2024",
  },
};

export default function Convocation2024Page() {
  const programSchedule = [
    { time: "Invocation", icon: <GraduationCap className="w-4 h-4" /> },
    {
      time: "Declaring the Convocation Open",
      icon: <Award className="w-4 h-4" />,
    },
    { time: "Welcome Address", icon: <Users className="w-4 h-4" /> },
    { time: "Academic Report", icon: <Award className="w-4 h-4" /> },
    {
      time: "Introduction of the Guest of Honour - Sri Ramakrishna Sataluri, Chief Executive Officer, Shakti Energy Solutions Limited (SESL)",
      icon: <Users className="w-4 h-4" />,
    },
    {
      time: "Address by the Guest of Honour",
      icon: <Users className="w-4 h-4" />,
    },
    {
      time: "Introduction of the Chief Guest - Prof. T.G. Sitharam, Chairman, All India Council For Technical Education (AICTE)",
      icon: <Award className="w-4 h-4" />,
    },
    {
      time: "Presidential Remarks by Smt. Aarathy Sampathy, President, S.P. Sampathy's Siva Sivani Group",
      icon: <Users className="w-4 h-4" />,
    },
    {
      time: "Convocation Address by the Chief Guest",
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      time: "Administering of oath to the Graduates",
      icon: <Award className="w-4 h-4" />,
    },
    {
      time: "Presentation of Diplomas / Medals / Awards / Certificates",
      icon: <Award className="w-4 h-4" />,
    },
    {
      time: "Signing the Graduates Register",
      icon: <Award className="w-4 h-4" />,
    },
    { time: "Presentation of Mementoes", icon: <Award className="w-4 h-4" /> },
    { time: "Vote of Thanks", icon: <Users className="w-4 h-4" /> },
    {
      time: "Declaring the Convocation closed",
      icon: <Award className="w-4 h-4" />,
    },
    { time: "National Anthem", icon: <Award className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-100 text-red-800 border-red-200 px-4 py-2">
            <Calendar className="w-4 h-4 mr-2" />
            Special Event
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            30<sup>th</sup> Snatak (Convocation)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            S.P. Sampathy's Siva Sivani Institute of Management cordially
            invites you to celebrate academic excellence
          </p>
        </div>

        {/* Event Details Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Date & Time */}
          <Card className="text-center p-6 bg-white shadow-lg border-0">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle className="text-lg">Date & Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-900 mb-1">Wednesday</p>
              <p className="text-lg text-gray-600 mb-2">
                22<sup>nd</sup> October 2024
              </p>
              <p className="text-xl font-semibold text-red-600">11:30 AM</p>
            </CardContent>
          </Card>

          {/* Venue */}
          <Card className="text-center p-6 bg-white shadow-lg border-0">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Venue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold text-gray-900">SSIM Campus</p>
              <p className="text-gray-600">
                Siva Sivani Institute of Management
              </p>
              <p className="text-sm text-gray-500 mt-2">Hyderabad, Telangana</p>
            </CardContent>
          </Card>

          {/* Event Type */}
          <Card className="text-center p-6 bg-white shadow-lg border-0">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Event Type</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold text-gray-900">Convocation</p>
              <p className="text-gray-600">
                30<sup>th</sup> Annual Ceremony
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Academic Excellence Celebration
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Dignitaries Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Distinguished Guests
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Chief Guest */}
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-red-800 text-xl">
                  Chief Guest
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Prof. T.G. Sitharam
                </h3>
                <p className="text-lg text-gray-700">Chairman</p>
                <p className="text-md text-gray-600">
                  All India Council For Technical Education (AICTE)
                </p>
              </CardContent>
            </Card>

            {/* Guest of Honour */}
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-purple-800 text-xl">
                  Guest of Honour
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Sri Ramakrishna Sataluri
                </h3>
                <p className="text-lg text-gray-700">Chief Executive Officer</p>
                <p className="text-md text-gray-600">
                  Shakti Energy Solutions Limited (SESL)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Program Schedule */}
        <Card className="mb-12">
          <CardHeader className="bg-gradient-to-r from-red-600 to-red-800 text-white">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Clock className="w-6 h-6" />
              Program Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-96 overflow-y-auto">
              {programSchedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Invitation Message */}
        <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-red-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              You are Cordially Invited
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              The Management, Faculty, Staff and Students of Siva Sivani
              Institute of Management cordially invite you to the 30
              <sup>th</sup> Snatak (Convocation) ceremony.
            </p>
            <div className="bg-red-600 text-white p-4 rounded-lg">
              <p className="text-sm opacity-90">
                🗓️ Wednesday, 22<sup>nd</sup> October 2024 | 🕐 11:30 AM | 📍
                SSIM Campus
              </p>
            </div>
          </CardContent>
        </Card>

        {/* RSVP Section */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-red-50 to-purple-50 border-2 border-red-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">RSVP</h3>
              <p className="text-gray-600 mb-6">
                Kindly confirm your attendance for this auspicious occasion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white p-4 rounded-lg border">
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 40 2717 7775</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">info@ssim.ac.in</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
