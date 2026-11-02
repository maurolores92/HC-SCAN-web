import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Headphones } from 'lucide-react';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    scannersCount: '1',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simula envío exitoso (o endpoint backend si existiera)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    color: 'var(--text-main)',
    fontSize: '0.875rem',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8125rem',
    color: 'var(--text-secondary)',
    marginBottom: '0.4rem',
    fontWeight: 500,
  };

  return (
    <section id="contacto" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Headphones size={14} color="var(--color-primary)" />
            <span>Contacto y Asesoramiento</span>
          </div>
          <h2 className="heading-font" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
            Hablemos sobre las necesidades de <span className="gradient-text">tu Empresa</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
            ¿Tienes dudas sobre la compatibilidad con tus sistemas actuales o necesitas asesoramiento sobre qué equipo HP alquilar? Nuestro equipo técnico está para ayudarte.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'flex-start',
          }}
        >
          {/* Contact Details Card */}
          <div className="light-card" style={{ padding: '2.5rem' }}>
            <h3 className="heading-font" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              Información Comercial y Soporte
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              HelpCopies ofrece cobertura integral en instalación, mantenimiento y reemplazo de escáneres en 24 horas.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '0.5rem', backgroundColor: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Correo comercial</span>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>contacto@helpcopies.com.ar</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '0.5rem', backgroundColor: 'rgba(5, 150, 105, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={20} color="var(--color-accent)" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Atención telefónica / WhatsApp</span>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>+54 (11) 4567-8900</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '0.5rem', backgroundColor: 'rgba(2, 132, 199, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={20} color="var(--color-secondary)" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Cobertura</span>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>Instalación y entrega de equipos a nivel nacional</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', padding: '1.25rem', backgroundColor: 'var(--color-primary-light)', borderRadius: '0.75rem', border: '1px solid #bfdbfe' }}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)', display: 'block', marginBottom: '0.25rem' }}>
                ¿Prefieres que te llamemos?
              </span>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                Completa el formulario y un especialista técnico te contactará en menos de 2 horas hábiles.
              </p>
            </div>
          </div>

          {/* Contact Interactive Form */}
          <div className="light-card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(5, 150, 105, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <CheckCircle2 size={36} color="var(--color-accent)" />
                </div>
                <h3 className="heading-font" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '2rem' }}>
                  Gracias por tu interés en <strong>HC-Scan</strong>. Nuestro equipo comercial se comunicará contigo al correo <em>{formData.email}</em> para coordinar tu prueba de 6 días.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ fontSize: '0.875rem' }}
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={labelStyle}>
                      Nombre y Apellido *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ej: Juan Pérez"
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>
                      Empresa / Razón Social *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Ej: Logística Austral S.A."
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={labelStyle}>
                      Correo Electrónico *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="juan@tuempresa.com"
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>
                      Teléfono de Contacto
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+54 11 1234-5678"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>
                    Cantidad de Escáneres deseados
                  </label>
                  <select
                    value={formData.scannersCount}
                    onChange={(e) => setFormData({ ...formData, scannersCount: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="1">1 Escáner (Estudios contables / Oficina pequeña)</option>
                    <option value="2-3">2 a 3 Escáneres (Empresa mediana / Múltiples sectores)</option>
                    <option value="4+">4 o más Escáneres (Corporativo / Centros logísticos)</option>
                    <option value="software-only">Solo software (Ya dispongo de equipos HP)</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>
                    Mensaje o Consulta Específica
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos brevemente qué tipo de documentos escanean habitualmente (facturas, remitos, historias clínicas...)"
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.9rem', marginTop: '0.5rem' }}
                >
                  <Send size={18} />
                  <span>{loading ? 'Enviando...' : 'Enviar Consulta y Solicitar Prueba'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
