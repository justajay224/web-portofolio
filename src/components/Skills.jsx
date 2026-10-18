import React from 'react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Keahlian</p>
        <h2>Keahlian</h2>
        {skillCategories.map((cat) => (
          <div key={cat.category} style={{ marginTop: 24 }}>
            <h3>{cat.category}</h3>
            <p style={{ marginBottom: 10 }}>{cat.description}</p>
            <div>
              {cat.skills.map((s) => (<span key={s.name} className="tag">{s.name} — {s.tag}</span>))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
