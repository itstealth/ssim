'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, GraduationCap, BookOpen, Utensils, Dumbbell, Users, Home, Presentation, ExternalLink, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const tourLocations = [
  // Academic Spaces
  {
    id: 'entrance-1',
    name: 'Campus Entrance',
    category: 'academic',
    url: 'https://maps.app.goo.gl/h666JfAw3hhJf7bJ7',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767592503612!6m8!1m7!1sCAoSHENJQUJJaEJZNU9pMWtWeDJjMW5pRXdfZUpPNk0.!2m2!1d17.534029!2d78.4856262!3f338.51!4f5.150000000000006!5f0.4000000000000002',
    icon: Building2,
    description: 'Welcome to SSIM - Your journey begins here'
  },
  {
    id: 'entrance-2',
    name: 'Main Entrance View',
    category: 'academic',
    url: 'https://maps.app.goo.gl/hBu2nQ597hKevuNf6',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767172638162!6m8!1m7!1sCAoSHENJQUJJaERWWDEyNUZrX0hIaDY1VXVyOUVXNmI.!2m2!1d17.53410856606414!2d78.48561800499947!3f355.15!4f-0.7000000000000028!5f0.42769945808493315',
    icon: Building2,
    description: 'Alternate view of our grand entrance'
  },
  {
    id: 'lh-1',
    name: 'Lecture Hall 1',
    category: 'academic',
    url: 'https://maps.app.goo.gl/fah8KbqXAb4xpBkAA',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767172948990!6m8!1m7!1sCAoSHENJQUJJaEFvbUswbWZGM3Y1VXZUbzNfYndCSEQ.!2m2!1d17.5340309!2d78.4856567!3f229.88!4f-10.049999999999997!5f0.4000000000000002',
    icon: Presentation,
    description: 'Modern classroom with state-of-the-art facilities'
  },
  {
    id: 'lh-2',
    name: 'Lecture Hall 2',
    category: 'academic',
    url: 'https://maps.app.goo.gl/LHaP3a8xUyRN7Y278',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767173258990!6m8!1m7!1sCAoSHENJQUJJaEJoMUFWN2R2dDlwUHpIalkzSnpfOEE.!2m2!1d17.5340309!2d78.4856567!3f29.14!4f-11.129999999999995!5f0.4000000000000002',
    icon: Presentation,
    description: 'Interactive learning space for collaborative education'
  },
  {
    id: 'lh-3',
    name: 'Lecture Hall 3',
    category: 'academic',
    url: 'https://maps.app.goo.gl/eEByqy4Me9mE44mk9',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767173569787!6m8!1m7!1sCAoSHENJQUJJaEE0TlhRWExvQU1DeExyLWM0UXZQWUk.!2m2!1d17.5340309!2d78.4856567!3f340.11!4f-7.099999999999994!5f0.4000000000000002',
    icon: Presentation,
    description: 'Technology-enabled classroom environment'
  },
  {
    id: 'library',
    name: 'Library',
    category: 'academic',
    url: 'https://maps.app.goo.gl/7KE6C8BbRnCR2FV5A',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767173984883!6m8!1m7!1sCAoSHENJQUJJaEE0M0VfTHpfZ2dOWkg4em1kUTRxbDM.!2m2!1d17.5340042!2d78.4857635!3f172.51!4f-6.099999999999994!5f0.4000000000000002',
    icon: BookOpen,
    description: 'Extensive collection of books, journals, and digital resources'
  },
  {
    id: 'seminar',
    name: 'Seminar Hall',
    category: 'academic',
    url: 'https://maps.app.goo.gl/XQei8MaNM7F1qsxq7',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767175003564!6m8!1m7!1sCAoSHENJQUJJaERBVU8yWDhER1FRdnFKR3ZwbDhsUm8.!2m2!1d17.5340309!2d78.4856567!3f356.93!4f-1.2999999999999972!5f0.4000000000000002',
    icon: Users,
    description: 'Host to guest lectures and student presentations'
  },
  {
    id: 'conference',
    name: 'Conference Hall',
    category: 'academic',
    url: 'https://maps.app.goo.gl/vCRSH5sreDbox9vR6',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767175035716!6m8!1m7!1sCAoSHENJQUJJaEFybkRMVTNZM2RDSi0xRjRuMTJMNHE.!2m2!1d17.53403100919306!2d78.48565702450406!3f176.72!4f-5.939999999999998!5f0.4000000000000002',
    icon: Users,
    description: 'Professional venue for corporate events and workshops'
  },
  
  // Administration & Faculty
  {
    id: 'admin',
    name: 'Administration',
    category: 'administration',
    url: 'https://maps.app.goo.gl/XQr12M7KsgcXxf7h7',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767175227451!6m8!1m7!1sCAoSHENJQUJJaEJwall4aXpPRVFQajNuYkZHX1k2OWM.!2m2!1d17.5342153368222!2d78.48560265732357!3f83.38!4f-3.1500000000000057!5f0.42769945808493315',
    icon: Building2,
    description: 'Central administrative offices'
  },
  {
    id: 'placement',
    name: 'Placement Cell',
    category: 'administration',
    url: 'https://maps.app.goo.gl/bB81SypQYREymcVf7',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767175257891!6m8!1m7!1sCAoSHENJQUJJaENBUkZNb19DRWFXd3BCR2Nwby1DTks.!2m2!1d17.53391982669953!2d78.48562736968192!3f26.18!4f-6.25!5f0.4000000000000002',
    icon: GraduationCap,
    description: 'Career services and placement support center'
  },
  {
    id: 'faculty-1',
    name: 'Faculty Space',
    category: 'administration',
    url: 'https://maps.app.goo.gl/9ZCu3t3RPLFuZDrNA',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767175289597!6m8!1m7!1sCAoSHENJQUJJaENBT2Z4ZFo4OVJIY05UQjdsN0cyeEE.!2m2!1d17.5340330140086!2d78.4856852052481!3f270.65!4f-5.290000000000006!5f0.4000000000000002',
    icon: Users,
    description: 'Faculty offices and collaborative workspace'
  },
  {
    id: 'faculty-2',
    name: 'Faculty Area',
    category: 'administration',
    url: 'https://maps.app.goo.gl/Rq8baDMFHqVMtoeL6',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767175357634!6m8!1m7!1sCAoSHENJQUJJaEJHUXZ4X0V3V0UtMVRNMWo2WDFnTC0.!2m2!1d17.53403100919306!2d78.48565702450406!3f100.6!4f-4.989999999999995!5f0.4000000000000002',
    icon: Users,
    description: 'Additional faculty workspace'
  },

  // Facilities
  {
    id: 'playground',
    name: 'Play Ground',
    category: 'facilities',
    url: 'https://maps.app.goo.gl/xu1aNCUmJcW8dLHH7',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767176223371!6m8!1m7!1sCAoSHENJQUJJaEJUbDlPUy1yLUNITkV6bVZMVEV5OVk.!2m2!1d17.5339298!2d78.485672!3f57.41!4f-2.6099999999999994!5f0.4000000000000002',
    icon: Users,
    description: 'Sports facilities for cricket, football, and outdoor activities'
  },
  {
    id: 'gym',
    name: 'Gymnasium',
    category: 'facilities',
    url: 'https://maps.app.goo.gl/RfvGmeuK62zWwsV37',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767176258739!6m8!1m7!1sCAoSHENJQUJJaERUMDQ4T2FaQkJTVGV4YktMMHhuenA.!2m2!1d17.53403100919306!2d78.48565702450406!3f4.78!4f-11.25!5f0.4000000000000002',
    icon: Dumbbell,
    description: 'Fully equipped fitness center for students and faculty'
  },
  {
    id: 'dining',
    name: 'Dining Hall',
    category: 'facilities',
    url: 'https://maps.app.goo.gl/qwCTDfc6mDm3WEm46',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767176369024!6m8!1m7!1sCAoSHENJQUJJaEJfeXJvaTQ1VjVBSVpNVEZ3SXlZS3E.!2m2!1d17.5340049669809!2d78.48564956744436!3f17.73!4f-6.920000000000002!5f0.4000000000000002',
    icon: Utensils,
    description: 'Spacious dining facility with hygienic food preparation'
  },

  // Hostel
  {
    id: 'boys-hostel',
    name: 'Boys Hostel',
    category: 'hostel',
    url: 'https://maps.app.goo.gl/sZG5dreybx81xV4w9',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767176465859!6m8!1m7!1sCAoSHENJQUJJaEJsVlZjSFk0TzQ4bnJEejQ5OF9nWmg.!2m2!1d17.53403100919306!2d78.48565702450406!3f178.2!4f1.25!5f0.4000000000000002',
    icon: Home,
    description: 'Comfortable accommodation for male students'
  },
  {
    id: 'girls-hostel',
    name: 'Girls Hostel',
    category: 'hostel',
    url: 'https://maps.app.goo.gl/Y2LoX9adEG5mSx248',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1767176532444!6m8!1m7!1sCAoSHENJQUJJaEF3M3ptZkxmWmZDY3VoWUJCUS1FY1E.!2m2!1d17.5340309!2d78.4856567!3f53.12!4f-2.0600000000000023!5f0.4000000000000002',
    icon: Home,
    description: 'Safe and secure accommodation for female students'
  },
];

