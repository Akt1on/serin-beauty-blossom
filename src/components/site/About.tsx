import { Award } from "lucide-react";
import { Reveal } from "./Reveal";

const FEATURES = [
  {
    emoji: "🌸",
    title: "Уют и чистота",
    text: "Светлое, ухоженное пространство, где приятно находиться",
  },
  {
    emoji: "✨",
    title: "Профессионализм",
    text: "Мастера с опытом и постоянным обучением",
  },
  {
    emoji: "💛",
    title: "Индивидуальный подход",
    text: "Запишем в удобное время, учтём все пожелания",
  },
];

export function About() {
  return (
    <section id="about" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl text-mocha sm:text-5xl">О салоне</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mocha/70 sm:text-lg">
            Серин — любимый салон жителей микрорайона Губернский. Уютная атмосфера, безупречная
            чистота и профессиональные мастера — всё для того, чтобы вы чувствовали себя нежной и
            красивой. Работаем для вас каждый день с 9:00 до 21:00.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl bg-cream p-8 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-rose">
                <div className="mb-4 text-4xl">{f.emoji}</div>
                <h3 className="font-display text-2xl text-mocha">{f.title}</h3>
                <p className="mt-3 text-sm text-mocha/70">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-12 inline-flex w-full items-center justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gradient-to-r from-cream to-rose-soft px-6 py-3 text-sm text-mocha">
              <Award size={18} className="text-gold" />
              <span className="font-medium">Хорошее место 2026</span>
              <span className="text-mocha/50">·</span>
              <span>Яндекс Карты</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
