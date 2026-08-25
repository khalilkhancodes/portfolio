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
    <div ref={cardRef} className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-sm font-medium text-white">{skill.name}</span>
        <span className="text-xs text-white/40 font-mono">{skill.level}%</span>
      </div>
      <div className="w-full bg-white/5 h-1">
        <div
          className="h-full bg-white transition-all duration-1000 ease-out"
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
      className={`p-6 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h3 className="text-lg font-bold mb-5 text-white">{category.title}</h3>
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Skills & Technologies
        </h2>
        <div className="w-12 h-px bg-white/20 mb-12" />

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <CategorySection key={category.title} category={category} categoryIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
