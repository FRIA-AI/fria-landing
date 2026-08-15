import { useSite } from '../SiteContext';
import NextCard from '../components/NextCard';

export default function ComoFunciona() {
  const { t } = useSite();
  const steps = [
    ['01', t.p1t, t.p1d, t.p1k],
    ['02', t.p2t, t.p2d, t.p2k],
    ['03', t.p3t, t.p3d, t.p3k],
    ['04', t.p4t, t.p4d, t.p4k],
  ];

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--page-pad)' }}>
        <div style={{ fontSize: 'var(--page-h1-fs)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-.02em', maxWidth: 700, textWrap: 'pretty' }}>
          {t.s2title}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-4col)', gap: 16, marginTop: 48 }}>
          {steps.map(([num, title, desc, tag], i) => (
            <div key={i} style={{ padding: '26px 0 0', borderTop: '1px solid var(--border2)' }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 30, fontWeight: 700, color: 'var(--accent2)' }}>{num}</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 14 }}>{title}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.65, color: 'var(--txt2)', marginTop: 9 }}>{desc}</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'var(--accent)', marginTop: 14 }}>{tag}</div>
            </div>
          ))}
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'var(--grid-2col)', gap: 0, marginTop: 48, background: 'var(--card)',
          border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', boxShadow: 'var(--cardshadow)',
        }}>
          <div style={{ padding: '26px 28px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontSize: 12, color: 'var(--txt3)' }}>{t.cmp1l}</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 28, fontWeight: 700, color: 'var(--txt2)', marginTop: 8 }}>{t.cmp1v}</div>
          </div>
          <div style={{ padding: '26px 28px' }}>
            <div style={{ fontSize: 12, color: 'var(--accent3)' }}>{t.cmp2l}</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 28, fontWeight: 700, color: 'var(--accent)', marginTop: 8 }}>{t.cmp2v}</div>
          </div>
        </div>

        <NextCard to="/metricas" labelKey="navMet" />
      </div>
    </div>
  );
}
