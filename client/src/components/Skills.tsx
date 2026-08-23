import { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface SkillsProps {
  categories: SkillCategory[];
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 80);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={cardRef} className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-chart-2 transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

function CategorySection({ category, categoryIndex }: { category: SkillCategory; categoryIndex: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), categoryIndex * 150);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [categoryIndex]);

  return (
    <Card
      ref={sectionRef}
      className={`p-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <h3 className="text-lg font-bold mb-5 text-primary">{category.title}</h3>
      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </Card>
  );
}

export default function Skills({ categories }: SkillsProps) {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Skills & <span className="text-primary">Technologies</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Proficient in building full-stack web applications using modern tools and best practices.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <CategorySection key={category.title} category={category} categoryIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
