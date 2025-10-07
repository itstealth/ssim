"use client"

import { motion } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

// Selection parameters data
const selectionParameters = [
  {
    parameter: "Percentile/Score of Entrance Exam",
    weightage: 20,
  },
  {
    parameter: "Academic Scores (10th, 12th & Graduation)",
    weightage: 30,
  },
  {
    parameter: "Statement of Purpose (SOP) & Video Introduction",
    weightage: 20,
  },
  {
    parameter: "Personal Interview (PI)",
    weightage: 25,
  },
  {
    parameter: "Work Experience/ Certifications/ Extra Curricular Activities",
    weightage: 5,
  },
]

export default function AdmissionParameters() {
  return (
    <div>
      <div className="mx-auto max-w-4xl">

        {/* Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-slate-50">
                      <TableHead className="text-left py-6 px-6 font-semibold text-gray-900 text-base">
                        Selection Parameter
                      </TableHead>
                      <TableHead className="text-center py-6 px-6 font-semibold text-gray-900 text-base min-w-[180px]">
                        Weightage (Out of 100)
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectionParameters.map((item, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.4 + index * 0.1,
                        }}
                        className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border-b border-gray-100 last:border-b-0"
                      >
                        <TableCell className="py-5 px-6 text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                          {item.parameter}
                        </TableCell>
                        <TableCell className="py-5 px-6 text-center">
                          <div className="inline-flex items-center justify-center">
                            <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              {item.weightage}
                            </span>
                            <span className="text-sm text-gray-500 ml-1 group-hover:text-blue-500 transition-colors duration-300">
                              %
                            </span>
                          </div>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          className="mt-8 text-left"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <p className="text-sm text-gray-600 leading-relaxed mx-auto">
              <span className="font-semibold text-gray-800">Additional Note:</span> SSIM accepts scores of
              CAT/XAT/CMAT/MAT/ATMA/GMAT and State Government Entrance Exam.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
