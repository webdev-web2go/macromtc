import Image from "next/image";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <section id="contacto" className="bg-[#9c9a9b] text-white py-24">
      <div className="grid xl:grid-cols-2 max-w-7xl mx-auto justify-items-center items-center px-4 xl:px-0">
        <div className="space-y-10 xl:space-y-16">
          <header className="space-y-6">
            <h2 className="text-5xl sm:text-7xl font-bold max-w-[11ch] xl:max-w-[15ch] leading-tight">
              ¿Tienes alguna pregunta o comentario?
            </h2>
            <h3 className="text-xl lg:text-2xl">Contáctanos</h3>
          </header>
          <p className="max-w-[50ch] text-base sm:text-lg">
            Estamos aquí para ayudarte. Completa el formulario a continuación y
            nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
