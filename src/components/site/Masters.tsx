import { Reveal } from "./Reveal";

const MASTERS = [
  { name: "Софья", role: "Lash-стилист", quote: "Быстро, красиво, качественно — ресницы держатся долго и не портятся" },
  { name: "Мария", role: "Топ-колорист", quote: "Настоящий профессионал, аккуратное отношение, только положительные эмоции" },
  { name: "Мария", role: "Топ-бровист", quote: "Результат всегда супер — брови именно такие, какими должны быть" },
  { name: "Наталья", role: "Nail-мастер", quote: "Профессионал своего дела, золотые руки" },
  { name: "Лиана", role: "Парикмахер-стилист", quote: "Золотые руки — нужный тон краски в наличии есть всегда" },
  { name: "Инна", role: "Администратор", quote: "Запишет в максимально удобное время, поможет с переносом" },
];

export function Masters() {
  return (
    <section id="masters" className="relative overflow-hidden bg-white px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" /> Команда <span className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="font-display text-[2.5rem] leading-[1.05] text-mocha sm:text-[3.5rem]">
            Мастера, которым <span className="font-serif italic text-mocha/70">доверяют</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MASTERS.map((m, i) => (
            <Reveal key={m.name + m.role} delay={(i % 3) * 0.08}>
              <div className="lux-card group relative h-full overflow-hidden rounded-[1.75rem] p-9 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe">
                <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative mx-auto mb-6 h-24 w-24">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/40 to-transparent blur-xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                  <div
                    className="relative flex h-24 w-24 items-center justify-center rounded-full font-display text-3xl text-cream ring-1 ring-gold/30 shadow-luxe"
                    style={{ background: "radial-gradient(circle at 30% 25%, #E8CF9A, #B8956A 70%, #2B1810)" }}
                  >
                    {m.name[0]}
                  </div>
                </div>

                <h3 className="font-display text-2xl text-mocha">{m.name}</h3>
                <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
                  {m.role}
                </p>
                <div className="hairline mx-auto mt-4 w-10" />
                <p className="mt-4 font-serif text-[15px] italic leading-relaxed text-mocha/65">
                  «{m.quote}»
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
