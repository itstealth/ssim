"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Reusable FAQ accordion for all admission program pages.
 * Props:
 *   faqs — array of { question: string, answer: string }
 */
export default function AdmissionFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-mainBlue mb-6">
        Frequently Asked Questions
      </h3>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md"
          >
            {/* Question row */}
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-slate-50 group"
              aria-expanded={openIndex === index}
            >
              <span className="text-base font-semibold text-slate-800 pr-6 group-hover:text-red-600 transition-colors leading-snug">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex-shrink-0"
              >
                <ChevronDown
                  className={`h-5 w-5 ${
                    openIndex === index ? "text-red-600" : "text-slate-400"
                  }`}
                />
              </motion.div>
            </button>

            {/* Answer panel */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-3 border-t border-slate-100 bg-slate-50/40 text-gray-700 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
