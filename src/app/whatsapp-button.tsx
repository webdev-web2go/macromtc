import { WhatsApp } from "@/components/icons";

export default function WhatsappButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=529996494256"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 md:bottom-12 md:right-12 drop-shadow-2xl inline-block z-50"
      aria-label="WhatsApp de MTC."
      title="Habla por whatsapp con un asesor, se abrirá en otra pestaña."
    >
      <WhatsApp className="size-16 text-white" fill="#27cd7a" />
    </a>
  );
}
