import React from 'react';
import { personalInfo } from '../data/portfolioData';
import DotBackground from './DotBackground';

export default function Hero() {
  return (
    <section style={{ padding: '120px 0 56px', position: 'relative', overflow: 'hidden' }}>
      <DotBackground />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <p className="mono" style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#64748b', marginBottom: 16 }}>
          {personalInfo.title} — {personalInfo.location}
        </p>
        <h1>{personalInfo.name}</h1>
        <p className="lead" style={{ marginTop: 16, maxWidth: 640 }}>{personalInfo.tagline}</p>
        <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">Lihat Proyek</a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
          <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
          <a href="#contact" className="btn">Kontak</a>
        </div>
      </div>
    </section>
  );
}
