import { MapPin, Phone, Clock, MessageCircle, Send, Bus, ParkingCircle, Wifi } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contacts() {
  const rows = [
    { Icon: MapPin, text: "г. Чехов, мкр. Губернский, ул. Земская, 6", href: undefined },
    { Icon: Phone, text: "+7 (925) 914-50-51", href: "tel:+79259145051" },
    { Icon: Clock, text: "Ежедневно с 9:00 до 21:00", href: undefined },
    { Icon: MessageCircle, text: "WhatsApp", href: "https://wa.me/message/EFOTX3YYWFEPE1" },
    { Icon: Send, text: "Telegram", href: "https://t.me/salonserin" },
    { Icon: Bus, text: "Остановка «Поворот на Репниково» — 440 м, маршрут № 4", href: undefined },
    { Icon: ParkingCircle, text: "Парковка (в т.ч. для людей с ОВЗ)", href: undefined },
    { Icon: Wifi, text: "Wi-Fi", href: undefined },
  ];

  return (
    <section id="contacts" className="relative overflow-hidden bg-white px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" /> Контакты <span className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="font-display text-[2.5rem] leading-[1.05] text-mocha sm:text-[3.5rem]">
            Приходите <span className="font-serif italic text-mocha/70">в&nbsp;гости</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="lux-card relative overflow-hidden rounded-[1.75rem] p-9 sm:p-12">
              <div
                className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-40 blur-3xl"
                style={{ background: "radial-gradient(circle, #E8CF9A 0%, transparent 70%)" }}
              />
              <div className="relative space-y-5">
                {rows.map((r, i) => {
                  const Inner = (
                    <div className="flex items-start gap-4 text-[14px] text-mocha sm:text-[15px]">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cream to-rose-soft text-gold ring-1 ring-gold/20">
                        <r.Icon size={16} strokeWidth={1.6} />
                      </span>
                      <span className="pt-2">{r.text}</span>
                    </div>
                  );
                  return r.href ? (
                    <a
                      key={i}
                      href={r.href}
                      target={r.href.startsWith("http") ? "_blank" : undefined}
                      rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block transition hover:text-gold"
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div key={i}>{Inner}</div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-[440px] overflow-hidden rounded-[1.75rem] shadow-luxe ring-1 ring-mocha/5 lg:h-full">
              <iframe
                title="Яндекс Карта — Серин"
                src="https://yandex.ru/map-widget/v1/?ll=37.467%2C55.143&z=16&pt=37.467%2C55.143,pm2rdm&l=map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/15" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
