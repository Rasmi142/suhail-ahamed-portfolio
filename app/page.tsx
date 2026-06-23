import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Background from "@/components/sections/Background";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import PageLoader from "@/components/ui/PageLoader";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black w-full overflow-x-hidden">
      <PageLoader />
      <Hero />
      <About />
      <Services />
      <Background />
      <Experience />
      <Contact />
    </main>
  );
}
