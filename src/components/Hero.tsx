import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail,FileUser } from 'lucide-react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
  backgroundImage?: string;
  onProjectsClick?: () => void;
  onContactClick?: () => void;
}

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export default function Hero({ name, title, subtitle, backgroundImage, onProjectsClick, onContactClick }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <div 
          className="absolute inset-0 hidden md:block lg:block"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            filter: 'grayscale(100%)',
            opacity: 0.4,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
        </div>
      )}

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                {name}
              </span>
            </h1>
          </div>

          <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-2">
              {title}
            </h2>
            <p className="text-xl md:text-1xl text-muted-foreground mb-8">
              {subtitle}
            </p>
          </div>

          <div className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
              className="backdrop-blur-sm"
              onClick={onContactClick}
              data-testid="button-contact"
            >
              Contact Me
            </Button>
          </div>

          <div className={`flex gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <LightTooltip title="GitHub" placement="bottom">
            <Button size="icon" variant="ghost" asChild data-testid="link-github">
              <a href="https://github.com/khalilkhancodes" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            </LightTooltip>
            <LightTooltip title="LinkedIn" placement="bottom">
            <Button size="icon" variant="ghost" asChild data-testid="link-linkedin">
              <a href="www.linkedin.com/in/khalil-khan-07314b359" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            </LightTooltip>
            <LightTooltip title="Email" placement="bottom">
            <Button size="icon" variant="ghost" asChild data-testid="link-email">
              <a href="mailto:khlilkhn911@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            </LightTooltip>
            <LightTooltip title="Download Resume" placement="bottom">
            <Button size="icon" variant="ghost" asChild data-testid="link-email">
              <a href="/public/Resume/Khalil_Khan_Resume.pdf" download="Resume_Khalil_Khan.pdf">
                <FileUser className="h-5 w-5" />
              </a>
            </Button>
            </LightTooltip>
          </div>
        </div>
      </div>
    </section>
  );
}
