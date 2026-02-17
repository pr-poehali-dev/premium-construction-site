import { useState } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import Icon from "@/components/ui/icon";

const faqItems = [
  {
    question: "Какие сроки выполнения ремонта квартиры?",
    answer:
      "Сроки зависят от объёма работ и площади объекта. Косметический ремонт квартиры 60-80 м² занимает 1-2 месяца, капитальный ремонт — от 3 до 5 месяцев. Точные сроки определяются после осмотра объекта и утверждения проекта.",
  },
  {
    question: "Можно ли вносить изменения в проект во время ремонта?",
    answer:
      "Да, мы гибко подходим к пожеланиям заказчика. Небольшие изменения вносятся оперативно. Существенные корректировки проекта обсуждаются отдельно и могут повлиять на сроки и стоимость работ.",
  },
  {
    question: "Предоставляете ли вы гарантию на выполненные работы?",
    answer:
      "Да, мы предоставляем гарантию от 3 до 5 лет в зависимости от выбранного тарифа. Гарантийные обязательства фиксируются в договоре. В случае выявления дефектов мы устраняем их за свой счёт в кратчайшие сроки.",
  },
  {
    question: "Как формируется стоимость работ?",
    answer:
      "Стоимость рассчитывается индивидуально на основании объёма работ, выбранных материалов и сложности проекта. После осмотра объекта мы составляем детальную смету, которая фиксируется в договоре. Дополнительных платежей не будет.",
  },
  {
    question: "Работаете ли вы с дизайнерскими проектами заказчика?",
    answer:
      "Да, мы работаем как с собственными дизайн-проектами, так и с проектами, предоставленными заказчиком. Наши специалисты адаптируют любой проект под технические возможности объекта и действующие строительные нормы.",
  },
  {
    question: "Какие материалы вы используете?",
    answer:
      "Мы работаем с сертифицированными материалами от проверенных поставщиков. В зависимости от тарифа это стандартные, улучшенные или премиальные материалы ведущих мировых и российских брендов. Подбор материалов согласовывается с заказчиком.",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={`text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            FAQ
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-gray-900 ${
              isVisible ? "animate-fade-up-delay-1" : "opacity-0"
            }`}
          >
            Часто задаваемые вопросы
          </h2>
          <div
            className={`w-20 h-0.5 bg-gold mx-auto mt-6 ${
              isVisible ? "animate-fade-up-delay-2" : "opacity-0"
            }`}
          />
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-gold/40 ${
                openIndex === index ? "border-gold/60 shadow-sm" : ""
              } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{
                animationDelay: isVisible ? `${index * 0.1}s` : undefined,
              }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-gray-900 pr-4">
                  {item.question}
                </span>
                <Icon
                  name="ChevronDown"
                  size={20}
                  className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-60 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-5 text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
