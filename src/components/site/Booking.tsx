import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

const CATEGORIES = [
  "Окрашивание",
  "Стрижка женская",
  "Стрижка мужская/детская",
  "Причёски и укладки",
  "Маникюр и педикюр",
  "Брови и ресницы",
  "Перманентный макияж",
  "Депиляция",
  "Уходы для волос",
];
const MASTERS = ["Без предпочтений", "Софья", "Мария (колорист)", "Мария (бровист)", "Наталья", "Лиана", "Инна"];

const TIMES: string[] = [];
for (let h = 9; h <= 21; h++) {
  TIMES.push(`${String(h).padStart(2, "0")}:00`);
  if (h < 21) TIMES.push(`${String(h).padStart(2, "0")}:30`);
}

function formatPhone(v: string) {
  const d = v.replace(/\D/g, "").replace(/^7/, "").slice(0, 10);
  const parts = [d.slice(0, 3), d.slice(3, 6), d.slice(6, 8), d.slice(8, 10)];
  let out = "+7";
  if (parts[0]) out += ` (${parts[0]}`;
  if (parts[0] && parts[0].length === 3) out += ")";
  if (parts[1]) out += ` ${parts[1]}`;
  if (parts[2]) out += `-${parts[2]}`;
  if (parts[3]) out += `-${parts[3]}`;
  return out;
}

export function Booking() {
  const today = new Date().toISOString().slice(0, 10);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "",
    master: "Без предпочтений",
    date: "",
    time: "",
    consent: false,
  });

  const update = (k: keyof typeof form, v: string | boolean) => setForm((p) => ({ ...p, [k]: v }));

  const submit = () => {
    if (!form.name.trim()) return toast.error("Укажите имя");
    if (form.phone.replace(/\D/g, "").length < 11) return toast.error("Укажите телефон");
    if (!form.category) return toast.error("Выберите категорию услуги");
    if (!form.date) return toast.error("Выберите дату");
    if (!form.time) return toast.error("Выберите время");
    if (!form.consent) return toast.error("Необходимо согласие на обработку данных");
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setForm({ name: "", phone: "", category: "", master: "Без предпочтений", date: "", time: "", consent: false });
  };

  const fieldCls =
    "peer w-full rounded-2xl border border-mocha/15 bg-white/80 px-4 py-3.5 text-[14px] text-mocha outline-none transition-all placeholder:text-mocha/30 focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/15";
  const labelCls = "mb-2 block text-[10px] font-medium uppercase tracking-[0.22em] text-mocha/55";

  return (
    <section id="booking" className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 mesh-bg" />
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-[400px] w-[400px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-2xl">
        <Reveal className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" /> Запись <span className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="font-display text-[2.5rem] leading-[1.05] text-mocha sm:text-[3.5rem]">
            Забронируйте <span className="font-serif italic text-mocha/70">визит</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[14px] text-mocha/60">
            Оставьте заявку — администратор подтвердит запись в&nbsp;течение 15&nbsp;минут.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="lux-card mt-12 overflow-hidden rounded-[2rem] p-7 sm:p-12">
            <div className="grid gap-5">
              <div>
                <label className={labelCls}>Имя *</label>
                <input
                  className={fieldCls}
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>
              <div>
                <label className={labelCls}>Телефон *</label>
                <input
                  type="tel"
                  className={fieldCls}
                  placeholder="+7 (___) ___-__-__"
                  value={form.phone}
                  onChange={(e) => update("phone", formatPhone(e.target.value))}
                />
              </div>
              <div>
                <label className={labelCls}>Категория услуги *</label>
                <select
                  className={fieldCls}
                  value={form.category}
                  onChange={(e) => update("category", e.target.value)}
                >
                  <option value="">Выберите категорию</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls}>Мастер</label>
                <select
                  className={fieldCls}
                  value={form.master}
                  onChange={(e) => update("master", e.target.value)}
                >
                  {MASTERS.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelCls}>Дата *</label>
                  <input
                    type="date"
                    min={today}
                    className={fieldCls}
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelCls}>Время *</label>
                  <select
                    className={fieldCls}
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                  >
                    <option value="">Выберите время</option>
                    {TIMES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <label className="mt-2 flex cursor-pointer items-start gap-3 text-[12px] text-mocha/65">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
                />
                <span>Я согласен(а) на обработку персональных данных в соответствии с 152-ФЗ</span>
              </label>

              <button
                onClick={submit}
                className="group relative mt-3 w-full cursor-pointer overflow-hidden rounded-full bg-mocha py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-cream shadow-luxe transition-all hover:bg-gold"
              >
                <span className="relative z-10">Записаться</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cream/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              <p className="text-center text-[11px] leading-relaxed text-mocha/45">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="/privacy" className="underline decoration-gold/40 underline-offset-2 hover:text-gold">
                  Политикой конфиденциальности
                </a>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-mocha/55">
              Или напишите напрямую
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/message/EFOTX3YYWFEPE1"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] text-white shadow-soft transition hover:-translate-y-0.5"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/salonserin"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#229ED9] px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] text-white shadow-soft transition hover:-translate-y-0.5"
              >
                Telegram
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
