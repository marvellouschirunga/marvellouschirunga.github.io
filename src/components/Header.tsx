import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Car, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const leftNavigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about", hasDropdown: true },
    { name: "AUTOMOTIVE SERVICES", href: "/services", hasDropdown: true },
  ];

  const rightNavigation = [
    { name: "CONTACT US", href: "/contact" },
    { name: "GET A QUOTE", href: "/quote" },
  ];

  const allNavigation = [...leftNavigation, ...rightNavigation];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Left Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {leftNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary flex items-center space-x-1 ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                <span>{item.name}</span>
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="flex justify-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-primary rounded-lg p-2">
                <Car className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">PASSION AUTO</div>
                <div className="text-sm text-muted-foreground">SERVICES</div>
              </div>
            </Link>
          </div>

          {/* Right Navigation & Contact - Desktop */}
          <div className="hidden lg:flex items-center justify-end space-x-6">
            {rightNavigation.map((item) => (
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
            <a href="tel:+263782842888" className="text-lg font-bold text-foreground">
              +263 782 842 888
            </a>
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
              {allNavigation.map((item) => (
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
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;