import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-subtitle">Mari Terhubung</span>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Mulai <span className="text-gradient-cyan">Diskusi & Kolaborasi</span>
          </h2>
        </div>

        {/* Centered Cards Container */}
        <div
          style={{
            maxWidth: '620px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {/* Email Card */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#06b6d4',
                }}
              >
                <Mail size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Email</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc' }}>
                  {personalInfo.email}
                </div>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="btn btn-secondary btn-sm"
              title="Salin Alamat Email"
            >
              {copiedEmail ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
              <span>{copiedEmail ? 'Tersalin' : 'Salin'}</span>
            </button>
          </div>

          {/* GitHub Profile Card */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f8fafc',
                }}
              >
                <GithubIcon size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Profil GitHub</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc' }}>
                  github.com/justajay224
                </div>
              </div>
            </div>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="Buka Profil GitHub Ajay Maulana"
            >
              <span>Kunjungi</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Location & Status Info */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
              <MapPin size={17} style={{ color: '#06b6d4' }} />
              <span>Domisili: Jakarta, Indonesia</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
              <Sparkles size={17} style={{ color: '#10b981' }} />
              <span>Status: Full-time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
