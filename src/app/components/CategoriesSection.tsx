import { Shirt, Laptop, Home, Watch, Headphones, ShoppingBag } from 'lucide-react';

export function CategoriesSection() {
  const categories = [
    {
      name: 'Fashion',
      icon: Shirt,
      count: '2,340 items',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      name: 'Electronics',
      icon: Laptop,
      count: '1,856 items',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      name: 'Home & Living',
      icon: Home,
      count: '3,124 items',
      color: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      name: 'Accessories',
      icon: Watch,
      count: '987 items',
      color: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      name: 'Audio',
      icon: Headphones,
      count: '645 items',
      color: 'bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      name: 'Bags',
      icon: ShoppingBag,
      count: '1,234 items',
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
  ];

  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Shop by Category
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Browse through our wide range of categories and find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 text-center transition-all hover:shadow-lg hover:scale-105 hover:-translate-y-1">
                  <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}>
                    <Icon className={`w-8 h-8 ${category.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-[#111827] mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[#6B7280]">{category.count}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
