import React, { useState } from 'react';
import { Terminal, Copy, Check, RefreshCw, Sparkles } from 'lucide-react';
import { mockApiEndpoints } from '../data/apiMockData';

export default function ApiTerminal() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseTime, setResponseTime] = useState(24);

  const currentEndpoint = mockApiEndpoints[activeIdx];

  const handleSelectEndpoint = (index) => {
    if (index === activeIdx) return;
    setIsLoading(true);
    setActiveIdx(index);
    const fakeTime = Math.floor(Math.random() * 20) + 14;
    setTimeout(() => {
      setResponseTime(fakeTime);
      setIsLoading(false);
    }, 160);
  };

  const handleCopy = () => {
    const textToCopy = JSON.stringify(currentEndpoint.response, null, 2);
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Syntax highlighting for JSON
  const renderFormattedJson = (jsonObj) => {
    const jsonStr = JSON.stringify(jsonObj, null, 2);
    return jsonStr.split('\n').map((line, i) => {
      const isKey = line.includes('":');
      if (isKey) {
        const parts = line.split('":');
        return (
          <div key={i} style={{ lineHeight: '1.55', wordBreak: 'break-word' }}>
            <span style={{ color: '#38bdf8' }}>{parts[0]}"</span>
            <span style={{ color: '#94a3b8' }}>: </span>
            <span style={{ color: parts[1].includes('"') ? '#34d399' : '#fbbf24' }}>
              {parts.slice(1).join('":')}
            </span>
          </div>
        );
      }
      return (
        <div key={i} style={{ color: '#cbd5e1', lineHeight: '1.55', wordBreak: 'break-word' }}>
          {line}
        </div>
      );
    });
  };

  return (
    <div
      className="terminal-container"
      style={{
        borderRadius: '16px',
        background: 'rgba(8, 12, 22, 0.94)',
        border: '1px solid rgba(6, 182, 212, 0.25)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(6, 182, 212, 0.12)',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)',
        width: '100%',
        maxWidth: '640px',
        position: 'relative',
      }}
    >
      {/* Terminal Window Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.65rem 1rem',
          background: 'rgba(15, 23, 42, 0.85)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', minWidth: 0 }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
          </div>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginLeft: '0.35rem', display: 'flex', alignItems: 'center', gap: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <Terminal size={12} style={{ color: '#06b6d4', flexShrink: 0 }} />
            <span className="terminal-title">api.ajaymaulana.dev/console</span>
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          <span
            style={{
              fontSize: '0.7rem',
              color: '#34d399',
              background: 'rgba(16, 185, 129, 0.12)',
              padding: '0.2rem 0.45rem',
              borderRadius: '4px',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10b981' }}></span>
            200 OK ({responseTime}ms)
          </span>

          <button
            onClick={handleCopy}
            title="Salin Respons JSON"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: copied ? '#34d399' : '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px 6px',
              borderRadius: '4px',
              transition: 'all 0.2s',
            }}
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
          </button>
        </div>
      </div>

      {/* Endpoint Selector Tabs (Responsive Grid/Wrap) */}
      <div
        className="terminal-tabs-wrapper"
        style={{
          background: 'rgba(11, 17, 32, 0.75)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          padding: '0.5rem 0.65rem',
        }}
      >
        <div className="terminal-tabs-grid">
          {mockApiEndpoints.map((ep, idx) => {
            const isActive = idx === activeIdx;
            const isPost = ep.method === 'POST';
            return (
              <button
                key={ep.endpoint}
                onClick={() => handleSelectEndpoint(idx)}
                className={`terminal-tab-btn ${isActive ? 'active' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.5rem',
                  borderRadius: '6px',
                  border: isActive
                    ? '1px solid rgba(6, 182, 212, 0.45)'
                    : '1px solid rgba(255, 255, 255, 0.05)',
                  background: isActive ? 'rgba(6, 182, 212, 0.16)' : 'rgba(15, 23, 42, 0.5)',
                  color: isActive ? '#f8fafc' : '#94a3b8',
                  cursor: 'pointer',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  transition: 'all 0.2s',
                  width: '100%',
                }}
              >
                <span
                  style={{
                    color: isPost ? '#f59e0b' : '#38bdf8',
                    fontWeight: 700,
                    fontSize: '0.68rem',
                  }}
                >
                  {ep.method}
                </span>
                <span className="tab-desktop-text">{ep.endpoint}</span>
                <span className="tab-mobile-text">{ep.shortEndpoint || ep.endpoint}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Terminal Code Body */}
      <div
        style={{
          padding: '1rem',
          maxHeight: '320px',
          overflowY: 'auto',
          overflowX: 'auto',
          fontSize: 'clamp(0.74rem, 1.8vw, 0.82rem)',
          position: 'relative',
        }}
      >
        {isLoading ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              color: '#06b6d4',
              height: '160px',
            }}
          >
            <RefreshCw size={16} className="animate-spin" />
            <span>Memuat response...</span>
          </div>
        ) : (
          <div>
            <div style={{ color: '#64748b', marginBottom: '0.65rem', fontSize: '0.7rem' }}>
              // Status: 200 OK • content-type: application/json
            </div>
            {renderFormattedJson(currentEndpoint.response)}
          </div>
        )}
      </div>

      {/* Terminal Footer Indicator */}
      <div
        className="terminal-footer"
        style={{
          padding: '0.55rem 1rem',
          background: 'rgba(15, 23, 42, 0.75)',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.72rem',
          color: '#64748b',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8' }}>
          <Sparkles size={12} style={{ color: '#06b6d4', flexShrink: 0 }} />
          <span>Interactive Console • Klik tab untuk live test</span>
        </span>
        <span style={{ color: '#06b6d4', fontWeight: 600, fontSize: '0.7rem' }}>
          FastAPI & Express Engine
        </span>
      </div>

      {/* Scoped CSS for responsive terminal tabs & text */}
      <style>{`
        .tab-desktop-text {
          display: none;
        }
        .tab-mobile-text {
          display: inline;
        }
        .terminal-tabs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.4rem;
        }

        @media (min-width: 640px) {
          .terminal-tabs-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .tab-desktop-text {
            display: inline;
          }
          .tab-mobile-text {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .terminal-title {
            font-size: 0.7rem;
          }
          .terminal-container {
            border-radius: 12px;
          }
        }
      `}</style>
    </div>
  );
}
