import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/projects/65d3efa6-86c4-4e70-b32c-b386b9c0e163/files/d81033a3-0685-4c25-b0cd-2a3616140b5b.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-dark-blue/40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Строительство и ремонт премиум-класса
          </p>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-up-delay-1">
          Премиальное
          <br />
          <span className="gold-shimmer">строительство</span>
          <br />
          и ремонт
        </h1>

        <div className="animate-fade-up-delay-2">
          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            От эконом до дизайнерских проектов. Премиальные материалы
            и опытная команда специалистов для воплощения ваших идей.
          </p>
        </div>

        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button
            className="bg-gold text-dark-blue hover:bg-gold-light font-bold text-base px-10 py-6 tracking-wide"
            onClick={() => handleScroll("#contact")}
          >
            Обсудить проект
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:border-gold font-medium text-base px-10 py-6 bg-transparent"
            onClick={() => handleScroll("#portfolio")}
          >
            Смотреть работы
          </Button>
        </div>
      </div>

      <button
        onClick={() => handleScroll("#services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-gold transition-colors cursor-pointer group"
      >
        <span className="text-xs tracking-widest uppercase">Подробнее</span>
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
