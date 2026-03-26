import { ValueProposition } from "@/app/components/ValueProposition";
import { Testimonials } from "@/app/components/Testimonials";
import { Newsletter } from "@/app/components/Newsletter";
import { Globe, HeartHandshake, Truck } from "lucide-react";

const facts = [
  {
    icon: Globe,
    title: "30+ Cities",
    description: "We connect shoppers with local and global sellers across major cities.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Marketplace",
    description: "Every vendor is screened for quality, service, and reliable fulfillment.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Most products are delivered quickly with real-time order updates.",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F9FAFB] via-white to-[#ECFDF5]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">About ShopHub</h1>
          <p className="text-lg text-[#4B5563] max-w-3xl mx-auto">
            ShopHub is built to make online shopping easy, transparent, and trusted. We help customers discover
            quality products while empowering vendors to grow.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <article key={fact.title} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <Icon className="w-8 h-8 text-[#16A34A] mb-3" />
                <h2 className="text-xl font-semibold text-[#111827] mb-2">{fact.title}</h2>
                <p className="text-[#6B7280]">{fact.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <ValueProposition />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
