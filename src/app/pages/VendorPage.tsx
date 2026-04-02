import { Link } from "react-router";
import { ArrowRight, Box, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";
import { vendors } from "@/app/data/vendors";

export function VendorPage() {
      const topVendor = [...vendors].sort((a, b) => b.rating - a.rating)[0];

      return (
            <div className="min-h-screen bg-[#F8FAFC]">
                  <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-white px-4 py-16 sm:px-6 lg:px-8">
                        <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-[#16A34A]/10 blur-3xl" />
                        <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-[#0EA5E9]/10 blur-3xl" />

                        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
                              <div>
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#16A34A]/10 px-4 py-2 text-sm font-semibold text-[#166534]">
                                          <Sparkles className="h-4 w-4" />
                                          Curated & Verified Sellers
                                    </div>
                                    <h1 className="mb-4 text-4xl font-black leading-tight text-[#0F172A] md:text-5xl">
                                          Discover top vendors in one trusted marketplace
                                    </h1>
                                    <p className="max-w-2xl text-lg text-[#475569]">
                                          Shop from verified stores with strong ratings, fast fulfillment, and premium customer experience.
                                    </p>

                                    <div className="mt-7 flex flex-wrap gap-3">
                                          <a
                                                href="#vendors-grid"
                                                className="inline-flex items-center gap-2 rounded-xl bg-[#16A34A] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#15803D]"
                                          >
                                                Explore Vendors
                                                <ArrowRight className="h-4 w-4" />
                                          </a>
                                          <Link
                                                to="/becomevendor"
                                                className="inline-flex items-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#0F172A] transition-colors hover:border-[#16A34A] hover:text-[#166534]"
                                          >
                                                Become a Vendor
                                          </Link>
                                    </div>
                              </div>

                              <article className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-lg">
                                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#16A34A]">Top Rated Vendor</p>
                                    <h2 className="text-2xl font-bold text-[#0F172A]">{topVendor.name}</h2>
                                    <p className="mt-1 text-sm text-[#64748B]">
                                          {topVendor.category} • {topVendor.location}
                                    </p>
                                    <img
                                          className="my-4 aspect-video w-full rounded-2xl object-cover"
                                          src={topVendor.banner}
                                          alt={topVendor.name}
                                    />
                                    <div className="grid grid-cols-3 gap-3">
                                          <div className="rounded-xl bg-[#F8FAFC] p-3 text-center">
                                                <p className="text-lg font-black text-[#0F172A]">{topVendor.rating}</p>
                                                <p className="text-xs text-[#64748B]">Rating</p>
                                          </div>
                                          <div className="rounded-xl bg-[#F8FAFC] p-3 text-center">
                                                <p className="text-lg font-black text-[#0F172A]">{topVendor.products}</p>
                                                <p className="text-xs text-[#64748B]">Products</p>
                                          </div>
                                          <div className="rounded-xl bg-[#F8FAFC] p-3 text-center">
                                                <p className="text-lg font-black text-[#0F172A]">24h</p>
                                                <p className="text-xs text-[#64748B]">Avg Ship</p>
                                          </div>
                                    </div>
                              </article>
                        </div>
                  </section>

                  <section id="vendors-grid" className="px-4 py-12 sm:px-6 lg:px-8">
                        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                              {vendors.map((vendor) => (
                                    <article
                                          key={vendor.id}
                                          className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                    >
                                          <div className="overflow-hidden">
                                                <img
                                                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                      src={vendor.banner}
                                                      alt={vendor.name}
                                                />
                                          </div>
                                          <div className="px-5 py-5">
                                                <div className="mb-2 flex items-start justify-between gap-3">
                                                      <h2 className="text-xl font-bold leading-tight text-[#0F172A]">{vendor.name}</h2>
                                                      <span className="inline-flex items-center gap-1 rounded-full bg-[#ECFDF5] px-2 py-1 text-xs font-semibold text-[#166534]">
                                                            <ShieldCheck className="h-3.5 w-3.5" />
                                                            Verified
                                                      </span>
                                                </div>

                                                <p className="my-2 w-fit rounded-full bg-[#DCFCE7] px-2.5 py-1 text-xs font-semibold text-[#166534]">
                                                      {vendor.category}
                                                </p>

                                                <div className="mt-3 space-y-2.5 text-sm text-[#334155]">
                                                      <div className="flex items-center gap-2">
                                                            <MapPin className="h-4 w-4 text-[#64748B]" />
                                                            <span>{vendor.location}</span>
                                                      </div>
                                                      <div className="flex items-center gap-2">
                                                            <Star className="h-4 w-4 text-[#F59E0B]" />
                                                            <span>{vendor.rating} rating</span>
                                                      </div>
                                                      <div className="flex items-center gap-2">
                                                            <Box className="h-4 w-4 text-[#64748B]" />
                                                            <p>{vendor.products} products</p>
                                                      </div>
                                                </div>

                                                <p className="mt-4 line-clamp-2 text-sm text-[#64748B]">{vendor.description}</p>

                                                <Link
                                                      to={`/vendor/${vendor.id}`}
                                                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#16A34A] px-4 py-2.5 font-semibold text-white transition-colors hover:bg-[#15803D]"
                                                >
                                                      View Store
                                                      <ArrowRight className="h-4 w-4" />
                                                </Link>
                                          </div>
                                    </article>
                              ))}
                        </div>
                  </section>

                  <section className="px-4 pb-14 sm:px-6 lg:px-8">
                        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-[#0F172A] px-6 py-10 text-white md:flex-row md:items-center md:justify-between md:px-10">
                              <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#86EFAC]">Sell on ShopHub</p>
                                    <h3 className="mt-2 text-2xl font-black md:text-3xl">Ready to launch your store?</h3>
                                    <p className="mt-2 text-[#CBD5E1]">Join our vendor network and start reaching thousands of buyers.</p>
                              </div>
                              <Link
                                    to="/becomevendor"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-6 py-3 font-bold text-white transition-colors hover:bg-[#15803D]"
                              >
                                    Become a Vendor
                                    <ArrowRight className="h-4 w-4" />
                              </Link>
                        </div>
                  </section>
            </div>
      );
}
