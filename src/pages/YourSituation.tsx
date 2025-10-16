import { ArrowRight, MapPin } from "lucide-react";
import {
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  ReferenceLine,
} from "recharts";
import house from "../assets/images/house.png";

const usageData = [
  { label: "Morning", value: 1 },
  { label: "Afternoon", value: 0.8 },
  { label: "Evening", value: 1.4 },
  { label: "Night", value: 1.8 },
];

export default function YourSituation() {
  return (
    <div className="p-6 bg-white rounded-3xl flex-1">
      <h1
        className="text-4xl font-medium tracking-[0.2px] text-center mb-[22px] text-[#12151A]"
        data-testid="text-page-title">
        Analysis of your current situation
      </h1>

      <div className="grid grid-cols-12 gap-4 mb-8 ">
        <div className="bg-[linear-gradient(0deg,#DBF681_0%,#91CB50_100%)] rounded-[24px] col-span-3 px-6 py-4 flex flex-col">
          <h2 className="2xl:text-2xl text-lg font-medium text-[#12151A] mb-7 tracking-[0.2px]">
            Your current <br />
            electricity costs:
          </h2>
          <div className="flex items-baseline gap-2 mb-3 flex-1">
            <span
              className="2xl:text-5xl text-3xl font-semibold text-[#12151A] tracking-[0.2px]"
              data-testid="text-annual-cost">
              €1053
            </span>
            <span className="font-light 2xl:text-xl text-lg text-[#12151A] tracking-[0.2px]">
              per year
            </span>
          </div>
          <p className="2xl:text-lg text-sm text-[#12151A] font-normal max-w-[247px]">
            Based on €0.26 per kWh × 4,000 kWh annually
          </p>
        </div>

        <div className="col-span-9">
          <div className="rounded-3xl overflow-hidden h-full relative">
            <img
              src={house}
              alt="Your property"
              className="w-full h-full object-fill min-h-[254px]"
              data-testid="img-house"
            />
            <div className="absolute bottom-2 left-1/2 tranform -translate-x-1/2 flex items-center justify-center gap-2 bg-black/[28%] w-[225px] h-[24px] rounded-full">
              <MapPin className="w-4 h-4 text-white" />
              <span
                className="text-base font-light text-white"
                data-testid="text-address">
                Hinderdam 35, Giethoorn
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Pattern Section */}
      <div className="flex justify-between items-center bg-[#FAFAFA] rounded-3xl py-5 px-8">
        <div>
          <h2 className="text-2xl font-medium text-[#12151A] mb-3.5 tracking-[0.2px]">
            Your usage pattern:
          </h2>
          <p className="text-lg text-[#12151A] mb-8 max-w-[428px] font-light">
            To provide the best solar panel advice and ensure an accurate
            savings calculation, we've mapped out your current energy usage
            pattern. The graph shows your typical consumption.
          </p>
          <button
            type="button"
            className="cursor-pointer flex items-center gap-2 text-base font-medium text-[#16303D] py-2 rounded-md transition-colors hover:text-[#91CB50]">
            Consumption pattern details
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="max-w-[650px] w-full">
          <div className="flex justify-between text-sm font-medium text-foreground mb-2">
            <span>Morning</span>
            <span>Afternoon</span>
            <span>Evening</span>
            <span>Night</span>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <AreaChart
              data={usageData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#DBF681" stopOpacity={0.9} />
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
              <ReferenceLine
                x="Afternoon"
                stroke="#ccc"
                strokeDasharray="3 3"
              />
              <ReferenceLine x="Evening" stroke="#ccc" strokeDasharray="3 3" />
              <ReferenceLine x="Night" stroke="#ccc" strokeDasharray="3 3" />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#91CB50"
                strokeWidth={3}
                fill="url(#usageGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>

          <div className="flex items-center gap-2 mt-2 justify-center">
            <div
              className="w-12 h-2"
              style={{ backgroundColor: "#91CB50" }}></div>
            <span className="text-sm text-muted-foreground">
              Your current personal usage pattern
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
