const stats = [
  { num: '32', sup: '+', label: 'Years of Excellence' },
  { num: '300', sup: '+', label: 'Corporate Partners' },
  { num: '30K', sup: '+', label: 'Alumni Network' },
  { num: '₹30L', sup: '+', label: 'Highest Package' },
  { num: '5', sup: '+', label: 'New-Age Specialisations' },
]

export default function StatsBanner() {
  return (
    <div
      className="px-[60px] py-14 grid text-center gap-6"
      style={{
        background: 'linear-gradient(135deg, #1B50EC, #0e3bbf)',
        gridTemplateColumns: 'repeat(5, 1fr)',
      }}
    >
      {stats.map((s) => (
        <div key={s.label} className="text-white">
          <span className="font-playfair text-[42px] font-extrabold leading-none block mb-[6px]">
            {s.num}<sup className="text-[22px]">{s.sup}</sup>
          </span>
          <p className="text-[11.5px] text-sky uppercase tracking-[0.6px] font-semibold">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
