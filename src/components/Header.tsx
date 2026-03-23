import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Meet Our Stylists", path: "/meet-our-hairstylists" },
  { label: "Salon Services", path: "/hair-salon-services" },
  { label: "Spa Services", path: "/spa-services-massages-facials" },
  { label: "Jon Renau", path: "/jon-renau" },
  { label: "Brands", path: "/brands" },
  { label: "Contact", path: "/contact-us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Urgency bar — homepage only */}
      {isHome && (
        <div className="urgency-bar fixed top-0 left-0 right-0 z-[60]">
          🔥 10% Off Your First Service — Call Now: (417) 782-6167
        </div>
      )}

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isHome ? "top-[38px]" : "top-0"
        } ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container-site flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2" style={{ height: 75 }}>
            <span className="text-xl font-semibold tracking-tight text-foreground">
              Styles Hair Salon
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-light tracking-wide transition-colors duration-200 hover:text-secondary ${
                  location.pathname === link.path
                    ? "text-secondary font-medium"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:4177826167" className="btn-primary text-xs py-2.5 px-5 gap-2 btn-pulse">
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="container-site py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-light py-2 transition-colors ${
                    location.pathname === link.path
                      ? "text-secondary font-medium"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:4177826167" className="btn-primary text-center mt-2 gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
