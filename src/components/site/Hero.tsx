import { motion } from "framer-motion";
import { Star, ChevronDown, Award } from "lucide-react";

export function Hero() {
  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pt-12 pb-24 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(135deg, #FDF6F0 0%, #F5E6E8 100%)" }}
    >
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #D4A5A5 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose/30 bg-white/70 px-4 py-2 text-xs text-mocha backdrop-blur"
        >
          <Award size={14} className="text-gold" />
          Хорошее место 2026 — Яндекс Карты
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl leading-[1.05] text-mocha sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Серин —<br />
          <span className="italic text-rose">место, где рождается красота</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-8 max-w-xl text-base text-mocha/70 sm:text-lg"
        >
          Салон красоты в микрорайоне Губернский, Чехов
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => goto("booking")}
            className="rounded-full bg-rose px-8 py-4 text-sm font-medium text-white shadow-rose transition hover:opacity-90"
          >
            Записаться онлайн
          </button>
          <button
            onClick={() => goto("services")}
            className="rounded-full border border-mocha/20 bg-white/60 px-8 py-4 text-sm font-medium text-mocha backdrop-blur transition hover:bg-white"
          >
            Наши услуги
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl bg-white/80 px-6 py-3 text-sm text-mocha shadow-soft backdrop-blur"
        >
          <span className="flex items-center gap-1.5">
            <Star size={16} className="fill-gold text-gold" />
            <strong className="font-semibold">4.8</strong>
          </span>
          <span className="text-mocha/30">·</span>
          <span>212 отзывов</span>
          <span className="text-mocha/30">·</span>
          <span className="text-gold">Хорошее место 2026</span>
        </motion.div>
      </div>

      <motion.button
        onClick={() => goto("about")}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mocha/60 hover:text-rose"
        aria-label="Прокрутить вниз"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
