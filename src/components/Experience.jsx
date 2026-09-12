import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, ChevronRight } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Rekam Jejak Profesional</span>
          <h2 className="section-title">
            Pengalaman <span className="text-gradient-cyan">Kerja & Magang</span>
          </h2>
          <p className="section-desc">
            Pengalaman langsung di lingkungan industri mengembangkan sistem produksi nyata, arsitektur REST API terstruktur, dan pemrosesan data performa tinggi.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
          }}
        >
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '20px',
              width: '2px',
              background: 'linear-gradient(180deg, #06b6d4 0%, #3b82f6 50%, rgba(139, 92, 246, 0.2) 100%)',
              zIndex: 0,
            }}
            className="timeline-line"
          ></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="glass-card"
              style={{
                marginLeft: '0',
                padding: '2rem',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Header Info */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        background: 'rgba(6, 182, 212, 0.15)',
                        color: '#38bdf8',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {exp.role}
                    </span>
                    <span
                      style={{
                        background: 'rgba(16, 185, 129, 0.12)',
                        color: '#34d399',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <CheckCircle2 size={12} />
                      {exp.status}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.35rem' }}>
                    {exp.project}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                    <span style={{ fontWeight: 600, color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Briefcase size={14} style={{ color: '#06b6d4' }} />
                      {exp.company}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: 'rgba(15, 23, 42, 0.8)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.825rem',
                    color: '#94a3b8',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <Calendar size={13} style={{ color: '#06b6d4' }} />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                {exp.description}
              </p>

              {/* Bullet Contributions */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.875rem', color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                  Kontribusi & Deliverables:
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {exp.contributions.map((point, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.9rem',
                        color: '#94a3b8',
                        lineHeight: 1.55,
                      }}
                    >
                      <span
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: 'rgba(6, 182, 212, 0.15)',
                          color: '#06b6d4',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <ChevronRight size={13} />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', marginRight: '0.25rem' }}>Tech Utilized:</span>
                {exp.techStack.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
