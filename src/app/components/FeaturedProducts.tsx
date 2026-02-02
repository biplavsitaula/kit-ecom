import { Star, ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0fGVufDF8fHx8MTc3MDAwNDcyMHww&ixlib=rb-4.1.0&q=80&w=1080',
      discount: 25,
      badge: 'Best Seller',
    },
    {
      id: 2,
      name: 'Smart Watch Series 8',
      price: 449.99,
      originalPrice: 599.99,
      rating: 4.9,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwd2VhcmFibGV8ZW58MXx8fHwxNzY5OTIzODUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      discount: 25,
      badge: 'Hot Deal',
    },
    {
      id: 3,
      name: 'Ultra Thin Laptop Pro',
      price: 1299.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1677157561132-4f9e282a1684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njk5Nzc5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      discount: null,
      badge: null,
    },
    {
      id: 4,
      name: 'Premium Running Shoes',
      price: 129.99,
      originalPrice: 179.99,
      rating: 4.6,
      reviews: 423,
      image: 'https://images.unsplash.com/photo-1695459468644-717c8ae17eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjBzbmVha2Vyc3xlbnwxfHx8fDE3Njk5MjkwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      discount: 28,
      badge: 'New Arrival',
    },
    {
      id: 5,
      name: 'Travel Backpack Pro',
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.5,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1673505705687-dffbfd02b613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHRyYXZlbCUyMGJhZ3xlbnwxfHx8fDE3Njk5Nzc5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      discount: 25,
      badge: null,
    },
    {
      id: 6,
      name: 'Wireless Earbuds',
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.4,
      reviews: 678,
      image: 'https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0fGVufDF8fHx8MTc3MDAwNDcyMHww&ixlib=rb-4.1.0&q=80&w=1080',
      discount: 20,
      badge: null,
    },
  ];

  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Featured Products
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Handpicked selection of our most popular and highest-rated products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden border border-[#E5E7EB] transition-all hover:shadow-xl hover:-translate-y-1 group"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-[#F9FAFB]">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#F59E0B] text-white text-xs px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                {/* Discount Badge */}
                {product.discount && (
                  <span className="absolute top-3 right-3 bg-[#16A34A] text-white text-xs px-3 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="font-semibold text-[#111827] mb-2 line-clamp-1">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                    <span className="ml-1 text-sm font-medium text-[#111827]">
                      {product.rating}
                    </span>
                  </div>
                  <span className="ml-2 text-sm text-[#6B7280]">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-[#16A34A]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="ml-2 text-sm text-[#6B7280] line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-[#16A34A] hover:bg-[#22C55E] text-white py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-3 border-2 border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white rounded-lg transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
