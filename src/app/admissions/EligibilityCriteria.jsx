import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, FileText, Calendar, AlertCircle } from "lucide-react";

// Animation variants for smooth transitions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function EligibilityCriteria() {
  // Table data for program-specific eligibility
  const programData = [
    {
      program: "PGDM",
      criteria:
        "Bachelor's Degree (min. 3 years) from any recognized university with 50% aggregate marks.",
    },
    {
      program: "PGDM BIFS",
      criteria:
        "Bachelor's Degree (min. 3 years) from any recognized university with 50% aggregate marks.",
    },
    {
      program: "PGDM BA",
      criteria:
        "Bachelor's Degree with one of the following from any recognized university with 50% aggregate: Engineering or B.Sc. (Maths/Physics/Statistics), B.A. (MES), B.Com (Computers/Analytics), BBA (Analytics) OR Any entrance exam score with ≥ 60% in Data Interpretation and Numerical Ability.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Header Section */}
        {/* <motion.div className="text-center mb-12" variants={itemVariants}>
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Eligibility Criteria
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Review the admission requirements for our Post Graduate Diploma in
            Management programs
          </p>
        </motion.div> */}

        {/* General Eligibility Requirements */}
        <motion.div variants={itemVariants} className="mb-12">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-2xl font-semibold text-gray-800">
                <FileText className="h-6 w-6 mr-3 text-primary" />
                General Eligibility Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Degree Requirement */}
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Academic Qualification
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Candidates applying for the Post Graduate Diploma in
                  Management (PGDM) must have a
                  <span className="font-medium">
                    {" "}
                    Bachelor's Degree in any discipline
                  </span>{" "}
                  from a recognized university with a{" "}
                  <span className="font-medium">
                    minimum aggregate of 50% marks
                  </span>{" "}
                  (all subjects combined).
                </p>
              </div>

              {/* Final Year Students */}
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Final Year Students
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Candidates in their final year of graduation can also apply,
                  provided they've maintained a
                  <span className="font-medium">
                    {" "}
                    50% average up to the current semester
                  </span>{" "}
                  and complete all exams before{" "}
                  <span className="font-medium">July 31</span> of the respective admission year.
                </p>
              </div>

              {/* Documentation Requirements */}
              <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Documentation Deadline
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Proof of graduation with at least 50% marks must be submitted
                  by{" "}
                  <strong className="font-medium">July 31 </strong>
                  of the respective admission year.
                </p>
              </div>

              {/* Important Notes */}
              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Important Restrictions
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    • Candidates with uncleared backlogs after July 31 are not
                    eligible to apply.
                  </p>
                  <p>
                    • Applicants must submit a valid management entrance exam
                    score (only those accepted by AICTE) before July 31.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <Separator className="my-8" />

        {/* Program-Specific Eligibility Table */}
        <motion.div variants={itemVariants}>
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-semibold text-gray-800">
                Program-Specific Eligibility
              </CardTitle>
              <p className="text-muted-foreground">
                Detailed eligibility criteria for each program offered
              </p>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold text-gray-800 w-1/4">
                        Program
                      </TableHead>
                      <TableHead className="font-semibold text-gray-800">
                        Eligibility Criteria
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {programData.map((row, index) => (
                      <TableRow
                        key={index}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <TableCell className="font-medium text-primary">
                          <Badge variant="secondary" className="text-sm whitespace-nowrap">
                            {row.program}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-700 leading-relaxed">
                          {row.criteria}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={itemVariants} className="mt-8">
          <p className="text-sm text-muted-foreground bg-gray-100 p-4 rounded-lg">
            <AlertCircle className="h-4 w-4 inline mr-2" />
            For any clarifications regarding eligibility criteria, please
            contact the admissions office. All information is subject to change
            as per university guidelines.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
