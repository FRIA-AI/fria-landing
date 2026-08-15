export default function Logo({ height = 22, gap = 3, barWidth = 6, showWordmark = true }) {
  const heights = [0.40, 0.65, 1.00, 0.80, 0.55];
  const colors = ['var(--logoedge)', 'var(--accent2)', 'var(--accent)', 'var(--accent3)', 'var(--logoedge)'];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap, height }}>
        {heights.map((h, i) => (
          <div key={i} style={{
            width: barWidth, height: `${h * 100}%`, background: colors[i], borderRadius: 1,
          }} />
        ))}
      </div>
      {showWordmark && (
        <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-.01em', color: 'var(--txt)' }}>FRIA</div>
      )}
    </div>
  );
}
