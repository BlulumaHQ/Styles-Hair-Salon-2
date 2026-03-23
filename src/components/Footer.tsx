import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Styles Hair Salon</h3>
            <p className="text-sm font-light opacity-70 leading-relaxed">
              Joplin's premier hair salon and day spa. Over 20 years of making you look and feel your best.
            </p>
          </div>

          {/* Col 2: Spacer */}
          <div className="hidden lg:block" />

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "Stylists", path: "/meet-our-hairstylists" },
                { label: "Hair Services", path: "/hair-salon-services" },
                { label: "Spa Services", path: "/spa-services-massages-facials" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm font-light opacity-70 hover:opacity-100 transition-opacity">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: More Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">More</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Jon Renau", path: "/jon-renau" },
                { label: "Brands", path: "/brands" },
                { label: "Contact", path: "/contact-us" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm font-light opacity-70 hover:opacity-100 transition-opacity">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm font-light opacity-70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                608 E 32nd St, Joplin, MO 64804
              </li>
              <li>
                <a href="tel:4177826167" className="flex items-center gap-2.5 text-sm font-light opacity-70 hover:opacity-100 transition-opacity">
                  <Phone className="w-4 h-4 shrink-0" />
                  (417) 782-6167
                </a>
              </li>
              <li>
                <a href="mailto:djt0717@gmail.com" className="flex items-center gap-2.5 text-sm font-light opacity-70 hover:opacity-100 transition-opacity">
                  <Mail className="w-4 h-4 shrink-0" />
                  djt0717@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm font-light opacity-70">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Mon–Fri: 8am–6pm<br />Sat: 8am–3pm<br />Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-border/20">
        <div className="container-site py-5 text-center">
          <p className="footer-credit">
            © {year} Styles Hair Salon and Day Spa. All rights reserved. | Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 underline">
              Bluluma
            </a>{" "}
            | Powered by{" "}
            <a href="https://swiftlift.app" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 underline">
              SwiftLift
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
