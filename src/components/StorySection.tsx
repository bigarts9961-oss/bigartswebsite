import { OptimizedImage } from '@/components/OptimizedImage';
import humbleBeginnings from '@/assets/humble-beginnings.png';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function StorySection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <OptimizedImage
              src={humbleBeginnings}
              alt="Big Art at the taco stand"
              aspectRatio="4/5"
              containerClassName="rounded-xl sm:rounded-2xl shadow-strong"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-display uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
              <span className="text-accent">✦</span> Our Story <span className="text-accent">✦</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2 mb-4 sm:mb-6">
              MEET BIG ART
            </h2>

            <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              <p>
                It started with a simple belief: that the best breakfast in town should come 
                from the heart of the community. Big Art's Tacos y Burros isn't just a food spot. 
                It's a love letter to authentic Mexican street food.
              </p>
              <p>
                Every morning before dawn, we fire up the grill to bring you the kind of breakfast 
                that makes you want to wake up. Our carne asada is marinated for hours, our tortillas 
                are made fresh, and our Cafe de Olla is brewed the way abuela taught us.
              </p>
              <p className="font-script text-lg sm:text-xl text-primary italic">
                "From Chatsworth with love. We're not just serving food. We're creating memories, 
                one breakfast burrito at a time."
              </p>
            </div>

            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full text-sm sm:text-base"
            >
              <Link to="/story">
                Read Our Full Story →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
