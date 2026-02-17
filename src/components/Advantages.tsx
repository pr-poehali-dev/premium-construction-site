import useScrollAnimation from "@/hooks/useScrollAnimation";
import Icon from "@/components/ui/icon";

const stats = [
  { value: "15+", label: "лет опыта" },
  { value: "500+", label: "проектов" },
  { value: "98%", label: "довольных клиентов" },
  { value: "50+", label: "специалистов" },
];

const advantages = [
  {
    icon: "Gem",
    title: "Премиальные материалы",
    description: "Работаем только с проверенными поставщиками и используем сертифицированные материалы высшего класса.",
  },
  {
    icon: "Users",
    title: "Опытная команда",
    description: "Каждый специалист имеет профильное образование и стаж работы от 5 лет в строительной отрасли.",
  },
  {
    icon: "FileCheck",
    title: "Прозрачная смета",
    description: "Фиксированная стоимость проекта. Никаких скрытых платежей и неожиданных доплат в процессе работы.",
  },
  {
    icon: "Clock",
    title: "Точные сроки",
    description: "Сдаём объекты вовремя. За нарушение сроков предусмотрены штрафные санкции в договоре.",
  },
];

const Advantages = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="advantages" className="py-24 bg-dark-blue relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={`text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Почему мы
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-white ${
              isVisible ? "animate-fade-up-delay-1" : "opacity-0"
            }`}
          >
            Преимущества
          </h2>
          <div
            className={`w-20 h-0.5 bg-gold mx-auto mt-6 ${
              isVisible ? "animate-fade-up-delay-2" : "opacity-0"
            }`}
          />
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 ${
            isVisible ? "animate-fade-up-delay-2" : "opacity-0"
          }`}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-5xl md:text-6xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <p className="text-white/60 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, index) => (
            <div
              key={adv.title}
              className={`p-6 rounded-lg bg-white/5 border border-white/10 hover:border-gold/40 transition-all duration-500 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${0.3 + index * 0.1}s` : undefined,
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <Icon name={adv.icon} size={24} className="text-gold" />
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">
                {adv.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
