import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterProps {
  year?: number;
  name: string;
}

export default function Footer({ year = new Date().getFullYear(), name }: FooterProps) {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-mono text-xl font-semibold mb-4 text-white">{'<khlilkhncodes/>'}</h3>
            <p className="text-white/40 text-sm">
              Fullstack developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a className="text-white/40 hover:text-white transition-colors text-sm" href="D:\Websites\Website Projects\Portflio Extraction\PersonTracker\attached_assets\Resume\Khalil_Khan_resume.pdf" download={'KhalilKhan_Resume'}>Resume</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Connect</h3>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" asChild data-testid="footer-github">
                <a href="https://github.com/khalilkhancodes" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild data-testid="footer-linkedin">
                <a href="www.linkedin.com/in/khalil-khan-07314b359" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild data-testid="footer-email">
                <a href="mailto:contact@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {year} {name}. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-white fill-white" /> and lots of code
          </p>
        </div>
      </div>
    </footer>
  );
}
