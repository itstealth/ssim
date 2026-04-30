"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Aditya Datta",
    role: "Executive Director",
    company: "JPMC",
    text: "Inspiring leadership qualities. Always pushes the team forward with innovative solutions and creative problem-solving approaches.",
    rating: 5,
    avatar: "/user_images/aditya.jpg",
  },
  {
    name: "Akshata Dani",
    role: "Technical Writer Specialist",
    company: "GOC",
    text: "Excellent commitment and creativity. The attention to detail and fresh perspective brings new life to every project we collaborate on.",
    rating: 4,
    avatar: "/user_images/daniaskhata.jpg",
  },
  {
    name: "Itha Lakshmipathi",
    role: "AVP & Global Head - HR",
    company: "Prodapt",
    text: "Reliable and punctual in every project. A true professional who consistently delivers outstanding results on time.",
    rating: 5,
    avatar: "/user_images/Itha.jpg",
  },
  {
    name: "Jaideep Avasarala",
    role: "Talent Acquisition Leader",
    company: "Microsoft",
    text: "An amazing communicator who always keeps the team informed. Her ability to connect with clients is unmatched.",
    rating: 4,
    avatar: "/user_images/jaideep.jpg",
  },
  {
    name: "Niraj Kumar Rana",
    role: "EVP & Head of Sales",
    company: "Naukri",
    text: "Brings incredible data insights to every project. His analytical skills and attention to detail make all the difference.",
    rating: 5,
    avatar: "/user_images/niraj.jpg",
  },
  {
    name: "Parameshwar N",
    role: "Vice-President Customer Engagement",
    company: "SBI",
    text: "An extraordinary thinker who knows how to capture the essence of our brand in every piece of content.",
    rating: 5,
    avatar: "/user_images/Parameshwar.jpg",
  },
  {
    name: "Swapnil Bhele",
    role: "Assistant Vice President",
    company: "Citi",
    text: "A quick problem solver who always finds efficient and scalable solutions. A great team player.",
    rating: 4,
    avatar: "/user_images/swapnil.jpg",
  },
  {
    name: "Umesh Golecha",
    role: "Director",
    company: "Innova",
    text: "Her designs are always fresh and creative, perfectly capturing the essence of every project.",
    rating: 5,
    avatar: "/user_images/Umesh.jpeg",
  },
  {
    name: "Ankit Bhadauriya",
    role: "National Key Account Manager",
    company: "Dabur",
    text: "Has a knack for making our systems run smoothly. A key player in maintaining our infrastructure.",
    rating: 4,
    avatar: "/user_images/Ankit.jpeg",
  },
  {
    name: "Venkatesh Dixit",
    role: "Presales Consultant",
    company: "Cognizant",
    text: "Consistently delivers exceptional results in improving our online presence and driving organic traffic.",
    rating: 5,
    avatar: "/user_images/Venkatesh.jpeg",
  },
];

const companyLogos = {
  JPMC: "/Home/jpmc-logo.svg",
  GOC: "/user_images/goc.png",
  Microsoft: "/Home/microsoft.png",
  Naukri: "/Home/naukri.svg",
  SBI: "/Home/SBI_Logo.png",
  Citi: "/Home/citi-logo.svg",
  Prodapt: "/Home/prodapt.svg",
  Dabur: "/Home/dabur.png",
  Cognizant: "/Home/cognizant.svg",
  Innova: "/Home/innova-logo.svg",
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 px-[60px] py-[80px]">
      <div className="text-center">
        <span className="inline-block bg-sky/20 text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
          Alumni Testimonials
        </span>
        <h2 className="font-playfair text-navy leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          What Our Students Say
        </h2>
        <p className="text-[15px] text-gray leading-[1.75] max-w-[620px] mx-auto">
          Hear from the leaders who transformed their careers at SSIM.
        </p>
      </div>

      {/* Circular Alumni Section */}
      <div className="max-w-7xl mx-auto mt-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {/* Left - Circular Image Carousel */}
          <div className="md:col-span-2 flex justify-center items-center relative h-[20rem]">
            <div className="relative flex justify-center items-center">
              {testimonials.map((t, index) => {
                const isActive = index === activeIndex;
                const anglePerImage = 360 / testimonials.length;
                const circleRadius = "9rem";

                if (isActive) {
                  return (
                    <div
                      key={index}
                      className="absolute w-36 h-36 rounded-full overflow-hidden shadow-xl border-4 border-white"
                      style={{ zIndex: 10 }}
                    >
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  );
                }
                return null;
              })}

              {/* Surrounding circle */}
              <div className="absolute w-64 h-64">
                {testimonials.map((t, index) => {
                  if (index === activeIndex) return null;
                  const anglePerImage = 360 / (testimonials.length - 1);
                  const angle = anglePerImage * index;
                  const radians = (angle - 90) * Math.PI / 180;
                  const x = Math.cos(radians) * 8 + 8;
                  const y = Math.sin(radians) * 8 + 8;

                  return (
                    <div
                      key={index}
                      className="absolute w-16 h-16 rounded-full overflow-hidden shadow-lg cursor-pointer border-2 border-white/50 hover:border-white transition-all"
                      style={{
                        left: `${x}rem`,
                        top: `${y}rem`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onClick={() => setActiveIndex(index)}
                    >
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right - Testimonial Content */}
          <div className="md:col-span-3 text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${i < activeTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
              &quot;{activeTestimonial.text}&quot;
            </p>
            <div className="flex items-center gap-4">
              <img
                src={companyLogos[activeTestimonial.company]}
                alt={activeTestimonial.company}
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-800">{activeTestimonial.name}</p>
              <p className="text-sm text-gray-500">{activeTestimonial.role}</p>
            </div>

            {/* Navigation */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <button
                onClick={() => setActiveIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setActiveIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}