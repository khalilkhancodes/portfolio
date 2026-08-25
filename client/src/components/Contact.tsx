import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactProps {
  email: string;
  phone: string;
  location: string;
}

export default function Contact({ email, phone, location }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Get In Touch
        </h2>
        <div className="w-12 h-px bg-white/20 mb-12" />

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  data-testid="input-message"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="space-y-4">
            <Card className="p-5 hover:border-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-white/40 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-white">Email</h3>
                  <p className="text-white/50 text-sm">{email}</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 hover:border-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-white/40 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-white">Phone</h3>
                  <p className="text-white/50 text-sm">{phone}</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 hover:border-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-white/40 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-white">Location</h3>
                  <p className="text-white/50 text-sm">{location}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
