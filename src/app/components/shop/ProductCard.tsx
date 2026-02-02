import { Star, ShoppingCart, MapPin, Eye } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  vendor: string;
  location: string;
  distance: string;
  discount?: number;
  inStock: boolean;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
  isHighlighted: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function ProductCard({ product, isHighlighted, onMouseEnter, onMouseLeave }: ProductCardProps) {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
        isHighlighted 
          ? 'border-[#F59E0B] shadow-xl scale-[1.02]' 
          : 'border-[#E5E7EB] hover:border-[#22C55E] hover:shadow-lg'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Product Image */}
        <div className="relative sm:w-48 h-48 flex-shrink-0 bg-[#F9FAFB]">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          
          {/* Badges */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-[#F59E0B] text-white text-xs px-3 py-1 rounded-full font-medium">
              {product.badge}
            </span>
          )}
          {product.discount && (
            <span className="absolute top-3 right-3 bg-[#16A34A] text-white text-xs px-3 py-1 rounded-full font-medium">
              -{product.discount}%
            </span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-white text-[#111827] px-4 py-2 rounded-lg font-semibold">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            {/* Product Name */}
            <h3 className="font-semibold text-[#111827] mb-2 line-clamp-1">
              {product.name}
            </h3>

            {/* Vendor & Location */}
            <div className="flex items-center gap-4 mb-3 text-sm text-[#6B7280]">
              <div className="flex items-center gap-1">
                <span className="font-medium">{product.vendor}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{product.location}</span>
              </div>
              <div className="text-[#16A34A]">{product.distance}</div>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#F59E0B] text-[#F59E0B]'
                        : 'text-[#E5E7EB]'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-[#111827]">
                  {product.rating}
                </span>
              </div>
              <span className="ml-2 text-sm text-[#6B7280]">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Price & Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#16A34A]">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#6B7280] line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors">
                <Eye className="w-4 h-4 text-[#374151]" />
              </button>
              <button
                disabled={!product.inStock}
                className="px-4 py-2 bg-[#16A34A] hover:bg-[#22C55E] text-white rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
