/* eslint-disable react/prop-types */

import BannerNav from "@/sections/Header/BannerNav";
import TopBar from "@/sections/Header/TopBar";

export default function Header({ className }) {
  return (
    <header className={`font-sans ${className}`}>
      <TopBar />
      <BannerNav />
    </header>
  );
}
