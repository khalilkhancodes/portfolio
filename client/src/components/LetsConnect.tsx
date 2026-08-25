import { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Rocket, Building2, Package, Users, Palette, Lightbulb } from 'lucide-react';

const collaborators = [
  { icon: Rocket, label: 'Startups' },
  { icon: Building2, label: 'Small businesses' },
  { icon: Package, label: 'Product teams' },
  { icon: Users, label: 'Digital agencies' },
  { icon: Palette, label: 'Designers looking for development partners' },
  { icon: Lightbulb, label: 'Founders building new products' },
];

function ConnectCard({ item, index }: { item: typeof collaborators[number]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const Icon = item.icon;

  return (
    <Card
      ref={cardRef}
      className={`p-5 transition-opacity duration-500 hover:border-white/20 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex items-center gap-4">
        <Icon className="h-5 w-5 text-white/40 shrink-0" />
        <p className="font-medium text-white/80">{item.label}</p>
      </div>
    </Card>
  );
}

export default function LetsConnect() {
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

  return (
    <section id="lets-connect" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Let's Connect
          </h2>
          <div className="w-12 h-px bg-white/20 mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {collaborators.map((item, index) => (
              <ConnectCard key={index} item={item} index={index} />
            ))}
          </div>

          <div className={`text-center transition-opacity duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg text-white/50">
              If you have an idea that needs to become a real product, feel free to reach out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
