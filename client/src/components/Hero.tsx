import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
  backgroundImage?: string;
  onProjectsClick?: () => void;
  onContactClick?: () => void;
}

export default function Hero({ name, title, subtitle, backgroundImage, onProjectsClick, onContactClick }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {backgroundImage && (
        <div 
          className="absolute inset-0 hidden md:block lg:block"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            filter: 'grayscale(100%)',
            opacity: 0.15,
          }}
        />
      )}

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-white">
              {name}
            </h1>
          </div>

          <div className={`transition-opacity duration-700 delay-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-2">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-neutral-500 mb-8">
              {subtitle}
            </p>
          </div>

          <div className={`flex flex-wrap gap-4 mb-8 transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Button 
              size="lg" 
              onClick={onProjectsClick}
              data-testid="button-view-projects"
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={onContactClick}
              data-testid="button-contact"
            >
              Contact Me
            </Button>
          </div>

          <div className={`flex gap-4 transition-opacity duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Button size="icon" variant="ghost" asChild data-testid="link-github">
              <a href="https://github.com/khalilkhancodes" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild data-testid="link-linkedin">
              <a href="www.linkedin.com/in/khalil-khan-07314b359" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild data-testid="link-email">
              <a href="mailto:khlilkhn911@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
