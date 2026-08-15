import { useNavigate } from 'react-router-dom';
import { useSite } from '../SiteContext';

export default function NextCard({ to, labelKey, marginTop = 56 }) {
  const { t } = useSite();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(to)}
      role="link"
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter') navigate(to); }}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginTop, padding: '22px 26px', border: '1px solid var(--border)', borderRadius: 12,
        background: 'var(--card)', cursor: 'pointer', boxShadow: 'var(--cardshadow)',
      }}
    >
      <div>
        <div style={{ fontSize: 11.5, color: 'var(--txt3)', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '.06em' }}>
          {t.next}
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, marginTop: 5 }}>{t[labelKey]}</div>
      </div>
      <div style={{ fontSize: 22, color: 'var(--accent)' }}>→</div>
    </div>
  );
}
