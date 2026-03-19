import { CategoriesSection } from '@/app/components/CategoriesSection';
import { FeaturedProducts } from '@/app/components/FeaturedProducts';
import { DealsSection } from '@/app/components/DealsSection';
import { ValueProposition } from '@/app/components/ValueProposition';
import { Testimonials } from '@/app/components/Testimonials';
import { Newsletter } from '@/app/components/Newsletter';
import { HeroCarousel } from '@/app/components/HeroCarousel';

export function HomePage() {
  return (
    <div className="bg-white">
      <section className="w-full my-6">
        <HeroCarousel />
      </section>
      <CategoriesSection />
      <FeaturedProducts />
      <DealsSection />
      <ValueProposition />
      <Testimonials />
      <Newsletter />

    </div>
  );
}
