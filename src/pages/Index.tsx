import { Hero } from "@/components/Hero";
import { Steps } from "@/components/Steps";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Steps />
      <Features />
      <CTA />
    </div>
  );
};

export default Index;