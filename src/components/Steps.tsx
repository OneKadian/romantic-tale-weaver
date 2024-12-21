import { useEffect, useRef } from "react";

export const Steps = () => {
  const steps = [
    {
      number: 1,
      title: "Design Him",
      description: "Decide everything about him, from his looks, personality, to his line of work",
    },
    {
      number: 2,
      title: "Design Her",
      description: "Fill up everything about her, looks, personality, put your own name here 😉",
    },
    {
      number: 3,
      title: "Create Your Story",
      description: "Let us Generate your personalized story, make changes, add your own twists and continue the journey",
    },
  ];

  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepsRef.current.map((step, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in");
              entry.target.style.opacity = "1";
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (step) {
        observer.observe(step);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-16 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-[6.5rem] top-0 bottom-0 w-0.5 bg-primary/20">
          <div className="w-full bg-primary animate-[grow-height_2s_ease-out] origin-top" 
               style={{ height: '100%' }} />
        </div>

        <div className="grid gap-12 relative">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              ref={(el) => (stepsRef.current[index] = el)}
              className="flex items-start gap-4 md:gap-6 opacity-0 transition-all duration-700"
              style={{ 
                transitionDelay: `${index * 0.3}s`,
                transform: "translateY(20px)"
              }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl relative z-10">
                {step.number}
              </div>
              <div className="pt-2">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};