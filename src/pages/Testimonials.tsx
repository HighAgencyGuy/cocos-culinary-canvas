import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-testimonials.jpg";

interface Testimonial {
  id: string;
  name: string;
  event: string;
  rating: number;
  content: string;
  image: string;
  date: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah & Michael Chen",
    event: "Wedding Reception",
    rating: 5,
    content: "Coco's Pot exceeded all our expectations for our wedding day. The food was absolutely divine, and their team handled everything with such professionalism. Our guests are still raving about the lamb and the chocolate soufflé. It truly made our special day unforgettable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    date: "October 2024",
    location: "Napa Valley"
  },
  {
    id: "2",
    name: "Marcus Johnson",
    event: "Corporate Gala",
    rating: 5,
    content: "We've worked with many caterers over the years, but Coco's Pot stands out. Their attention to detail and ability to accommodate dietary restrictions while maintaining exceptional taste is remarkable. The presentation was stunning, and service was flawless.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    date: "September 2024",
    location: "San Francisco"
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    event: "Birthday Celebration",
    rating: 5,
    content: "My 50th birthday party was absolutely perfect thanks to Coco's Pot. They created a custom menu that reflected my personality and taste. The truffle arancini was a hit with everyone, and the service staff was incredibly attentive throughout the evening.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c38b?w=150",
    date: "August 2024",
    location: "Los Angeles"
  },
  {
    id: "4",
    name: "David & Jennifer Park",
    event: "Anniversary Dinner",
    rating: 5,
    content: "For our 25th anniversary, we wanted something special and intimate. Coco's Pot delivered beyond our dreams. Chef personally prepared our meal, and every course was a masterpiece. The beef wellington was cooked to perfection. Truly a night to remember.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    date: "July 2024",
    location: "Malibu"
  },
  {
    id: "5",
    name: "Amanda Foster",
    event: "Corporate Retreat",
    rating: 5,
    content: "Organizing a corporate retreat for 150 people was daunting, but Coco's Pot made it seamless. They accommodated all dietary needs without compromising on flavor. The team building lunch was a huge success, and everyone loved the variety of options.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    date: "June 2024",
    location: "Monterey"
  },
  {
    id: "6",
    name: "Robert & Lisa Thompson",
    event: "Family Reunion",
    rating: 5,
    content: "Our family reunion with 80+ family members was catered beautifully by Coco's Pot. They managed to please three generations with their diverse menu. The kids loved the simple dishes while adults enjoyed the gourmet options. Professional and friendly service!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    date: "May 2024",
    location: "Santa Barbara"
  }
];

const stats = [
  { number: "500+", label: "Events Catered" },
  { number: "50,000+", label: "Happy Guests" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "10", label: "Years Experience" }
];

export default function Testimonials() {
  return (
    <Layout>
      <PageHero
        title="What Our Clients Say"
        subtitle="Real stories from real clients who trusted us with their special moments"
        backgroundImage={heroImage}
      />

      {/* Stats Section */}
      <section className="py-16 bg-brand-cocoa text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-brand-cream/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-cocoa mb-4">
              Client Reviews
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover why clients choose Coco's Pot for their most important celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elegant transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-brand-cocoa">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.event} • {testimonial.location}
                    </div>
                    <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-brand-cocoa mb-4">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join hundreds of satisfied clients who trusted us with their special moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-us"
              className="inline-flex items-center justify-center px-8 py-3 bg-hero-gradient text-brand-cream font-medium rounded-lg hover:shadow-glow transition-all duration-300"
            >
              Book Your Event
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-brand-cocoa text-brand-cocoa font-medium rounded-lg hover:bg-brand-cocoa hover:text-brand-cream transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}