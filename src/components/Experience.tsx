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
      className={`flex gap-8 items-start transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-8' : 'translate-x-8'}`
      }`}
    >
      <div className="hidden lg:block flex-1 text-right">
        {isEven && (
          <Card className="p-6 hover-elevate" data-testid={`experience-${index}`}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-primary font-semibold">{item.organization}</p>
              </div>
              <Badge variant="secondary">{item.type}</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
            <p className="text-sm mb-3">{item.description}</p>
            <ul className="space-y-1">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-muted-foreground">• {achievement}</li>
              ))}
            </ul>
          </Card>
        )}
      </div>

      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-border" />
        <div className="relative z-10 w-4 h-4 rounded-full bg-primary ring-4 ring-background animate-float" />
      </div>

      <div className="flex-1">
        <Card className="p-6 hover-elevate lg:hidden block" data-testid={`experience-${index}`}>
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-primary font-semibold">{item.organization}</p>
            </div>
            <Badge variant="secondary">{item.type}</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
          <p className="text-sm mb-3">{item.description}</p>
          <ul className="space-y-1">
            {item.achievements.map((achievement, i) => (
              <li key={i} className="text-sm text-muted-foreground">• {achievement}</li>
            ))}
          </ul>
        </Card>

        {!isEven && (
          <Card className="p-6 hover-elevate hidden lg:block" data-testid={`experience-${index}`}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-primary font-semibold">{item.organization}</p>
              </div>
              <Badge variant="secondary">{item.type}</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
            <p className="text-sm mb-3">{item.description}</p>
            <ul className="space-y-1">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-muted-foreground">• {achievement}</li>
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Experience & <span className="text-primary">Education</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          My journey through education and professional development
        </p>

        <div className="max-w-5xl mx-auto space-y-8">
          {items.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
