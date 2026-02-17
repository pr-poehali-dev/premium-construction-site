import useScrollAnimation from "@/hooks/useScrollAnimation";
import Icon from "@/components/ui/icon";

const steps = [
  {
    number: "01",
    title: "Консультация",
    description: "Бесплатная встреча, обсуждение идей, осмотр объекта и определение задач проекта.",
    icon: "MessageSquare",
  },
  {
    number: "02",
    title: "Проектирование",
    description: "Разработка проекта, 3D-визуализация, подбор материалов и согласование решений.",
    icon: "PencilRuler",
  },
  {
    number: "03",
    title: "Смета",
    description: "Детальный расчёт стоимости работ и материалов. Фиксация цены в договоре.",
    icon: "Calculator",
  },
  {
    number: "04",
    title: "Строительство",
    description: "Выполнение всех работ с контролем качества на каждом этапе и регулярными отчётами.",
    icon: "HardHat",
  },
  {
    number: "05",
    title: "Сдача объекта",
    description: "Приёмка работ, подписание актов, передача гарантийных обязательств на 5 лет.",
    icon: "KeyRound",
  },
];

const HowWeWork = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={`text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Процесс работы
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-gray-900 ${
              isVisible ? "animate-fade-up-delay-1" : "opacity-0"
            }`}
          >
            Как мы работаем?
          </h2>
          <div
            className={`w-20 h-0.5 bg-gold mx-auto mt-6 ${
              isVisible ? "animate-fade-up-delay-2" : "opacity-0"
            }`}
          />
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gray-200">
            <div
              className="h-full bg-gold transition-all duration-1000"
              style={{ width: isVisible ? "100%" : "0%" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col items-center text-center ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 0.15}s` : undefined,
                }}
              >
                <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-gold flex items-center justify-center mb-6 shadow-lg">
                  <span className="font-serif text-2xl font-bold text-gold">
                    {step.number}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-lg bg-dark-blue/5 flex items-center justify-center mb-4">
                  <Icon name={step.icon} size={20} className="text-dark-blue" />
                </div>

                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
