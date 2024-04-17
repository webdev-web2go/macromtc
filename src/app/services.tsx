import MainButton from "@/components/main-button";
import Image from "next/image";

export default function Services() {
  return (
    <section id="servicios" className="mb-24">
      <div className="bg-blue relative 2xl:py-36 py-10 px-2 text-white">
        <h2 className="2xl:absolute 2xl:-top-6 2xl:left-1/2 2xl:-translate-x-1/2 font-bold text-center text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[9rem] xl:text-[11rem] 2xl:text-[12rem] text-blue uppercase [text-shadow:-1px_0px_0px_#fff,_0px_1px_0px_#fff,_1px_0px_0px_#fff,_0px_-1px_0px_#fff] mb-6 lg:mb-0">
          Servicios
        </h2>
        <div className="grid lg:grid-cols-2 justify-items-center max-w-[1082px] mx-auto gap-x-6 gap-y-6">
          <Image
            src="/products/admin.webp"
            alt="Maquinaria de industria"
            width={463}
            height={291}
            className="max-w-[550px] w-full lg:justify-self-end"
          />
          <div className="lg:max-w-[40ch] max-w-[55ch] space-y-12 lg:justify-self-end">
            <h3 className="text-3xl sm:text-5xl font-bold">
              Administrativos auxiliares
            </h3>
            <p>
              Delega tus tareas administrativas con nuestros servicios
              auxiliares. Permitimos que te enfoques en lo esencial de tu
              negocio mientras nosotros nos encargamos de los detalles
              administrativos.
            </p>
            <MainButton href="#contacto" text="blue" bg="white">
              Descubrir más
            </MainButton>
          </div>
        </div>
      </div>
      <div className="before:content-[''] before:w-full before:h-60 sm:before:h-96 before:bg-blue before:absolute relative before:top-0 before:-z-10">
        <div className="grid lg:grid-cols-2 justify-items-center max-w-[1082px] mx-auto gap-x-6 gap-y-6 px-2 text-blue">
          <article className="w-full flex flex-col gap-10 max-w-lg">
            <Image
              src="/products/logistic.webp"
              alt="Obrero con casco sonriendo"
              width={461}
              height={468}
              className="w-full max-w-[550px]"
            />
            <h3 className="text-3xl sm:text-5xl font-bold">
              Logística comercial
            </h3>
            <p className="max-w-[40ch]">
              Optimiza tus procesos de distribución y entrega con nuestra
              experiencia en logística comercial. Ofrecemos soluciones
              integrales para garantizar que tus productos lleguen a tiempo y en
              perfectas condiciones a su destino.
            </p>
            <MainButton href="#contacto" className="self-start mt-auto">
              Conocer más
            </MainButton>
          </article>
          <article className="w-full flex flex-col gap-10 max-w-lg">
            <Image
              src="/products/supply.webp"
              alt="Maquinaria trabajando en patio de maniobras"
              width={460}
              height={468}
              className="w-full max-w-[550px]"
            />
            <h3 className="text-3xl sm:text-5xl font-bold">
              Mejora en cadena de suministros
            </h3>
            <p className="max-w-[40ch]">
              Potencia la eficiencia de tu cadena de suministros con nuestras
              soluciones personalizadas. Desde la gestión de inventario hasta la
              optimización de rutas de distribución, te ayudamos a maximizar la
              productividad y reducir costos.
            </p>
            <MainButton href="#contacto" className="self-start">
              Explorar servicios
            </MainButton>
          </article>
        </div>
      </div>
    </section>
  );
}
