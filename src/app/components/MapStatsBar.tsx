import { MapPin, Shield, Truck, Star, Users, Package } from 'lucide-react';

export function MapStatsBar() {
  const stats = [
    { icon: MapPin, value: '240+', label: 'Local Vendors', color: '#10B981', bg: '#ECFDF5' },
    { icon: Package, value: '8,500+', label: 'Products Listed', color: '#3B82F6', bg: '#EFF6FF' },
    { icon: Users, value: '12K+', label: 'Happy Customers', color: '#8B5CF6', bg: '#F5F3FF' },
    { icon: Star, value: '4.8', label: 'Avg. Rating', color: '#F59E0B', bg: '#FFFBEB' },
    { icon: Truck, value: 'Same Day', label: 'Delivery Available', color: '#EF4444', bg: '#FEF2F2' },
    { icon: Shield, value: '100%', label: 'Secure Payments', color: '#6366F1', bg: '#EEF2FF' },
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
      padding: 'clamp(16px, 3vw, 28px) clamp(12px, 3vw, 32px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle background dots pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Top label */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(12px, 2vw, 20px)',
        }}>
          <span style={{
            fontSize: 'clamp(10px, 1vw, 12px)',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#10B981',
          }}>
            Trusted by thousands across the city
          </span>
        </div>

        {/* Stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 'clamp(6px, 1.5vw, 16px)',
        }} className="stats-grid">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  padding: 'clamp(10px, 1.5vw, 16px) clamp(6px, 1vw, 12px)',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transition: 'all 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.borderColor = `${stat.color}55`;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 'clamp(32px, 3.5vw, 42px)',
                  height: 'clamp(32px, 3.5vw, 42px)',
                  borderRadius: '10px',
                  background: `${stat.color}22`,
                  border: `1px solid ${stat.color}44`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon style={{ width: 'clamp(14px, 1.8vw, 18px)', height: 'clamp(14px, 1.8vw, 18px)', color: stat.color }} />
                </div>

                {/* Value */}
                <span style={{
                  fontSize: 'clamp(14px, 1.8vw, 22px)',
                  fontWeight: '700',
                  color: '#F8FAFC',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}>
                  {stat.value}
                </span>

                {/* Label */}
                <span style={{
                  fontSize: 'clamp(9px, 0.85vw, 11px)',
                  color: '#94A3B8',
                  fontWeight: '500',
                  textAlign: 'center',
                  lineHeight: 1.3,
                }}>
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 360px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}