import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-white transform -translate-x-16 -translate-y-16"></div>
        <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-white transform"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-white transform translate-x-20 translate-y-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Company Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart
              className="w-8 h-8 mr-3 text-amber-200"
              fill="currentColor"
            />
            <h2 className="text-3xl font-bold tracking-wide">MindEase</h2>
          </div>
          <p className="text-amber-100 max-w-md mx-auto text-sm leading-relaxed">
            Your trusted companion for mental wellness and emotional support.
            Together, we make healing accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-amber-200 border-b border-amber-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="hover:text-amber-200 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-amber-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-amber-200 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-amber-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="/chat"
                  className="hover:text-amber-200 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-amber-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                  Chatbot
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="hover:text-amber-200 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-amber-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                  Support
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-amber-200 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-amber-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-amber-200 border-b border-amber-700 pb-2">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:14416"
                  className="hover:text-amber-200 transition-colors duration-200 flex items-center group"
                >
                  <Phone className="w-4 h-4 mr-2 text-amber-300" />
                  Helpline 14416
                </a>
              </li>
              <li>
                <a
                  href="tel:1737"
                  className="hover:text-amber-200 transition-colors duration-200 flex items-center group"
                >
                  <Phone className="w-4 h-4 mr-2 text-amber-300" />
                  Global Helpline 1737
                </a>
              </li>
              <li>
                <a
                  href="https://www.who.int/health-topics/mental-health"
                  target="_blank"
                  className="hover:text-amber-200 transition-colors duration-200 flex items-center group"
                >
                  <ExternalLink className="w-4 h-4 mr-2 text-amber-300" />
                  WHO Mental Health
                </a>
              </li>
              <li>
                <a
                  href="https://telemanas.mohfw.gov.in/home"
                  target="_blank"
                  className="hover:text-amber-200 transition-colors duration-200 flex items-center group"
                >
                  <ExternalLink className="w-4 h-4 mr-2 text-amber-300" />
                  Tele MANAS
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-amber-200 border-b border-amber-700 pb-2">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-amber-300" />
                <span className="text-sm">support@mindease.org</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-amber-300" />
                <span className="text-sm">Thane</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-amber-200 border-b border-amber-700 pb-2">
              Follow Us
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center hover:text-amber-200 transition-colors duration-200 group"
              >
                <Facebook className="w-5 h-5 mr-3 text-amber-300 group-hover:text-blue-400 transition-colors duration-200" />
                <span>Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center hover:text-amber-200 transition-colors duration-200 group"
              >
                <Twitter className="w-5 h-5 mr-3 text-amber-300 group-hover:text-blue-400 transition-colors duration-200" />
                <span>Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center hover:text-amber-200 transition-colors duration-200 group"
              >
                <Instagram className="w-5 h-5 mr-3 text-amber-300 group-hover:text-pink-400 transition-colors duration-200" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Simple Location Map Visualization */}
        <div className="mb-8">
          <div className="bg-amber-900 bg-opacity-30 rounded-lg p-6 border border-amber-700">
            <h4 className="text-amber-200 font-semibold mb-3 text-center">
              Our Reach
            </h4>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="w-3 h-3 bg-amber-400 rounded-full mx-auto mb-1 animate-pulse"></div>
                <span className="text-amber-200">Mumbai</span>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-amber-400 rounded-full mx-auto mb-1 animate-pulse"></div>
                <span className="text-amber-200">Ahmedabad</span>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-amber-400 rounded-full mx-auto mb-1 animate-pulse"></div>
                <span className="text-amber-200">Delhi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}

        <div className="text-center mt-6 py-6 pt-4 border-t border-amber-700">
          <p className="text-amber-100 text-sm mb-4 italic">
            "Healing is a journey — one step at a time."
          </p>
          <p className="text-xs text-amber-200">
            © 2025 MindEase. All rights reserved. | Made with ❤️ for mental
            wellness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
