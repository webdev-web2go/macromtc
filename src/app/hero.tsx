//@ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element";
import type { Swiper } from "swiper/types";

export default function Hero() {
  const [swiperReady, setSwiperReady] = useState(false);
  const swiperRef = useRef<{ swiper: Swiper }>(null);
  const intervalRef = useRef<Timeout>();

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      swiperRef.current?.swiper.slideNext();
    }, 3000);
  };

  useEffect(() => {
    register();

    setSwiperReady(true);

    startInterval();

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleSwiperNav = (slide: number) => {
    clearInterval(intervalRef.current);
    swiperRef.current?.swiper.slideToLoop(slide);
    startInterval();
  };

  return (
    <section id="home" className="relative text-white">
      {/* <header className="bg-main px-4">
        <Nav />
      </header> */}
      <div>
        {swiperReady ? (
          <swiper-container ref={swiperRef} loop>
            <swiper-slide>
              <div className="bg-[url('/hero/hero1.webp')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center md:justify-start text-center md:text-left">
                <div className="md:pl-20 px-2 w-full flex flex-col items-center md:block">
                  <h1 className="sm:text-[6rem] text-5xl leading-[1.1] font-kastelov">
                    Bienvenido
                    <br /> a MTC
                  </h1>
                  <p className="text-base sm:text-lg max-w-md">
                    Descubre soluciones integrales para tus necesidades de
                    abastecimiento y servicios comerciales.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="bg-[url('/hero/hero2.webp')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center md:justify-start text-center md:text-left">
                <div className="md:pl-20 px-2 w-full flex flex-col items-center md:block">
                  <h2 className="sm:text-[6rem] text-5xl leading-[1.1] font-kastelov text-blue max-w-xl">
                    Impulsa tu negocio con MTC
                  </h2>
                  <p className="text-base sm:text-lg max-w-sm text-blue">
                    Encuentra todo lo que necesitas para optimizar tus
                    operaciones y alcanzar tus objetivos comerciales.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="bg-[url('/hero/hero3.webp')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center md:justify-start text-center md:text-left">
                <div className="md:pl-10 lg:pl-20 w-full flex flex-col items-center md:block">
                  <h2 className="sm:text-[4.8rem] md:text-[5rem] lg:text-[6rem] text-[2.5rem] leading-[1.1] font-kastelov">
                    Tu socio de confianza en abastecimiento y servicios
                    comerciales
                  </h2>
                  <p className="text-lg max-w-md">
                    Descubre soluciones integrales para tus necesidades de
                    abastecimiento y servicios comerciales.
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        ) : (
          <div className="bg-[url('/hero/hero1.webp')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center md:justify-start text-center md:text-left">
            <div className="md:pl-20 px-2 w-full flex flex-col items-center md:block">
              <h1 className="sm:text-[6rem] text-5xl leading-[1.1] font-kastelov">
                Bienvenido
                <br /> a MTC
              </h1>
              <p className="text-base sm:text-lg max-w-md">
                Descubre soluciones integrales para tus necesidades de
                abastecimiento y servicios comerciales.
              </p>
            </div>
          </div>
        )}
        <div className="absolute bottom-4 md:bottom-32 left-1/2 z-20 -translate-x-1/2 flex gap-8">
          {new Array(3).fill(0).map((_, i) => (
            <button
              key={i}
              onClick={() => handleSwiperNav(i)}
              title={`Ir a la pestaña ${i + 1}`}
              className="size-4 rounded-full bg-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
