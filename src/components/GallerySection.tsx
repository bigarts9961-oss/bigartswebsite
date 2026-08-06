import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/OptimizedImage';
import bigArtStand from '@/assets/big-art-stand.png';
import bigArtBurritos from '@/assets/big-art-burritos.png';
import baconBurrito from '@/assets/bacon-burrito.png';
import breakfastBowl from '@/assets/breakfast-bowl.png';
import quesadillasGrill from '@/assets/quesadillas-grill.png';
import chorizoBurrito from '@/assets/chorizo-burrito.png';
import wrappedBurrito from '@/assets/wrapped-burrito.png';
import burritoCrossSection from '@/assets/burrito-cross-section.png';
import streetTacos from '@/assets/street-tacos.png';

const galleryImages = [
  { src: bigArtStand, alt: 'Big Art at the taco stand holding burritos' },
  { src: bigArtBurritos, alt: 'Big Art smiling with fresh burritos' },
  { src: baconBurrito, alt: 'Loaded bacon and egg breakfast burrito' },
  { src: breakfastBowl, alt: 'Breakfast bowl with chilaquiles and eggs' },
  { src: quesadillasGrill, alt: 'Fresh quesadillas on the grill' },
  { src: chorizoBurrito, alt: 'Chorizo burrito with guacamole' },
  { src: wrappedBurrito, alt: 'Wrapped burrito ready to serve' },
  { src: burritoCrossSection, alt: 'Burrito cross-section showing the filling' },
  { src: streetTacos, alt: 'Street style asada tacos' },
];

export function GallerySection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-tight mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-accent font-display uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2">
            <span>✦</span> Gallery <span>✦</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2 mb-3 sm:mb-4 text-primary-foreground">
            "THEY LOVE US"
          </h2>
          <p className="text-primary-foreground/70 text-sm sm:text-base max-w-2xl mx-auto">
            A peek at what's waiting for you at Big Art's. Follow us for daily specials and behind-the-scenes action.
          </p>
        </div>

        {/* Gallery Grid - Simplified for mobile */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-3 md:gap-4">
          {galleryImages.slice(0, 9).map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg sm:rounded-xl ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                aspectRatio="square"
                priority={index < 4}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full text-sm sm:text-base"
          >
            <a
              href="https://www.instagram.com/bigartstacos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              Follow @bigartstacos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
