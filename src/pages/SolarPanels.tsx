import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Leaf, Sun, Zap, ArrowUpRight, Plus, Minus } from "lucide-react";
import { XAxis, Tooltip, ResponsiveContainer, AreaChart, ReferenceLine, Area } from "recharts";
import mainHouse from "../assets/images/main-house.png";

const usageData = [
  { label: "Morning", value: 1 },
  { label: "Afternoon", value: 0.8 },
  { label: "Evening", value: 1.4 },
  { label: "Night", value: 1.8 },
];

export default function SolarPanels() {
  return (
    <div className="p-6 bg-white rounded-3xl">
      <h1 className="text-4xl font-semibold text-center mb-6" data-testid="text-page-title">
        Optimal solar panel system
      </h1>
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-col bg-[#FAFAFA] rounded-3xl p-6">
          <div className="">
            <h2 className="text-2xl font-medium text-[#12151A] mb-2">
              Ultra-performance solar panel system:
            </h2>

            <div className="mb-4">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-bold text-primary" data-testid="text-annual-production">
                  3,397 kWh
                </span>
                <span className="text-lg text-muted-foreground">annual production</span>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-[#02A81E] font-semibold text-lg">
                  280 kg CO₂ saved per year
                </span>
                <button type="button" className="cursor-pointer flex items-center gap-1 text-sm font-medium text-foreground hover-elevate px-2 py-1 rounded-md" data-testid="link-product-details">
                  All product details
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Sun className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-lg font-medium text-[#12151A]" data-testid="text-panel-specs">
                    10 solar panels (450 wp glass-glass, total 4,500 wp)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-chart-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-lg font-medium text-[#12151A]" data-testid="text-inverter-specs">
                    3 evo micro inverters
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <button className="flex items-center gap-2 text-sm font-medium text-[#12151A] px-2 py-1.5 rounded-md mb-4" data-testid="link-consumption-pattern">
              Consumption pattern details
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex justify-between text-sm font-medium text-[#12151A] mb-2">
              <span>Morning</span>
              <span>Afternoon</span>
              <span>Evening</span>
              <span>Night</span>
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <AreaChart
                data={usageData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFE70F" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#fff" stopOpacity={0.3} />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="label"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 16, fontWeight: 600 }}
                />
                <Tooltip contentStyle={{ display: "none" }} cursor={false} />

                <ReferenceLine x="Morning" stroke="#ccc" strokeDasharray="3 3" />
                <ReferenceLine x="Afternoon" stroke="#ccc" strokeDasharray="3 3" />
                <ReferenceLine x="Evening" stroke="#ccc" strokeDasharray="3 3" />
                <ReferenceLine x="Night" stroke="#ccc" strokeDasharray="3 3" />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#FFE70F"
                  strokeWidth={3}
                  fill="url(#usageGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>

            <div className="flex items-center gap-2 mt-2 justify-center">
              <div className="w-12 h-2" style={{ backgroundColor: "#FFE70F" }}></div>
              <span className="text-sm text-muted-foreground">
                Average daily yield for Hinderdam 35
              </span>
            </div>
          </div>
        </div>

        <div className="bg-card border-card-border rounded-2xl overflow-hidden relative">
          <img
            src={mainHouse}
            alt="Your property with solar panels"
            className="w-full h-full object-cover min-h-[500px]"
            data-testid="img-house-solar"
          />

          <div className="absolute bottom-6 right-6 flex flex-col gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="bg-background/95 backdrop-blur-sm hover:bg-background shadow-lg"
              data-testid="button-zoom-in"
            >
              <Plus className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="bg-background/95 backdrop-blur-sm hover:bg-background shadow-lg"
              data-testid="button-zoom-out"
            >
              <Minus className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
