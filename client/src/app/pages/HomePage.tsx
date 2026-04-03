import { CategoriesSection } from '@/app/components/CategoriesSection';
import { FeaturedProducts } from '@/app/components/FeaturedProducts';
import { DealsSection } from '@/app/components/DealsSection';
import { ValueProposition } from '@/app/components/ValueProposition';
import { Testimonials } from '@/app/components/Testimonials';
import { Newsletter } from '@/app/components/Newsletter';
import { HeroCarousel } from '@/app/components/HeroCarousel';
import type { Product } from '@/app/components/shop/ProductCard';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
}

export function HomePage({ onAddToCart }: HomePageProps) {
  return (
    <div className="bg-white">
      <section className="w-full my-6">
        <HeroCarousel />
      </section>
      <CategoriesSection />
      <FeaturedProducts onAddToCart={onAddToCart} />
      <DealsSection />
      <ValueProposition />
      <Testimonials />
      <Newsletter />

    </div>
  );
}
