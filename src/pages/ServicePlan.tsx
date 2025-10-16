import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2, Wallet, Headphones, Home } from "lucide-react";

interface ServicePlanProps {
  onNext: () => void;
  onPrevious: () => void;
}

export default function ServicePlan({ onNext, onPrevious }: ServicePlanProps) {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold text-foreground mb-10" data-testid="text-page-title">
          #1 Solar provider in the Netherlands
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Features */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  10-Year Voltera service plan
                </h3>
                <p className="text-muted-foreground">
                  The best warranty on the market, covering both installation and call-out costs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0">
                <Wallet className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Pay 100% after installation
                </h3>
                <p className="text-muted-foreground">
                  You only pay once your solar system is perfectly installed and fully operational.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0">
                <Headphones className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Excellent customer support
                </h3>
                <p className="text-muted-foreground">
                  Our expert service team is directly available 6 days a week to assist you.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0">
                <Home className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  All-inclusive installation
                </h3>
                <p className="text-muted-foreground">
                  No hidden costs. You'll never pay more than what was agreed upfront. That's our
                  promise.
                </p>
              </div>
            </div>
          </div>

          {/* Installation Image */}
          <Card className="bg-card border-card-border rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop"
              alt="Solar panel installation"
              className="w-full h-full object-cover min-h-[500px]"
              data-testid="img-installation"
            />
          </Card>
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
