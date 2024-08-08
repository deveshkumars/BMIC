import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Faq />
    </main>
  );
}
