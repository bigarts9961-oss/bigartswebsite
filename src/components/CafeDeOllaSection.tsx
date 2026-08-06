import { OptimizedImage } from '@/components/OptimizedImage';
import cafeDeOllaAsset from '@/assets/cafe-de-olla-cup.png.asset.json';
import { Coffee } from 'lucide-react';

export function CafeDeOllaSection() {
  return (
    <section className="relative overflow-hidden bg-secondary text-primary-foreground">
      <div className="container-tight mx-auto">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Side */}
          <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[500px]">
            <OptimizedImage
              src={cafeDeOllaAsset.url}
              alt="Traditional Cafe de Olla"
              className="absolute inset-0"
              containerClassName="absolute inset-0"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent lg:bg-gradient-to-r" />
          </div>

          {/* Content Side */}
          <div className="flex items-center p-6 sm:p-8 lg:p-12 xl:p-16">
            <div>
              <div className="inline-flex items-center gap-2 text-accent mb-3 sm:mb-4">
                <Coffee className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-display uppercase tracking-wider text-xs sm:text-sm">
                  A Morning Ritual
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-2">
                CAFE DE OLLA
              </h2>
              <p className="font-script text-2xl sm:text-3xl text-accent mb-4 sm:mb-6">☕️</p>

              <p className="text-primary-foreground/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                Brewed the traditional way, in a clay pot with piloncillo (Mexican raw cane sugar) 
                and a stick of Ceylon cinnamon. This isn't just coffee. It's a warm, spiced embrace 
                that pairs perfectly with our breakfast burritos.
              </p>

              <p className="text-primary-foreground/60 leading-relaxed mb-6 sm:mb-8 font-script text-lg sm:text-xl italic">
                "Every cup tells a story of Mexican mornings and family kitchens."
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-4">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-5 py-2 sm:py-3">
                  <span className="text-accent font-display text-lg sm:text-2xl">100%</span>
                  <span className="block text-primary-foreground/60 text-[10px] sm:text-sm">Traditional Recipe</span>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-5 py-2 sm:py-3">
                  <span className="text-accent font-display text-lg sm:text-2xl">Fresh</span>
                  <span className="block text-primary-foreground/60 text-[10px] sm:text-sm">Brewed Daily</span>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-5 py-2 sm:py-3">
                  <span className="text-accent font-display text-lg sm:text-2xl">Clay Pot</span>
                  <span className="block text-primary-foreground/60 text-[10px] sm:text-sm">Authentic Method</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
