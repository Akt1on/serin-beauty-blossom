import { Award, Sparkles, Heart, Gem } from "lucide-react";
import { Reveal } from "./Reveal";

const FEATURES = [
  {
    Icon: Gem,
    title: "Premium-эстетика",
    text: "Светлое атмосферное пространство и продуманный сервис на уровне столичных салонов.",
  },
  {
    Icon: Sparkles,
    title: "Мастерство",
    text: "Колористы, бровисты и нейл-мастера с многолетней практикой и постоянным обучением.",
  },
  {
    Icon: Heart,
    title: "Личный подход",
    text: "Слушаем, советуем, бережём ваше время. Каждый визит — как у самого внимательного мастера.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-4 py-28 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #E8CF9A 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" /> О салоне <span className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="font-display text-[2.5rem] leading-[1.05] text-mocha sm:text-[3.5rem]">
            Любимое место <span className="font-serif italic text-mocha/70">красоты</span>
            <br /> в&nbsp;мкр.&nbsp;Губернский
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-relaxed text-mocha/65 sm:text-base">
            «Серин» — это премиальный бьюти-атлеье в&nbsp;Чехове. Безупречная чистота, профессиональные
            мастера и&nbsp;тёплая атмосфера, в&nbsp;которой хочется задержаться. Ежедневно с&nbsp;9:00 до&nbsp;21:00.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="lux-card group relative h-full overflow-hidden rounded-[1.75rem] p-9 transition-all duration-500 hover:-translate-y-1.5">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-gold/15 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cream to-rose-soft text-gold ring-1 ring-gold/20">
                    <f.Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-[1.65rem] leading-tight text-mocha">{f.title}</h3>
                  <div className="hairline mt-3 w-10" />
                  <p className="mt-4 text-[14px] leading-relaxed text-mocha/65">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 flex justify-center">
            <div className="glass inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm text-mocha shadow-[0_10px_30px_-12px_rgba(201,169,110,0.5)]">
              <Award size={16} className="text-gold" />
              <span className="font-medium tracking-wide">Хорошее место 2026</span>
              <span className="text-mocha/30">·</span>
              <span className="text-mocha/70">Яндекс Карты</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
