import { Button } from "../components/ui/button";
import { ArrowUpRight, Activity, Bell, Battery } from "lucide-react";
import mobile from "../assets/images/mobile.png";

export default function EnergySystem() {
  return (
    <div className="p-6 bg-white rounded-3xl flex-1 h-full flex flex-col">
      <h1
        className="text-4xl font-medium tracking-[0.2px] text-center mb-[22px] text-[#12151A]"
        data-testid="text-page-title">
        Smarter with Voltera ecosystem
      </h1>

      <div className="grid lg:grid-cols-2 gap-4 flex-1">
        <div className="bg-[linear-gradient(0deg,#DBF681_0%,#91CB50_100%)] rounded-3xl flex items-center justify-center">
          <div className="relative">
            <div className="w-[280px] h-[560px] rounded-[48px]">
              <img
                src={mobile}
                alt="Solar panels"
                className="w-full h-full object-contain rounded-lg mb-2"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#FAFAFA] rounded-3xl p-6">
            <h2 className="text-2xl font-semibold text-[#12151A] mb-3 tracking-[0.2px] ">
              All-in-one energy platform
            </h2>
            <p className="text-[#12151A] font-light mb-6 max-w-[478px]">
              With your Voltera system, you get access to the best energy
              features on the market, always included as standard:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                <p className="text-foreground">
                  Live insights into both production and energy consumption
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                <p className="text-foreground">
                  Proactive notifications in case of malfunctions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Battery className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                <p className="text-foreground">
                  Works seamlessly with the Voltera home battery
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FAFAFA] rounded-3xl p-6">
            <h2 className="text-2xl font-semibold text-[#12151A] mb-3 tracking-[0.2px] mb-3">
              Voltera powerplay AI
            </h2>
            <p className="text-[#12151A] font-light mb-6 max-w-[478px]">
              Your inverter works hand in hand with Voltera Powerplay, ensuring
              automatic optimization for maximum efficiency.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-foreground">
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <circle cx="10" cy="10" r="4" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-foreground">Guaranteed no feed-in costs</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-foreground">
                    <rect
                      x="3"
                      y="3"
                      width="6"
                      height="6"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <rect
                      x="11"
                      y="3"
                      width="6"
                      height="6"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <rect
                      x="3"
                      y="11"
                      width="6"
                      height="6"
                      fill="currentColor"
                    />
                    <rect
                      x="11"
                      y="11"
                      width="6"
                      height="6"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="text-foreground">
                  Receive additional Powerplay rewards
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-foreground">
                    <rect
                      x="2"
                      y="8"
                      width="16"
                      height="4"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <rect
                      x="6"
                      y="2"
                      width="8"
                      height="16"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <circle cx="10" cy="10" r="3" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-foreground">
                  Free activation after purchase
                </p>
              </div>
            </div>

            <Button
              variant="ghost"
              className="cursor-pointer flex items-center gap-1 text-sm font-medium text-[#16303D] hover:text-[#91CB50] px-2 py-1 underline underline-offset-4 mt-5"
              data-testid="link-powerplay-info">
              More information on Powerplay
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
