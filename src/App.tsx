import { useEffect, useState } from "react";
import { ConsultationSidebar } from "./components/ConsultationSidebar";
import Introduction from "./pages/Introduction";
import YourSituation from "./pages/YourSituation";
import SolarPanels from "./pages/SolarPanels";
import Savings from "./pages/Savings";
import EnergySystem from "./pages/EnergySystem";
import ServicePlan from "./pages/ServicePlan";
import YourOffer from "./pages/YourOffer";
import { consultationSteps } from "../shared/schema";
import { ArrowLeft, ArrowRight } from "lucide-react";


function ConsultationApp() {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const stepNames = consultationSteps.map((s) => s.label);
    document.title = `${stepNames[currentStep - 1]} - Voltera Solar Consultation`;
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step: number) => {
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  };


  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Introduction
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <YourSituation />
        );
      case 3:
        return <SolarPanels />;
      case 4:
        return <Savings />;
      case 5:
        return <EnergySystem />;
      case 6:
        return <ServicePlan />;
      case 7:
        return <YourOffer />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden gap-4 bg-[#F6F8EF] py-4 px-2">
      <ConsultationSidebar
        currentStep={currentStep}
        onStepClick={handleStepClick}
      />
      <main className="h-[calc(100vh-32px)] overflow-y-auto flex flex-col gap-4 w-full">
        {renderCurrentStep()}
        {currentStep > 1 && (
          <div className="flex justify-end gap-5 items-center">
            <button
              type="button"
              onClick={handlePrevious}
              className="bg-[#FCFFF0] rounded-full cursor-pointer flex gap-1 items-center justify-center shadow-[0_1px_2px_0_#0000000D] h-14 text-xl font-medium text-black px-14"
              data-testid="button-previous"
            >
              <ArrowLeft className="w-5 h-5" />
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="bg-[#D8EC82] rounded-full cursor-pointer flex gap-1 items-center justify-center shadow-[0_1px_2px_0_#0000000D] h-14 text-xl font-medium text-black px-14"
              data-testid="button-next"
            >
              Next
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

function App() {
  return (
    <ConsultationApp />
  );
}

export default App;
