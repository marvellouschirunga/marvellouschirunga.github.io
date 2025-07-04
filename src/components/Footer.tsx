import { Link } from "react-router-dom";
import { Car, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary rounded-lg p-2">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-lg font-bold">PASSION PERFORMANCE</div>
                <div className="text-sm text-gray-400">SERVICES</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Harare's trusted hybrid electric auto repair specialists with 5+ years of experience. 
              Certified technicians providing fast, reliable, and transparent service.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+263782842888" className="bg-primary hover:bg-primary/90 transition-colors rounded-lg px-4 py-2 text-sm font-medium">
                Call Now
              </a>
              <a href="sms:+263782842888" className="bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg px-4 py-2 text-sm font-medium">
                Text Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/quote" className="text-gray-300 hover:text-white transition-colors">Get A Quote</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Our Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/hybrid-diagnostics" className="text-gray-300 hover:text-white transition-colors">Hybrid Diagnostics</Link></li>
              <li><Link to="/services/auto-repair" className="text-gray-300 hover:text-white transition-colors">General Auto Repair</Link></li>
              <li><Link to="/services/inverter-repairs" className="text-gray-300 hover:text-white transition-colors">Inverter Repairs</Link></li>
              <li><Link to="/services/oil-change" className="text-gray-300 hover:text-white transition-colors">Oil Change</Link></li>
              <li><Link to="/services/tune-ups" className="text-gray-300 hover:text-white transition-colors">Tune-Ups</Link></li>
              <li><Link to="/services/check-engine" className="text-gray-300 hover:text-white transition-colors">Check Engine Light</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">19303 Borrowdale Rd</p>
                  <p className="text-gray-300">Gunhill, Harare</p>
                  <p className="text-gray-300">637F+CWM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+263782842888" className="text-gray-300 hover:text-white transition-colors">
                  +263 782 842 888
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@passionauto.co.zw" className="text-gray-300 hover:text-white transition-colors">
                  info@passionauto.co.zw
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 8 AM - 6 PM</p>
                  <p>Sat: 8 AM - 2 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Passion Performance Services. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;