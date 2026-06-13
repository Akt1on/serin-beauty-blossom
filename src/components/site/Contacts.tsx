import { MapPin, Phone, Clock, MessageCircle, Send, Bus, ParkingCircle, Wifi } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contacts() {
  const rows = [
    { icon: <MapPin size={18} className="text-rose" />, text: "г. Чехов, мкр. Губернский, ул. Земская, 6" },
    {
      icon: <Phone size={18} className="text-rose" />,
      text: (
        <a href="tel:+79259145051" className="hover:text-rose">
          +7 (925) 914-50-51
        </a>
      ),
    },
    { icon: <Clock size={18} className="text-rose" />, text: "Ежедневно с 9:00 до 21:00" },
    {
      icon: <MessageCircle size={18} className="text-rose" />,
      text: (
        <a href="https://wa.me/message/EFOTX3YYWFEPE1" target="_blank" rel="noopener noreferrer" className="hover:text-rose">
          WhatsApp
        </a>
      ),
    },
    {
      icon: <Send size={18} className="text-rose" />,
      text: (
        <a href="https://t.me/salonserin" target="_blank" rel="noopener noreferrer" className="hover:text-rose">
          Telegram
        </a>
      ),
    },
    { icon: <Bus size={18} className="text-rose" />, text: "Остановка «Поворот на Репниково» — 440 м, маршрут № 4" },
    { icon: <ParkingCircle size={18} className="text-rose" />, text: "Парковка (в т.ч. для людей с ОВЗ)" },
    { icon: <Wifi size={18} className="text-rose" />, text: "Wi-Fi" },
  ];

  return (
    <section id="contacts" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl text-mocha sm:text-5xl">Контакты</h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4 rounded-3xl bg-cream p-8 shadow-soft sm:p-10">
              {rows.map((r, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-mocha sm:text-base">
                  <span className="mt-0.5 shrink-0">{r.icon}</span>
                  <span>{r.text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-[400px] overflow-hidden rounded-3xl shadow-soft lg:h-full">
              <iframe
                title="Яндекс Карта — Серин"
                src="https://yandex.ru/map-widget/v1/?ll=37.467%2C55.143&z=16&pt=37.467%2C55.143,pm2rdm&l=map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
