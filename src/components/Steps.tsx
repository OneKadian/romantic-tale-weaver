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

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start gap-4 md:gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                {step.number}
              </div>
              <div>
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