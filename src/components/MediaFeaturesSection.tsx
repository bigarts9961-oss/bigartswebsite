import { Play, Star } from 'lucide-react';
import eaterLaFeature from '@/assets/eater-la-feature.jpg';
import spotlightMax from '@/assets/spotlight-max.mp4';
import sfvEats from '@/assets/sfv-eats.mp4';

const mediaFeatures = [
  {
    id: 1,
    title: 'Eater LA',
    type: 'article' as const,
    image: eaterLaFeature,
    description: '"The lines form early at this Mission Hills pop-up... The steak burrito is the classic."',
  },
  {
    id: 2,
    title: 'Spotlight with Max',
    type: 'video' as const,
    video: spotlightMax,
    description: 'Featured interview with the team at Big Art\'s Tacos.',
  },
  {
    id: 3,
    title: 'San Fernando Valley Eats',
    type: 'video' as const,
    video: sfvEats,
    description: 'A local favorite featured by SFV Eats.',
  },
];

export const MediaFeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              As Seen On
            </span>
            <Star className="w-5 h-5 text-primary fill-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-foreground mb-4">
            Featured In
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Big Art's has been featured by some of LA's top food critics and local media outlets
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {mediaFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {feature.type === 'article' ? (
                  <img
                    src={feature.image}
                    alt={`${feature.title} feature`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <video
                    src={feature.video}
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                  />
                )}
                
                {/* Overlay for articles */}
                {feature.type === 'article' && (
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                )}
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2 mb-2">
                  {feature.type === 'video' && (
                    <Play className="w-4 h-4 text-primary" />
                  )}
                  <span className="text-xs font-medium tracking-wider uppercase text-primary">
                    {feature.type === 'video' ? 'Video Feature' : 'Article'}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-wide text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
