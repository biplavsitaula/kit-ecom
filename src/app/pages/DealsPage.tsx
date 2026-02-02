import { FilterBar } from "@/app/components/FilterBar";
import { DealProductCard } from "@/app/components/DealProductCard";
import { CountdownTimer } from "@/app/components/CountdownTimer";
import { Zap, TrendingDown, Tag, ArrowRight } from "lucide-react";

// Calculate end times for flash sales (24 hours from now, 6 hours from now, etc.)
const get24HoursFromNow = () => new Date(Date.now() + 24 * 60 * 60 * 1000);
const get6HoursFromNow = () => new Date(Date.now() + 6 * 60 * 60 * 1000);

// Flash Sale Products
const flashSaleProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones - Noise Cancelling",
    image: "https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0fGVufDF8fHx8MTc3MDAwNDcyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    originalPrice: 299.99,
    discountedPrice: 149.99,
    discountPercentage: 50,
    rating: 4.8,
    reviewCount: 1234,
    flashSale: true,
    saleEndTime: get6HoursFromNow(),
  },
  {
    id: 2,
    name: "Smart Watch Pro - Fitness Tracker with GPS",
    image: "https://images.unsplash.com/photo-1714218707756-173966d250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwcHJvZHVjdHxlbnwxfHx8fDE3Njk5ODM0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    originalPrice: 399.99,
    discountedPrice: 199.99,
    discountPercentage: 50,
    rating: 4.6,
    reviewCount: 856,
    flashSale: true,
    saleEndTime: get6HoursFromNow(),
  },
  {
    id: 3,
    name: "Ultra-Slim Laptop - 15.6 inch Display, 16GB RAM",
    image: "https://images.unsplash.com/photo-1736616967588-d81fcd6f4d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHByb2R1Y3R8ZW58MXx8fHwxNzcwMDExMzY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    originalPrice: 1299.99,
    discountedPrice: 899.99,
    discountPercentage: 31,
    rating: 4.9,
    reviewCount: 2341,
    flashSale: true,
    saleEndTime: get6HoursFromNow(),
  },
  {
    id: 4,
    name: "Professional Camera Kit - 24MP DSLR Bundle",
    image: "https://images.unsplash.com/photo-1632222683609-53cd751c2937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMHByb2R1Y3R8ZW58MXx8fHwxNzcwMDExMzY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    originalPrice: 899.99,
    discountedPrice: 599.99,
    discountPercentage: 33,
    rating: 4.7,
    reviewCount: 543,
    flashSale: true,
    saleEndTime: get6HoursFromNow(),
  },
];

// Regular Deal Products
const dealProducts = [
  {
    id: 5,
    name: "Running Shoes - Lightweight Performance",
    image: "https://images.unsplash.com/photo-1695459468644-717c8ae17eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjBzbmVha2Vyc3xlbnwxfHx8fDE3Njk5MjkwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    originalPrice: 159.99,
    discountedPrice: 99.99,
    discountPercentage: 38,
    rating: 4.5,
    reviewCount: 678,
  },
  {
    id: 6,
    name: "Travel Backpack - Water Resistant 40L",
    image: "https://images.unsplash.com/photo-1579718067654-cda6d61706e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMGJhZyUyMHByb2R1Y3R8ZW58MXx8fHwxNzY5OTQ1OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    originalPrice: 89.99,
    discountedPrice: 54.99,
    discountPercentage: 39,
    rating: 4.4,
    reviewCount: 432,
  },
  {
    id: 7,
    name: "Premium Sunglasses - UV Protection",
    image: "https://images.unsplash.com/photo-1662928245746-6b4a1e90f8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbiUyMHByb2R1Y3R8ZW58MXx8fHwxNzY5OTY3MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    originalPrice: 149.99,
    discountedPrice: 74.99,
    discountPercentage: 50,
    rating: 4.6,
    reviewCount: 891,
  },
  {
    id: 8,
    name: "Coffee Maker - Programmable 12-Cup",
    image: "https://images.unsplash.com/photo-1607273177147-e7304c4d5d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBtYWtlciUyMGtpdGNoZW58ZW58MXx8fHwxNzY5OTc0MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    originalPrice: 79.99,
    discountedPrice: 49.99,
    discountPercentage: 38,
    rating: 4.3,
    reviewCount: 1567,
  },
  {
    id: 9,
    name: "Yoga Mat - Extra Thick Non-Slip",
    image: "https://images.unsplash.com/photo-1746796751590-a8c0f15d4900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWF0JTIwZml0bmVzc3xlbnwxfHx8fDE3Njk5MDQzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    originalPrice: 49.99,
    discountedPrice: 29.99,
    discountPercentage: 40,
    rating: 4.7,
    reviewCount: 2134,
  },
  {
    id: 10,
    name: "Bluetooth Speaker - Waterproof Portable",
    image: "https://images.unsplash.com/photo-1623732900752-75cb69c5963a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVldG9vdGglMjBzcGVha2VyJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzAwMDAwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    originalPrice: 129.99,
    discountedPrice: 69.99,
    discountPercentage: 46,
    rating: 4.5,
    reviewCount: 987,
  },
  {
    id: 11,
    name: "Ergonomic Office Chair - Lumbar Support",
    image: "https://images.unsplash.com/photo-1762423992354-4a11c971bf91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrJTIwY2hhaXIlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY5OTU1NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    originalPrice: 299.99,
    discountedPrice: 179.99,
    discountPercentage: 40,
    rating: 4.8,
    reviewCount: 765,
  },
  {
    id: 12,
    name: "5G Smartphone - 128GB Storage",
    image: "https://images.unsplash.com/photo-1741061963569-9d0ef54d10d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzY5ODk1Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    originalPrice: 799.99,
    discountedPrice: 549.99,
    discountPercentage: 31,
    rating: 4.6,
    reviewCount: 1432,
  },
];

export function DealsPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Deals Banner */}
      <section className="relative bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#16A34A] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B]/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Limited Time Offers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Today's Best Deals
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Don't miss out on incredible savings - up to 50% off!
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center mb-6">
              <CountdownTimer endTime={get24HoursFromNow()} />
            </div>

            <button className="bg-white text-[#16A34A] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl hover:scale-105 transform duration-300 inline-flex items-center gap-2">
              Shop Deals Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <FilterBar />

      {/* Flash Sale Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b-4 border-[#F59E0B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#111827]">
                  Flash Sale
                </h2>
                <p className="text-[#6B7280]">Ends in 6 hours - Hurry up!</p>
              </div>
            </div>
            <div className="hidden md:block">
              <CountdownTimer endTime={get6HoursFromNow()} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashSaleProducts.map((product) => (
              <DealProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Today's Hot Deals */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#F59E0B] p-2 rounded-lg">
              <TrendingDown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#111827]">
                Today's Hot Deals
              </h2>
              <p className="text-[#6B7280]">Amazing discounts you can't miss</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealProducts.map((product) => (
              <DealProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#111827] to-[#374151]">
        <div className="max-w-4xl mx-auto text-center">
          <Tag className="w-12 h-12 text-[#F59E0B] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Miss a Deal!
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to our newsletter and be the first to know about exclusive deals and flash sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg border border-gray-600 bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />
            <button className="bg-[#F59E0B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d97706] transition-colors shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
