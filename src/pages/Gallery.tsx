import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GallerySection } from '@/components/GallerySection';

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Big Art's Tacos y Burros | Chatsworth</title>
        <meta
          name="description"
          content="A peek at what's waiting for you at Big Art's in Chatsworth. Breakfast burritos, tacos, and behind-the-scenes moments from the stand."
        />
        <meta property="og:title" content="Gallery | Big Art's Tacos y Burros" />
        <meta
          property="og:description"
          content="A peek at what's waiting for you at Big Art's in Chatsworth. Breakfast burritos, tacos, and behind-the-scenes moments."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://bigarts.techsentia.com/gallery" />
      </Helmet>

      <Header />

      <main className="pb-20 lg:pb-0 bg-primary">
        <GallerySection />
      </main>

      <Footer />
    </>
  );
};

export default Gallery;
