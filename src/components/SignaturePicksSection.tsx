import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";
import chorizoBurrito from "@/assets/chorizo-burrito.png";
import originalAsada from "@/assets/original-asada.jpeg.asset.json";
import chorizoBreakfastBurrito from "@/assets/chorizo-new.jpg.asset.json";
import breakfastBowl from "@/assets/breakfast-bowl.png";
import baconBurritoAsset from "@/assets/bacon-burrito-new.jpg.asset.json";
import chilaquiles from "@/assets/chilaquiles-new.jpg.asset.json";
import frenchToast from "@/assets/french-toast.jpeg.asset.json";

const signatureItems = [
  {
    cloverName: "The OG",
    name: "Original Asada Breakfast Burrito",
    description: "Tender carne asada, fluffy eggs, melted cheese, crispy potatoes, and our house salsa.",
    image: originalAsada.url,
    tags: ["Popular", "Signature"],
  },
  {
    cloverName: "Big Bacon",
    name: "Bacon & Egg Breakfast Burrito",
    description: "Crispy bacon with scrambled eggs, cheese, potatoes, and pico de gallo.",
    image: baconBurritoAsset.url,
    tags: ["Breakfast", "Popular"],
  },
  {
    cloverName: "Big Chori",
    name: "Chorizo Breakfast Burrito",
    description:
      "Savory Mexican chorizo, fluffy scrambled eggs, crispy potatoes, melted cheese, and our house-made salsa.",
    image: chorizoBreakfastBurrito.url,
    tags: ["Breakfast", "Popular"],
  },
  {
    cloverName: "Chila Burro",
    name: "Traditional Chilaquiles Burrito",
    description:
      "Crispy tortilla chips tossed in our house-made red or green salsa, topped with queso fresco, crema, onions, and fresh cilantro.",
    image: chilaquiles.url,
    tags: ["Traditional", "Breakfast"],
  },
  {
    cloverName: "Big Toast",
    name: "Classic French Toast",
    description:
      "Thick-cut brioche bread dipped in a cinnamon-vanilla egg batter, grilled to golden perfection, and served with butter and warm maple syrup.",
    image: frenchToast.url,
    tags: ["Breakfast", "Popular"],
  },
  {
    cloverName: "Big Bowl",
    name: "Breakfast Burrito Bowl",
    description: "All the fixings in a bowl: chilaquiles, eggs, bacon, potatoes, and pico.",
    image: breakfastBowl,
    tags: ["Bowl", "Breakfast"],
  },
];


export function SignaturePicksSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-primary font-medium uppercase tracking-wider text-xs sm:text-sm">
            Fresh Every Morning
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 mb-3 sm:mb-4">
            SIGNATURE PICKS
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            The favorites our regulars keep coming back for. Made with love, served with fire.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {signatureItems.map((item, index) => (
            <div
              key={item.name}
              className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <OptimizedImage
                src={item.image}
                alt={item.name}
                aspectRatio="square"
                priority={index < 2}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-3 sm:p-4 lg:p-5">
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={tag === "Popular" || tag === "Signature" ? "default" : "secondary"}
                      className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-display text-base sm:text-lg lg:text-2xl mb-1 leading-tight tracking-wide">
                  {item.cloverName}
                </h3>
                <p className="text-foreground/80 text-[11px] sm:text-xs lg:text-sm font-medium mb-1 sm:mb-2 leading-snug line-clamp-2">
                  {item.name}
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed hidden sm:block line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://big-arts-tacos-los-angeles.cloveronline.com/menu/all"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all text-sm sm:text-base"
          >
            Explore More Menu Items
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
