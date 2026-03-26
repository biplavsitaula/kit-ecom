import { Link } from "react-router";
import { Store, MapPin, ShieldCheck, Star, Box } from "lucide-react";
import { vendors } from "@/app/data/vendors";

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
            Shop from verified vendors with great ratings, fast fulfillment, and
            quality products.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map((vendor) => (
            <article
              key={vendor.id}
              className="bg-white group rounded-2xl overflow-clip border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                className="w-full group-hover:scale-110 duration-120 ease-in-out aspect-video object-cover mb-2"
                src={vendor?.banner}
              />
              <div className="px-6 py-2">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-xl font-semibold text-[#111827]">
                    {vendor.name}
                  </h2>
                  <span className="inline-flex items-center gap-1 text-sm bg-[#ECFDF5] text-[#16A34A] px-2 py-1 rounded-full">
                    <ShieldCheck className="w-4 h-4" />
                    Verified
                  </span>
                </div>

                <p className="text-sm text-gray-500 my-2 border bg-[#16A34A]/10 w-fit px-2 py-1 rounded-full">
                  {vendor.category}
                </p>

                <div className="space-y-2 text-sm text-[#374151]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#6B7280]" />
                    <span>{vendor.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#F59E0B]" />
                    <span>{vendor.rating} rating</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Box className="w-4 text-primary" />
                    <p>{vendor.products} products</p>
                  </div>
                </div>
                <Link
                  to={`/vendor/${vendor.id}`}
                  className="my-2 flex bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md w-full justify-center transition-colors"
                >
                  View Store
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
