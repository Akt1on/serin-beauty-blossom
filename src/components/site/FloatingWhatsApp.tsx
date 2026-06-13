import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/message/EFOTX3YYWFEPE1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
      style={{ boxShadow: "0 10px 30px -5px rgba(37,211,102,0.5)" }}
    >
      <MessageCircle size={26} />
    </a>
  );
}
