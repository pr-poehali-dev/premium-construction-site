import { useState } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-dark-blue" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={`text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Свяжитесь с нами
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-white ${
              isVisible ? "animate-fade-up-delay-1" : "opacity-0"
            }`}
          >
            Обратная связь
          </h2>
          <div
            className={`w-20 h-0.5 bg-gold mx-auto mt-6 ${
              isVisible ? "animate-fade-up-delay-2" : "opacity-0"
            }`}
          />
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 ${
            isVisible ? "animate-fade-up-delay-2" : "opacity-0"
          }`}
        >
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-6">
              Оставьте заявку
            </h3>
            <p className="text-white/50 mb-8 leading-relaxed">
              Заполните форму и мы свяжемся с вами в течение 30 минут
              для бесплатной консультации по вашему проекту.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-white/5 border-white/15 text-white placeholder:text-white/30 h-12 focus:border-gold"
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Телефон"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-white/5 border-white/15 text-white placeholder:text-white/30 h-12 focus:border-gold"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Опишите ваш проект"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-white/5 border-white/15 text-white placeholder:text-white/30 min-h-[120px] focus:border-gold resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gold text-dark-blue hover:bg-gold-light font-bold py-6 text-base"
                disabled={submitted}
              >
                {submitted ? (
                  <span className="flex items-center gap-2">
                    <Icon name="Check" size={20} />
                    Заявка отправлена
                  </span>
                ) : (
                  "Отправить заявку"
                )}
              </Button>
              <p className="text-white/30 text-xs text-center">
                Нажимая на кнопку, вы даёте согласие на обработку персональных
                данных
              </p>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-bold text-white mb-8">
              Контактная информация
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={22} className="text-gold" />
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Телефон</p>
                  <a
                    href="tel:+79284647001"
                    className="text-white text-lg font-medium hover:text-gold transition-colors"
                  >
                    +7 (928) 464-70-01
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={22} className="text-gold" />
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Адрес</p>
                  <p className="text-white text-lg font-medium">
                    г. Краснодар
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={22} className="text-gold" />
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Режим работы</p>
                  <p className="text-white text-lg font-medium">
                    Пн-Сб: 9:00 — 20:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="FileText" size={22} className="text-gold" />
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">ИНН</p>
                  <p className="text-white text-lg font-medium">2311371587</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
