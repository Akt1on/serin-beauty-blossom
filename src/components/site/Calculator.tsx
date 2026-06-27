import { useMemo, useState } from "react";
import { Calculator as CalcIcon, Check } from "lucide-react";
import { Reveal } from "./Reveal";

type Option = { id: string; label: string; price: number };

const GROUPS: { id: string; title: string; options: Option[] }[] = [
  {
    id: "color",
    title: "Окрашивание",
    options: [
      { id: "tone", label: "Тонирование", price: 1700 },
      { id: "roots", label: "Окрашивание корней", price: 2700 },
      { id: "single", label: "В один тон", price: 3300 },
      { id: "blond", label: "Total Blond", price: 3500 },
      { id: "air", label: "Air Touch", price: 9000 },
      { id: "ombre", label: "Омбре / шатуш", price: 8000 },
    ],
  },
  {
    id: "cut",
    title: "Стрижка и укладка",
    options: [
      { id: "cut", label: "Стрижка + укладка", price: 1800 },
      { id: "fringe", label: "Чёлка", price: 600 },
      { id: "blow", label: "Укладка феном", price: 1500 },
      { id: "curls", label: "Локоны", price: 2000 },
    ],
  },
  {
    id: "care",
    title: "Уход",
    options: [
      { id: "mochegi", label: "MOCHEQI уход", price: 1500 },
      { id: "happy", label: "«Счастье для волос»", price: 2000 },
      { id: "detox", label: "L'Oréal Metal Detox", price: 3050 },
    ],
  },
  {
    id: "nails",
    title: "Ногти и брови",
    options: [
      { id: "mani", label: "Маникюр + гель-лак", price: 2000 },
      { id: "pedi", label: "Smart педикюр + гель-лак", price: 2700 },
      { id: "brows", label: "Брови: коррекция + окрашивание", price: 1300 },
      { id: "lashes", label: "Ламинирование ресниц", price: 2000 },
    ],
  },
];

export function Calculator() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setSelected((p) => ({ ...p, [id]: !p[id] }));

  const { total, count, items } = useMemo(() => {
    const flat = GROUPS.flatMap((g) => g.options);
    const chosen = flat.filter((o) => selected[o.id]);
    return {
      total: chosen.reduce((s, o) => s + o.price, 0),
      count: chosen.length,
      items: chosen,
    };
  }, [selected]);

  const sendToBooking = () => {
    if (items.length === 0) {
      document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const text = `Здравствуйте! Хочу записаться:\n${items.map((i) => `• ${i.label} — ${i.price.toLocaleString("ru-RU")} ₽`).join("\n")}\nИтого: ${total.toLocaleString("ru-RU")} ₽`;
    window.open(`https://wa.me/79259145051?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="calculator" className="relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <div className="mb-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" /> Калькулятор <span className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="font-display text-[2.5rem] leading-[1.05] text-mocha sm:text-[3.5rem]">
            Соберите свой <span className="font-serif italic text-mocha/70">визит</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[14px] text-mocha/60">
            Отметьте нужные услуги — мы покажем ориентировочную стоимость и поможем записаться.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            {GROUPS.map((g) => (
              <Reveal key={g.id}>
                <div className="lux-card rounded-2xl p-6 sm:p-7">
                  <h3 className="mb-4 text-[11px] uppercase tracking-[0.25em] text-mocha/55">
                    {g.title}
                  </h3>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {g.options.map((o) => {
                      const on = !!selected[o.id];
                      return (
                        <button
                          key={o.id}
                          onClick={() => toggle(o.id)}
                          className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                            on
                              ? "border-gold bg-gold/10"
                              : "border-mocha/10 bg-white/50 hover:border-mocha/25"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
                                on ? "border-gold bg-gold text-cream" : "border-mocha/25"
                              }`}
                            >
                              {on && <Check size={13} strokeWidth={3} />}
                            </span>
                            <span className="text-[13px] text-mocha">{o.label}</span>
                          </span>
                          <span className="text-[12px] tabular-nums text-mocha/60">
                            {o.price.toLocaleString("ru-RU")} ₽
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="lux-card sticky top-24 rounded-2xl p-7">
              <div className="flex items-center gap-3 text-mocha">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <CalcIcon size={18} />
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-mocha/55">
                  Ваш визит
                </div>
              </div>

              <div className="mt-6 max-h-56 space-y-2 overflow-auto pr-2">
                {items.length === 0 ? (
                  <p className="text-[13px] text-mocha/50">Выберите услуги слева</p>
                ) : (
                  items.map((i) => (
                    <div key={i.id} className="flex justify-between gap-3 text-[13px]">
                      <span className="text-mocha/75">{i.label}</span>
                      <span className="shrink-0 tabular-nums text-mocha/60">
                        {i.price.toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-6 border-t border-mocha/10 pt-5">
                <div className="flex items-end justify-between">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-mocha/55">
                    Итого ({count})
                  </span>
                  <span className="font-display text-[2rem] leading-none text-mocha tabular-nums">
                    {total.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
                <p className="mt-2 text-[10px] leading-relaxed text-mocha/40">
                  Ориентировочно. Финальная стоимость зависит от длины волос и расхода материала.
                </p>
                <button
                  onClick={sendToBooking}
                  disabled={items.length === 0}
                  className="mt-5 w-full cursor-pointer rounded-full bg-mocha py-3.5 text-[11px] uppercase tracking-[0.22em] text-cream transition hover:bg-gold disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Отправить в WhatsApp
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
