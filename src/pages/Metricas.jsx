import { useSite } from '../SiteContext';
import NextCard from '../components/NextCard';

function Bar({ label, value, width, color = 'var(--accent)' }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
        <span>{label}</span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", color: 'var(--txt2)' }}>{value}</span>
      </div>
      <div style={{ height: 9, borderRadius: 5, background: 'var(--cardsub)' }}>
        <div style={{ width, height: '100%', borderRadius: 5, background: color }} />
      </div>
    </div>
  );
}

export default function Metricas() {
  const { t } = useSite();

  const equipoData = [
    ['96', '100%', 'var(--accent)'], ['48', '50%', 'var(--accent2)'],
    ['28', '29%', 'var(--accent2)'], ['15', '16%', 'var(--accent3)'],
  ];
  const carrierRows = [
    ['Carrier A', '96%', '41%', 'var(--okbd)'], ['Carrier B', '88%', '24%', 'var(--txt2)'],
    ['Carrier C', '72%', '18%', 'var(--txt2)'], ['Carrier D', '54%', '9%', 'var(--txt2)'],
  ];

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--page-pad)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-2col)', gap: 56, alignItems: 'start' }}>
          <div style={{ fontSize: 'var(--page-h1-fs)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-.02em', textWrap: 'pretty' }}>{t.s7title}</div>
          <div style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--txt2)', textWrap: 'pretty' }}>{t.s7p}</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-4col)', gap: 16, marginTop: 44 }}>
          {[[t.m1l, '187'], [t.m2l, '6'], [t.m3l, '24'], [t.m4l, '$41,200']].map(([label, val], i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 11, padding: '20px 22px', boxShadow: 'var(--cardshadow)' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--txt3)', letterSpacing: '.05em', textTransform: 'uppercase' }}>{label}</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 28, fontWeight: 700, marginTop: 8, color: i === 3 ? 'var(--okbd)' : 'var(--txt)' }}>{val}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-2col)', gap: 16, marginTop: 16 }}>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '24px 26px', boxShadow: 'var(--cardshadow)' }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{t.chVend}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 20 }}>
              <Bar label="M. Salazar" value="68" width="100%" />
              <Bar label="R. Cantú" value="51" width="75%" />
              <Bar label="J. Villarreal" value="40" width="59%" color="var(--accent2)" />
              <Bar label="P. Escobedo" value="28" width="41%" color="var(--accent2)" />
            </div>
          </div>

          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '24px 26px', boxShadow: 'var(--cardshadow)' }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{t.chLanes}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 20 }}>
              <Bar label="Monterrey → Laredo" value="34" width="100%" />
              <Bar label="CDMX → Querétaro" value="22" width="65%" />
              <Bar label="Chicago → CDMX" value="19" width="56%" color="var(--accent2)" />
              <Bar label="Veracruz → CDMX" value="12" width="35%" color="var(--accent2)" />
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-2col)', gap: 16, marginTop: 16 }}>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '24px 26px', boxShadow: 'var(--cardshadow)' }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{t.chEquip}</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, height: 150, marginTop: 24 }}>
              {equipoData.map(([val, h, color], i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: 'var(--txt2)', marginBottom: 6 }}>{val}</div>
                  <div style={{ width: '100%', height: h, background: color, borderRadius: '4px 4px 0 0' }} />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 14, marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--border)' }}>
              {['DRY VAN', 'REEFER', '40HC', 'FLATBED'].map(l => (
                <div key={l} style={{ flex: 1, textAlign: 'center', fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: 'var(--txt3)' }}>{l}</div>
              ))}
            </div>
          </div>

          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '24px 26px', boxShadow: 'var(--cardshadow)' }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{t.chCarrier}</div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 14, overflowX: 'auto' }}>
              <div style={{ minWidth: 320, display: 'grid', gridTemplateColumns: '1.4fr .8fr .8fr', padding: '10px 0', borderBottom: '1px solid var(--border)', fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: 'var(--txt3)', letterSpacing: '.05em' }}>
                <div>{t.thCarrier}</div><div style={{ textAlign: 'right' }}>{t.thResp}</div><div style={{ textAlign: 'right' }}>{t.thWin}</div>
              </div>
              {carrierRows.map(([name, resp, win, winColor], i) => (
                <div key={i} style={{
                  minWidth: 320, display: 'grid', gridTemplateColumns: '1.4fr .8fr .8fr', padding: '12px 0',
                  borderBottom: i < carrierRows.length - 1 ? '1px solid var(--border)' : 'none',
                  fontSize: 13, alignItems: 'center',
                }}>
                  <div>{name}</div>
                  <div style={{ textAlign: 'right', fontFamily: "'JetBrains Mono',monospace", color: 'var(--txt2)' }}>{resp}</div>
                  <div style={{ textAlign: 'right', fontFamily: "'JetBrains Mono',monospace", color: winColor }}>{win}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-3col)', gap: 16, marginTop: 32 }}>
          {[[t.mf1t, t.mf1d], [t.mf2t, t.mf2d], [t.mf3t, t.mf3d]].map(([title, desc], i) => (
            <div key={i} style={{ padding: '20px 22px', border: '1px solid var(--border)', borderRadius: 11, background: 'var(--bg2)' }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{title}</div>
              <div style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--txt2)', marginTop: 7 }}>{desc}</div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 11.5, color: 'var(--txt4)', marginTop: 20 }}>{t.sampleNote}</div>

        <NextCard to="/inteligencia-de-mercado" labelKey="navIntel" marginTop={48} />
      </div>
    </div>
  );
}
