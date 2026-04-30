import Image from 'next/image'
import Link from 'next/link'

const programs = [
  {
    title: 'PGDM',
    sub: 'Triple Specialisation · 2 Years · NBA Accredited',
    desc: "SSIM's two-year Post-Graduation Diploma in Management (PGDM) program is NBA accredited and uniquely designed to push our students to go beyond their boundaries to reach their aspirational careers. The program prepares students with cross-functional skills and life skills: Communication skills, Decision making, Leadership Skills, Problem-solving, Teamwork, Experiential Learning and several industry-relevant skills to face this VUCA world.",
    highlight: true,
    img: '/Home/Education.webp',
    link: '/programs/pgdm-triple-specialisation',
  },
  {
    title: 'PGDM – BIFS',
    sub: 'Banking, Insurance & Financial Services',
    desc: 'The Post-Graduation Diploma in Management – Banking, Insurance, and Financial Services (PGDM-BIFS) at Siva Sivani Institute of Management (SSIM) is designed to provide management graduates with in-depth knowledge of the Banking, Financial Services, and Insurance (BFSI) sectors. The program combines academic theory with practical learning, ensuring students are well-equipped for specialized roles in the industry.',
    img: '/Home/Labs.webp',
    link: '/programs/pgdm-bifs',
  },
  {
    title: 'PGDM – BA',
    sub: 'Business Analytics · Data-Driven Leadership',
    desc: 'Embark on a transformative journey with SSIMs Post Graduate Diploma in Management (PGDM – BA) in Business Analytics, meticulously crafted to mold future-ready business leaders adept in data-driven decision-making. Our industry-aligned curriculum encompasses Data Visualization, Machine Learning, Predictive Modelling, and Big Data Analytics.',
    img: '/Home/Placements.webp',
    link: '/programs/pgdm-ba',
  },
  {
    title: 'FPM / EFPM',
    sub: 'Fellow Program In Management',
    desc: 'Siva Sivani Institute of Management (SSIM) offers the Fellow Program in Management (FPM), approved by AICTE. The FPM is launched with the objective of developing outstanding scholars for careers in teaching and research. SSIM offers Full time Fellow Program in Management (FPM) for those pursuing academic excellence.',
    img: '/Home/Auditorium.webp',
    link: '/programs/fpm-efpm',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="bg-light px-[60px] py-[80px]">
      <div className="text-center">
        <span className="inline-block bg-sky/20 text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
          Academic Programs
        </span>
        <h2 className="font-playfair text-navy leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          World-Class Management Programs
        </h2>
        <p className="text-[15px] text-gray leading-[1.75] max-w-[620px] mx-auto">
          We train our students to master both the technical & management aspects of the business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[22px] mt-[50px]">
        {programs.map((p) => (
          <div
            key={p.title}
            className="bg-white rounded-[18px] overflow-hidden transition-all duration-300 shadow-[0_2px_12px_rgba(16,34,105,0.07)] border border-border hover:-translate-y-[6px] hover:shadow-[0_16px_40px_rgba(16,34,105,0.14)] group"
          >
            <div className="relative h-[160px] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="object-cover w-full h-full transition-transform duration-[400ms] group-hover:scale-[1.07]"
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-[14px]"
                style={{
                  background: p.highlight
                    ? 'linear-gradient(to bottom, rgba(27,80,236,.25), rgba(27,80,236,.82))'
                    : 'linear-gradient(to bottom, rgba(16,34,105,.25), rgba(16,34,105,.78))',
                }}
              >
                <h3 className="text-white text-[16px] font-bold mb-[2px]">{p.title}</h3>
                <span className="text-sky text-[11px]">{p.sub}</span>
              </div>
            </div>
            <div className="p-[16px_18px]">
              <p className="text-[12.5px] text-gray leading-[1.65] mb-[14px]">{p.desc}</p>
              <Link href={p.link} className="text-blue font-bold text-[13px] no-underline inline-flex items-center gap-[5px] transition-[gap] hover:gap-[10px]">
                Know More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}