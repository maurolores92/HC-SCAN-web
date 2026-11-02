import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

interface CtaBannerProps {
  onOpenTrial: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenTrial }) => {
  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="container">
        <div
          className="light-card"
          style={{
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            borderRadius: '1.5rem',
            background: 'linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)',
            border: '1px solid #bfdbfe',
            boxShadow: 'var(--shadow-xl)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <div className="badge-pill badge-emerald" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={14} />
            <span>Prueba de 6 Días sin Compromiso</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 900,
              maxWidth: '800px',
              marginBottom: '1rem',
              lineHeight: 1.2,
              color: 'var(--text-main)',
            }}
          >
            Crea tu cuenta y prueba nuestro sistema <span className="gradient-text">HC-Scan por 6 días</span>
          </h2>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.0625rem',
              maxWidth: '650px',
              lineHeight: 1.6,
              marginBottom: '2rem',
            }}
          >
            Digitaliza facturas, remitos y documentos contables en segundos. Te instalamos el escáner HP o sube tus archivos PDF directamente a la plataforma para experimentar la extracción OCR e IA.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <button
              onClick={onOpenTrial}
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
            >
              <span>Comenzar Prueba Gratuita</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/5491100000000?text=Hola,%20quisiera%20asesoramiento%20sobre%20el%20alquiler%20de%20esc%C3%A1neres%20HC-Scan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '1rem', padding: '0.9rem 1.75rem', backgroundColor: '#ffffff' }}
            >
              <MessageCircle size={18} color="var(--color-accent)" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>

          <p style={{ marginTop: '1.5rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            ✓ Activación inmediata • Cancelación automática sin penalizaciones
          </p>
        </div>
      </div>
    </section>
  );
};
