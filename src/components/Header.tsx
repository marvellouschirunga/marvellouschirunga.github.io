import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageSquare, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "AUTOMOTIVE SERVICES", href: "/services" },
    { name: "CONTACT US", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <a href="tel:+263782842888" className="hover:text-primary transition-colors">
            Call +263 782 842 888
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-primary rounded-lg p-2">
                <Car className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">PASSION AUTO</div>
                <div className="text-sm text-muted-foreground">SERVICES</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+263782842888" className="text-xl font-bold text-foreground">
                +263 782 842 888
              </a>
              <Button asChild>
                <Link to="/quote">GET A QUOTE</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t space-y-3">
                  <a href="tel:+263782842888" className="flex items-center space-x-2 text-lg font-semibold">
                    <Phone className="h-5 w-5" />
                    <span>+263 782 842 888</span>
                  </a>
                  <Button asChild className="w-full">
                    <Link to="/quote">GET A QUOTE</Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;