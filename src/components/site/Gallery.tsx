import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";

type Work = { id: string; cat: string; title: string; bg: string };

const FILTERS = ["Все", "Окрашивание", "Стрижки", "Ногти", "Брови"] as const;

const WORKS: Work[] = [
  { id: "1", cat: "Окрашивание", title: "Air Touch · золотой блонд", bg: "linear-gradient(135deg, #f5e6d3 0%, #c9a96e 60%, #6b5544 100%)" },
  { id: "2", cat: "Окрашивание", title: "Шатуш · карамель", bg: "linear-gradient(135deg, #faf0e0 0%, #d4a574 50%, #8b6f47 100%)" },
  { id: "3", cat: "Стрижки", title: "Каскад · средняя длина", bg: "linear-gradient(160deg, #f0e4d6 0%, #b8956a 50%, #2b1810 100%)" },
  { id: "4", cat: "Ногти", title: "Маникюр · nude", bg: "linear-gradient(135deg, #fff5ea 0%, #e8d5c4 60%, #b8956a 100%)" },
  { id: "5", cat: "Брови", title: "Окрашивание хной", bg: "linear-gradient(135deg, #e8d5c4 0%, #8b6f47 60%, #2b1810 100%)" },
  { id: "6", cat: "Окрашивание", title: "Total Blond", bg: "linear-gradient(135deg, #faf6f0 0%, #f0e4d6 50%, #e8cf9a 100%)" },
  { id: "7", cat: "Стрижки", title: "Боб-каре", bg: "linear-gradient(150deg, #d4a574 0%, #6b5544 100%)" },
  { id: "8", cat: "Ногти", title: "Френч с дизайном", bg: "linear-gradient(135deg, #fff5ea 0%, #c9a96e 100%)" },
];

export function Gallery() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("Все");
  const [lightbox, setLightbox] = useState<Work | null>(null);

  const filtered = WORKS.filter((w) => active === "Все" || w.cat === active);

  return (
    <section id="gallery" className="relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 text-center">
          <div className="mb-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" /> Портфолио <span className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="font-display text-[2.5rem] leading-[1.05] text-mocha sm:text-[3.5rem]">
            Наши <span className="font-serif italic text-mocha/70">работы</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`cursor-pointer rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.2em] transition-all ${
                  active === f
                    ? "border-mocha bg-mocha text-cream"
                    : "border-mocha/15 bg-white/60 text-mocha/70 hover:border-gold hover:text-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((w, i) => (
              <motion.button
                key={w.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                onClick={() => setLightbox(w)}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" style={{ background: w.bg }} />
                <div className="absolute inset-0 bg-gradient-to-t from-mocha/80 via-mocha/0 to-mocha/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-gold">{w.cat}</div>
                  <div className="mt-1 font-display text-[18px] leading-tight text-cream">{w.title}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-mocha/85 p-4 backdrop-blur-md"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Закрыть"
              className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0" style={{ background: lightbox.bg }} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-mocha/90 to-transparent p-6">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{lightbox.cat}</div>
                <div className="mt-2 font-display text-[26px] text-cream">{lightbox.title}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
