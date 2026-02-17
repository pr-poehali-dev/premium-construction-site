import useScrollAnimation from "@/hooks/useScrollAnimation";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Эконом",
    price: "от 15 000",
    unit: "₽/м²",
    description: "Качественный ремонт по доступной цене",
    features: [
      "Стандартные материалы",
      "Базовый дизайн-проект",
      "Черновая и чистовая отделка",
      "Электрика и сантехника",
      "Гарантия 3 года",
    ],
    highlighted: false,
  },
  {
    name: "Комфорт",
    price: "от 25 000",
    unit: "₽/м²",
    description: "Оптимальное соотношение цены и качества",
    features: [
      "Улучшенные материалы",
      "Полный дизайн-проект с 3D",
      "Все виды отделочных работ",
      "Инженерные коммуникации",
      "Авторский надзор",
      "Гарантия 5 лет",
    ],
    highlighted: true,
  },
  {
    name: "Премиум",
    price: "от 45 000",
    unit: "₽/м²",
    description: "Эксклюзивные решения для взыскательных клиентов",
    features: [
      "Премиальные материалы",
      "Индивидуальный дизайн-проект",
      "Все виды работ под ключ",
      "Умный дом и автоматизация",
      "Персональный менеджер",
      "Авторский надзор",
      "Гарантия 5 лет",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();

  const handleScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={`text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Тарифы
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-gray-900 ${
              isVisible ? "animate-fade-up-delay-1" : "opacity-0"
            }`}
          >
            Цены
          </h2>
          <div
            className={`w-20 h-0.5 bg-gold mx-auto mt-6 ${
              isVisible ? "animate-fade-up-delay-2" : "opacity-0"
            }`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative rounded-xl p-8 flex flex-col transition-all duration-500 ${
                tier.highlighted
                  ? "bg-dark-blue border-2 border-gold shadow-2xl shadow-amber-900/20 md:-mt-4 md:mb-[-16px] md:py-12"
                  : "bg-gray-50 border border-gray-200 hover:border-gold/50 hover:shadow-xl"
              } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{
                animationDelay: isVisible ? `${index * 0.15}s` : undefined,
              }}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-dark-blue text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  Популярный
                </div>
              )}

              <div className="text-center mb-6">
                <h3
                  className={`font-serif text-2xl font-bold mb-2 ${
                    tier.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm ${
                    tier.highlighted ? "text-white/60" : "text-gray-500"
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <div className="text-center mb-8">
                <span
                  className={`font-serif text-4xl font-bold ${
                    tier.highlighted ? "text-gold" : "text-gray-900"
                  }`}
                >
                  {tier.price}
                </span>
                <span
                  className={`text-sm ml-1 ${
                    tier.highlighted ? "text-white/60" : "text-gray-500"
                  }`}
                >
                  {tier.unit}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Icon
                      name="Check"
                      size={18}
                      className={`mt-0.5 flex-shrink-0 ${
                        tier.highlighted ? "text-gold" : "text-gold"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        tier.highlighted ? "text-white/80" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 font-semibold ${
                  tier.highlighted
                    ? "bg-gold text-dark-blue hover:bg-gold-light"
                    : "bg-dark-blue text-white hover:bg-dark-blue-light"
                }`}
                onClick={handleScroll}
              >
                Рассчитать стоимость
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
