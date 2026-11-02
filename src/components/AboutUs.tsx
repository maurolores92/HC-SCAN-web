import React from 'react';
import { ShieldCheck, Wrench, Building2, CheckCircle } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const stats = [
    { value: '+30', label: 'Años de Trayectoria', desc: 'Liderando soluciones de impresión y digitalización' },
    { value: '+500K', label: 'Documentos Indexados', desc: 'Facturas, remitos y contratos procesados con éxito' },
    { value: '99.8%', label: 'Precisión OCR', desc: 'Detección precisa de CUITs, fechas y totales' },
    { value: '< 24hs', label: 'Soporte y Reposición', desc: 'Mantenimiento preventivo de escáneres HP' },
  ];

  const pillars = [
    {
      title: 'Modelo de Alquiler Todo Incluido',
      desc: 'Sin necesidad de comprar costosos equipos de digitalización. Te instalamos hardware HP de alta velocidad con insumos y soporte integral.',
    },
    {
      title: 'Digitalización Autónoma',
      desc: 'Eliminamos las tareas manuales de escaneo y renombrado de archivos. Cada página enviada por SFTP es analizada y archivada automáticamente.',
    },
    {
      title: 'Bóveda Cifrada e Inteligente',
      desc: 'Tus documentos no son simples PDFs en una carpeta: son registros vivos en bases de datos con los que puedes interactuar mediante IA.',
    },
  ];

  return (
    <section id="nosotros" style={{ padding: '6rem 0', backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Building2 size={14} />
            <span>Quiénes Somos</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
            Innovación en Digitalización respaldada por <span className="gradient-text">HelpCopies</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
            En HelpCopies combinamos más de 15 años de experiencia en equipamiento de impresión empresarial con la tecnología más avanzada en Inteligencia Artificial.
            Creamos <strong>HC-Scan</strong> para transformar el alquiler de escáneres en un centro neurálgico de gestión documental inteligente.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="light-card"
              style={{
                padding: '2rem 1.5rem',
                textAlign: 'center',
                backgroundColor: 'var(--bg-page)',
              }}
            >
              <div
                style={{ fontSize: '2.75rem', fontWeight: 900, marginBottom: '0.5rem', lineHeight: 1, color: 'var(--color-primary)' }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                {stat.label}
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Story / Pillars Split View */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.3, color: 'var(--text-main)' }}>
              ¿Por qué conformarte con un escáner tradicional cuando puedes tener un asistente documental?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Los escáneres convencionales acumulan archivos en carpetas desorganizadas que nadie revisa. Con HC-Scan, cada hoja que pasa por el alimentador HP se convierte en un registro contable indexado, con CUIT, número de comprobante, vencimiento e importes listos para consultar.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {pillars.map((pillar, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '0.2rem',
                    }}
                  >
                    <CheckCircle size={16} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                      {pillar.title}
                    </h4>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="light-card"
            style={{
              padding: '2.5rem',
              backgroundColor: 'var(--bg-page)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div className="badge-pill badge-emerald" style={{ marginBottom: '1.5rem' }}>
              <ShieldCheck size={14} />
              <span>Garantía de Servicio HelpCopies</span>
            </div>
            <h4 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-main)' }}>
              Equipamiento Profesional Certificado
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Trabajamos con las líneas más confiables del mercado: <strong>HP LaserJet Enterprise y HP ScanJet Pro</strong>, configuradas a medida de la red de tu oficina para una transmisión SFTP encriptada y sin interrupciones.
            </p>
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '0.75rem',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <Wrench size={18} color="var(--color-secondary)" />
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Mantenimiento e Insumos 100% Cubiertos
                </span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>
                Si algún equipo presenta desgaste, nuestro servicio técnico especializado lo calibra o reemplaza en menos de 24 horas sin costo extra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
