import { WhatsApp, Menu, Close } from "@/components/icons";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Nav() {
  const [navMobileOpen, setNavMobileOpen] = useState(false);
  useEffect(() => {
    if (navMobileOpen) {
      document.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setNavMobileOpen(!navMobileOpen);
        }
      });
      document.querySelector("body")?.classList.add("nav-mobile");
    } else {
      document.querySelector("body")?.classList.remove("nav-mobile");
    }
  }, [navMobileOpen]);
  return (
    <nav className="min-h-[80px] max-w-7xl mx-auto flex items-center justify-between">
      <picture>
        <Image
          src="/hero/logo.webp"
          alt="Logo de MTC"
          width={130}
          height={36}
        />
      </picture>
      <button
        className="block lg:hidden"
        onClick={() => setNavMobileOpen(!navMobileOpen)}
        title="Abrir menú"
      >
        <Menu className="size-8 text-white" />
      </button>
      <div
        className={`flex justify-center items-center lg:hidden fixed inset-0 bg-blue/95 z-50 text-white transition ${
          navMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex gap-2 absolute top-10 left-10">
          <a
            href="https://api.whatsapp.com/send?phone=529996494256"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de MTC."
            title="Habla por whatsapp con un asesor, se abrirá en otra pestaña."
          >
            <WhatsApp className="size-8 text-main text-blue" />
          </a>
        </div>
        <button
          className="absolute top-10 right-10"
          onClick={() => setNavMobileOpen(!navMobileOpen)}
          title="Cerrar menú"
        >
          <Close />
        </button>
        <ul className="max-w-80 m-auto space-y-4">
          <li className="[&>div]:hover:w-3/4">
            <a href="#home" onClick={() => setNavMobileOpen(!navMobileOpen)}>
              Home
            </a>
            <div
              aria-hidden
              className="h-1 w-0 transition-all duration-300 bg-white"
            />
          </li>
          <li className="[&>div]:hover:w-3/4">
            <a href="#somos" onClick={() => setNavMobileOpen(!navMobileOpen)}>
              Somos
            </a>
            <div
              aria-hidden
              className="h-1 w-0 transition-all duration-300 bg-white"
            />
          </li>
          <li className="[&>div]:hover:w-3/4">
            <a
              href="#productos"
              onClick={() => setNavMobileOpen(!navMobileOpen)}
            >
              Productos
            </a>
            <div
              aria-hidden
              className="h-1 w-0 transition-all duration-300 bg-white"
            />
          </li>
          <li className="[&>div]:hover:w-3/4">
            <a
              href="#servicios"
              onClick={() => setNavMobileOpen(!navMobileOpen)}
            >
              Servicios
            </a>
            <div
              aria-hidden
              className="h-1 w-0 transition-all duration-300 bg-white"
            />
          </li>
          <li className="[&>div]:hover:w-3/4">
            <a
              href="#contacto"
              onClick={() => setNavMobileOpen(!navMobileOpen)}
            >
              Contacto
            </a>
            <div
              aria-hidden
              className="h-1 w-0 transition-all duration-300 bg-white"
            />
          </li>
        </ul>
      </div>
      <div className="lg:flex gap-6 items-center hidden">
        <ul className="flex gap-4 text-white">
          <li className="[&>div]:hover:w-3/4">
            <a href="#home">Home</a>
            <div
              aria-hidden
              className="h-1 w-0 transition-all duration-300 bg-white"
            />
          </li>
          <li className="[&>div]:hover:w-3/4">
            <a href="#somos">Somos</a>
            <div
              aria-hidden
              className="h-1 w-0 transition-all duration-300 bg-white"
            />
          </li>
          <li className="[&>div]:hover:w-3/4">
            <a href="#productos">Productos</a>
            <div
              aria-hidden
              className="h-1 w-0 transition-all duration-300 bg-white"
            />
          </li>
          <li className="[&>div]:hover:w-3/4">
            <a href="#servicios">Servicios</a>
            <div
              aria-hidden
              className="h-1 w-0 transition-all duration-300 bg-white"
            />
          </li>
          <li className="[&>div]:hover:w-3/4">
            <a href="#contacto">Contacto</a>
            <div
              aria-hidden
              className="h-1 w-0 transition-all duration-300 bg-white"
            />
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=529996494256"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de MTC."
              title="Habla por whatsapp con un asesor, se abrirá en otra pestaña."
            >
              <WhatsApp className="size-6 text-blue" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
