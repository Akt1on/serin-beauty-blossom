import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICE_CATEGORIES } from "@/data/services";
import { Reveal } from "./Reveal";

export function Services() {
  const [active, setActive] = useState(SERVICE_CATEGORIES[0].id);
  const current = SERVICE_CATEGORIES.find((c) => c.id === active)!;

  return (
    <section id="services" className="mesh-bg relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" /> Прайс <span className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="font-display text-[2.5rem] leading-[1.05] text-mocha sm:text-[3.5rem]">
            Услуги <span className="font-serif italic text-mocha/70">и&nbsp;цены</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[14px] text-mocha/60">
            Полный прайс-лист салона. Выберите категорию для подробностей.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-2.5">
            {SERVICE_CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`relative rounded-full px-5 py-2.5 text-[12px] uppercase tracking-[0.14em] transition-all duration-300 ${
                  active === c.id
                    ? "bg-mocha text-cream shadow-[0_10px_30px_-12px_rgba(43,24,16,0.5)]"
                    : "border border-mocha/15 bg-white/60 text-mocha/80 backdrop-blur hover:border-gold hover:text-gold"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="lux-card mt-12 overflow-hidden rounded-[2rem]">
            <div className="flex items-center justify-between border-b border-mocha/8 bg-gradient-to-r from-cream/60 to-white px-6 py-5 sm:px-10">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Категория</div>
                <div className="mt-1 font-display text-2xl text-mocha">{current.title}</div>
              </div>
              <div className="hidden text-[10px] uppercase tracking-[0.3em] text-mocha/40 sm:block">
                {current.items.length} позиций
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.35 }}
                className="divide-y divide-mocha/5"
              >
                {current.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-baseline gap-4 px-6 py-4 transition-colors hover:bg-cream/40 sm:px-10"
                  >
                    <span className="flex-1 text-[14px] text-mocha/85 sm:text-[15px]">
                      {item.name}
                    </span>
                    <span
                      aria-hidden
                      className="hidden flex-1 border-b border-dotted border-mocha/15 opacity-60 transition-opacity group-hover:opacity-100 sm:block"
                    />
                    <span className="shrink-0 font-display text-base text-mocha transition-colors group-hover:text-gold sm:text-lg">
                      {item.price}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
