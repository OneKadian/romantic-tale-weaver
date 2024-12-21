import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-accent to-white">
      <h1 className="text-4xl md:text-6xl font-cursive text-center mb-6 text-foreground animate-fade-in">
        Your Romance, Your Way
      </h1>
      <p className="text-lg md:text-xl text-center mb-8 max-w-2xl text-foreground/80 animate-fade-in">
        Craft the perfect love story, uniquely inspired by your own ideas.
      </p>
      <Button size="lg" className="animate-fade-in">
        Start Creating for Free
      </Button>
    </section>
  );
};