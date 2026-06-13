import { useState } from "react";
import { SERVICE_CATEGORIES } from "@/data/services";
import { Reveal } from "./Reveal";

export function Services() {
  const [active, setActive] = useState(SERVICE_CATEGORIES[0].id);
  const current = SERVICE_CATEGORIES.find((c) => c.id === active)!;

  return (
    <section id="services" className="bg-cream px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl text-mocha sm:text-5xl">Услуги и цены</h2>
          <p className="mt-4 text-mocha/60">Полный прайс — выберите категорию</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {SERVICE_CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`rounded-full px-5 py-2.5 text-sm transition ${
                  active === c.id
                    ? "bg-rose text-white shadow-rose"
                    : "bg-white text-mocha hover:bg-rose-soft"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-soft">
            <div className="divide-y divide-rose/10">
              {current.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline justify-between gap-4 px-6 py-4 transition hover:bg-cream/60 sm:px-8"
                >
                  <span className="text-sm text-mocha sm:text-base">{item.name}</span>
                  <span className="shrink-0 font-display text-base font-medium text-rose sm:text-lg">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
