import Image from 'next/image'

const faculty = [
  { img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop&facepad=3', name: 'Dr. Rajesh Kumar', role: 'Professor – Marketing', exp: '25+ Years · IIM Alumnus' },
  { img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop&facepad=3', name: 'Dr. Priya Sharma', role: 'Professor – Finance', exp: '20+ Years · FCA, PhD' },
  { img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&auto=format&fit=crop&facepad=3', name: 'Dr. Suresh Babu', role: 'Professor – Operations', exp: '18+ Years · PhD, IIT' },
  { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop&facepad=3', name: 'Dr. Meena Reddy', role: 'Professor – HR & OB', exp: '22+ Years · PhD' },
]

export default function Faculty() {
  return (
    <section id="faculty" className="bg-light px-[60px] py-[80px]">
      <div className="text-center">
        <span className="inline-block bg-sky text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
          Our Faculty
        </span>
        <h2 className="font-playfair text-navy leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          Learn from the Best
        </h2>
        <p className="text-[15px] text-gray leading-[1.75] max-w-[620px] mx-auto">
          Our distinguished faculty bring decades of academic and industry experience to shape tomorrow&apos;s leaders.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[22px] mt-[50px]">
        {faculty.map((f) => (
          <div
            key={f.name}
            className="bg-white rounded-[18px] overflow-hidden border border-border transition-all duration-300 hover:shadow-[0_12px_36px_rgba(16,34,105,0.12)] hover:-translate-y-1 group"
          >
            <Image
              src={f.img}
              alt={f.name}
              width={400}
              height={220}
              className="w-full h-[220px] object-cover object-top block transition-transform duration-[400ms] group-hover:scale-[1.04]"
            />
            <div className="p-[16px_18px]">
              <h3 className="text-[15px] font-bold text-navy mb-[3px]">{f.name}</h3>
              <div className="text-[12.5px] text-blue font-semibold mb-[3px]">{f.role}</div>
              <div className="text-[12px] text-gray">{f.exp}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
