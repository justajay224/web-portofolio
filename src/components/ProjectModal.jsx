import React from 'react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
          <p className="mono" style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#64748b' }}>{project.categoryLabel} · {project.year}</p>
          <button onClick={onClose} style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '4px 10px', cursor: 'pointer' }}>Tutup</button>
        </div>
        <h2 style={{ marginTop: 12 }}>{project.title}</h2>
        <p style={{ marginTop: 8 }}>{project.fullDesc || project.shortDesc}</p>
        {project.isConfidential && project.confidentialNote && (<p style={{ marginTop: 12, fontSize: 14 }}>{project.confidentialNote}</p>)}
        {project.problemSolved && (<><h3 style={{ marginTop: 20 }}>Masalah yang diselesaikan</h3><p>{project.problemSolved}</p></>)}
        {project.architecture && (<><h3 style={{ marginTop: 20 }}>Arsitektur</h3><p>{project.architecture}</p></>)}
        {project.features && (<><h3 style={{ marginTop: 20 }}>Fitur</h3><ul style={{ paddingLeft: 20, color: '#475569' }}>{project.features.map((f, i) => (<li key={i} style={{ marginBottom: 6 }}>{f}</li>))}</ul></>)}
        <div style={{ marginTop: 16 }}>{project.techStack.map((t) => (<span key={t} className="tag">{t}</span>))}</div>
        {project.images && project.images.length > 0 && ((project.id === 'cleanvid' || project.id === 'wheelchair-app') ? (
          <div className={"project-images" + (project.id === 'cleanvid' ? ' project-images-sm' : '')}>
            {project.images.map((src) => (<img key={src} src={src} alt={project.title} />))}
          </div>
        ) : (
          <div>{project.images.map((src) => (<img key={src} src={src} alt={project.title} />))}</div>
        ))}

        {project.githubUrl && (<p style={{ marginTop: 16 }}><a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>Lihat di GitHub →</a></p>)}
      </div>
    </div>
  );
}
