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
    <section id="about" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About
          </h2>
          <div className="w-12 h-px bg-white/20 mb-12" />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-lg leading-relaxed mb-8 text-white/70">
                {description}
              </p>

              <div className="space-y-4">
                {highlights.map((highlight, index) => {
                  const Icon = icons[index % icons.length];
                  return (
                    <div 
                      key={index} 
                      className="flex items-start gap-4"
                      data-testid={`highlight-${index}`}
                    >
                      <Icon className="h-5 w-5 text-white/40 mt-0.5 shrink-0" />
                      <p className="flex-1 text-white/70">{highlight}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <div className="flex gap-2 mb-6">
                  <div className="w-2.5 h-2.5 bg-white/20" />
                  <div className="w-2.5 h-2.5 bg-white/10" />
                  <div className="w-2.5 h-2.5 bg-white/5" />
                </div>
                <pre className="text-white/50 font-mono text-sm overflow-x-auto">
                  <code>{`const developer = {
  name: "Khalil Khan",
  role: "Full Stack Developer",
  learning: "New Frameworks",
  passion: "Building Functionality",
  goal: "Full-Stack Mastery"
};`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
