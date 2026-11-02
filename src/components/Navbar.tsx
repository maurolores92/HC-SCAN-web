import React, { useState, useEffect } from 'react';
import { Scan, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Quiénes Somos', href: '#nosotros' },
    { label: 'Por qué elegirnos', href: '#por-que-elegirnos' },
    { label: 'Planes', href: '#planes' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '0.625rem',
              backgroundColor: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px var(--color-primary-glow)',
            }}
          >
            <Scan size={22} color="#ffffff" strokeWidth={2.5} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
                HC-Scan
              </span>
              <span
                style={{
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-primary-light)',
                  color: 'var(--color-primary)',
                  border: '1px solid rgba(37, 99, 235, 0.2)',
                }}
              >
                IA 2.0
              </span>
            </div>
            <p style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', margin: 0 }}>por HelpCopies ERP</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href="http://localhost:3000/login"
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--text-main)',
              padding: '0.6rem 1rem',
              borderRadius: '0.5rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-subtle)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Iniciar Sesión
          </a>
          <button
            onClick={onOpenTrial}
            className="btn-primary"
            style={{
              padding: '0.6rem 1.25rem',
              fontSize: '0.875rem',
            }}
          >
            <Sparkles size={16} />
            <span>Prueba 6 días gratis</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-main)' }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ height: '1px', backgroundColor: 'var(--border-color)', margin: '0.5rem 0' }} />
          <a
            href="http://localhost:3000/login"
            style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-primary)' }}
          >
            Iniciar Sesión en el Portal
          </a>
        </div>
      )}
    </nav>
  );
};
