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
  const parts = [
    d.slice(0, 3),
    d.slice(3, 6),
    d.slice(6, 8),
    d.slice(8, 10),
  ];
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
    "w-full rounded-2xl border border-rose/20 bg-white px-4 py-3 text-sm text-mocha outline-none transition focus:border-rose focus:ring-2 focus:ring-rose/20";

  return (
    <section
      id="booking"
      className="px-4 py-24 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(135deg, #F0E4D6 0%, #FAF6F0 100%)" }}
    >
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl text-mocha sm:text-5xl">Запись онлайн</h2>
          <p className="mt-4 text-mocha/60">Заполните форму — администратор подтвердит запись</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-3xl bg-white p-6 shadow-soft sm:p-10">
            <div className="grid gap-4">
              <div>
                <label className="mb-2 block text-xs font-medium text-mocha/70">Имя *</label>
                <input
                  className={fieldCls}
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium text-mocha/70">Телефон *</label>
                <input
                  type="tel"
                  className={fieldCls}
                  placeholder="+7 (___) ___-__-__"
                  value={form.phone}
                  onChange={(e) => update("phone", formatPhone(e.target.value))}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium text-mocha/70">Категория услуги *</label>
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
                <label className="mb-2 block text-xs font-medium text-mocha/70">Мастер</label>
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
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium text-mocha/70">Дата *</label>
                  <input
                    type="date"
                    min={today}
                    className={fieldCls}
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium text-mocha/70">Время *</label>
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

              <label className="mt-2 flex cursor-pointer items-start gap-3 text-xs text-mocha/70">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-rose"
                />
                <span>Я согласен(а) на обработку персональных данных</span>
              </label>

              <div
                onClick={submit}
                className="mt-2 w-full cursor-pointer rounded-full bg-rose py-4 text-center text-sm font-medium text-white shadow-rose transition hover:opacity-90"
              >
                Записаться
              </div>

              <p className="text-center text-[11px] leading-relaxed text-mocha/50">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии с{" "}
                <a href="/privacy" className="underline">Политикой конфиденциальности</a> согласно 152-ФЗ.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <p className="mb-4 text-sm text-mocha/70">Или напишите нам напрямую:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/message/EFOTX3YYWFEPE1"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:opacity-90"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/salonserin"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#229ED9] px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:opacity-90"
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
