import { Star } from "lucide-react";
import { consultationSteps } from "../../shared/schema";
import userLogo from "../assets/images/user.png";
import logo from "../assets/images/logo.png";

interface AsideProps {
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export function Aside({ currentStep, onStepClick }: AsideProps) {
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
    <aside className="min-w-[244px] p-[11px] shrink-0 h-full bg-white text-gray-800 flex flex-col shadow-2xl shadow-purple-200 rounded-[24px] overflow-hidden">
      <div className="pt-3.5">
        <div className="flex items-center gap-2 justify-center">
          <img
            src={logo}
            alt="logo"
            className="h-[35px] w-[148px] object-contain cursor-pointer"
          />
        </div>
        <div className="mt-4 flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
              <div className="relative w-4 h-4">
                <Star className="absolute w-4 h-4 text-yellow-400" />{" "}
                <div className="absolute overflow-hidden w-1/2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />{" "}
                </div>
              </div>
            </div>
            <span className="text-sm font-light text-[#12151A] hover:opacity-70 cursor-pointer">
              9.5
            </span>
          </div>
          <button
            className="text-sm text-[#12151A] font-normal transition-colors flex items-center justify-center hover:opacity-70 cursor-pointer"
            data-testid="link-reviews">
            456 reviews
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.17833 13.5117L10.9342 8.75583L6.17833 4L5 5.17833L8.5775 8.75583L5 12.3333L6.17833 13.5117Z"
                fill="#12151A"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="h-px w-full bg-[#CACACA]/60 my-4" />

      <div className="relative w-[106px] h-[106px] mx-auto">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="52"
            cy="52"
            r="48"
            stroke="#F5F5F5"
            strokeWidth="8"
            fill="none"
            className="text-gray-100 stroke-current"
          />
          <circle
            cx="52"
            cy="52"
            r="48"
            stroke="#91CB50"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 40}`}
            strokeDashoffset={`${
              2 * Math.PI * 40 * (1 - completionPercentage / 100)
            }`}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-semibold text-[#12151A]">
            {completionPercentage}%
          </span>
          <span className="text-[10px] text-[#737373] font-light">
            Completed
          </span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto scrollbar--tiny mt-4">
        <div className="space-y-[22px] w-[200px] mx-auto">
          {steps.map((step, index) => {
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;
            const isAccessible = step.id <= currentStep;

            const circleClasses = isCompleted
              ? `outline-[#D8EC82] outline-offset-0 bg-[#D8EC82] hover:bg-[#D8EC82]  text-[#12151A]`
              : isCurrent
              ? "outline-[#D8EC82] outline-offset-3 bg-[#D8EC82] hover:bg-[#D8EC82]  text-[#12151A]"
              : `outline-[##969696] text-[#969696]`;

            const textClasses = isCurrent
              ? "text-[#12151A] font-semibold"
              : isCompleted
              ? "text-[#12151A] font-semibold"
              : "text-[#969696]";

            const buttonClasses = isAccessible
              ? "hover:bg-[#D8EC82]/20 cursor-pointer"
              : "cursor-not-allowed";

            const lineClasses =
              step.id <= currentStep ? "bg-[#D8EC82]" : "bg-[#969696]";

            return (
              <div key={step.id} className="relative">
                <button
                  className={`w-full flex items-center gap-4 px-3 py-2 rounded-xl transition-colors ${buttonClasses}`}
                  onClick={() => isAccessible && onStepClick?.(step.id)}
                  disabled={!isAccessible}
                  data-testid={`step-${step.id}`}>
                  <div
                    className={`flex items-center justify-center outline-1 w-7 h-7 rounded-full flex-shrink-0 transition-all ${circleClasses}`}>
                    <span className="text-sm font-medium">{step.id}</span>
                  </div>

                  <span
                    className={`text-base font-light transition-colors ${textClasses}`}>
                    {step.label}
                  </span>
                </button>

                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-[26px] top-[42px] w-px h-8 transition-colors ${lineClasses}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </nav>

      <div>
        <a
          href="tel:+31851234567"
          className="flex items-start gap-3 group text-base font-medium text-[#636363] hover:bg-[#91CB50] transition-colors bg-[#F6F8EF] py-2 px-2.5 rounded-full"
          data-testid="link-phone">
          <img
            src={userLogo}
            alt="userLogo"
            className="h-[46px] w-[46px] object-contain"
          />
          <div className="flex flex-col group-hover:text-white">
            <p className="text-sm block font-light text-[#636363] group-hover:text-white">
              Contact us:
            </p>
            <span>+31 85 123 4567</span>
          </div>
        </a>
      </div>
    </aside>
  );
}
