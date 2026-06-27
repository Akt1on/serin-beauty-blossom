import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/message/EFOTX3YYWFEPE1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className="group fixed right-5 bottom-5 z-30 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 sm:flex"
      style={{ boxShadow: "0 14px 36px -6px rgba(37,211,102,0.55)" }}
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-25" />
      <MessageCircle size={24} />
    </a>
  );
}
