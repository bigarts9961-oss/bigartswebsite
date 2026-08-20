import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";
import heroPoster from "@/assets/Hero Owner.webp";
import logoPlaceholder from "@/assets/logo.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-stone-50">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          className="w-full h-full object-cover opacity-60"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-stone-50/50 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-tight mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Decorative Stars */}
        <div
          className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 animate-fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="text-primary text-lg sm:text-xl">✦</span>
          <span className="text-primary text-lg sm:text-xl">✦</span>
          <span className="text-primary text-lg sm:text-xl">✦</span>
        </div>

        {/* Eyebrow */}
        <p
          className="font-sans text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.35em] text-primary/90 mb-4 sm:mb-5 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          San Fernando Valley Since 2012
        </p>

        {/* Main Heading */}
        <h1 className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <span className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground/80 block tracking-[0.18em] mb-2 sm:mb-3">
            HOME OF THE ORIGINAL
          </span>
          <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-primary block leading-[0.9] tracking-[0.02em]">
            ASADA BREAKFAST
            <span className="block">BURRITO</span>
          </span>
        </h1>

        <p
          className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-xl mx-auto mt-5 sm:mt-7 mb-6 sm:mb-8 animate-fade-up px-4 leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          Marinated carne asada, fresh salsas and Cafe de Olla, made from scratch every morning.
        </p>


        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up px-4"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-display text-base sm:text-lg px-6 sm:px-8 rounded-full"
          >
            <a
              href="https://big-arts-tacos-los-angeles.cloveronline.com/menu/all"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <span className="flex flex-col items-center leading-tight">
                <span className="tracking-widest">Order Now</span>
                <span className="font-sans text-[10px] sm:text-xs font-normal opacity-80 normal-case tracking-wide">(Chatsworth)</span>
              </span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/10 font-display text-base sm:text-lg px-6 sm:px-8 rounded-full"
          >
            <a href="https://big-arts-tacos-los-angeles.cloveronline.com/menu/all" target="_blank" rel="noopener noreferrer">View Menu</a>
          </Button>
        </div>

        {/* Stats Row */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8 mt-8 sm:mt-12 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-primary/10 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-6 py-2 sm:py-4 border border-primary/20">
            <span className="font-display text-xl sm:text-3xl md:text-4xl text-primary block">14+</span>
            <span className="text-foreground/70 text-[9px] sm:text-xs uppercase tracking-wider">Years</span>
          </div>
          <div className="bg-primary/10 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-6 py-2 sm:py-4 border border-primary/20">
            <span className="font-display text-xl sm:text-3xl md:text-4xl text-primary block">20K+</span>
            <span className="text-foreground/70 text-[9px] sm:text-xs uppercase tracking-wider">Fans</span>
          </div>
          <div className="bg-primary/10 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-6 py-2 sm:py-4 border border-primary/20">
            <span className="font-display text-xl sm:text-3xl md:text-4xl text-primary block">190+</span>
            <span className="text-foreground/70 text-[9px] sm:text-xs uppercase tracking-wider">5-Star</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-foreground/60 hidden sm:block">
        <span className="text-xs uppercase tracking-widest block mb-2">Scroll</span>
        <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
