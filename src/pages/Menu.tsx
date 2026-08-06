import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';
import chorizoBurrito from '@/assets/chorizo-burrito.png';
import streetTacos from '@/assets/street-tacos.png';
import wrappedBurrito from '@/assets/wrapped-burrito.png';
import salsaBar from '@/assets/salsa-bar.png';
import breakfastBowl from '@/assets/breakfast-bowl.png';
import cafeDeOllaAsset from '@/assets/cafe-de-olla-cup.png.asset.json';
const cafeDeOlla = cafeDeOllaAsset.url;
import bigArtBurritos from '@/assets/big-art-burritos.png';

type MenuItem = {
  name: string;
  description: string;
  tags?: string[];
};

type MenuCategory = {
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  items: MenuItem[];
  accent: 'left' | 'right';
};

const menuCategories: MenuCategory[] = [
  {
    name: 'Breakfast Burritos',
    tagline: 'Rise & Shine',
    description: 'Our legendary morning wraps, made fresh before the sun is up.',
    heroImage: chorizoBurrito,
    accent: 'left',
    items: [
      {
        name: 'The Original Asada Breakfast Burrito',
        description: 'Tender carne asada, fluffy scrambled eggs, melted cheese, crispy breakfast potatoes, and our house salsa.',
        tags: ['Popular', 'Signature'],
      },
      {
        name: 'Chorizo & Egg Burrito',
        description: 'Savory Mexican chorizo with scrambled eggs, cheese, and pico de gallo.',
        tags: ['Spicy'],
      },
      {
        name: 'Bacon & Egg Burrito',
        description: 'Crispy bacon with fluffy eggs, cheese, and salsa roja.',
      },
      {
        name: 'Veggie Breakfast Burrito',
        description: 'Scrambled eggs with grilled peppers, onions, mushrooms, cheese, and fresh pico.',
        tags: ['Vegetarian'],
      },
      {
        name: 'Potato & Egg Burrito',
        description: 'Classic combo of crispy potatoes and scrambled eggs with melted cheese.',
      },
    ],
  },
  {
    name: 'Street Tacos',
    tagline: 'Authentic & Simple',
    description: 'Street-style tacos done right. Simple, flavorful, unforgettable.',
    heroImage: streetTacos,
    accent: 'right',
    items: [
      {
        name: 'Street Style Asada Tacos',
        description: 'Grilled carne asada topped with fresh cilantro, white onion, and a squeeze of lime.',
        tags: ['Popular'],
      },
      {
        name: 'Chorizo & Egg Taco',
        description: 'Breakfast taco with spicy chorizo and scrambled eggs, topped with cilantro.',
        tags: ['Breakfast', 'Spicy'],
      },
      {
        name: 'Al Pastor Taco',
        description: 'Marinated pork with pineapple, cilantro, and onion.',
      },
      {
        name: 'Carnitas Taco',
        description: 'Tender slow-cooked pork with salsa verde and onion.',
      },
      {
        name: 'Pollo Taco',
        description: 'Grilled chicken with guacamole, cilantro, and onion.',
      },
    ],
  },
  {
    name: 'Loaded Burritos',
    tagline: 'California Style',
    description: 'Fully loaded and wrapped to perfection.',
    heroImage: wrappedBurrito,
    accent: 'left',
    items: [
      {
        name: 'California Burro',
        description: 'Our famous California-style burrito loaded with rice, beans, carne asada, guacamole, sour cream, cheese, and fresh pico.',
        tags: ['Popular', 'Filling'],
      },
      {
        name: 'Bean & Cheese Burrito',
        description: 'Simple and satisfying. Refried beans with melted cheese and salsa.',
        tags: ['Vegetarian'],
      },
      {
        name: 'Pollo Burrito',
        description: 'Grilled chicken with rice, beans, cheese, lettuce, and sour cream.',
      },
      {
        name: 'Carnitas Burrito',
        description: 'Slow-cooked pork with rice, beans, guac, and all the fixings.',
      },
    ],
  },
  {
    name: 'Sides & Extras',
    tagline: 'Perfect Companions',
    description: 'The perfect companions to your main order.',
    heroImage: salsaBar,
    accent: 'right',
    items: [
      {
        name: 'Fresh Guacamole',
        description: 'Made in-house daily with ripe avocados, lime, cilantro, and a hint of jalapeño.',
        tags: ['Vegetarian', 'Fresh'],
      },
      {
        name: 'Chips & Salsa',
        description: 'Crispy tortilla chips with your choice of salsa roja or verde.',
        tags: ['Vegetarian'],
      },
      {
        name: 'Rice & Beans',
        description: 'Classic Mexican rice with refried beans topped with cheese.',
        tags: ['Vegetarian'],
      },
      {
        name: 'Breakfast Potatoes',
        description: 'Crispy seasoned potatoes, grilled to perfection.',
        tags: ['Vegetarian'],
      },
    ],
  },
  {
    name: 'Beverages',
    tagline: 'Refresh & Recharge',
    description: 'Traditional drinks to complete your meal.',
    heroImage: breakfastBowl,
    accent: 'left',
    items: [
      {
        name: 'Horchata',
        description: 'Traditional rice drink with cinnamon and a touch of vanilla. Sweet, creamy, and refreshing.',
        tags: ['Popular', 'Refreshing'],
      },
      {
        name: 'Agua Fresca',
        description: "Fresh fruit water. Ask about today's flavors (jamaica, tamarindo, or seasonal).",
        tags: ['Refreshing'],
      },
      {
        name: 'Mexican Coke',
        description: 'The real thing. Made with cane sugar in a glass bottle.',
      },
      {
        name: 'Jarritos',
        description: "Assorted flavors of Mexico's favorite soda.",
      },
    ],
  },
  {
    name: 'Coffee',
    tagline: 'Brewed with Love',
    description: 'Traditional Mexican coffee experience.',
    heroImage: cafeDeOlla,
    accent: 'right',
    items: [
      {
        name: 'Cafe de Olla',
        description: 'Our signature coffee, brewed in a clay pot with piloncillo and Ceylon cinnamon. A warm, spiced embrace in every cup.',
        tags: ['Signature', 'Traditional'],
      },
      {
        name: 'Regular Coffee',
        description: 'Fresh brewed coffee, hot and ready.',
      },
    ],
  },
];

