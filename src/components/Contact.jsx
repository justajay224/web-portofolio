import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">Kontak</p>
        <h2>Hubungi saya</h2>
        <p>Untuk diskusi kerja, kolaborasi, atau pertanyaan tentang proyek di atas, silakan hubungi melalui email atau WhatsApp.</p>
        <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href={personalInfo.socials.email} className="btn btn-primary">Email</a>
          <a href={personalInfo.whatsappUrl} target="_blank" rel="noreferrer" className="btn">WhatsApp</a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
          <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
        </div>
      </div>
    </section>
  );
}
