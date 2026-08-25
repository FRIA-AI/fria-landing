import { useSite } from '../SiteContext';
import NextCard from '../components/NextCard';
import Logo from '../components/Logo';

export default function InteligenciaDeMercado() {
  const { t } = useSite();

  const rangeRows = [
    ['Monterrey → Laredo', 'Dry Van', '$27.4k', '$36.1k', '34'],
    ['CDMX → Querétaro', 'Dry Van', '$8.9k', '$12.4k', '22'],
    ['Chicago → CDMX', "53' Dry", '$74.0k', '$91.5k', '19'],
    ['Veracruz → CDMX', '40HC', '$26.1k', '$31.0k', '12'],
  ];
  const holdRows = [
    ['Carrier A', '+1.2%', 'var(--okbd)'], ['Carrier B', '+4.8%', 'var(--txt2)'],
    ['Carrier C', '+9.1%', 'var(--coral)'], ['Carrier D', '+12.6%', 'var(--coral)'],
  ];

  return (
    <>
      {/* FRAI */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(700px 400px at 80% 20%, var(--glow), transparent 70%)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '76px var(--content-pad-x) 8px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-2col)', gap: 56, alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: 'var(--page-h1-fs)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-.02em', textWrap: 'pretty' }}>{t.s4title}</div>
              <div style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--txt2)', marginTop: 20, textWrap: 'pretty' }}>{t.s4p1}</div>
              <div style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--txt2)', marginTop: 16, textWrap: 'pretty' }}>{t.s4p2}</div>
              <div style={{ display: 'flex', gap: 14, marginTop: 28 }}>
                <div style={{
                  flex: 1, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10,
                  padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 18, boxShadow: 'var(--cardshadow)',
                }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 30, fontWeight: 700, color: 'var(--okbd)', lineHeight: 1 }}>94.2%</div>
                  <div style={{ fontSize: 12.5, color: 'var(--txt3)', lineHeight: 1.5 }}>{t.s4stat}</div>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '26px 28px', boxShadow: 'var(--shadow)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'var(--txt3)', letterSpacing: '.08em' }}>{t.fraiCardHdr}</div>
                <Logo height={16} gap={2} barWidth={4} showWordmark={false} />
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 16 }}>Monterrey <span style={{ color: 'var(--accent)' }}>→</span> Laredo, TX</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'var(--txt3)', marginTop: 4 }}>DRY VAN</div>
              <div style={{ marginTop: 26 }}>
                <div style={{ position: 'relative', height: 8, borderRadius: 4, background: 'var(--cardsub)', border: '1px solid var(--border)' }}>
                  <div style={{ position: 'absolute', left: '26%', width: '44%', top: -1, bottom: -1, borderRadius: 4, background: 'var(--pillbg)', border: '1px solid var(--pillbd)' }} />
                  <div style={{ position: 'absolute', left: '44%', top: -7, width: 3, height: 20, borderRadius: 2, background: 'var(--okbd)' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'var(--txt3)' }}>
                  <div>$27,400</div>
                  <div style={{ color: 'var(--accent)' }}>{t.fraiRange}</div>
                  <div>$36,100</div>
                </div>
              </div>
              <div style={{ marginTop: 24, padding: '16px 18px', borderRadius: 10, background: 'var(--okbg)', border: '1px solid var(--okbd)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: 13, color: 'var(--txt)' }}>{t.fraiVerdictLbl}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 16, fontWeight: 700, color: 'var(--okbd)' }}>$29,500</div>
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--okbd)', marginTop: 6 }}>{t.fraiVerdict}</div>
              </div>
              <div style={{ fontSize: 12, lineHeight: 1.55, color: 'var(--txt3)', marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--border)' }}>{t.fraiFoot}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Intelligence */}
      <div style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '44px var(--content-pad-x) 88px' }}>
          <div style={{ height: 1, background: 'var(--border)', marginBottom: 44 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, fontWeight: 500, color: 'var(--accent)', letterSpacing: '.12em' }}>{t.s5eyebrow}</div>
            <div style={{ display: 'inline-flex', padding: '4px 11px', borderRadius: 20, border: '1px solid var(--border2)', fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: 'var(--txt2)', letterSpacing: '.05em' }}>{t.soon}</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-2col)', gap: 56, marginTop: 20, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 'var(--page-h1-fs)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-.02em', textWrap: 'pretty' }}>{t.s5title}</div>
              <div style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--txt2)', marginTop: 20, textWrap: 'pretty' }}>{t.s5p}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 26 }}>
                {[t.s5b1, t.s5b2, t.s5b3].map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--txt)' }}>
                    <span style={{ color: 'var(--accent)' }}>●</span> {b}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '24px 26px 20px', boxShadow: 'var(--shadow)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--txt)' }}>Monterrey → Laredo, TX · Dry Van</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'var(--txt3)', marginTop: 4 }}>{t.chartLbl}</div>
                </div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: 'var(--okbd)' }}>+3.8%</div>
              </div>
              <svg viewBox="0 0 520 190" style={{ width: '100%', height: 'auto', marginTop: 18, display: 'block' }}>
                <line x1="42" y1="16" x2="512" y2="16" stroke="var(--border)" strokeWidth="1" />
                <line x1="42" y1="58" x2="512" y2="58" stroke="var(--border)" strokeWidth="1" />
                <line x1="42" y1="100" x2="512" y2="100" stroke="var(--border)" strokeWidth="1" />
                <line x1="42" y1="142" x2="512" y2="142" stroke="var(--border)" strokeWidth="1" />
                <text x="0" y="20" fill="var(--txt4)" fontFamily="JetBrains Mono, monospace" fontSize="10">36k</text>
                <text x="0" y="62" fill="var(--txt4)" fontFamily="JetBrains Mono, monospace" fontSize="10">33k</text>
                <text x="0" y="104" fill="var(--txt4)" fontFamily="JetBrains Mono, monospace" fontSize="10">30k</text>
                <text x="0" y="146" fill="var(--txt4)" fontFamily="JetBrains Mono, monospace" fontSize="10">27k</text>
                <polygon points="60,118 135,104 210,112 285,80 360,66 435,74 500,44 500,142 60,142" fill="url(#friaGrad)" />
                <defs>
                  <linearGradient id="friaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4D8EFF" stopOpacity=".28" />
                    <stop offset="100%" stopColor="#4D8EFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline points="60,118 135,104 210,112 285,80 360,66 435,74 500,44" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                {[[60, 118], [135, 104], [210, 112], [285, 80], [360, 66], [435, 74]].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="3.5" fill="var(--card)" stroke="var(--accent)" strokeWidth="2" />
                ))}
                <circle cx="500" cy="44" r="4.5" fill="var(--accent)" />
                <text x="52" y="176" fill="var(--txt4)" fontFamily="JetBrains Mono, monospace" fontSize="10">FEB</text>
                <text x="127" y="176" fill="var(--txt4)" fontFamily="JetBrains Mono, monospace" fontSize="10">MAR</text>
                <text x="202" y="176" fill="var(--txt4)" fontFamily="JetBrains Mono, monospace" fontSize="10">ABR</text>
                <text x="277" y="176" fill="var(--txt4)" fontFamily="JetBrains Mono, monospace" fontSize="10">MAY</text>
                <text x="352" y="176" fill="var(--txt4)" fontFamily="JetBrains Mono, monospace" fontSize="10">JUN</text>
                <text x="427" y="176" fill="var(--txt4)" fontFamily="JetBrains Mono, monospace" fontSize="10">JUL</text>
                <text x="492" y="176" fill="var(--txt4)" fontFamily="JetBrains Mono, monospace" fontSize="10">AGO</text>
              </svg>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-2col)', gap: 16, marginTop: 32 }}>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '24px 26px', boxShadow: 'var(--cardshadow)' }}>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{t.miRangeTitle}</div>
              <div style={{ overflowX: 'auto' }}>
              <div style={{ minWidth: 460, display: 'grid', gridTemplateColumns: '1.5fr .7fr .8fr .8fr .5fr', padding: '14px 0 10px', borderBottom: '1px solid var(--border)', fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: 'var(--txt3)', letterSpacing: '.05em' }}>
                <div>{t.thRuta}</div><div>{t.thEquipo}</div><div style={{ textAlign: 'right' }}>{t.thMin}</div><div style={{ textAlign: 'right' }}>{t.thMax}</div><div style={{ textAlign: 'right' }}>{t.thCot}</div>
              </div>
              {rangeRows.map(([lane, eq, min, max, qty], i) => (
                <div key={i} style={{
                  minWidth: 460, display: 'grid', gridTemplateColumns: '1.5fr .7fr .8fr .8fr .5fr', padding: '12px 0',
                  borderBottom: i < rangeRows.length - 1 ? '1px solid var(--border)' : 'none', fontSize: 13, alignItems: 'center',
                }}>
                  <div>{lane}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--txt3)' }}>{eq}</div>
                  <div style={{ textAlign: 'right', fontFamily: "'JetBrains Mono',monospace", color: 'var(--okbd)' }}>{min}</div>
                  <div style={{ textAlign: 'right', fontFamily: "'JetBrains Mono',monospace", color: 'var(--txt2)' }}>{max}</div>
                  <div style={{ textAlign: 'right', fontFamily: "'JetBrains Mono',monospace", color: 'var(--txt2)' }}>{qty}</div>
                </div>
              ))}
              </div>
            </div>

            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '24px 26px', boxShadow: 'var(--cardshadow)' }}>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{t.miHoldTitle}</div>
              <div style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--txt3)', marginTop: 7 }}>{t.miHoldSub}</div>
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: 18 }}>
                {holdRows.map(([name, pct, color], i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 0', borderTop: '1px solid var(--border)' }}>
                    <div style={{ fontSize: 13.5 }}>{name}</div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color }}>{pct}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ fontSize: 11.5, color: 'var(--txt4)', marginTop: 18 }}>{t.sampleNote}</div>

          <NextCard to="/demo" labelKey="navDemo" marginTop={48} />
        </div>
      </div>
    </>
  );
}
