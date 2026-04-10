import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Marketplace from "@/components/Marketplace";
import Workshop from "@/components/Workshop";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <Marketplace />
        <Workshop />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
