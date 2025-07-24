import { Button } from "@/components/ui/button";
import { ChefHat, Star, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-catering.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury catering spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cocoa/80 via-brand-cocoa/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-cream leading-tight">
                Exquisite
                <span className="block text-brand-gold">Catering</span>
                <span className="block text-4xl md:text-5xl font-light">
                  for Your Special Moments
                </span>
              </h1>
              <p className="text-xl text-brand-cream/90 max-w-lg leading-relaxed">
                From intimate gatherings to grand celebrations, Coco's Pot delivers
                culinary excellence that transforms every occasion into an unforgettable experience.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book-us">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Book Your Event
                </Button>
              </Link>
              <Link to="/menu">
                <Button variant="elegant" size="lg" className="text-lg px-8 py-4">
                  View Our Menu
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mx-auto">
                  <Star className="h-6 w-6 text-brand-gold" />
                </div>
                <div className="text-2xl font-bold text-brand-cream">500+</div>
                <div className="text-sm text-brand-cream/80">Events Catered</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-brand-gold" />
                </div>
                <div className="text-2xl font-bold text-brand-cream">50K+</div>
                <div className="text-sm text-brand-cream/80">Guests Served</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mx-auto">
                  <ChefHat className="h-6 w-6 text-brand-gold" />
                </div>
                <div className="text-2xl font-bold text-brand-cream">15+</div>
                <div className="text-sm text-brand-cream/80">Years Experience</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mx-auto">
                  <Clock className="h-6 w-6 text-brand-gold" />
                </div>
                <div className="text-2xl font-bold text-brand-cream">24/7</div>
                <div className="text-sm text-brand-cream/80">Event Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Highlights */}
          <div className="lg:ml-12">
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-elevated space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-brand-cocoa mb-6">
                Why Choose Coco's Pot?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center mt-1">
                    <ChefHat className="h-5 w-5 text-brand-cocoa" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-cocoa">Master Chefs</h4>
                    <p className="text-muted-foreground">Award-winning culinary team with international expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center mt-1">
                    <Star className="h-5 w-5 text-brand-cocoa" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-cocoa">Premium Ingredients</h4>
                    <p className="text-muted-foreground">Locally sourced, organic, and finest quality ingredients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center mt-1">
                    <Users className="h-5 w-5 text-brand-cocoa" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-cocoa">Custom Menus</h4>
                    <p className="text-muted-foreground">Tailored dining experiences for every dietary preference</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};