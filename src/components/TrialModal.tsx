import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { PlanDto, RegisterTrialResponse } from '../types';
import { registerTrialUser } from '../services/api';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PlanDto | null;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose, selectedPlan }) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<RegisterTrialResponse | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await registerTrialUser({
        fullName,
        companyName,
        email,
        phone,
        password,
        planId: selectedPlan?.id,
      });

      setResponse(res);
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error al procesar el registro');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFullName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setError(null);
    setResponse(null);
    onClose();
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 0.9rem',
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
    marginBottom: '0.35rem',
    fontWeight: 500,
  };

  const formatDate = (isoString?: string) => {
    if (!isoString) return 'dentro de 6 días';
    try {
      return new Date(isoString).toLocaleDateString('es-AR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    } catch {
      return isoString;
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(6px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={handleReset}
    >
      <div
        className="light-card"
        style={{
          width: '100%',
          maxWidth: '540px',
          padding: '2.5rem',
          backgroundColor: '#ffffff',
          border: '1px solid var(--border-color)',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            color: 'var(--text-muted)',
            padding: '0.25rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        {response ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(5, 150, 105, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
              }}
            >
              <CheckCircle2 size={36} color="var(--color-accent)" />
            </div>
            <h3 className="heading-font" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              ¡Tu cuenta de prueba fue creada con éxito!
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Bienvenido/a, <strong>{response.user.name}</strong>. Tu empresa <strong>{response.company.name}</strong> ha sido dada de alta y tu prueba gratuita de 6 días está activa hasta el <strong>{formatDate(response.trialEndsAt)}</strong>.
            </p>

            <div
              style={{
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: '0.75rem',
                padding: '1rem 1.25rem',
                textAlign: 'left',
                fontSize: '0.8125rem',
                marginBottom: '1.75rem',
                border: '1px solid var(--border-color)',
              }}
            >
              <div style={{ marginBottom: '0.4rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Correo de acceso:</span>{' '}
                <strong style={{ color: 'var(--text-main)' }}>{response.user.email}</strong>
              </div>
              <div style={{ marginBottom: '0.4rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Teléfono registrado:</span>{' '}
                <strong style={{ color: 'var(--text-main)' }}>{response.user.phone}</strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>Plan:</span>{' '}
                <strong style={{ color: 'var(--color-primary)' }}>{response.company.plan?.name || 'Prueba Gratuita 6 Días'}</strong>
              </div>
            </div>

            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Nos pondremos en contacto contigo a través de WhatsApp o llamada telefónica para coordinar la entrega de tu escáner HP y acompañarte en la prueba.
            </p>

            <a
              href="http://localhost:3000/login"
              className="btn-primary"
              style={{ width: '100%', padding: '0.85rem', display: 'inline-flex', justifyContent: 'center' }}
            >
              <span>Ingresar al Portal de Clientes</span>
              <ArrowRight size={16} />
            </a>
          </div>
        ) : (
          <div>
            <div className="badge-pill badge-emerald" style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} color="var(--color-accent)" />
              <span>Prueba de 6 Días sin Compromiso</span>
            </div>
            <h3 className="heading-font" style={{ fontSize: '1.625rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              Crea tu Cuenta y Prueba HC-Scan
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.75rem' }}>
              {selectedPlan
                ? `Plan seleccionado: ${selectedPlan.name}. Activa hoy tus 6 días de acceso sin cargo.`
                : 'Completa tus datos para activar 6 días de escaneo inteligente con IA para tu empresa.'}
            </p>

            {error && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: '#b91c1c',
                  fontSize: '0.8125rem',
                  marginBottom: '1.25rem',
                }}
              >
                <AlertCircle size={18} style={{ flexShrink: 0 }} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>
                  Nombre y Apellido *
                </label>
                <input
                  required
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej: Marcelo Gómez"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>
                  Empresa o Razón Social *
                </label>
                <input
                  required
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Ej: Gómez Logística S.A."
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>
                  Correo Electrónico Corporativo *
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="marcelo@empresa.com"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>
                  Número de Teléfono / WhatsApp * (Obligatorio)
                </label>
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+54 11 9876-5432"
                  style={inputStyle}
                />
                <span style={{ fontSize: '0.71875rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.25rem' }}>
                  Te contactaremos por este medio para validar tu prueba y coordinar el escáner.
                </span>
              </div>

              <div>
                <label style={labelStyle}>
                  Contraseña de Acceso * (Mínimo 6 caracteres)
                </label>
                <input
                  required
                  type="password"
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ marginTop: '0.5rem', padding: '0.9rem' }}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Creando cuenta de prueba...</span>
                  </>
                ) : (
                  <>
                    <span>Activar mi Prueba de 6 Días Gratis</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              <div style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                ¿Ya tienes una cuenta activa en el sistema?{' '}
                <a href="http://localhost:3000/login" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                  Inicia sesión aquí
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
