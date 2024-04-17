import Hero from "./hero";
import About from "./about";
import Products from "./products";
import Services from "./services";
import Contact from "./contact";

export default function Home() {
  return (
    <main className="font-verdana">
      <Hero />
      <About />
      <Products />
      <Services />
      <Contact />
    </main>
  );
}
