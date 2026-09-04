"use client";

import React, { useState } from 'react';
import { Mail, MapPin, Calendar, BookOpen, Award, Users, TrendingUp, Copy, Check, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from 'sonner';

export default function JobDetails() {
  const [isCopied, setIsCopied] = useState(false);

  const handleEmailClick = (e, email, subject = "") => {
    // We don't preventDefault() because we still want the browser to try opening mailto:
    
    // Copy to clipboard
    navigator.clipboard.writeText(email);
    
    // Show feedback
    toast.success("Email address copied!", {
      description: "You can now paste it into your preferred email provider if the mail app didn't open.",
      duration: 5000,
    });
  };

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setIsCopied(false), 2000);
  };

  const mailSubject = "Application for Professor of Marketing - SSIM/Recruit/Faculty/Marketing/2025-26";
  const contactEmail = "director@ssim.ac.in";

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
                <span className="mx-2 text-slate-400">/</span>
                <a href="/careers" className="hover:text-primary transition-colors">Careers</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-slate-400">/</span>
                <span className="text-foreground font-medium">Professor of Marketing</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-16 shadow-inner">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm">
              Full-Time Faculty Position
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Professor of Marketing
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-6 font-light">
              Siva Sivani Institute of Management
            </p>
            <div className="flex flex-wrap gap-6 mb-8 text-sm md:text-base opacity-90">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-300" />
                <span>Kompally, Secunderabad, Telangana</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-300" />
                <span>Ref: SSIM/Recruit/Faculty/Marketing/2025-26</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-purple-900 hover:bg-purple-50 font-semibold shadow-lg transition-all active:scale-95"
                asChild
                onClick={(e) => handleEmailClick(e, contactEmail, mailSubject)}
              >
                <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(mailSubject)}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Apply via Email
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:border-white transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Notification
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="md:col-span-2 space-y-8">
              {/* About SSIM */}
              <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-800">About SSIM</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Siva Sivani Institute of Management, established in 1992, is one of the premier autonomous management institutions in South India. Driven by the motto <strong>"Learn to Serve,"</strong> SSIM is committed to cultivate a challenging and supportive environment for teaching, research, and collaborative knowledge creation.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">AICTE Approved</Badge>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">SAQS Accredited</Badge>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">NBA Accredited</Badge>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">NAAC Accredited</Badge>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">Autonomous B-School</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Position Overview */}
              <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800">Position Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-4 bg-slate-50/50 rounded-xl">
                      <p className="text-sm font-medium text-slate-500 mb-1">Position</p>
                      <p className="text-lg font-bold text-slate-800">Full-Time Professor</p>
                    </div>
                    <div className="p-4 bg-slate-50/50 rounded-xl">
                      <p className="text-sm font-medium text-slate-500 mb-1">Specialization</p>
                      <p className="text-lg font-bold text-slate-800">Marketing</p>
                    </div>
                    <div className="sm:col-span-2 p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                      <p className="text-sm font-medium text-slate-500 mb-1">Compensation</p>
                      <p className="text-lg font-bold text-slate-800">As per AICTE norms and Institute policy</p>
                      <p className="text-sm text-slate-500 mt-1">Commensurate with experience and qualifications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Qualifications */}
              <Card className="border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <BookOpen className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800">Minimum Essential Qualifications</CardTitle>
                  </div>
                  <CardDescription>
                    Candidates must strictly fulfill the following requirements
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-white">
                      <TableRow className="hover:bg-transparent border-slate-100">
                        <TableHead className="w-[220px] font-bold text-slate-800 px-6">Parameter</TableHead>
                        <TableHead className="font-bold text-slate-800 px-6">Requirement</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover:bg-slate-50/30 border-slate-100 transition-colors">
                        <TableCell className="font-semibold text-slate-700 px-6 align-top">Educational Qualification</TableCell>
                        <TableCell className="px-6 py-4 text-slate-600">MBA with a minimum of 60% marks & a Ph.D. in the relevant subject area (Marketing) from a reputed University/Institution</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-slate-50/30 border-slate-100 transition-colors">
                        <TableCell className="font-semibold text-slate-700 px-6 align-top">Research Output</TableCell>
                        <TableCell className="px-6 py-4 text-slate-600">Demonstrated record of high-quality 10 research publications in journals indexed in the ABDC/SCOPUS/WoS Quality list journals</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-slate-50/30 border-slate-100 transition-colors">
                        <TableCell className="font-semibold text-slate-700 px-6 align-top">Teaching/Industry Experience</TableCell>
                        <TableCell className="px-6 py-4 text-slate-600">Minimum of 15 years of cumulative experience in teaching, research, and/or industry</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-slate-50/30 border-slate-100 transition-colors">
                        <TableCell className="font-semibold text-slate-700 px-6 align-top">Experience at Rank</TableCell>
                        <TableCell className="px-6 py-4 text-slate-600">At least 5 years of the total experience must be at the level of Associate Professor or equivalent, or relevant experience in the industry at a senior level</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Application Details */}
              <Card className="border-2 border-purple-100 bg-purple-50/30 ring-4 ring-purple-50/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-purple-900">How to Apply</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-purple-800 text-lg">Send your application to:</h4>
                    <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm group hover:border-purple-300 transition-all flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors">
                          <Mail className="w-8 h-8 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-500">Director's Email</p>
                          <a 
                            href={`mailto:${contactEmail}?subject=${encodeURIComponent(mailSubject)}`} 
                            onClick={(e) => handleEmailClick(e, contactEmail, mailSubject)}
                            className="text-xl font-bold text-purple-600 hover:text-purple-700 transition-colors break-all"
                          >
                            {contactEmail}
                          </a>
                        </div>
                      </div>
                      <Button 
                        variant="secondary" 
                        size="icon" 
                        onClick={() => copyToClipboard(contactEmail)}
                        className="rounded-xl h-12 w-12 shrink-0 hover:bg-purple-50 transition-colors group-hover:scale-110"
                        title="Copy Email"
                      >
                        {isCopied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-purple-600" />}
                      </Button>
                    </div>
                    <p className="text-sm text-slate-500 italic">
                      * Clicking the email will open your mail app AND copy the address to your clipboard.
                    </p>
                  </div>

                  <Separator className="bg-purple-100" />

                  <div className="space-y-3">
                    <h4 className="font-bold text-purple-800">Review Process:</h4>
                    <p className="text-slate-700">
                      Applications are reviewed on a rolling basis. Ensure your CV includes full academic history and list of publications.
                    </p>
                    <Button 
                      className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 shadow-md hover:shadow-lg transition-all"
                      size="lg"
                      onClick={(e) => handleEmailClick(e, contactEmail, mailSubject)}
                      asChild
                    >
                      <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(mailSubject)}`}>
                        Compose Application Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6">
              <div className="sticky top-6 space-y-6">
                {/* Quick Action Card */}
                <Card className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white border-none shadow-xl overflow-hidden group">
                  <div className="absolute top-0 right-0 -m-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-700"></div>
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-white text-xl">Ready to Apply?</CardTitle>
                    <CardDescription className="text-purple-100">
                      Join our prestigious faculty team at SSIM
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 relative z-10">
                    <Button 
                      className="w-full bg-white text-purple-900 hover:bg-purple-50 font-bold py-6 text-lg rounded-xl shadow-lg transition-transform active:scale-95"
                      onClick={(e) => handleEmailClick(e, contactEmail, mailSubject)}
                      asChild
                    >
                      <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(mailSubject)}`}>
                        <Mail className="mr-2 h-5 w-5" />
                        Apply Now
                      </a>
                    </Button>
                    <div className="flex flex-col items-center">
                      <button 
                        onClick={() => copyToClipboard(contactEmail)}
                        className="text-white/80 hover:text-white text-xs flex items-center gap-1 transition-colors"
                      >
                        <Copy className="w-3 h-3" />
                        Copy Email Address
                      </button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Facts */}
                <Card className="border-none shadow-sm shadow-slate-200">
                  <CardHeader className="pb-3 border-b border-slate-50">
                    <CardTitle className="text-lg font-bold text-slate-800">Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    <div className="flex justify-between items-center group">
                      <p className="font-medium text-slate-500">Posted</p>
                      <p className="font-bold text-slate-800 group-hover:text-purple-600 transition-colors">Dec 14, 2025</p>
                    </div>
                    <Separator className="bg-slate-50" />
                    <div className="flex justify-between items-center group">
                      <p className="font-medium text-slate-500">Job Type</p>
                      <p className="font-bold text-slate-800">Full-Time</p>
                    </div>
                    <Separator className="bg-slate-50" />
                    <div className="flex justify-between items-center group">
                      <p className="font-medium text-slate-500">Department</p>
                      <p className="font-bold text-slate-800">Marketing</p>
                    </div>
                    <Separator className="bg-slate-50" />
                    <div className="flex justify-between items-center group">
                      <p className="font-medium text-slate-500">Min. Exp</p>
                      <p className="font-bold text-slate-800 uppercase px-2 py-0.5 bg-purple-50 text-purple-700 rounded text-xs">15 Years</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Direct Contact Card */}
                <Card className="border-none shadow-sm shadow-slate-200 bg-slate-50/50">
                  <CardHeader className="pb-3 px-4">
                    <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                       <Mail className="w-4 h-4 text-purple-600" />
                       Contact Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 space-y-4">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Email for Submission</p>
                      <div className="flex items-center gap-2 group">
                        <a 
                          href={`mailto:${contactEmail}`} 
                          onClick={(e) => handleEmailClick(e, contactEmail)}
                          className="font-bold text-purple-600 hover:text-purple-700 text-sm truncate"
                        >
                          {contactEmail}
                        </a>
                        <button 
                          onClick={() => copyToClipboard(contactEmail)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-purple-100 rounded"
                        >
                          <Copy className="w-3 h-3 text-purple-600" />
                        </button>
                      </div>
                    </div>
                    <Separator className="bg-slate-200/50" />
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Location</p>
                      <p className="text-sm font-bold text-slate-700">Kompally, Secunderabad</p>
                      <p className="text-xs text-slate-500">Telangana, India</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
