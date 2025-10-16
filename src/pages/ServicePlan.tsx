import { CheckCircle2, Wallet, Headphones, Home } from "lucide-react";
import solarPanelInstallation from "../assets/images/solarPanelInstallation.png"

export default function ServicePlan() {
  return (
    <div className="p-6 bg-white rounded-3xl flex-1">
      <h1 className="text-4xl font-semibold text-center mb-6" data-testid="text-page-title">
        #1 Solar provider in the Netherlands
      </h1>

      <div className="grid lg:grid-cols-2 gap-12">
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

        <div className="bg-card border-card-border rounded-2xl overflow-hidden">
          <img
            src={solarPanelInstallation}
            alt="Solar panel installation"
            className="w-full h-full object-cover min-h-[490px]"
            data-testid="img-installation"
          />
        </div>
      </div>
    </div>
  );
}
