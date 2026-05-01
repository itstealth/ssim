const accreds = [
  { badge: 'AICTE', label: 'AICTE Approved', img: '/about/aicte.png' },
  { badge: 'NAAC', label: 'NAAC Accredited', img: '/about/naac.png' },
  { badge: 'NBA', label: 'NBA for PGDM', img: '/about/NBA-logo.png' },
  { badge: 'SAQS', label: 'SAQS Accredited', img: '/about/SAQS-Accredited-Logo.jpg' },
  { badge: 'AACSB', label: 'AACSB Member', img: '/about/AACSB.jpeg' },
  { badge: 'AIU', label: 'AIU Member', img: '/about/aiu-header.png' },
  { badge: 'III', label: 'III Accredited', img: '/about/III.png' },
]

export default function AccredBar() {
  return (
    <div className="bg-sky px-[60px] py-[18px] flex items-center justify-center gap-9 flex-wrap">
      {accreds.map((a) => (
        <div key={a.label} className="flex items-center gap-[10px] font-bold text-[13px] text-navy">
          <div className="w-11 h-11 rounded-[10px] bg-blue-200 grid place-items-center overflow-hidden flex-shrink-0">
            <img src={a.img} alt={a.badge} className="w-9 h-9 object-contain" />
          </div>
          {a.label}
        </div>
      ))}
    </div>
  )
}
