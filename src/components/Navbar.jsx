import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: 'Tentang', href: '#about' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Proyek', href: '#projects' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Sertifikat', href: '#certifications' },
    { label: 'Kontak', href: '#contact' },
  ];
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
        <a href="#" style={{ color: '#0f172a', fontWeight: 800, fontSize: 16, textDecoration: 'none' }}>{personalInfo.name}</a>
        <nav className="desktop-nav" style={{ display: 'flex', gap: 20 }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} style={{ color: '#475569', fontSize: 14, textDecoration: 'none' }}>{l.label}</a>
          ))}
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '6px 10px', cursor: 'pointer' }} className="mobile-toggle">
          {isOpen ? 'Tutup' : 'Menu'}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu" style={{ borderTop: '1px solid #e2e8f0', padding: '12px 20px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setIsOpen(false)} style={{ color: '#0f172a', fontWeight: 600 }}>{l.label}</a>
          ))}
        </div>
      )}
      <style>{`@media (min-width: 860px) { .mobile-toggle { display: none !important; } .mobile-menu { display: none !important; } } @media (max-width: 859px) { .desktop-nav { display: none !important; } }`}</style>
    </header>
  );
}
