export default function TopBar() {
  return (
    <div className="bg-sky px-[60px] py-2 flex justify-between items-center text-[12.5px] text-navy gap-5 flex-wrap">
      <div className="flex gap-6 flex-wrap">
        <a href="tel:+914027165451" className="text-navy font-medium no-underline hover:text-blue transition-colors">📞 040-2716 5451</a>
        <a href="tel:+919391114948" className="text-navy font-medium no-underline hover:text-blue transition-colors">📱 +91 93911 14948</a>
        <a href="mailto:admissions@ssim.ac.in" className="text-navy font-medium no-underline hover:text-blue transition-colors">✉ admissions@ssim.ac.in</a>
        <a href="#" className="text-navy font-medium no-underline hover:text-blue transition-colors">📍 NH 44, Kompally, Secunderabad – 500100</a>
      </div>
      <div className="flex gap-[10px]">
        {[['f','Facebook'],['𝕏','X'],['in','LinkedIn'],['▶','YouTube'],['✦','Instagram']].map(([icon, title]) => (
          <a
            key={title}
            href="#"
            title={title}
            className="w-7 h-7 rounded-full bg-navy text-white grid place-items-center text-[11px] no-underline font-bold transition-colors hover:bg-blue"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  )
}
