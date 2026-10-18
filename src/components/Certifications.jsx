import React from 'react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <p className="section-label">Sertifikat</p>
        <h2>Sertifikasi</h2>
        <ul style={{ listStyle: 'none', marginTop: 8 }}>
          {certifications.map((c) => (
            <li key={c.name} style={{ padding: '12px 0', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <span><strong style={{ color: '#0f172a' }}>{c.name}</strong> — <span style={{ color: '#475569' }}>{c.issuer}</span></span>
              <span className="mono" style={{ fontSize: 13, color: '#64748b' }}>{c.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
