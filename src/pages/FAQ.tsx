import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FaqItem {
  q: string;
  a: string;
  points?: string[];
  link?: { label: string; href: string; external?: boolean };
}

interface FaqCategory {
  category: string;
  questions: FaqItem[];
}

const ORDER_URL = "https://big-arts-tacos-los-angeles.cloveronline.com/menu/all";

const faqData: FaqCategory[] = [
  {
    category: "Orders & Menu",
    questions: [
      {
        q: "What are your most popular items?",
        a: "Our signature Asada Breakfast Burrito is the fan favorite! We're also famous for our Cafe de Olla (traditional Mexican coffee) and our loaded breakfast tacos. Everything is made fresh daily.",
      },
      {
        q: "Do you offer vegetarian options?",
        a: "Yes! We have delicious vegetarian options including our veggie burrito with eggs, beans, cheese, and fresh pico de gallo. Just ask us and we'll customize any item for you.",
      },
      {
        q: "Can I customize my order?",
        a: "Absolutely! We're happy to customize any dish to your liking. Just let us know your preferences when ordering, whether you want extra salsa, no onions, or any other modifications.",
      },
      {
        q: "Do you have a kids menu?",
        a: "While we don't have a formal kids menu, we offer smaller portions and can make simple tacos or quesadillas that are perfect for little ones.",
      },
    ],
  },
  {
    category: "Hours & Location",
    questions: [
      {
        q: "Where are you located?",
        a: "We operate three locations across the San Fernando Valley. Find addresses, maps, and hours below.",
        link: { label: "Find Our Locations", href: "/contact" },
      },
      {
        q: "What are your hours of operation?",
        a: "Hours vary by location:",
        points: [
          "Chatsworth: Tuesday to Saturday, 7:00 AM to 3:00 PM, and Sunday, 8:00 AM to 12:00 PM",
          "Mission Hills: Tuesday to Saturday, 6:30 AM to 11:30 AM; Sunday, 8:00 AM to 12:00 PM",
          "Sylmar: Wednesday to Saturday, 6:30 AM to 11:30 AM; Sunday, 8:00 AM to 12:00 PM",
          "We close early once we sell out, so arriving early is recommended.",
        ],
      },
      {
        q: "Is there parking available?",
        a: "Yes, parking is easy:",
        points: ["Free street parking at all three locations", "A parking lot is also available"],
      },
      {
        q: "Do you have seating?",
        a: "Seating depends on the location:",
        points: [
          "Chatsworth: limited seating available",
          "Mission Hills and Sylmar: walk-up windows, orders to go",
        ],
      },
    ],
  },
  {
    category: "Ordering & Payment",
    questions: [
      {
        q: "Do you take online orders?",
        a: "Yes! You can order online for pickup through our Order Now button. We recommend ordering ahead during peak hours to skip the line. ",
        link: { label: "Order Online", href: ORDER_URL, external: true },
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, all major credit cards, Apple Pay, and Google Pay. We want to make paying as easy as possible!",
      },
      {
        q: "Do you offer delivery?",
        a: "Currently, we focus on pickup orders to ensure your food arrives fresh and hot. For large orders, check out our catering services!",
        link: { label: "See Catering", href: "/catering" },
      },
    ],
  },
  {
    category: "Catering & Events",
    questions: [
      {
        q: "Do you offer catering services?",
        a: "Yes! We cater events of all sizes, from corporate breakfasts to family gatherings, weddings, and more. Visit our Catering page or contact us to discuss your event needs.",
        link: { label: "Go to Catering", href: "/catering" },
      },
      {
        q: "How far in advance should I book catering?",
        a: "We recommend booking at least 1-2 weeks in advance for small events and 3-4 weeks for larger gatherings. During busy seasons, earlier is better!",
      },
      {
        q: "What's included in your catering packages?",
        a: "Our catering packages include your choice of burritos, tacos, and sides, plus all the fixings like salsas, napkins, and serving utensils. We can customize packages based on your needs and budget.",
        link: { label: "View Packages", href: "/catering" },
      },
    ],
  },
  {
    category: "About Big Art's",
    questions: [
      {
        q: "Who is Big Art?",
        a: "Big Art is our founder who started this dream with a simple mission: serve the best breakfast burritos in LA. What started as a small spot has grown into a beloved community staple, but we've never lost our commitment to quality and authentic flavors.",
      },
      {
        q: "What makes your Cafe de Olla special?",
        a: "Our Cafe de Olla is brewed the traditional Mexican way with cinnamon and piloncillo (unrefined cane sugar). It's the perfect complement to our breakfast items and a customer favorite!",
      },
      {
        q: "Are your ingredients fresh?",
        a: "Always! We source fresh ingredients daily and prepare everything from scratch. Our carne asada is marinated in-house, our salsas are made fresh, and we never compromise on quality.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | Big Art's Tacos y Burros | Chatsworth</title>
        <meta
          name="description"
          content="Frequently asked questions about Big Art's Tacos y Burros. Learn about our menu, hours, location, catering services, and more."
        />
        <meta property="og:title" content="FAQ | Big Art's Tacos y Burros" />
        <meta
          property="og:description"
          content="Get answers to common questions about Big Art's breakfast burritos, hours, location, and catering services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bigartstacos.com/faq" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/TwFfdXtj9KPaUtTHoCvbqEoYX6D3/social-images/social-1768502479604-bigarts-logo.png" />
        <meta property="og:site_name" content="Big Art's Tacos y Burros" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | Big Art's Tacos y Burros" />
        <meta
          name="twitter:description"
          content="Get answers to common questions about Big Art's breakfast burritos, hours, location, and catering services."
        />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/TwFfdXtj9KPaUtTHoCvbqEoYX6D3/social-images/social-1768502479604-bigarts-logo.png" />
        <link rel="canonical" href="https://bigartstacos.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.flatMap((category) =>
              category.questions.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.points ? `${item.a} ${item.points.join(" ")}` : item.a,
                },
              })),
            ),
          })}
        </script>
      </Helmet>

      <Header />

      <main className="pb-20 lg:pb-0 bg-foreground">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-primary">
          <div className="container-tight mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="font-sans text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Got questions? We've got answers. Find everything you need to know about Big Art's below.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 lg:py-24">
          <div className="container-tight mx-auto px-4 sm:px-6 max-w-4xl">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 last:mb-0">
                <h2 className="font-display text-2xl sm:text-3xl text-primary mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      value={`${categoryIndex}-${itemIndex}`}
                      className="bg-background border border-border rounded-lg px-6 overflow-hidden"
                    >
                      <AccordionTrigger className="font-display text-lg text-left hover:text-primary hover:no-underline py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="font-sans text-muted-foreground pb-5 leading-relaxed">
                        {item.a}
                        {item.points && (
                          <ul className="mt-3 space-y-1.5">
                            {item.points.map((point, i) => (
                              <li key={i} className="pl-1">
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}
                        {item.link && (
                          <div className="mt-5">
                            {item.link.external ? (
                              <a
                                href={item.link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center font-display text-xs uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 rounded-full transition-colors"
                              >
                                {item.link.label}
                              </a>
                            ) : (
                              <Link
                                to={item.link.href}
                                className="inline-flex items-center justify-center font-display text-xs uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 rounded-full transition-colors"
                              >
                                {item.link.label}
                              </Link>
                            )}
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {/* Still have questions CTA */}
            <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
              <h3 className="font-display text-2xl sm:text-3xl text-primary mb-4">Still Have Questions?</h3>
              <p className="font-sans text-muted-foreground mb-6 max-w-lg mx-auto">
                Can't find what you're looking for? We're happy to help! Reach out to us directly.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center font-display text-sm uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FAQ;