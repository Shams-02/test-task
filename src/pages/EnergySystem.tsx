import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowLeft, ArrowRight, ArrowUpRight, Activity, Bell, Battery } from "lucide-react";

interface EnergySystemProps {
  onNext: () => void;
  onPrevious: () => void;
}

export default function EnergySystem({ onNext, onPrevious }: EnergySystemProps) {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold text-foreground mb-10" data-testid="text-page-title">
          Smarter with Voltera ecosystem
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Phone Mockup */}
          <Card className="bg-gradient-to-br from-primary/80 to-primary rounded-3xl p-12 flex items-center justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-[280px] h-[560px] bg-black rounded-[48px] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[36px] overflow-hidden">
                  {/* Status Bar */}
                  <div className="px-6 pt-3 pb-2 flex justify-between items-center text-xs">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-3 border border-black/30 rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Content Mockup */}
                  <div className="px-4 pb-4">
                    <div className="mb-3">
                      <div className="text-xs text-gray-500 mb-1">Hinderdam 35, Giethoorn</div>
                      <div className="text-xl font-semibold mb-0.5">Good Morning Vins</div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">24°C</span>
                        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* Solar Panel Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-3 mb-3">
                      <img
                        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=200&fit=crop"
                        alt="Solar panels"
                        className="w-full h-24 object-cover rounded-lg mb-2"
                      />
                      <div className="flex gap-3 text-xs">
                        <div>
                          <div className="font-semibold">175 kWh</div>
                          <div className="text-gray-600">Today</div>
                        </div>
                        <div>
                          <div className="font-semibold">22 kWh</div>
                          <div className="text-gray-600">Now</div>
                        </div>
                        <div>
                          <div className="font-semibold">42 kWh</div>
                          <div className="text-gray-600">Peak</div>
                        </div>
                      </div>
                    </div>

                    {/* Energy Usage */}
                    <div className="bg-gray-50 rounded-2xl p-3">
                      <div className="text-sm font-semibold mb-2">Energy Usage</div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <Activity className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-600">Consumption</div>
                          <div className="text-sm font-semibold">90 kWh</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl"></div>
              </div>
            </div>
          </Card>

          {/* Features */}
          <div className="space-y-10">
            {/* All-in-one platform */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                All-in-one energy platform
              </h2>
              <p className="text-muted-foreground mb-6">
                With your Voltera system, you get access to the best energy features on the market,
                always included as standard:
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

            {/* Powerplay AI */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Voltera powerplay AI
              </h2>
              <p className="text-muted-foreground mb-6">
                Your inverter works hand in hand with Voltera Powerplay, ensuring automatic
                optimization for maximum efficiency.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="text-foreground">
                      <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.2" />
                      <circle cx="10" cy="10" r="4" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-foreground">Guaranteed no feed-in costs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="text-foreground">
                      <rect x="3" y="3" width="6" height="6" fill="currentColor" opacity="0.2" />
                      <rect x="11" y="3" width="6" height="6" fill="currentColor" opacity="0.2" />
                      <rect x="3" y="11" width="6" height="6" fill="currentColor" />
                      <rect x="11" y="11" width="6" height="6" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-foreground">Receive additional Powerplay rewards</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="text-foreground">
                      <rect x="2" y="8" width="16" height="4" fill="currentColor" opacity="0.2" />
                      <rect x="6" y="2" width="8" height="16" fill="currentColor" opacity="0.2" />
                      <circle cx="10" cy="10" r="3" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-foreground">Free activation after purchase</p>
                </div>
              </div>

              <Button
                variant="ghost"
                className="inline-flex items-center gap-2 text-foreground font-medium underline decoration-2 underline-offset-4 px-3 py-1.5 h-auto mt-6"
                data-testid="link-powerplay-info"
              >
                More information on Powerplay
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            size="lg"
            onClick={onPrevious}
            className="font-medium"
            data-testid="button-previous"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Previous
          </Button>
          <Button
            size="lg"
            onClick={onNext}
            className="bg-primary hover:bg-primary text-primary-foreground font-medium"
            data-testid="button-next"
          >
            Next
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
