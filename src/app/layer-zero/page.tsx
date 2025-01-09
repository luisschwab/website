"use client";
import Footer from "@/components/footer";
import About from "@/components/layerZero/about";
import Background from "@/components/layerZero/background";
import Faq from "@/components/layerZero/faq";
import GetStarted from "@/components/layerZero/getStarted";
import Hero from "@/components/layerZero/hero";
import Timeline from "@/components/layerZero/timelime";
import Navigation from "@/components/navigation";

export default function LayerZero() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <GetStarted />
      <Timeline />
      <Background />
      <Faq />
      <Footer />
    </main>
  );
}
