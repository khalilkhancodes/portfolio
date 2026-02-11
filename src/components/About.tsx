import { useEffect, useState, useRef } from 'react';
import { Code2, Rocket, Brain } from 'lucide-react';

interface AboutProps {
  description: string;
  highlights: string[];
}

export default function About({ description, highlights }: AboutProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const icons = [Code2, Rocket, Brain];

  return (
    <section id="about" className="py-16 md:py-24 bg-card/30" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Passionate Full-Stack Developer based in Pakistan, building web applications that solve real-world problems.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} w-[90vw] md:w-full`}>
              <p className="text-lg leading-relaxed mb-6">
                {description}
              </p>
              <div className="space-y-4">
                {highlights.map((highlight, index) => {
                  const Icon = icons[index % icons.length];
                  return (
                    <div 
                      key={index} 
                      className={`flex items-start gap-3 transition-all duration-500 delay-${index * 100}`}
                      data-testid={`highlight-${index}`}
                    >
                      <div className="mt-1 p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="flex-1">{highlight}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-chart-2/20 rounded-lg blur-xl" />
                <div className="relative bg-card border border-border rounded-lg font-mono text-sm p-8">
                  <div className="flex gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-chart-4" />
                    <div className="w-3 h-3 rounded-full bg-chart-2" />
                  </div>
                  <pre className="text-muted-foreground text-wrap break-words">
                    <code>{`const developer = {
  name: "Khalil Khan",
  role: "Fullstack Developer",
  learning: "New frameworks",
  passion: "Bringing ideas -> reality",
  goal: "Keep improving with every build"
};`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
