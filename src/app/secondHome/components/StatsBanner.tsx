import { secondHomeTheme } from '../theme'

const stats = [
  { num: '34', sup: '+', label: 'Years of Excellence' },
  { num: '350', sup: '+', label: 'Corporate Partners' },
  { num: '6,500', sup: '+', label: 'Alumni Network' },
  { num: '50', sup: '+', label: 'New-Age Specialisations' },
  { num: '9', sup: '', label: 'Certification Programs' },
]

export default function StatsBanner() {
  return (
    <div
      className={`px-4 lg:px-[60px] py-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 text-center gap-8 lg:gap-6 ${secondHomeTheme.shellMuted}`}
      style={{
        backgroundBlendMode: 'screen',
      }}
    >
      {stats.map((s, i) => (
        <div 
          key={s.label} 
          className={`relative ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
        >
          <div className="absolute inset-x-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-purple-400/10 blur-2xl" />
          <span className="font-playfair text-[42px] font-extrabold leading-none block mb-[6px]">
            <span className="text-slate-900">{s.num}</span><sup className="text-[22px] text-[#1B50EC]">{s.sup}</sup>
          </span>
          <p className="text-[11.5px] text-purple-700 uppercase tracking-[0.6px] font-semibold">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
