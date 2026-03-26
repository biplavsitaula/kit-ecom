import { Store, MapPin, ShieldCheck, Star } from "lucide-react";

const vendors = [
  {
    id: 1,
    name: "TechStore",
    category: "Electronics",
    location: "New York, NY",
    rating: 4.8,
    products: 1240,
  },
  {
    id: 2,
    name: "FashionHub",
    category: "Fashion",
    location: "Los Angeles, CA",
    rating: 4.7,
    products: 980,
  },
  {
    id: 3,
    name: "HomeDecor",
    category: "Home",
    location: "Chicago, IL",
    rating: 4.6,
    products: 760,
  },
  {
    id: 4,
    name: "AudioPro",
    category: "Audio",
    location: "Austin, TX",
    rating: 4.9,
    products: 530,
  },
  {
    id: 5,
    name: "SportMax",
    category: "Sports",
    location: "Seattle, WA",
    rating: 4.5,
    products: 610,
  },
  {
    id: 6,
    name: "BeautyNest",
    category: "Beauty",
    location: "Miami, FL",
    rating: 4.7,
    products: 450,
  },
];

export function VendorPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <section className="bg-white border-b border-[#E5E7EB] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#16A34A]/10 text-[#16A34A] px-4 py-2 rounded-full mb-4">
            <Store className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted Sellers</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Explore Our Vendors
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Shop from verified vendors with great ratings, fast fulfillment, and quality products.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendors.map((vendor) => (
            <article
              key={vendor.id}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold text-[#111827]">{vendor.name}</h2>
                <span className="inline-flex items-center gap-1 text-sm bg-[#ECFDF5] text-[#16A34A] px-2 py-1 rounded-full">
                  <ShieldCheck className="w-4 h-4" />
                  Verified
                </span>
              </div>

              <p className="text-sm text-[#6B7280] mb-5">{vendor.category}</p>

              <div className="space-y-2 text-sm text-[#374151]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#6B7280]" />
                  <span>{vendor.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#F59E0B]" />
                  <span>{vendor.rating} rating</span>
                </div>
                <p>{vendor.products} products available</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
