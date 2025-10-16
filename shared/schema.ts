import { z } from "zod";

// Consultation step progress tracking
export const consultationSteps = [
  { id: 1, label: "Introduction", path: "/" },
  { id: 2, label: "Your situation", path: "/situation" },
  { id: 3, label: "Solar panels", path: "/solar-panels" },
  { id: 4, label: "Savings", path: "/savings" },
  { id: 5, label: "Energy system", path: "/energy-system" },
  { id: 6, label: "Service plan", path: "/service-plan" },
  { id: 7, label: "Your offer", path: "/offer" },
] as const;

// User consultation data schema
export const consultationDataSchema = z.object({
  id: z.string().optional(),
  customerName: z.string(),
  currentStep: z.number().min(1).max(7),
  
  // Situation data
  electricityCostPerKwh: z.number().optional(),
  annualConsumption: z.number().optional(),
  address: z.string().optional(),
  
  // Solar panel system data
  annualProduction: z.number().optional(),
  co2Saved: z.number().optional(),
  numberOfPanels: z.number().optional(),
  systemCapacity: z.number().optional(),
  inverterType: z.string().optional(),
  
  // Usage pattern data (hourly consumption for chart)
  usagePattern: z.array(z.number()).optional(),
  productionPattern: z.array(z.number()).optional(),
});

export type ConsultationData = z.infer<typeof consultationDataSchema>;

export const insertConsultationSchema = consultationDataSchema.omit({ id: true });
export type InsertConsultation = z.infer<typeof insertConsultationSchema>;

// Energy usage data point for charts
export interface EnergyDataPoint {
  time: string;
  value: number;
}

// Chart data for visualization
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill?: boolean;
  }[];
}
