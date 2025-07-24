import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChefHat, Heart, Award, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      {/* Featured Services Section */}
      <section className="py-20 bg-card-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cocoa mb-6">
              Our Signature Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intimate dinner parties to grand celebrations, we craft culinary experiences that leave lasting impressions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-elevated transition-all duration-300 transform hover:scale-105 bg-card border-brand-warm/20">
              <div className="w-16 h-16 bg-accent-gradient rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-brand-cocoa" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-cocoa mb-4">Corporate Events</h3>
              <p className="text-muted-foreground mb-6">
                Elevate your business gatherings with our professional catering services, designed to impress clients and colleagues alike.
              </p>
              <Link to="/menu" className="inline-flex items-center text-brand-cocoa font-medium hover:text-brand-gold transition-colors">
                Explore Options <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-elevated transition-all duration-300 transform hover:scale-105 bg-card border-brand-warm/20">
              <div className="w-16 h-16 bg-accent-gradient rounded-xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-brand-cocoa" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-cocoa mb-4">Wedding Catering</h3>
              <p className="text-muted-foreground mb-6">
                Make your special day unforgettable with our bespoke wedding menus, crafted to reflect your unique love story.
              </p>
              <Link to="/menu" className="inline-flex items-center text-brand-cocoa font-medium hover:text-brand-gold transition-colors">
                View Wedding Menus <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-elevated transition-all duration-300 transform hover:scale-105 bg-card border-brand-warm/20">
              <div className="w-16 h-16 bg-accent-gradient rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-brand-cocoa" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-cocoa mb-4">Private Dining</h3>
              <p className="text-muted-foreground mb-6">
                Intimate gatherings deserve exceptional cuisine. Our private dining experiences bring restaurant-quality meals to your home.
              </p>
              <Link to="/menu" className="inline-flex items-center text-brand-cocoa font-medium hover:text-brand-gold transition-colors">
                Book Private Chef <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <ChefHat className="h-16 w-16 text-brand-gold mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cream mb-6">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-xl text-brand-cream/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create a culinary experience that exceeds your expectations. 
            Our team is ready to make your event unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-us">
              <Button variant="gold" size="lg" className="text-lg px-8 py-4">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="elegant" size="lg" className="text-lg px-8 py-4">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
