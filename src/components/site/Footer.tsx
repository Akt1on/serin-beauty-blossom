import { Link } from "@tanstack/react-router";
import { MessageCircle, Send } from "lucide-react";

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
    <footer className="bg-mocha px-4 pt-16 pb-8 text-cream sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-4xl text-white">Серин</div>
            <p className="mt-3 text-sm text-cream/70">Салон красоты в мкр. Губернский, Чехов</p>
          </div>

          <nav className="flex flex-wrap items-start gap-x-6 gap-y-2 md:justify-center">
            {nav.map((n) => (
              <button key={n.id} onClick={() => goto(n.id)} className="text-sm text-cream/80 hover:text-rose">
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex gap-3 md:justify-end">
            <a
              href="https://wa.me/message/EFOTX3YYWFEPE1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:opacity-90"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="https://t.me/salonserin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#229ED9] text-white transition hover:opacity-90"
              aria-label="Telegram"
            >
              <Send size={18} />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-xs text-cream/60">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p>© 2025 Серин. Все права защищены.</p>
              <p className="mt-1">г. Чехов, мкр. Губернский, ул. Земская, 6</p>
            </div>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-rose">Политика конфиденциальности</Link>
              <Link to="/terms" className="hover:text-rose">Пользовательское соглашение</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
