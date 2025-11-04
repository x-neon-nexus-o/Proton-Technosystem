import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import FeaturedBrands from '@/components/featured-brands';
import WhyChooseUs from '@/components/why-choose-us';
import HowItWorks from '@/components/how-it-works';
import TestimonialsSection from '@/components/testimonials-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import FloatingCta from '@/components/floating-cta';
import ProductCategories from '@/components/product-categories';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ProductCategories />
        <WhyChooseUs />
        <FeaturedBrands />
        <HowItWorks />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
