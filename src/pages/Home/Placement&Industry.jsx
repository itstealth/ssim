import IndustryMarquee from "@/pages/Home/IndustryMarquee";
// import ImageSlider from "./ImageSlider";
// import StatsDashboard from "@/components/newMatrix/stats-dashboard";
import WordPullUp from "@/components/ui/word-pull-up";
import PlacementStories from "@/pages/Home/PlacementStories";
// const images = [placement1, placement2, placement3, placement4, placement5];

const PlacementIndustry = () => {
  return (
    <>
      {/* <div className="py-16 relative bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 text-gray-900"> */}
      <div className="py-16 relative bg-white text-gray-900">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(black 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <ImageSlider images={images} /> */}
            <PlacementStories />
          </div>
          {/* <div className="text-center">
            <WordPullUp
              words="Our Placement Partners"
              className="text-3xl md:text-4xl font-bold tracking-tight text-mainBlue mt-8 mb-0 md:mb-12"
            />
            <IndustryMarquee className="mt-6" />
          </div> */}

          {/* <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-white dark:bg-gray-900 text-lg font-medium text-gray-900 dark:text-white">
                Empowering Future Leaders
              </span>
            </div>
          </div>
          <StatsDashboard /> */}
        </div>
      </div>
      <div className="py-20 pt-10 relative bg-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
        {/* <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(black 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <WordPullUp
              words="Our Placement Partners"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-mainBlue mt-3 sm:mt-8 mb-12"
            />
            <IndustryMarquee className="mt-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacementIndustry;
