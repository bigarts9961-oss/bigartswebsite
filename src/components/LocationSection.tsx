import { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { locations } from '@/data/locations';

const getCurrentDay = () => new Date().getDay();

export function LocationSection() {
  const currentDay = getCurrentDay();
  const [activeId, setActiveId] = useState(locations[0].id);
  const active = locations.find((l) => l.id === activeId) ?? locations[0];

  return (
    <section id="location" className="section-padding bg-background">
      <div className="container-tight mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-primary font-medium uppercase tracking-wider text-xs sm:text-sm">
            Find Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2 mb-3 sm:mb-4">
            LOCATIONS & HOURS
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            3 locations across the San Fernando Valley. Get here early, when we sell out we close.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {locations.map((loc) => (
            <button
              key={loc.id}
              type="button"
              onClick={() => setActiveId(loc.id)}
              className={cn(
                'font-display text-lg sm:text-xl tracking-wide px-5 sm:px-8 py-2.5 rounded-full border transition-colors',
                loc.id === active.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-soft'
                  : 'bg-card text-foreground border-border hover:border-primary/40 hover:text-primary'
              )}
            >
              {loc.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Map */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-medium h-80 sm:h-[520px]">
            {active.embedUrl ? (
              <iframe
                key={active.id}
                src={active.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '250px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Big Art's Tacos ${active.name} location`}
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-sm">
                Map coming soon
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl sm:text-2xl mb-2">Address</h3>
                  {active.address ? (
                    <>
                      <address className="not-italic text-muted-foreground text-sm sm:text-base mb-4 leading-relaxed">
                        {active.address}
                      </address>
                      <Button variant="hero" size="sm" asChild className="text-xs sm:text-sm">
                        <a href={active.mapsQuery!} target="_blank" rel="noopener noreferrer">
                          <Navigation className="h-4 w-4" />
                          Get Directions
                        </a>
                      </Button>
                    </>
                  ) : (
                    <p className="text-muted-foreground/70 text-sm">{active.addressNote}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl sm:text-2xl mb-3">Hours</h3>
                  <div className="space-y-0.5">
                    {active.schedule.map((item) => {
                      const isToday = item.dayIndex === currentDay;
                      return (
                        <div
                          key={item.day}
                          className={cn(
                            'flex justify-between gap-3 py-2 px-3 -mx-1 rounded-lg text-sm',
                            isToday && 'bg-primary/10 border border-primary/20'
                          )}
                        >
                          <span className={cn('text-muted-foreground', isToday && 'text-primary font-medium')}>
                            {item.day}
                            {isToday && <span className="ml-2 text-xs">(Today)</span>}
                          </span>
                          <span
                            className={cn(
                              item.time === 'Closed' ? 'text-muted-foreground/50' : 'font-medium',
                              isToday && item.time !== 'Closed' && 'text-primary'
                            )}
                          >
                            {item.time}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl sm:rounded-2xl p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl sm:text-2xl mb-2">Contact</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    <a href="tel:+18182729961" className="hover:text-primary transition-colors">(818) 272-9961</a>
                    <br />
                    <a href="mailto:artrodriguez@bigartstacos.com" className="hover:text-primary transition-colors break-all">artrodriguez@bigartstacos.com</a>
                  </p>
                  <Button variant="outline" size="sm" asChild className="text-xs sm:text-sm">
                    <a href="https://www.instagram.com/bigartstacos/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                      DM on Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
