import GirdLine from "./components/Reusable/landing/GirdLine";
import Hero from "./components/Reusable/landing/Hero";
import Navbar from "./components/Reusable/landing/Navbar";

export default async function Home() {
  return (
    <main className=" min-h-screen">
      <div className=" bg-gradient-to-b from-[#1e5af9] via-[#1e5af9] to-blue-500  min-h-screen w-full">
        <div className="w-full mx-auto max-w-6xl min-h-screen relative">
          <Navbar />
          <Hero />
          <GirdLine />

        </div>
      </div>
    </main>
  );
}
