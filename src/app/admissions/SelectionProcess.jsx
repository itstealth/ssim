"use client";

import {
  ListChecks,
  Files,
  FileSignature,
  Video,
  Users,
  ChevronDown,
} from "lucide-react";

// Define the exact steps from the image
const admissionSteps = [
  {
    id: 1,
    title: "Shortlisting of Application",
    icon: ListChecks,
    bgColor: "bg-green-500",
  },
  {
    id: 2,
    title: "Submission of Required Documents",
    icon: Files,
    bgColor: "bg-blue-500",
  },
  {
    id: 3,
    title: "Submission of Statement of Purpose",
    icon: FileSignature,
    bgColor: "bg-yellow-500",
  },
  {
    id: 4,
    title: "Uploading of Video Introduction",
    icon: Video,
    bgColor: "bg-red-500",
  },
  {
    id: 5,
    title: "Personal Interview",
    icon: Users,
    bgColor: "bg-green-500",
  },
];

// FPM/EFPM specific selection process steps
const fpmSelectionSteps = [
  {
    id: 1,
    title: "Application Form and Research Interest",
    description: "Submit abstract (5,000 words) on area of research interest (tentative research proposal) along with FPM application",
    icon: FileSignature,
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "Admission/Eligibility Tests",
    description: "Appear for SRAT conducted by SSIM or submit UGC NET score",
    icon: ListChecks,
    bgColor: "bg-green-500",
  },
  {
    id: 3,
    title: "Research Proposal Presentation and Interview",
    description: "Present tentative research proposal to selection committee and attend personal interview",
    icon: Users,
    bgColor: "bg-yellow-500",
  },
];

export default function SelectionProcess({ programType = "general" }) {
  // Choose the appropriate steps based on program type
  const steps = programType === "fpm-efpm" ? fpmSelectionSteps : admissionSteps;
  
  return (
    <div className="bg-white pt-8">
      <div className="mx-auto">
        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-8 left-0 right-0 px-[50px]">
              <div className="relative h-0.5 w-full bg-slate-300">
                {[...Array(steps.length - 1)].map((_, index) => (
                  <div
                    key={index}
                    className="absolute top-1/2"
                    style={{
                      left: `${(index + 1) * (100 / steps.length)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="w-0 h-0 border-l-8 border-l-slate-300 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className={`relative z-10 grid gap-4 ${steps.length === 3 ? 'grid-cols-3' : 'grid-cols-5'}`}>
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon Circle */}
                  <div
                    className={`w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center mb-6`}
                  >
                    <step.icon
                      className="w-10 h-10 text-white"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Step Content */}
                  <div className="">
                    <h3 className="text-base font-semibold text-slate-700 mb-3 leading-tight">
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet Layout (md to lg) */}
        <div className="hidden md:block lg:hidden">
          <div className="space-y-8">
            {/* First Row - 3 steps */}
            <div className="relative">
              <div className="absolute top-12 left-0 right-0 flex items-center justify-between px-20">
                {[...Array(Math.min(2, steps.length - 1))].map((_, index) => (
                  <div
                    key={index}
                    className="flex-1 flex items-center justify-center"
                  >
                    <div className="w-full max-w-24 h-0.5 bg-slate-300"></div>
                    <div className="w-0 h-0 border-l-6 border-l-slate-300 border-t-3 border-t-transparent border-b-3 border-b-transparent ml-1"></div>
                  </div>
                ))}
              </div>

              <div className={`grid gap-6 ${steps.length === 3 ? 'grid-cols-3' : 'grid-cols-3'}`}>
                {steps.slice(0, 3).map((step) => (
                  <div
                    key={step.id}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className={`w-24 h-24 rounded-full ${step.bgColor} flex items-center justify-center mb-4 relative z-10`}
                    >
                      <step.icon
                        className="w-8 h-8 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="max-w-40">
                      <h3 className="text-base font-semibold text-slate-700 mb-2 leading-tight">
                        {step.title}
                      </h3>
                      {step.description && (
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow Down - Only show if there are more than 3 steps */}
            {steps.length > 3 && (
              <div className="flex justify-center">
                <ChevronDown className="w-8 h-8 text-slate-400" />
              </div>
            )}

            {/* Second Row - Remaining steps (only for 5-step process) */}
            {steps.length > 3 && (
              <div className="relative">
                <div className="absolute top-12 left-1/4 right-1/4 flex items-center justify-center">
                  <div className="w-full max-w-24 h-0.5 bg-slate-300"></div>
                  <div className="w-0 h-0 border-l-6 border-l-slate-300 border-t-3 border-t-transparent border-b-3 border-b-transparent ml-1"></div>
                </div>

                <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                  {steps.slice(3, 5).map((step) => (
                  <div
                    key={step.id}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className={`w-24 h-24 rounded-full ${step.bgColor} flex items-center justify-center mb-4 relative z-10`}
                    >
                      <step.icon
                        className="w-8 h-8 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="max-w-40">
                      <h3 className="text-base font-semibold text-slate-700 mb-2 leading-tight">
                        {step.title}
                      </h3>
                      {step.description && (
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}
          </div>
        </div>

        {/* Mobile Layout (below md) */}
        <div className="block md:hidden">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div
                  className={`w-20 h-20 rounded-full ${step.bgColor} flex items-center justify-center mb-4`}
                >
                  <step.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Step Content */}
                <div className="max-w-xs px-4">
                  <h3 className="text-lg font-semibold text-slate-700 mb-2 leading-tight">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  )}
                </div>

                {/* Vertical Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mb-2">
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FPM/EFPM Selection Summary */}
        {programType === "fpm-efpm" && (
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Final Selection Criteria
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Final selection is based on the cumulative score of the following components:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Entrance exam scores (SRAT or UGC NET)</li>
              <li>Past academic records</li>
              <li>Research proposal presentation</li>
              <li>Personal interview</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4 font-medium">
              Communication will be sent only to the selected candidates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
