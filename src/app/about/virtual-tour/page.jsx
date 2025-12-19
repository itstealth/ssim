import { Building2, GraduationCap, BookOpen, Utensils, Dumbbell, Users, Home, Presentation, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata = {
  title: 'Virtual Tour - SSIM Campus | Siva Sivani Institute of Management',
  description: 'Take a 360° virtual tour of SSIM campus. Explore our lecture halls, library, hostels, gymnasium, dining facilities, and more from anywhere in the world.',
  keywords: 'SSIM virtual tour, campus tour, 360 view, business school facilities, MBA college campus',
};

const tourLocations = [
  // Academic Spaces
  {
    id: 'entrance-1',
    name: 'Campus Entrance',
    category: 'academic',
    url: 'https://maps.app.goo.gl/h666JfAw3hhJf7bJ7',
    icon: Building2,
    description: 'Welcome to SSIM - Your journey begins here'
  },
  {
    id: 'entrance-2',
    name: 'Main Entrance View',
    category: 'academic',
    url: 'https://maps.app.goo.gl/hBu2nQ597hKevuNf6',
    icon: Building2,
    description: 'Alternate view of our grand entrance'
  },
  {
    id: 'lh-1',
    name: 'Lecture Hall 1',
    category: 'academic',
    url: 'https://maps.app.goo.gl/fah8KbqXAb4xpBkAA',
    icon: Presentation,
    description: 'Modern classroom with state-of-the-art facilities'
  },
  {
    id: 'lh-2',
    name: 'Lecture Hall 2',
    category: 'academic',
    url: 'https://maps.app.goo.gl/LHaP3a8xUyRN7Y278',
    icon: Presentation,
    description: 'Interactive learning space for collaborative education'
  },
  {
    id: 'lh-3',
    name: 'Lecture Hall 3',
    category: 'academic',
    url: 'https://maps.app.goo.gl/eEByqy4Me9mE44mk9',
    icon: Presentation,
    description: 'Technology-enabled classroom environment'
  },
  {
    id: 'library',
    name: 'Library',
    category: 'academic',
    url: 'https://maps.app.goo.gl/7KE6C8BbRnCR2FV5A',
    icon: BookOpen,
    description: 'Extensive collection of books, journals, and digital resources'
  },
  {
    id: 'seminar',
    name: 'Seminar Hall',
    category: 'academic',
    url: 'https://maps.app.goo.gl/XQei8MaNM7F1qsxq7',
    icon: Users,
    description: 'Host to guest lectures and student presentations'
  },
  {
    id: 'conference',
    name: 'Conference Hall',
    category: 'academic',
    url: 'https://maps.app.goo.gl/vCRSH5sreDbox9vR6',
    icon: Users,
    description: 'Professional venue for corporate events and workshops'
  },
  
  // Administration & Faculty
  {
    id: 'admin',
    name: 'Administration',
    category: 'administration',
    url: 'https://maps.app.goo.gl/XQr12M7KsgcXxf7h7',
    icon: Building2,
    description: 'Central administrative offices'
  },
  {
    id: 'placement',
    name: 'Placement Cell',
    category: 'administration',
    url: 'https://maps.app.goo.gl/bB81SypQYREymcVf7',
    icon: GraduationCap,
    description: 'Career services and placement support center'
  },
  {
    id: 'faculty-1',
    name: 'Faculty Space',
    category: 'administration',
    url: 'https://maps.app.goo.gl/9ZCu3t3RPLFuZDrNA',
    icon: Users,
    description: 'Faculty offices and collaborative workspace'
  },
  {
    id: 'faculty-2',
    name: 'Faculty Area',
    category: 'administration',
    url: 'https://maps.app.goo.gl/Rq8baDMFHqVMtoeL6',
    icon: Users,
    description: 'Additional faculty workspace'
  },

  // Facilities
  {
    id: 'playground',
    name: 'Play Ground',
    category: 'facilities',
    url: 'https://maps.app.goo.gl/xu1aNCUmJcW8dLHH7',
    icon: Users,
    description: 'Sports facilities for cricket, football, and outdoor activities'
  },
  {
    id: 'gym',
    name: 'Gymnasium',
    category: 'facilities',
    url: 'https://maps.app.goo.gl/RfvGmeuK62zWwsV37',
    icon: Dumbbell,
    description: 'Fully equipped fitness center for students and faculty'
  },
  {
    id: 'dining',
    name: 'Dining Hall',
    category: 'facilities',
    url: 'https://maps.app.goo.gl/qwCTDfc6mDm3WEm46',
    icon: Utensils,
    description: 'Spacious dining facility with hygienic food preparation'
  },

  // Hostel
  {
    id: 'boys-hostel',
    name: 'Boys Hostel',
    category: 'hostel',
    url: 'https://maps.app.goo.gl/sZG5dreybx81xV4w9',
    icon: Home,
    description: 'Comfortable accommodation for male students'
  },
  {
    id: 'girls-hostel',
    name: 'Girls Hostel',
    category: 'hostel',
    url: 'https://maps.app.goo.gl/Y2LoX9adEG5mSx248',
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

// Location Card Component
function LocationCard({ location }) {
  const Icon = location.icon;
  
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-blue-400">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Icon className="w-5 h-5" />
            </div>
            <CardTitle className="text-lg">{location.name}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {location.description}
        </p>
        <Button 
          className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors" 
          variant="outline"
          asChild
        >
          <a 
            href={location.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <span>Explore 360° View</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function VirtualTourPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 text-sm text-muted-foreground">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="hover:text-primary">Home</a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <a href="/about" className="hover:text-primary">About</a>
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
                <MapPin className="w-5 h-5" />
                <span>Kompally, Secunderabad</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Building2 className="w-5 h-5" />
                <span>17 Locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Card */}
          <Card className="mb-12 border-t-4 border-t-blue-600">
            <CardHeader>
              <CardTitle className="text-2xl">Experience SSIM Campus Virtually</CardTitle>
              <CardDescription className="text-base">
                Navigate through our state-of-the-art facilities using interactive 360° views. Click on any location below to begin your virtual journey through SSIM.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Tabbed Navigation */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto gap-2 bg-transparent">
              <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                All Locations
              </TabsTrigger>
              <TabsTrigger value="academic" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Academic
              </TabsTrigger>
              <TabsTrigger value="administration" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Administration
              </TabsTrigger>
              <TabsTrigger value="facilities" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Facilities
              </TabsTrigger>
              <TabsTrigger value="hostel" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Residential
              </TabsTrigger>
            </TabsList>

            {/* All Locations */}
            <TabsContent value="all" className="mt-8">
              {Object.entries(categoryInfo).map(([category, info]) => (
                <div key={category} className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-1 h-8 ${info.color} rounded-full`}></div>
                    <div>
                      <h2 className="text-2xl font-bold">{info.title}</h2>
                      <p className="text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tourLocations
                      .filter(loc => loc.category === category)
                      .map((location) => (
                        <LocationCard key={location.id} location={location} />
                      ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            {/* Academic Tab */}
            <TabsContent value="academic" className="mt-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">{categoryInfo.academic.title}</h2>
                <p className="text-lg text-muted-foreground">{categoryInfo.academic.description}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tourLocations
                  .filter(loc => loc.category === 'academic')
                  .map((location) => (
                    <LocationCard key={location.id} location={location} />
                  ))}
              </div>
            </TabsContent>

            {/* Administration Tab */}
            <TabsContent value="administration" className="mt-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">{categoryInfo.administration.title}</h2>
                <p className="text-lg text-muted-foreground">{categoryInfo.administration.description}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tourLocations
                  .filter(loc => loc.category === 'administration')
                  .map((location) => (
                    <LocationCard key={location.id} location={location} />
                  ))}
              </div>
            </TabsContent>

            {/* Facilities Tab */}
            <TabsContent value="facilities" className="mt-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">{categoryInfo.facilities.title}</h2>
                <p className="text-lg text-muted-foreground">{categoryInfo.facilities.description}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tourLocations
                  .filter(loc => loc.category === 'facilities')
                  .map((location) => (
                    <LocationCard key={location.id} location={location} />
                  ))}
              </div>
            </TabsContent>

            {/* Hostel Tab */}
            <TabsContent value="hostel" className="mt-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">{categoryInfo.hostel.title}</h2>
                <p className="text-lg text-muted-foreground">{categoryInfo.hostel.description}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tourLocations
                  .filter(loc => loc.category === 'hostel')
                  .map((location) => (
                    <LocationCard key={location.id} location={location} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Information Banner */}
          {/* <Card className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    Want to Visit in Person?
                  </h3>
                  <p className="text-blue-700">
                    Schedule a campus visit to experience SSIM firsthand. Our admissions team would be delighted to show you around and answer your questions.
                  </p>
                </div>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 flex-shrink-0">
                  Schedule Campus Visit
                </Button>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </section>
    </div>
  );
}
