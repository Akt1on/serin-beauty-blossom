import { Link } from "@tanstack/react-router";
import { MessageCircle, Send, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const nav = [
    { id: "services", label: "Услуги" },
    { id: "masters", label: "Мастера" },
    { id: "reviews", label: "Отзывы" },
    { id: "booking", label: "Записаться" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <footer className="relative overflow-hidden bg-mocha px-4 pt-20 pb-10 text-cream sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-4xl text-cream">Серин</span>
              <span className="font-display text-4xl text-gold">.</span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-cream/60">
              Премиальный салон красоты в&nbsp;Чехове. Окрашивание, стрижки, маникюр, брови, ресницы.
            </p>
            <div className="mt-6 flex gap-2.5">
              <a
                href="https://wa.me/message/EFOTX3YYWFEPE1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/5 ring-1 ring-cream/15 text-cream transition hover:bg-gold hover:text-mocha"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="https://t.me/salonserin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/5 ring-1 ring-cream/15 text-cream transition hover:bg-gold hover:text-mocha"
                aria-label="Telegram"
              >
                <Send size={16} />
              </a>
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Навигация</div>
            <nav className="mt-5 flex flex-col gap-2.5">
              {nav.map((n) => (
                <button
                  key={n.id}
                  onClick={() => goto(n.id)}
                  className="w-fit text-left text-[13px] text-cream/75 transition hover:text-gold"
                >
                  {n.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Контакты</div>
            <div className="mt-5 space-y-3 text-[13px] text-cream/75">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold" />
                <span>г. Чехов, мкр. Губернский, ул. Земская, 6</span>
              </div>
              <a href="tel:+79259145051" className="flex items-center gap-2.5 hover:text-gold">
                <Phone size={14} className="text-gold" />
                +7 (925) 914-50-51
              </a>
              <div className="flex items-center gap-2.5">
                <Clock size={14} className="text-gold" />
                Ежедневно 9:00–21:00
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 hairline opacity-60" />

        <div className="mt-7 flex flex-col gap-3 text-[11px] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Серин. Все права защищены.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-gold">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-gold">Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
