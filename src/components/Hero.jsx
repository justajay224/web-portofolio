import React from 'react';
import { ArrowRight, Mail, MessageSquare, Award, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '8rem',
        paddingBottom: '4rem',
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          {/* Top Pill Badges */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>Open for Opportunities & Collaboration</span>
            </div>
            <div className="glow-tag mono">
              <span>GPA: 3.74 / 4.00</span>
            </div>
          </div>

          {/* Main Headline */}
          <div>
            <p
              className="mono"
              style={{
                color: '#06b6d4',
                fontSize: '0.95rem',
                fontWeight: 600,
                marginBottom: '0.65rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Halo, Saya Ajay Maulana
            </p>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
              }}
            >
              Membangun <span className="text-gradient-cyan">Sistem</span> dan <span className="text-gradient-emerald">Dukungan Teknis</span>.
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: '#94a3b8',
                lineHeight: 1.75,
                maxWidth: '740px',
                margin: '0 auto',
              }}
            >
              Lulusan Sistem Informasi dengan pengalaman sebagai backend developer. Saya berpengalaman dalam membuat API menggunakan <strong>FastAPI</strong> dan <strong>Express.js</strong> berbasis arsitektur microservices. Saya juga memiliki kemampuan praktis dalam troubleshooting perangkat keras (PC dan printer) secara mandiri. Saya adaptif, bisa menempatkan diri, dan dapat bekerja dengan tim maupun mandiri.
            </p>
          </div>

          {/* Quick Tech Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', alignItems: 'center', maxWidth: '640px' }}>
            <span style={{ fontSize: '0.825rem', color: '#64748b', marginRight: '0.25rem' }}>Core Stack:</span>
            {['FastAPI', 'Node.js', 'Express.js', 'Laravel', 'React', 'PostgreSQL', 'MySQL'].map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', paddingTop: '0.5rem' }}>
            <a href="#projects" className="btn btn-primary">
              <span>Jelajahi Proyek</span>
              <ArrowRight size={17} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <MessageSquare size={17} />
              <span>Hubungi Saya</span>
            </a>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', paddingTop: '0.25rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Connect:</span>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#94a3b8', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalInfo.socials.email}
              style={{ color: '#94a3b8', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#10b981')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
