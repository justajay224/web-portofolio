import React from 'react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">Pengalaman</p>
        <h2>Pengalaman magang</h2>
        {experiences.map((exp) => (
          <div key={exp.id} className="project-row">
            <p className="project-meta">{exp.period} · {exp.location} · {exp.status}</p>
            <h3>{exp.role}</h3>
            <p><strong style={{ color: '#0f172a' }}>{exp.company}</strong> — {exp.project}</p>
            <p style={{ marginTop: 8 }}>{exp.description}</p>
            <ul style={{ marginTop: 12, paddingLeft: 20, color: '#475569' }}>
              {exp.contributions.map((c, i) => (<li key={i} style={{ marginBottom: 6 }}>{c}</li>))}
            </ul>
            <div style={{ marginTop: 12 }}>{exp.techStack.map((t) => (<span key={t} className="tag">{t}</span>))}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
