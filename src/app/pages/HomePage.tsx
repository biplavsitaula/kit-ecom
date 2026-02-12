import { CategoriesSection } from '@/app/components/CategoriesSection';
import { FeaturedProducts } from '@/app/components/FeaturedProducts';
import { DealsSection } from '@/app/components/DealsSection';
import { ValueProposition } from '@/app/components/ValueProposition';
import { Testimonials } from '@/app/components/Testimonials';
import { Newsletter } from '@/app/components/Newsletter';
import { MapView } from '../components/shop/MapView';

export function HomePage() {
  const locations = [
    {
      id: 1,
      position: [40.7589, -73.9851] as [number, number],
      vendorName: "TechStore Manhattan",
      productCount: 4,
      avgPrice: 612,
    },
    {
      id: 2,
      position: [40.6782, -73.9442] as [number, number],
      vendorName: "AudioPro Brooklyn",
      productCount: 3,
      avgPrice: 443,
    },
    {
      id: 3,
      position: [40.7282, -73.7949] as [number, number],
      vendorName: "TechStore Queens",
      productCount: 2,
      avgPrice: 1049,
    },
  ];

  return (
    <div className="bg-white">
      
      {/* ✅ Full Screen Map Section */}
      <section className="w-full h-150 my-10">
        <MapView locations={locations} />
      </section>

      {/* ✅ Other Sections Below */}
      <CategoriesSection />
      <FeaturedProducts />
      <DealsSection />
      <ValueProposition />
      <Testimonials />
      <Newsletter />
      
    </div>
  );
}
