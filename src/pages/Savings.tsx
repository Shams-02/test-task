import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface SavingsProps {
  onNext: () => void;
  onPrevious: () => void;
}

const savingsData = [
  { time: "Morning", usage: 0.5, yield: 0.3 },
  { time: "", usage: 0.8, yield: 1.2 },
  { time: "Afternoon", usage: 1.5, yield: 3.8 },
  { time: "", usage: 2.2, yield: 2.8 },
  { time: "Evening", usage: 2.8, yield: 1.2 },
  { time: "", usage: 2.0, yield: 2.5 },
  { time: "Night", usage: 1.2, yield: 3.2 },
  { time: "", usage: 0.4, yield: 1.8 },
];

export default function Savings({ onNext, onPrevious }: SavingsProps) {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold text-foreground mb-8" data-testid="text-page-title">
          Savings analysis
        </h1>

        {/* Tabs */}
        <Tabs defaultValue="with-credits" className="mb-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 h-14 bg-muted/50 p-1">
            <TabsTrigger
              value="with-credits"
              className="text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm"
              data-testid="tab-with-credits"
            >
              With energy credits
            </TabsTrigger>
            <TabsTrigger
              value="without-credits"
              className="text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm"
              data-testid="tab-without-credits"
            >
              Without energy credits
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Savings Amount */}
        <div className="text-center mb-8">
          <div className="flex items-baseline justify-center gap-3 mb-3">
            <span className="text-6xl font-bold text-foreground" data-testid="text-savings-amount">
              €950
            </span>
            <span className="text-xl text-muted-foreground">per year</span>
          </div>
          <Button
            variant="ghost"
            className="inline-flex items-center gap-2 text-foreground font-medium underline decoration-2 underline-offset-4 px-3 py-1.5 h-auto"
            data-testid="link-how-savings-work"
          >
            How your savings work
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Chart */}
        <Card className="bg-card border-card-border rounded-2xl p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-8 text-sm font-medium text-foreground">
              <span>Morning</span>
              <span>Afternoon</span>
              <span>Evening</span>
              <span>Night</span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={savingsData}>
              <defs>
                <linearGradient id="colorUsageGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                tickLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="usage"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                fill="url(#colorUsageGreen)"
              />
              <Area
                type="monotone"
                dataKey="yield"
                stroke="hsl(var(--chart-3))"
                strokeWidth={3}
                fill="url(#colorYield)"
              />
            </AreaChart>
          </ResponsiveContainer>

          <div className="flex items-center justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Your current personal usage pattern</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-1 bg-chart-3 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Average daily yield</span>
            </div>
          </div>
        </Card>

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
