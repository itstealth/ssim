// import { Metadata } from 'next';
import { Mail, MapPin, Calendar, BookOpen, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata = {
  title: 'Professor of Marketing Jobs at SSIM | Apply Now',
  description: 'Join SSIM as Professor of Marketing. AICTE-approved autonomous B-School in Secunderabad. Competitive salary, research support. Apply to director@ssim.ac.in',
  keywords: 'professor marketing jobs, SSIM careers, marketing faculty position, Secunderabad business school jobs',
};

// JSON-LD Schema for Job Posting
const jobPostingSchema = {
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": "Professor of Marketing",
  "description": "Full-time Professor position in Marketing at Siva Sivani Institute of Management",
  "identifier": {
    "@type": "PropertyValue",
    "name": "SSIM",
    "value": "SSIM/Recruit/Faculty/Marketing/2025-26"
  },
  "datePosted": "2025-12-14",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {
    "@type": "EducationalOrganization",
    "name": "Siva Sivani Institute of Management",
    "sameAs": "https://ssim.ac.in",
    "logo": "https://ssim.ac.in/logo.png"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kompally",
      "addressLocality": "Secunderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": {
      "@type": "QuantitativeValue",
      "value": "As per AICTE norms",
      "unitText": "YEAR"
    }
  },
  "qualifications": "MBA with minimum 60% marks and Ph.D. in Marketing from reputed university. 10 research publications in ABDC/SCOPUS/WoS indexed journals. Minimum 10 years of cumulative experience.",
  "responsibilities": "Lead and teach core and elective Marketing courses at Post-Graduate level. Mentor junior faculty and Ph.D. scholars. Maintain active research program.",
  "applicantLocationRequirements": {
    "@type": "Country",
    "name": "IN"
  }
};

export default function ProfessorMarketingCareer() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

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
                  <a href="/careers" className="hover:text-primary">Careers</a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-foreground">Professor of Marketing</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                Full-Time Faculty Position
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professor of Marketing
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6">
                Siva Sivani Institute of Management
              </p>
              <div className="flex flex-wrap gap-4 mb-8 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Kompally, Secunderabad, Telangana</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Ref: SSIM/Recruit/Faculty/Marketing/2025-26</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-blue-50 font-semibold"
                  asChild
                >
                  <a href="mailto:director@ssim.ac.in?subject=Application for Professor of Marketing - SSIM/Recruit/Faculty/Marketing/2025-26">
                    <Mail className="mr-2 h-5 w-5" />
                    Apply Now
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  Download Notification
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Column */}
              <div className="md:col-span-2 space-y-8">
                {/* About SSIM */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-blue-600" />
                      <CardTitle>About SSIM</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Siva Sivani Institute of Management, established in 1992, is one of the premier autonomous management institutions in South India. Driven by the motto <strong>"Learn to Serve,"</strong> SSIM is committed to cultivate a challenging and supportive environment for teaching, research, and collaborative knowledge creation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">AICTE Approved</Badge>
                      <Badge variant="secondary">SAQS Accredited</Badge>
                      <Badge variant="secondary">NBA Accredited</Badge>
                      <Badge variant="secondary">NAAC Accredited</Badge>
                      <Badge variant="secondary">Autonomous B-School</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Position Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle>Position Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Position</p>
                        <p className="text-lg font-semibold">Full-Time Professor</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Specialization</p>
                        <p className="text-lg font-semibold">Marketing</p>
                      </div>
                      <div className="sm:col-span-2">
                        <p className="text-sm font-medium text-muted-foreground">Compensation</p>
                        <p className="text-lg font-semibold">As per AICTE norms and Institute policy</p>
                        <p className="text-sm text-muted-foreground mt-1">Commensurate with experience and qualifications</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Qualifications */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                      <CardTitle>Minimum Essential Qualifications & Experience</CardTitle>
                    </div>
                    <CardDescription>
                      Candidates must strictly fulfill the following requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[200px]">Parameter</TableHead>
                          <TableHead>Requirement</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Educational Qualification</TableCell>
                          <TableCell>MBA with a minimum of 60% marks & a Ph.D. in the relevant subject area (Marketing) from a reputed university</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Research Output</TableCell>
                          <TableCell>Demonstrated record of high-quality 10 research publications in journals indexed in the ABDC/SCOPUS/WoS Quality list journals</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Teaching/Industry Experience</TableCell>
                          <TableCell>Minimum of 10 years of cumulative experience in teaching, research, and/or industry</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Experience at Rank</TableCell>
                          <TableCell>At least 5 years of the total experience must be at the level of Associate Professor or equivalent, or relevant experience in the industry at a senior level</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Key Responsibilities */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-6 h-6 text-blue-600" />
                      <CardTitle>Key Responsibilities</CardTitle>
                    </div>
                    <CardDescription>
                      The selected candidate will be expected to:
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                        <span>Lead and teach core and elective Marketing courses at the Post-Graduate level</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                        <span>Mentor junior faculty and Ph.D. scholars</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                        <span>Maintain a consistently active and high-impact research program, securing grants and publishing in top-tier journals</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                        <span>Undertake administrative roles and provide service to the Institute and the professional community</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                        <span>Develop and update curriculum to align with industry best practices and global standards</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Compensation & Benefits */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                      <CardTitle>Compensation & Benefits</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                        <span>Salary will be commensurate with the candidate's qualification, experience, and the Institute's pay scales, following AICTE norms</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                        <span>The Institute offers a collegial work environment and support for research, conferences, and faculty development programs</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Application Process */}
                <Card className="border-blue-200 bg-blue-50/50">
                  <CardHeader>
                    <CardTitle className="text-blue-900">How to Apply</CardTitle>
                    <CardDescription className="text-blue-700">
                      Applications reviewed on a rolling basis until the position is filled
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-900">Required Documents:</h4>
                      <ol className="space-y-2 ml-5 list-decimal text-sm">
                        <li>Detailed Curriculum Vitae (CV) including full academic history, list of publications with indexation details, teaching experience, and professional references</li>
                        <li>Brief Cover Letter detailing your suitability for the position, key research contributions, and vision for the Marketing area at SSIM</li>
                      </ol>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-900">Submission Email:</h4>
                      <div className="bg-white p-4 rounded-lg border border-blue-200">
                        <a 
                          href="mailto:director@ssim.ac.in?subject=Application for Professor of Marketing - SSIM/Recruit/Faculty/Marketing/2025-26" 
                          className="text-lg font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-2"
                        >
                          <Mail className="w-5 h-5" />
                          director@ssim.ac.in
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Important Instructions */}
                <Card className="border-amber-200 bg-amber-50/50">
                  <CardHeader>
                    <CardTitle className="text-amber-900">General Instructions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-amber-900">
                      <li className="flex gap-2">
                        <span className="flex-shrink-0">•</span>
                        <span>Only shortlisted candidates will be notified and called for the selection process (which may involve a presentation and/or interview)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex-shrink-0">•</span>
                        <span>The Institute reserves the right to fill or not to fill the post advertised without assigning any reason whatsoever</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex-shrink-0">•</span>
                        <span>Candidates currently employed in Government/Semi-Government/PSUs/Autonomous bodies should submit their applications through the proper channel or produce a No Objection Certificate (NOC) at the time of the interview</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex-shrink-0">•</span>
                        <span>Canvassing in any form will lead to disqualification</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-1 space-y-6">
                {/* Sticky CTA */}
                <div className="sticky top-4 space-y-6">
                  <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0">
                    <CardHeader>
                      <CardTitle className="text-white">Ready to Apply?</CardTitle>
                      <CardDescription className="text-blue-100">
                        Join our prestigious faculty team
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button 
                        className="w-full bg-white text-blue-900 hover:bg-blue-50 font-semibold"
                        size="lg"
                        asChild
                      >
                        <a href="mailto:director@ssim.ac.in?subject=Application for Professor of Marketing - SSIM/Recruit/Faculty/Marketing/2025-26">
                          <Mail className="mr-2 h-4 w-4" />
                          Email Application
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full bg-transparent border-white text-white hover:bg-white/10"
                      >
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Quick Facts */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Quick Facts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                      <div>
                        <p className="font-medium text-muted-foreground">Posted</p>
                        <p className="font-semibold">December 14, 2025</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="font-medium text-muted-foreground">Job Type</p>
                        <p className="font-semibold">Full-Time</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="font-medium text-muted-foreground">Department</p>
                        <p className="font-semibold">Marketing</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="font-medium text-muted-foreground">Min. Experience</p>
                        <p className="font-semibold">10 Years</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="font-medium text-muted-foreground">Application Deadline</p>
                        <p className="font-semibold">Rolling Basis</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <Mail className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-muted-foreground">Email</p>
                          <a href="mailto:director@ssim.ac.in" className="text-blue-600 hover:underline">
                            director@ssim.ac.in
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-muted-foreground">Location</p>
                          <p>Kompally, Secunderabad</p>
                          <p>Telangana, India</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* View All Careers */}
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/careers">View All Openings</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
