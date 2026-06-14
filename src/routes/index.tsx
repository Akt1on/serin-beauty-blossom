import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Masters } from "@/components/site/Masters";
import { Reviews } from "@/components/site/Reviews";
import { Booking } from "@/components/site/Booking";
import { Contacts } from "@/components/site/Contacts";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { CookieBanner } from "@/components/site/CookieBanner";
import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Серин — салон красоты в мкр. Губернский, Чехов | Запись онлайн" },
      {
        name: "description",
        content:
          "Салон красоты «Серин» в Чехове: окрашивание, стрижки, маникюр, брови и ресницы. Рейтинг 4.8 ⭐, 212 отзывов. Запишитесь онлайн.",
      },
      { property: "og:title", content: "Серин — салон красоты в мкр. Губернский, Чехов" },
      {
        property: "og:description",
        content: "Уют, профессионализм и индивидуальный подход. Запишитесь онлайн.",
      },
      { property: "og:url", content: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Masters />
        <Reviews />
        <Booking />
        <Contacts />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
      <Toaster position="top-center" richColors />
    </>
  );
}
