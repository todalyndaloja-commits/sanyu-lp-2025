import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        
        <section id="sobre">
          <AboutSection />
        </section>
        
        <section id="como-funciona">
          <HowItWorksSection />
        </section>
        
        <section id="diferenciais">
          <FeaturesSection />
        </section>
        
        <section id="depoimentos">
          <TestimonialsSection />
        </section>
        
        <section id="galeria">
          <GallerySection />
        </section>
        
        <section id="faq">
          <FAQSection />
        </section>
        
        <section id="contato">
          <CTASection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
