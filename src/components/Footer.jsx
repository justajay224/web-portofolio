import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #e2e8f0', padding: '24px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ color: '#64748b', fontSize: 14 }}>© {new Date().getFullYear()} {personalInfo.name} — {personalInfo.location}</span>
        <span style={{ display: 'flex', gap: 16, fontSize: 14 }}>
          <a href={personalInfo.socials.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#contact">Kontak</a>
        </span>
      </div>
    </footer>
  );
}
