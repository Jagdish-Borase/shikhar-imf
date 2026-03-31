import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import type { Page } from "../App";

interface FooterProps {
  navigate: (page: Page) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://asb.shikharimf.com/assets/logo.png"
                alt="Shikhar IMF"
                className="h-10 w-auto brightness-0 invert"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">
                  SHIKHAR IMF
                </div>
                <div className="text-xs text-white/60 leading-tight">
                  Ummidon Ki Udaan
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Your trusted partner for comprehensive insurance solutions across
              Nepal. We bring you the best plans from top insurers.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="https://shikharimf.com"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {(
                [
                  ["Home", "home"],
                  ["Products", "products"],
                  ["About Us", "about"],
                  ["Become an Advisor", "advisor"],
                  ["Contact Us", "contact"],
                ] as [string, Page][]
              ).map(([label, page]) => (
                <li key={page}>
                  <button
                    type="button"
                    onClick={() => navigate(page)}
                    className="text-white/70 hover:text-green text-sm transition-colors"
                  >
                    → {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-bold text-lg mb-5">
              Our Products
            </h3>
            <ul className="space-y-2.5">
              {[
                "Life Insurance",
                "Health Insurance",
                "Motor Insurance",
                "Travel Insurance",
                "Term Insurance",
                "Investment Plans",
              ].map((p) => (
                <li key={p}>
                  <button
                    type="button"
                    onClick={() => navigate("products")}
                    className="text-white/70 hover:text-green text-sm transition-colors"
                  >
                    → {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-5">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-green" />
                <span>Financial District, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={16} className="shrink-0 text-green" />
                <span>+977-1-XXXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={16} className="shrink-0 text-green" />
                <span>info@shikharimf.com</span>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-white/60 text-xs mb-2">Working Hours</p>
              <p className="text-white/80 text-sm">
                Sun – Fri: 9:00 AM – 6:00 PM
              </p>
              <p className="text-white/80 text-sm">Sat: 10:00 AM – 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-white/50 text-xs">
          <p>© {year} Shikhar IMF. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
