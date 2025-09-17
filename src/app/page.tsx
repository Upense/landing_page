import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Cases } from "@/components/Cases";
import { Packages } from "@/components/Packages";
import { Process } from "@/components/Process";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="bg-black text-[#EBF1FF] min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <Cases />
      <Packages />
      <Process />
      <Footer />
    </div>
  );
}
