import { Star, Phone } from "lucide-react";
import { VolteraLogo } from "./VolteraLogo";
import { consultationSteps } from "../../shared/schema";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import userLogo from "../assets/images/user.png"

interface ConsultationSidebarProps {
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export function ConsultationSidebar({
  currentStep,
  onStepClick,
}: ConsultationSidebarProps) {
  const mockConsultationSteps = [
    { id: 1, label: "Introduction" },
    { id: 2, label: "Your situation" },
    { id: 3, label: "Solar panels" },
    { id: 4, label: "Savings" },
    { id: 5, label: "Energy system" },
    { id: 6, label: "Service plan" },
    { id: 7, label: "Your offer" },
  ];
  const steps =
    typeof consultationSteps !== "undefined" && consultationSteps.length > 0
      ? consultationSteps
      : mockConsultationSteps;

  const completionPercentage = Math.round((currentStep / steps.length) * 100);

  return (
    <aside className="min-w-[244px] shrink-0 h-screen bg-white text-gray-800 flex flex-col shadow-2xl shadow-purple-200 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <VolteraLogo />
        <div className="mt-4 flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map(
                (
                  star,
                ) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ),
              )}
              <div className="relative w-4 h-4">
                <Star className="absolute w-4 h-4 text-yellow-400" />{" "}
                <div className="absolute overflow-hidden w-1/2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />{" "}
                </div>
              </div>
            </div>
            <span className="text-sm font-bold text-gray-800">9.5</span>
          </div>
          <button
            className="text-sm text-[#12151A] hover:text-gray-800 transition-colors flex items-center justify-center"
            data-testid="link-reviews"
          >
            456 reviews
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.17833 13.5117L10.9342 8.75583L6.17833 4L5 5.17833L8.5775 8.75583L5 12.3333L6.17833 13.5117Z" fill="#12151A" />
            </svg>
          </button>
        </div>
      </div>

      <div className="p-6 border-b border-gray-100">
        <div className="relative w-24 h-24 mx-auto">
          <svg className="w-24 h-24 transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="hsl(var(--sidebar-border))"
              strokeWidth="8"
              fill="none"
              className="text-gray-100 stroke-current"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke={`rgb(132, 204, 22)`}
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - completionPercentage / 100)}`}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-800">
              {completionPercentage}%
            </span>
            <span className="text-xs text-gray-500">Completed</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-1">
          {steps.map((step, index) => {
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;
            const isAccessible = step.id <= currentStep;

            const circleClasses =
              isCompleted || isCurrent
                ? `bg-lime-500 border-lime-500 text-white`
                : `border-gray-300 text-gray-500`;

            const textClasses = isCurrent
              ? "text-gray-800 font-bold"
              : isCompleted
                ? "text-gray-700"
                : "text-gray-500";

            const buttonClasses = isCurrent
              ? `bg-lime-50`
              : isAccessible
                ? "hover:bg-gray-50 cursor-pointer"
                : "cursor-not-allowed";

            const lineClasses =
              step.id < currentStep
                ? "bg-lime-500"
                : "bg-gray-300";

            return (
              <div key={step.id} className="relative">
                <button
                  className={`w-full flex items-center gap-3 py-3 px-3 rounded-md transition-colors ${buttonClasses}`}
                  onClick={() => isAccessible && onStepClick?.(step.id)}
                  disabled={!isAccessible}
                  data-testid={`step-${step.id}`}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full border-2 flex-shrink-0 transition-all ${circleClasses}`}
                  >
                    {isCompleted ? (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <span className="text-sm font-medium">{step.id}</span>
                    )}
                  </div>

                  <span
                    className={`text-base transition-colors ${textClasses}`}
                  >
                    {step.label}
                  </span>
                </button>

                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-[27px] top-[50px] w-0.5 h-6 transition-colors ${lineClasses}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </nav>

      <div className="p-6">
        <div className="flex items-center gap-3 bg-[#F6F8EF] p-3 rounded-full">
          <Avatar className="w-12 h-12 flex-shrink-0">
            <AvatarImage src={userLogo} />
            <AvatarFallback>CS</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-1">Contact us:</p>
            <a
              href="tel:+31851234567"
              className="flex items-center gap-1.5 text-base font-bold text-gray-800 hover:text-purple-600 transition-colors"
              data-testid="link-phone"
            >
              +31 85 123 4567
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
