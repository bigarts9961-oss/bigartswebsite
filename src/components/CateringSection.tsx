import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Calendar, Utensils, PartyPopper } from 'lucide-react';
import { OptimizedImage } from '@/components/OptimizedImage';
import salsaBar from '@/assets/salsa-bar.png';

const cateringFeatures = [
  {
    icon: Users,
    title: 'Any Size Event',
    description: 'From intimate gatherings to large corporate events',
  },
  {
    icon: Calendar,
    title: 'Flexible Booking',
    description: 'Schedule ahead or last-minute, we got you',
  },
  {
    icon: Utensils,
    title: 'Full Service',
    description: 'Setup, serving, and cleanup available',
  },
  {
    icon: PartyPopper,
    title: 'Custom Menus',
    description: 'Tailored options for your specific needs',
  },
];

export function CateringSection() {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container-tight mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-primary font-medium uppercase tracking-wider text-xs sm:text-sm">
              Catering & Events
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2 mb-4 sm:mb-6">
              BRING THE FIRE<br />
              TO YOUR EVENT
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Whether it's a birthday bash, corporate breakfast, wedding brunch, or just a 
              reason to gather, we bring the full Big Art's experience to you. Our catering 
              team sets up the grill, the salsas, and all the good vibes.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {cateringFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg shrink-0">
                    <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-xs sm:text-sm">{feature.title}</h4>
                    <p className="text-muted-foreground text-[10px] sm:text-xs line-clamp-2">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="hero" size="lg" asChild className="text-sm sm:text-base">
                <Link to="/catering">Request Catering</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-sm sm:text-base">
                <a
                  href="https://www.instagram.com/bigartstacos/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DM Us on Instagram
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <OptimizedImage
              src={salsaBar}
              alt="Big Art's catering salsa bar setup"
              aspectRatio="4/3"
              containerClassName="rounded-xl sm:rounded-2xl shadow-strong"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
