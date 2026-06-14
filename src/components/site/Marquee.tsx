const ITEMS = [
  "Премиум-окрашивание",
  "Air Touch",
  "L'Oréal Metal Detox",
  "Наращивание ресниц",
  "Долговременная укладка бровей",
  "Smart-педикюр",
  "Перманентный макияж",
  "Шитьё седины",
  "Свадебные образы",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-mocha/8 bg-mocha py-6 text-cream"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-mocha to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-mocha to-transparent" />
      <div className="marquee flex w-max gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-[1.6rem] tracking-wide text-cream/70"
          >
            {t}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </section>
  );
}
