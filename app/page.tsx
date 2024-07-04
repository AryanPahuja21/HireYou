import HeroSection from "@/components/Hero/HeroSection";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="h-[92vh] bg-gray-200">
        <HeroSection />
      </div>
    </main>
  );
}
