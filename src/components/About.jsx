import React from 'react';
import { GraduationCap, Award, MapPin, CheckCircle2, BookOpen, Compass, Code2, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const { education } = personalInfo;

  return (
    <section
      id="about"
      style={{
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Latar Belakang & Pendidikan</span>
          <h2 className="section-title">
            Tentang <span className="text-gradient-cyan">Ajay Maulana</span>
          </h2>
          <p className="section-desc">
            Dedikasi tinggi terhadap rekayasa perangkat lunak backend, pengembangan sistem terdistribusi, serta penggabungan solusi berbasis kecerdasan buatan.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative & Engineering Mindset */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(6, 182, 212, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#06b6d4',
                  }}
                >
                  <Code2 size={20} />
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc' }}>
                  Profil
                </h3>
              </div>

              <p style={{ fontSize: '0.98rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Saya adalah lulusan Sistem Informasi dari <strong>Universitas Teknologi Yogyakarta</strong> yang memiliki antusiasme pada backend architecture, desain database relasional, dan microservices, sekaligus memiliki kemampuan troubleshooting dan optimalisasi hardware.
              </p>

              <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Selama dua kali periode magang di <strong>PT. Gama Integra Informatika</strong>, saya terbiasa bertanggung jawab langsung pada pembuatan API service file object menggunakan <strong>FastAPI</strong>, pembangunan endpoint bisnis menggunakan <strong>Express.js</strong>, serta visualisasi data analitik untuk laporan manajemen.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Mengutamakan penulisan endpoint REST API yang terstruktur dan aman',
                  'Desain skema basis data ternormalisasi di PostgreSQL & MySQL',
                  'Familiar dengan frontend modern (React.js & Vue.js) untuk integrasi full-stack'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                <MapPin size={15} style={{ color: '#06b6d4' }} />
                <span>Berdomisili di Jakarta, Indonesia</span>
              </div>
              <span className="mono" style={{ fontSize: '0.82rem', color: '#64748b' }}>
                Lahir: 15 April 2004
              </span>
            </div>
          </div>

          {/* Right Column: Education & Academic Honors */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              boxShadow: '0 10px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(16, 185, 129, 0.08)',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981',
                    }}
                  >
                    <GraduationCap size={22} />
                  </span>
                  <div>
                    <span className="mono" style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 600 }}>
                      PENDIDIKAN FORMAL
                    </span>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc' }}>
                      {education.institution}
                    </h3>
                  </div>
                </div>

                <div
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#34d399',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                  }}
                >
                  <Award size={14} />
                  <span>IPK {education.gpa} / 4.00</span>
                </div>
              </div>

              {/* Major & Period */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.25rem' }}>
                  {education.degree} – {education.major}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  {education.period} • {education.status}
                </div>
              </div>

              {/* Academic Highlights */}
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  marginBottom: '1.5rem',
                }}
              >
                <h4 style={{ fontSize: '0.85rem', color: '#38bdf8', marginBottom: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>
                  Fokus Studi & Kompetensi Utama:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.5rem' }}>
                  {[
                    'Sistem Basis Data Terdistribusi',
                    'Arsitektur Rekayasa Perangkat Lunak',
                    'Analisis & Perancangan Sistem',
                    'Keamanan & RESTful API',
                    'Pemrograman Berorientasi Objek',
                    'E-Business & Manajemen TI'
                  ].map((subject, idx) => (
                    <div key={idx} style={{ fontSize: '0.82rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#06b6d4' }}></span>
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Language Proficiency */}
              <div>
                <h4 style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)' }}>
                  Penguasaan Bahasa:
                </h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ padding: '0.45rem 0.85rem', borderRadius: '6px', background: 'rgba(30, 41, 59, 0.6)', fontSize: '0.82rem', color: '#cbd5e1' }}>
                    <strong>Bahasa Indonesia:</strong> Native
                  </div>
                  <div style={{ padding: '0.45rem 0.85rem', borderRadius: '6px', background: 'rgba(30, 41, 59, 0.6)', fontSize: '0.82rem', color: '#cbd5e1' }}>
                    <strong>English:</strong> Pre-Intermediate (Technical)
                  </div>
                </div>
              </div>
            </div>

            {/* Media Production Skill Note */}
            <div
              style={{
                marginTop: '1.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.8rem',
                color: '#94a3b8',
              }}
            >
              <span style={{ color: '#f1f5f9', fontWeight: 600 }}>Perangkat Tambahan: </span>
              Ms. Excel, Ms. Word, Adobe Premiere Pro, Filmora, CapCut (Media & Data Documentation).
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
