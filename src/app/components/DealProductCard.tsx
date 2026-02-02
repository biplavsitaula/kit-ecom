import { Star, ShoppingCart } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

interface DealProductCardProps {
  image: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  flashSale?: boolean;
  saleEndTime?: Date;
}

export function DealProductCard({
  image,
  name,
  originalPrice,
  discountedPrice,
  discountPercentage,
  rating,
  reviewCount,
  flashSale = false,
  saleEndTime,
}: DealProductCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-[#E5E7EB] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-[#F9FAFB]">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-[#F59E0B] text-white px-3 py-1.5 rounded-lg font-bold shadow-lg">
          -{discountPercentage}%
        </div>

        {/* Flash Sale Badge */}
        {flashSale && (
          <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg animate-pulse">
            FLASH SALE
          </div>
        )}

        {/* Quick Add to Cart on Hover */}
        <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#16A34A] text-white px-6 py-2.5 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2 shadow-lg hover:bg-[#15803d]">
          <ShoppingCart className="w-4 h-4" />
          Quick Add
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="font-semibold text-[#111827] mb-2 line-clamp-2 min-h-[48px]">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-[#F59E0B] text-[#F59E0B]"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-[#6B7280]">({reviewCount})</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl font-bold text-[#16A34A]">
            ${discountedPrice.toFixed(2)}
          </span>
          <span className="text-base text-[#6B7280] line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>

        {/* Countdown Timer for Flash Sales */}
        {flashSale && saleEndTime && (
          <div className="mb-3 pb-3 border-t border-[#E5E7EB] pt-3">
            <div className="text-xs text-[#6B7280] mb-1">Ends in:</div>
            <CountdownTimer endTime={saleEndTime} compact />
          </div>
        )}

        {/* Add to Cart Button */}
        <button className="w-full bg-[#16A34A] text-white py-2.5 rounded-lg font-semibold hover:bg-[#15803d] transition-colors flex items-center justify-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