// Hand-drawn decorative accents
const ChiliPepper = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 80" className={className} fill="none">
    <path 
      d="M20 5 Q25 2 28 8 Q30 15 28 25 Q25 40 20 55 Q15 70 18 75 Q12 72 10 60 Q8 45 12 30 Q15 15 20 5Z" 
      className="fill-primary/20 stroke-primary/40" 
      strokeWidth="1"
    />
    <path d="M20 2 Q22 0 24 3 Q23 6 20 5Z" className="fill-accent/30" />
  </svg>
);

const LimeSlice = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} fill="none">
    <circle cx="30" cy="30" r="25" className="stroke-accent/30" strokeWidth="2" />
    <circle cx="30" cy="30" r="20" className="stroke-accent/20" strokeWidth="1" />
    <path d="M30 10 L30 30 L45 20" className="stroke-accent/25" strokeWidth="1" />
    <path d="M30 30 L50 30" className="stroke-accent/25" strokeWidth="1" />
    <path d="M30 30 L45 45" className="stroke-accent/25" strokeWidth="1" />
    <path d="M30 30 L30 50" className="stroke-accent/25" strokeWidth="1" />
    <path d="M30 30 L15 45" className="stroke-accent/25" strokeWidth="1" />
    <path d="M30 30 L10 30" className="stroke-accent/25" strokeWidth="1" />
    <path d="M30 30 L15 15" className="stroke-accent/25" strokeWidth="1" />
  </svg>
);

const CilantroLeaf = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 60" className={className} fill="none">
    <path 
      d="M25 55 Q25 40 20 30 Q15 20 25 10 Q35 20 30 30 Q25 40 25 55Z" 
      className="stroke-accent/30 fill-accent/10" 
      strokeWidth="1"
    />
    <path d="M25 55 L25 10" className="stroke-accent/20" strokeWidth="0.5" />
  </svg>
);

