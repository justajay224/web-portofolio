import React, { useEffect, useState } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, AlertTriangle, ShieldCheck, Image as ImageIcon, Lock } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const [imageOrientations, setImageOrientations] = useState({});

  useEffect(() => {
    setActiveImageIdx(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index, e) => {
    const isPortrait = e.target.naturalHeight > e.target.naturalWidth * 1.1;
    setImageOrientations((prev) => ({
      ...prev,
      [index]: isPortrait ? 'portrait' : 'landscape',
    }));
  };

  const images = project.images || [];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(3, 7, 18, 0.85)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '2rem',
          backgroundColor: '#0a0f1d',
          border: project.isConfidential
            ? '1px solid rgba(245, 158, 11, 0.35)'
            : '1px solid rgba(6, 182, 212, 0.35)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(6, 182, 212, 0.12)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: '#94a3b8',
            borderRadius: '8px',
            padding: '0.45rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#94a3b8';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem', paddingRight: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: project.isConfidential ? '#fbbf24' : '#38bdf8',
                background: project.isConfidential ? 'rgba(245, 158, 11, 0.12)' : 'rgba(6, 182, 212, 0.12)',
                padding: '0.2rem 0.65rem',
                borderRadius: '6px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              {project.isConfidential && <Lock size={12} />}
              {project.categoryLabel}
            </span>

            <span
              style={{
                fontSize: '0.75rem',
                color: project.isConfidential ? '#f59e0b' : '#34d399',
                background: project.isConfidential ? 'rgba(245, 158, 11, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                padding: '0.2rem 0.65rem',
                borderRadius: '6px',
                fontWeight: 600,
              }}
            >
              {project.badge}
            </span>

            {project.company && (
              <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                • {project.company}
              </span>
            )}
          </div>

          <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1.3 }}>
            {project.title}
          </h3>
        </div>

        {/* Confidential Security Notice for Company Projects */}
        {project.isConfidential && (
          <div
            style={{
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              background: 'rgba(245, 158, 11, 0.09)',
              border: '1px solid rgba(245, 158, 11, 0.28)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
            }}
          >
            <ShieldCheck size={20} style={{ color: '#fbbf24', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.25rem' }}>
                Proyek Enterprise / Bersifat Kredensial (NDA)
              </div>
              <p style={{ fontSize: '0.825rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                {project.confidentialNote}
              </p>
            </div>
          </div>
        )}

        {/* Project Screenshots / Image Gallery Preview */}
        {images.length > 0 && (
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h4 style={{ fontSize: '0.875rem', color: '#38bdf8', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ImageIcon size={16} />
                  <span>Tangkapan Layar Sistem ({images.length} Gambar)</span>
                </h4>
                {imageOrientations[activeImageIdx] && (
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: imageOrientations[activeImageIdx] === 'portrait' ? '#34d399' : '#38bdf8',
                      background: imageOrientations[activeImageIdx] === 'portrait' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(6, 182, 212, 0.12)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {imageOrientations[activeImageIdx] === 'portrait' ? '📱 Mobile View (Portrait)' : '💻 Web View (Landscape)'}
                  </span>
                )}
              </div>

              {images.length > 1 && (
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      style={{
                        padding: '0.25rem 0.65rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        border: activeImageIdx === idx ? '1px solid #06b6d4' : '1px solid rgba(255,255,255,0.1)',
                        background: activeImageIdx === idx ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255,255,255,0.04)',
                        color: activeImageIdx === idx ? '#38bdf8' : '#94a3b8',
                        transition: 'all 0.2s',
                      }}
                    >
                      Gambar {idx + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Display Active Image or Placeholder */}
            <div
              style={{
                width: '100%',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: '#04070f',
                overflow: 'hidden',
                minHeight: '220px',
                padding: imageOrientations[activeImageIdx] === 'portrait' ? '1.5rem 1rem' : '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {imageErrors[activeImageIdx] ? (
                /* Sleek Placeholder when user hasn't dropped the image file yet */
                <div
                  style={{
                    padding: '2.5rem 1.5rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.65rem',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#06b6d4',
                    }}
                  >
                    <ImageIcon size={24} />
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f1f5f9' }}>
                    Slot Gambar {activeImageIdx + 1}: Siap Menampilkan Screenshot
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#94a3b8', maxWidth: '420px', lineHeight: 1.5 }}>
                    Letakkan file screenshot Anda di folder <code style={{ color: '#06b6d4', background: 'rgba(6,182,212,0.1)', padding: '2px 6px', borderRadius: '4px' }}>public{images[activeImageIdx]}</code> untuk langsung memuat gambar otomatis.
                  </p>
                </div>
              ) : (
                <img
                  key={images[activeImageIdx]}
                  src={images[activeImageIdx]}
                  alt={`${project.title} Preview ${activeImageIdx + 1}`}
                  onError={() => handleImageError(activeImageIdx)}
                  onLoad={(e) => handleImageLoad(activeImageIdx, e)}
                  style={
                    imageOrientations[activeImageIdx] === 'portrait'
                      ? {
                          maxHeight: '480px',
                          width: 'auto',
                          maxWidth: '92%',
                          borderRadius: '16px',
                          border: '2px solid rgba(255, 255, 255, 0.15)',
                          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.85), 0 0 25px rgba(6, 182, 212, 0.18)',
                          objectFit: 'contain',
                          display: 'block',
                        }
                      : {
                          width: '100%',
                          height: 'auto',
                          maxHeight: '430px',
                          borderRadius: '8px',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.75)',
                          objectFit: 'contain',
                          display: 'block',
                        }
                  }
                />
              )}
            </div>
          </div>
        )}

        {/* Full Description */}
        <p style={{ fontSize: '0.98rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '1.5rem' }}>
          {project.fullDesc}
        </p>

        {/* Problem Solved Card */}
        {project.problemSolved && (
          <div
            style={{
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              background: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.35rem' }}>
              <AlertTriangle size={16} />
              <span>Tantangan yang Diselesaikan:</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#d1d5db', lineHeight: 1.55 }}>
              {project.problemSolved}
            </p>
          </div>
        )}

        {/* Architecture & Flow */}
        {project.architecture && (
          <div
            style={{
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              background: 'rgba(6, 182, 212, 0.08)',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.35rem' }}>
              <Layers size={16} />
              <span>Arsitektur & Solusi Sistem:</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.55 }}>
              {project.architecture}
            </p>
          </div>
        )}

        {/* Key Features List */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.9rem', color: '#f8fafc', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Cpu size={16} style={{ color: '#10b981' }} />
            <span>Fitur & Kapabilitas Unggulan:</span>
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.55rem' }}>
            {project.features.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: '#94a3b8' }}>
                <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)' }}>
            Teknologi & Modul:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div>
            {project.isConfidential ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#fbbf24' }}>
                <Lock size={14} />
                <span>Source Code Proprietary (Enterprise NDA)</span>
              </div>
            ) : (
              <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                Open-Source Project • Tersedia di GitHub
              </span>
            )}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {/* Show GitHub Link ONLY for personal projects that have a repository */}
            {!project.isConfidential && project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: '0.875rem' }}
              >
                <GithubIcon size={16} />
                <span>Lihat Repository GitHub</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="btn btn-secondary"
              style={{ fontSize: '0.875rem' }}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
