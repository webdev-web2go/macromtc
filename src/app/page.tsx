import Hero from "./hero";
import About from "./about";
import Products from "./products";
import Services from "./services";

export default function Home() {
  return (
    <main className="font-verdana">
      <Hero />
      <About />
      <Products />
      <Services />
    </main>
  );
}