const categoryInfo = {
  academic: {
    title: 'Academic Facilities',
    description: 'Explore our modern classrooms, library, and learning spaces',
    color: 'bg-blue-600'
  },
  administration: {
    title: 'Administration & Support',
    description: 'Administrative offices and student support services',
    color: 'bg-purple-600'
  },
  facilities: {
    title: 'Campus Facilities',
    description: 'Sports, dining, and recreational amenities',
    color: 'bg-green-600'
  },
  hostel: {
    title: 'Residential Facilities',
    description: 'On-campus accommodation for students',
    color: 'bg-orange-600'
  }
};

// Component for embedded iframe viewer
function EmbedViewer({ location, isLoading, onLoad }) {
  const Icon = location.icon;

  return (
    <div className="relative w-full h-[70vh] overflow-hidden rounded-lg border border-border bg-background">
      {/* Location Name Overlay */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-4 left-4 z-20 bg-gradient-to-r from-black/70 to-transparent px-4 py-2 rounded-lg backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 text-white">
          <Icon className="w-5 h-5" />
          <span className="font-semibold text-sm md:text-base">
            {location.name}
          </span>
        </div>
      </motion.div>

      {/* Floating Controls */}
      {/* <div className="absolute top-4 right-4 z-20 flex gap-2">
        <Button
          variant="secondary"
          size="icon"
          asChild
          className="bg-background/80 backdrop-blur-sm hover:bg-background/90 shadow-sm"
        >
          <a
            href={location.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in Google Maps"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div> */}

      {/* Iframe */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          {location.embedUrl ? (
            <iframe
              src={location.embedUrl}
              width="800"
              height="600"
              style={{ border: 0 }}
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={onLoad}
              title={location.name}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-muted">
              <div className="text-center p-8">
                <Icon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground mb-2 font-medium">
                  Embed URL not configured
                </p>
                <p className="text-sm text-muted-foreground/70 mb-4">
                  {location.description}
                </p>
                <Button variant="outline" asChild>
                  <a
                    href={location.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Component for category section with tabs
function CategorySection({ category, categoryData, locations }) {
  const [activeTab, setActiveTab] = useState(locations[0]?.id || '');
  const [isLoading, setIsLoading] = useState(true);

  const activeLocation = locations.find(loc => loc.id === activeTab) || locations[0];

  const handleTabChange = (value) => {
    setActiveTab(value);
    setIsLoading(true);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-1 h-8 ${categoryData.color} rounded-full`}></div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{categoryData.title}</h2>
          <p className="text-sm text-muted-foreground">{categoryData.description}</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="w-full h-auto flex-wrap justify-start gap-2 bg-muted/50 p-2">
          {locations.map((location) => {
            const Icon = location.icon;
            return (
              <TabsTrigger
                key={location.id}
                value={location.id}
                className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{location.name}</span>
                <span className="sm:hidden">{location.name.split(' ')[0]}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {locations.map((location) => (
          <TabsContent key={location.id} value={location.id} className="mt-6">
            <EmbedViewer
              location={location}
              isLoading={isLoading}
              onLoad={handleIframeLoad}
            />
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  );
}

export default function VirtualTourPage() {
  // Group locations by category
  const locationsByCategory = tourLocations.reduce((acc, location) => {
    if (!acc[location.category]) {
      acc[location.category] = [];
    }
    acc[location.category].push(location);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 text-sm text-muted-foreground">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <a href="/about" className="hover:text-primary transition-colors">About</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-foreground">Virtual Tour</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
              360° Campus Experience
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Virtual Tour of SSIM
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Explore our world-class campus from anywhere in the world. Take an immersive 360° tour of our academic buildings, facilities, and student life spaces.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Building2 className="w-5 h-5" />
                <span>17 Locations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Users className="w-5 h-5" />
                <span>4 Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto sm:px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Card */}
          <Card className="mb-12 border-t-4 border-t-blue-600">
            <CardHeader>
              <CardTitle className="text-2xl">Experience SSIM Campus Virtually</CardTitle>
              <CardDescription className="text-base">
                Navigate through our state-of-the-art facilities using interactive 360° views. Select a tab to explore each location.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Category Sections with Tabs */}
          {Object.entries(categoryInfo).map(([category, info]) => {
            const locations = locationsByCategory[category] || [];
            if (locations.length === 0) return null;

            return (
              <CategorySection
                key={category}
                category={category}
                categoryData={info}
                locations={locations}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
