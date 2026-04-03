import { Link, useParams } from "react-router";
import { ArrowLeft, MapPin, Star, ShieldCheck, Package, ShoppingBag, ChevronRight } from "lucide-react";
import { vendors, vendorProducts } from "@/app/data/vendors";

export function VendorStorePage() {
  const params = useParams();
  const vendorId = Number(params.vendorId);
  const vendor = vendors.find((item) => item.id === vendorId);

  if (!vendor) {
    return (
      <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-[#F0EDE6] flex items-center justify-center mx-auto mb-6">
            <Package className="w-8 h-8 text-[#9C8E7A]" />
          </div>
          <h1 className="font-display text-4xl font-bold text-[#1A1714] mb-3 tracking-tight">
            Store Not Found
          </h1>
          <p className="text-[#7A6F62] mb-8 leading-relaxed">
            The vendor page you requested does not exist or was moved.
          </p>
          <Link
            to="/vendor"
            className="inline-flex items-center gap-2 rounded-full bg-[#2D5A27] px-6 py-3 text-white text-sm font-semibold hover:bg-[#244820] transition-all hover:shadow-lg hover:shadow-[#2D5A27]/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Vendors
          </Link>
        </div>
      </div>
    );
  }

  const products = vendorProducts.filter((product) => product.vendorId === vendor.id);
  const avgRating = vendor.rating;
  const totalReviews = products.reduce((sum, p) => sum + (p.reviews || 0), 0);

  return (
    <>
      <style>{`
       

        /* Hero */
        .hero-section {
          position: relative;
          height: 540px;
          overflow: hidden;
        }
        .hero-image {
          width: 100%; height: 100%;
          object-fit: cover;
          transform: scale(1.05);
          transition: transform 8s ease;
        }
        .hero-section:hover .hero-image { transform: scale(1); }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15,12,8,0.15) 0%,
            rgba(15,12,8,0.45) 50%,
            rgba(15,12,8,0.88) 100%
          );
        }
        .hero-content {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 0 2rem 2.5rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Back pill */
        .back-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(12px);
          color: rgba(255,255,255,0.9);
          padding: 7px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          margin-bottom: 20px;
          transition: background 0.2s, border-color 0.2s;
        }
        .back-pill:hover {
          background: rgba(255,255,255,0.2);
          border-color: rgba(255,255,255,0.35);
        }

        /* Vendor badge */
        .verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(45,90,39,0.85);
          border: 1px solid rgba(255,255,255,0.15);
          color: #A8D5A2;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 100px;
          margin-bottom: 14px;
        }

        /* Vendor name */
        .vendor-name {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
        }
        .vendor-desc {
          color: rgba(255,255,255,0.75);
          font-size: 15px;
          line-height: 1.65;
          max-width: 560px;
          margin-bottom: 24px;
        }

        /* Stats row */
        .stats-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
        }
        .stat-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
          color: rgba(255,255,255,0.88);
          font-size: 13px;
          padding: 7px 14px;
          border-radius: 100px;
        }
        .divider { width: 1px; height: 14px; background: rgba(255,255,255,0.25); }

        /* Metrics bar */
        .metrics-bar {
          background: #fff;
          border-bottom: 1px solid #ECEAE4;
          padding: 0 2rem;
        }
        .metrics-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          gap: 0;
        }
        .metric-item {
          padding: 20px 32px 20px 0;
          flex: 0 0 auto;
          border-right: 1px solid #ECEAE4;
          margin-right: 32px;
        }
        .metric-item:last-child { border-right: none; }
        .metric-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9C8E7A;
          margin-bottom: 4px;
        }
        .metric-value {
          font-size: 24px;
          font-weight: 700;
          color: #1A1714;
          line-height: 1;
        }
        .metric-sub {
          font-size: 12px;
          color: #9C8E7A;
          margin-top: 2px;
        }

        /* Products section */
        .products-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 56px 2rem;
        }
        .section-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #2D5A27;
          margin-bottom: 8px;
        }
        .section-title {
         
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 700;
          color: #1A1714;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 6px;
        }
        .section-sub {
          color: #7A6F62;
          font-size: 15px;
        }

        /* Product grid */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 28px;
          margin-top: 40px;
        }

        /* Product card */
        .product-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #ECEAE4;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(26,23,20,0.12), 0 8px 24px rgba(26,23,20,0.07);
        }
        .card-image-wrap {
          position: relative;
          height: 240px;
          overflow: hidden;
          background: #F5F3EE;
        }
        .card-image {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .product-card:hover .card-image { transform: scale(1.07); }
        .card-image-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(26,23,20,0.3) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.35s;
        }
        .product-card:hover .card-image-overlay { opacity: 1; }

        /* Badge */
        .card-badge {
          position: absolute;
          top: 14px; left: 14px;
          background: #2D5A27;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 100px;
          z-index: 2;
        }

        /* Card body */
        .card-body { padding: 22px 22px 24px; }
        .card-name {
        
          font-size: 18px;
          font-weight: 600;
          color: #1A1714;
          margin-bottom: 8px;
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .card-rating {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 14px;
        }
        .stars {
          display: flex;
          gap: 2px;
        }
        .star-filled { color: #D4A843; }
        .star-empty { color: #DDD9D1; }
        .rating-text { font-size: 13px; color: #7A6F62; }
        .card-price-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 18px;
        }
        .price-current {
        
          font-size: 26px;
          font-weight: 700;
          color: #2D5A27;
          line-height: 1;
        }
        .price-original {
          font-size: 14px;
          color: #B0A898;
          text-decoration: line-through;
        }
        .card-cta {
          width: 100%;
          background: #1A1714;
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 12px 20px;
         
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-decoration: none;
        }
        .card-cta:hover {
          background: #2D5A27;
          transform: scale(0.99);
        }

        /* Section footer */
        .section-footer {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid #ECEAE4;
          display: flex;
          justify-content: center;
        }
        .marketplace-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FAFAF7;
          border: 1.5px solid #ECEAE4;
          color: #1A1714;
          padding: 13px 28px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s;
        }
        .marketplace-link:hover {
          background: #2D5A27;
          color: #fff;
          border-color: #2D5A27;
          box-shadow: 0 8px 24px rgba(45,90,39,0.25);
        }

        /* Star rendering helper */
        .stars-display { display: inline-flex; gap: 2px; }

        @media (max-width: 640px) {
          .hero-section { height: 480px; }
          .metrics-inner { flex-wrap: wrap; }
          .metric-item { border-right: none; border-bottom: 1px solid #ECEAE4; padding: 16px 0; margin-right: 0; width: 50%; }
          .product-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="vendor-page">
        {/* ── Hero ── */}
        <section className="hero-section">
          <img src={vendor.banner} alt={vendor.name} className="hero-image" />
          <div className="hero-overlay" />

          <div className="hero-content">
            <Link to="/vendor" className="back-pill">
              <ArrowLeft className="w-3.5 h-3.5" />
              All Vendors
            </Link>

            <div className="verified-badge">
              <ShieldCheck style={{ width: 12, height: 12 }} />
              Verified Vendor
            </div>

            <h1 className="vendor-name">{vendor.name}</h1>
            <p className="vendor-desc">{vendor.description}</p>

            <div className="stats-row">
              <div className="stat-chip">
                <MapPin style={{ width: 14, height: 14, opacity: 0.75 }} />
                {vendor.location}
              </div>
              <div className="divider" />
              <div className="stat-chip">
                <Star style={{ width: 14, height: 14, color: '#D4A843' }} />
                {vendor.rating} rating
              </div>
              <div className="divider" />
              <div className="stat-chip">
                <Package style={{ width: 14, height: 14, opacity: 0.75 }} />
                {products.length} products
              </div>
              <div className="divider" />
              <div className="stat-chip" style={{ background: 'rgba(45,90,39,0.6)', borderColor: 'rgba(168,213,162,0.25)' }}>
                {vendor.category}
              </div>
            </div>
          </div>
        </section>

        {/* ── Metrics Bar ── */}
        <div className="metrics-bar">
          <div className="metrics-inner">
            <div className="metric-item">
              <div className="metric-label">Average Rating</div>
              <div className="metric-value">{avgRating}</div>
              <div className="metric-sub" style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                {[1,2,3,4,5].map(i => (
                  <Star key={i} style={{ width: 12, height: 12, color: i <= Math.round(avgRating) ? '#D4A843' : '#DDD9D1', fill: i <= Math.round(avgRating) ? '#D4A843' : '#DDD9D1' }} />
                ))}
                <span style={{ marginLeft: 2 }}>out of 5</span>
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-label">Total Products</div>
              <div className="metric-value">{products.length}</div>
              <div className="metric-sub">in catalogue</div>
            </div>
            <div className="metric-item">
              <div className="metric-label">Total Reviews</div>
              <div className="metric-value">{totalReviews.toLocaleString()}</div>
              <div className="metric-sub">customer reviews</div>
            </div>
            <div className="metric-item">
              <div className="metric-label">Category</div>
              <div className="metric-value" style={{ fontSize: 18, paddingTop: 4 }}>{vendor.category}</div>
              <div className="metric-sub">specialization</div>
            </div>
          </div>
        </div>

        {/* ── Products ── */}
        <section className="products-section">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p className="section-eyebrow">Catalogue</p>
              <h2 className="section-title">Products by {vendor.name}</h2>
              <p className="section-sub">Curated selection from this verified vendor.</p>
            </div>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <div className="card-image-wrap">
                  <img src={product.image} alt={product.name} className="card-image" />
                  <div className="card-image-overlay" />
                  {product.badge && (
                    <span className="card-badge">{product.badge}</span>
                  )}
                </div>

                <div className="card-body">
                  <h3 className="card-name">{product.name}</h3>

                  <div className="card-rating">
                    <div className="stars">
                      {[1,2,3,4,5].map(i => (
                        <Star
                          key={i}
                          style={{
                            width: 14, height: 14,
                            color: i <= Math.round(product.rating) ? '#D4A843' : '#DDD9D1',
                            fill: i <= Math.round(product.rating) ? '#D4A843' : '#DDD9D1'
                          }}
                        />
                      ))}
                    </div>
                    <span className="rating-text">{product.rating} · {product.reviews} reviews</span>
                  </div>

                  <div className="card-price-row">
                    <span className="price-current">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="price-original">${product.originalPrice.toFixed(2)}</span>
                    )}
                  </div>

                  <button type="button" className="card-cta">
                    View Product
                    <ChevronRight style={{ width: 15, height: 15 }} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="section-footer">
            <Link to="/shop" className="marketplace-link">
              <ShoppingBag style={{ width: 16, height: 16 }} />
              Explore Full Marketplace
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}