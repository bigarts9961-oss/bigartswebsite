import { Link } from 'react-router-dom';
import { Instagram, MapPin, Clock } from 'lucide-react';
import logo from '@/assets/logo.png';
import { locations } from '@/data/locations';


// San Fernando Valley mountain silhouette + cityscape SVG
const ValleySilhouette = () => (
  <svg 
    className="absolute bottom-0 left-0 right-0 w-full h-32 sm:h-40 md:h-48 lg:h-56 pointer-events-none"
    viewBox="0 0 1440 200" 
    preserveAspectRatio="xMidYMax slice"
    fill="none"
  >
    {/* Distant mountains */}
    <path 
      d="M0 200 L0 140 Q80 100 160 120 Q240 85 320 110 Q400 75 480 95 Q560 60 640 90 Q720 55 800 80 Q880 45 960 75 Q1040 50 1120 70 Q1200 40 1280 65 Q1360 55 1440 80 L1440 200 Z"
      className="fill-accent/15"
    />
    {/* Mid mountains */}
    <path 
      d="M0 200 L0 150 Q100 120 200 140 Q300 100 400 125 Q500 85 600 115 Q700 75 800 105 Q900 70 1000 100 Q1100 80 1200 95 Q1300 70 1440 100 L1440 200 Z"
      className="fill-accent/20"
    />
    {/* Front hills */}
    <path 
      d="M0 200 L0 165 Q150 140 300 155 Q450 130 600 150 Q750 125 900 145 Q1050 130 1200 150 Q1350 140 1440 155 L1440 200 Z"
      className="fill-accent/30"
    />
    {/* Palm trees silhouettes for mobile */}
    <g className="fill-accent/25">
      <path d="M100 200 L100 175 Q95 170 85 165 Q100 168 100 160 Q100 168 115 165 Q105 170 100 175 Z" />
      <path d="M300 200 L300 170 Q293 163 280 157 Q300 162 300 150 Q300 162 320 157 Q307 163 300 170 Z" />
      <path d="M1150 200 L1150 172 Q1143 166 1132 160 Q1150 164 1150 154 Q1150 164 1168 160 Q1157 166 1150 172 Z" />
      <path d="M1350 200 L1350 178 Q1345 173 1337 168 Q1350 171 1350 163 Q1350 171 1363 168 Q1355 173 1350 178 Z" />
    </g>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Valley Silhouette Background */}
      <ValleySilhouette />
      
      <div className="container-tight mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Brand - full width on mobile */}
          <div className="col-span-2 lg:col-span-1 text-center sm:text-left">
            <Link to="/" className="inline-block mb-3 sm:mb-4">
              <img 
                src={logo} 
                alt="Big Art's Breakfast Burritos" 
                className="h-16 sm:h-20 lg:h-24 w-auto mx-auto sm:mx-0"
                loading="lazy"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-3 sm:mb-4">
              Home of the Original Asada Breakfast + Cafe de Olla ☕️
            </p>
            <a
              href="https://www.instagram.com/bigartstacos/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm"
            >
              <Instagram className="h-5 w-5" />
              @bigartstacos
            </a>
            <div className="mt-3 flex flex-col gap-1 text-sm">
              <a href="tel:+18182729961" className="text-primary-foreground/70 hover:text-accent transition-colors">
                (818) 272-9961
              </a>
              <a href="mailto:artrodriguez@bigartstacos.com" className="text-primary-foreground/70 hover:text-accent transition-colors break-all">
                artrodriguez@bigartstacos.com
              </a>
            </div>

          </div>

          {/* Quick Links - side by side with Location on mobile */}
          <div className="text-center sm:text-left">
            <h4 className="font-display text-lg sm:text-xl text-accent mb-3 sm:mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="https://big-arts-tacos-los-angeles.cloveronline.com/menu/all" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                Menu
              </a>
              <Link to="/story" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                Our Story
              </Link>
              <Link to="/catering" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                Catering
              </Link>
              <Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Hours - hidden on mobile, visible on sm and up */}
          <div className="hidden sm:block text-center sm:text-left">
            <h4 className="font-display text-lg sm:text-xl text-accent mb-3 sm:mb-4 flex items-center gap-2 justify-center sm:justify-start">
              <Clock className="h-5 w-5" />
              Hours
            </h4>
            <div className="space-y-3 max-w-[220px] mx-auto sm:mx-0">
              {locations.map((loc) => (
                <div key={loc.id} className="text-sm">
                  <p className="text-primary-foreground font-medium">{loc.name}</p>
                  <p className="text-primary-foreground/70">{loc.days}</p>
                  <p className="text-primary-foreground/70">{loc.hours}</p>
                  {loc.sundayHours && (
                    <p className="text-primary-foreground/70">Sun {loc.sundayHours}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Locations - side by side with Quick Links on mobile */}
          <div className="text-center sm:text-left">
            <h4 className="font-display text-lg sm:text-xl text-accent mb-3 sm:mb-4 flex items-center gap-2 justify-center sm:justify-start">
              <MapPin className="h-5 w-5" />
              Locations
            </h4>
            <div className="space-y-3">
              {locations.map((loc) => (
                <div key={loc.id} className="text-sm">
                  <p className="text-primary-foreground font-medium">{loc.name}</p>
                  <address className="not-italic text-primary-foreground/70 leading-relaxed">
                    {loc.address ?? loc.addressNote}
                  </address>
                </div>
              ))}
            </div>
            <a
              href="https://maps.google.com/?q=15305+Devonshire+Chatsworth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
            >
              Get Directions →
            </a>
          </div>

        </div>

        {/* San Fernando Valley Tagline */}
        <div className="text-center mt-8 sm:mt-12 mb-6 sm:mb-8">
          <p className="font-script text-xl sm:text-2xl md:text-3xl text-accent/80 italic">
            "Serving the San Fernando Valley with Love"
          </p>
        </div>

        <div className="border-t border-accent/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-primary-foreground/50 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Big Art's Tacos y Burros. All rights reserved.
          </p>
          <div className="text-center sm:text-right">
            <p className="text-primary-foreground/50 text-xs sm:text-sm">
            Made with 🔥 by <a href="https://advanceedgellc.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">AdvanceEdge</a>
           
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
