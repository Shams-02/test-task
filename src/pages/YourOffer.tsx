import { Button } from "../components/ui/button";
import {
  ArrowUpRight,
  Sun,
  Target,
  CreditCard,
  Home,
  Shield,
} from "lucide-react";
import { useState } from "react";

export default function YourOffer() {
  const [active, setActive] = useState(0);

  return (
    <div className="p-6 bg-white rounded-3xl flex-1">
      <h1
        className="text-4xl font-medium tracking-[0.2px] text-center mb-[22px] text-[#12151A]"
        data-testid="text-page-title">
        Confirm your offer
      </h1>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="bg-[#FAFAFA] rounded-3xl p-6">
            <div
              defaultValue="with-credits"
              className="flex gap-4 mb-8 bg-[#F6F8EF] p-2 rounded-2xl">
              <button
                type="button"
                className={`text-base cursor-pointer font-medium h-12 outline-none ${
                  active === 0 ? "bg-white shadow-[0_3px_8px_0_#0000001F]" : ""
                } hover:bg-white hover:shadow-[0_3px_8px_0_#0000001F] rounded-xl flex-1 flex items-center justify-center`}
                data-testid="tab-with-credits"
                onClick={() => setActive(0)}>
                With energy credits
              </button>
              <button
                type="button"
                className={`text-base cursor-pointer font-medium h-12 outline-none ${
                  active === 1 ? "bg-white shadow-[0_3px_8px_0_#0000001F]" : ""
                } hover:bg-white hover:shadow-[0_3px_8px_0_#0000001F] rounded-xl flex-1 flex items-center justify-center`}
                data-testid="tab-without-credits"
                onClick={() => setActive(1)}>
                Without energy credits
              </button>
            </div>
            <div className="bg-[linear-gradient(273.14deg,#DBF681_26.63%,#91CB50_73.37%)] text-black mb-2 px-3 py-1 w-fit rounded-full text-xs">
              Offer valid for next 7 days
            </div>

            <h2
              className="text-2xl font-medium text-[#12151A] mb-6"
              data-testid="text-system-name">
              Ultra Performance 4500 Wp Solar Panel System
            </h2>

            <div className="mb-6">
              <div className="text-base font-medium text-[#12151A] mb-2">
                TOTAL INVESTMENT
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span
                  className="text-5xl font-semibold text-[#12151A]"
                  data-testid="text-price">
                  {active === 0 ? "€42,25" : "€4.499,00"}
                </span>
                {active === 0 && (
                  <p className="text-xs text-[#7A7A7A] max-w-[525px] tracking-[0.3px]">
                    (Estimate based on a sustainability loan term of 120 months.
                    Subject to approval. After confirmation, you'll receive
                    financing details for a total amount of €4,499.00)
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-[#12151A] flex-shrink-0 mt-0.5" />
                <p className="text-[#12151A]" data-testid="text-savings">
                  Save €736 per year with Powerplay (that's €61.34 per month)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Sun className="w-5 h-5 text-[#12151A] flex-shrink-0 mt-0.5" />
                <p className="text-[#12151A]" data-testid="text-panels">
                  10 glass-glass 450 Wp solar panel
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#12151A] flex-shrink-0 mt-0.5" />
                <p className="text-[#12151A]" data-testid="text-ecosystem">
                  Integrated Voltera ecosystem with powerplay
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Home className="w-5 h-5 text-[#12151A] flex-shrink-0 mt-0.5" />
                <p className="text-[#12151A]" data-testid="text-installation">
                  All-inclusive installation
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#12151A] flex-shrink-0 mt-0.5" />
                <p className="text-[#12151A]" data-testid="text-warranty">
                  10-Year Voltera service plan
                </p>
              </div>
            </div>

            <Button
              variant="ghost"
              className="cursor-pointer flex items-center gap-1 text-sm font-medium text-[#16303D] hover:text-[#91CB50] px-2 py-1 underline underline-offset-4 mt-6"
              data-testid="link-more-info">
              More information
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="bg-[#FAFAFA] rounded-3xl p-6">
          <h3 className="text-base font-semibold text-[#12151A] mb-4 tracking-[1.5px]">
            TERMS & CONDITIONS
          </h3>
          <ul className="space-y-2.5 text-base text-[#12151A] mb-6  tracking-[0.3px]">
            <li className="flex items-start gap-2">
              <span className="text-[#12151A]">•</span>
              <span>100% payment after installation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#12151A]">•</span>
              <span>Installation within 8–12 weeks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#12151A]">•</span>
              <span>Fully installed in just 1 day</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#12151A]">•</span>
              <span>Customer satisfaction score: 9.4/10</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#12151A]">•</span>
              <span>1,136 happy customers in your area</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#12151A]">•</span>
              <span>Powerplay activation is free</span>
            </li>
          </ul>

          <div className="border-t border-[#E7E7E7] pt-4">
            <h4 className="text-base font-semibold text-[#12151A] mb-4 tracking-[1.5px]">
              0% VAT
            </h4>
            <p className=" text-base text-[#12151A]  tracking-[0.3px]">
              You pay no VAT on your solar panel installation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
