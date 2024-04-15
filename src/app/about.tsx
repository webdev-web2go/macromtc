import MainButton from "@/components/main-button";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="somos"
      className="after:hidden lg:after:block after:content-[''] after:w-60 after:h-full after:bg-blue after:absolute relative after:right-0 after:top-0 after:-z-10"
    >
      <div className="grid xl:grid-cols-2 lg:grid-cols-[40fr_60fr] justify-items-center items-center text-blue lg:py-0 py-24 min-h-screen w-full px-4 sm:px-0 gap-y-6 gap-x-4">
        <div className="space-y-10 xl:space-y-20 lg:pl-10 z-20">
          <h2 className="text-6xl sm:text-7xl font-bold">Somos</h2>
          <div className="space-y-6">
            <p className="max-w-[50ch]">
              En MTC, nos dedicamos a ofrecer soluciones integrales para tus
              necesidades de abastecimiento y servicios comerciales. Con años de
              experiencia en el mercado, nos enorgullece ser líderes en la
              industria, brindando productos de calidad y servicios confiables a
              nuestros clientes en todo momento.
            </p>

            <p className="max-w-[50ch]">
              Nuestro compromiso con la excelencia y la satisfacción del cliente
              nos impulsa a buscar constantemente nuevas formas de mejorar y
              superar tus expectativas. Ya sea que estés buscando equipos para
              tu empresa manufacturera o servicios de logística para optimizar
              tus operaciones, estamos aquí para ayudarte en cada paso del
              camino.
            </p>
            <p className="max-w-[45ch] font-bold">
              ¡Únete a nuestra comunidad de clientes satisfechos y descubre cómo
              podemos ayudarte a alcanzar tus objetivos comerciales!
            </p>
            <MainButton href="#contacto" className="text-center">
              Conocer más
            </MainButton>
          </div>
        </div>
        <picture className="max-w-[50ch] lg:max-w-full w-full flex justify-center lg:justify-end">
          <Image
            src="/about/about.webp"
            alt="Vehículo de Servicios Procargo del Sureste en la carretera"
            width={619}
            height={700}
            className="w-full"
          />
        </picture>
      </div>
    </section>
  );
}
