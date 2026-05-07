export default function Ticker() {
  const items = [
    '🎓 Admissions Open 2026–2028 — Apply Now for PGDM, PGDM-BIFS, PGDM-BA & FPM/EFPM',
    '🏆 Ranked 2nd B-School in Telangana — Outlook & CSR Rankings 2025',
    '⭐ A+++ B-School by Business India 2024',
    '💼 AICTE Approved | NAAC | NBA Accredited | AACSB Member',
    '📅 Last Date: 30 June 2026 — Secure Your Seat Today!',
  ]

  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-[#1B50EC] text-white text-[13px] py-[7px] flex items-center overflow-hidden shadow-[0_10px_24px_rgba(16,34,105,0.12)]">
      <div className="bg-white/12 text-white px-[18px] py-[2px] font-bold whitespace-nowrap tracking-[0.5px] text-[12px] flex-shrink-0 uppercase backdrop-blur">
        🔔 Latest
      </div>
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="px-[50px]">{item}</span>
        ))}
      </div>
    </div>
  )
}
