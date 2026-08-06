import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/OptimizedImage';
import bigArtStand from '@/assets/big-art-stand.png';
import bigArtBurritos from '@/assets/big-art-burritos.png';
import baconBurrito from '@/assets/bacon-burrito.png';
import quesadillasGrill from '@/assets/quesadillas-grill.png';
import streetTacos from '@/assets/street-tacos.png';
import salsaBar from '@/assets/salsa-bar.png';

const instaPosts = [
  { src: bigArtStand, alt: 'Big Art at the taco stand' },
  { src: bigArtBurritos, alt: 'Big Art with fresh burritos' },
  { src: baconBurrito, alt: 'Loaded breakfast burrito' },
  { src: quesadillasGrill, alt: 'Quesadillas on the grill' },
  { src: streetTacos, alt: 'Street style tacos' },
  { src: salsaBar, alt: 'Fresh salsa bar setup' },
];

export function InstagramFeedSection() {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container-tight mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <a 
            href="https://www.instagram.com/bigartstacos/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 group"
          >
            <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg sm:rounded-xl text-white">
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="text-left">
              <span className="font-display text-xl sm:text-2xl md:text-3xl block group-hover:text-primary transition-colors">
                @BIGARTSTACOS
              </span>
              <span className="text-muted-foreground text-xs sm:text-sm">Follow us on Instagram</span>
            </div>
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2 md:gap-3">
          {instaPosts.map((post, index) => (
            <a
              key={index}
              href="https://www.instagram.com/bigartstacos/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-md sm:rounded-lg"
            >
              <OptimizedImage
                src={post.src}
                alt={post.alt}
                aspectRatio="square"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="h-6 w-6 sm:h-8 sm:w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-6 sm:mt-8">
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm sm:text-base"
          >
            <a
              href="https://www.instagram.com/bigartstacos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              See More on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
