import { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  type: 'work' | 'education';
}

interface ExperienceProps {
  items: ExperienceItem[];
}

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const isEven = index % 2 === 0;

  return (
    <div 
      ref={cardRef}
      className={`flex gap-8 items-start transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="hidden lg:block flex-1 text-right">
        {isEven && (
          <Card className="p-6 hover:border-white/20 transition-colors" data-testid={`experience-${index}`}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-white/60 font-medium">{item.organization}</p>
              </div>
              <Badge variant="secondary">{item.type}</Badge>
            </div>
            <p className="text-sm text-white/40 mb-3 text-left">{item.period}</p>
            <p className="text-sm mb-3 text-white/70 text-left">{item.description}</p>
            <ul className="space-y-1 text-left">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-white/50">• {achievement}</li>
              ))}
            </ul>
          </Card>
        )}
      </div>

      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/10" />
        <div className="relative z-10 w-2.5 h-2.5 bg-white -translate-x-1/2 mt-2" />
      </div>

      <div className="flex-1">
        <Card className="p-6 hover:border-white/20 transition-colors lg:hidden block" data-testid={`experience-${index}`}>
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-white/60 font-medium">{item.organization}</p>
            </div>
            <Badge variant="secondary">{item.type}</Badge>
          </div>
          <p className="text-sm text-white/40 mb-3">{item.period}</p>
          <p className="text-sm mb-3 text-white/70">{item.description}</p>
          <ul className="space-y-1">
            {item.achievements.map((achievement, i) => (
              <li key={i} className="text-sm text-white/50">• {achievement}</li>
            ))}
          </ul>
        </Card>

        {!isEven && (
          <Card className="p-6 hover:border-white/20 transition-colors hidden lg:block" data-testid={`experience-${index}`}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-white/60 font-medium">{item.organization}</p>
              </div>
              <Badge variant="secondary">{item.type}</Badge>
            </div>
            <p className="text-sm text-white/40 mb-3">{item.period}</p>
            <p className="text-sm mb-3 text-white/70">{item.description}</p>
            <ul className="space-y-1">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-white/50">• {achievement}</li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </div>
  );
}

export default function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Experience & Education
        </h2>
        <div className="w-12 h-px bg-white/20 mb-12" />

        <div className="max-w-5xl mx-auto space-y-8">
          {items.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
