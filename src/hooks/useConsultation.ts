import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { ConsultationData, InsertConsultation } from "../../shared/schema";

export function useConsultation() {
  const [consultationId, setConsultationId] = useState<string | null>(
    localStorage.getItem("consultationId")
  );

  // Fetch existing consultation
  const { data: consultation, isLoading } = useQuery<ConsultationData>({
    queryKey: ["/api/consultations", consultationId],
    enabled: !!consultationId,
  });


  // Update consultation mutation

  // Initialize consultation if it doesn't exist

  const updateStep = (step: number) => {
  };

  const updateData = (data: Partial<ConsultationData>) => {

  };

  return {
    consultation,
    updateStep,
    updateData,
  };
}
