import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import HowWeWork from "@/components/HowWeWork";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Promotion from "@/components/Promotion";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Advantages />
      <HowWeWork />
      <Portfolio />
      <Pricing />
      <Promotion />
      <Testimonials />
      <Features />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
