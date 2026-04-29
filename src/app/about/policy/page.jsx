"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Users, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const policies = [
  {
    id: "employee",
    label: "Employee Handbook",
    icon: Users,
    pdfUrl: "/pdfs/footer/Employee_Hand_Book.pdf",
  },
  {
    id: "student",
    label: "Student Handbook",
    icon: GraduationCap,
    pdfUrl: "/pdfs/footer/Student_Hand_Book_Batch_2025_27.pdf",
  },
  {
    id: "hr",
    label: "HR & Faculty Development Policies",
    icon: FileText,
    pdfUrl: "/pdfs/footer/hr&facultyDevelopmentPolicies.pdf",
  },
];

export default function PolicyPage() {
  const [activeTab, setActiveTab] = useState("employee");

  const activePolicy = policies.find((p) => p.id === activeTab);

  return (
    <div className="min-h-screen bg-mist">
      <section className="w-full py-16 sm:py-20">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Policies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access SSIM&apos;s official handbooks and policy documents
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {policies.map((policy) => {
              const Icon = policy.icon;
              return (
                <button
                  key={policy.id}
                  onClick={() => setActiveTab(policy.id)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300",
                    activeTab === policy.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-white text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {policy.label}
                </button>
              );
            })}
          </div>

          {/* PDF Viewer */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border"
          >
            {activePolicy && (
              <>
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-4 border-b border-border">
                  <h3 className="text-lg font-semibold text-primary">
                    {activePolicy.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    PDF Document — Opens in new tab
                  </p>
                </div>
                <div className="p-6">
                  <iframe
                    src={activePolicy.pdfUrl}
                    className="w-full h-[70vh] rounded-lg border border-border"
                    title={activePolicy.label}
                  />
                  <div className="mt-4 flex justify-end">
                    <a
                      href={activePolicy.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      <FileText className="w-4 h-4" />
                      Open in New Tab
                    </a>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}