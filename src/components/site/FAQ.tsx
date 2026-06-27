import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

export const FAQ_ITEMS = [
  {
    q: "Как записаться на услугу?",
    a: "Заполните форму на сайте, напишите в WhatsApp или Telegram, либо позвоните по телефону +7 (925) 914-50-51. Администратор подтвердит запись в течение 15 минут.",
  },
  {
    q: "Можно ли перенести или отменить запись?",
    a: "Да, без вопросов. Пожалуйста, сообщите нам не позднее, чем за 3 часа до визита — это поможет другим клиентам занять освободившееся время.",
  },
  {
    q: "С какими брендами косметики вы работаете?",
    a: "L'Oréal Professionnel, MOCHEQI, профессиональные линии для ухода и окрашивания. Вся продукция сертифицирована.",
  },
  {
    q: "Делаете ли вы сложное окрашивание (Air Touch, шатуш, омбре)?",
    a: "Да. Наш колорист Мария специализируется на сложных техниках. Перед записью рекомендуем прислать фото волос в WhatsApp для точной оценки.",
  },
  {
    q: "Сколько длится процедура окрашивания?",
    a: "От 1,5 до 5 часов в зависимости от длины волос и техники. Тонирование — около часа, Air Touch на длинные волосы — до 5 часов.",
  },
  {
    q: "Принимаете ли вы оплату картой?",
    a: "Да, мы принимаем наличные, банковские карты, СБП и переводы. Также действует система предоплаты для сложных услуг.",
  },
  {
    q: "Где вы находитесь и как добраться?",
    a: "Мы в Чехове, мкр. Губернский, ул. Земская, 6. Удобный подъезд, бесплатная парковка во дворе.",
  },
  {
    q: "Делаете ли скидки постоянным клиентам?",
    a: "Да, у нас есть программа лояльности и сезонные акции. Подпишитесь на наш Telegram, чтобы первыми узнавать о специальных предложениях.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" /> FAQ <span className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="font-display text-[2.5rem] leading-[1.05] text-mocha sm:text-[3.5rem]">
            Частые <span className="font-serif italic text-mocha/70">вопросы</span>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div
                  className={`lux-card overflow-hidden rounded-2xl transition-all ${
                    isOpen ? "shadow-luxe" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-medium text-mocha sm:text-[17px]">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isOpen ? "border-gold bg-gold text-cream" : "border-mocha/15 text-mocha/60"
                      }`}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-[14px] leading-relaxed text-mocha/70 sm:text-[15px]">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
