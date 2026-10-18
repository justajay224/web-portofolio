import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const educations = personalInfo.educations || [personalInfo.education];
  const paragraphs = personalInfo.bio.split('\n\n');
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">Tentang</p>
        <h2>Tentang saya</h2>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div style={{ marginTop: 24 }}>
          <h3>Pendidikan</h3>
          {educations.map((e) => (
            <div key={e.institution} style={{ marginBottom: 20 }}>
              <p><strong style={{ color: '#0f172a' }}>{e.institution}</strong>{e.location ? ` — ${e.location}` : ''}</p>
              <p>{e.degree} — {e.major}</p>
              <p className="mono" style={{ fontSize: 13 }}>{e.period}{e.gpa ? ` · IPK ${e.gpa} / ${e.maxGpa}` : ''} · {e.status}</p>
              {e.detail ? <p style={{ fontSize: 14, color: '#475569' }}>{e.detail}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
