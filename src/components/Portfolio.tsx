import useScrollAnimation from "@/hooks/useScrollAnimation";

const projects = [
  {
    image:
      "https://cdn.poehali.dev/projects/65d3efa6-86c4-4e70-b32c-b386b9c0e163/files/d81033a3-0685-4c25-b0cd-2a3616140b5b.jpg",
    title: "Квартира на Невском",
    type: "Дизайн интерьера",
    area: "120 м²",
  },
  {
    image:
      "https://cdn.poehali.dev/projects/65d3efa6-86c4-4e70-b32c-b386b9c0e163/files/66cb7720-f40a-4ab8-9ad8-9282b3e5307d.jpg",
    title: "Загородный дом",
    type: "Строительство под ключ",
    area: "350 м²",
  },
  {
    image:
      "https://cdn.poehali.dev/projects/65d3efa6-86c4-4e70-b32c-b386b9c0e163/files/66cb7720-f40a-4ab8-9ad8-9282b3e5307d.jpg",
    title: "Коттедж в Сочи",
    type: "Проектирование и строительство",
    area: "280 м²",
  },
  {
    image:
      "https://cdn.poehali.dev/projects/65d3efa6-86c4-4e70-b32c-b386b9c0e163/files/d81033a3-0685-4c25-b0cd-2a3616140b5b.jpg",
    title: "Пентхаус на Рублёвке",
    type: "Премиум ремонт",
    area: "200 м²",
  },
];

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="portfolio" className="py-24 bg-dark-blue" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={`text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Наши работы
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-white ${
              isVisible ? "animate-fade-up-delay-1" : "opacity-0"
            }`}
          >
            Портфолио
          </h2>
          <div
            className={`w-20 h-0.5 bg-gold mx-auto mt-6 ${
              isVisible ? "animate-fade-up-delay-2" : "opacity-0"
            }`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${index * 0.15}s` : undefined,
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-gold text-sm font-medium tracking-wider uppercase mb-1">
                  {project.type}
                </p>
                <h3 className="font-serif text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Площадь: {project.area}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