const StarBurst = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none">
    <path 
      d="M20 5 L22 15 L32 12 L25 20 L35 25 L25 27 L28 37 L20 30 L12 37 L15 27 L5 25 L15 20 L8 12 L18 15 Z" 
      className="stroke-primary/25 fill-primary/5" 
      strokeWidth="1"
    />
  </svg>
);

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu | Big Art's Tacos y Burros | Chatsworth</title>
        <meta
          name="description"
          content="Browse our full menu of breakfast burritos, street tacos, California burritos, and authentic Cafe de Olla. Fresh every morning in Chatsworth."
        />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20 lg:pb-0 overflow-hidden bg-foreground">
        {/* Hero */}
        <section className="relative section-padding bg-foreground text-background overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={bigArtBurritos} 
              alt="Big Art's Burritos" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/80 to-foreground" />
          </div>
          
          {/* Decorative accents */}
          <ChiliPepper className="absolute top-10 left-[5%] w-8 h-16 opacity-60 rotate-12" />
          <LimeSlice className="absolute top-20 right-[8%] w-12 h-12 opacity-50" />
          <ChiliPepper className="absolute bottom-10 right-[15%] w-6 h-12 opacity-40 -rotate-20" />
          <StarBurst className="absolute bottom-20 left-[10%] w-10 h-10 opacity-40" />
          
          <div className="container-tight mx-auto text-center relative z-10">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Fresh Every Morning
            </span>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl mt-2 mb-4">
              OUR MENU
            </h1>
            <p className="text-background/70 max-w-2xl mx-auto text-lg">
              Everything is made fresh to order. Visit us or Order Online.
            </p>
            
            {/* Quick category links */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {menuCategories.map((cat) => (
                <a
                  key={cat.name}
                  href={`#${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 border border-background/30 rounded-full text-sm hover:bg-background/10 transition-colors"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Categories - Editorial Style */}
        {menuCategories.map((category, index) => (
          <section 
            key={category.name} 
            id={category.name.toLowerCase().replace(/\s+/g, '-')}
            className="relative"
          >
            <div className={`grid lg:grid-cols-2 min-h-[600px] ${category.accent === 'right' ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Side */}
              <div className={`relative h-80 lg:h-auto ${category.accent === 'right' ? 'lg:order-2' : ''}`}>
                <img 
                  src={category.heroImage} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:hidden" />
                
                {/* Floating tagline on image */}
                <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-10">
                  <span className="font-script text-3xl sm:text-4xl text-white/90 drop-shadow-lg">
                    {category.tagline}
                  </span>
                </div>
                
                {/* Decorative accents on image */}
                {index % 3 === 0 && <ChiliPepper className="absolute top-10 right-10 w-8 h-16 opacity-70" />}
                {index % 3 === 1 && <LimeSlice className="absolute top-8 left-8 w-14 h-14 opacity-60" />}
                {index % 3 === 2 && <CilantroLeaf className="absolute bottom-20 right-8 w-10 h-12 opacity-60" />}
              </div>
              
              {/* Content Side */}
              <div className={`relative bg-card p-8 lg:p-12 xl:p-16 flex flex-col justify-center ${category.accent === 'right' ? 'lg:order-1' : ''}`}>
                {/* Background accent */}
                <StarBurst className="absolute top-8 right-8 w-16 h-16 opacity-30" />
                
                <div className="relative z-10">
                  <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-3 text-foreground">
                    {category.name.toUpperCase()}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-md">
                    {category.description}
                  </p>
                  
                  {/* Menu Items */}
                  <div className="space-y-6">
                      {category.items.map((item) => (
                      <div 
                        key={item.name}
                        className="group border-b border-border/50 pb-5 last:border-0"
                      >
                        <div className="flex flex-wrap items-start gap-2 mb-1">
                          <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          {item.tags?.map((tag) => (
                            <Badge
                              key={tag}
                              variant={tag === 'Popular' || tag === 'Signature' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="relative section-padding bg-primary text-primary-foreground text-center overflow-hidden">
          {/* Decorative accents */}
          <ChiliPepper className="absolute top-10 left-[10%] w-10 h-20 opacity-30 rotate-12" />
          <LimeSlice className="absolute bottom-10 right-[10%] w-16 h-16 opacity-25" />
          <CilantroLeaf className="absolute top-20 right-[20%] w-8 h-10 opacity-25 rotate-45" />
          <StarBurst className="absolute bottom-16 left-[20%] w-12 h-12 opacity-20" />
          
          <div className="container-tight mx-auto relative z-10">
            <span className="font-script text-3xl text-accent/80 block mb-2">
              Hungry yet?
            </span>
            <h2 className="font-display text-4xl sm:text-5xl mb-4">
              READY TO ORDER?
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Visit us at 15305 Devonshire St, Chatsworth or DM us on Instagram
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://maps.google.com/?q=15305+Devonshire+Chatsworth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full border-2 border-primary-foreground/80 hover:bg-primary-foreground/10 transition-colors font-semibold text-lg"
              >
                Get Directions
              </a>
              <a
                href="https://www.instagram.com/bigartstacos/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors font-semibold text-lg"
              >
                DM on Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Menu;
