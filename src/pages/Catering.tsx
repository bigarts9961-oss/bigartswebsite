import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Helmet } from 'react-helmet-async';
import { Users, Calendar, Utensils, PartyPopper, CheckCircle, Instagram, Phone, Mail } from 'lucide-react';
import salsaBar from '@/assets/salsa-bar.png';
import cateringPhoto from '@/assets/catering-photo.webp';
import { OptimizedImage } from '@/components/OptimizedImage';
import { useToast } from '@/hooks/use-toast';

const cateringFeatures = [{
  icon: Users,
  title: 'Any Size',
  description: 'From 10 to 500+ guests'
}, {
  icon: Calendar,
  title: 'Flexible',
  description: 'Book ahead or last-minute'
}, {
  icon: Utensils,
  title: 'Full Service',
  description: 'Setup & cleanup available'
}, {
  icon: PartyPopper,
  title: 'Custom Menus',
  description: 'Tailored to your event'
}];

const eventTypes = ['Birthday Party', 'Corporate Breakfast', 'Golf Event', 'Wedding/Brunch', 'Office Event', 'Community Gathering', 'Private Party', 'Other'];

type CateringPackage = {
  id: string;
  name: string;
  basePrice: string;
  perPerson: string;
  minGuests: number;
  features: string[];
  extras?: { name: string; price: string; note?: string }[];
};

const cateringPackages: CateringPackage[] = [
  {
    id: 'taco-catering',
    name: 'Taco Catering',
    basePrice: '$700',
    perPerson: '$14 per person (50+)',
    minGuests: 50,
    features: [
      'Minimum $700, up to 50 guests',
      'Service duration: 2 hours',
      'Meats: Asada (beef), Pollo (chicken), Pastor (pork)',
      'Sides: Rice & Beans, Quesadillas, Chips',
      'Salsas: Red (spicy), Green (mild), Avocado (mild)',
      'Toppings: Onions, Cilantro, Limes, Pico De Gallo',
      'Utensils: Plates, Forks, Napkins',
    ],
    extras: [
      { name: 'Large Guacamole Bowl', price: '$75' },
      { name: 'Aguas Frescas (5 gallons)', price: '$50 each', note: 'Horchata, Pineapple, Hibiscus' },
    ],
  },
  {
    id: 'breakfast-drop-off',
    name: 'Breakfast Burrito Drop-Off',
    basePrice: '$13',
    perPerson: 'per burrito',
    minGuests: 20,
    features: [
      'Minimum order: 20 burritos',
      'Available any time 4:00 AM to 10:00 AM',
      'Delivery fee included in the San Fernando Valley',
      'Every burrito: cheese, eggs, tater tots, choice of protein',
      'Proteins: Steak, Chorizo, Bacon, Veggie, Soyrizo',
      'Hot and mild salsa cups included',
    ],
  },
  {
    id: 'breakfast-on-site',
    name: 'Breakfast Burrito On-Site',
    basePrice: '$15',
    perPerson: 'per person',
    minGuests: 50,
    features: [
      'Minimum 50 guests',
      'Made fresh on site',
      'Every burrito: cheese, eggs, tater tots, choice of protein',
      'Proteins: Steak, Chorizo, Bacon, Veggie, Soyrizo',
      'Hot and mild salsa cups included',
    ],
  },
];



