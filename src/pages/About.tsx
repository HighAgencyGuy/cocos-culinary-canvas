import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Clock, Users, Heart, Star, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-cocoa mb-6">
              The Story Behind
              <span className="block text-brand-gold">Coco's Pot</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Born from a passion for culinary excellence and a love for bringing people together, 
              Coco's Pot has been creating unforgettable dining experiences for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-brand-cocoa">
                Our Culinary Journey
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  What started as a small family kitchen in 2009 has blossomed into one of the region's 
                  most trusted premium catering services. Our founder, Chef Maria Santos, began with 
                  a simple belief: every meal should tell a story, and every gathering should create lasting memories.
                </p>
                <p>
                  Today, our team of master chefs combines traditional techniques with innovative flavors, 
                  sourcing the finest local ingredients to create dishes that not only satisfy the palate 
                  but also nourish the soul.
                </p>
                <p>
                  From intimate dinner parties to grand corporate events, we've had the privilege of 
                  being part of over 500 celebrations, each one unique and special in its own way.
                </p>
              </div>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Meet Our Team
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-hero-gradient rounded-2xl p-8 text-center text-brand-cream">
                <ChefHat className="h-20 w-20 mx-auto mb-6 text-brand-gold" />
                <h3 className="text-2xl font-serif font-bold mb-4">Chef Maria Santos</h3>
                <p className="text-brand-cream/90 mb-6">Founder & Executive Chef</p>
                <p className="text-sm text-brand-cream/80 leading-relaxed">
                  "Cooking is not just about feeding people; it's about creating experiences 
                  that bring families and friends together around the table."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-brand-cocoa mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from ingredient selection to service delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-elevated transition-all duration-300 bg-card border-brand-warm/20">
              <div className="w-16 h-16 bg-accent-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-brand-cocoa" />
              </div>
              <h3 className="text-xl font-semibold text-brand-cocoa mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We never compromise on quality, from ingredients to presentation
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-elevated transition-all duration-300 bg-card border-brand-warm/20">
              <div className="w-16 h-16 bg-accent-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-brand-cocoa" />
              </div>
              <h3 className="text-xl font-semibold text-brand-cocoa mb-4">Passion</h3>
              <p className="text-muted-foreground">
                Every dish is crafted with love and attention to detail
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-elevated transition-all duration-300 bg-card border-brand-warm/20">
              <div className="w-16 h-16 bg-accent-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-brand-cocoa" />
              </div>
              <h3 className="text-xl font-semibold text-brand-cocoa mb-4">Community</h3>
              <p className="text-muted-foreground">
                We believe in supporting local farmers and sustainable practices
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-elevated transition-all duration-300 bg-card border-brand-warm/20">
              <div className="w-16 h-16 bg-accent-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-brand-cocoa" />
              </div>
              <h3 className="text-xl font-semibold text-brand-cocoa mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly evolving our menus to surprise and delight
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-4xl font-bold text-brand-cocoa">500+</div>
              <div className="text-muted-foreground">Events Catered</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-brand-cocoa">50K+</div>
              <div className="text-muted-foreground">Guests Served</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-brand-cocoa">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-brand-cocoa">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cream mb-6">
            Let's Create Your Perfect Event
          </h2>
          <p className="text-xl text-brand-cream/90 mb-8">
            Ready to experience the Coco's Pot difference? Contact us today for a consultation.
          </p>
          <Link to="/book-us">
            <Button variant="gold" size="lg" className="text-lg px-8 py-4">
              Start Planning
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;