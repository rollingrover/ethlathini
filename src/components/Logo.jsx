export default function Logo({ size = 48, dark = false }) {
  const stroke = dark ? '#854F0B' : '#C4915A'
  const trunk  = dark ? '#854F0B' : '#C4915A'
  const leaf1  = '#3B6D11'
  const leaf2  = '#639922'
  const leaf3  = '#97C459'

  return (
    <svg width={size} height={size} viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ethlathini logo">
      <circle cx="45" cy="45" r="43" stroke={stroke} strokeWidth="1.2"/>
      {/* Central marula */}
      <rect x="43" y="38" width="4" height="34" rx="2" fill={trunk}/>
      <path d="M45 38 Q32 28 28 14 Q38 18 45 30" fill={leaf1}/>
      <path d="M45 38 Q58 28 62 14 Q52 18 45 30" fill={leaf1}/>
      <path d="M45 34 Q35 22 30 8 Q41 12 45 26"  fill={leaf2}/>
      <path d="M45 34 Q55 22 60 8 Q49 12 45 26"  fill={leaf2}/>
      <path d="M45 30 Q38 18 36 6 Q44 10 45 24"  fill={leaf3}/>
      <path d="M45 30 Q52 18 54 6 Q46 10 45 24"  fill={leaf3}/>
      {/* Left fig tree */}
      <rect x="27" y="48" width="3" height="14" rx="1.5" fill={trunk}/>
      <path d="M28.5 48 Q23 42 21 36 Q27 38 28.5 46" fill={leaf1}/>
      <path d="M28.5 48 Q34 42 36 36 Q30 38 28.5 46" fill={leaf1}/>
      <path d="M28.5 46 Q24 40 23 33 Q28 35 28.5 44" fill={leaf2}/>
      <path d="M28.5 46 Q33 40 34 33 Q29 35 28.5 44" fill={leaf2}/>
      {/* Right fig tree */}
      <rect x="59" y="48" width="3" height="14" rx="1.5" fill={trunk}/>
      <path d="M60.5 48 Q55 42 53 36 Q59 38 60.5 46" fill={leaf1}/>
      <path d="M60.5 48 Q66 42 68 36 Q62 38 60.5 46" fill={leaf1}/>
      <path d="M60.5 46 Q56 40 55 33 Q60 35 60.5 44" fill={leaf2}/>
      <path d="M60.5 46 Q65 40 66 33 Q61 35 60.5 44" fill={leaf2}/>
      {/* Path to gate */}
      <path d="M23 72 Q30 60 45 67 Q60 60 67 72" stroke={stroke} strokeWidth="1" fill="none" strokeDasharray="3 2"/>
    </svg>
  )
}
