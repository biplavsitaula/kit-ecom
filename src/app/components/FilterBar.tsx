import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export function FilterBar() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="bg-white border-y border-[#E5E7EB] sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-4 overflow-x-auto">
          {/* Filter Icon */}
          <div className="flex items-center gap-2 text-[#374151] flex-shrink-0">
            <SlidersHorizontal className="w-5 h-5" />
            <span className="font-medium">Filters:</span>
          </div>

          {/* Category Filter */}
          <button
            onClick={() => setActiveFilter(activeFilter === "category" ? null : "category")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E5E7EB] hover:border-[#16A34A] hover:bg-[#F9FAFB] transition-colors flex-shrink-0"
          >
            <span className="text-sm text-[#374151]">Category</span>
            <ChevronDown className="w-4 h-4 text-[#6B7280]" />
          </button>

          {/* Discount Filter */}
          <button
            onClick={() => setActiveFilter(activeFilter === "discount" ? null : "discount")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E5E7EB] hover:border-[#16A34A] hover:bg-[#F9FAFB] transition-colors flex-shrink-0"
          >
            <span className="text-sm text-[#374151]">Discount %</span>
            <ChevronDown className="w-4 h-4 text-[#6B7280]" />
          </button>

          {/* Price Range Filter */}
          <button
            onClick={() => setActiveFilter(activeFilter === "price" ? null : "price")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E5E7EB] hover:border-[#16A34A] hover:bg-[#F9FAFB] transition-colors flex-shrink-0"
          >
            <span className="text-sm text-[#374151]">Price Range</span>
            <ChevronDown className="w-4 h-4 text-[#6B7280]" />
          </button>

          {/* Expiring Soon */}
          <button className="px-4 py-2 rounded-lg border border-[#F59E0B] bg-[#F59E0B]/10 text-[#F59E0B] font-medium hover:bg-[#F59E0B]/20 transition-colors flex-shrink-0">
            <span className="text-sm">Expiring Soon</span>
          </button>

          {/* Sort By */}
          <button
            onClick={() => setActiveFilter(activeFilter === "sort" ? null : "sort")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E5E7EB] hover:border-[#16A34A] hover:bg-[#F9FAFB] transition-colors flex-shrink-0 ml-auto"
          >
            <span className="text-sm text-[#374151]">Sort By</span>
            <ChevronDown className="w-4 h-4 text-[#6B7280]" />
          </button>
        </div>
      </div>
    </div>
  );
}
