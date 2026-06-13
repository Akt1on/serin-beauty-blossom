import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_4px_20px_-10px_rgba(212,165,165,0.4)]" : ""
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-display text-3xl font-medium tracking-wide text-mocha">
          Серин
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <button
              key={n.href}
              onClick={() => goto(n.href)}
              className="text-sm text-mocha/80 transition hover:text-rose"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => goto("#booking")}
            className="hidden rounded-full bg-rose px-6 py-2.5 text-sm font-medium text-white shadow-rose transition hover:opacity-90 sm:inline-flex"
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

      {open && (
        <div className="border-t border-rose/20 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((n) => (
              <button
                key={n.href}
                onClick={() => goto(n.href)}
                className="rounded-xl px-3 py-3 text-left text-mocha hover:bg-cream"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => goto("#booking")}
              className="mt-2 rounded-full bg-rose px-6 py-3 text-center text-white"
            >
              Записаться
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
