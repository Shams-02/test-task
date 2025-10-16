import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import advisorImage from "../assets/images/into-user.png";

interface IntroductionProps {
  onNext: () => void;
}

export default function Introduction({ onNext }: IntroductionProps) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="h-full flex flex-col gap-4">
        <div className="rounded-[24px] shadow-lg overflow-hidden bg-white flex-grow">
          <div className="grid md:grid-cols-2 h-full">
            <div className="flex flex-col justify-center p-10">
              <h1 className="text-[40px] font-medium mb-6" data-testid="text-greeting">
                Dear Mr. Cooper,
              </h1>

              <div className="space-y-4 text-2xl text-[#12151A] font-light">
                <p>
                  Your roof is ready to start working for you! We've crafted a tailored Solar Plan
                  designed to slash your energy bills right away while locking in predictable,
                  long-term savings.
                </p>

                <p>
                  This plan shows exactly how much you can save, how quickly you'll see results,
                  and the best system fit for your home.
                </p>

                <p className="pt-2">
                  Click <span className="font-semibold text-primary">'Let's get started'</span> to
                  see the system designed just for you.
                </p>

                <div className="pt-4">
                  <p className="text-foreground">Yours sincerely,</p>
                  <p className="font-semibold text-foreground">David Benjamin</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex items-end justify-end">
              <div className="relative">
                <img
                  src={advisorImage}
                  alt="David Benjamin - Solar Energy Consultant"
                  className="relative w-full rounded-2xl object-cover max-w-[520px]"
                  data-testid="img-advisor"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={onNext}
          className="w-full bg-[#D8EC82] h-14 flex items-center justify-center text-[#000000] font-medium text-lg py-6 rounded-full shadow-md hover:shadow-lg transition-all"
          data-testid="button-get-started"
        >
          Let's get started
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
