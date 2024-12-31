import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const planDetails = {
    monthly: {
      price: "$8",
      period: "month",
      image: "/lovable-uploads/13095a82-684e-4ea8-9543-786253cf3770.png",
      title: "Costs as much as this Caramel Latte here",
      intro: "Would you consume this once or have:",
      duration: "30 days",
      billing: "You will be billed once monthly",
      freeMonths: "",
    },
    annual: {
      price: "$6.6",
      period: "month",
      image: "/lovable-uploads/736a1ca1-1717-430d-adf0-cc8411a277af.png",
      title: "Costs as much as this Cafe mocha here",
      intro: "Would you consume this once or have:",
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
        <div className="flex items-center gap-3 bg-accent/30 rounded-full px-4 py-2">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-primary' : ''}`}>Monthly</span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="data-[state=checked]:bg-primary"
          />
          <span className={`text-sm font-medium ${isAnnual ? 'text-primary' : ''}`}>Annual</span>
        </div>

        {/* Pricing Card */}
        <Card className="w-full max-w-md border-2 border-primary">
          <CardHeader className="text-center">
            <p className="text-lg mb-2">
              {currentPlan.title}
            </p>
            <div className="flex justify-center">
              {/* Preload both images */}
              <link rel="preload" as="image" href={planDetails.monthly.image} />
              <link rel="preload" as="image" href={planDetails.annual.image} />
              <img
                src={currentPlan.image}
                alt={isAnnual ? "Cafe mocha" : "Caramel Latte"}
                className={`w-48 h-auto object-contain ${isAnnual ? 'animate-carousel-left' : 'animate-carousel-right'}`}
                loading="eager"
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
                {currentPlan.intro}
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