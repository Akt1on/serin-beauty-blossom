import { Reveal } from "./Reveal";

const MASTERS = [
  { name: "Софья", role: "Наращивание ресниц", quote: "Быстро, красиво, качественно — ресницы держатся долго и не портятся" },
  { name: "Мария", role: "Колорист", quote: "Настоящий профессионал, аккуратное отношение, только положительные эмоции" },
  { name: "Мария", role: "Бровист", quote: "Результат всегда супер — брови именно такие, какими должны быть" },
  { name: "Наталья", role: "Маникюр", quote: "Профессионал своего дела, золотые руки" },
  { name: "Лиана", role: "Парикмахер", quote: "Золотые руки — нужный тон краски в наличии есть всегда" },
  { name: "Инна", role: "Администратор", quote: "Запишет в максимально удобное время, поможет с переносом" },
];

export function Masters() {
  return (
    <section id="masters" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl text-mocha sm:text-5xl">Наши мастера</h2>
          <p className="mt-4 text-mocha/60">Команда, которой доверяют</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MASTERS.map((m, i) => (
            <Reveal key={m.name + m.role} delay={(i % 3) * 0.1}>
              <div className="h-full rounded-3xl border border-rose/15 bg-cream p-8 text-center shadow-soft transition hover:-translate-y-2 hover:shadow-rose">
                <div
                  className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full font-display text-3xl text-white"
                  style={{ background: "linear-gradient(135deg, #D4A5A5 0%, #C9A96E 100%)" }}
                >
                  {m.name[0]}
                </div>
                <h3 className="font-display text-2xl text-mocha">{m.name}</h3>
                <p className="mt-1 text-sm font-medium tracking-wide text-rose uppercase">{m.role}</p>
                <p className="mt-4 text-sm italic text-mocha/70">«{m.quote}»</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
