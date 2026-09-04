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
import EntranceScholarships from "@/app/admissions/EntranceScholarships";

const scholarshipData = [
  {
    range: "90% or above",
    tier: "Platinum",
    classX: 11250,
    classXII: 11250,
    graduation: 22500,
    total: 45000,
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    borderColor: "border-yellow-200",
    icon: Trophy,
  },
  {
    range: "85% to 89.99%",
    tier: "Gold",
    classX: 10000,
    classXII: 10000,
    graduation: 20000,
    total: 40000,
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
    borderColor: "border-orange-200",
    icon: Star,
  },
  {
    range: "80% to 84.99%",
    tier: "Silver",
    classX: 8750,
    classXII: 8750,
    graduation: 17500,
    total: 35000,
    color: "from-gray-400 to-gray-600",
    bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
    borderColor: "border-gray-200",
    icon: GraduationCap,
  },
  {
    range: "75% to 79.99%",
    tier: "Bronze",
    classX: 7500,
    classXII: 7500,
    graduation: 15000,
    total: 30000,
    color: "from-amber-600 to-amber-800",
    bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
    borderColor: "border-amber-200",
    icon: GraduationCap,
  },
  {
    range: "70% to 74.99%",
    tier: "Merit",
    classX: 6250,
    classXII: 6250,
    graduation: 12500,
    total: 25000,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    icon: GraduationCap,
  },
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
        <div className="max-w-7xl mx-auto">
          <p className="text-lg text-slate-600 mb-4">
            <strong className="text-red-600">*</strong> Students who meet below
            mentioned criteria are eligible for Merit Scholarship (A student
            will be awarded the best option, if eligible for more than 1
            criteria)
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
                Criteria-2: Scholarship based on Academic Background (X, XII &
                Graduation)
              </h1>
            </div>
            <p className="text-lg text-slate-600">
              Scholarship based on aggregate (all subjects) marks in Class X,
              Class XII, and Graduation
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
                            Class X
                          </span>
                          <span className="font-bold text-slate-800">
                            ₹{scholarship.classX.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                          <span className="font-medium text-slate-700">
                            Class XII
                          </span>
                          <span className="font-bold text-slate-800">
                            ₹{scholarship.classXII.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                          <span className="font-medium text-slate-700">
                            Graduation
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
                          Total Scholarship
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
                <span className="font-semibold">Important Note:</span> All
                amounts are in INR and subject to verification. Students must
                maintain the specified aggregate marks across all subjects in
                Class X, XII, and Graduation to be eligible for the respective
                scholarship tier.
              </p>
            </div>
          </motion.div>

          {/* Criteria-3: Late Sri S P Sampathy Memorial Scholarship */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
                Criteria-3: Late Sri S P Sampathy Memorial Scholarship
              </h1>
            </div>
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-[#002f87] text-yellow-400 rounded-t-lg">
                <CardTitle className="text-xl font-bold">
                  Criteria-3: Late Sri S P Sampathy Memorial Scholarship
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="rounded-lg overflow-hidden border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-purple-100">
                        <TableHead className="bg-purple-100 text-[#002f87] font-semibold text-lg">
                          Institution
                        </TableHead>
                        <TableHead className="bg-purple-100 text-[#002f87] font-semibold text-lg">
                          Eligibility
                        </TableHead>
                        <TableHead className="bg-purple-100 text-[#002f87] font-semibold text-lg">
                          Scholarship Amount
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="bg-amber-50">
                        <TableCell className="font-medium text-black text-lg">
                          Siva Sivani SPS High School
                        </TableCell>
                        <TableCell className="text-black text-lg">
                          Any students studied in SPS High School
                        </TableCell>
                        <TableCell className="text-red-600 font-semibold text-lg">
                          Scholarship as per Criteria 1 or 2, plus an additional
                          ₹10,000
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-amber-50">
                        <TableCell className="font-medium text-black text-lg">
                          Siva Sivani Junior College
                        </TableCell>
                        <TableCell className="text-black text-lg">
                          Any Students studied in Junior College
                        </TableCell>
                        <TableCell className="text-red-600 font-semibold text-lg">
                          Scholarship as per Criteria 1 or 2, plus an additional
                          ₹15,000
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-amber-50">
                        <TableCell className="font-medium text-black text-lg">
                          Siva Sivani Degree College
                        </TableCell>
                        <TableCell className="text-black text-lg">
                          Any Students studied in Degree College
                        </TableCell>
                        <TableCell className="text-red-600 font-semibold text-lg">
                          Scholarship as per Criteria 1 or 2, plus an additional
                          ₹40,000
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* The President Scholarship */}
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
                    The President Scholarship
                  </h2>
                </div>
                <p className="text-lg leading-relaxed">
                  The President Scholarship, valued at{" "}
                  <span className="text-yellow-400 font-bold">₹1,00,000</span>,
                  is conferred upon the children of Defence personnel as a
                  tribute to their distinguished contribution to the nation.
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
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">*</span>
                    <span>
                      Students will have to submit valid score/rank card to
                      avail scholarship under Criteria - 1
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">*</span>
                    <span>
                      Students will have to submit Class X, XII score card and
                      consolidated marksheet or all year / Semester wise
                      marksheets of Graduation to avail scholarship under
                      Criteria - 2
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">*</span>
                    <span>
                      Students can avail merit scholarship only after Second
                      Term fee payment, students need to pay entire Term Fees
                      and apply for the scholarship with the copy of scholarship
                      letter.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}
