import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="bg-cream px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-soft sm:p-12">
          <h1 className="font-display text-4xl text-mocha sm:text-5xl">{title}</h1>
          <div className="prose prose-sm mt-8 max-w-none text-mocha/80 [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-mocha [&_p]:mb-3 [&_p]:leading-relaxed [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1">
            {children}
          </div>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
