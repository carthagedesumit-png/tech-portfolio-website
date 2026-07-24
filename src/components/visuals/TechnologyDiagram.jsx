const diagrams = {
  product: { nodes: [['POS', 90, 68], ['Stock', 270, 54], ['Reports', 440, 88], ['Procure', 188, 190], ['Stores', 380, 205]], center: 'CBOS' },
  engineering: { nodes: [['Apps', 92, 62], ['APIs', 275, 52], ['Cloud', 452, 82], ['Data', 120, 215], ['Security', 430, 220]], center: 'SYSTEM' },
  africa: { nodes: [['Context', 90, 80], ['Access', 270, 48], ['Scale', 458, 88], ['Quality', 135, 220], ['Ambition', 420, 218]], center: 'BUILD' },
};

export default function TechnologyDiagram({ variant = 'engineering', label }) {
  const diagram = diagrams[variant] || diagrams.engineering;
  return <svg viewBox="0 0 540 300" role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : 'true'} className="h-auto w-full"><defs><radialGradient id={`glow-${variant}`}><stop stopColor="#22d3ee" stopOpacity=".28" /><stop offset="1" stopColor="#020617" stopOpacity="0" /></radialGradient></defs><rect width="540" height="300" fill="#020617" /><circle cx="270" cy="150" r="145" fill={`url(#glow-${variant})`} /><g stroke="#164e63" strokeWidth="1.5">{diagram.nodes.map(([name, x, y]) => <line key={name} x1="270" y1="150" x2={x} y2={y} />)}</g><g><circle cx="270" cy="150" r="53" fill="#083344" stroke="#67e8f9" strokeWidth="2" /><circle cx="270" cy="150" r="68" fill="none" stroke="#22d3ee" strokeOpacity=".25" /><text x="270" y="156" textAnchor="middle" fill="#ecfeff" fontSize="17" fontWeight="800">{diagram.center}</text></g>{diagram.nodes.map(([name, x, y], index) => <g key={name}><rect x={x - 46} y={y - 22} width="92" height="44" rx="8" fill="#0f172a" stroke={index % 2 ? '#1e3a8a' : '#155e75'} /><circle cx={x - 30} cy={y} r="4" fill={index % 2 ? '#60a5fa' : '#22d3ee'} /><text x={x - 19} y={y + 5} fill="#cbd5e1" fontSize="12" fontWeight="700">{name}</text></g>)}</svg>;
}
