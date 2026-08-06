import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria G.',
    text: 'Best breakfast burrito in LA, hands down. Worth the early morning drive!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos R.',
    text: 'The Cafe de Olla is authentic. Reminds me of my abuela\'s kitchen.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jennifer L.',
    text: 'Finally found my go-to breakfast spot. The asada is perfectly seasoned.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Mike T.',
    text: 'I drive 45 minutes just for these burritos. No regrets, ever.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Sofia M.',
    text: 'Real deal Mexican breakfast. Big Art knows what he\'s doing!',
    rating: 5,
  },
  {
    id: 6,
    name: 'David K.',
    text: 'The chilaquiles burrito changed my life. Not exaggerating.',
    rating: 5,
  },
];

// Duplicate for seamless loop
const allTestimonials = [...testimonials, ...testimonials];

export const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-primary overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-center gap-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-background fill-background" />
            ))}
          </div>
          <span className="text-background/90 font-medium text-sm tracking-wide uppercase">
            What Our Customers Say
          </span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-background fill-background" />
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="relative">
        <div className="flex animate-marquee gap-6">
          {allTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[320px] md:w-[380px] bg-background/10 backdrop-blur-sm rounded-xl p-5 border border-background/20"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-background fill-background" />
                ))}
              </div>
              <p className="text-background font-medium text-sm md:text-base leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              <p className="text-background/70 text-sm font-medium">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
