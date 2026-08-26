import { useSite } from '../SiteContext';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

export default function Home() {
  const { t } = useSite();
  const navigate = useNavigate();
  const appUrl = import.meta.env.VITE_APP_URL || 'https://www.friaai.com';

  return (
    <>
      <SEO
        title="Cotizador de flete terrestre con IA"
        description="FRIA cotiza transporte terrestre dentro de tu correo: manda el RFQ a tus carriers, lee sus respuestas y entrega la cotización de venta lista para el cliente. Para brokers de carga y forwarders en México y MX-US."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'FRIA',
            alternateName: 'Freight Rate Intelligence Agent',
            url: 'https://www.friaai.com',
            description: 'Plataforma de cotización de flete terrestre e inteligencia de mercado para brokers de carga, freight forwarders, y operadores logísticos en México y el corredor MX-US.',
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'FRIA',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            description: 'FRIA automatiza la cotización de transporte terrestre: envía el RFQ a los carriers, interpreta sus respuestas, y genera la cotización de venta con margen aplicado.',
            url: 'https://www.friaai.com',
          })}
        </script>
      </Helmet>
      <div style={{ position: 'relative', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(900px 480px at 18% -10%, var(--glow), transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div style={{
          position: 'relative', maxWidth: 1200, margin: '0 auto', padding: 'var(--hero-pad)',
          display: 'grid', gridTemplateColumns: 'var(--hero-grid)', gap: 64, alignItems: 'center',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 9, padding: '6px 14px', borderRadius: 20,
              border: '1px solid var(--pillbd)', background: 'var(--pillbg)',
              fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 500,
              color: 'var(--accent2)', letterSpacing: '.04em',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--okbd)', display: 'inline-block' }} />
              {t.badge}
            </div>
            <div style={{ fontSize: 'var(--hero-fs)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-.025em', marginTop: 26, textWrap: 'pretty' }}>
              {t.h1a}<br />{t.h1b}<br /><span style={{ color: 'var(--accent)' }}>{t.h1c}</span>{t.h1d}
            </div>
            <div style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--txt2)', marginTop: 22, maxWidth: 520, textWrap: 'pretty' }}>
              {t.heroSub}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
              <a href={appUrl} style={{
                display: 'inline-flex', alignItems: 'center', height: 50, padding: '0 28px', borderRadius: 9,
                background: 'var(--btnbg)', color: 'var(--btntxt)', fontSize: 15, fontWeight: 700, textDecoration: 'none',
              }}>
                {t.ctaArrow}
              </a>
              <button onClick={() => navigate('/como-funciona')} style={{
                display: 'inline-flex', alignItems: 'center', height: 50, padding: '0 24px', borderRadius: 9,
                border: '1px solid var(--border2)', color: 'var(--txt)', fontSize: 15, fontWeight: 600,
                cursor: 'pointer', background: 'transparent', fontFamily: "'Inter',Arial,sans-serif",
              }}>
                {t.heroCta2}
              </button>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 28, marginTop: 38, paddingTop: 26, flexWrap: 'wrap',
              borderTop: '1px solid var(--border)',
            }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 22, fontWeight: 700, color: 'var(--txt)' }}>2 min</div>
                <div style={{ fontSize: 11.5, color: 'var(--txt3)', marginTop: 3 }}>{t.stat1}</div>
              </div>
              <div style={{ width: 1, height: 36, background: 'var(--border2)' }} />
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 22, fontWeight: 700, color: 'var(--okbd)' }}>94.2%</div>
                <div style={{ fontSize: 11.5, color: 'var(--txt3)', marginTop: 3 }}>{t.stat2}</div>
              </div>
              <div style={{ width: 1, height: 36, background: 'var(--border2)' }} />
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 22, fontWeight: 700, color: 'var(--txt)' }}>87%</div>
                <div style={{ fontSize: 11.5, color: 'var(--txt3)', marginTop: 3 }}>{t.stat3}</div>
              </div>
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--txt4)', marginTop: 14 }}>{t.heroNote}</div>
          </div>

          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, boxShadow: 'var(--shadow)', overflow: 'hidden' }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px',
              borderBottom: '1px solid var(--border)', background: 'var(--cardsub)',
            }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'var(--txt3)', letterSpacing: '.05em' }}>
                {t.liveHdr}
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: 'var(--okbd)' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--okbd)', display: 'inline-block' }} />
                {t.liveResp}
              </div>
            </div>
            <div style={{ padding: '22px 20px 20px' }}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>Monterrey <span style={{ color: 'var(--accent)' }}>→</span> Laredo, TX</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, color: 'var(--txt3)', marginTop: 5 }}>{t.liveMeta}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 18 }}>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 15px',
                  borderRadius: 9, background: 'var(--okbg)', border: '1px solid var(--okbd)',
                }}>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--txt)' }}>Carrier A</div>
                    <div style={{ fontSize: 11, color: 'var(--okbd)', marginTop: 2 }}>{t.rec}</div>
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 17, fontWeight: 700, color: 'var(--okbd)' }}>$29,500</div>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 15px',
                  borderRadius: 9, background: 'var(--cardsub)', border: '1px solid var(--border)',
                }}>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--txt)' }}>Carrier B</div>
                    <div style={{ fontSize: 11, color: 'var(--txt3)', marginTop: 2 }}>{t.quoted}</div>
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 17, fontWeight: 600, color: 'var(--txt)' }}>$31,200</div>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 15px',
                  borderRadius: 9, background: 'var(--cardsub)', border: '1px solid var(--border)',
                }}>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--txt)' }}>Carrier C</div>
                    <div style={{ fontSize: 11, color: 'var(--coral)', marginTop: 2 }}>{t.restricted}</div>
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 17, fontWeight: 600, color: 'var(--txt2)' }}>$33,100</div>
                </div>
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 18,
                paddingTop: 16, borderTop: '1px solid var(--border)',
              }}>
                <div style={{ fontSize: 12, color: 'var(--txt3)' }}>{t.marginLbl}</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 15, fontWeight: 700, color: 'var(--accent)' }}>$33,040</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px var(--content-pad-x)' }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, fontWeight: 500, color: 'var(--accent)', letterSpacing: '.12em' }}>
            {t.exploreEyebrow}
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-.02em', marginTop: 16 }}>{t.exploreTitle}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-3col)', gap: 16, marginTop: 36 }}>
            {[
              ['/que-es', 'navQue', 'exQue'],
              ['/como-funciona', 'navComo', 'exComo'],
              ['/metricas', 'navMet', 'exMet'],
              ['/inteligencia-de-mercado', 'navIntel', 'exIntel'],
              ['/demo', 'navDemo', 'exDemo'],
            ].map(([path, titleKey, descKey]) => (
              <div
                key={path}
                onClick={() => navigate(path)}
                role="link" tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter') navigate(path); }}
                style={{
                  background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 11,
                  padding: 24, cursor: 'pointer', boxShadow: 'var(--cardshadow)',
                }}
              >
                <div style={{ fontSize: 17, fontWeight: 700 }}>{t[titleKey]}</div>
                <div style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--txt2)', marginTop: 8 }}>{t[descKey]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
