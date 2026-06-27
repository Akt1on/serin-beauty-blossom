import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Promo } from "@/components/site/Promo";
import { Gallery } from "@/components/site/Gallery";
import { Calculator } from "@/components/site/Calculator";
import { Masters } from "@/components/site/Masters";
import { Reviews } from "@/components/site/Reviews";
import { FAQ, FAQ_ITEMS } from "@/components/site/FAQ";
import { Booking } from "@/components/site/Booking";
import { Contacts } from "@/components/site/Contacts";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { CookieBanner } from "@/components/site/CookieBanner";
import { Marquee } from "@/components/site/Marquee";
import { MobileCTA } from "@/components/site/MobileCTA";

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Серин — салон красоты в мкр. Губернский, Чехов | Запись онлайн" },
      {
        name: "description",
        content:
          "Салон красоты «Серин» в Чехове: окрашивание, стрижки, маникюр, брови и ресницы. Рейтинг 4.8 ⭐ (212 отзывов). Запишитесь онлайн за 30 секунд.",
      },
      { property: "og:title", content: "Серин — салон красоты в мкр. Губернский, Чехов" },
      {
        property: "og:description",
        content: "Уют, профессионализм и индивидуальный подход. Запишитесь онлайн.",
      },
      { property: "og:url", content: "https://serin-beauty-blossom.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://serin-beauty-blossom.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(FAQ_JSON_LD),
      },
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
        <Promo />
        <Gallery />
        <Calculator />
        <Masters />
        <Reviews />
        <FAQ />
        <Booking />
        <Contacts />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileCTA />
      <CookieBanner />
      <Toaster position="top-center" richColors />
    </>
  );
}
