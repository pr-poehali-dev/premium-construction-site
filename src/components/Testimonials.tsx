import useScrollAnimation from "@/hooks/useScrollAnimation";
import Icon from "@/components/ui/icon";

const testimonials = [
  {
    name: "Алексей Петров",
    role: "Владелец квартиры, Москва",
    rating: 5,
    text: "Обратились в Энерджи Строй Про для ремонта квартиры. Результат превзошёл все ожидания — качество отделки на высшем уровне, сроки соблюдены. Отдельное спасибо за терпение и внимание к деталям.",
  },
  {
    name: "Екатерина Волкова",
    role: "Заказчик загородного дома",
    rating: 5,
    text: "Строили загородный дом с нуля. Команда работала профессионально и слаженно. Все этапы были прозрачны, регулярно получали фотоотчёты. Рекомендую всем, кто ценит качество и надёжность.",
  },
  {
    name: "Дмитрий Соколов",
    role: "Директор офиса, Краснодар",
    rating: 5,
    text: "Заказывали ремонт офиса. Работы выполнены идеально — от электрики до финишной отделки. Бюджет не был превышен, всё строго по смете. Уже рекомендовал партнёрам по бизнесу.",
  },
];

const Testimonials = () => {
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
            Отзывы клиентов
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-gray-900 ${
              isVisible ? "animate-fade-up-delay-1" : "opacity-0"
            }`}
          >
            Рекомендации
          </h2>
          <div
            className={`w-20 h-0.5 bg-gold mx-auto mt-6 ${
              isVisible ? "animate-fade-up-delay-2" : "opacity-0"
            }`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-500 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${index * 0.15}s` : undefined,
              }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={18}
                    className="text-gold"
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-dark-blue flex items-center justify-center">
                  <span className="text-gold font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;