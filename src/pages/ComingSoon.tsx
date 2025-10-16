import { Button } from "../../components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

interface ComingSoonProps {
  stepNumber: number;
  stepName: string;
  onNext?: () => void;
  onPrevious: () => void;
}

export default function ComingSoon({ stepNumber, stepName, onNext, onPrevious }: ComingSoonProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 p-8">
      <div className="max-w-2xl w-full">
        <Card className="bg-card border-card-border rounded-2xl p-12 text-center shadow-lg">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
          </div>

          <h1 className="text-3xl font-semibold text-foreground mb-4" data-testid="text-step-title">
            Step {stepNumber}: {stepName}
          </h1>

          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            This step is currently being developed. Our team is working hard to bring you the complete
            solar consultation experience. Please check back soon!
          </p>

          <div className="flex gap-4 justify-center">
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
            {onNext && (
              <Button
                size="lg"
                onClick={onNext}
                className="bg-primary hover:bg-primary text-primary-foreground font-medium"
                data-testid="button-next"
              >
                Next
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
