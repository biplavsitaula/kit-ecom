import { Shirt, Laptop, Home, Watch, Headphones, ShoppingBag } from 'lucide-react';

export function CategoriesSection() {
  const categories = [
    { name: 'Fashion', icon: Shirt, count: '2,340', color: '#3B82F6', bg: '#EFF6FF' },
    { name: 'Electronics', icon: Laptop, count: '1,856', color: '#8B5CF6', bg: '#F5F3FF' },
    { name: 'Home & Living', icon: Home, count: '3,124', color: '#10B981', bg: '#ECFDF5' },
    { name: 'Accessories', icon: Watch, count: '987', color: '#F59E0B', bg: '#FFFBEB' },
    { name: 'Audio', icon: Headphones, count: '645', color: '#EF4444', bg: '#FEF2F2' },
    { name: 'Bags', icon: ShoppingBag, count: '1,234', color: '#6366F1', bg: '#EEF2FF' },
  ];

  return (
    <section
      id="categories"
      style={{
        background: '#FAFAFA',
        padding: 'clamp(20px, 4vw, 40px) 0',
        borderTop: '1px solid #F0F0F0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(12px, 3vw, 32px)' }}>

        {/* Compact header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'clamp(14px, 2.5vw, 24px)' }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, #E5E7EB)' }} />
          <div style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(15px, 2.2vw, 20px)',
              fontWeight: '700',
              color: '#111827',
              letterSpacing: '-0.02em',
              margin: 0,
              whiteSpace: 'nowrap',
            }}>
              Shop by Category
            </h2>
          </div>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, #E5E7EB)' }} />
        </div>

        {/* Category grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 'clamp(8px, 1.5vw, 14px)',
        }}
          className="categories-grid"
        >
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className="category-card"
                style={{
                  background: '#fff',
                  border: '1px solid #EBEBEB',
                  borderRadius: '14px',
                  padding: 'clamp(10px, 2vw, 18px) clamp(6px, 1vw, 12px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(-3px)';
                  el.style.boxShadow = `0 8px 24px ${cat.color}22`;
                  el.style.borderColor = `${cat.color}44`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                  el.style.borderColor = '#EBEBEB';
                }}
              >
                {/* Icon circle */}
                <div style={{
                  width: 'clamp(40px, 5vw, 52px)',
                  height: 'clamp(40px, 5vw, 52px)',
                  borderRadius: '50%',
                  background: cat.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon style={{ width: 'clamp(18px, 2.2vw, 24px)', height: 'clamp(18px, 2.2vw, 24px)', color: cat.color }} />
                </div>

                {/* Text */}
                <div style={{ textAlign: 'center', lineHeight: 1.3 }}>
                  <div style={{
                    fontWeight: '600',
                    fontSize: 'clamp(11px, 1.1vw, 13px)',
                    color: '#111827',
                    marginBottom: '2px',
                  }}>
                    {cat.name}
                  </div>
                  <div style={{
                    fontSize: 'clamp(9px, 0.9vw, 11px)',
                    color: '#9CA3AF',
                    fontWeight: '500',
                  }}>
                    {cat.count} items
                  </div>
                </div>

                {/* Bottom accent bar on hover */}
                <div
                  className="accent-bar"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: cat.color,
                    transform: 'scaleX(0)',
                    transition: 'transform 0.2s ease',
                    transformOrigin: 'center',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .categories-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 380px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        .category-card:hover .accent-bar {
          transform: scaleX(1) !important;
        }
      `}</style>
    </section>
  );
}