import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

function getEndOfMonth() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0).getTime();
}

export function Promo() {
  const [target] = useState(getEndOfMonth());
  const [t, setT] = useState(target - Date.now());

  useEffect(() => {
    const id = setInterval(() => setT(target - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  const safe = Math.max(0, t);
  const d = Math.floor(safe / 86400000);
  const h = Math.floor((safe / 3600000) % 24);
  const m = Math.floor((safe / 60000) % 60);
  const s = Math.floor((safe / 1000) % 60);

  const cells = [
    { v: d, l: "дней" },
    { v: h, l: "часов" },
    { v: m, l: "минут" },
    { v: s, l: "секунд" },
  ];

  const goBooking = () => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="promo" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-mocha p-8 sm:p-14">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at top right, #c9a96e 0%, transparent 50%), radial-gradient(ellipse at bottom left, #b8956a 0%, transparent 60%)",
              }}
            />
            <div className="absolute inset-0 grain opacity-[0.04]" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-gold">
                  <Sparkles size={12} /> Спецпредложение месяца
                </div>
                <h2 className="font-display text-[2.25rem] leading-[1.05] text-cream sm:text-[3.25rem]">
                  −15% на сложное <span className="font-serif italic text-gold">окрашивание</span>
                </h2>
                <p className="mt-5 max-w-md text-[14px] leading-relaxed text-cream/70 sm:text-[15px]">
                  Air Touch, шатуш, омбре и растяжка цвета — со скидкой при записи до конца месяца. Назовите промокод <span className="font-medium text-gold">СЕРИН15</span> администратору.
                </p>
                <button
                  onClick={goBooking}
                  className="mt-8 cursor-pointer rounded-full bg-gold px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-mocha shadow-glow transition-all hover:bg-gold-soft"
                >
                  Записаться со скидкой
                </button>
              </div>

              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-cream/50">
                  До конца акции
                </p>
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {cells.map((c) => (
                    <div
                      key={c.l}
                      className="rounded-2xl border border-cream/10 bg-cream/[0.04] px-2 py-4 text-center backdrop-blur-sm sm:py-5"
                    >
                      <div className="font-display text-[2rem] leading-none text-cream tabular-nums sm:text-[2.75rem]">
                        {String(c.v).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-[9px] uppercase tracking-[0.18em] text-cream/45 sm:text-[10px]">
                        {c.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
