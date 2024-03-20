import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import AppNavbar from "./components/hero/Navbar";

export default function Home() {
  return (
    <main className="antialiased">
      <AppNavbar />
      <Hero />
      <About />
    </main>
  );
}
