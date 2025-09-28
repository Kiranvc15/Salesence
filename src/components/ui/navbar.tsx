import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  onGetStarted?: () => void;
  onSignIn?: () => void;
}

export const Navbar = ({ onGetStarted, onSignIn }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { name: "Features", href: "/#features" },
    { name: "About", href: "/#about" },
    { name: "Careers", href: "/careers" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("#")) {
      return location.pathname === "/" && location.hash === href;
    }
    if (href.includes("/#")) {
      const [path, hash] = href.split("#");
      return location.pathname === path && location.hash === `#${hash}`;
    }
    return location.pathname === href;
  };

  const handleNavClick = (href: string) => {
    closeMobileMenu();

    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: href.substring(1) } });
      } else {
        setTimeout(() => {
          const el = document.getElementById(href.substring(1));
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else if (href.includes("/#")) {
      const [path, hash] = href.split("#");
      if (location.pathname !== path) {
        navigate(path, { state: { scrollTo: hash } });
      } else {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "backdrop-blur-xl bg-black/60 shadow-lg py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Fixed visibility */}
          <Link to="/" className="relative group">
            <span className="absolute inset-0 blur-2xl opacity-40 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg animate-pulse"></span>
            <span className="relative text-3xl font-extrabold text-white bg-clip-text hover:scale-110 transition-transform duration-500">
              Salesence
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative transition-all duration-300 group py-2 text-lg",
                  isActive(item.href) ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full transition-all duration-500",
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  )}
                ></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white text-sm px-3">
                Sign In
              </Button>
            </Link>
            <Button
              onClick={toggleMobileMenu}
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-xl p-6 animate-in fade-in duration-300 z-40">
            <div className="flex flex-col space-y-6 text-white text-lg font-medium">
              {navItems.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "block transition-colors duration-200 py-2 w-full text-left",
                    isActive(item.href) ? "text-purple-300 font-semibold" : "text-gray-300 hover:text-purple-300"
                  )}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-6 border-t border-white/20">
                <Link to="/signup" onClick={closeMobileMenu}>
                  <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-all">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 