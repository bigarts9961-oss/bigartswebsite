import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import storyHero from '@/assets/story-hero.jpg';
import ownerPhoto from '@/assets/owner.jpg';

const Story = () => {
  return (
    <>
      <Helmet>
        <title>Our Story | Big Art's Tacos y Burros | Chatsworth</title>
        <meta
          name="description"
          content="Learn about Big Art's Tacos y Burros - the story behind the best breakfast burritos in Chatsworth. Authentic Mexican street food made with passion."
        />
        <meta property="og:title" content="Our Story | Big Art's Tacos y Burros" />
        <meta
          property="og:description"
          content="Learn about Big Art's Tacos y Burros - the story behind the best breakfast burritos in Chatsworth. Authentic Mexican street food made with passion."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bigartstacos.com/story" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/TwFfdXtj9KPaUtTHoCvbqEoYX6D3/social-images/social-1768502479604-bigarts-logo.png" />
        <meta property="og:site_name" content="Big Art's Tacos y Burros" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Story | Big Art's Tacos y Burros" />
        <meta
          name="twitter:description"
          content="Learn about Big Art's Tacos y Burros - the story behind the best breakfast burritos in Chatsworth. Authentic Mexican street food made with passion."
        />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/TwFfdXtj9KPaUtTHoCvbqEoYX6D3/social-images/social-1768502479604-bigarts-logo.png" />
        <link rel="canonical" href="https://bigartstacos.com/story" />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20 lg:pb-0 bg-foreground">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={storyHero}
              alt="Big Art's taco stand with customers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>

          <div className="relative z-10 container-tight mx-auto px-4 sm:px-6 text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Story
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-primary-foreground mt-2 mb-6">
              MORE THAN<br />
              JUST BURRITOS
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              It's about family, community, and the love that goes into every single order.
            </p>
          </div>
        </section>

        {/* Main Story */}
        <section className="section-padding bg-background">
          <div className="container-tight mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Polaroid Image */}
              <div className="lg:col-span-2 flex justify-center lg:justify-end">
                <div className="relative transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                  {/* Polaroid frame */}
                  <div className="bg-white p-3 pb-16 shadow-strong rounded-sm">
                    <div className="w-64 h-72 overflow-hidden">
                      <img
                        src={ownerPhoto}
                        alt="Big Art, Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Handwritten caption */}
                    <p className="absolute bottom-4 left-0 right-0 text-center font-script text-xl text-foreground/80">
                      Big Art, Founder
                    </p>
                  </div>
                  {/* Tape effect */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-primary/20 rotate-[-2deg]" />
                </div>
              </div>

              {/* Story Text */}
              <div className="lg:col-span-3 prose prose-lg text-muted-foreground">
                <p className="text-xl leading-relaxed">
                  Big Art's Tacos y Burros was born from a simple idea: that breakfast should be 
                  the best meal of the day, and that the best food comes from the heart.
                </p>

                <p>
                  Every morning, before the sun fully rises over Chatsworth, we're already at the grill. 
                  The carne asada is marinating, the tortillas are warming, and the Cafe de Olla is 
                  brewing in the same clay pot style that's been passed down for generations.
                </p>

                <p>
                  This isn't fast food. This is <strong>soul food</strong>. The kind of breakfast that 
                  makes you feel like you're at your tía's house on a Sunday morning. The kind that 
                  makes you close your eyes and savor every bite.
                </p>

                <p>
                  Our recipes come from tradition. From late nights watching abuela in the kitchen, 
                  from crowded markets in Mexico, from the simple belief that food should be made 
                  with quality ingredients and genuine care.
                </p>

                <p>
                  <strong>"Home of the Original Asada Breakfast"</strong> isn't just a tagline. It's our promise. 
                  Every breakfast burrito that leaves our kitchen carries the same passion and pride 
                  that went into the very first one we ever made.
                </p>

                <p>
                  We're not trying to reinvent Mexican food. We're just trying to make it the way 
                  it should be made: <em>with love, served with fire</em>.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Quote Section */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-tight mx-auto text-center max-w-3xl">
            <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl mb-6">
              "WE'RE NOT JUST MAKING BURRITOS.<br />
              WE'RE MAKING MEMORIES."
            </blockquote>
            <p className="text-background/60">- Big Art</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Story;