import React from 'react';
import {
  Printer,
  Zap,
  Cpu,
  MessagesSquare,
  Lock,
  BarChart3,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Printer size={26} color="var(--color-primary)" />,
      tag: 'Hardware Incluido',
      title: 'Alquiler de Escáneres HP de Alto Rendimiento',
      desc: 'Evita compras costosas y obsolescencia de equipos. Te entregamos escáneres con alimentador ADF de doble pasada y repuestos incluidos.',
    },
    {
      icon: <Zap size={26} color="var(--color-secondary)" />,
      tag: 'Carga Invisible',
      title: 'Sincronización Automática por SFTP',
      desc: 'Configuramos tu escáner para que al pulsar un botón envíe el PDF encriptado a tu carpeta /inbox. Nuestro watcher en tiempo real lo toma al instante.',
    },
    {
      icon: <Cpu size={26} color="var(--color-accent)" />,
      tag: 'OCR Híbrido',
      title: 'Extracción Inteligente de Datos Contables',
      desc: 'Detección automática de facturas, remitos, notas de pedido, CUITs, fechas, importes totales e involucrados, almacenados en PostgreSQL.',
    },
    {
      icon: <MessagesSquare size={26} color="var(--color-primary)" />,
      tag: 'IA Documental',
      title: 'Chat IA para Consultas en Lenguaje Natural',
      desc: 'Pregúntale a tu repositorio como si hablaras con un analista contable. Obtén sumatorias de gastos y citas exactas del archivo original.',
    },
    {
      icon: <Lock size={26} color="#d97706" />,
      tag: 'Seguridad Empresarial',
      title: 'Aislamiento Estricto Multi-Tenant',
      desc: 'Bóvedas virtuales independientes por compañía. Ninguna empresa puede ver ni consultar archivos de otra, garantizado por permisos CASL y SQL.',
    },
    {
      icon: <BarChart3 size={26} color="#db2777" />,
      tag: 'Gestión y Control',
      title: 'Auditoría Total y Control de Cuotas',
      desc: 'Visualiza el consumo mensual de documentos y consultas IA, administra roles y consulta el registro de trazabilidad de cada acción de tus usuarios.',
    },
  ];

  return (
    <section id="por-que-elegirnos" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Por qué elegirnos</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
            La combinación perfecta entre <span className="gradient-text">Hardware y Software</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
            No necesitas contratar desarrolladores ni comprar servidores. Nosotros te entregamos el escáner listo para usar y la plataforma en la nube conectada.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="light-card"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '3.25rem',
                      height: '3.25rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'var(--bg-subtle)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {feat.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {feat.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.1875rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                  {feat.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {feat.desc}
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 600 }}>
                <CheckCircle2 size={16} color="var(--color-accent)" />
                <span>Disponible en tu prueba de 6 días</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
