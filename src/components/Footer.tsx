import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Цены", href: "#pricing" },
  { label: "Контакты", href: "#contact" },
];

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-graphite py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "#")}
              className="flex items-center gap-2 mb-4"
            >
              <Icon name="Building2" size={24} className="text-gold" />
              <span className="font-serif text-lg font-bold text-white tracking-wider">
                ЭНЕРДЖИ <span className="text-gold">СТРОЙ</span> ПРО
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Премиальное строительство и ремонт. От эконом до дизайнерских
              проектов. Работаем по всей России.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide uppercase text-sm">
              Навигация
            </h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-white/50 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide uppercase text-sm">
              Контакты
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+79284647001"
                className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm"
              >
                <Icon name="Phone" size={16} className="text-gold" />
                +7 (928) 464-70-01
              </a>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Icon name="MapPin" size={16} className="text-gold" />
                г. Краснодар
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Icon name="FileText" size={16} className="text-gold" />
                ИНН: 2311371587
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; 2025 Энерджи Строй Про. Все права защищены.
          </p>
          <p className="text-white/20 text-xs">
            Строительство и ремонт премиум-класса
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
