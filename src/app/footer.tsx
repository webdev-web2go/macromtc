export default function Footer() {
  return (
    <footer className="bg-secondary text-main pb-16 pt-24 bg-blue text-white">
      <div className="max-w-7xl flex justify-around w-full sm:w-7/12 md:w-full mx-auto px-4 gap-8 md:gap-4 flex-col md:flex-row">
        <div className="space-y-8">
          <img
            src="/footer/logo.png"
            alt="Logo de MTC"
            loading="lazy"
            className="aspect-[108/45] w-40"
          />
          <address className="flex flex-col not-italic">
            <a href="tel:9996494256" className="font-bold text-2xl">
              (999) 649 4256
            </a>
            <a href="mailto:contacto@macromtc.com">contacto@macromtc.com</a>
          </address>
          <span className="text-sm md:inline-block hidden">
            &copy; {new Date(Date.now()).getFullYear()} MTC - Todos los derechos
            reservados.
          </span>
        </div>
        <div className="flex gap-8">
          <div className="space-y-5">
            <h4 className="uppercase font-bold">Menú</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#somos">Somos</a>
              </li>
              <li>
                <a href="#productos">Productos</a>
              </li>
              <li>
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <span className="text-sm inline-block md:hidden">
          &copy; {new Date(Date.now()).getFullYear()} MTC - Todos los derechos
          reservados.
        </span>
      </div>
    </footer>
  );
}
