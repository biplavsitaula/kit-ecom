import { CategoryCard } from "@/app/components/CategoryCard";
import { TrendingUp, Sparkles } from "lucide-react";

// Category data
const categories = [
  {
    id: 1,
    name: "Electronics",
    itemCount: 1543,
    image: "https://images.unsplash.com/photo-1738520420654-87cd2ad005d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDAxMTQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Fashion & Apparel",
    itemCount: 2876,
    image: "https://images.unsplash.com/photo-1600247354058-a55b0f6fb720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBhcHBhcmVsfGVufDF8fHx8MTc2OTk0NjkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Home & Furniture",
    itemCount: 1234,
    image: "https://images.unsplash.com/photo-1702865071803-cb154cd45f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZnVybml0dXJlJTIwZGVjb3J8ZW58MXx8fHwxNzY5OTk5NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    name: "Sports & Fitness",
    itemCount: 987,
    image: "https://images.unsplash.com/photo-1609858922226-d8e75c4502e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmaXRuZXNzJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2OTk0NjkzMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    name: "Beauty & Personal Care",
    itemCount: 1654,
    image: "https://images.unsplash.com/photo-1595051665600-afd01ea7c446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBza2luY2FyZXxlbnwxfHx8fDE3Njk4ODg4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    name: "Books & Media",
    itemCount: 2341,
    image: "https://images.unsplash.com/photo-1582203914614-e23623afc345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHJlYWRpbmclMjBsaWJyYXJ5fGVufDF8fHx8MTc2OTk0MjQ4NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 7,
    name: "Toys & Games",
    itemCount: 765,
    image: "https://images.unsplash.com/photo-1650775766475-2cc37492e2a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lzJTIwZ2FtZXMlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzAwMTE0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 8,
    name: "Jewelry & Accessories",
    itemCount: 1432,
    image: "https://images.unsplash.com/photo-1762513461072-5008c7f6511d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwYWNjZXNzb3JpZXMlMjB3YXRjaGVzfGVufDF8fHx8MTc3MDAxMTQwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 9,
    name: "Kitchen & Dining",
    itemCount: 1098,
    image: "https://images.unsplash.com/photo-1766591463271-f8103f1b77ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlcyUyMGNvb2t3YXJlfGVufDF8fHx8MTc3MDAxMTQwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 10,
    name: "Outdoor & Garden",
    itemCount: 876,
    image: "https://images.unsplash.com/photo-1666599972599-7350e0c75479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY2FtcGluZyUyMG5hdHVyZXxlbnwxfHx8fDE3Njk5MzI0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 11,
    name: "Automotive",
    itemCount: 654,
    image: "https://images.unsplash.com/photo-1559416814-85b0a9b2af76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwY2FyJTIwdG9vbHN8ZW58MXx8fHwxNzcwMDExNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 12,
    name: "Pet Supplies",
    itemCount: 543,
    image: "https://images.unsplash.com/photo-1764249453850-faace6e57444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBzdXBwbGllcyUyMGFuaW1hbHN8ZW58MXx8fHwxNzcwMDExNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

// Featured categories (top 3)
const featuredCategories = categories.slice(0, 3);

// Regular categories (rest)
const regularCategories = categories.slice(3);

export function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F9FAFB] via-white to-[#F9FAFB] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#16A34A]/10 text-[#16A34A] px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Explore Our Collections</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Browse Categories
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Discover thousands of products across all categories. From electronics to fashion,
            find exactly what you're looking for.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#22C55E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#F59E0B]/10 rounded-full blur-3xl" />
      </section>

      {/* Featured Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-[#F59E0B]" />
            <h2 className="text-3xl font-bold text-[#111827]">
              Featured Categories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <CategoryCard
                key={category.id}
                image={category.image}
                name={category.name}
                itemCount={category.itemCount}
                featured
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111827] mb-8">
            All Categories
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {regularCategories.map((category) => (
              <CategoryCard
                key={category.id}
                image={category.image}
                name={category.name}
                itemCount={category.itemCount}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#16A34A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contact our support team and we'll help you discover the perfect products.
          </p>
          <button className="bg-white text-[#16A34A] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
