import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function ScrollNavigation() {
  const [showButtons, setShowButtons] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setShowButtons(scrolled);
      setAtBottom(bottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-40 flex flex-col gap-2 transition-all duration-300 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <Button
        size="icon"
        className="rounded-full w-12 h-12 shadow-lg"
        onClick={scrollToTop}
        data-testid="button-scroll-up"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
      {!atBottom && (
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full w-12 h-12 shadow-lg"
          onClick={scrollToBottom}
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
