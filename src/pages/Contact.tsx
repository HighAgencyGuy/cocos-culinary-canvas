import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-contact.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", eventType: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <PageHero
        title="Get In Touch"
        subtitle="Let's discuss how we can make your next event unforgettable"
        backgroundImage={heroImage}
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-brand-cocoa mb-6">
                  Let's Start Planning
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Ready to elevate your next event? Contact us today to discuss your vision, 
                  and let our team of culinary experts bring it to life.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-warm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-cocoa" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-cocoa mb-1">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-COCO</p>
                    <p className="text-sm text-muted-foreground">Available Mon-Fri, 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-warm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-cocoa" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-cocoa mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@cocospot.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-warm rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-brand-cocoa" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-cocoa mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground">+1 (555) 123-COCO</p>
                    <p className="text-sm text-muted-foreground">Quick responses during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-warm rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-cocoa" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-cocoa mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      123 Culinary Street<br />
                      Gourmet District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-warm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-cocoa" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-cocoa mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-semibold text-brand-cocoa mb-4">Quick Actions</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm">
                    Download Menu PDF
                  </Button>
                  <Button variant="outline" size="sm">
                    Schedule Tasting
                  </Button>
                  <Button variant="outline" size="sm">
                    Virtual Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-serif font-bold text-brand-cocoa mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="private">Private Party</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your event, guest count, date, special requirements..."
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Emergency contacts:</strong> For same-day events or urgent matters, 
                  please call us directly at (555) 123-COCO or text our WhatsApp line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-brand-cocoa mb-4">
              Visit Our Kitchen
            </h2>
            <p className="text-muted-foreground">
              Schedule a visit to see where the magic happens and meet our team
            </p>
          </div>
          
          {/* Placeholder for map - you can integrate with Google Maps or similar */}
          <div className="bg-card rounded-xl overflow-hidden shadow-soft h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-brand-cocoa mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brand-cocoa mb-2">
                Interactive Map Coming Soon
              </h3>
              <p className="text-muted-foreground">
                123 Culinary Street, Gourmet District, New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}