import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { href: "#services", label: "Услуги" },
  { href: "#masters", label: "Мастера" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        scrolled
          ? "glass shadow-[0_8px_30px_-12px_rgba(43,24,16,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="group flex items-baseline gap-1">
          <span className="font-display text-[28px] leading-none tracking-wide text-mocha transition-colors group-hover:text-gold">
            Серин
          </span>
          <span className="font-display text-[28px] leading-none text-gold">.</span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <button
              key={n.href}
              onClick={() => goto(n.href)}
              className="group relative text-[12px] uppercase tracking-[0.22em] text-mocha/75 transition-colors hover:text-mocha"
            >
              {n.label}
              <span className="absolute -bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-gold transition-all duration-500 group-hover:w-6" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="tel:+79259145051"
            aria-label="Позвонить"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-mocha/15 text-mocha transition hover:border-gold hover:text-gold sm:flex"
          >
            <Phone size={15} />
          </a>
          <button
            onClick={() => goto("#booking")}
            className="hidden cursor-pointer overflow-hidden rounded-full bg-mocha px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-cream shadow-[0_10px_30px_-12px_rgba(43,24,16,0.5)] transition-all hover:bg-gold sm:inline-flex"
          >
            Записаться
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-mocha lg:hidden"
            aria-label="Меню"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="glass border-t border-mocha/5 px-5 py-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV.map((n) => (
                <button
                  key={n.href}
                  onClick={() => goto(n.href)}
                  className="rounded-2xl px-4 py-3.5 text-left text-[13px] uppercase tracking-[0.2em] text-mocha hover:bg-cream/70"
                >
                  {n.label}
                </button>
              ))}
              <button
                onClick={() => goto("#booking")}
                className="mt-2 rounded-full bg-mocha px-6 py-3.5 text-center text-[12px] uppercase tracking-[0.2em] text-cream"
              >
                Записаться
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
