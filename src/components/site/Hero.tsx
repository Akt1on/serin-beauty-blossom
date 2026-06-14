import { motion } from "framer-motion";
import { Star, ChevronDown, Award } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import heroPortrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative grain min-h-[100svh] overflow-hidden px-4 pt-10 pb-20 sm:px-6 lg:px-10"
      style={{ background: "linear-gradient(135deg, #FAF6F0 0%, #F0E4D6 55%, #E8D5C4 100%)" }}
    >
      {/* Decorative gold orbs */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[24rem] w-[24rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #B8956A 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Editorial typography column */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-cream/70 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-mocha backdrop-blur"
          >
            <Award size={13} className="text-gold" />
            Хорошее место 2026 · Яндекс Карты
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-[3.4rem] leading-[0.95] tracking-[-0.02em] text-mocha sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem]"
          >
            Серин<span className="text-gold">.</span>
            <br />
            <span className="font-serif italic font-light text-mocha/80">место, где рождается</span>
            <br />
            красота
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hairline mx-auto mt-8 w-28 origin-left lg:mx-0"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mx-auto mt-7 max-w-md text-[15px] leading-relaxed text-mocha/65 sm:text-base lg:mx-0"
          >
            Премиальный салон красоты в&nbsp;Чехове, микрорайон Губернский. Окрашивание, стрижки,
            маникюр, брови и&nbsp;ресницы — с&nbsp;вниманием к&nbsp;каждой детали.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <MagneticButton
              onClick={() => goto("booking")}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-mocha px-9 py-4 text-[13px] font-medium uppercase tracking-[0.16em] text-cream shadow-luxe transition-colors hover:bg-gold"
            >
              Записаться онлайн
            </MagneticButton>
            <MagneticButton
              onClick={() => goto("services")}
              strength={0.2}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-mocha/25 bg-cream/40 px-9 py-4 text-[13px] font-medium uppercase tracking-[0.16em] text-mocha backdrop-blur transition-colors hover:border-gold hover:text-gold"
            >
              Наши услуги
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="mt-10 inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-mocha/70 lg:justify-start"
          >
            <span className="flex items-center gap-1.5">
              <Star size={15} className="fill-gold text-gold" />
              <strong className="font-display text-lg text-mocha">4,8</strong>
            </span>
            <span className="text-mocha/25">/</span>
            <span>212 отзывов</span>
            <span className="text-mocha/25">/</span>
            <span className="text-gold uppercase tracking-wider text-[11px]">Premium</span>
          </motion.div>
        </div>

        {/* Editorial portrait column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[440px] lg:max-w-none"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/40 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-luxe ring-1 ring-mocha/5">
            <img
              src={heroPortrait}
              alt="Премиальный образ салона Серин"
              width={1024}
              height={1280}
              fetchPriority="high"
              className="block aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mocha/25 via-transparent to-transparent" />

            {/* Floating editorial caption */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-cream">
              <div>
                <div className="font-display text-xs uppercase tracking-[0.3em] opacity-80">
                  Beauty Atelier
                </div>
                <div className="mt-1 font-display text-2xl italic leading-tight">Эстетика&nbsp;момента</div>
              </div>
              <div className="rounded-full bg-cream/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] backdrop-blur">
                Est. Чехов
              </div>
            </div>
          </div>

          {/* Floating gold badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="absolute -top-5 -left-5 hidden h-24 w-24 items-center justify-center rounded-full text-center text-mocha shadow-luxe sm:flex"
            style={{ background: "radial-gradient(circle at 30% 30%, #F0D78C, #C9A96E)" }}
          >
            <div>
              <div className="font-display text-[10px] uppercase tracking-[0.2em]">Award</div>
              <div className="font-display text-xl leading-none">2026</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => goto("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-mocha/50 transition hover:text-gold"
        aria-label="Прокрутить вниз"
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
}
