/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";

// Import images
const img1 = "/placement-logos/asian-paints.png";
const img2 = "/placement-logos/berkadia.png";
const img3 = "/placement-logos/codeyoung.png";
const img4 = "/placement-logos/deloitte.png";
const img5 = "/placement-logos/fact.png";
const img6 = "/placement-logos/godrej-jersey.png";
const img7 = "/placement-logos/itc.png";
const img8 = "/placement-logos/kpmg.png";
const img9 = "/placement-logos/me-plus.png";
const img10 = "/placement-logos/metrics.png";
const img11 = "/placement-logos/nestle.png";
const img12 = "/placement-logos/oxane.png";
const img13 = "/placement-logos/profectus-capital.png";
const img14 = "/placement-logos/zamoto.png";
const img15 = "/placement-logos/zudio.png";

const logos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

const LogoCard = ({ img }) => {
  return (
    <div className="flex justify-center items-center py-2 px-6 mx-4 bg-white dark:bg-gray-800 rounded-sm shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 group">
      <img
        src={img}
        alt="Company logo"
        className="h-16 w-auto object-contain rounded-sm filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
      />
    </div>
  );
};

const IndustryMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-8 rounded-sm bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.8))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      <Marquee className="py-8" gradientWidth={100} speed={100} pauseOnHover>
        {logos.map((logo, index) => (
          <LogoCard key={index} img={logo} />
        ))}
      </Marquee>
    </div>
  );
};

export default IndustryMarquee;
