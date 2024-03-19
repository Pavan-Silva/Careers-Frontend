import Hero from "./(page)/Hero";
import AppNavbar from "./(page)/Navbar";

export default function Home() {
  return (
    <main className="antialiased">
      <AppNavbar />
      <Hero />
      <div className="bg-white w-full h-[800px]">abc</div>
    </main>
  );
}
