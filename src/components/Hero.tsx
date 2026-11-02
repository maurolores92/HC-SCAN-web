import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Printer,
  Cpu,
  Bot,
  CheckCircle2,
  Clock,
} from 'lucide-react';

interface HeroProps {
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState<'scan' | 'ocr' | 'chat'>('scan');

  return (
    <section id="inicio" style={{ paddingTop: '8rem', paddingBottom: '5rem', position: 'relative' }}>
      <div className="container">
        {/* Top Announcement Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div className="badge-pill">
            <Sparkles size={14} />
            <span>Alquiler de Hardware HP + OCR e Inteligencia Artificial</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 900,
              lineHeight: 1.18,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              color: 'var(--text-main)',
            }}
          >
            Alquiler de Escáneres Inteligentes con <span className="gradient-text">OCR e Inteligencia Artificial</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '750px',
              margin: '0 auto 2.5rem',
            }}
          >
            Equipa tu empresa con impresoras y escáneres HP de alto rendimiento sin costo inicial de compra.
            El equipo sube los PDFs automáticamente vía SFTP a tu nube, nuestro motor OCR extrae los datos contables y puedes consultarlos en segundos con IA.
          </p>

          {/* Call to Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2rem',
            }}
          >
            <button
              onClick={onOpenTrial}
              className="btn-primary"
              style={{ fontSize: '1.0625rem', padding: '0.9rem 2rem' }}
            >
              <span>Prueba HC-Scan por 6 días</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="#planes"
              className="btn-secondary"
              style={{ fontSize: '1.0625rem', padding: '0.9rem 1.75rem' }}
            >
              Ver Planes y Equipos
            </a>
          </div>

          {/* Trust Guarantees */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <CheckCircle2 size={16} color="var(--color-accent)" /> Sin tarjeta de crédito
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <CheckCircle2 size={16} color="var(--color-accent)" /> Hardware HP instalado en tu oficina
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <CheckCircle2 size={16} color="var(--color-accent)" /> Prueba gratuita de 6 días
            </span>
          </div>
        </div>

        {/* Live System Workflow Simulator (Interactive Hero Showcase) */}
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div
            className="light-card"
            style={{
              padding: '1.75rem',
              boxShadow: 'var(--shadow-xl)',
              backgroundColor: '#ffffff',
            }}
          >
            {/* Top Interactive Tabs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '1rem',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginLeft: '0.5rem', fontWeight: 500 }}>
                  Flujo en tiempo real HC-Scan v2.0
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: 'var(--bg-subtle)', padding: '0.25rem', borderRadius: '0.5rem' }}>
                <button
                  onClick={() => setActiveTab('scan')}
                  style={{
                    fontSize: '0.8125rem',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '0.375rem',
                    backgroundColor: activeTab === 'scan' ? '#ffffff' : 'transparent',
                    color: activeTab === 'scan' ? 'var(--color-primary)' : 'var(--text-muted)',
                    fontWeight: activeTab === 'scan' ? 600 : 500,
                    boxShadow: activeTab === 'scan' ? 'var(--shadow-sm)' : 'none',
                  }}
                >
                  1. Escaneo SFTP
                </button>
                <button
                  onClick={() => setActiveTab('ocr')}
                  style={{
                    fontSize: '0.8125rem',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '0.375rem',
                    backgroundColor: activeTab === 'ocr' ? '#ffffff' : 'transparent',
                    color: activeTab === 'ocr' ? 'var(--color-primary)' : 'var(--text-muted)',
                    fontWeight: activeTab === 'ocr' ? 600 : 500,
                    boxShadow: activeTab === 'ocr' ? 'var(--shadow-sm)' : 'none',
                  }}
                >
                  2. Extracción OCR
                </button>
                <button
                  onClick={() => setActiveTab('chat')}
                  style={{
                    fontSize: '0.8125rem',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '0.375rem',
                    backgroundColor: activeTab === 'chat' ? '#ffffff' : 'transparent',
                    color: activeTab === 'chat' ? 'var(--color-primary)' : 'var(--text-muted)',
                    fontWeight: activeTab === 'chat' ? 600 : 500,
                    boxShadow: activeTab === 'chat' ? 'var(--shadow-sm)' : 'none',
                  }}
                >
                  3. Chat IA
                </button>
              </div>
            </div>

            {/* Showcase Display Area */}
            {activeTab === 'scan' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.5rem', borderRadius: '0.5rem', backgroundColor: 'var(--color-primary-light)' }}>
                      <Printer size={24} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-main)' }}>Impresora HP LaserJet Enterprise</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600 }}>● SFTP Conectado (Bandeja /inbox)</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    El usuario coloca el comprobante en el alimentador automático. La impresora envía el PDF digitalizado de inmediato a la bóveda privada.
                  </p>
                  <div style={{ padding: '0.75rem', backgroundColor: '#ffffff', borderRadius: '0.5rem', fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--color-primary)', border: '1px solid var(--border-color)' }}>
                    [HP_SFTP] Archivo transmitido: Factura_0001_2410.pdf (184 KB)
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.5rem', borderRadius: '0.5rem', backgroundColor: 'var(--color-secondary-light)' }}>
                      <Clock size={24} color="var(--color-secondary)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-main)' }}>Detección en Tiempo Real (Watcher)</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Latencia de detección: &lt; 50 ms</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    El servicio interno en NestJS detecta el nuevo documento al instante y lo traslada a la bóveda mensual protegida.
                  </p>
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-accent-light)', border: '1px solid rgba(5, 150, 105, 0.2)', borderRadius: '0.5rem', fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600 }}>
                    ✓ Documento almacenado en /vault/2026/10/ con hash SHA-256 verificado.
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ocr' && (
              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Cpu size={20} color="var(--color-primary)" />
                    <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-main)' }}>Datos extraídos automáticamente en PostgreSQL</span>
                  </div>
                  <span className="badge-pill badge-emerald">Precisión OCR: 99.8%</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div style={{ padding: '0.85rem', backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Tipo de comprobante</span>
                    <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-main)' }}>Factura Comercial (A)</p>
                  </div>
                  <div style={{ padding: '0.85rem', backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Proveedor / Emisor</span>
                    <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-main)' }}>Acme Corporation S.A.</p>
                  </div>
                  <div style={{ padding: '0.85rem', backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>CUIT Detectado</span>
                    <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-main)' }}>30-71458921-9</p>
                  </div>
                  <div style={{ padding: '0.85rem', backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Monto Total</span>
                    <p style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--color-accent)' }}>$ 145.200,00 ARS</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'chat' && (
              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* User query */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ backgroundColor: 'var(--color-primary)', color: '#ffffff', padding: '0.75rem 1.25rem', borderRadius: '1rem 1rem 0 1rem', maxWidth: '80%', fontSize: '0.875rem', fontWeight: 500 }}>
                      ¿Cuáles fueron las facturas mayores a $100.000 registradas este mes?
                    </div>
                  </div>
                  {/* AI response */}
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Bot size={18} color="var(--color-primary)" />
                    </div>
                    <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.25rem', borderRadius: '0 1rem 1rem 1rem', maxWidth: '85%', fontSize: '0.875rem', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                      <p style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                        Encontré <strong>1 comprobante</strong> que supera ese importe en tu repositorio:
                      </p>
                      <div style={{ padding: '0.6rem 0.85rem', backgroundColor: 'var(--bg-subtle)', borderRadius: '0.5rem', marginBottom: '0.5rem', borderLeft: '3px solid var(--color-accent)' }}>
                        📄 <strong>Factura_0001_2410.pdf</strong> — Proveedor: <em>Acme Corporation S.A.</em> por <strong>$ 145.200,00</strong> (Vencimiento: 15/11/2026).
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Respuesta generada con Gemini 2.5 Flash sobre registros verificados en PostgreSQL.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
