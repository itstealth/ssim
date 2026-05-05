const stats = [
  { num: '35', sup: '+', label: 'Years of Excellence' },
  { num: '350', sup: '+', label: 'Corporate Partners' },
  { num: '6,500', sup: '+', label: 'Alumni Network' },
  { num: '50', sup: '+', label: 'New-Age Specialisations' },
  { num: '9', sup: '', label: 'Certification Programs' },
]

export default function StatsBanner() {
  return (
    <div
      className="px-4 lg:px-[60px] py-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 text-center gap-8 lg:gap-6"
      style={{
        background: 'linear-gradient(135deg, #1B50EC, #0e3bbf)',
      }}
    >
      {stats.map((s, i) => (
        <div 
          key={s.label} 
          className={`text-white ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
        >
          <span className="font-playfair text-[42px] font-extrabold leading-none block mb-[6px]">
            {s.num}<sup className="text-[22px]">{s.sup}</sup>
          </span>
          <p className="text-[11.5px] text-sky uppercase tracking-[0.6px] font-semibold">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
