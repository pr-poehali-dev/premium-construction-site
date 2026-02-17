import useScrollAnimation from "@/hooks/useScrollAnimation";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Gem",
    title: "Премиальные материалы",
    description:
      "Используем только сертифицированные материалы от ведущих мировых и российских производителей.",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия 5 лет",
    description:
      "Предоставляем расширенную гарантию на все виды выполненных работ с оперативным сервисом.",
  },
  {
    icon: "FileText",
    title: "Фиксированная смета",
    description:
      "Стоимость проекта фиксируется в договоре. Никаких скрытых доплат и неожиданных расходов.",
  },
  {
    icon: "CalendarCheck",
    title: "Соблюдение сроков",
    description:
      "Чёткий график работ с контрольными точками. Ответственность за сроки закреплена в договоре.",
  },
];

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 gradient-overlay" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={`text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Наши стандарты
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-white ${
              isVisible ? "animate-fade-up-delay-1" : "opacity-0"
            }`}
          >
            Особенности
          </h2>
          <div
            className={`w-20 h-0.5 bg-gold mx-auto mt-6 ${
              isVisible ? "animate-fade-up-delay-2" : "opacity-0"
            }`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center group ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${index * 0.15}s` : undefined,
              }}
            >
              <div className="w-20 h-20 rounded-full bg-white/5 border border-gold/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/10 group-hover:border-gold transition-all duration-500">
                <Icon name={feature.icon} size={36} className="text-gold" />
              </div>
              <h3 className="font-semibold text-white text-lg mb-3">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
