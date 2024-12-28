import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const planDetails = {
    monthly: {
      price: "$8",
      period: "month",
      image: "/lovable-uploads/7029aca8-1e67-4390-b204-542873a78668.png",
      calories: "600",
      duration: "30 days",
      billing: "You will be billed once monthly",
      freeMonths: "",
    },
    annual: {
      price: "$6.6",
      period: "month",
      image: "/lovable-uploads/97981640-8f81-4e8f-b71f-1d9cb719e964.png",
      calories: "410",
      duration: "365 days",
      billing: "You will be billed once annually",
      freeMonths: "2 MONTHS FREE! 🎊",
    },
  };

  const currentPlan = isAnnual ? planDetails.annual : planDetails.monthly;

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="flex flex-col items-center gap-8">
        {/* Toggle */}
        <ToggleGroup
          type="single"
          value={isAnnual ? "annual" : "monthly"}
          onValueChange={(value) => setIsAnnual(value === "annual")}
          className="bg-accent rounded-full p-1.5"
        >
          <ToggleGroupItem
            value="monthly"
            className="rounded-full px-6 py-2 data-[state=on]:bg-white data-[state=on]:shadow-sm"
          >
            Monthly
          </ToggleGroupItem>
          <ToggleGroupItem
            value="annual"
            className="rounded-full px-6 py-2 data-[state=on]:bg-white data-[state=on]:shadow-sm"
          >
            Annual <span className="text-primary ml-1">(2 months free)</span>
          </ToggleGroupItem>
        </ToggleGroup>

        {/* Pricing Card */}
        <Card className="w-full max-w-md border-2 border-primary">
          <CardHeader className="text-center">
            <p className="text-lg mb-2">
              Costs as much as this {isAnnual ? "hotdog" : "burger"} here
            </p>
            <div className="flex justify-center">
              <img
                src={currentPlan.image}
                alt={isAnnual ? "Hotdog" : "Burger"}
                className="w-48 h-auto object-contain"
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold text-primary">
                  {currentPlan.price}
                </span>
                <span className="text-xl">/{currentPlan.period}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{currentPlan.billing}</p>
              {currentPlan.freeMonths && (
                <p className="text-lg font-bold text-primary mt-2 animate-bounce">
                  {currentPlan.freeMonths}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <p>
                You decide 🔊, {currentPlan.calories} calories once or
              </p>
              <ul className="space-y-2">
                <li>- Unlimited stories for the whole {isAnnual ? "year" : "month"}?</li>
                <li>- The drama never stops!</li>
                <li>- Create pictures, listen his voice</li>
                <li>- Share and read nonstop for {currentPlan.duration}!</li>
              </ul>
            </div>

            <Button className="w-full">Get Started</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;