"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Trophy,
  Star,
  School,
  Award,
  Shield,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EntranceScholarships from "./EntranceScholarships";

const scholarshipData = [
  { range: "Term Rank 1", tier: "Rank 1", classX: 30000, classXII: 30000, graduation: 30000, total: 30000, color: "from-yellow-400 to-yellow-600", bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100", borderColor: "border-yellow-200", icon: Trophy },
  { range: "Term Rank 2", tier: "Rank 2", classX: 20000, classXII: 20000, graduation: 20000, total: 20000, color: "from-orange-400 to-orange-600", bgColor: "bg-gradient-to-br from-orange-50 to-orange-100", borderColor: "border-orange-200", icon: Star },
  { range: "Term Rank 3", tier: "Rank 3", classX: 10000, classXII: 10000, graduation: 10000, total: 10000, color: "from-gray-400 to-gray-600", bgColor: "bg-gradient-to-br from-gray-50 to-gray-100", borderColor: "border-gray-200", icon: GraduationCap },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Scholarships() {
  return (
    <>
      <EntranceScholarships />
      <div className="min-h-screen bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-lg text-slate-600 mb-4">
            Academic excellence awards are based on term ranks. The values shown apply to each of Terms 1, 2, and 3.
          </p>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full">
              <GraduationCap className="w-8 h-8 text-white" />
            </div> */}
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
                Academic Excellence Scholarships (Term Rank)
              </h1>
            </div>
            <p className="text-lg text-slate-600">
              Scholarship awards by term rank for Terms 1, 2, and 3.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {scholarshipData.map((scholarship, index) => {
              const IconComponent = scholarship.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="h-full"
                >
                  <Card
                    className={`h-full ${scholarship.bgColor} ${scholarship.borderColor} border-2 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative`}
                  >
                    {/* Tier Badge */}
                    {/* <div className="absolute top-4 right-4">
                    <Badge className={`bg-gradient-to-r ${scholarship.color} text-white font-semibold px-3 py-1`}>
                      {scholarship.tier}
                    </Badge>
                  </div> */}

                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`p-2 bg-gradient-to-r ${scholarship.color} rounded-lg`}
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <CardTitle className="text-lg font-bold text-slate-800">
                          {scholarship.range}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Individual Amounts */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                          <span className="font-medium text-slate-700">
                            Term 1
                          </span>
                          <span className="font-bold text-slate-800">
                            ₹{scholarship.classX.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                          <span className="font-medium text-slate-700">
                            Term 2
                          </span>
                          <span className="font-bold text-slate-800">
                            ₹{scholarship.classXII.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                          <span className="font-medium text-slate-700">
                            Term 3
                          </span>
                          <span className="font-bold text-slate-800">
                            ₹{scholarship.graduation.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Total Amount */}
                      <div
                        className={`p-4 bg-gradient-to-r ${scholarship.color} rounded-lg text-center`}
                      >
                        <p className="text-white/90 text-sm font-medium mb-1">
                          Award per Term
                        </p>
                        <p className="text-white text-2xl font-bold">
                          ₹{scholarship.total.toLocaleString()}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Note Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <p className="text-slate-600 text-sm leading-relaxed">
                <span className="font-semibold">Important Note:</span> Amounts are in INR. The brochure lists these awards as illustrative and non-exhaustive; awards are subject to institute policy.
              </p>
            </div>
          </motion.div>

          {/* Academic Excellence Scholarship Summary */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
                Academic Excellence Scholarship Summary
              </h1>
            </div>
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-[#002f87] text-yellow-400 rounded-t-lg">
                <CardTitle className="text-xl font-bold">
                  Academic Excellence Scholarship Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="rounded-lg overflow-hidden border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-purple-100">
                        <TableHead className="bg-purple-100 text-[#002f87] font-semibold text-lg">Term Rank</TableHead>
                        <TableHead className="bg-purple-100 text-[#002f87] font-semibold text-lg">Eligible Terms</TableHead>
                        <TableHead className="bg-purple-100 text-[#002f87] font-semibold text-lg">Award per Term</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="bg-amber-50">
                        <TableCell className="font-medium text-black text-lg">Rank 1</TableCell>
                        <TableCell className="text-black text-lg">Terms 1, 2, and 3</TableCell>
                        <TableCell className="text-red-600 font-semibold text-lg">INR 30,000</TableCell>
                      </TableRow>
                      <TableRow className="bg-amber-50">
                        <TableCell className="font-medium text-black text-lg">Rank 2</TableCell>
                        <TableCell className="text-black text-lg">Terms 1, 2, and 3</TableCell>
                        <TableCell className="text-red-600 font-semibold text-lg">INR 20,000</TableCell>
                      </TableRow>
                      <TableRow className="bg-amber-50">
                        <TableCell className="font-medium text-black text-lg">Rank 3</TableCell>
                        <TableCell className="text-black text-lg">Terms 1, 2, and 3</TableCell>
                        <TableCell className="text-red-600 font-semibold text-lg">INR 10,000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Important Scholarship Note */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <Card className="bg-[#002f87] text-white border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-yellow-400" />
                  <h2 className="text-2xl font-bold">
                    Important Scholarship Note
                  </h2>
                </div>
                <p className="text-lg leading-relaxed">
                  The brochure scholarship list is illustrative and non-exhaustive. Awards are subject to institute policy.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* General Scholarship Notes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#002f87] font-bold">
                  General Conditions for Availing Scholarships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700 text-lg">
                  <li className="flex items-start gap-3"><span className="text-red-600 font-bold">*</span><span>Admission merit tiers use CAT/XAT percentiles, CMAT ranks, MAT/ATMA scores, or ICET ranks.</span></li>
                  <li className="flex items-start gap-3"><span className="text-red-600 font-bold">*</span><span>Academic Excellence awards are listed for term ranks 1-3 in Terms 1, 2, and 3.</span></li>
                  <li className="flex items-start gap-3"><span className="text-red-600 font-bold">*</span><span>The brochure lists these scholarships for Batch 2027-29 PGDM TPS, BIFS, and BA.</span></li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}
