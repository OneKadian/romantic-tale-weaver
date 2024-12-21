import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Create your own characters",
    description: "Name him, decide what he looks like, behaves like, decide what he does, for work and to her : )",
    comingSoon: false,
  },
  {
    title: "Write your own story",
    description: "From meet-cutes to happily-ever-afters, bring your romantic fantasies to life, decide the plot, the twists, the fantasies",
    comingSoon: false,
  },
  {
    title: "Visualize the scenes",
    description: "Bring him to life, create his images, dress him up the way you want, put him in scenarios",
    comingSoon: true,
  },
  {
    title: "Imagine yourself with him",
    description: "Upload your own picture, create an avatar and create the pictures where he gets to explore you",
    comingSoon: true,
  },
  {
    title: "Talk to him",
    description: "Wanna hear his deep manly voice as he confesses to you? Talk to all your characters, either over text or hear them",
    comingSoon: true,
  },
];

export const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="hidden md:flex"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <div className="w-full max-w-xl">
              <div className="flex justify-center mb-6">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full mx-1 ${
                      index === currentIndex ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                {features[currentIndex].comingSoon && (
                  <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-4">
                    Coming Soon
                  </span>
                )}
                <h3 className="text-xl font-bold mb-3">{features[currentIndex].title}</h3>
                <p className="text-foreground/70">{features[currentIndex].description}</p>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="hidden md:flex"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex justify-center gap-4 mt-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={prevSlide}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" onClick={nextSlide}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};