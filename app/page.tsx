import Hero from "./components/hero/Hero";
import AppNavbar from "./components/hero/Navbar";

export default function Home() {
  return (
    <main className="antialiased">
      <AppNavbar />
      <Hero />
      <div className="bg-white w-full h-svh">abc</div>
    </main>
  );
}