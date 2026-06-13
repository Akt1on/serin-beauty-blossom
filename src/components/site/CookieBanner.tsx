import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("cookie_accepted")) setShow(true);
  }, []);

  if (!show) return null;
  const accept = () => {
    localStorage.setItem("cookie_accepted", "1");
    setShow(false);
  };

  return (
    <div className="fixed inset-x-3 bottom-24 z-40 mx-auto max-w-2xl rounded-2xl bg-white p-4 shadow-soft sm:bottom-5 sm:right-24 sm:left-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <p className="flex-1 text-xs text-mocha/80 sm:text-sm">
          Мы используем файлы cookie для улучшения работы сайта. Продолжая использование, вы
          соглашаетесь с нашей{" "}
          <Link to="/privacy" className="text-rose underline">Политикой конфиденциальности</Link>.
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/privacy"
            className="rounded-full px-4 py-2 text-xs text-mocha/70 hover:text-rose"
          >
            Подробнее
          </Link>
          <button
            onClick={accept}
            className="rounded-full bg-rose px-5 py-2 text-xs font-medium text-white hover:opacity-90"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
