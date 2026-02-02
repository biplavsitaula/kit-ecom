import { Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#16A34A] to-[#15803D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Exclusive Deals & Updates
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Subscribe to our newsletter and be the first to know about new arrivals, special offers, and exclusive discounts!
            </p>

            {/* Subscription Form */}
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 rounded-lg text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap font-semibold"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Privacy Notice */}
            <p className="text-white/70 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="text-white/90">
                <div className="font-semibold mb-1">✨ Exclusive Deals</div>
                <div className="text-sm text-white/70">Get special subscriber-only discounts</div>
              </div>
              <div className="text-white/90">
                <div className="font-semibold mb-1">🎁 Early Access</div>
                <div className="text-sm text-white/70">Shop new arrivals before anyone else</div>
              </div>
              <div className="text-white/90">
                <div className="font-semibold mb-1">📬 Weekly Updates</div>
                <div className="text-sm text-white/70">Stay informed about trends and tips</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
