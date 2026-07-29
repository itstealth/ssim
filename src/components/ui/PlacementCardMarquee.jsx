import { memo } from "react";
import Marquee from "@/components/ui/marquee";

export default memo(function PlacementCardMarquee({ children }) {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee
        reverse
        pauseOnHover
        className="[--duration:40s] py-4 sm:py-8 [--gap:1.5rem]"
        style={{ transform: "translateZ(0)" }}
      >
        {children}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-[12%] sm:w-[15%] bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[12%] sm:w-[15%] bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
    </div>
  );
});
