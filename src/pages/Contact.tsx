import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Phone, Instagram, Mail, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import contactHero from '@/assets/contact-hero.jpg';
import { locations } from '@/data/locations';
import { cn } from '@/lib/utils';

// EmailJS config — replace with your own IDs from emailjs.com
const EMAILJS_SERVICE_ID = 'service_3tsquk9';
const EMAILJS_TEMPLATE_ID = 'template_1w7izrd';
const EMAILJS_PUBLIC_KEY = 'T85h7Qe6keWFCoMza';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeLocationId, setActiveLocationId] = useState(locations[0].id);
  const activeLocation = locations.find(l => l.id === activeLocationId) ?? locations[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setIsSubmitted(true);
      formRef.current.reset();
      toast({
        title: 'Message Sent!',
        description: "We'll get back to you soon."
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Something went wrong',
        description: 'Please try again or reach us directly on Instagram.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <>
      <Helmet>
        <title>Contact | Big Art's Tacos y Burros | Chatsworth</title>
        <meta name="description" content="Contact Big Art's Tacos y Burros in Chatsworth. Find our address, hours, and get in touch for orders or catering inquiries." />
        <meta property="og:title" content="Contact | Big Art's Tacos y Burros" />
        <meta property="og:description" content="Contact Big Art's Tacos y Burros in Chatsworth. Find our address, hours, and get in touch for orders or catering inquiries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bigartstacos.com/contact" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/TwFfdXtj9KPaUtTHoCvbqEoYX6D3/social-images/social-1768502479604-bigarts-logo.png" />
        <meta property="og:site_name" content="Big Art's Tacos y Burros" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Big Art's Tacos y Burros" />
        <meta name="twitter:description" content="Contact Big Art's Tacos y Burros in Chatsworth. Find our address, hours, and get in touch for orders or catering inquiries." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/TwFfdXtj9KPaUtTHoCvbqEoYX6D3/social-images/social-1768502479604-bigarts-logo.png" />
        <link rel="canonical" href="https://bigartstacos.com/contact" />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20 lg:pb-0 bg-foreground">
        {/* Hero */}
        <section className="relative section-padding text-background overflow-hidden">
          <div className="absolute inset-0">
            <img src={contactHero} alt="Big Art's Tacos team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/90" />
          </div>

          <div className="relative z-10 container-tight mx-auto text-center py-8">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Get In Touch
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-2 mb-4">
              CONTACT US
            </h1>
            <p className="text-background/70 max-w-2xl mx-auto text-lg">Questions | Orders | Catering inquiries
We'd love to hear from you.</p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-tight mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                {/* Location Tabs */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {locations.map(loc => <button key={loc.id} type="button" onClick={() => setActiveLocationId(loc.id)} className={cn('font-display text-lg sm:text-xl tracking-wide px-5 sm:px-7 py-2.5 rounded-full border transition-colors', loc.id === activeLocation.id ? 'bg-primary text-primary-foreground border-primary shadow-soft' : 'bg-card text-foreground border-border hover:border-primary/40 hover:text-primary')}>
                      {loc.name}
                    </button>)}
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-medium h-64">
                  {activeLocation.embedUrl ? <iframe key={activeLocation.id} src={activeLocation.embedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Big Art's Tacos ${activeLocation.name} location`} /> : <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-sm">Map coming soon</div>}
                </div>

                {/* Active Location Details */}
                <div className="bg-card rounded-2xl p-6 shadow-soft">
                  <h3 className="font-display text-2xl mb-1">{activeLocation.name}</h3>
                  <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">{activeLocation.days}</p>

                  <div className="flex items-start gap-4 mb-5">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      {activeLocation.address ? <>
                          <address className="not-italic text-muted-foreground mb-4">
                            {activeLocation.address}
                          </address>
                          <Button variant="hero" size="sm" asChild>
                            <a href={activeLocation.mapsQuery!} target="_blank" rel="noopener noreferrer">
                              Get Directions
                            </a>
                          </Button>
                        </> : <p className="text-muted-foreground/70">{activeLocation.addressNote}</p>}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="space-y-1">
                        {activeLocation.schedule.map(item => <div key={item.day} className="flex justify-between py-1 border-b border-border/50 last:border-0">
                            <span className="text-muted-foreground">{item.day}</span>
                            <span className={item.time === 'Closed' ? 'text-muted-foreground/50' : 'font-medium'}>
                              {item.time}
                            </span>
                          </div>)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="bg-card rounded-2xl p-6 shadow-soft">
                  <h3 className="font-display text-xl mb-4">Connect With Us</h3>
                  <div className="space-y-3">
                    <a href="https://www.instagram.com/bigartstacos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-muted rounded-xl hover:bg-primary/10 transition-colors">
                      <Instagram className="h-5 w-5 text-primary" />
                      <span className="font-medium">@bigartstacos</span>
                    </a>

                    <a href="tel:+18182729961" className="flex items-center gap-3 p-3 bg-muted rounded-xl hover:bg-primary/10 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="font-medium">(818) 272-9961</span>
                    </a>

                    <a href="mailto:artrodriguez@bigartstacos.com" className="flex items-center gap-3 p-3 bg-muted rounded-xl hover:bg-primary/10 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="font-medium break-all">artrodriguez@bigartstacos.com</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-medium h-fit">
                <h2 className="font-display text-2xl sm:text-3xl mb-6">Send Us a Message</h2>

                {isSubmitted ? <div className="text-center py-12">
                    <div className="inline-flex p-4 bg-secondary/10 rounded-full mb-4">
                      <CheckCircle className="h-12 w-12 text-secondary" />
                    </div>
                    <h3 className="font-display text-2xl mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      We'll get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div> : <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input id="name" name="name" required placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" name="subject" required placeholder="What is this about?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" name="message" required placeholder="Tell us what's on your mind..." rows={5} />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      For faster response, DM us on Instagram @bigartstacos
                    </p>
                  </form>}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>;
};
export default Contact;