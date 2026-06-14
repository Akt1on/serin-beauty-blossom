import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, ExternalLink, Quote } from "lucide-react";
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
    <section id="reviews" className="mesh-bg relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" /> Отзывы <span className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="font-display text-[2.5rem] leading-[1.05] text-mocha sm:text-[3.5rem]">
            Что говорят <span className="font-serif italic text-mocha/70">клиенты</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
          <Reveal>
            <div className="lux-card relative overflow-hidden rounded-[1.75rem] p-10 text-center lg:w-80">
              <div
                className="pointer-events-none absolute -top-16 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full opacity-50 blur-3xl"
                style={{ background: "radial-gradient(circle, #E8CF9A 0%, transparent 70%)" }}
              />
              <div className="relative">
                <div className="font-display text-[5.5rem] leading-none text-gold-gradient">4.8</div>
                <div className="mt-2 flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-mocha/50">
                  212 отзывов · Яндекс
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-3.5">
              {RATINGS.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                >
                  <div className="flex justify-between text-[13px]">
                    <span className="text-mocha">{r.label}</span>
                    <span className="text-mocha/55">
                      {r.percent}% · {r.count}
                    </span>
                  </div>
                  <div className="mt-1.5 h-[6px] overflow-hidden rounded-full bg-mocha/8">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.2 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #C9A96E, #E8CF9A)" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="lux-card relative mt-16 overflow-hidden rounded-[2rem] p-10 sm:p-14">
            <Quote
              size={80}
              className="absolute -right-3 -top-3 text-gold/15"
              strokeWidth={1}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl text-mocha">{review.name}</h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-mocha/45">
                      {review.date} · {review.level}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                </div>
                <p className="mt-7 font-serif text-[1.2rem] leading-[1.65] italic text-mocha/80 sm:text-[1.35rem]">
                  «{review.text}»
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-mocha/15 text-mocha transition hover:border-gold hover:bg-gold hover:text-cream"
                aria-label="Предыдущий"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === idx ? "w-10 bg-gold" : "w-1.5 bg-mocha/20 hover:bg-mocha/40"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-mocha/15 text-mocha transition hover:border-gold hover:bg-gold hover:text-cream"
                aria-label="Следующий"
              >
                <ChevronRight size={18} />
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
              className="inline-flex items-center gap-2 rounded-full border border-mocha/20 bg-white/60 px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] text-mocha backdrop-blur transition hover:border-gold hover:text-gold"
            >
              Все отзывы на Яндекс Картах
              <ExternalLink size={13} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
