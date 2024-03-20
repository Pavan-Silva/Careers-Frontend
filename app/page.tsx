import About from "./components/about/About";
import Footer from "./components/Footer";
import Hero from "./components/hero/Hero";
import AppNavbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="antialiased">
      <AppNavbar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
