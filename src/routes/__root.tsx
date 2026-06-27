import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Серин",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Земская, 6",
    addressLocality: "Чехов",
    addressRegion: "Московская область",
    postalCode: "142300",
    addressCountry: "RU",
  },
  telephone: "+79259145051",
  url: "https://salonserin.ru",
  openingHours: "Mo-Su 09:00-21:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "212",
  },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-medium text-mocha">404</h1>
        <h2 className="mt-4 text-xl text-mocha">Страница не найдена</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Возможно, страница была перемещена или больше не существует.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl bg-rose px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl text-mocha">Не удалось загрузить страницу</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Попробуйте обновить или вернуться на главную.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-2xl bg-rose px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Попробовать снова
          </button>
          <a
            href="/"
            className="rounded-2xl border border-input bg-white px-6 py-3 text-sm font-medium text-mocha transition hover:bg-cream"
          >
            На главную
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#c9a96e" },
      { name: "format-detection", content: "telephone=no" },
      { title: "Серин — салон красоты в мкр. Губернский, Чехов" },
      {
        name: "description",
        content:
          "Салон красоты «Серин» в Чехове, мкр. Губернский: окрашивание, стрижки, маникюр, брови и ресницы. Рейтинг 4.8 ⭐ (212 отзывов). Хорошее место 2026.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Серин" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:title", content: "Серин — салон красоты в мкр. Губернский, Чехов" },
      {
        property: "og:description",
        content: "Уют, профессионализм и индивидуальный подход. Запись онлайн.",
      },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9aa0d16d-053e-4aae-ae51-14b34757253c/id-preview-7c4af958--ae2b4f1d-1397-43ba-9d45-55d74974dabb.lovable.app-1781424335982.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Серин — салон красоты в мкр. Губернский, Чехов" },
      { name: "twitter:description", content: "Уют, профессионализм и индивидуальный подход. Запись онлайн." },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9aa0d16d-053e-4aae-ae51-14b34757253c/id-preview-7c4af958--ae2b4f1d-1397-43ba-9d45-55d74974dabb.lovable.app-1781424335982.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Italiana&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(JSON_LD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
