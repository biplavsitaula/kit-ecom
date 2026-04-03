import { Clock, Zap, Tag } from 'lucide-react';

export function DealsSection() {
  return (
    <section id="deals" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Special Deals & Offers
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Don't miss out on our limited-time offers and exclusive deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Flash Sale Card */}
          <div className="relative bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-2xl p-8 text-white overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wide">Flash Sale</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">
                Up to 50% Off
              </h3>
              <p className="text-white/90 mb-6">
                Limited time offer on selected electronics and accessories
              </p>
              
              {/* Countdown Timer */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-xs">Hours</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">34</div>
                  <div className="text-xs">Minutes</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">56</div>
                  <div className="text-xs">Seconds</div>
                </div>
              </div>
              
              <button className="bg-white text-[#F59E0B] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Shop Flash Sale
              </button>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -right-5 top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          </div>

          {/* Seasonal Deals Card */}
          <div className="relative bg-gradient-to-br from-[#16A34A] to-[#15803D] rounded-2xl p-8 text-white overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wide">Spring Sale</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">
                Save Big Today
              </h3>
              <p className="text-white/90 mb-6">
                Get amazing discounts on fashion, home decor, and more
              </p>
              
              {/* Deal Highlights */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm">Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm">Extra 10% off with code: SPRING10</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm">Buy 2 Get 1 Free on selected items</span>
                </div>
              </div>
              
              <button className="bg-white text-[#16A34A] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Browse Deals
              </button>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute right-10 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Banner */}
        <div className="mt-6 bg-gradient-to-r from-[#111827] to-[#374151] rounded-2xl p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Clock className="w-12 h-12 text-[#F59E0B]" />
              <div>
                <h3 className="text-xl font-bold mb-1">Weekend Special</h3>
                <p className="text-white/80 text-sm">Extra 15% off on all categories this weekend only!</p>
              </div>
            </div>
            <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
              Get Coupon Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
