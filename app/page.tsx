import AppNavbar from "./(page)/Navbar";

export default function Home() {
  return (
    <main>
      <AppNavbar />
      <div className="h-svh absolute flex flex-col justify-center w-full top-0 bg-gradient-to-tr from-dark-orange from-5% to-light-orange to-45%">
        <div className="fixed">
          <span className="text-7xl font-medium text-white block ml-60">Join with us</span>
          <div className="h-32 m-10"></div>
        </div>
      </div>
      <div className="h-svh bg-black"></div>
      <div className="h-svh bg-black"></div>
      <div className="h-svh bg-black"></div>
      <div className="h-svh bg-black"></div>
      <div className="h-svh bg-black"></div>
    </main>
  );
}
