import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";

const RATINGS = [
  { label: "Персонал", percent: 94, count: 102 },
  { label: "Компетентность", percent: 98, count: 41 },
  { label: "Атмосфера", percent: 100, count: 29 },
  { label: "Маникюр", percent: 90, count: 22 },
  { label: "Уход за бровями", percent: 100, count: 21 },
  { label: "Окрашивание", percent: 89, count: 19 },
  { label: "Время ожидания", percent: 88, count: 18 },
  { label: "Чистота", percent: 100, count: 14 },
];

const REVIEWS = [
  {
    name: "Виктория Р.",
    date: "Декабрь 2025",
    level: "Эксперт Яндекс Карт, уровень 3",
    text: "Ходила на стрижку, а теперь хожу на наращивание ресничек! Персонал супер, всё красиво, чисто, аккуратно. Идеальное место, чтобы почувствовать себя нежной девушкой. Отдельное спасибо Софье — быстро, красиво, качественно, держится долго, ресницы не портятся.",
  },
  {
    name: "Галина Гаврушева",
    date: "Декабрь 2025",
    level: "Эксперт уровень 5",
    text: "Любимый салон, уже много лет только сюда! Сегодня делала окрашивание у Марии — настоящий профессионал, аккуратное отношение, только положительные эмоции! Бровки у бровиста Марии — тоже супер!",
  },
  {
    name: "Алла Николау",
    date: "Март 2025",
    level: "Эксперт уровень 5",
    text: "Девочки, обошла почти все салоны ЖК Губернский — это лучшее место. Прекрасно всё: уютное чистое помещение и мастера. Маникюр у Натальи — профессионал. Парикмахер Лиана — золотые руки, нужный тон всегда есть. Спасибо администратору Инне!",
  },
];

export function Reviews() {
  const [idx, setIdx] = useState(0);
  const review = REVIEWS[idx];
  const prev = () => setIdx((idx - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setIdx((idx + 1) % REVIEWS.length);

  return (
    <section id="reviews" className="bg-cream px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl text-mocha sm:text-5xl">Отзывы клиентов</h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
          <Reveal>
            <div className="rounded-3xl bg-white p-8 text-center shadow-soft lg:w-72">
              <div className="font-display text-7xl text-mocha">4.8</div>
              <div className="mt-2 flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-3 text-sm text-mocha/60">212 отзывов</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-3">
              {RATINGS.map((r) => (
                <div key={r.label}>
                  <div className="flex justify-between text-sm">
                    <span className="text-mocha">{r.label}</span>
                    <span className="text-mocha/60">
                      {r.percent}% · {r.count}
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-rose to-gold"
                      style={{ width: `${r.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 rounded-3xl bg-white p-8 shadow-soft sm:p-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <h3 className="font-display text-2xl text-mocha">{review.name}</h3>
                <p className="mt-1 text-xs text-mocha/50">
                  {review.date} · {review.level}
                </p>
              </div>
              <div className="flex gap-1 shrink-0">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
            </div>
            <p className="mt-6 text-base leading-relaxed text-mocha/80">«{review.text}»</p>

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-mocha transition hover:bg-rose hover:text-white"
                aria-label="Предыдущий"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-1.5">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === idx ? "w-8 bg-rose" : "w-1.5 bg-rose/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-mocha transition hover:bg-rose hover:text-white"
                aria-label="Следующий"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <a
              href="https://yandex.ru/maps/org/serin/43329996973"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-mocha/20 bg-white px-6 py-3 text-sm font-medium text-mocha transition hover:bg-rose hover:text-white hover:border-rose"
            >
              Читать все отзывы на Яндекс Картах
              <ExternalLink size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
