import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  children?: ReactNode;
}

export const PageHero = ({ title, subtitle, backgroundImage, children }: PageHeroProps) => {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cocoa/80 via-brand-cocoa/60 to-brand-cocoa/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-cream mb-6">
          {title}
        </h1>
        <p className="text-xl text-brand-cream/90 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        {children}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};