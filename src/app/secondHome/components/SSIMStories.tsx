import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    videoId: "huRs1xw8Cfc",
    alt: "Akshita - PGDM 2023 · KPMG",
    thumbnail: "https://img.youtube.com/vi/huRs1xw8Cfc/maxresdefault.jpg",
  },
  {
    videoId: "3zQr7bXzYek",
    alt: "Sarvesh Rathi - PGDM 2024 · Asian Paints",
    thumbnail: "https://img.youtube.com/vi/3zQr7bXzYek/maxresdefault.jpg",
  },
  {
    videoId: "waiRCPTGtro",
    alt: "Shubham Singh",
    thumbnail: "https://img.youtube.com/vi/waiRCPTGtro/maxresdefault.jpg",
  },
  {
    videoId: "SGFAi8MpnS4",
    alt: "Ayesha Begum",
    thumbnail: "https://img.youtube.com/vi/SGFAi8MpnS4/maxresdefault.jpg",
  },
  {
    videoId: "39XOoUacs9Q",
    alt: "Ann Jacob",
    thumbnail: "https://img.youtube.com/vi/39XOoUacs9Q/maxresdefault.jpg",
  },
  {
    videoId: "tbfW_5bGKm4",
    alt: "Gayatri Reddy - PGDM 2023 · Deloitte",
    thumbnail: "https://img.youtube.com/vi/tbfW_5bGKm4/maxresdefault.jpg",
  },
]

export default function SSIMStories() {
  return (
    <div className="w-full bg-blue px-[60px] py-[80px]">
      <div className="text-center mb-12">
        <span className="inline-block bg-sky/20 text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
          SSIM Stories
        </span>
        <h2 className="font-playfair text-white leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          Hear from Our Alumni
        </h2>
      </div>

      {/* Video Carousel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative aspect-video rounded-lg overflow-hidden shadow-xl group cursor-pointer"
          >
            <img
              src={slide.thumbnail}
              alt={slide.alt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red rounded-full flex items-center justify-center hover:bg-red/80 transition-colors">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm font-semibold">{slide.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}