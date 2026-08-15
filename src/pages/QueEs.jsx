import { useSite } from '../SiteContext';
import NextCard from '../components/NextCard';

export default function QueEs() {
  const { t } = useSite();

  const cards = [
    ['RFQ', t.c1t, t.c1d],
    [t.c2k, t.c2t, t.c2d],
    [t.c3k, t.c3t, t.c3d],
    [t.c4k, t.c4t, t.c4d],
  ];

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--page-pad)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-2col)', gap: 56, alignItems: 'start' }}>
          <div style={{ fontSize: 'var(--page-h1-fs)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-.02em', textWrap: 'pretty' }}>
            {t.s1title}
          </div>
          <div style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--txt2)', textWrap: 'pretty' }}>
            {t.s1p1}<br /><br />{t.s1p2}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-4col)', gap: 16, marginTop: 52 }}>
          {cards.map(([kicker, title, desc], i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 11, padding: 22, boxShadow: 'var(--cardshadow)' }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'var(--accent)', letterSpacing: '.08em' }}>{kicker}</div>
              <div style={{ fontSize: 15.5, fontWeight: 700, marginTop: 12 }}>{title}</div>
              <div style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--txt2)', marginTop: 8 }}>{desc}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 64, paddingTop: 44, borderTop: '1px solid var(--border)' }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, fontWeight: 500, color: 'var(--accent)', letterSpacing: '.12em' }}>
            {t.s3eyebrow}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-2col)', gap: 56, marginTop: 18, alignItems: 'start' }}>
            <div style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-.02em', textWrap: 'pretty' }}>
              {t.s3t1}<span style={{ color: 'var(--accent)' }}>{t.s3t2}</span>{t.s3t3}<span style={{ color: 'var(--accent)' }}>{t.s3t4}</span>{t.s3t5}
            </div>
            <div style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--txt2)', textWrap: 'pretty' }}>{t.s3p}</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-3col)', gap: 16, marginTop: 36 }}>
            {[[t.d1t, t.d1d], [t.d2t, t.d2d], [t.d3t, t.d3d]].map(([title, desc], i) => (
              <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 11, padding: 24, boxShadow: 'var(--cardshadow)' }}>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{title}</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.65, color: 'var(--txt2)', marginTop: 10 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <NextCard to="/como-funciona" labelKey="navComo" />
      </div>
    </div>
  );
}
