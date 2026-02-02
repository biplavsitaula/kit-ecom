import { Navbar } from '@/app/components/Navbar';
import { HeroCarousel } from '@/app/components/HeroCarousel';
import { CategoriesSection } from '@/app/components/CategoriesSection';
import { FeaturedProducts } from '@/app/components/FeaturedProducts';
import { DealsSection } from '@/app/components/DealsSection';
import { ValueProposition } from '@/app/components/ValueProposition';
import { Testimonials } from '@/app/components/Testimonials';
import { Newsletter } from '@/app/components/Newsletter';
import { Footer } from '@/app/components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      
      <HeroCarousel />
      <CategoriesSection />
      <FeaturedProducts />
      <DealsSection />
      <ValueProposition />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
