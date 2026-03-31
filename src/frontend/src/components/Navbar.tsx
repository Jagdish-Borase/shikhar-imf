import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Page } from "../App";

interface NavbarProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Products", page: "products" },
  { label: "About Us", page: "about" },
  { label: "Become an Advisor", page: "advisor" },
  { label: "Contact", page: "contact" },
];

export default function Navbar({ currentPage, navigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (page: Page) => {
    navigate(page);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="bg-navy text-white text-xs py-1.5 px-4 hidden md:flex justify-between items-center">
        <span className="flex items-center gap-1">
          <Phone size={11} />
          +977-1-XXXXXXX | info@shikharimf.com
        </span>
        <span>Your trusted partner for comprehensive insurance solutions</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("home")}
            className="flex items-center gap-2 focus:outline-none"
            data-ocid="nav.link"
          >
            <img
              src="https://asb.shikharimf.com/assets/logo.png"
              alt="Shikhar IMF"
              className="h-10 w-auto"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = "none";
                if (t.nextElementSibling)
                  (t.nextElementSibling as HTMLElement).style.display = "flex";
              }}
            />
            <div style={{ display: "none" }} className="items-center gap-1">
              <div className="w-8 h-8 bg-navy rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div>
                <div className="font-display font-bold text-navy text-base leading-tight">
                  SHIKHAR IMF
                </div>
                <div className="text-[10px] text-gray-500 leading-tight">
                  Ummidon Ki Udaan
                </div>
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.page}
                type="button"
                onClick={() => handleNav(link.page)}
                data-ocid="nav.link"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                  currentPage === link.page
                    ? "text-navy font-semibold"
                    : "text-gray-600 hover:text-navy"
                }`}
              >
                {link.label}
                {currentPage === link.page && (
                  <div className="h-0.5 bg-green rounded-full mt-0.5" />
                )}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNav("contact")}
              data-ocid="nav.primary_button"
              className="ml-2 btn-primary text-sm py-2 px-5"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu md:hidden bg-white border-t border-gray-100 ${isOpen ? "open" : ""}`}
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.page}
              type="button"
              onClick={() => handleNav(link.page)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                currentPage === link.page
                  ? "bg-navy/10 text-navy font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNav("contact")}
            className="w-full btn-primary text-sm py-2.5 mt-2"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
}