const Catering = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Request Received!',
      description: "We'll get back to you within 24 hours."
    });
  };

  return (
    <>
      <Helmet>
        <title>Catering | Big Art's Tacos y Burros | Chatsworth</title>
        <meta name="description" content="Cater your next event with Big Art's Tacos y Burros. Breakfast burritos, tacos, and Cafe de Olla for parties, corporate events, and gatherings in Chatsworth." />
        <meta property="og:title" content="Catering | Big Art's Tacos y Burros" />
        <meta property="og:description" content="Cater your next event with Big Art's Tacos y Burros. Breakfast burritos, tacos, and Cafe de Olla for parties, corporate events, and gatherings in Chatsworth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bigartstacos.com/catering" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/TwFfdXtj9KPaUtTHoCvbqEoYX6D3/social-images/social-1768502479604-bigarts-logo.png" />
        <meta property="og:site_name" content="Big Art's Tacos y Burros" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Catering | Big Art's Tacos y Burros" />
        <meta name="twitter:description" content="Cater your next event with Big Art's Tacos y Burros. Breakfast burritos, tacos, and Cafe de Olla for parties, corporate events, and gatherings in Chatsworth." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/TwFfdXtj9KPaUtTHoCvbqEoYX6D3/social-images/social-1768502479604-bigarts-logo.png" />
        <link rel="canonical" href="https://bigartstacos.com/catering" />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20 lg:pb-0 bg-foreground">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={salsaBar} alt="Catering salsa bar setup" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>

          <div className="relative z-10 container-tight mx-auto px-4 sm:px-6 text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Catering Services
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-primary-foreground mt-2 mb-6">
              BRING THE FIRE<br />
              TO YOUR EVENT
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              From office breakfasts to backyard parties, we bring the full Big Art's experience to you.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 border-primary-foreground border-0 bg-primary-foreground">
          <div className="container-tight mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {cateringFeatures.map(feature => (
                <div key={feature.title} className="text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-background">
          <div className="container-tight mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Info */}
              <div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-6">
                  LET'S PLAN YOUR EVENT
                </h2>

                <div className="space-y-4 text-muted-foreground mb-8">
                  <p>
                    Whether it's a corporate breakfast meeting, a birthday brunch, a wedding celebration, 
                    or just a good excuse to get together, we've got you covered.
                  </p>
                  <p>
                    Our catering includes everything you need: fresh-made breakfast burritos, 
                    street tacos, sides, salsas, and of course, our signature Cafe de Olla.
                  </p>
                  <p>
                    Fill out the form and we'll get back to you within 24 hours with a custom quote.
                  </p>
                </div>

                {/* Catering Photo */}
                <div className="mb-8">
                  <img
                    src={cateringPhoto}
                    alt="Guest serving themselves from Big Art's catering setup at an outdoor event"
                    loading="lazy"
                    className="w-full h-auto rounded-2xl shadow-medium"
                  />
                </div>

                {/* Contact Options */}
                <div className="bg-muted rounded-2xl p-4 sm:p-6 space-y-4">
                  <h3 className="font-display text-xl mb-4">Prefer to reach out directly?</h3>
                  
                  <div className="space-y-3">
                    <a href="https://www.instagram.com/bigartstacos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-background rounded-xl hover:shadow-soft transition-shadow">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Instagram className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium block">DM on Instagram</span>
                        <span className="text-muted-foreground text-sm">@bigartstacos</span>
                      </div>
                    </a>

                    <a href="tel:+18182729961" className="flex items-center gap-3 p-3 bg-background rounded-xl hover:shadow-soft transition-shadow">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium block">Call and Text</span>
                        <span className="text-muted-foreground text-sm">818-272-9961</span>
                      </div>
                    </a>

                    <a href="mailto:artrodriguez@bigartstacos.com" className="flex items-center gap-3 p-3 bg-background rounded-xl hover:shadow-soft transition-shadow">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium block">Email Us</span>
                        <span className="text-muted-foreground text-sm break-all">artrodriguez@bigartstacos.com</span>
                      </div>
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mt-8">
                  Travel fee applies for events outside of the San Fernando Valley.
                </p>
              </div>

              {/* Form */}
              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-medium">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex p-4 bg-secondary/10 rounded-full mb-4">
                      <CheckCircle className="h-12 w-12 text-secondary" />
                    </div>
                    <h3 className="font-display text-2xl mb-2">Request Received!</h3>
                    <p className="text-muted-foreground mb-6">
                      We'll get back to you within 24 hours with a custom quote.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input id="name" name="name" required placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Event Date *</Label>
                        <Input id="date" name="date" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="headcount">Estimated Headcount *</Label>
                        <Input id="headcount" name="headcount" type="number" required placeholder="50" min="1" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eventType">Type of Event *</Label>
                      <select id="eventType" name="eventType" required className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option value="">Select an event type</option>
                        {eventTypes.map(type => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Package Selection */}
                    <div className="space-y-3">
                      <Label>Select Package *</Label>
                      <div className="space-y-3">
                        {cateringPackages.map((pkg) => (
                          <label
                            key={pkg.id}
                            className="block cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="package"
                              value={pkg.id}
                              required
                              className="peer sr-only"
                            />
                            <div className="p-4 rounded-xl border-2 border-input bg-background peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <span className="font-display text-lg block">{pkg.name}</span>
                                  <span className="text-muted-foreground text-sm">Min. {pkg.minGuests} guests</span>
                                </div>
                                <div className="text-right">
                                  <span className="font-display text-xl text-primary">{pkg.basePrice}</span>
                                  <span className="text-muted-foreground text-xs block">{pkg.perPerson}</span>
                                </div>
                              </div>
                              <ul className="text-sm text-muted-foreground space-y-1 mt-3">
                                {pkg.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">•</span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              {pkg.extras && (
                                <div className="mt-4 pt-3 border-t border-input">
                                  <span className="font-display text-sm uppercase tracking-wider block mb-2">Extras</span>
                                  <ul className="text-sm text-muted-foreground space-y-1">
                                    {pkg.extras.map((extra) => (
                                      <li key={extra.name} className="flex justify-between items-start gap-3">
                                        <span>
                                          {extra.name}
                                          {extra.note && (
                                            <span className="block text-xs">{extra.note}</span>
                                          )}
                                        </span>
                                        <span className="text-primary font-medium shrink-0">{extra.price}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea id="notes" name="notes" placeholder="Tell us about your event, dietary requirements, or any special requests..." rows={4} />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Request Catering Quote'}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We typically respond within 24 hours. For urgent requests, DM us on Instagram.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Catering;