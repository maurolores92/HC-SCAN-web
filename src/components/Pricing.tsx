import React, { useState, useEffect } from 'react';
import { Check, Sparkles, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { PlanDto } from '../types';
import { fetchPublicPlans, FALLBACK_PLANS } from '../services/api';

interface PricingProps {
  onSelectPlan: (plan: PlanDto) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [plans, setPlans] = useState<PlanDto[]>(FALLBACK_PLANS);
  const [loading, setLoading] = useState<boolean>(true);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  useEffect(() => {
    let isMounted = true;
    fetchPublicPlans()
      .then((data) => {
        if (isMounted && data.length > 0) {
          setPlans(data);
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const formatPrice = (plan: PlanDto) => {
    if (plan.priceMonthly === 0 || plan.isTrial) {
      return '$ 0';
    }
    const finalPrice = billingCycle === 'annual' ? Math.round(plan.priceMonthly * 0.8) : plan.priceMonthly;
    return `$ ${finalPrice.toLocaleString('es-AR')}`;
  };

  return (
    <section id="planes" style={{ padding: '6rem 0', backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Zap size={14} color="var(--color-primary)" />
            <span>Planes y Precios Transparentes en Pesos (ARS)</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
            Elige el plan ideal para tu <span className="gradient-text">Volumen de Escaneo</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
            Todos los valores están expresados en <strong>pesos argentinos (ARS)</strong>. Puedes comenzar hoy mismo con nuestra <strong>prueba gratuita de 6 días</strong> sin tarjeta ni compromiso.
          </p>

          {/* Billing Cycle Toggle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'var(--bg-subtle)',
              padding: '0.35rem',
              borderRadius: '9999px',
              border: '1px solid var(--border-color)',
              marginTop: '1.5rem',
            }}
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '0.45rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                backgroundColor: billingCycle === 'monthly' ? 'var(--color-primary)' : 'transparent',
                color: billingCycle === 'monthly' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.2s',
              }}
            >
              Facturación Mensual
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              style={{
                padding: '0.45rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                backgroundColor: billingCycle === 'annual' ? 'var(--color-primary)' : 'transparent',
                color: billingCycle === 'annual' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <span>Anual</span>
              <span
                style={{
                  fontSize: '0.6875rem',
                  backgroundColor: 'var(--color-accent)',
                  color: '#ffffff',
                  padding: '0.1rem 0.45rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                }}
              >
                Ahorra 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {plans.map((plan) => {
            const isFeatured = plan.slug === 'pro' || plan.name.toLowerCase().includes('pro');
            const isFreeTrial = plan.priceMonthly === 0 || plan.isTrial;

            return (
              <div
                key={plan.id}
                className="light-card"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: isFeatured
                    ? '2px solid var(--color-primary)'
                    : isFreeTrial
                    ? '2px solid var(--color-accent)'
                    : '1px solid var(--border-color)',
                  backgroundColor: isFeatured
                    ? 'var(--color-primary-light)'
                    : isFreeTrial
                    ? 'var(--color-accent-light)'
                    : '#ffffff',
                  boxShadow: isFeatured ? 'var(--shadow-xl)' : 'var(--shadow-md)',
                }}
              >
                {/* Popular or Trial Pill */}
                {isFeatured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'var(--color-primary)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.85rem',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 12px var(--color-primary-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <Sparkles size={12} />
                    <span>MÁS POPULAR</span>
                  </div>
                )}

                {isFreeTrial && !isFeatured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'var(--color-accent)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.85rem',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <Sparkles size={12} />
                    <span>PRUEBA 6 DÍAS</span>
                  </div>
                )}

                <div>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                      {plan.name}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', minHeight: '40px' }}>
                      {plan.description || 'Equipamiento de escaneo y software inteligente para tu empresa.'}
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.75rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                      <span style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--text-main)' }}>
                        {formatPrice(plan)}
                      </span>
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                        {isFreeTrial ? ' / 6 días' : ' / mes'}
                      </span>
                    </div>

                    {plan.originalCurrency === 'USD' && plan.originalPrice && plan.priceMonthly > 0 ? (
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                        Base: US$ {plan.originalPrice} (cotizado a ${plan.exchangeRate?.toLocaleString('es-AR')} ARS)
                      </p>
                    ) : isFreeTrial ? (
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, marginTop: '0.35rem' }}>
                        Sin costo durante 6 días • Sin tarjeta requerida
                      </p>
                    ) : (
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                        Moneda: Pesos Argentinos (ARS)
                      </p>
                    )}
                  </div>

                  {/* Limits and Benefits List */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <Check size={16} color="var(--color-accent)" strokeWidth={2.5} />
                      <span><strong>{plan.maxDocuments ? plan.maxDocuments.toLocaleString('es-AR') : 'Ilimitados'}</strong> documentos / mes</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <Check size={16} color="var(--color-accent)" strokeWidth={2.5} />
                      <span><strong>{plan.maxAiQueriesMonthly ? plan.maxAiQueriesMonthly.toLocaleString('es-AR') : 'Ilimitadas'}</strong> consultas IA</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <Check size={16} color="var(--color-accent)" strokeWidth={2.5} />
                      <span><strong>{plan.maxStorageMb ? Math.round(plan.maxStorageMb / 1024) + ' GB' : 'Ilimitado'}</strong> almacenamiento seguro</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <Check size={16} color="var(--color-accent)" strokeWidth={2.5} />
                      <span><strong>{plan.maxUsers ? `${plan.maxUsers} usuarios` : 'Usuarios ilimitados'}</strong></span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <Check size={16} color="var(--color-accent)" strokeWidth={2.5} />
                      <span>Hardware HP certificado en comodato</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <Check size={16} color="var(--color-accent)" strokeWidth={2.5} />
                      <span>Aislamiento estricto de empresa</span>
                    </li>
                  </ul>
                </div>

                {/* Plan Action CTA */}
                <button
                  onClick={() => onSelectPlan(plan)}
                  className={isFeatured ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  <span>{isFreeTrial ? 'Comenzar Prueba Gratis (6 Días)' : 'Elegir Plan y Probar 6 Días'}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer Guarantee */}
        <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          ¿Necesitas un plan a medida para más de 10 sedes o escaneo industrial masivo?{' '}
          <a href="#contacto" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}>
            Habla con un asesor comercial de HelpCopies
          </a>
        </div>
      </div>
    </section>
  );
};
