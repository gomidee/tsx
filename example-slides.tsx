import React from "react";

export default function Slides() {
  return (
    <>
      {/* ── Slide 1: Title ── */}
      <div style={{
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#fff', fontFamily: 'system-ui, sans-serif',
        padding: 60,
      }}>
        <div style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 4, color: '#f0c040', marginBottom: 16 }}>
          Q4 2025 Review
        </div>
        <h1 style={{ fontSize: 48, fontWeight: 800, textAlign: 'center', lineHeight: 1.2, margin: 0 }}>
          Strategic Growth Update
        </h1>
        <p style={{ fontSize: 18, color: '#94a3b8', marginTop: 16 }}>
          Prepared by Finance Team · December 2025
        </p>
      </div>

      {/* ── Slide 2: Key Metrics ── */}
      <div style={{
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        background: '#fff', color: '#1e293b',
        fontFamily: 'system-ui, sans-serif',
        padding: 60,
      }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 40, borderBottom: '3px solid #f0c040', paddingBottom: 12, display: 'inline-block' }}>
          Key Metrics
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, flex: 1 }}>
          {[
            { label: 'Revenue', value: '$4.2M', change: '+18%', color: '#10b981' },
            { label: 'New Clients', value: '127', change: '+24%', color: '#10b981' },
            { label: 'Retention', value: '94.5%', change: '+2.1%', color: '#10b981' },
          ].map((m, i) => (
            <div key={i} style={{
              background: '#f8fafc', borderRadius: 12, padding: 32,
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              border: '1px solid #e2e8f0',
            }}>
              <div style={{ fontSize: 14, color: '#64748b', marginBottom: 8 }}>{m.label}</div>
              <div style={{ fontSize: 36, fontWeight: 800 }}>{m.value}</div>
              <div style={{ fontSize: 14, color: m.color, marginTop: 8, fontWeight: 600 }}>{m.change} YoY</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Slide 3: Priorities ── */}
      <div style={{
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#fff', fontFamily: 'system-ui, sans-serif',
        padding: 60,
      }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 40, color: '#f0c040' }}>
          2026 Priorities
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1 }}>
          {[
            { num: '01', title: 'Expand APAC Operations', desc: 'Open 3 new regional offices by Q2' },
            { num: '02', title: 'AI-Driven Analytics Platform', desc: 'Launch v2.0 with predictive modeling' },
            { num: '03', title: 'Talent Acquisition', desc: 'Hire 40+ engineers across all teams' },
            { num: '04', title: 'Carbon Neutral by 2026', desc: 'Complete sustainability roadmap' },
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#f0c040', minWidth: 40 }}>{p.num}</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>{p.title}</div>
                <div style={{ fontSize: 14, color: '#94a3b8', marginTop: 4 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Slide 4: Thank You ── */}
      <div style={{
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: '#f0c040', color: '#0f172a',
        fontFamily: 'system-ui, sans-serif',
        padding: 60,
      }}>
        <h1 style={{ fontSize: 56, fontWeight: 900, marginBottom: 16 }}>Thank You</h1>
        <p style={{ fontSize: 20, opacity: 0.7 }}>Questions? Reach out to the Finance team.</p>
      </div>
    </>
  );
}
