import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Proyek</p>
        <h2>Proyek yang pernah dibuat</h2>
        <p>Delapan proyek: enam mandiri (termasuk simulasi jaringan kantor, konfigurasi MikroTik, dan server Linux — ketiganya teks saja, tanpa screenshot) dan dua magang perusahaan (NDA).</p>
        <div style={{ marginTop: 8 }}>
          {projects.map((p) => (
            <article key={p.id} className="project-row">
              <p className="project-meta">{p.categoryLabel} · {p.year}{p.isConfidential ? ' · NDA' : ''}</p>
              <h3>{p.title}</h3>
              <p>{p.shortDesc}</p>
              <div style={{ marginTop: 10 }}>{p.techStack.map((t) => (<span key={t} className="tag">{t}</span>))}</div>
              <div style={{ marginTop: 12, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <button onClick={() => setSelected(p)} className="link-arrow" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1d4ed8', fontWeight: 600, fontSize: 14, padding: 0 }}>Lihat detail →</button>
                {p.githubUrl && (<a href={p.githubUrl} target="_blank" rel="noreferrer" style={{ fontWeight: 600, fontSize: 14 }}>GitHub →</a>)}
              </div>
            </article>
          ))}
        </div>
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
