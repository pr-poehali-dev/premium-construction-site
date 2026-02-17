import useScrollAnimation from "@/hooks/useScrollAnimation";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "PencilRuler",
    title: "Проектирование",
    description:
      "Разработка архитектурных и конструктивных решений с учётом всех норм и пожеланий заказчика.",
  },
  {
    icon: "Building",
    title: "Строительство",
    description:
      "Возведение домов и коммерческих объектов любой сложности с соблюдением технологий и сроков.",
  },
  {
    icon: "Wrench",
    title: "Ремонт под ключ",
    description:
      "Комплексный ремонт квартир и офисов — от черновой отделки до финишных работ и меблировки.",
  },
  {
    icon: "Palette",
    title: "Дизайн интерьера",
    description:
      "Создание уникальных интерьерных решений, 3D-визуализация и подбор материалов.",
  },
  {
    icon: "Zap",
    title: "Инженерные системы",
    description:
      "Проектирование и монтаж электрики, водоснабжения, отопления и вентиляции.",
  },
  {
    icon: "Shield",
    title: "Авторский надзор",
    description:
      "Контроль качества на всех этапах строительства с регулярными отчётами заказчику.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={`text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Наши услуги
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-gray-900 ${
              isVisible ? "animate-fade-up-delay-1" : "opacity-0"
            }`}
          >
            Что включено в услугу
          </h2>
          <div
            className={`w-20 h-0.5 bg-gold mx-auto mt-6 ${
              isVisible ? "animate-fade-up-delay-2" : "opacity-0"
            }`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 bg-gray-50 rounded-lg border border-gray-100 hover:border-gold transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5 hover:-translate-y-1 ${
                isVisible
                  ? `animate-fade-up`
                  : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${index * 0.1}s` : undefined,
              }}
            >
              <div className="w-14 h-14 rounded-lg bg-dark-blue flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                <Icon
                  name={service.icon}
                  size={26}
                  className="text-gold group-hover:text-dark-blue transition-colors duration-500"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
