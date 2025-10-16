import { ArrowRight } from "lucide-react";
import advisorImage from "../assets/images/into-user.png";

interface IntroductionProps {
  onNext: () => void;
}

export default function Introduction({ onNext }: IntroductionProps) {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="rounded-[24px] shadow overflow-hidden bg-white flex-grow">
        <div className="grid md:grid-cols-2 h-full">
          <div className="p-10 pt-14 w-[581px]">
            <h1 className="text-[40px] font-medium mb-6 text-[#12151A]">
              Dear Mr. Cooper,
            </h1>

            <div>
              <p className=" text-xl tracking-[0.2px] leading-[34px] text-[#12151A] font-light">
                Your roof is ready to start working for you! We've crafted a
                tailored Solar Plan designed to slash your energy bills right
                away while locking in predictable, long-term savings.
              </p>

              <p className=" text-xl tracking-[0.2px] leading-[34px] text-[#12151A] font-light">
                This plan shows exactly how much you can save, how quickly
                you'll see results, and the best system fit for your home.
              </p>

              <p className="text-xl tracking-[0.2px] leading-[34px] text-[#12151A] font-light my-6">
                Click{" "}
                <button className="font-medium text-[#12151A] cursor-pointer hover:text-[#91CB50]">
                  'Let's get started'
                </button>{" "}
                to see the system designed just for you.
              </p>

              <div>
                <p className="text-xl tracking-[0.2px] leading-[34px] text-[#12151A] font-light">
                  Yours sincerely,
                </p>
                <p className="text-xl tracking-[0.2px] leading-[34px] text-[#12151A] font-medium">
                  David Benjamin
                </p>
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
        className="w-full bg-[#D8EC82] cursor-pointer h-14 flex items-center justify-center text-[#000000] font-medium text-lg rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-all hover:text-white hover:bg-[#91CB50]"
        data-testid="button-get-started">
        Let's get started
        <ArrowRight className="ml-2 w-5 h-5" />
      </button>
    </div>
  );
}
