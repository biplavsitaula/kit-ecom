import { useState } from "react";
import { Navbar } from "@/app/components/Navbar";
import { FilterBar } from "@/app/components/shop/FilterBar";
import { MapView } from "@/app/components/shop/MapView";
import { ProductCard } from "@/app/components/shop/ProductCard";
import type { Product } from "@/app/components/shop/ProductCard";
import { Map, Grid3x3 } from "lucide-react";

export function ShopPage() {
  const [showMap, setShowMap] = useState(true);
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
  const [filters, setFilters] = useState({
    search: "",
    category: "All Categories",
    priceRange: [0, 1000],
    vendor: "All Vendors",
    rating: "All Ratings",
    availability: "All Items",
    sortBy: "Relevance",
  });

  // Mock product data with locations
  const products: Product[] = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0fGVufDF8fHx8MTc3MDAwNDcyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      vendor: "TechStore",
      location: "Manhattan",
      distance: "2.3 mi",
      discount: 25,
      inStock: true,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Smart Watch Series 8",
      price: 449.99,
      originalPrice: 599.99,
      rating: 4.9,
      reviews: 567,
      image:
        "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwd2VhcmFibGV8ZW58MXx8fHwxNzY5OTIzODUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      vendor: "AudioPro",
      location: "Brooklyn",
      distance: "3.1 mi",
      discount: 25,
      inStock: true,
      badge: "Hot Deal",
    },
    {
      id: 3,
      name: "Ultra Thin Laptop Pro",
      price: 1299.99,
      rating: 4.7,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1677157561132-4f9e282a1684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njk5Nzc5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      vendor: "TechStore",
      location: "Queens",
      distance: "4.5 mi",
      inStock: true,
    },
    {
      id: 4,
      name: "Premium Running Shoes",
      price: 129.99,
      originalPrice: 179.99,
      rating: 4.6,
      reviews: 423,
      image:
        "https://images.unsplash.com/photo-1695459468644-717c8ae17eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjBzbmVha2Vyc3xlbnwxfHx8fDE3Njk5MjkwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      vendor: "FashionHub",
      location: "Manhattan",
      distance: "1.8 mi",
      discount: 28,
      inStock: true,
      badge: "New Arrival",
    },
    {
      id: 5,
      name: "Travel Backpack Pro",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.5,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1673505705687-dffbfd02b613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHRyYXZlbCUyMGJhZ3xlbnwxfHx8fDE3Njk5Nzc5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      vendor: "HomeDecor",
      location: "Brooklyn",
      distance: "2.9 mi",
      discount: 25,
      inStock: false,
    },
    {
      id: 6,
      name: "Professional Camera Kit",
      price: 899.99,
      rating: 4.9,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1764557359097-f15dd0c0a17b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njk5MDk5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      vendor: "TechStore",
      location: "Manhattan",
      distance: "2.1 mi",
      inStock: true,
    },
    {
      id: 7,
      name: 'Tablet Pro 12.9"',
      price: 799.99,
      originalPrice: 999.99,
      rating: 4.8,
      reviews: 445,
      image:
        "https://images.unsplash.com/photo-1769603891182-0316b20ce2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2OTk0Mjk0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      vendor: "AudioPro",
      location: "Queens",
      distance: "5.2 mi",
      discount: 20,
      inStock: true,
    },
    {
      id: 8,
      name: "Mechanical Gaming Keyboard",
      price: 149.99,
      rating: 4.7,
      reviews: 289,
      image:
        "https://images.unsplash.com/photo-1656711081969-9d16ebc2d210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBrZXlib2FyZCUyMG1lY2hhbmljYWx8ZW58MXx8fHwxNzY5OTc3MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      vendor: "TechStore",
      location: "Brooklyn",
      distance: "3.4 mi",
      inStock: true,
    },
    {
      id: 9,
      name: "Portable Bluetooth Speaker",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.6,
      reviews: 523,
      image:
        "https://images.unsplash.com/photo-1674303324806-7018a739ed11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVldG9vdGglMjBzcGVha2VyJTIwcG9ydGFibGV8ZW58MXx8fHwxNzY5OTUwNjM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      vendor: "AudioPro",
      location: "Manhattan",
      distance: "1.5 mi",
      discount: 20,
      inStock: true,
    },
  ];

  // Mock location data for map
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
    {
      id: 4,
      position: [40.7489, -73.968] as [number, number],
      vendorName: "FashionHub Manhattan",
      productCount: 1,
      avgPrice: 129,
    },
    {
      id: 5,
      position: [40.6512, -73.9496] as [number, number],
      vendorName: "HomeDecor Brooklyn",
      productCount: 1,
      avgPrice: 89,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <FilterBar onFiltersChange={setFilters} activeFilters={filters} />

      <div>
        {/* Mobile View Toggle */}
        <div className="lg:hidden px-4 py-3 bg-white border-b border-[#E5E7EB]">
          <div className="flex relative z-0 gap-2">
            <button
              onClick={() => setShowMap(false)}
              className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                !showMap
                  ? "bg-[#16A34A] text-white"
                  : "bg-[#F9FAFB] text-[#374151]"
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
              List View
            </button>
            <button
              onClick={() => setShowMap(true)}
              className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                showMap
                  ? "bg-[#16A34A] text-white"
                  : "bg-[#F9FAFB] text-[#374151]"
              }`}
            >
              <Map className="w-4 h-4" />
              Map View
            </button>
          </div>
        </div>

        {/* Desktop Split View / Mobile Single View */}
        <div className="h-[calc(100vh-8rem)] lg:h-[calc(100vh-10rem)]">
          <div className="h-full max-w-[1920px] mx-auto">
            <div className="h-full flex flex-col relative z-0 pt-8 lg:flex-row">
              {/* Map View - Desktop: Left 50% | Mobile: Full or Hidden */}
              <div
                className={`${
                  showMap ? "flex" : "hidden lg:flex"
                } lg:w-1/2 h-full`}
              >
                <div className="w-full h-full p-4 relative z-0">
                  <MapView
                    locations={locations}
                    hoveredProductId={hoveredProductId}
                    onMarkerClick={(id) => {
                      // Scroll to product or highlight it
                      const element = document.getElementById(`product-${id}`);
                      element?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                  />
                </div>
              </div>

              {/* Product List - Desktop: Right 50% | Mobile: Full or Hidden */}
              <div
                className={`${
                  !showMap ? "flex" : "hidden lg:flex"
                } lg:w-1/2 h-full bg-white`}
              >
                <div className="w-full h-full overflow-y-auto">
                  <div className="p-4 space-y-4 z-50 relative">
                    {/* Results Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
                      <div>
                        <h2 className="text-xl font-bold text-[#111827]">
                          {products.length} Products Found
                        </h2>
                        <p className="text-sm text-[#6B7280] mt-1">
                          Showing results for your search criteria
                        </p>
                      </div>
                    </div>

                    {/* Product Cards */}
                    {products.map((product) => (
                      <div key={product.id} id={`product-${product.id}`}>
                        <ProductCard
                          product={product}
                          isHighlighted={hoveredProductId === product.id}
                          onMouseEnter={() => setHoveredProductId(product.id)}
                          onMouseLeave={() => setHoveredProductId(null)}
                        />
                      </div>
                    ))}

                    {/* Load More */}
                    <div className="pt-6 pb-8 text-center">
                      <button className="px-8 py-3 border-2 border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white rounded-lg transition-colors">
                        Load More Products
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
