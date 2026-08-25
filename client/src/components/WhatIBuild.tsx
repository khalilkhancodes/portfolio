import { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Globe, ShoppingCart, Store, Bot, BarChart3, Shield, Plug, Smartphone } from 'lucide-react';

const items = [
  { icon: Globe, label: 'Modern business websites and web applications' },
  { icon: ShoppingCart, label: 'Ecommerce experiences and product platforms' },
  { icon: Store, label: 'Marketplace platforms' },
  { icon: Bot, label: 'AI-powered applications and integrations' },
  { icon: BarChart3, label: 'Dashboards and data-driven interfaces' },
  { icon: Shield, label: 'Authentication and user systems' },
  { icon: Plug, label: 'API-driven applications' },
  { icon: Smartphone, label: 'Cross-platform mobile applications' },
];

function BuildCard({ item, index }: { item: typeof items[number]; index: number }) {
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
      className={`p-6 transition-opacity duration-500 hover:border-white/20 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex items-start gap-4">
        <Icon className="h-5 w-5 text-white/40 mt-0.5 shrink-0" />
        <p className="text-sm md:text-base leading-relaxed text-white/70">{item.label}</p>
      </div>
    </Card>
  );
}

export default function WhatIBuild() {
  return (
    <section id="whatibuild" className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What I Build
          </h2>
          <div className="w-12 h-px bg-white/20 mb-12" />

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {items.map((item, index) => (
              <BuildCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
