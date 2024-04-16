import Hero from "./hero";
import About from "./about";
import Products from "./products";

export default function Home() {
  return (
    <main className="font-verdana">
      <Hero />
      <About />
      <Products />
    </main>
  );
}
