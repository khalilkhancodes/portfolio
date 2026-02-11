import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactProps {
  email?: string;
  phone?: string;
  location?: string;
}

export default function Contact({ 
  email = "khlilkhn911@gmail.com", 
  phone = "+92 329-7132915", 
  location = "Gujranwala, Pakistan" 
}: ContactProps) {
  
  const form = useRef<HTMLFormElement>(null); // Reference for EmailJS
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // PASTE YOUR ACTUAL KEYS HERE FROM 
    const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID || "YOUR_SERVICE_ID";   
    const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID || "YOUR_TEMPLATE_ID"; 
    const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY || "YOUR_PUBLIC_KEY";   

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, PUBLIC_KEY)
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setIsSubmitting(false);
        form.current?.reset(); // Clears the form
      }, (error) => {
        console.error(error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* Form Section */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                {/* name="from_name" matches your EmailJS template */}
                <Input name="from_name" placeholder="Your Name" required />
              </div>
              <div>
                {/* name="from_email" matches your EmailJS template */}
                <Input name="from_email" type="email" placeholder="your@email.com" required />
              </div>
              <div>
                {/* name="message" matches your EmailJS template */}
                <Textarea name="message" placeholder="Your Message" rows={6} required />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-4">
            <Card className="p-4 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">{email}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">{phone}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">{location}</p>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}