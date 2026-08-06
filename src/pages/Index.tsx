import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { SignaturePicksSection } from '@/components/SignaturePicksSection';
import { CafeDeOllaSection } from '@/components/CafeDeOllaSection';
import { StorySection } from '@/components/StorySection';
import { CateringSection } from '@/components/CateringSection';
import { LocationSection } from '@/components/LocationSection';
import { InstagramFeedSection } from '@/components/InstagramFeedSection';
import { MediaFeaturesSection } from '@/components/MediaFeaturesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Big Art's Tacos y Burros | Home of the Original Asada Breakfast | Chatsworth</title>
        <meta
          name="description"
          content="Big Art's Tacos y Burros - Legendary breakfast burritos and Cafe de Olla in Chatsworth, Mission Hills and Sylmar. Open early, 6:30am. Order now!"
        />
        <meta property="og:title" content="Big Art's Tacos y Burros | Best Breakfast Burritos in Chatsworth" />
        <meta property="og:description" content="Home of the Original Asada Breakfast + Cafe de Olla ☕️ Fresh breakfast burritos made with love since dawn." />
        <meta property="og:type" content="restaurant" />
        <link rel="canonical" href="https://bigartstacos.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Big Art's Tacos y Burros",
            "description": "Home of the Original Asada Breakfast + Cafe de Olla",
            "servesCuisine": ["Mexican", "Breakfast", "Tacos", "Burritos"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "15305 Devonshire St",
              "addressLocality": "Chatsworth",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "06:30",
                "closes": "14:30"
              }
            ],

            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <Header />
      
      <main className="pb-20 lg:pb-0">
        <HeroSection />
        <SignaturePicksSection />
        <CafeDeOllaSection />
        <TestimonialsSection />
        <MediaFeaturesSection />
        <StorySection />
        <CateringSection />
        <LocationSection />
        <InstagramFeedSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
