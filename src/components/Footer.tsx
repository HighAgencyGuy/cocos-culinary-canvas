import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-cocoa text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-brand-cream font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl">Coco's Pot</span>
                <span className="text-sm text-brand-cream/80 font-light tracking-wider">PREMIUM CATERING</span>
              </div>
            </div>
            <p className="text-brand-cream/90 text-sm leading-relaxed mb-6">
              Elevating your special moments with exquisite culinary experiences. 
              From intimate gatherings to grand celebrations, we bring passion and 
              perfection to every plate.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-cream/80 hover:text-brand-cream transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-cream/80 hover:text-brand-cream transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-cream/80 hover:text-brand-cream transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-brand-cream/80 hover:text-brand-cream transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-brand-cream/80 hover:text-brand-cream transition-colors text-sm">About</Link></li>
              <li><Link to="/menu" className="text-brand-cream/80 hover:text-brand-cream transition-colors text-sm">Menu</Link></li>
              <li><Link to="/gallery" className="text-brand-cream/80 hover:text-brand-cream transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/testimonials" className="text-brand-cream/80 hover:text-brand-cream transition-colors text-sm">Testimonials</Link></li>
              <li><Link to="/contact" className="text-brand-cream/80 hover:text-brand-cream transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-brand-cream/80" />
                <span className="text-brand-cream/90">+234 814 663 7827</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-brand-cream/80" />
                <span className="text-brand-cream/90">hello@cocospot.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-brand-cream/80 mt-0.5" />
                <span className="text-brand-cream/90">
                  Block 66, flat 1 after Salasi hotel junction<br />
                  Karu Site, FCT Abuja
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-cream/20 text-center">
          <p className="text-brand-cream/80 text-sm">
            © 2024 Coco's Pot Premium Catering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};