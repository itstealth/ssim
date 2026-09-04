import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  Trophy,
  Star,
  School,
  Award,
  Shield,
  DollarSign,
  CheckCircle,
  Clock,
  Users,
  FileCheck,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const stipendData = [
  {
    year: "First Year",
    amount: 20000,
    total: 240000,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    icon: Trophy,
  },
  {
    year: "Second Year",
    amount: 25000,
    total: 300000,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    icon: Star,
  },
  {
    year: "Third Year",
    amount: 30000,
    total: 360000,
    color: "from-amber-400 to-amber-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
    borderColor: "border-amber-200",
    icon: Award,
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

export default function FPMScholarships() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
              Financial Support (Full-time Researchers and Freshers)
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            SSIM offers limited scholarships to FPM scholars (Full-time) based on
            their performance during the process of selection and during the tenure
            of the program.
          </p>
        </motion.div>

        {/* Stipend Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {stipendData.map((stipend, index) => {
            const IconComponent = stipend.icon;
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
                  className={`h-full ${stipend.bgColor} ${stipend.borderColor} border-2 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-2 bg-gradient-to-r ${stipend.color} rounded-lg`}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-800">
                        {stipend.year}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Monthly Amount */}
                    <div className="p-3 bg-white/60 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-700">
                          Monthly Stipend
                        </span>
                        <span className="font-bold text-slate-800">
                          ₹{stipend.amount.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Total Amount */}
                    <div
                      className={`p-4 bg-gradient-to-r ${stipend.color} rounded-lg text-center`}
                    >
                      <p className="text-white/90 text-sm font-medium mb-1">
                        Annual Total
                      </p>
                      <p className="text-white text-2xl font-bold">
                        ₹{stipend.total.toLocaleString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key Conditions Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-[#002f87] text-white rounded-t-lg">
              <CardTitle className="text-xl font-bold">
                Key Conditions for Stipend Eligibility
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">
                      Employment Status
                    </p>
                    <p className="text-slate-600 text-lg">
                      Stipend will only be disbursed when FPM scholar is not
                      working anywhere.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">
                      Teaching/Research Assistant
                    </p>
                    <p className="text-slate-600 text-lg">
                      FPM scholar will also be working as teaching/research
                      assistant at SSIM.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">
                      Progress Review
                    </p>
                    <p className="text-slate-600 text-lg">
                      The progress of the student will be reviewed every six
                      months and the decision regarding the disbursement of stipend
                      for the next six months will be based on the scholar's
                      performance in the last six months' period. The
                      satisfactory/unsatisfactory performance of the candidate in
                      the last six months will be certified by the candidate's
                      guide.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileCheck className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">
                      Review Process
                    </p>
                    <p className="text-slate-600 text-lg">
                      Every month stipend will be paid to the selected candidate.
                      The progress of the student will be reviewed by the Research
                      Advisory Committee every six months. The decision regarding
                      the disbursement of stipend for the next six months will be
                      based on the scholar's performance in the last six months.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Duration Limitation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-800 mb-2 text-lg">
                  Duration Limitation
                </p>
                <p className="text-slate-600 text-lg">
                  No extension of stipend will be provided beyond the stipulated
                  time period of three years.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fee Structure Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
              Fee Structure for Stipend-Eligible Students
            </h2>
          </div>
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-[#002f87] text-yellow-400 rounded-t-lg">
              <CardTitle className="text-xl font-bold">
                Tuition Fee Exemption & Fees Payable
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="rounded-lg overflow-hidden border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-purple-100">
                      <TableHead className="bg-purple-100 text-[#002f87] font-semibold text-lg">
                        Category
                      </TableHead>
                      <TableHead className="bg-purple-100 text-[#002f87] font-semibold text-lg">
                        Details
                      </TableHead>
                      <TableHead className="bg-purple-100 text-[#002f87] font-semibold text-lg">
                        Amount
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-green-50">
                      <TableCell className="font-medium text-black text-lg">
                        Tuition Fee
                      </TableCell>
                      <TableCell className="text-black text-lg">
                        Students fulfilling the mentioned criteria are eligible for
                        stipend and are exempted from paying the tuition fee
                      </TableCell>
                      <TableCell className="text-green-600 font-semibold text-lg">
                        Exempted
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-amber-50">
                      <TableCell className="font-medium text-black text-lg">
                        Acceptance Fee
                      </TableCell>
                      <TableCell className="text-black text-lg">
                        Non-refundable acceptance fee
                      </TableCell>
                      <TableCell className="text-red-600 font-semibold text-lg">
                        ₹60,000
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-amber-50">
                      <TableCell className="font-medium text-black text-lg">
                        Security Deposit
                      </TableCell>
                      <TableCell className="text-black text-lg">
                        Refundable security deposit
                      </TableCell>
                      <TableCell className="text-red-600 font-semibold text-lg">
                        ₹10,000
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-purple-50">
                      <TableCell className="font-medium text-black text-lg">
                        Total Fees Payable
                      </TableCell>
                      <TableCell className="text-black text-lg font-semibold">
                        Acceptance Fee + Security Deposit
                      </TableCell>
                      <TableCell className="text-[#002f87] font-bold text-xl">
                        ₹70,000
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Important Note Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
            <p className="text-slate-600 text-sm leading-relaxed">
              <span className="font-semibold">Important Note:</span> All amounts
              are in INR. The stipend is subject to regular performance review
              every six months by the Research Advisory Committee and the
              candidate's guide. The next stipend installment is subject to
              satisfactory performance certification.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

