import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Цены", href: "#pricing" },
  { label: "Контакты", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-dark-blue/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Icon name="Building2" size={28} className="text-gold" />
            <span className="font-serif text-xl font-bold text-white tracking-wider">
              ЭНЕРДЖИ <span className="text-gold">СТРОЙ</span> ПРО
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-white/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+79284647001"
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Icon name="Phone" size={18} />
              <span className="font-medium text-sm">+7 (928) 464-70-01</span>
            </a>
            <Button
              className="bg-gold text-dark-blue hover:bg-gold-light font-semibold text-sm px-6"
              onClick={() => handleNavClick("#contact")}
            >
              Заказать звонок
            </Button>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <Icon name={isMobileOpen ? "X" : "Menu"} size={28} />
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden bg-dark-blue/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block text-white/80 hover:text-gold transition-colors py-2 text-base font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href="tel:+79284647001"
                className="flex items-center gap-2 text-gold py-2"
              >
                <Icon name="Phone" size={18} />
                <span className="font-medium">+7 (928) 464-70-01</span>
              </a>
              <Button
                className="w-full mt-3 bg-gold text-dark-blue hover:bg-gold-light font-semibold"
                onClick={() => handleNavClick("#contact")}
              >
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
