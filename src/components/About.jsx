import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const e = personalInfo.education;
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">Tentang</p>
        <h2>Tentang saya</h2>
        <p>{personalInfo.bio}</p>
        <div style={{ marginTop: 24 }}>
          <h3>Pendidikan</h3>
          <p><strong style={{ color: '#0f172a' }}>{e.institution}</strong> — {e.location}</p>
          <p>{e.degree} — {e.major}</p>
          <p className="mono" style={{ fontSize: 13 }}>{e.period} · IPK {e.gpa} / {e.maxGpa} · {e.status}</p>
        </div>
      </div>
    </section>
  );
}
