import React, { useState } from 'react';
import { Sparkles, ArrowRight, ExternalLink, Eye, Layers, Lock, ShieldCheck, Briefcase, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'personal' | 'company'
  const [selectedProject, setSelectedProject] = useState(null);

  const personalProjects = projects.filter((p) => p.projectType === 'personal');
  const companyProjects = projects.filter((p) => p.projectType === 'company');

  const filteredProjects = activeTab === 'all'
    ? projects
    : activeTab === 'personal'
    ? personalProjects
    : companyProjects;

  return (
    <section
      id="projects"
      style={{
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Showcase Portofolio Rekayasa</span>
          <h2 className="section-title">
            Karya & <span className="text-gradient-cyan">Proyek Rekayasa</span>
          </h2>
          <p className="section-desc">
            Proyek mandiri unggulan dan proyek magang.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          <button
            onClick={() => setActiveTab('all')}
            style={{
              padding: '0.65rem 1.35rem',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
              border: activeTab === 'all' ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeTab === 'all' ? 'rgba(6, 182, 212, 0.16)' : 'rgba(15, 23, 42, 0.65)',
              color: activeTab === 'all' ? '#38bdf8' : '#94a3b8',
              boxShadow: activeTab === 'all' ? '0 0 16px rgba(6, 182, 212, 0.25)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>Semua Proyek</span>
            <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('personal')}
            style={{
              padding: '0.65rem 1.35rem',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
              border: activeTab === 'personal' ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeTab === 'personal' ? 'rgba(16, 185, 129, 0.16)' : 'rgba(15, 23, 42, 0.65)',
              color: activeTab === 'personal' ? '#34d399' : '#94a3b8',
              boxShadow: activeTab === 'personal' ? '0 0 16px rgba(16, 185, 129, 0.25)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Code2 size={16} />
            <span>Proyek Mandiri</span>
            <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>({personalProjects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('company')}
            style={{
              padding: '0.65rem 1.35rem',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
              border: activeTab === 'company' ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeTab === 'company' ? 'rgba(245, 158, 11, 0.16)' : 'rgba(15, 23, 42, 0.65)',
              color: activeTab === 'company' ? '#fbbf24' : '#94a3b8',
              boxShadow: activeTab === 'company' ? '0 0 16px rgba(245, 158, 11, 0.25)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Briefcase size={16} />
            <span>Proyek Magang / Perusahaan</span>
            <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>({companyProjects.length})</span>
          </button>
        </div>

        {/* Projects Grid - 2 cards per row */}
        <div className="grid-cards-2">
          {filteredProjects.map((proj) => {
            const isCompany = proj.projectType === 'company';

            return (
              <div
                key={proj.id}
                className="glass-card animate-fade-in"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2rem',
                  border: isCompany
                    ? '1px solid rgba(245, 158, 11, 0.18)'
                    : '1px solid rgba(6, 182, 212, 0.18)',
                }}
              >
                <div>
                  {/* Card Top Category & Confidentiality Badge */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '1rem',
                      gap: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: isCompany ? '#fbbf24' : '#38bdf8',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {isCompany ? <Briefcase size={13} /> : <Code2 size={13} />}
                      {proj.categoryLabel}
                    </span>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: isCompany ? '#f59e0b' : '#34d399',
                        background: isCompany ? 'rgba(245, 158, 11, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                        border: isCompany ? '1px solid rgba(245, 158, 11, 0.25)' : '1px solid rgba(16, 185, 129, 0.25)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {isCompany && <Lock size={10} />}
                      {proj.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.28rem',
                      fontWeight: 700,
                      color: '#f8fafc',
                      marginBottom: '0.65rem',
                      lineHeight: 1.35,
                    }}
                  >
                    {proj.title}
                  </h3>

                  {/* Company attribution if applicable */}
                  {proj.company && (
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{ color: '#06b6d4', fontWeight: 600 }}>{proj.company}</span>
                    </div>
                  )}

                  {/* Short Description */}
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#94a3b8',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {proj.shortDesc}
                  </p>

                  {/* Tech Pills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.45rem',
                      marginBottom: '1.75rem',
                    }}
                  >
                    {proj.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                    {proj.techStack.length > 4 && (
                      <span
                        className="tech-pill"
                        style={{ color: '#06b6d4', background: 'rgba(6, 182, 212, 0.1)' }}
                      >
                        +{proj.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                  }}
                >
                  {/* Pop Up Detail Trigger Button */}
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="btn btn-secondary btn-sm"
                    style={{
                      fontSize: '0.825rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      borderColor: isCompany ? 'rgba(245, 158, 11, 0.3)' : 'rgba(6, 182, 212, 0.3)',
                      color: isCompany ? '#fbbf24' : '#38bdf8',
                    }}
                  >
                    <Eye size={14} />
                    <span>Lihat Detail & Gambar</span>
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {/* If Personal Project and has GitHub repo: Show clickable button */}
                    {!proj.isConfidential && proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Buka Source Code di GitHub"
                        style={{
                          color: '#f8fafc',
                          padding: '0.45rem 0.65rem',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          fontSize: '0.78rem',
                          textDecoration: 'none',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#06b6d4';
                          e.currentTarget.style.background = 'rgba(6, 182, 212, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                        }}
                      >
                        <GithubIcon size={14} />
                        <span>GitHub</span>
                      </a>
                    )}

                    {/* If Company Project: Show NDA Badge */}
                    {proj.isConfidential && (
                      <span
                        title="Source code bersifat internal perusahaan"
                        style={{
                          fontSize: '0.75rem',
                          color: '#fbbf24',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(245, 158, 11, 0.08)',
                          padding: '0.35rem 0.55rem',
                          borderRadius: '6px',
                        }}
                      >
                        <Lock size={12} />
                        <span>NDA / Private</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Pop Up Component */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
