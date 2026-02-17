import useScrollAnimation from "@/hooks/useScrollAnimation";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Promotion = () => {
  const { ref, isVisible } = useScrollAnimation();

  const handleScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-dark-blue" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative border-2 border-gold rounded-2xl p-10 md:p-16 text-center overflow-hidden ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <Icon name="Percent" size={32} className="text-gold" />
            </div>

            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Специальное предложение
            </p>

            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Скидка <span className="gold-shimmer">15%</span> на все работы
            </h2>

            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              При заключении договора до конца месяца вы получаете скидку 15%
              на полный комплекс строительных и ремонтных работ.
            </p>

            <Button
              className="bg-gold text-dark-blue hover:bg-gold-light font-bold text-base px-10 py-6"
              onClick={handleScroll}
            >
              Получить скидку
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
