import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-accent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-cursive mb-6">
          Ever read a story and thought, hmm, only if it has this, it would be so much better!
        </h2>
        <p className="text-lg mb-8 text-foreground/80">
          Been there? Well, do it now, write your stories with a few clicks, in your own way
        </p>
        <Button size="lg">Start Creating</Button>
      </div>
    </section>
  );
};