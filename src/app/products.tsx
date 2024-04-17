import MainButton from "@/components/main-button";
import Image from "next/image";

export default function Products() {
  return (
    <section id="productos" className="text-blue space-y-14 mb-24">
      <div className="bg-gray relative 2xl:py-36 py-10 px-2">
        <h2 className="2xl:absolute 2xl:-top-6 2xl:left-1/2 2xl:-translate-x-1/2 font-bold text-center text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[9rem] xl:text-[11rem] 2xl:text-[12rem] text-gray uppercase [text-shadow:-1px_0px_0px_#2E4482,_0px_1px_0px_#2E4482,_1px_0px_0px_#2E4482,_0px_-1px_0px_#2E4482] mb-6 lg:mb-0">
          Productos
        </h2>
        <div className="grid lg:grid-cols-2 justify-items-center max-w-[1082px] mx-auto gap-x-6 gap-y-6">
          <Image
            src="/products/products1.webp"
            alt="Maquinaria de industria"
            width={460}
            height={445}
            className="max-w-[550px] w-full lg:justify-self-end"
          />
          <div className="lg:max-w-[40ch] max-w-[55ch] space-y-12 lg:justify-self-end">
            <h3 className="text-3xl sm:text-5xl font-bold">
              Maquinaria y equipo para la industria manufacturera
            </h3>
            <p>
              Descubre nuestra amplia gama de maquinaria y equipo especializado
              para optimizar tus procesos. Desde herramientas básicas hasta
              tecnología de vanguardia, tenemos todo lo que necesitas para
              impulsar tu producción al siguiente nivel.
            </p>
            <MainButton href="#contacto">Explorar productos</MainButton>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 justify-items-center max-w-[1082px] mx-auto gap-x-6 gap-y-6 px-2">
        <article className="w-full flex flex-col gap-10 max-w-lg">
          <Image
            src="/products/electrodomestic.webp"
            alt="Electrodomésticos"
            width={461}
            height={467}
            className="w-full max-w-[550px]"
          />
          <h3 className="text-3xl sm:text-5xl font-bold">
            Electrodomésticos y línea blanca
          </h3>
          <p className="max-w-[40ch]">
            Encuentra los electrodomésticos más innovadores y eficientes, así
            como una completa selección de línea blanca para equipar hogares y
            negocios. Calidad y variedad al mejor precio.
          </p>
          <MainButton href="#contacto" className="self-start mt-auto">
            Ver catálogo
          </MainButton>
        </article>
        <article className="w-full flex flex-col gap-10 max-w-lg">
          <Image
            src="/products/clothes.webp"
            alt="Ropa"
            width={460}
            height={467}
            className="w-full max-w-[550px]"
          />
          <h3 className="text-3xl sm:text-5xl font-bold">
            Ropa y accesorios femeninos
          </h3>
          <p className="max-w-[40ch]">
            Renueva tu inventario con nuestras últimas tendencias en moda
            femenina. Desde prendas básicas hasta accesorios de moda, ofrecemos
            una selección única para satisfacer los gustos más exigentes.
          </p>
          <MainButton href="#contacto" className="self-start">
            Explorar colección
          </MainButton>
        </article>
      </div>
      <div className="bg-gray py-10 2xl:py-36 px-2">
        <div className="grid lg:grid-cols-2 justify-items-center max-w-[1082px] mx-auto gap-x-6 gap-y-6 px-2">
          <div className="lg:max-w-[40ch] max-w-[55ch] space-y-12 lg:justify-self-start order-2 lg:order-none">
            <h3 className="text-3xl sm:text-5xl font-bold">
              Mobiliario, equipo e instrumental odontológico
            </h3>
            <p>
              Equipa tu consultorio dental con la mejor calidad en mobiliario,
              equipo e instrumental. Todo lo que necesitas para brindar un
              servicio de excelencia a tus pacientes, disponible aquí.
            </p>
            <MainButton href="#contacto">Ver productos</MainButton>
          </div>
          <Image
            src="/products/odonto.webp"
            alt="Artículos de odontología"
            width={460}
            height={445}
            className="max-w-[550px] w-full lg:justify-self-end order-1 lg:order-none"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 justify-items-center max-w-[1082px] mx-auto gap-x-6 gap-y-6 px-2">
        <article className="w-full flex flex-col gap-10 max-w-lg">
          <Image
            src="/products/office.webp"
            alt="Artículos de oficina"
            width={461}
            height={468}
            className="w-full max-w-[550px]"
          />
          <h3 className="text-3xl sm:text-5xl font-bold">
            Mobiliario y equipo de oficina
          </h3>
          <p className="max-w-[40ch]">
            Optimiza tu espacio de trabajo con nuestra variedad de mobiliario y
            equipo de oficina. Desde escritorios ergonómicos hasta soluciones de
            almacenamiento, tenemos todo para hacer de tu oficina un lugar
            funcional y cómodo.
          </p>
          <MainButton href="#contacto" className="self-start mt-auto">
            Ver productos
          </MainButton>
        </article>
        <article className="w-full flex flex-col gap-10 max-w-lg">
          <Image
            src="/products/agro.webp"
            alt="Tractor en el campo"
            width={460}
            height={468}
            className="w-full max-w-[550px]"
          />
          <h3 className="text-3xl sm:text-5xl font-bold">
            Mobiliario y equipo agropecuario
          </h3>
          <p className="max-w-[40ch]">
            Impulsa tu negocio agropecuario con nuestra selección de mobiliario
            y equipo especializado. Desde herramientas hasta sistemas de riego,
            encuentras todo lo necesario para potenciar tu producción.
          </p>
          <MainButton href="#contacto" className="self-start">
            Explorar colección
          </MainButton>
        </article>
      </div>
    </section>
  );
}
