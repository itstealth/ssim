import {
  CheckCircle,
  FileText,
  Mail,
  CreditCard,
  Upload,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdmissionProcess() {
  const steps = [
    {
      id: 1,
      title: "Announcement of Merit List",
      description:
        "Merit list will be published based on your application and eligibility criteria. Check your status on the official portal.",
      icon: <FileText className="w-6 h-6" />,
      status: "amber",
      padding: "pb-3",
    },
    {
      id: 2,
      title: "Release of Offer Letter",
      description:
        "Successful candidates will receive their official offer letter via email and through the student portal.",
      icon: <Mail className="w-6 h-6" />,
      status: "purple",
      padding: "pb-3",
    },
    {
      id: 3,
      title: "Acceptance of Offer",
      description:
        "Confirm your acceptance of the offer within the specified deadline to secure your admission.",
      icon: <CheckCircle className="w-6 h-6" />,
      status: "current",
      padding: "pb-3",
    },
    {
      id: 4,
      title: "Completion of Admission Formalities",
      description:
        "Complete the final steps to confirm your enrollment and begin your academic journey.",
      icon: <Clock className="w-6 h-6" />,
      status: "completed",
      padding: "pb-6",
      subSteps: [
        {
          title: "Payment of Admission Fees",
          description:
            "Pay the required admission fees through the online portal or designated payment methods.",
          icon: <CreditCard className="w-5 h-5" />,
        },
        {
          title: "Submission of Relevant Documents",
          description:
            "Upload or submit all required documents including certificates, transcripts, and identification.",
          icon: <Upload className="w-5 h-5" />,
        },
      ],
    },
  ];

  const getStepStyles = (status) => {
    switch (status) {
      case "completed":
        return {
          iconBg: "bg-green-100 text-green-600",
          line: "bg-green-200",
          badge: "bg-green-100 text-green-700",
        };
      case "current":
        return {
          iconBg: "bg-blue-100 text-blue-600",
          line: "bg-gray-200",
          badge: "bg-blue-100 text-blue-700",
        };
      case "purple":
        return {
          iconBg: "bg-purple-100 text-purple-600",
          line: "bg-purple-200",
          badge: "bg-purple-100 text-purple-700",
        };
      case "amber":
        return {
          iconBg: "bg-amber-100 text-amber-600",
          line: "bg-amber-200",
          badge: "bg-amber-100 text-amber-700",
        };
      default:
        return {
          iconBg: "bg-gray-100 text-gray-400",
          line: "bg-gray-200",
          badge: "bg-gray-100 text-gray-600",
        };
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <p className="mt-4 text-xl text-gray-600">
        Follow these simple steps to complete your admission and secure your
        place in our institution
      </p>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 pb-8 sm:px-6 lg:px-8">
        <div className="relative">
          {steps.map((step, index) => {
            const styles = getStepStyles(step.status);
            const isLast = index === steps.length - 1;

            return (
              <div key={step.id} className="relative pb-12">
                {/* Timeline Line */}
                {!isLast && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gray-200 -ml-px" />
                )}

                <div className="relative flex items-start space-x-6">
                  {/* Step Icon */}
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${styles.iconBg} shadow-lg`}
                  >
                    {step.icon}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 min-w-0">
                    <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
                      <CardContent className={`p-6 ${step.padding}`}>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-semibold text-gray-900">
                            Step {step.id}: {step.title}
                          </h3>
                          {/* <Badge variant="secondary" className={styles.badge}>
                            {step.status === "completed" && "Completed"}
                            {step.status === "current" && "Current"}
                            {step.status === "upcoming" && "Upcoming"}
                          </Badge> */}
                        </div>

                        {/* <p className="text-gray-600 mb-4 leading-relaxed">
                          {step.description}
                        </p> */}

                        {/* Sub-steps for the last step */}
                        {step.subSteps && (
                          <div className="space-y-4 mt-6">
                            <h4 className="font-medium text-gray-900 border-b border-gray-200 pb-2">
                              Required Actions:
                            </h4>
                            {step.subSteps.map((subStep, subIndex) => (
                              <div
                                key={subIndex}
                                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                              >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                  {subStep.icon}
                                </div>
                                {/* <div className="flex-1"> */}
                                  <h5 className="font-medium text-gray-900 mb-1">
                                    {subStep.title}
                                  </h5>
                                  {/* <p className="text-sm text-gray-600">
                                    {subStep.description}
                                  </p> */}
                                {/* </div> */}
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
            </div>
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Important Note</h4>
              <p className="text-blue-800 text-sm">
                Please ensure you complete each step within the specified
                deadlines. For any queries or assistance, contact our admissions
                office at{" "}
                <span className="font-medium">admissions@ssim.ac.in</span>{" "}
                or call <span className="font-medium">+91 9391114948</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
