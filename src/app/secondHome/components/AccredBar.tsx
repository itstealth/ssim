const accreds = [
  { badge: 'AICTE', label: 'AICTE Approved' },
  { badge: 'NAAC', label: 'NAAC Accredited' },
  { badge: 'NBA', label: 'NBA for PGDM' },
  { badge: 'SAQS', label: 'SAQS Member', small: true },
  { badge: 'AACSB', label: 'AACSB Member', small: true },
  { badge: 'AIU', label: 'AIU Member' },
]

export default function AccredBar() {
  return (
    <div className="bg-sky px-[60px] py-[18px] flex items-center justify-center gap-9 flex-wrap">
      {accreds.map((a) => (
        <div key={a.label} className="flex items-center gap-[10px] font-bold text-[13px] text-navy">
          <div
            className="w-11 h-11 rounded-[10px] bg-navy text-white grid place-items-center font-extrabold text-center leading-[1.2] flex-shrink-0"
            style={{ fontSize: a.small ? '8px' : '9px' }}
          >
            {a.badge}
          </div>
          {a.label}
        </div>
      ))}
    </div>
  )
}
