import React from 'react';
import { 
  Server, Layout, Database, Sparkles, Cpu, Layers, Code, 
  Smartphone, Eye, Globe, Palette, HardDrive, FolderArchive, 
  Network, Box, CheckCircle2, GitBranch, Share2, Zap, Key
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Dynamic Icon resolver
const getSkillIcon = (iconName) => {
  const iconProps = { size: 18, style: { color: '#06b6d4' } };
  switch (iconName) {
    case 'Zap': return <Zap {...iconProps} style={{ color: '#38bdf8' }} />;
    case 'Key': return <Key {...iconProps} style={{ color: '#ef4444' }} />;
    case 'Server': return <Server {...iconProps} style={{ color: '#10b981' }} />;
    case 'Cpu': return <Cpu {...iconProps} style={{ color: '#38bdf8' }} />;
    case 'Layers': return <Layers {...iconProps} style={{ color: '#f43f5e' }} />;
    case 'Code': return <Code {...iconProps} style={{ color: '#fbbf24' }} />;
    case 'Smartphone': return <Smartphone {...iconProps} style={{ color: '#a855f7' }} />;
    case 'Layout': return <Layout {...iconProps} style={{ color: '#06b6d4' }} />;
    case 'Eye': return <Eye {...iconProps} style={{ color: '#10b981' }} />;
    case 'Globe': return <Globe {...iconProps} style={{ color: '#38bdf8' }} />;
    case 'Palette': return <Palette {...iconProps} style={{ color: '#ec4899' }} />;
    case 'Database': return <Database {...iconProps} style={{ color: '#3b82f6' }} />;
    case 'HardDrive': return <HardDrive {...iconProps} style={{ color: '#f59e0b' }} />;
    case 'FolderArchive': return <FolderArchive {...iconProps} style={{ color: '#8b5cf6' }} />;
    case 'Network': return <Network {...iconProps} style={{ color: '#06b6d4' }} />;
    case 'Sparkles': return <Sparkles {...iconProps} style={{ color: '#a855f7' }} />;
    case 'Box': return <Box {...iconProps} style={{ color: '#3b82f6' }} />;
    case 'CheckCircle2': return <CheckCircle2 {...iconProps} style={{ color: '#f97316' }} />;
    case 'GitBranch': return <GitBranch {...iconProps} style={{ color: '#ef4444' }} />;
    case 'Share2': return <Share2 {...iconProps} style={{ color: '#10b981' }} />;
    default: return <Code {...iconProps} />;
  }
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Teknologi dan <span className="text-gradient-cyan">Skill</span>
          </h2>
        </div>

        {/* Skill Category Cards - 2 cards per row (2x2 grid) */}
        <div className="grid-cards-2">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(6, 182, 212, 0.12)',
                      border: '1px solid rgba(6, 182, 212, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {idx === 0 && <Server size={18} style={{ color: '#06b6d4' }} />}
                    {idx === 1 && <Layout size={18} style={{ color: '#10b981' }} />}
                    {idx === 2 && <Database size={18} style={{ color: '#3b82f6' }} />}
                    {idx === 3 && <Sparkles size={18} style={{ color: '#a855f7' }} />}
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc' }}>
                    {category.category}
                  </h3>
                </div>

                <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  {category.description}
                </p>

                {/* Skills Grid within Category */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '8px',
                        background: 'rgba(15, 23, 42, 0.65)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        transition: 'var(--transition-smooth)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.3)';
                        e.currentTarget.style.background = 'rgba(15, 23, 42, 0.95)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.background = 'rgba(15, 23, 42, 0.65)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        {getSkillIcon(skill.icon)}
                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f1f5f9' }}>
                          {skill.name}
                        </span>
                      </div>

                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: '#94a3b8',
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(255, 255, 255, 0.04)',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '6px',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
