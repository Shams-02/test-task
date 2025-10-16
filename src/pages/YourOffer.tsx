import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ArrowLeft, ArrowUpRight, Sun, Target, CreditCard, Home, Shield } from "lucide-react";
import { useState } from "react";

interface YourOfferProps {
  onPrevious: () => void;
}

export default function YourOffer({ onPrevious }: YourOfferProps) {
  const [financing, setFinancing] = useState(true);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold text-foreground mb-8" data-testid="text-page-title">
          Confirm your offer
        </h1>

        {/* Tabs */}
        <Tabs
          value={financing ? "with-financing" : "without-financing"}
          onValueChange={(v) => setFinancing(v === "with-financing")}
          className="mb-8"
        >
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-2 h-14 bg-muted/50 p-1">
            <TabsTrigger
              value="with-financing"
              className="text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm"
              data-testid="tab-with-financing"
            >
              With financing
            </TabsTrigger>
            <TabsTrigger
              value="without-financing"
              className="text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm"
              data-testid="tab-without-financing"
            >
              Without financing
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Offer Card */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-card-border rounded-2xl p-8">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/20 mb-6 px-3 py-1">
                Offer valid for next 7 days
              </Badge>

              <h2 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-system-name">
                Ultra Performance 4500 Wp Solar Panel System
              </h2>

              <div className="mb-6">
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  TOTAL INVESTMENT
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-foreground" data-testid="text-price">
                    {financing ? "€42,25" : "€4.499,00"}
                  </span>
                </div>
                {financing && (
                  <p className="text-sm text-muted-foreground">
                    (Estimate based on a sustainability loan term of 120 months. Subject to approval. After
                    confirmation, you'll receive financing details for a total amount of €4,499.00)
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="space-y-4 border-t border-border pt-6">
                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-foreground" data-testid="text-savings">
                    Save €736 per year with Powerplay (that's €61.34 per month)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-foreground" data-testid="text-panels">
                    10 glass-glass 450 Wp solar panel
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-foreground" data-testid="text-ecosystem">
                    Integrated Voltera ecosystem with powerplay
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Home className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-foreground" data-testid="text-installation">
                    All-inclusive installation
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-foreground" data-testid="text-warranty">
                    10-Year Voltera service plan
                  </p>
                </div>
              </div>

              <Button
                variant="ghost"
                className="inline-flex items-center gap-2 text-foreground font-medium underline decoration-2 underline-offset-4 px-3 py-1.5 h-auto mt-6"
                data-testid="link-more-info"
              >
                More information
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Card>
          </div>

          {/* Terms & Conditions */}
          <Card className="bg-card border-card-border rounded-2xl p-6 h-fit">
            <h3 className="text-sm font-bold text-foreground mb-4 tracking-wide">
              TERMS & CONDITIONS
            </h3>
            <ul className="space-y-2.5 text-sm text-foreground mb-6">
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>100% payment after installation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>Installation within 8–12 weeks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>Fully installed in just 1 day</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>Customer satisfaction score: 9.4/10</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>1,136 happy customers in your area</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>Powerplay activation is free</span>
              </li>
            </ul>

            <div className="border-t border-border pt-4">
              <h4 className="text-sm font-bold text-foreground mb-2">0% VAT</h4>
              <p className="text-sm text-muted-foreground">
                You pay no VAT on your solar panel installation.
              </p>
            </div>
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
            className="bg-primary hover:bg-primary text-primary-foreground font-medium px-8"
            data-testid="button-confirm-offer"
          >
            Confirm offer
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
