import { Button } from "../components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const usageData = [
  { label: "Morning", usage: 20, yield: 22 },
  { label: "Afternoon", usage: 18, yield: 28 },
  { label: "Evening", usage: 30, yield: 20 },
  { label: "Night", usage: 35, yield: 25 },
];

export default function Savings() {
  const [active, setActive] = useState(0);
  return (
    <div className="p-6 bg-white rounded-3xl flex-1">
      <h1
        className="text-4xl font-medium tracking-[0.2px] text-center mb-[22px] text-[#12151A]"
        data-testid="text-page-title">
        Savings analysis
      </h1>

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

      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-3 mb-3">
          {active === 0 ? (
            <span
              className="text-6xl font-semibold text-[#12151A]"
              data-testid="text-savings-amount">
              €950
            </span>
          ) : (
            <span
              className="text-6xl font-semibold text-[#12151A]"
              data-testid="text-savings-amount">
              €1053
            </span>
          )}
          <span className="text-xl text-muted-foreground">per year</span>
        </div>
        <Button
          variant="ghost"
          className="cursor-pointer flex items-center justify-center w-fit mx-auto gap-1 text-sm font-medium text-[#16303D] hover:text-[#91CB50] px-2 py-1 underline underline-offset-4"
          data-testid="link-how-savings-work">
          How your savings work
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="rounded-2xl">
        <div className="flex justify-between text-sm font-normal text-[#12151A] mb-2">
          <span>Morning</span>
          <span>Afternoon</span>
          <span>Evening</span>
          <span>Night</span>
        </div>

        <ResponsiveContainer width="100%" height={340}>
          <AreaChart
            data={usageData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="yieldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFE70F" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#fff" stopOpacity={0.3} />
              </linearGradient>

              <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7FC241" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#fff" stopOpacity={0.3} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={true}
              tick={{ fontSize: 16, fontWeight: 400 }}
            />

            <Tooltip cursor={true} />

            <ReferenceLine x="Morning" stroke="#ccc" strokeDasharray="3 3" />
            <ReferenceLine x="Afternoon" stroke="#ccc" strokeDasharray="3 3" />
            <ReferenceLine x="Evening" stroke="#ccc" strokeDasharray="3 3" />
            <ReferenceLine x="Night" stroke="#ccc" strokeDasharray="3 3" />

            <Area
              type="monotone"
              dataKey="yield"
              stroke="#FFE70F"
              strokeWidth={3}
              fill="url(#yieldGradient)"
            />

            <Area
              type="monotone"
              dataKey="usage"
              stroke="#7FC241"
              strokeWidth={3}
              fill="url(#usageGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>

        <div className="flex items-center justify-center gap-8 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-12 h-2 bg-[#97CF55]"></div>
            <span className="text-sm text-muted-foreground">
              Your current personal usage pattern
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-2 bg-[#FFE70F]"></div>
            <span className="text-sm text-muted-foreground">
              Average daily yield
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
